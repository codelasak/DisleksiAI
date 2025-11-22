import React, { useEffect, useState } from 'react';
import { AppView } from '../types';
import { getPersonalizedFeedback } from '../services/geminiService';

interface Props {
  onNavigate: (view: AppView) => void;
  age: number | null;
}

export const ResultsProfile: React.FC<Props> = ({ onNavigate, age }) => {
  const [feedback, setFeedback] = useState<string>("Harika bir iş çıkardın!");

  useEffect(() => {
    // Fetch personalized feedback from Gemini on mount
    getPersonalizedFeedback(age || 10, 85).then(setFeedback);
  }, [age]);

  return (
    <div className="flex min-h-screen flex-col bg-bg-light p-6 max-w-md mx-auto w-full">
      {/* Header */}
      <div className="relative w-full flex justify-center pt-4 mb-4">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
           {/* Simulated Confetti Background */}
           <span className="material-symbols-outlined text-4xl text-yellow-400 absolute -top-2 left-10 rotate-12">star</span>
           <span className="material-symbols-outlined text-3xl text-primary absolute top-4 right-20 -rotate-12">celebration</span>
        </div>
        <button className="absolute right-0 top-0 w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center">
            <span className="material-symbols-outlined text-text-main">volume_up</span>
        </button>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-text-main mb-2">TEBRİKLER!</h1>
        <p className="text-text-main text-lg leading-relaxed">
          Tanılama testini başarıyla tamamladın! İşte senin için kişiselleştirilmiş okuma profilin.
        </p>
        {/* AI Generated Feedback Area */}
        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100 text-primary text-sm italic">
            <span className="font-bold not-italic">AI Asistanı: </span>
            "{feedback}"
        </div>
      </div>

      <h3 className="font-bold text-xl text-text-main mb-4">Senin Profilin:</h3>

      <div className="space-y-4 mb-8">
        {/* Card 1: Difficulty */}
        <div className="bg-white p-4 rounded-2xl shadow-sm flex gap-4 items-start">
          <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-custom-red">target</span>
          </div>
          <div>
            <span className="text-text-sub block mb-1">Birincil Zorluk</span>
            <h4 className="text-lg font-bold text-text-main">Fonolojik Farkındalık</h4>
            <p className="text-text-sub text-sm mt-1">Harflerin seslerini tanımaya odaklanacağız.</p>
          </div>
        </div>

        {/* Card 2: Strength */}
        <div className="bg-white p-4 rounded-2xl shadow-sm flex gap-4 items-start">
          <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-custom-yellow">rocket_launch</span>
          </div>
          <div>
            <span className="text-text-sub block mb-1">Güçlü Yönün</span>
            <h4 className="text-lg font-bold text-text-main">Görsel Anlama</h4>
            <p className="text-text-sub text-sm mt-1">Görsellerle desteklenen metinlerde harikasın!</p>
          </div>
        </div>

        {/* Card 3: Level */}
        <div className="bg-white p-4 rounded-2xl shadow-sm">
            <div className="flex gap-4 items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-custom-teal">bar_chart</span>
                </div>
                <div>
                    <span className="text-text-sub block mb-1">Zorluk Seviyesi</span>
                    <h4 className="text-lg font-bold text-text-main">Başlangıç</h4>
                </div>
            </div>
            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-custom-teal w-1/4 rounded-full"></div>
            </div>
        </div>
      </div>

      <h3 className="font-bold text-xl text-text-main mb-4">Öneriler:</h3>
      <div className="bg-white rounded-2xl p-4 shadow-sm space-y-4 mb-8">
        {[
            "Heceleme alıştırmalarına odaklanarak kelime yapılarını daha iyi anlayabilirsin.",
            "Sesli destekli hikayelerle pratik yaparak okuma akıcılığını geliştirebilirsin.",
            "Kısa ve resimli metinlerle başlayarak okuma motivasyonunu artırabilirsin."
        ].map((item, i) => (
            <div key={i} className="flex gap-3">
                <span className="material-symbols-outlined text-custom-teal shrink-0">check_circle</span>
                <p className="text-text-main text-sm leading-relaxed">{item}</p>
            </div>
        ))}
      </div>

      <div className="mt-auto space-y-3 pb-6">
        <button 
            onClick={() => onNavigate(AppView.DASHBOARD)}
            className="w-full bg-custom-teal hover:bg-teal-600 text-white font-bold h-14 rounded-xl text-lg transition-all shadow-lg shadow-teal-500/20"
        >
            DEVAM ET VE BAŞLAYALIM
        </button>
        <button className="w-full border-2 border-custom-teal text-custom-teal font-bold h-14 rounded-xl text-lg">
            PROFİLİ SONRA GÖREYİM
        </button>
      </div>
    </div>
  );
};
