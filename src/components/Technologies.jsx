import { motion } from 'framer-motion';
import { Monitor, Server, Smartphone, Database, Wrench, Sparkles } from 'lucide-react';
import GradientText from './GradientText';
import FoldText from './FoldText';
import './Technologies.css';

const techBadges = [
  { name: 'React.js', category: 'Frontend' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'HTML5 / CSS3', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'PHP / Laravel', category: 'Backend' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'MySQL', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Git & GitHub', category: 'DevOps' },
  { name: 'REST APIs', category: 'Integration' },
  { name: 'Framer Motion', category: 'UI/UX' },
  { name: 'Radix UI', category: 'UI' },
  { name: 'Lucide Icons', category: 'Design' },
];

const stackCategories = [
  {
    icon: Monitor,
    category: 'Frontend',
    items: ['React.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)'],
  },
  {
    icon: Server,
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'PHP', 'Laravel'],
  },
  {
    icon: Smartphone,
    category: 'Mobile',
    items: ['React Native', 'Flutter', 'Android APK', 'iOS'],
  },
  {
    icon: Database,
    category: 'Base de données',
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    icon: Wrench,
    category: 'Outils & Intégrations',
    items: ['Git', 'GitHub', 'REST APIs', 'Webhooks'],
  },
  {
    icon: Sparkles,
    category: 'UI & Animation',
    items: ['Framer Motion', 'Radix UI', 'Lucide React'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

export default function Technologies() {
  return (
    <section id="technologies" className="section">
      <div className="container">
        <div className="tech__header">
          <motion.div
            className="section-label"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            Stack technique
          </motion.div>
          <motion.h2
            className="section-title"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Les <GradientText colors={["#9B7842","#d4a85c","#b8965a"]} animationSpeed={8} showBorder={false}>technologies</GradientText> que nous utilisons
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
              text="Un ensemble d'outils modernes, robustes et éprouvés pour garantir performance et pérennité."
              splitBy="word"
              trigger="scroll"
              duration={0.5}
              stagger={0.02}
            />
          </motion.div>
        </div>

        {/* Tech Badges Grid */}
        <motion.div
          className="tech__grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {techBadges.map((tech) => (
            <motion.div
              key={tech.name}
              className="tech-badge"
              variants={fadeUp}
              transition={{ duration: 0.4 }}
            >
              <span className="tech-badge__name">{tech.name}</span>
              <span className="tech-badge__category">{tech.category}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Architecture Breakdown */}
        <motion.h3
          className="tech-stack__title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          Architecture de développement
        </motion.h3>

        <motion.div
          className="tech-stack__grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {stackCategories.map(({ icon: Icon, category, items }) => (
            <motion.div
              key={category}
              className="stack-card"
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <div className="stack-card__header">
                <Icon size={20} className="stack-card__icon" />
                <h4 className="stack-card__category">{category}</h4>
              </div>
              <div className="stack-card__items">
                {items.map((item) => (
                  <span key={item} className="stack-card__item">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
