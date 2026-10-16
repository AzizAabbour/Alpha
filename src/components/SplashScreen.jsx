import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SplashScreen.css';

export default function SplashScreen({ onFinish }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Lock scrolling while splash screen is active
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 1800);

    const finishTimer = setTimeout(() => {
      document.body.style.overflow = '';
      if (onFinish) onFinish();
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
      document.body.style.overflow = '';
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          className="splash"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] }
          }}
        >
          {/* Ambient Background Aura */}
          <div className="splash__bg">
            <div className="splash__glow" />
            <div className="splash__dot-grid" />
          </div>

          <motion.div
            className="splash__content"
            initial={{ scale: 0.7, opacity: 0, filter: 'blur(12px)' }}
            animate={{
              scale: [0.7, 1.06, 1],
              opacity: [0, 1, 1],
              filter: ['blur(12px)', 'blur(0px)', 'blur(0px)'],
              transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
            }}
            exit={{
              scale: 1.8,
              opacity: 0,
              filter: 'blur(16px)',
              transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] }
            }}
          >
            {/* Glowing Logo Frame */}
            <div className="splash__logo-box">
              <div className="splash__logo-aura" />
              <img
                src="/logo.png"
                alt="CréoLab-Web Logo"
                className="splash__logo"
              />
            </div>

            {/* Brand Title */}
            <motion.h1
              className="splash__title"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              CréoLab<span className="splash__title-highlight">-Web</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="splash__tagline"
              initial={{ opacity: 0, letterSpacing: '0.15em' }}
              animate={{ opacity: 0.8, letterSpacing: '0.25em' }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              STUDIO DIGITAL & INGÉNIERIE
            </motion.p>

            {/* Premium Gold Loading Bar */}
            <div className="splash__loader-track">
              <motion.div
                className="splash__loader-bar"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.6, ease: [0.25, 1, 0.5, 1] }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
