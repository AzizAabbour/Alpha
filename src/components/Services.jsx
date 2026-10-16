import { motion } from 'framer-motion';
import {
  Globe, AppWindow, Smartphone, Cog,
  ShoppingCart, LayoutDashboard, Plug, Puzzle,
} from 'lucide-react';
import GradientText from './GradientText';
import FoldText from './FoldText';
import './Services.css';

const services = [
  {
    icon: Globe,
    title: 'Sites Web',
    text: 'Création de sites web modernes, rapides, responsives et adaptés aux besoins de votre entreprise.',
  },
  {
    icon: AppWindow,
    title: 'Applications Web',
    text: "Développement d'applications web interactives et performantes pour automatiser et digitaliser vos activités.",
  },
  {
    icon: Smartphone,
    title: 'Applications Mobiles',
    text: "Création d'applications mobiles modernes pour Android et iOS.",
  },
  {
    icon: Cog,
    title: 'Solutions Logicielles',
    text: 'Développement de logiciels et plateformes personnalisées adaptés à vos processus métier.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    text: 'Création de boutiques en ligne modernes avec gestion des produits, commandes, utilisateurs et paiements.',
  },
  {
    icon: LayoutDashboard,
    title: 'Plateformes & Dashboards',
    text: 'Développement de tableaux de bord et plateformes permettant de gérer facilement vos activités et données.',
  },
  {
    icon: Plug,
    title: 'API & Intégrations',
    text: 'Connexion avec des API, services externes, systèmes de paiement et différentes plateformes.',
  },
  {
    icon: Puzzle,
    title: 'Solutions sur mesure',
    text: 'Développement de solutions entièrement personnalisées selon les besoins spécifiques du client.',
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

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="services__header">
          <motion.div
            className="section-label"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            Expertises
          </motion.div>
          <motion.h2
            className="section-title"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Nos <GradientText colors={["#9B7842","#d4a85c","#b8965a"]} animationSpeed={8} showBorder={false}>expertises</GradientText>
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
              text="Des solutions digitales complètes pour répondre à chaque besoin de votre activité."
              splitBy="word"
              trigger="scroll"
              duration={0.5}
              stagger={0.02}
            />
          </motion.div>
        </div>

        <motion.div
          className="services__grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {services.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              className="service-card"
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <div className="service-card__icon">
                <Icon size={20} />
              </div>
              <h3 className="service-card__title">{title}</h3>
              <div className="service-card__text">
                <FoldText
                  text={text}
                  splitBy="word"
                  trigger="scroll"
                  duration={0.45}
                  stagger={0.02}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

