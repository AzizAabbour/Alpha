import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Solutions from './components/Solutions';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Technologies from './components/Technologies';
import Founder from './components/Founder';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGrid from './components/CursorGrid';
import ScrollToTop from './components/ScrollToTop';
import SplashScreen from './components/SplashScreen';

export default function App() {
  const [splashFinished, setSplashFinished] = useState(false);

  return (
    <div className="app">
      {/* Cinematic Splash Screen */}
      {!splashFinished && <SplashScreen onFinish={() => setSplashFinished(true)} />}

      {/* Fixed full-page CursorGrid background */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}>
        <CursorGrid
          cellSize={70}
          color="#9B7842"
          radius={140}
          falloff="smooth"
          holdTime={400}
          fadeDuration={800}
          lineWidth={1.2}
          maxOpacity={1}
          fillOpacity={0}
          gridOpacity={0}
          cellRadius={0}
          clickPulse
          pulseSpeed={600}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Solutions />
          <WhyUs />
          <Process />
          <Technologies />
          <Founder />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}


