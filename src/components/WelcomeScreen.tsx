'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export const WelcomeScreen: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col bg-bg-light p-6 text-text-main max-w-md mx-auto w-full">
      <header className="pt-8 pb-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold leading-tight tracking-tight">
            DisleksiAI'ya Hoş Geldin!
          </h1>
          <button 
            className="p-2 text-text-main hover:bg-gray-200 rounded-full transition-colors min-w-touch-target min-h-touch-target flex items-center justify-center"
            aria-label="Sesli okuma"
          >
            <span className="material-symbols-outlined text-3xl">volume_up</span>
          </button>
        </div>
        <p className="text-text-sub mt-2 text-lg">
          Okumayı daha kolay ve eğlenceli hale getirelim.
        </p>
      </header>

      <div className="grid gap-4 py-4">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-2">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-1">
            <span className="material-symbols-outlined">person_play</span>
          </div>
          <h2 className="text-lg font-bold">Kişiselleştirilmiş Öğrenme</h2>
          <p className="text-text-sub text-sm">
            Yapay zeka destekli kişisel okuma yolculukları.
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-2">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-1">
            <span className="material-symbols-outlined">chat_bubble</span>
          </div>
          <h2 className="text-lg font-bold">Anında Geri Bildirim</h2>
          <p className="text-text-sub text-sm">
            Anında geri bildirim ile ilerlemeni takip et.
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-2">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-1">
            <span className="material-symbols-outlined">celebration</span>
          </div>
          <h2 className="text-lg font-bold">Eğlenceli Alıştırmalar</h2>
          <p className="text-text-sub text-sm">
            Oyunlaştırılmış egzersizlerle öğrenmeyi destekle.
          </p>
        </div>
      </div>

      <div className="mt-auto flex flex-col gap-3 pb-8">
        <button 
          onClick={() => router.push('/age-selection')}
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold h-14 rounded-full text-lg transition-all shadow-lg shadow-primary-glow active:scale-[0.98]"
        >
          YENİ HESAP AÇMAK
        </button>
        <button 
          onClick={() => router.push('/login')}
          className="w-full bg-blue-100 text-primary hover:bg-blue-200 font-bold h-14 rounded-full text-lg transition-colors"
        >
          GİRİŞ YAPMAK
        </button>
        <button className="text-text-sub text-sm underline text-center mt-2">
          Ebeveyn veya Öğretmen misiniz?
        </button>
      </div>
    </div>
  );
};
