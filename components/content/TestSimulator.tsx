'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { ChevronRight, RotateCcw, CheckCircle2, XCircle, Info, Trophy, ShieldCheck, Scale, FileText, BookOpen, Car, AlertCircle, Shield } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer?: string;
  correct?: number; // Index-based correct answer
  guidance?: string;
  explanation?: string;
  category?: string; // Question-specific category
  icon?: React.ReactNode; // Question-specific icon
}

interface TestSimulatorProps {
  questions: Question[];
  category: string;
  passMark?: number;
}

// Helper to shuffle array
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export default function TestSimulator({ questions: initialQuestions, category, passMark = 75 }: TestSimulatorProps) {
  const { data: session } = useSession();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentStep, setCurrentStep] = useState('welcome');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState<any[]>([]);
  const [startTime, setStartTime] = useState<number>(0);
  const [isSaving, setIsSaving] = useState(false);
  const [hasStoredProgress, setHasStoredProgress] = useState(false);
  const [storedData, setStoredData] = useState<any>(null);

  // Initialize test or check for existing progress
  useEffect(() => {
    const storageKey = `spsv_sim_v1_${category}`;
    const saved = localStorage.getItem(storageKey);
    
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.questions && parsed.questions.length > 0) {
          setStoredData(parsed);
          setHasStoredProgress(true);
        }
      } catch (e) {
        console.error("Failed to parse stored progress", e);
      }
    }

    if (initialQuestions.length > 0 && !saved) {
      const processed = initialQuestions.map((q: any) => {
        let correctAnswerString = '';
        if (typeof q.correct === 'number' && q.options[q.correct]) {
          correctAnswerString = q.options[q.correct];
        } else if (q.correctAnswer) {
          correctAnswerString = q.correctAnswer;
        }

        const shuffledOptions = shuffleArray(q.options);
        const newCorrectIndex = shuffledOptions.indexOf(correctAnswerString);

        return {
          ...q,
          options: shuffledOptions,
          correct: newCorrectIndex,
          correctAnswer: correctAnswerString
        };
      });
      
      setQuestions(shuffleArray(processed));
    }
  }, [initialQuestions, category]);

  // Save progress logic
  useEffect(() => {
    if (currentStep === 'quiz' && questions.length > 0) {
      const storageKey = `spsv_sim_v1_${category}`;
      const dataToSave = {
        questions,
        currentIndex,
        score,
        history,
        startTime,
        timestamp: Date.now()
      };
      localStorage.setItem(storageKey, JSON.stringify(dataToSave));
    }
  }, [currentStep, currentIndex, score, history, questions, category, startTime]);

  const handleStart = () => {
    const storageKey = `spsv_sim_v1_${category}`;
    localStorage.removeItem(storageKey);
    
    setCurrentStep('quiz');
    setCurrentIndex(0);
    setScore(0);
    setHistory([]);
    setSelectedOption(null);
    setIsLocked(false);
    setStartTime(Date.now());
    
    // Re-initialize questions for a fresh start
    if (initialQuestions.length > 0) {
      const processed = initialQuestions.map((q: any) => {
        let correctAnswerString = '';
        if (typeof q.correct === 'number' && q.options[q.correct]) {
          correctAnswerString = q.options[q.correct];
        } else if (q.correctAnswer) {
          correctAnswerString = q.correctAnswer;
        }
        const shuffledOptions = shuffleArray(q.options);
        const newCorrectIndex = shuffledOptions.indexOf(correctAnswerString);
        return {
          ...q,
          options: shuffledOptions,
          correct: newCorrectIndex,
          correctAnswer: correctAnswerString
        };
      });
      setQuestions(shuffleArray(processed));
    }
  };

  const handleResume = () => {
    if (storedData) {
      setQuestions(storedData.questions);
      setCurrentIndex(storedData.currentIndex);
      setScore(storedData.score);
      setHistory(storedData.history);
      setStartTime(storedData.startTime || Date.now());
      setCurrentStep('quiz');
      setHasStoredProgress(false);
    }
  };

  const handleStartFresh = () => {
    setHasStoredProgress(false);
    handleStart();
  };

  const handleOptionSelect = (idx: number) => {
    if (isLocked) return;
    setSelectedOption(idx);
    setIsLocked(true);

    const currentQ = questions[currentIndex];
    let isCorrect = false;
    
    if (typeof currentQ.correct === 'number') {
      isCorrect = idx === currentQ.correct;
    } else if (currentQ.correctAnswer) {
      isCorrect = currentQ.options[idx] === currentQ.correctAnswer;
    }
    
    if (isCorrect) setScore(s => s + 1);
    
    setHistory([...history, { 
      questionId: currentQ.id, 
      isCorrect, 
      selected: idx 
    }]);
  };

  const handleNext = async () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsLocked(false);
    } else {
      setCurrentStep('result');
      if (session?.user) {
        await saveResult();
      }
      localStorage.removeItem(`spsv_sim_v1_${category}`);
    }
  };

  const saveResult = async () => {
    if (!session?.user) return;
    setIsSaving(true);
    try {
      const timeSpentSeconds = Math.floor((Date.now() - startTime) / 1000);
      await fetch('/api/results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category,
          score,
          totalQuestions: questions.length,
          timeSpentSeconds,
        }),
      });
    } catch (error) {
      console.error('Error saving result:', error);
    } finally {
      setIsSaving(false);
    }
  };

  // Icon mapping based on category string to avoid passing JSX from Server Components
  const getIcon = (q?: Question) => {
    if (!q) return <FileText className="w-5 h-5" />;
    const cat = q.category?.toLowerCase() || '';
    if (cat.includes('regulation')) return <Scale className="w-5 h-5" />;
    if (cat.includes('licensing')) return <Info className="w-5 h-5" />;
    if (cat.includes('compliance')) return <AlertCircle className="w-5 h-5" />;
    if (cat.includes('industry')) return <BookOpen className="w-5 h-5" />;
    if (cat.includes('safety')) return <Shield className="w-5 h-5" />;
    if (cat.includes('operation') || cat.includes('vehicle')) return <Car className="w-5 h-5" />;
    return <FileText className="w-5 h-5" />;
  };

  // No early return for empty questions here, to allow Resume Modal to show

  const currentQ = questions[currentIndex];
  const percentage = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
  const passed = percentage >= passMark;

  return (
    <div className="max-w-4xl mx-auto w-full bg-white shadow-2xl overflow-hidden border-2 border-[#003057] rounded-sm transition-all duration-300">
      
      {/* TOP STATUS BAR (Prometric Style) */}
      <div className="bg-[#003057] p-4 text-white flex items-center justify-between border-b-4 border-[#99cc33]">
        <div className="flex items-center gap-4">
          <div className="bg-white p-1 rounded-sm">
            <ShieldCheck className="w-5 h-5 text-[#003057]" />
          </div>
          <div>
            <h1 className="text-sm font-black uppercase tracking-tight">SPSV Knowledge Hub</h1>
            <p className="text-[10px] text-[#99cc33] font-bold">INDUSTRY STUDY & PRACTICE</p>
          </div>
        </div>
        <div className="flex items-center gap-6 text-[11px] font-mono">
           <div className="hidden md:block">
             <span className="opacity-60 block uppercase">Session ID</span>
             <span className="font-bold">SKILL-STUDY-01</span>
           </div>
           <div className="text-right">
             <span className="opacity-60 block uppercase">Status</span>
             <span className="font-bold text-[#99cc33] uppercase">{currentStep}</span>
           </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 md:p-10 min-h-[500px] relative">
        {/* Resume Modal */}
        {hasStoredProgress && (
          <div className="absolute inset-0 z-50 flex items-center justify-center p-6 md:p-10 bg-white/95 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="max-w-md w-full bg-white border-2 border-[#003057] p-8 shadow-2xl rounded-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#99cc33] p-2 rounded-sm">
                  <RotateCcw className="w-6 h-6 text-[#003057]" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-[#003057]">Resume Session?</h3>
              </div>
              
              <p className="text-sm text-slate-600 font-medium mb-8 leading-relaxed">
                We found an incomplete practice session for <span className="font-bold text-[#003057]">{category}</span>. 
                Would you like to continue from question <span className="font-bold">{(storedData?.currentIndex || 0) + 1}</span> or start a new assessment?
              </p>
              
              <div className="grid gap-3">
                <button 
                  onClick={handleResume}
                  className="w-full py-4 bg-[#003057] text-white font-black uppercase tracking-widest rounded-sm hover:bg-black transition-all border-b-4 border-black/20"
                >
                  Resume Assessment
                </button>
                <button 
                  onClick={handleStartFresh}
                  className="w-full py-4 border-2 border-slate-200 text-slate-400 hover:text-red-600 hover:border-red-600 font-black uppercase tracking-widest rounded-sm transition-all text-xs"
                >
                  Start Fresh
                </button>
              </div>
            </div>
          </div>
        )}
        {currentStep === 'welcome' && (
          <div className="max-w-2xl mx-auto space-y-8 py-6">
            <div className="border-l-8 border-[#99cc33] pl-6 py-2">
              <h2 className="text-4xl font-black text-[#003057] leading-tight italic uppercase">
                ENHANCE YOUR <br/> INDUSTRY KNOWLEDGE
              </h2>
              <p className="text-slate-500 mt-2 font-medium">{category} Study Session</p>
            </div>
            
            <div className="bg-slate-50 p-6 border border-slate-200 rounded-sm">
              <h4 className="font-black text-xs uppercase tracking-widest text-[#003057] mb-4">Session Goals</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="flex items-start gap-3">
                   <Info className="w-5 h-5 text-[#003057] mt-0.5" />
                   <p className="text-sm">Minimum {passMark}% score required to pass.</p>
                 </div>
                 <div className="flex items-start gap-3">
                   <Scale className="w-5 h-5 text-[#003057] mt-0.5" />
                    <p className="text-sm">Based on the SPSV Industry Handbook for drivers.</p>
                 </div>
              </div>
            </div>

            <button 
              onClick={handleStart}
              className="w-full py-6 bg-[#99cc33] hover:bg-[#86b32d] text-[#003057] font-black uppercase tracking-[0.2em] rounded-sm transition-all shadow-md active:scale-[0.98] border-b-4 border-[#76a125]"
            >
              Start Practice Session
            </button>
          </div>
        )}

        {currentStep === 'quiz' && (
          questions.length === 0 ? (
            <div className="flex items-center justify-center p-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-[#003057]"></div>
            </div>
          ) : (
          <div className="space-y-8">
            {/* Question Header */}
            <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#003057] text-white p-2 rounded-sm">
                  {getIcon(currentQ)}
                </div>
                <span className="font-black uppercase text-xs tracking-widest">{currentQ.category || category}</span>
              </div>
              <div className="font-mono text-sm font-bold bg-slate-100 px-3 py-1 rounded-sm border border-slate-200">
                Question {currentIndex + 1} / {questions.length}
              </div>
            </div>

            {/* Question Body */}
            <div className="py-2">
              <h3 className="text-2xl font-bold text-[#003057] leading-tight">
                {currentQ.question}
              </h3>
            </div>

            {/* Options A, B, C, D */}
            <div className="grid grid-cols-1 gap-4">
              {currentQ.options.map((option, idx) => {
                const letter = String.fromCharCode(65 + idx);
                const isCorrect = typeof currentQ.correct === 'number' 
                  ? idx === currentQ.correct 
                  : option === currentQ.correctAnswer;
                const isSelected = selectedOption === idx;
                
                let containerClass = "w-full text-left flex items-stretch border-2 rounded-sm transition-all group overflow-hidden ";
                let letterBoxClass = "w-14 flex items-center justify-center font-black text-xl border-r-2 ";

                if (!isLocked) {
                  containerClass += "border-slate-200 bg-white hover:border-[#003057]";
                  letterBoxClass += "bg-slate-50 border-slate-200 group-hover:bg-[#003057] group-hover:text-white group-hover:border-[#003057]";
                } else {
                  if (isCorrect) {
                    containerClass += "border-[#99cc33] bg-[#f7fff0]";
                    letterBoxClass += "bg-[#99cc33] border-[#99cc33] text-[#003057]";
                  } else if (isSelected) {
                    containerClass += "border-[#d0021b] bg-[#fff5f5]";
                    letterBoxClass += "bg-[#d0021b] border-[#d0021b] text-white";
                  } else {
                    containerClass += "border-slate-100 bg-white opacity-40";
                    letterBoxClass += "bg-slate-50 border-slate-100 text-slate-300";
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isLocked}
                    onClick={() => handleOptionSelect(idx)}
                    className={containerClass}
                  >
                    <div className={letterBoxClass}>
                      {letter}
                    </div>
                    <div className="flex-1 p-5 font-bold text-lg">
                      {option}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Technical Guidance Feedback */}
            {isLocked && (
              <div className="mt-10 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="bg-[#003057] text-white p-6 rounded-sm mb-6 relative overflow-hidden">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-[#99cc33] p-1.5 rounded-sm shadow-sm">
                      <Info className="w-4 h-4 text-[#003057]" />
                    </div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#99cc33]">Technical Guidance</h4>
                  </div>
                  <p className="text-sm font-medium leading-relaxed max-w-xl">
                    {currentQ.guidance || currentQ.explanation || "Correct response recorded. Ensure you review the industry handbook for more details on this topic."}
                  </p>
                </div>
                
                <div className="flex justify-end">
                  <button 
                    onClick={handleNext}
                    className="px-10 py-5 bg-[#003057] hover:bg-black text-white font-black uppercase tracking-widest rounded-sm flex items-center gap-4 transition-all"
                  >
                    {currentIndex === questions.length - 1 ? 'Complete Session' : 'Confirm & Next'}
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )
      )}

        {currentStep === 'result' && (
          <div className="max-w-2xl mx-auto py-4">
            <div className="border-b-4 border-[#003057] pb-4 mb-10">
              <h2 className="text-4xl font-black uppercase italic">Performance Review</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-48 h-48 rounded-full border-[12px] border-slate-100 flex items-center justify-center flex-shrink-0 relative">
                {/* Progress Circle Logic */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="96" cy="96" r="84"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="12"
                    className="text-slate-100"
                  />
                  <circle
                    cx="96" cy="96" r="84"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="12"
                    strokeDasharray={527.7}
                    strokeDashoffset={527.7 - (527.7 * percentage) / 100}
                    strokeLinecap="round"
                    className={`transition-all duration-1000 ${passed ? 'text-[#99cc33]' : 'text-red-600'}`}
                  />
                </svg>
                <div className="text-center z-10">
                  <span className="block text-5xl font-black">{percentage}%</span>
                  <span className="text-[10px] font-bold uppercase text-slate-400">Final Grade</span>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <h3 className={`text-3xl font-black uppercase ${passed ? 'text-[#99cc33]' : 'text-red-600'}`}>
                    {passed ? 'READY FOR NEXT STEP' : 'MORE STUDY NEEDED'}
                  </h3>
                  <p className="text-slate-500 font-medium">
                    {passed 
                      ? "You have demonstrated strong knowledge in this specific section." 
                      : `Aim for a ${passMark}% score to ensure comprehensive understanding. Reviewing the material is advised.`}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 border border-slate-200 rounded-sm">
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Correct</span>
                    <span className="text-2xl font-black text-[#003057]">{score}</span>
                  </div>
                  <div className="bg-slate-50 p-4 border border-slate-200 rounded-sm">
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Mistakes</span>
                    <span className="text-2xl font-black text-[#003057]">{questions.length - score}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 space-y-4">
              <button 
                onClick={handleStart}
                className="w-full py-5 border-2 border-[#003057] text-[#003057] hover:bg-[#003057] hover:text-white font-black uppercase tracking-widest rounded-sm transition-all"
              >
                Retake Examination
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
