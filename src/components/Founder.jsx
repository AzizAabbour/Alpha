import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import FoldText from './FoldText';
import profileImg from '../assets/prfl1.png';
import './Founder.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Founder() {
  return (
    <section className="section section--compact">
      <div className="container">
        <motion.div
          className="section-label"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          Fondateur
        </motion.div>

        <motion.div
          className="founder__card"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="founder__avatar">
            <img src={profileImg} alt="Aziz Aabbour" className="founder__avatar-img" />
          </div>

          <div className="founder__info">
            <h3 className="founder__name">Aziz Aabbour</h3>
            <p className="founder__role">Fondateur & Développeur Full-Stack & Développeur Mobile</p>
            <div className="founder__bio">
              <FoldText
                text="Passionné par l’ingénierie logicielle et le design d’interfaces, Aziz a fondé CréoLab-Web avec la conviction d’offrir aux entreprises, startups et porteurs de projet des solutions digitales sur mesure, performantes et axées sur l’excellence technique."
                splitBy="word"
                trigger="scroll"
                duration={0.5}
                stagger={0.02}
              />
            </div>

            <div className="founder__links">
              <a
                href="https://azizaabbour.xo.je/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary btn--small"
              >
                Voir mon portfolio <ExternalLink size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/aziz-aabbour-1143b1351/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary btn--small"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href="https://github.com/AzizAabbour?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary btn--small"
              >
                <Github size={14} /> GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
