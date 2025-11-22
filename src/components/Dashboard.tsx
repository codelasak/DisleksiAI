'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getHelpResponse } from '@/app/actions';

export const Dashboard: React.FC = () => {
  const router = useRouter();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState<{role: 'user'|'ai', text: string}[]>([]);
  const [loadingChat, setLoadingChat] = useState(false);

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput;
    setChatHistory(prev => [...prev, { role: 'user', text: userMsg }]);
    setChatInput('');
    setLoadingChat(true);

    const aiResponse = await getHelpResponse(userMsg);
    setChatHistory(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setLoadingChat(false);
  };

  return (
    <div className="flex min-h-screen flex-col bg-bg-light text-text-main max-w-md mx-auto w-full relative">
      {/* Top Bar */}
      <header className="p-4 flex items-center justify-between bg-bg-light sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <div 
            className="w-12 h-12 rounded-full bg-gray-200 bg-cover bg-center border-2 border-white shadow-sm"
            style={{ backgroundImage: 'url(https://picsum.photos/200)' }}
          ></div>
          <h1 className="text-xl font-bold">Hoş geldin, Elif!</h1>
        </div>
      </header>

      <main className="flex-1 px-4 pb-24 space-y-6">
        
        {/* Today's Goal */}
        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 text-center">
          <h2 className="text-lg font-bold mb-1">Bugünün Hedefi</h2>
          <p className="text-text-sub text-sm mb-6 px-4">
            Bugün 2 alıştırmayı tamamla ve okuma hızını geliştir.
          </p>
          
          <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
             {/* SVG Donut Chart */}
             <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#f3f4f6" strokeWidth="8" strokeLinecap="round"/>
                <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    fill="none" 
                    stroke="#f59e0b" 
                    strokeWidth="8" 
                    strokeLinecap="round"
                    strokeDasharray="283"
                    strokeDashoffset="212" /* 25% progress */
                />
             </svg>
             <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold">1/4</span>
                <span className="text-text-sub text-sm">tamamlandı</span>
             </div>
          </div>
        </div>

        {/* Big CTA */}
        <button className="w-full bg-primary hover:bg-blue-600 text-white h-16 rounded-full flex items-center justify-center gap-3 font-bold text-lg shadow-lg shadow-blue-500/20 transition-transform active:scale-[0.98]">
            <span className="material-symbols-outlined text-3xl">play_circle</span>
            BAŞLA
        </button>

        {/* Weekly Summary */}
        <div>
            <div className="flex justify-between items-end mb-3 px-2">
                <h3 className="text-lg font-bold">Bu Hafta (Özet)</h3>
                <button className="text-primary text-sm font-bold hover:underline">DETAYLAR</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                    <p className="text-text-sub font-medium mb-1">Okuma Süresi</p>
                    <p className="text-2xl font-bold">45 dk</p>
                    <p className="text-green-500 text-sm font-bold mt-1">+5%</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                    <p className="text-text-sub font-medium mb-1">Doğruluk</p>
                    <p className="text-2xl font-bold">85%</p>
                    <p className="text-green-500 text-sm font-bold mt-1">+2%</p>
                </div>
            </div>
        </div>

        {/* Badges */}
        <div className="pb-4">
            <h3 className="text-lg font-bold mb-3 px-2">Son Rozetler</h3>
            <div className="flex gap-4 overflow-x-auto px-2 pb-2 scrollbar-hide">
                <div className="flex flex-col items-center gap-2 min-w-[80px]">
                    <div className="w-16 h-16 rounded-full bg-yellow-100 border-2 border-yellow-300 flex items-center justify-center">
                        <span className="material-symbols-outlined text-yellow-500 text-3xl">star</span>
                    </div>
                    <span className="text-xs font-bold text-text-sub text-center leading-tight">Doğruluk<br/>Yıldızı</span>
                </div>
                <div className="flex flex-col items-center gap-2 min-w-[80px]">
                    <div className="w-16 h-16 rounded-full bg-blue-100 border-2 border-blue-300 flex items-center justify-center">
                        <span className="material-symbols-outlined text-blue-500 text-3xl">local_fire_department</span>
                    </div>
                    <span className="text-xs font-bold text-text-sub text-center leading-tight">Okuma<br/>Serisi</span>
                </div>
                <div className="flex flex-col items-center gap-2 min-w-[80px]">
                    <div className="w-16 h-16 rounded-full bg-green-100 border-2 border-green-300 flex items-center justify-center">
                        <span className="material-symbols-outlined text-green-500 text-3xl">rocket_launch</span>
                    </div>
                    <span className="text-xs font-bold text-text-sub text-center leading-tight">Hızlı<br/>Başlangıç</span>
                </div>
            </div>
        </div>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 w-full max-w-md bg-white border-t border-gray-100 p-2 flex justify-around items-center pb-4 z-20">
        <button 
          onClick={() => router.push('/dashboard')}
          className="flex flex-col items-center p-2 text-primary"
        >
             <span className="material-symbols-outlined">home</span>
             <span className="text-[10px] font-bold mt-1">ANA SAYFA</span>
        </button>
        <button className="flex flex-col items-center p-2 text-gray-400 hover:text-primary">
             <span className="material-symbols-outlined">settings</span>
             <span className="text-[10px] font-bold mt-1">AYARLAR</span>
        </button>
        <button 
            onClick={() => setIsChatOpen(true)}
            className="flex flex-col items-center p-2 text-gray-400 hover:text-primary"
        >
             <span className="material-symbols-outlined">help_outline</span>
             <span className="text-[10px] font-bold mt-1">YARDIM</span>
        </button>
      </nav>

      {/* AI Chat Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-end sm:items-center justify-center">
            <div className="bg-white w-full max-w-md h-[80vh] sm:h-[600px] rounded-t-2xl sm:rounded-2xl flex flex-col shadow-2xl overflow-hidden">
                <div className="p-4 border-b flex justify-between items-center bg-primary text-white">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined">smart_toy</span>
                        <h3 className="font-bold">Disleksi Asistanı</h3>
                    </div>
                    <button onClick={() => setIsChatOpen(false)} className="hover:bg-white/20 rounded-full p-1">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
                <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
                    {chatHistory.length === 0 && (
                        <div className="text-center text-gray-400 mt-10">
                            <span className="material-symbols-outlined text-4xl mb-2">forum</span>
                            <p>Merhaba! Okuma veya ödevlerinle ilgili bana her şeyi sorabilirsin.</p>
                        </div>
                    )}
                    {chatHistory.map((msg, i) => (
                        <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-primary text-white rounded-tr-none' : 'bg-white border border-gray-200 text-text-main rounded-tl-none'}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {loadingChat && (
                        <div className="flex justify-start">
                            <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none flex gap-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                            </div>
                        </div>
                    )}
                </div>
                <form onSubmit={handleChatSubmit} className="p-3 border-t bg-white flex gap-2">
                    <input 
                        type="text" 
                        value={chatInput}
                        onChange={e => setChatInput(e.target.value)}
                        placeholder="Bir soru sor..."
                        className="flex-1 border-gray-200 rounded-full px-4 focus:ring-primary focus:border-primary"
                    />
                    <button type="submit" disabled={loadingChat || !chatInput.trim()} className="bg-primary text-white p-3 rounded-full flex items-center justify-center disabled:opacity-50 hover:bg-primary-dark">
                        <span className="material-symbols-outlined">send</span>
                    </button>
                </form>
            </div>
        </div>
      )}
    </div>
  );
};
