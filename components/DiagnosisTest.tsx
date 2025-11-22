import React, { useState, useEffect } from 'react';
import { AppView, DiagnosisQuestion } from '../types';

interface Props {
  onNavigate: (view: AppView) => void;
}

const QUESTIONS: DiagnosisQuestion[] = [
  { id: 1, target: 'B', options: ['d', 'b', 'p', 'D'], correct: 'b' },
  { id: 2, target: 'M', options: ['w', 'n', 'm', 'M'], correct: 'm' }, // Case sensitive logic adjusted for display
  { id: 3, target: 'E', options: ['F', 'e', 'L', 'E'], correct: 'e' },
];

export const DiagnosisTest: React.FC<Props> = ({ onNavigate }) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  const question = QUESTIONS[currentQIndex];
  const progress = ((currentQIndex + 1) / QUESTIONS.length) * 100;

  useEffect(() => {
    if (selected) {
      const timer = setTimeout(() => {
        if (currentQIndex < QUESTIONS.length - 1) {
          setCurrentQIndex(prev => prev + 1);
          setSelected(null);
        } else {
          onNavigate(AppView.RESULTS);
        }
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [selected, currentQIndex, onNavigate]);

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF8F1] dark:bg-bg-dark p-6 max-w-md mx-auto w-full transition-colors duration-300">
      {/* Progress Header */}
      <div className="w-full mb-12 mt-4">
        <div className="flex justify-between mb-2">
          <span className="font-bold text-text-main">Test {currentQIndex + 1}/{QUESTIONS.length}</span>
        </div>
        <div className="h-2 bg-black/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-out" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Main Question */}
      <div className="flex-1 flex flex-col items-center justify-center gap-8 mb-12">
        <h2 className="text-xl font-bold text-text-main">Aynı olan harfi seç:</h2>
        
        <div className="flex items-center gap-6">
          <span className="text-[120px] font-bold text-text-main leading-none select-none">
            {question.target}
          </span>
          <button className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-3xl text-text-main">volume_up</span>
          </button>
        </div>
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-2 gap-4 pb-8">
        {question.options.map((opt, idx) => {
          const isSelected = selected === opt;
          const isCorrect = opt === question.correct;
          
          let btnClass = "bg-white border-gray-200 hover:border-primary text-text-main";
          
          if (isSelected) {
             // Visual feedback logic just for the demo
             btnClass = "bg-primary text-white border-primary ring-4 ring-primary/30";
          }

          return (
            <button
              key={idx}
              onClick={() => !selected && setSelected(opt)}
              className={`h-36 rounded-xl border-2 text-6xl font-bold flex items-center justify-center transition-all duration-200 shadow-sm ${btnClass}`}
              disabled={!!selected}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
};
