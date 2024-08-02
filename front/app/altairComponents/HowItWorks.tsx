import React from 'react';
import Image from 'next/image';

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white relative">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="relative w-full lg:w-1/2 p-4">
          <Image src="/images/how-it-works.png" alt="How it works" width={500} height={500} className="mx-auto" />
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-8 text-blue-600">Как это работает?</h2>
          <ul className="space-y-6 text-left">
            <li className="flex items-start">
              <Image src="/images/sticker1.png" alt="Step 1" width={40} height={40} className="mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Зарегистрируйтесь</h3>
                <p className="text-gray-700">Создайте учетную запись на Halyk Invest.</p>
              </div>
            </li>
            <li className="flex items-start">
              <Image src="/images/sticker2.png" alt="Step 2" width={40} height={40} className="mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Выберите трэк обучения</h3>
                <p className="text-gray-700">Найдите подходящую для вас программу курса.</p>
              </div>
            </li>
            <li className="flex items-start">
              <Image src="/images/sticker3.png" alt="Step 3" width={40} height={40} className="mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Исследуйте ресурсы</h3>
                <p className="text-gray-700">Получите доступ ко всей необходимой информации.</p>
              </div>
            </li>
            <li className="flex items-start">
              <Image src="/images/sticker4.png" alt="Step 4" width={40} height={40} className="mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Получите бонусы сертификаты</h3>
                <p className="text-gray-700">По мере прохождения курсов</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
