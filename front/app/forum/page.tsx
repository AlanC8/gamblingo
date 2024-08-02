"use client"
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import BurgerMenu from "../alanComponents/Burget";
const Forum: React.FC = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-[#E63946] text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/KZ.svg" alt="Flag" className="w-8 h-8" />
        </div>
        <div className="flex items-center space-x-2">
          <span>🔥 0</span>
          <span>💧 0</span>
        </div>
        <div onClick={() => toggleBurgerMenu()} className="flex items-center">
          <FaBars />
        </div>
      </header>
      <main className="flex-1 p-4">
        <h2 className="text-xl font-bold mb-4">Популярные вопросы</h2>
        <div className="space-y-8">
          <div className="bg-gray-300 h-64 rounded-md"></div>
          <div className="bg-gray-300 h-64 rounded-md"></div>
          <div className="bg-gray-300 h-64 rounded-md"></div>
          <div className="bg-gray-300 h-64 rounded-md"></div>
        </div>
      </main><BurgerMenu isOpen={isBurgerOpen} onClose={toggleBurgerMenu} />

    </div>
  );
};

export default Forum;
