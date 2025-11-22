'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export const WelcomeScreen: React.FC = () => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen flex-col bg-dys-bg p-6 text-dys-text max-w-md mx-auto w-full"
    >
      <header className="pt-8 pb-4">
        <div className="flex items-center justify-between">
          <h1 className="text-dyslexia-heading font-bold">
            DisleksiAI'ya Hoş Geldin!
          </h1>
          <button
            className="p-2 text-dys-text hover:bg-gray-200 rounded-full transition-colors touch-target"
            aria-label="Sesli okuma"
          >
            <span className="text-3xl">🔊</span>
          </button>
        </div>
        <p className="text-gray-600 mt-2 text-lg">
          Okumayı daha kolay ve eğlenceli hale getirelim.
        </p>
      </header>

      <div className="grid gap-4 py-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="card flex flex-col gap-2"
        >
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-dys-primary mb-1">
            <span className="text-2xl">👤</span>
          </div>
          <h2 className="text-lg font-bold">Kişiselleştirilmiş Öğrenme</h2>
          <p className="text-gray-600 text-sm">
            Yapay zeka destekli kişisel okuma yolculukları.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="card flex flex-col gap-2"
        >
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-dys-primary mb-1">
            <span className="text-2xl">💬</span>
          </div>
          <h2 className="text-lg font-bold">Anında Geri Bildirim</h2>
          <p className="text-gray-600 text-sm">
            Anında geri bildirim ile ilerlemeni takip et.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="card flex flex-col gap-2"
        >
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-dys-primary mb-1">
            <span className="text-2xl">🎉</span>
          </div>
          <h2 className="text-lg font-bold">Eğlenceli Alıştırmalar</h2>
          <p className="text-gray-600 text-sm">
            Oyunlaştırılmış egzersizlerle öğrenmeyi destekle.
          </p>
        </motion.div>
      </div>

      <div className="mt-auto flex flex-col gap-3 pb-8">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => router.push('/age-selection')}
          className="btn-primary w-full rounded-full text-lg font-bold"
        >
          YENİ HESAP AÇMAK
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => router.push('/login')}
          className="w-full bg-blue-100 text-dys-primary hover:bg-blue-200 font-bold h-14 rounded-full text-lg transition-colors"
        >
          GİRİŞ YAPMAK
        </motion.button>
        <button className="text-gray-600 text-sm underline text-center mt-2">
          Ebeveyn veya Öğretmen misiniz?
        </button>
      </div>
    </motion.div>
  );
};
