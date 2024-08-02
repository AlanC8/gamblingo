import Header from '../app/altairComponents/Header';
import About from '../app/altairComponents/About';
import Features from '../app/altairComponents/Features';
import Hero from '../app/altairComponents/Hero';
import HowItWorksSection from './altairComponents/HowItWorks';
import JoinUs from './altairComponents/JoinUs';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Features />
      <HowItWorksSection />
      <JoinUs />
    </>
  );
}
