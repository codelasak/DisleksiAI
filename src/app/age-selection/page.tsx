'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function AgeSelectionPage() {
  const router = useRouter();
  const [selectedAge, setSelectedAge] = useState<number | null>(null);

  const ages = [10, 11, 12, 13, 14, 15, 16, 17];

  const handleContinue = () => {
    if (selectedAge) {
      // Store age in localStorage for now (will be saved to DB later)
      localStorage.setItem('userAge', selectedAge.toString());
      router.push('/diagnosis/intro');
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-dys-bg p-6 text-dys-text max-w-md mx-auto w-full">
      <header className="pt-8 pb-4">
        <button
          onClick={() => router.back()}
          className="text-gray-600 hover:text-gray-800 mb-4"
        >
          ◄ Geri
        </button>
        <h1 className="text-dyslexia-heading font-bold">
          Hakkında bilgileri söyleyebilir misin?
        </h1>
      </header>

      <div className="flex-1 py-6">
        <p className="text-lg mb-6">Kaç yaşındasın?</p>

        <div className="grid grid-cols-2 gap-4">
          {ages.map((age) => (
            <motion.button
              key={age}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedAge(age)}
              className={`
                h-16 rounded-2xl font-bold text-xl transition-all
                ${
                  selectedAge === age
                    ? 'bg-dys-primary text-white shadow-lg'
                    : 'bg-white text-dys-text border-2 border-gray-200 hover:border-dys-primary'
                }
              `}
            >
              {age}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="pb-8">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleContinue}
          disabled={!selectedAge}
          className={`
            btn w-full rounded-full text-lg font-bold
            ${selectedAge ? 'btn-primary' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}
          `}
        >
          DEVAM ET
        </motion.button>
        <p className="text-center text-sm text-gray-500 mt-3">
          İleri de değiştirebilirsin ✨
        </p>
      </div>
    </div>
  );
}
