"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaStar, FaBars, FaExpandArrowsAlt } from "react-icons/fa";
import { syllabus } from "../syllabus";
import BurgerMenu from "../../alanComponents/Burget";

const Page = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const item = syllabus[+id - 1];
  const [showTest, setShowTest] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const handleNextClick = () => {
    setShowTest(true);
  };

  const handleCheckAnswer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedAnswer === item.test.correct - 1) {
      setShowModal(true);
    } else {
      alert("Неправильный ответ, попробуйте снова.");
    }
  };

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(parseInt(e.target.value, 10));
  };

  const handleStay = () => {
    setShowModal(false);
  };

  const handleNextLesson = () => {
    router.push(`/halyklingo/${parseInt(id, 10) + 1}`);
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
        <div onClick={() => toggleBurgerMenu()} className="">
          <FaBars className="w-6 h-6" />
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
      <div className="w-full max-w-xl bg-white shadow-md rounded-lg p-4 mx-auto mt-4 flex-grow">
        {!showTest ? (
          <div className="flex flex-col justify-between h-[700px]">
            <div className="headers">
              <div className="w-[100%] bg-gray-300 h-[200px] rounded-lg mb-6"></div>
              <h2 className="text-xl mb-2 font-bold">{item.title}</h2>
              <p className="text-gray-500">{item.text}</p>
            </div>
            <button
              onClick={handleNextClick}
              className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
            >
              NEXT
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">{item.test.question}</h2>
            <form
              className="flex flex-col justify-between h-[430px]"
              onSubmit={handleCheckAnswer}
            >
              <div className="">
                {item.test.answers.map((answer, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="radio"
                      id={`answer${index}`}
                      name="answer"
                      value={index}
                      onChange={handleAnswerChange}
                      className="mr-2"
                    />
                    <label htmlFor={`answer${index}`} className="text-gray-700">
                      {answer}
                    </label>
                  </div>
                ))}
                <div className=" mt-6">
                  <hr />
                  <p className="text-gray-500 text-sm mt-2">
                    Подсказка: это долговые ценные бумаги
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
              >
                CHECK
              </button>
            </form>
          </div>
        )}

        {showModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-4">
                Все правильно, молодец!
              </h2>
              <p>Так держать!</p>
              <div className="mt-4">
                <button
                  onClick={handleStay}
                  className="bg-white border border-black text-black py-2 px-4 rounded-md mr-2 hover:bg-gray-600"
                >
                  Остаться
                </button>
                <button
                  onClick={handleNextLesson}
                  className="bg-[#E63946] text-white py-2 px-4 rounded-md hover:bg-green-600"
                >
                  Вперед
                </button>
              </div>
            </div>
          </div>
        )}
        <BurgerMenu isOpen={isBurgerOpen} onClose={toggleBurgerMenu} />
      </div>
    </div>
  );
};

export default Page;
