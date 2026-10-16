import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const projectTypes = [
  'Site Web',
  'Application Web',
  'Application Mobile',
  'Logiciel',
  'E-commerce',
  'Plateforme',
  'Autre',
];

const budgetRanges = [
  'Moins de 5 000 MAD',
  '5 000 – 10 000 MAD',
  '10 000 – 20 000 MAD',
  'Plus de 20 000 MAD',
  'À définir',
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Site Web',
    budget: '5 000 – 10 000 MAD',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic Validation
    if (!formData.name.trim()) {
      setErrorMessage('Veuillez indiquer votre nom.');
      return;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMessage('Veuillez indiquer une adresse email valide.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Veuillez rédiger votre message.');
      return;
    }

    setStatus('loading');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if EmailJS is configured
    if (!serviceId || serviceId === 'your_service_id' || !publicKey || publicKey === 'your_public_key') {
      // Simulate successful dispatch for preview / development if env vars are placeholders
      setTimeout(() => {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: 'Site Web',
          budget: '5 000 – 10 000 MAD',
          message: '',
        });
      }, 1200);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          phone_number: formData.phone || 'Non renseigné',
          project_type: formData.projectType,
          budget_estimate: formData.budget,
          message: formData.message,
          to_email: 'azizaboue77@gmail.com',
        },
        publicKey
      );

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'Site Web',
        budget: '5 000 – 10 000 MAD',
        message: '',
      });
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus('error');
      setErrorMessage("Une erreur est survenue lors de l'envoi. Veuillez nous contacter directement par email ou téléphone.");
    }
  };

  return (
    <div className="contact-form-wrapper">
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        {status === 'success' && (
          <div className="form-alert form-alert--success">
            <CheckCircle size={18} />
            <span>Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.</span>
          </div>
        )}

        {(status === 'error' || errorMessage) && status !== 'success' && (
          <div className="form-alert form-alert--error">
            <AlertCircle size={18} />
            <span>{errorMessage || "Une erreur s'est produite lors de l'envoi."}</span>
          </div>
        )}

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="form-name">
              Nom complet <span>*</span>
            </label>
            <input
              id="form-name"
              type="text"
              name="name"
              className="form-input"
              placeholder="Votre nom ou entreprise"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={status === 'loading'}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="form-email">
              Adresse Email <span>*</span>
            </label>
            <input
              id="form-email"
              type="email"
              name="email"
              className="form-input"
              placeholder="nom@exemple.com"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={status === 'loading'}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="form-phone">
              Téléphone
            </label>
            <input
              id="form-phone"
              type="tel"
              name="phone"
              className="form-input"
              placeholder="+212 600 000 000"
              value={formData.phone}
              onChange={handleChange}
              disabled={status === 'loading'}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="form-project">
              Type de projet <span>*</span>
            </label>
            <select
              id="form-project"
              name="projectType"
              className="form-select"
              value={formData.projectType}
              onChange={handleChange}
              disabled={status === 'loading'}
            >
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="form-budget">
            Budget estimatif
          </label>
          <select
            id="form-budget"
            name="budget"
            className="form-select"
            value={formData.budget}
            onChange={handleChange}
            disabled={status === 'loading'}
          >
            {budgetRanges.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="form-message">
            Détails de votre projet <span>*</span>
          </label>
          <textarea
            id="form-message"
            name="message"
            className="form-textarea"
            placeholder="Décrivez brièvement vos besoins, vos délais et vos objectifs..."
            value={formData.message}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
          />
        </div>

        <button
          type="submit"
          className={`btn btn--primary${status === 'loading' ? ' btn--disabled' : ''}`}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Envoi en cours...
            </>
          ) : (
            <>
              Envoyer ma demande <Send size={16} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
