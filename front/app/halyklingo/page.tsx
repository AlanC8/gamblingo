"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  FaStar,
  FaBook,
  FaLock,
  FaBox,
  FaRocket,
  FaHome,
  FaStore,
  FaSmile,
  FaBars,
  FaExpandArrowsAlt,
} from "react-icons/fa";
import BurgerMenu from "../alanComponents/Burget"; // Убедитесь, что путь правильный

const MainComponent: React.FC = () => {
  const router = useRouter();
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
          <span>🔥</span>
          <span>0</span>
          <FaStar />
          <span>0</span>
        </div>
        <div onClick={toggleBurgerMenu} className="">
          <FaBars className="w-6 h-6 cursor-pointer" />
        </div>
      </header>
      <header className="bg-[#E63946] text-white p-4 flex justify-between items-center">
        <div className="ml-2">
          <p className="text-lg font-bold">Часть 1</p>
          <p className="text-sm">
            В этой части вы поймёте основные правила финансовой грамотности
          </p>
        </div>
        <div className="">
          <button className="bg-[#FF5E6A] p-2 rounded-lg shadow-lg flex items-center justify-center">
            <FaExpandArrowsAlt className="text-white" />
          </button>
        </div>
      </header>
      <main className="flex-1 flex flex-col justify-center items-center space-y-6">
        <button
          onClick={() => router.push(`/halyklingo/${1}`)}
          className="bg-[#FF5E6A] p-6 rounded-full shadow-lg flex items-center justify-center"
        >
          <FaStar className="text-white" />
        </button>
        <button
          onClick={() => router.push(`/halyklingo/${2}`)}
          className="bg-[#FF5E6A] p-6 rounded-full shadow-lg flex items-center justify-center"
        >
          <FaBook className="text-white" />
        </button>
        <button
          onClick={() => router.push(`/halyklingo/${3}`)}
          className="bg-[#FF5E6A] p-6 rounded-full shadow-lg flex items-center justify-center"
        >
          <FaLock className="text-white" />
        </button>
        <button
          onClick={() => router.push(`/halyklingo/${4}`)}
          className="bg-[#FF5E6A] p-6 rounded-full shadow-lg flex items-center justify-center"
        >
          <FaBox className="text-white" />
        </button>
        <button
          onClick={() => router.push(`/halyklingo/${5}`)}
          className="bg-[#FF5E6A] p-6 rounded-full shadow-lg flex items-center justify-center"
        >
          <FaRocket className="text-white" />
        </button>
      </main>
      <footer className="bg-[#E63946] p-4 flex justify-around items-center">
        <button className="text-white">
          <FaHome />
        </button>
        <button className="text-white">
          <FaStore />
        </button>
        <button className="text-white">
          <FaSmile />
        </button>
      </footer>
      <BurgerMenu isOpen={isBurgerOpen} onClose={toggleBurgerMenu} />
    </div>
  );
};

export default MainComponent;
