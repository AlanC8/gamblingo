import React from 'react';

const features = [
  { title: 'Бесплатные уроки', description: 'Учитесь на уроках разработанные профессиональными финансистами.' },
  { title: 'Персонализированный темп обучения', description: 'Выбирайте еженедельный план по учебе.' },
  { title: 'Официальный сертификат', description: 'Получите профессиональную сертификацию от Halyk Bank о прохождении курса.' },
  { title: 'Бонус по завершению курса', description: 'По мере прохождения, зарабатывайте бонусы, которые можно использовать в личном инвестиционном счету для старта вашего первого портфолио.' },
  { title: 'Поддержка клиентов', description: 'Задавайте вопросы у ИИ эксперта в области финансов в случае возникновения трудности в обучении' },
  { title: 'Реферальная программа', description: 'Пригласи знакомого - получи приятный бонус от Halyk Bank' },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-20" style={{ backgroundImage: 'url(/images/background.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-white">Что мы предлагаем?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-4 bg-white bg-opacity-90 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
    </section>
  );
};

export default FeaturesSection;
