import { Mail, Phone, ExternalLink } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import './Footer.css';

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Agence', href: '#agence' },
  { label: 'Services', href: '#services' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Méthode', href: '#methode' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (href) => {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a
              href="#accueil"
              className="footer__logo"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#accueil');
              }}
            >
              <img src="/logo.png" alt="CréoLab-Web" />
            </a>
            <p className="footer__desc">
              Agence digitale spécialisée dans la création de sites web,
              applications mobiles et solutions logicielles sur mesure.
            </p>
          </div>

          <div>
            <h4 className="footer__col-title">Navigation</h4>
            <ul className="footer__nav">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer__link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer__col-title">Contact & Réseaux</h4>
            <div className="footer__social-list">
              <a href="mailto:azizaboue77@gmail.com" className="footer__social-item">
                <Mail size={14} /> azizaboue77@gmail.com
              </a>
              <a href="tel:+212777996998" className="footer__social-item">
                <Phone size={14} /> +212 777 996 998
              </a>
              <a
                href="https://www.linkedin.com/in/aziz-aabbour-1143b1351/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-item"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href="https://github.com/AzizAabbour?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-item"
              >
                <Github size={14} /> GitHub
              </a>
              <a
                href="https://azizaabbour.xo.je/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-item"
              >
                <ExternalLink size={14} /> Portfolio
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 CréoLab-Web — Tous droits réservés.</span>
          <span>Excellence digitale & solutions sur mesure</span>
        </div>
      </div>
    </footer>
  );
}
