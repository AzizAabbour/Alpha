import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import ContactForm from './ContactForm';
import GradientText from './GradientText';
import FoldText from './FoldText';
import './Contact.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__header">
              <motion.div
                className="section-label"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
              >
                Contact
              </motion.div>
              <motion.h2
                className="section-title"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Vous avez une idée ? <GradientText colors={["#9B7842","#d4a85c","#b8965a"]} animationSpeed={8} showBorder={false}>Construisons-la</GradientText> ensemble.
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
                  text="Parlez-nous de votre projet et découvrons ensemble la meilleure solution pour le concrétiser."
                  splitBy="word"
                  trigger="scroll"
                  duration={0.5}
                  stagger={0.02}
                />
              </motion.div>
            </div>

            <motion.div
              className="contact__channels"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="mailto:azizaboue77@gmail.com" className="contact-channel" aria-label="Envoyer un email">
                <div className="contact-channel__icon">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="contact-channel__label">Email</div>
                  <div className="contact-channel__value">azizaboue77@gmail.com</div>
                </div>
              </a>

              <a href="tel:+212777996998" className="contact-channel" aria-label="Appeler par téléphone">
                <div className="contact-channel__icon">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="contact-channel__label">Téléphone</div>
                  <div className="contact-channel__value">+212 777 996 998</div>
                </div>
              </a>
            </motion.div>

            <motion.div
              className="contact__socials"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="https://azizaabbour.xo.je/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
              >
                <ExternalLink size={14} /> Portfolio
              </a>
              <a
                href="https://www.linkedin.com/in/aziz-aabbour-1143b1351/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href="https://github.com/AzizAabbour?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
              >
                <Github size={14} /> GitHub
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
