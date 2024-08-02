"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Invest: React.FC = () => {
    const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-[#E63946] text-white p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center">
          <img src="/KZ.svg" alt="Flag" className="w-8 h-8" />
        </div>
        <div className="flex items-center space-x-2">
          <span>🔥 0</span>
          <span>💧 0</span>
        </div>
        <div className="flex items-center">
          <div className="bg-white p-1 rounded-full cursor-pointer">
            <div className="w-6 h-6 bg-red-500 rounded-full"></div>
          </div>
        </div>
      </header>
      <main className="flex-1 p-6 flex flex-col justify-center items-center space-y-8">
        <h2 className="text-3xl text-center font-bold mb-4">Выберите тип инвестиций</h2>
        <p className="text-gray-700 text-center max-w-md">
          Мы предлагаем два типа инвестиций: в компании и в стартапы. Выберите один из них, чтобы начать.
        </p>
        <div className="flex space-x-6">
          <button onClick={() => router.push('/invest/companys')} className="bg-[#FF5E6A] text-white py-4 px-8 rounded-lg text-xl shadow-lg hover:bg-red-600 transition duration-300 transform hover:scale-105">
            Инвестиции в компании
          </button>
          <button onClick={() => router.push('/invest/startups')} className="bg-[#FF5E6A] text-white py-4 px-8 rounded-lg text-xl shadow-lg hover:bg-red-600 transition duration-300 transform hover:scale-105">
            Инвестиции в стартапы
          </button>
        </div>
      </main>
    </div>
  );
}

export default Invest;
