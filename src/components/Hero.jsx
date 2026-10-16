import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, Check, Copy, Sparkles, Code2 } from 'lucide-react';
import GradientText from './GradientText';
import FoldText from './FoldText';
import './Hero.css';

const PRESETS = [
  {
    id: 'web',
    label: 'Web & SaaS',
    filename: 'PlatformCore.tsx',
    tag: '#9B7842',
    code: `import { CreoLabWeb } from '@creolab/core';

export function WebPlatform() {
  return (
    <CreoLabWeb
      type="SaaS & Plateforme Web"
      color="#9B7842"
      performance={100}
      speed="Ultra-rapide"
      seoOptimized={true}
      scalability="Haute Disponibilité"
      security="Niveau Bancaire"
      impact="Maximum"
    />
  );
}`
  },
  {
    id: 'mobile',
    label: 'Mobile iOS/Android',
    filename: 'MobileEngine.tsx',
    tag: '#b8965a',
    code: `import { MobileEngine } from '@creolab/mobile';

export function NativeApp() {
  return (
    <MobileEngine
      platforms={['iOS', 'Android']}
      color="#b8965a"
      framerate={120}
      offlineReady={true}
      biometricAuth={true}
      syncInterval="Temps Réel"
      uiPolish="Pixel-Perfect"
    />
  );
}`
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce',
    filename: 'CommerceFlow.tsx',
    tag: '#d4a85c',
    code: `import { LuxuryStore } from '@creolab/commerce';

export function DigitalStore() {
  return (
    <LuxuryStore
      theme="Haut de Gamme"
      color="#d4a85c"
      conversionSpeed="< 400ms"
      payments={['Stripe', 'Apple Pay']}
      inventorySync="Automatisé"
      growth="Exponentielle"
    />
  );
}`
  },
  {
    id: 'design',
    label: 'UI/UX & 3D',
    filename: 'DesignSystem.tsx',
    tag: '#e5c583',
    code: `import { ModernExperience } from '@creolab/design';

export function Interface() {
  return (
    <ModernExperience
      style="Dark Luxury & Minimal"
      color="#e5c583"
      microInteractions={true}
      animations="Framer 60fps"
      responsive="Tous Écrans"
      brandIdentity="Sur-Mesure"
    />
  );
}`
  }
];

export default function Hero() {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const activePreset = PRESETS[activePresetIndex];

  const handleClick = (href) => {
    const el = document.getElementById(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(activePreset.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="accueil" className="hero">
      {/* Background ambient lighting and dot grid */}
      <div className="hero__bg">
        <div className="hero__dot-grid" />
        <div className="hero__aurora" />
        <div className="hero__glow hero__glow--center" />
        <div className="hero__glow hero__glow--right" />
      </div>

      <div className="container container--wide">
        <div className="hero__layout">
          {/* Left Column: Hero Text & CTAs */}
          <div className="hero__left">
            {/* Pill Badge */}
            <motion.div
              className="hero__pill"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onClick={() => handleClick('solutions')}
            >
              <span className="hero__pill-tag">AGENCE DIGITALE</span>
              <span className="hero__pill-text">
                CRÉOLAB STUDIO <ChevronRight size={13} />
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="hero__title"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Des solutions digitales pour{' '}
              <GradientText
                colors={["#d4a85c", "#b8965a", "#f5dfa8", "#9B7842"]}
                animationSpeed={6}
                showBorder={false}
              >
                entrepreneurs visionnaires
              </GradientText>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              className="hero__subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <FoldText
                text="CréoLab-Web conçoit des sites web d'exception, des applications mobiles et des architectures logicielles sur mesure pour propulser votre activité vers le sommet."
                splitBy="word"
                hinge="top"
                trigger="mount"
                duration={0.65}
                stagger={0.03}
                fontSize="inherit"
                fontWeight="inherit"
                color="inherit"
              />
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <button
                className="btn btn--primary hero__btn-main"
                onClick={() => handleClick('contact')}
              >
                <span>Démarrer un projet</span>
                <ArrowRight size={16} />
              </button>

              <button
                className="btn btn--secondary hero__btn-sub"
                onClick={() => handleClick('services')}
              >
                <Code2 size={16} className="hero__btn-icon" />
                <span>Découvrir nos services</span>
                <span className="hero__btn-counter">4+ Pôles</span>
              </button>
            </motion.div>

            {/* Key Value Points */}
            <motion.div
              className="hero__stats-row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="hero__stat-badge">
                <Sparkles size={13} className="hero__stat-icon" />
                <span>100% SUR MESURE</span>
              </div>
              <span className="hero__stat-divider">•</span>
              <div className="hero__stat-badge">
                <span>HAUTE PERFORMANCE</span>
              </div>
              <span className="hero__stat-divider">•</span>
              <div className="hero__stat-badge">
                <span>SUPPORT DÉDIÉ</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Code Showcase Window */}
          <motion.div
            className="hero__right"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <div className="hero__code-wrapper">
              {/* Backlight effect */}
              <div className="hero__code-glow" />

              <div className="hero__code-window">
                {/* Window Header */}
                <div className="hero__code-header">
                  <div className="hero__code-dots">
                    <span className="dot dot--red" />
                    <span className="dot dot--yellow" />
                    <span className="dot dot--green" />
                  </div>

                  <div className="hero__code-file">
                    <span className="file-icon">TSX</span>
                    <span>{activePreset.filename}</span>
                  </div>

                  <button
                    className="hero__code-copy"
                    onClick={handleCopy}
                    title="Copier le code"
                  >
                    {copied ? <Check size={14} className="copied" /> : <Copy size={14} />}
                    <span>{copied ? 'Copié !' : 'Copier'}</span>
                  </button>
                </div>

                {/* Window Body: Code Display */}
                <div className="hero__code-body">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activePreset.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="hero__code-content"
                    >
                      <pre>
                        <code>
                          <span className="kwd">import</span> {'{ '}
                          <span className="component-name">
                            {activePreset.id === 'web'
                              ? 'CreoLabWeb'
                              : activePreset.id === 'mobile'
                              ? 'MobileEngine'
                              : activePreset.id === 'ecommerce'
                              ? 'LuxuryStore'
                              : 'ModernExperience'}
                          </span>
                          {' }'} <span className="kwd">from</span>{' '}
                          <span className="str">
                            {activePreset.id === 'web'
                              ? "'@creolab/core'"
                              : activePreset.id === 'mobile'
                              ? "'@creolab/mobile'"
                              : activePreset.id === 'ecommerce'
                              ? "'@creolab/commerce'"
                              : "'@creolab/design'"}
                          </span>
                          ;{'\n\n'}
                          <span className="kwd">export function</span>{' '}
                          <span className="fn">
                            {activePreset.id === 'web'
                              ? 'WebPlatform'
                              : activePreset.id === 'mobile'
                              ? 'NativeApp'
                              : activePreset.id === 'ecommerce'
                              ? 'DigitalStore'
                              : 'Interface'}
                          </span>
                          () {'{\n'}
                          {'  '}<span className="kwd">return</span> ({'\n'}
                          {'    '}&lt;
                          <span className="component-name">
                            {activePreset.id === 'web'
                              ? 'CreoLabWeb'
                              : activePreset.id === 'mobile'
                              ? 'MobileEngine'
                              : activePreset.id === 'ecommerce'
                              ? 'LuxuryStore'
                              : 'ModernExperience'}
                          </span>
                          {'\n'}
                          {activePreset.id === 'web' && (
                            <>
                              {'      '}<span className="prop">type</span>=<span className="str">"SaaS & Plateforme Web"</span>{'\n'}
                              {'      '}<span className="prop">color</span>=<span className="color-badge"><span className="color-preview" style={{ background: activePreset.tag }} />"{activePreset.tag}"</span>{'\n'}
                              {'      '}<span className="prop">performance</span>={<span className="num">100</span>}{'\n'}
                              {'      '}<span className="prop">speed</span>=<span className="str">"Ultra-rapide"</span>{'\n'}
                              {'      '}<span className="prop">seoOptimized</span>={<span className="bool">true</span>}{'\n'}
                              {'      '}<span className="prop">scalability</span>=<span className="str">"Haute Disponibilité"</span>{'\n'}
                              {'      '}<span className="prop">security</span>=<span className="str">"Niveau Bancaire"</span>{'\n'}
                              {'      '}<span className="prop">impact</span>=<span className="str">"Maximum"</span>{'\n'}
                            </>
                          )}
                          {activePreset.id === 'mobile' && (
                            <>
                              {'      '}<span className="prop">platforms</span>={[<span className="str">"iOS"</span>, <span className="str">"Android"</span>]}{'\n'}
                              {'      '}<span className="prop">color</span>=<span className="color-badge"><span className="color-preview" style={{ background: activePreset.tag }} />"{activePreset.tag}"</span>{'\n'}
                              {'      '}<span className="prop">framerate</span>={<span className="num">120</span>}{'\n'}
                              {'      '}<span className="prop">offlineReady</span>={<span className="bool">true</span>}{'\n'}
                              {'      '}<span className="prop">biometricAuth</span>={<span className="bool">true</span>}{'\n'}
                              {'      '}<span className="prop">syncInterval</span>=<span className="str">"Temps Réel"</span>{'\n'}
                              {'      '}<span className="prop">uiPolish</span>=<span className="str">"Pixel-Perfect"</span>{'\n'}
                            </>
                          )}
                          {activePreset.id === 'ecommerce' && (
                            <>
                              {'      '}<span className="prop">theme</span>=<span className="str">"Haut de Gamme"</span>{'\n'}
                              {'      '}<span className="prop">color</span>=<span className="color-badge"><span className="color-preview" style={{ background: activePreset.tag }} />"{activePreset.tag}"</span>{'\n'}
                              {'      '}<span className="prop">conversionSpeed</span>=<span className="str">"&lt; 400ms"</span>{'\n'}
                              {'      '}<span className="prop">payments</span>={[<span className="str">"Stripe"</span>, <span className="str">"Apple Pay"</span>]}{'\n'}
                              {'      '}<span className="prop">inventorySync</span>=<span className="str">"Automatisé"</span>{'\n'}
                              {'      '}<span className="prop">growth</span>=<span className="str">"Exponentielle"</span>{'\n'}
                            </>
                          )}
                          {activePreset.id === 'design' && (
                            <>
                              {'      '}<span className="prop">style</span>=<span className="str">"Dark Luxury & Minimal"</span>{'\n'}
                              {'      '}<span className="prop">color</span>=<span className="color-badge"><span className="color-preview" style={{ background: activePreset.tag }} />"{activePreset.tag}"</span>{'\n'}
                              {'      '}<span className="prop">microInteractions</span>={<span className="bool">true</span>}{'\n'}
                              {'      '}<span className="prop">animations</span>=<span className="str">"Framer 60fps"</span>{'\n'}
                              {'      '}<span className="prop">responsive</span>=<span className="str">"Tous Écrans"</span>{'\n'}
                              {'      '}<span className="prop">brandIdentity</span>=<span className="str">"Sur-Mesure"</span>{'\n'}
                            </>
                          )}
                          {'    '}/&gt;{'\n'}
                          {'  '});{'\n'}
                          {'}'}
                        </code>
                      </pre>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Window Footer: Preset Switcher Tabs */}
                <div className="hero__code-footer">
                  <div className="hero__code-tabs">
                    {PRESETS.map((preset, idx) => (
                      <button
                        key={preset.id}
                        className={`hero__code-tab ${activePresetIndex === idx ? 'hero__code-tab--active' : ''}`}
                        onClick={() => setActivePresetIndex(idx)}
                      >
                        <span
                          className="hero__code-tab-dot"
                          style={{ background: activePresetIndex === idx ? preset.tag : 'rgba(255,255,255,0.2)' }}
                        />
                        {preset.label}
                      </button>
                    ))}
                  </div>

                  <div className="hero__code-hint">
                    <span>⚡ 100% Personnalisable</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

