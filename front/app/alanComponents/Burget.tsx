"use client"
import React from "react";
import { FaTimes, FaHome, FaStore, FaSmile } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    const router = useRouter();
    
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-y-0 right-0 bg-white z-50 w-64 shadow-lg"
        >
          <div className="p-4 bg-[#E63946] text-white flex justify-between items-center">
            <div className="flex items-center">
              <img src="/KZ.svg" alt="Flag" className="w-8 h-8" />
              <p className="ml-2 text-lg font-bold">Часть 1</p>
            </div>
            <FaTimes className="cursor-pointer" onClick={onClose} />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold">Ежедневные квесты</h2>
            <p className="text-sm">Заработать 10XP</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div className="bg-red-600 h-2.5 rounded-full" style={{ width: "50%" }}></div>
            </div>
            <nav className="flex flex-col space-y-4">
              <button onClick={() => router.push('/forum')} className="text-gray-700 flex items-center space-x-2">
                <span>Форум</span>
                <FaHome className="ml-auto" />
              </button>
              <button onClick={() => router.push('/invest')} className="text-gray-700 flex items-center space-x-2">
                <span>Инвестировать</span>
                <FaStore className="ml-auto" />
              </button>
              <button className="text-gray-700 flex items-center space-x-2">
                <span>Войти</span>
                <FaSmile className="ml-auto" />
              </button>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
