'use client';

import React, { useState, useEffect } from 'react';
import { chapter2Questions } from '@/lib/data/chapter2Questions';
import { useSession } from 'next-auth/react';

// Helper to shuffle array
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export default function Chapter2Test() {
  const { data: session } = useSession();
  const user = session?.user;
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [startTime, setStartTime] = useState<number>(0);

  // Initialize test
  useEffect(() => {
    startNewTest();
  }, []);

  const startNewTest = () => {
    // Shuffle questions and options
    const shuffledQuestions = shuffleArray(chapter2Questions).map((q: any) => ({
      ...q,
      options: shuffleArray(q.options)
    }));

    setQuestions(shuffledQuestions);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
    setStartTime(Date.now());
  };

  const handleAnswerClick = (answer: string) => {
    if (selectedAnswer) return; // Prevent changing answer
    setSelectedAnswer(answer);

    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
      if (session?.user) {
        await saveResult();
      }
    }
  };

  const saveResult = async () => {
    if (!session?.user) return;
    setIsSaving(true);
    try {
      const timeSpentSeconds = Math.floor((Date.now() - startTime) / 1000);
      const res = await fetch('/api/results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: 'Chapter 2 Test',
          score: score + (selectedAnswer === questions[currentQuestionIndex].correctAnswer ? 1 : 0),
          totalQuestions: questions.length,
          timeSpentSeconds,
        }),
      });
      if (!res.ok) throw new Error('Failed to save result');
    } catch (error) {
      console.error('Error saving result:', error);
    } finally {
      setIsSaving(false);
    }
  };

  if (questions.length === 0) return <div>Loading test...</div>;

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 text-center rounded-md">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Test Complete!</h2>
        <div className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-6">
          {percentage}%
        </div>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          You scored {score} out of {questions.length}.
        </p>
        
        {!user && (
          <p className="text-sm text-yellow-600 dark:text-yellow-400 mb-6 bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded">
            Sign in to save your test results and track your progress!
          </p>
        )}

        <button 
          onClick={startNewTest}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors"
        >
          Retake Test
        </button>
      </div>
    );
  }

  const currentQ = questions[currentQuestionIndex];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-tight">Chapter 2 Test</h2>
          <span className="text-[10px] font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded-md whitespace-nowrap">
            {currentQuestionIndex + 1} / {questions.length}
          </span>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 p-5 rounded-xl mb-4">
        <h3 className="text-base font-bold text-gray-900 dark:text-white mb-5 leading-tight">
          {currentQ.question}
        </h3>

        <div className="space-y-2">
          {currentQ.options.map((option, index) => {
            let buttonClass = "w-full text-left py-2.5 px-4 border rounded-xl transition-all duration-200 text-sm ";
            
            if (!selectedAnswer) {
              buttonClass += "border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-200 dark:hover:border-blue-900";
            } else {
              if (option === currentQ.correctAnswer) {
                buttonClass += "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 font-bold";
              } else if (option === selectedAnswer) {
                buttonClass += "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300";
              } else {
                buttonClass += "border-gray-100 dark:border-gray-800 text-gray-400 dark:text-gray-600 opacity-50";
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                disabled={!!selectedAnswer}
                className={buttonClass}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      {selectedAnswer && (
        <div className="flex justify-end">
          <button
            onClick={handleNextQuestion}
            disabled={isSaving}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors shadow-sm"
          >
            {currentQuestionIndex < questions.length - 1 ? 'Next Question' : (isSaving ? 'Saving...' : 'Finish Test')}
          </button>
        </div>
      )}
    </div>
  );
}
