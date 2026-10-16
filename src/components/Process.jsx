import { motion } from 'framer-motion';
import GradientText from './GradientText';
import FoldText from './FoldText';
import './Process.css';

const steps = [
  {
    number: '01',
    title: 'Échange',
    desc: 'Nous discutons de votre idée, vos objectifs et vos besoins afin de cerner avec précision les contours et la vision de votre projet.',
  },
  {
    number: '02',
    title: 'Analyse',
    desc: 'Nous définissons l’architecture fonctionnelle, la structure technique et les priorités de développement pour un cadrage optimal.',
  },
  {
    number: '03',
    title: 'Conception',
    desc: 'Nous construisons une expérience utilisateur fluide et une interface visuelle raffinée, moderne et alignée sur votre image de marque.',
  },
  {
    number: '04',
    title: 'Développement',
    desc: 'Nous développons la solution avec un code propre, performant et évolutif en appliquant les meilleures technologies modernes.',
  },
  {
    number: '05',
    title: 'Livraison & Évolution',
    desc: 'Nous réalisons les tests rigoureux, assurons la mise en production et vous accompagnons pour faire évoluer la solution selon vos besoins.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Process() {
  return (
    <section id="methode" className="section">
      <div className="container">
        <div className="process__header">
          <motion.div
            className="section-label"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            Notre méthode
          </motion.div>
          <motion.h2
            className="section-title"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Une méthodologie <GradientText colors={["#9B7842","#d4a85c","#b8965a"]} animationSpeed={8} showBorder={false}>structurée</GradientText> et agile
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
              text="De la phase de découverte au déploiement continu, un cadre de travail transparent et efficace."
              splitBy="word"
              trigger="scroll"
              duration={0.5}
              stagger={0.02}
            />
          </motion.div>
        </div>

        <div className="process__timeline">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="process-item"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="process-item__marker">{step.number}</div>
              <div className="process-item__content">
                <h3 className="process-item__title">{step.title}</h3>
                <div className="process-item__desc">
                  <FoldText
                    text={step.desc}
                    splitBy="word"
                    trigger="scroll"
                    duration={0.45}
                    stagger={0.02}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

