import { motion } from 'framer-motion';
import { Sliders, Cpu, Gauge, Palette, ShieldCheck, Briefcase } from 'lucide-react';
import GradientText from './GradientText';
import FoldText from './FoldText';
import './WhyUs.css';

const advantages = [
  {
    icon: Sliders,
    title: 'Sur mesure',
    desc: 'Chaque solution est pensée et développée selon les besoins réels et les objectifs précis de votre entreprise.',
  },
  {
    icon: Cpu,
    title: 'Technologies modernes',
    desc: 'Nous utilisons des technologies actuelles, performantes et pérennes adaptées aux exigences des projets modernes.',
  },
  {
    icon: Gauge,
    title: 'Performance',
    desc: 'Nous accordons une importance primordiale à la rapidité d’exécution, la stabilité technique et l’expérience utilisateur.',
  },
  {
    icon: Palette,
    title: 'Design & Développement',
    desc: 'Une harmonie parfaite entre esthétique raffinée, ergonomie intuitive et architecture technique solide.',
  },
  {
    icon: ShieldCheck,
    title: 'Accompagnement',
    desc: 'Nous vous guidons de la genèse de l’idée jusqu’au déploiement final, avec un suivi rigoureux pour faire évoluer votre produit.',
  },
  {
    icon: Briefcase,
    title: 'Approche professionnelle',
    desc: 'Communication transparente, développement rigoureusement structuré et solutions conçues pour grandir avec vous.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export default function WhyUs() {
  return (
    <section className="section">
      <div className="container">
        <div className="why-us__header">
          <motion.div
            className="section-label"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            Pourquoi nous
          </motion.div>
          <motion.h2
            className="section-title"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Pourquoi choisir <GradientText colors={["#9B7842","#d4a85c","#b8965a"]} animationSpeed={8} showBorder={false}>CréoLab-Web</GradientText> ?
          </motion.h2>
          <motion.div
            className="section-subtitle"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FoldText
              text="Notre engagement : transformer vos ambitions en atouts numériques performants et fiables."
              splitBy="word"
              trigger="scroll"
              duration={0.5}
              stagger={0.02}
            />
          </motion.div>
        </div>

        <motion.div
          className="why-us__grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {advantages.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              className="why-card"
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <div className="why-card__top">
                <div className="why-card__icon">
                  <Icon size={22} />
                </div>
                <h3 className="why-card__title">{title}</h3>
                <div className="why-card__desc">
                  <FoldText
                    text={desc}
                    splitBy="word"
                    trigger="scroll"
                    duration={0.45}
                    stagger={0.02}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

