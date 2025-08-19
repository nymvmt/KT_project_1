import React from "react";
import { Home, Heart, MessageCircle, Bell, User } from "lucide-react";

interface NavigationBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function NavigationBar({ activeTab, onTabChange }: NavigationBarProps) {
  const tabs = [
    { id: 'home', icon: Home, label: '홈' },
    { id: 'favorites', icon: Heart, label: '찜한 브랜드' },
    { id: 'consultations', icon: MessageCircle, label: '상담 이력' },
    { id: 'notifications', icon: Bell, label: '알림' },
    { id: 'profile', icon: User, label: '내 정보' },
  ];

  return (
    <nav className="bg-gray-900 text-white px-8 py-4">
      <div className="flex justify-center space-x-12">
        {tabs.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`flex flex-col items-center space-y-2 px-6 py-3 rounded-lg transition-colors ${
              activeTab === id 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-300 hover:text-white hover:bg-gray-800'
            }`}
          >
            <Icon className="w-6 h-6" />
            <span className="text-lg">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}