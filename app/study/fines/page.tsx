'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Search, 
  ArrowLeft, 
  Sparkles, 
  AlertTriangle, 
  HelpCircle, 
  Check, 
  X, 
  RotateCcw,
  SlidersHorizontal,
  ChevronRight,
  TrendingUp,
  ShieldAlert,
  Info
} from 'lucide-react';
import { FINES_DATA, FineOffence } from '@/lib/data/finesData';

type StudyMode = 'browse' | 'flashcards' | 'quiz';

export default function FinesPage() {
  const [mode, setMode] = useState<StudyMode>('browse');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Flashcards state
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCards, setKnownCards] = useState<Record<string, 'yes' | 'no'>>({});

  // Quiz state
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<Array<{
    offence: FineOffence;
    options: string[];
    correctAnswer: string;
    selectedAnswer: string | null;
  }>>([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Categories list
  const categories = useMemo(() => {
    const cats = new Set(FINES_DATA.map(f => f.category));
    return ['All', ...Array.from(cats)];
  }, []);

  // Filtered fines
  const filteredFines = useMemo(() => {
    return FINES_DATA.filter(fine => {
      const matchesSearch = 
        fine.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fine.amountText.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (fine.details && fine.details.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || fine.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Flashcards list (filtered by selected category)
  const flashcardItems = useMemo(() => {
    return selectedCategory === 'All' 
      ? FINES_DATA 
      : FINES_DATA.filter(f => f.category === selectedCategory);
  }, [selectedCategory]);

  // Reset flashcards
  const resetFlashcards = () => {
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setKnownCards({});
  };

  // Generate Quiz
  const startQuiz = () => {
    const pool = selectedCategory === 'All' 
      ? FINES_DATA 
      : FINES_DATA.filter(f => f.category === selectedCategory);
    
    // Choose up to 10 random questions
    const shuffled = [...pool].sort(() => 0.5 - Math.random()).slice(0, 10);
    
    const questions = shuffled.map(item => {
      // Generate incorrect options
      const incorrectAmounts = new Set<string>();
      while (incorrectAmounts.size < 3) {
        const randomItem = FINES_DATA[Math.floor(Math.random() * FINES_DATA.length)];
        if (randomItem.amountText !== item.amountText && randomItem.amountText.includes('€')) {
          incorrectAmounts.add(randomItem.amountText);
        }
      }
      
      // Shuffle options
      const options = [item.amountText, ...Array.from(incorrectAmounts)]
        .sort(() => 0.5 - Math.random());

      return {
        offence: item,
        options,
        correctAnswer: item.amountText,
        selectedAnswer: null
      };
    });

    setQuizQuestions(questions);
    setCurrentQuizIndex(0);
    setScore(0);
    setQuizFinished(false);
    setQuizStarted(true);
  };

  const handleQuizAnswer = (answer: string) => {
    if (quizQuestions[currentQuizIndex].selectedAnswer !== null) return;
    
    const updated = [...quizQuestions];
    updated[currentQuizIndex].selectedAnswer = answer;
    setQuizQuestions(updated);

    if (answer === updated[currentQuizIndex].correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuizQuestion = () => {
    if (currentQuizIndex < quizQuestions.length - 1) {
      setCurrentQuizIndex(prev => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b-2 border-gray-200 dark:border-gray-800 pb-6">
        <div>
          <Link href="/study" className="inline-flex items-center gap-2 text-sm text-[#003057] dark:text-gray-305 hover:text-[#99cc33] font-bold mb-3 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Official Manual
          </Link>
          <div className="flex items-center gap-3">
            <div className="bg-[#003057] dark:bg-[#99cc33]/15 text-[#99cc33] p-2.5 rounded-sm">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-heading font-black text-[#003057] dark:text-white leading-none">Fines & Offences Guide</h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Master NTA fixed payment penalties, major offences, and penalty points.</p>
            </div>
          </div>
        </div>

        {/* Study Mode Selector */}
        <div className="flex bg-[#003057] p-1 rounded-sm gap-1 self-start md:self-center">
          <button 
            onClick={() => { setMode('browse'); }} 
            className={`px-4 py-2 text-xs font-bold transition-all rounded-sm ${mode === 'browse' ? 'bg-[#99cc33] text-[#003057]' : 'text-gray-300 hover:text-white'}`}
          >
            Browse List
          </button>
          <button 
            onClick={() => { setMode('flashcards'); resetFlashcards(); }} 
            className={`px-4 py-2 text-xs font-bold transition-all rounded-sm ${mode === 'flashcards' ? 'bg-[#99cc33] text-[#003057]' : 'text-gray-300 hover:text-white'}`}
          >
            Flashcards
          </button>
          <button 
            onClick={() => { setMode('quiz'); setQuizStarted(false); }} 
            className={`px-4 py-2 text-xs font-bold transition-all rounded-sm ${mode === 'quiz' ? 'bg-[#99cc33] text-[#003057]' : 'text-gray-300 hover:text-white'}`}
          >
            Practice Quiz
          </button>
        </div>
      </div>

      {/* Info Warning Card */}
      <div className="bg-yellow-50 dark:bg-yellow-900/10 border-l-4 border-yellow-500 p-4 mb-6 rounded-r-md flex gap-3">
        <Info className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
        <div className="text-xs text-yellow-800 dark:text-yellow-300 font-medium leading-relaxed">
          <span className="font-bold">Fixed Payment Rules:</span> Fines must be paid within 28 days. If unpaid, the amount increases by 50% for payment within 56 days. Failure to pay within 56 days results in court prosecution.
        </div>
      </div>

      {/* Category Selection Filter (Used in Browse & Flashcard modes) */}
      {mode !== 'quiz' && (
        <div className="flex flex-wrap gap-1.5 mb-6 pb-2 border-b border-gray-200 dark:border-gray-800">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                if (mode === 'flashcards') resetFlashcards();
              }}
              className={`px-3 py-1.5 text-xs font-bold border transition-all rounded-sm ${selectedCategory === cat ? 'bg-[#003057] text-[#99cc33] border-[#003057]' : 'bg-white dark:bg-gray-850 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-305 border-gray-200 dark:border-gray-800'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* ----------------- BROWSE MODE ----------------- */}
      {mode === 'browse' && (
        <div>
          {/* Search bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search offences, fine amounts, keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-750 py-3 pl-11 pr-4 rounded-sm text-sm font-medium focus:border-[#003057] dark:focus:border-[#99cc33] outline-none transition-colors text-gray-900 dark:text-white"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-600">Clear</button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredFines.length > 0 ? (
              filteredFines.map(fine => {
                const isHighFine = fine.amount >= 250;
                return (
                  <div 
                    key={fine.id} 
                    className={`flex flex-col justify-between p-5 bg-white dark:bg-gray-800 border-2 rounded-sm transition-all hover:border-gray-400 dark:hover:border-gray-700 ${isHighFine ? 'border-l-4 border-l-[#ff3333] border-gray-200 dark:border-gray-750' : 'border-gray-200 dark:border-gray-750'}`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#99cc33] bg-[#003057]/10 dark:bg-[#99cc33]/15 px-2 py-0.5 rounded-sm">
                          {fine.category}
                        </span>
                        {fine.penaltyPoints && (
                          <span className="text-[10px] font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-955 px-2 py-0.5 rounded-sm flex items-center gap-1 border border-red-100 dark:border-red-900/30">
                            <AlertTriangle className="w-3 h-3" /> Penalty Points
                          </span>
                        )}
                      </div>
                      <h3 className="font-heading font-bold text-[#003057] dark:text-white text-base leading-snug mb-3">
                        {fine.title}
                      </h3>
                      {fine.details && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 bg-gray-50 dark:bg-gray-850 p-2.5 rounded-sm italic border-l border-gray-300 dark:border-gray-700">
                          {fine.details}
                        </p>
                      )}
                    </div>

                    <div className="flex items-end justify-between pt-2 border-t border-gray-100 dark:border-gray-750 mt-2">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 dark:text-gray-550 font-bold uppercase tracking-wider">Penalty Fine</span>
                        <span className={`text-xl font-black ${isHighFine ? 'text-[#ff3333] dark:text-red-400' : 'text-[#003057] dark:text-white'}`}>
                          {fine.amountText}
                        </span>
                      </div>
                      {fine.penaltyPoints && (
                        <div className="flex flex-col text-right">
                          <span className="text-[10px] text-gray-400 dark:text-gray-555 font-bold uppercase tracking-wider">Points</span>
                          <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{fine.penaltyPoints}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-full bg-white dark:bg-gray-850 border border-gray-200 dark:border-gray-800 text-center py-12 px-4 rounded-sm">
                <AlertTriangle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-600 dark:text-gray-400 font-medium">No offences found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ----------------- FLASHCARDS MODE ----------------- */}
      {mode === 'flashcards' && (
        <div className="max-w-2xl mx-auto">
          {flashcardItems.length > 0 ? (
            <div className="flex flex-col items-center">
              {/* Card container */}
              <div 
                onClick={() => setIsFlipped(!isFlipped)}
                className="w-full h-80 cursor-pointer perspective-1000 group mb-6 focus:outline-none"
              >
                <div className={`relative w-full h-full text-center transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                  
                  {/* Front Side */}
                  <div className="absolute inset-0 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-8 rounded-sm shadow-sm flex flex-col justify-between backface-hidden">
                    <div className="flex items-center justify-between text-xs font-bold text-gray-800 dark:text-gray-300">
                      <span className="text-[#99cc33] uppercase bg-[#003057]/10 dark:bg-[#99cc33]/15 px-2.5 py-0.5 rounded-sm">{flashcardItems[currentCardIndex].category}</span>
                      <span className="text-gray-400">Card {currentCardIndex + 1} of {flashcardItems.length}</span>
                    </div>

                    <div className="my-auto py-4">
                      <h2 className="text-lg md:text-xl font-heading font-bold text-[#003057] dark:text-white leading-relaxed">
                        {flashcardItems[currentCardIndex].title}
                      </h2>
                    </div>

                    <div className="text-xs text-gray-400 font-bold tracking-widest flex items-center justify-center gap-1.5 uppercase">
                      <Sparkles className="w-3.5 h-3.5 text-[#99cc33]" /> Click card to reveal penalty
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 bg-[#003057] text-white p-8 rounded-sm shadow-md flex flex-col justify-between backface-hidden rotate-y-180">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-[#99cc33] uppercase bg-white/10 px-2.5 py-0.5 rounded-sm">{flashcardItems[currentCardIndex].category}</span>
                      <span className="text-gray-400">Card {currentCardIndex + 1} of {flashcardItems.length}</span>
                    </div>

                    <div className="my-auto py-6 flex flex-col items-center">
                      <span className="text-xs font-bold tracking-widest text-[#99cc33] uppercase mb-1">Fine Amount</span>
                      <h2 className="text-4xl md:text-5xl font-black text-white leading-none mb-4">
                        {flashcardItems[currentCardIndex].amountText}
                      </h2>
                      {flashcardItems[currentCardIndex].penaltyPoints && (
                        <div className="mt-2 text-center bg-red-950/40 border border-red-900/60 p-3 rounded-sm max-w-sm">
                          <span className="block text-[10px] text-red-400 font-bold uppercase tracking-wider mb-0.5">Penalty Points</span>
                          <span className="text-sm font-bold text-white">{flashcardItems[currentCardIndex].penaltyPoints}</span>
                        </div>
                      )}
                      {flashcardItems[currentCardIndex].details && (
                        <p className="text-xs text-gray-300 text-center max-w-md mt-4 leading-relaxed bg-white/5 p-3 border-l-2 border-[#99cc33]">
                          {flashcardItems[currentCardIndex].details}
                        </p>
                      )}
                    </div>

                    <div className="text-xs text-gray-400 font-bold tracking-widest uppercase">
                      Click to show front
                    </div>
                  </div>

                </div>
              </div>

              {/* Progress & Controls */}
              <div className="w-full flex items-center justify-between gap-4">
                <button
                  onClick={() => {
                    setIsFlipped(false);
                    setTimeout(() => {
                      setCurrentCardIndex(prev => (prev > 0 ? prev - 1 : flashcardItems.length - 1));
                    }, isFlipped ? 150 : 0);
                  }}
                  className="px-4 py-2 border-2 border-[#003057] hover:border-[#99cc33] text-sm font-bold text-[#003057] dark:text-white transition-all rounded-sm bg-white dark:bg-gray-800"
                >
                  Previous
                </button>
                
                <div className="flex gap-2">
                  <button 
                    onClick={() => {
                      const id = flashcardItems[currentCardIndex].id;
                      setKnownCards(prev => ({ ...prev, [id]: 'yes' }));
                      // Go to next
                      setIsFlipped(false);
                      setTimeout(() => {
                        setCurrentCardIndex(prev => (prev < flashcardItems.length - 1 ? prev + 1 : 0));
                      }, isFlipped ? 150 : 0);
                    }}
                    className="flex items-center gap-1.5 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-bold text-xs rounded-sm transition-colors"
                  >
                    <Check className="w-3.5 h-3.5" /> I Know This
                  </button>
                  <button
                    onClick={() => {
                      const id = flashcardItems[currentCardIndex].id;
                      setKnownCards(prev => ({ ...prev, [id]: 'no' }));
                      setIsFlipped(false);
                      setTimeout(() => {
                        setCurrentCardIndex(prev => (prev < flashcardItems.length - 1 ? prev + 1 : 0));
                      }, isFlipped ? 150 : 0);
                    }}
                    className="flex items-center gap-1.5 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-sm transition-colors"
                  >
                    <X className="w-3.5 h-3.5" /> Study Again
                  </button>
                </div>

                <button
                  onClick={() => {
                    setIsFlipped(false);
                    setTimeout(() => {
                      setCurrentCardIndex(prev => (prev < flashcardItems.length - 1 ? prev + 1 : 0));
                    }, isFlipped ? 150 : 0);
                  }}
                  className="px-4 py-2 border-2 border-[#003057] hover:border-[#99cc33] text-sm font-bold text-[#003057] dark:text-white transition-all rounded-sm bg-white dark:bg-gray-800"
                >
                  Next
                </button>
              </div>

              {/* Progress Summary */}
              <div className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400 font-bold bg-white dark:bg-gray-800 p-4 rounded-sm border border-gray-200 dark:border-gray-700 w-full flex items-center justify-around">
                <div>
                  <span className="block text-lg font-black text-green-600">{Object.values(knownCards).filter(v => v === 'yes').length}</span>
                  Known Cards
                </div>
                <div className="h-8 w-px bg-gray-200 dark:bg-gray-700" />
                <div>
                  <span className="block text-lg font-black text-red-600">{Object.values(knownCards).filter(v => v === 'no').length}</span>
                  Need Review
                </div>
                <div className="h-8 w-px bg-gray-200 dark:bg-gray-700" />
                <div>
                  <button onClick={resetFlashcards} className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline">
                    <RotateCcw className="w-3 h-3" /> Reset Session
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-850 border border-gray-200 dark:border-gray-800 text-center py-12 px-4 rounded-sm">
              <AlertTriangle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-600 dark:text-gray-400 font-medium">No cards available in this category.</p>
            </div>
          )}
        </div>
      )}

      {/* ----------------- QUIZ MODE ----------------- */}
      {mode === 'quiz' && (
        <div className="max-w-2xl mx-auto">
          {!quizStarted ? (
            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-8 text-center rounded-sm">
              <BookOpen className="w-16 h-16 text-[#003057] dark:text-[#99cc33] mx-auto mb-4" />
              <h2 className="text-2xl font-heading font-bold text-[#003057] dark:text-white mb-2">Fines Practice Quiz</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm max-w-md mx-auto mb-6">
                Test your knowledge of SPSV fines and offences. You will be given 10 randomly selected questions based on your active category filter: <span className="font-bold text-[#99cc33]">{selectedCategory}</span>.
              </p>
              <button 
                onClick={startQuiz}
                className="bg-[#003057] text-[#99cc33] border-2 border-[#003057] hover:border-[#99cc33] hover:bg-[#003057]/90 px-6 py-3 font-bold text-sm rounded-sm transition-all"
              >
                Start Quiz Now
              </button>
            </div>
          ) : quizFinished ? (
            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-8 text-center rounded-sm">
              <h2 className="text-3xl font-heading font-black text-[#003057] dark:text-white mb-2">Quiz Completed!</h2>
              <div className="w-24 h-24 rounded-full border-4 border-[#99cc33] flex items-center justify-center mx-auto my-6 bg-green-50 dark:bg-green-950/20">
                <span className="text-2xl font-black text-[#003057] dark:text-[#99cc33]">{score}/{quizQuestions.length}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm max-w-sm mx-auto mb-8">
                {score === quizQuestions.length ? 'Perfect Score! You know your SPSV fines in and out.' : 'Good effort! Review the detailed list and try again to master.'}
              </p>
              
              <div className="flex gap-4 justify-center">
                <button 
                  onClick={startQuiz}
                  className="bg-[#003057] text-[#99cc33] hover:bg-[#003057]/90 px-5 py-2.5 text-xs font-bold rounded-sm border border-[#003057]"
                >
                  Retake Quiz
                </button>
                <button 
                  onClick={() => setQuizStarted(false)}
                  className="bg-white dark:bg-gray-750 text-gray-800 dark:text-white hover:bg-gray-50 border border-gray-300 dark:border-gray-650 px-5 py-2.5 text-xs font-bold rounded-sm"
                >
                  Category Hub
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-6 rounded-sm">
              {/* Quiz progress */}
              <div className="flex items-center justify-between text-xs text-gray-400 font-bold mb-6 pb-2 border-b border-gray-100 dark:border-gray-700">
                <span className="text-[#99cc33]">{selectedCategory} Quiz</span>
                <span className="text-gray-500">Question {currentQuizIndex + 1} of {quizQuestions.length}</span>
              </div>

              {/* Question */}
              <div className="mb-8">
                <span className="block text-[10px] text-red-650 dark:text-red-400 font-bold uppercase tracking-wider mb-1">What is the penalty for:</span>
                <h3 className="text-lg md:text-xl font-heading font-bold text-[#003057] dark:text-white leading-snug">
                  {quizQuestions[currentQuizIndex].offence.title}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-8">
                {quizQuestions[currentQuizIndex].options.map(option => {
                  const isSelected = quizQuestions[currentQuizIndex].selectedAnswer === option;
                  const isCorrect = quizQuestions[currentQuizIndex].correctAnswer === option;
                  const hasAnswered = quizQuestions[currentQuizIndex].selectedAnswer !== null;

                  let btnStyle = "border-gray-200 dark:border-gray-700 hover:border-[#003057] dark:hover:border-[#99cc33] text-gray-850 dark:text-gray-200";
                  if (hasAnswered) {
                    if (isCorrect) {
                      btnStyle = "bg-green-500/10 border-green-500 text-green-700 dark:text-green-400";
                    } else if (isSelected) {
                      btnStyle = "bg-red-500/10 border-red-500 text-red-700 dark:text-red-400";
                    } else {
                      btnStyle = "opacity-50 border-gray-200 dark:border-gray-700 text-gray-400";
                    }
                  }

                  return (
                    <button
                      key={option}
                      disabled={hasAnswered}
                      onClick={() => handleQuizAnswer(option)}
                      className={`w-full text-left p-4 border rounded-sm font-semibold text-sm transition-all flex items-center justify-between ${btnStyle}`}
                    >
                      <span>{option}</span>
                      {hasAnswered && isCorrect && <Check className="w-4 h-4 text-green-600" />}
                      {hasAnswered && isSelected && !isCorrect && <X className="w-4 h-4 text-red-600" />}
                    </button>
                  );
                })}
              </div>

              {/* Bottom bar */}
              {quizQuestions[currentQuizIndex].selectedAnswer !== null && (
                <div className="flex flex-col gap-4">
                  {/* Feedback explanation if available */}
                  {quizQuestions[currentQuizIndex].offence.details && (
                    <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 p-3 text-xs text-blue-900 dark:text-blue-300">
                      <span className="font-bold">Did you know?</span> {quizQuestions[currentQuizIndex].offence.details}
                    </div>
                  )}
                  
                  <button 
                    onClick={nextQuizQuestion}
                    className="w-full bg-[#003057] text-[#99cc33] font-bold py-3 text-sm rounded-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5"
                  >
                    <span>{currentQuizIndex === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
