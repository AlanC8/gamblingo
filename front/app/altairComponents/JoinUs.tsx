import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold text-amber-400 mb-4">
          Halyk Learn
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Присоединяйтесь к нам и начните инвестировать прямо сейчас
        </p>
        <button className="bg-amber-400 text-black px-6 py-3 rounded-lg text-lg ">
          <Link href='halyklingo'>Начать обучение</Link>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
