'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export const DiagnosisIntro: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/age-selection');
  };

  return (
    <div className="flex min-h-screen flex-col bg-bg-light p-6 max-w-md mx-auto w-full">
      <header className="flex items-center justify-between pb-4">
        <button onClick={handleBack} className="p-2 -ml-2 hover:bg-black/5 rounded-full">
          <span className="material-symbols-outlined text-2xl text-text-main">arrow_back</span>
        </button>
        <h2 className="font-bold text-lg">Tanılama Testi</h2>
        <div className="w-8"></div>
      </header>

      <h1 className="text-3xl font-bold text-center mt-4 mb-3 text-text-main">
        Test Başlamaya Hazır mısın?
      </h1>
      <p className="text-center text-text-sub mb-8 leading-relaxed">
        Bu test, okuma becerilerini daha iyi anlamamıza yardımcı olacak ve sana en uygun öğrenme yolunu bulmamızı sağlayacak.
      </p>

      <div className="space-y-4 mb-6">
        <div className="flex items-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-primary mr-4">
            <span className="material-symbols-outlined">text_fields</span>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-text-main">Harf tanıma</h3>
            <p className="text-text-sub text-sm">Testin 1. Bölümü</p>
          </div>
          <span className="text-sm text-text-sub font-medium">Tahmini: 2 dk</span>
        </div>

        <div className="flex items-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-primary mr-4">
             <span className="material-symbols-outlined">book_2</span>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-text-main">Kelime tanıma</h3>
            <p className="text-text-sub text-sm">Testin 2. Bölümü</p>
          </div>
          <span className="text-sm text-text-sub font-medium">Tahmini: 5 dk</span>
        </div>

        <div className="flex items-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-primary mr-4">
             <span className="material-symbols-outlined">description</span>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-text-main">Metin anlama</h3>
            <p className="text-text-sub text-sm">Testin 3. Bölümü</p>
          </div>
          <span className="text-sm text-text-sub font-medium">Tahmini: 8 dk</span>
        </div>
      </div>

      <div className="flex justify-between items-center px-2 mb-6">
        <span className="font-bold text-text-main">Toplam Tahmini Süre</span>
        <span className="font-bold text-text-main">Yaklaşık 15 dk</span>
      </div>

      <div className="bg-blue-50 p-4 rounded-2xl flex gap-4 mb-8">
        <span className="material-symbols-outlined text-primary">lightbulb</span>
        <div>
          <h4 className="font-bold text-primary text-sm uppercase mb-1">Bir İpucu</h4>
          <p className="text-primary/80 text-sm leading-relaxed">
            İstediğin zaman mola verebilirsin, hiç acele etme! Sadece elinden gelenin en iyisini yap.
          </p>
        </div>
      </div>

      <div className="mt-auto flex flex-col gap-3 pb-4">
        <button 
          onClick={() => router.push('/diagnosis-test')}
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold h-14 rounded-xl text-lg transition-all shadow-lg shadow-primary/20 active:scale-[0.98]"
        >
          BAŞLAYALIM!
        </button>
        <button className="w-full text-primary font-bold h-14 rounded-xl text-lg hover:bg-primary/5 transition-colors">
          DAHA SONRA BAŞLARSA DA OLUR
        </button>
      </div>
    </div>
  );
};
