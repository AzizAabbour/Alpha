import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageSquare, Menu, X, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Agence', href: '#agence' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [hoveredLink, setHoveredLink] = useState(null);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('creolab-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('creolab-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-wrapper ${scrolled ? 'navbar-wrapper--scrolled' : 'navbar-wrapper--top'}`}>
      <nav
        className={`navbar-pill ${scrolled ? 'navbar-pill--floating' : 'navbar-pill--flat'}`}
        role="navigation"
        aria-label="Navigation principale"
      >
        {/* Left Side: Brand Logo + Slash Divider + Nav links */}
        <div className="navbar-pill__left">
          <a
            href="#accueil"
            className="navbar-pill__brand"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#accueil');
            }}
            aria-label="CréoLab-Web"
          >
            <span
              className="navbar-pill__brand-name"
              style={{ fontSize: '1rem', color: '#a77c4e' }}
            >
              CréoLab-web
            </span>
          </a>

          <span className="navbar-pill__separator">/</span>

          {/* Desktop Navigation Links */}
          <div
            className="navbar-pill__links"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              const isHovered = hoveredLink === link.href;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`navbar-pill__link ${isActive ? 'navbar-pill__link--active' : ''}`}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  <span className="navbar-pill__link-label">{link.label}</span>

                  {/* Active capsule background */}
                  {isActive && !isHovered && (
                    <motion.div
                      layoutId="activePill"
                      className="navbar-pill__link-bg navbar-pill__link-bg--active"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}

                  {/* Hover capsule background */}
                  {isHovered && (
                    <motion.div
                      layoutId="hoverPill"
                      className="navbar-pill__link-bg navbar-pill__link-bg--hover"
                      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Side: Theme Toggle, Quick Action & CTA */}
        <div className="navbar-pill__right">
          {/* Theme Toggle Button (Light / Dark) */}
          <button
            className="navbar-pill__icon-btn"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
            aria-label="Basculer entre mode clair et sombre"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              </motion.div>
            </AnimatePresence>
          </button>

          <a
            href="#contact"
            className="navbar-pill__badge-btn"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
          >
            <MessageSquare size={13} />
            <span>Devis Express</span>
          </a>

          {/* Main Gold Gradient CTA */}
          <a
            href="#contact"
            className="navbar-pill__cta"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
          >
            <span>Démarrer un projet</span>
            <ArrowRight size={14} className="navbar-pill__cta-arrow" />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            className={`navbar-pill__burger ${mobileOpen ? 'navbar-pill__burger--open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar-pill__mobile-menu"
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.25 }}
          >
            <div className="navbar-pill__mobile-links">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`navbar-pill__mobile-link ${
                    activeSection === link.href.slice(1) ? 'navbar-pill__mobile-link--active' : ''
                  }`}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <div className="navbar-pill__mobile-footer">
              <a
                href="#contact"
                className="navbar-pill__cta navbar-pill__cta--full"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
              >
                <span>Démarrer un projet</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}



