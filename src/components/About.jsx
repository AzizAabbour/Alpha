import { motion } from 'framer-motion';
import { Code2, Zap, Users } from 'lucide-react';
import GradientText from './GradientText';
import FoldText from './FoldText';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const highlights = [
  { icon: Code2, title: 'Technologie', text: 'Stack moderne et évolutif' },
  { icon: Zap, title: 'Performance', text: 'Solutions rapides et optimisées' },
  { icon: Users, title: 'Accompagnement', text: 'Suivi dédié à chaque projet' },
];

export default function About() {
  return (
    <section id="agence" className="section">
      <div className="container">
        <motion.div
          className="section-label"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          À propos
        </motion.div>

        <div className="about__grid">
          <div className="about__text">
            <motion.h2
              className="section-title"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              Une agence digitale pensée pour créer, développer et faire{' '}
              <GradientText colors={["#9B7842","#d4a85c","#b8965a"]} animationSpeed={8} showBorder={false}>évoluer</GradientText> vos idées.
            </motion.h2>

            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <FoldText
                text="CréoLab-Web est une agence de développement digital qui combine design, technologie et expertise métier pour concevoir des expériences numériques sur mesure."
                splitBy="word"
                trigger="scroll"
                duration={0.5}
                stagger={0.02}
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <FoldText
                text="Nous travaillons avec des entreprises, des startups et des entrepreneurs qui recherchent des solutions digitales de qualité : sites web, applications web et mobiles, logiciels et plateformes conçus pour durer et évoluer."
                splitBy="word"
                trigger="scroll"
                duration={0.5}
                stagger={0.02}
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <FoldText
                text="Notre approche repose sur la clarté, la performance et l'attention au détail — pour que chaque projet soit à la hauteur de vos ambitions."
                splitBy="word"
                trigger="scroll"
                duration={0.5}
                stagger={0.02}
              />
            </motion.div>
          </div>

          <motion.div
            className="about__visual"
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"  
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="about__composition">
              <motion.div
                className="about__ring about__ring--outer"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              >
                <span className="about__ring-label about__ring-label--top">DESIGN</span>
                <span className="about__ring-label about__ring-label--bottom">PERFORMANCE</span>
              </motion.div>
              <motion.div
                className="about__ring about__ring--middle"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
              >
                <span className="about__ring-label about__ring-label--right">TECHNOLOGIE</span>
              </motion.div>
              <div className="about__ring about__ring--inner" />
              <div className="about__center-text">
                <Code2 className="about__center-icon" size={28} />
                <span className="about__center-label">CréoLab</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about__highlights"
          variants={fadeUp}
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {highlights.map(({ icon: Icon, title, text }) => (
            <div className="about__highlight" key={title}>
              <Icon className="about__highlight-icon" size={22} />
              <h3 className="about__highlight-title">{title}</h3>
              <p className="about__highlight-text">{text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
