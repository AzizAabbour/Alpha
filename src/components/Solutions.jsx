import { motion } from 'framer-motion';
import { Globe, AppWindow, Smartphone, Cpu, Layers, ArrowRight } from 'lucide-react';
import GradientText from './GradientText';
import FoldText from './FoldText';
import './Solutions.css';

const steps = [
  {
    step: '01',
    icon: Globe,
    title: 'Site Web',
    desc: 'Présence en ligne vitrine & corporate haute performance.',
  },
  {
    step: '02',
    icon: AppWindow,
    title: 'Application Web',
    desc: 'Outils SaaS, portails interactifs & automatisation.',
  },
  {
    step: '03',
    icon: Smartphone,
    title: 'Application Mobile',
    desc: 'Applications iOS et Android fluides et intuitives.',
  },
  {
    step: '04',
    icon: Cpu,
    title: 'Logiciel',
    desc: 'Systèmes personnalisés adaptés à vos processus.',
  },
  {
    step: '05',
    icon: Layers,
    title: 'Plateforme',
    desc: 'Écosystèmes complets avec tableaux de bord et API.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Solutions() {
  return (
    <section className="section section--compact">
      <div className="container">
        <div className="solutions__header">
          <motion.div
            className="section-label"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            Types de produits
          </motion.div>
          <motion.h2
            className="section-title"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Du concept à la <GradientText colors={["#9B7842","#d4a85c","#b8965a"]} animationSpeed={8} showBorder={false}>solution digitale</GradientText>
          </motion.h2>
          <motion.div
            className="section-subtitle"
            style={{ margin: '0 auto' }}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FoldText
              text="Une couverture technologique complète pour matérialiser tous vos projets numériques."
              splitBy="word"
              trigger="scroll"
              duration={0.5}
              stagger={0.02}
            />
          </motion.div>
        </div>

        <div className="solutions__flow">
          <div className="solutions__line" />
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.step} style={{ display: 'contents' }}>
                <motion.div
                  className="solution-step"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="solution-step__badge">{item.step}</span>
                  <div className="solution-step__icon-wrapper">
                    <Icon size={22} />
                  </div>
                  <h3 className="solution-step__title">{item.title}</h3>
                  <div className="solution-step__desc">
                    <FoldText
                      text={item.desc}
                      splitBy="word"
                      trigger="scroll"
                      duration={0.45}
                      stagger={0.025}
                    />
                  </div>
                </motion.div>
                {index < steps.length - 1 && (
                  <motion.div
                    className="solutions__arrow"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.05 }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

