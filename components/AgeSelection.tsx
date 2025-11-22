import React, { useState } from 'react';
import { AppView } from '../types';

interface Props {
  onNavigate: (view: AppView) => void;
  setAge: (age: number) => void;
}

export const AgeSelection: React.FC<Props> = ({ onNavigate, setAge }) => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleContinue = () => {
    if (selected) {
      setAge(selected);
      onNavigate(AppView.DIAGNOSIS_INTRO);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-bg-light p-6 max-w-md mx-auto w-full justify-between">
      <div className="pt-10">
        <h1 className="text-3xl font-bold text-center text-text-main mb-8">
          Kaç yaşındasın?
        </h1>

        <div className="grid grid-cols-2 gap-4">
          {[10, 11, 12, 13, 14, 15, 16, 17].map((age) => (
            <button
              key={age}
              onClick={() => setSelected(age)}
              className={`h-[70px] rounded-2xl text-xl font-semibold transition-all duration-200 border shadow-sm
                ${selected === age 
                  ? 'bg-primary text-white border-primary ring-4 ring-primary/20 transform scale-[1.02]' 
                  : 'bg-white text-text-main border-transparent hover:border-gray-200'
                }`}
            >
              {age}
            </button>
          ))}
        </div>
      </div>

      <div className="pb-8 w-full">
        <button
          disabled={!selected}
          onClick={handleContinue}
          className={`w-full h-14 rounded-full font-bold text-lg transition-all duration-300
            ${selected 
              ? 'bg-primary text-white shadow-lg shadow-primary/30 cursor-pointer active:scale-[0.98]' 
              : 'bg-gray-300 text-white cursor-not-allowed opacity-50'
            }`}
        >
          DEVAM ET
        </button>
        <p className="text-center text-text-sub text-sm mt-4">
          İleride değiştirebilirsin ✨
        </p>
      </div>
    </div>
  );
};
