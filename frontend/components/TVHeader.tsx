import React from "react";
import { QrCode, Clock } from "lucide-react";

export function TVHeader() {
  const currentTime = new Date().toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  return (
    <header className="bg-gray-900 border-b border-gray-700 px-8 py-6 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-4xl font-bold text-blue-400">프랜차이즈TV</h1>
        <div className="text-gray-400 text-lg">성공 창업의 시작</div>
      </div>
      
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-3 text-gray-300">
          <Clock className="w-6 h-6" />
          <span className="text-2xl font-medium">{currentTime}</span>
        </div>
        <div className="text-2xl font-bold text-blue-400">Ch.887</div>
        <div className="bg-white/10 border-2 border-gray-600 p-3 rounded-xl backdrop-blur-sm">
          <QrCode className="w-10 h-10 text-gray-300" />
        </div>
      </div>
    </header>
  );
}