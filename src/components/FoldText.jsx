import { useEffect, useMemo, useRef, useState } from 'react';
import './FoldText.css';

const HINGE_CONFIG = {
  top: { origin: '50% 0%', rotateX: -90, rotateY: 0 },
  bottom: { origin: '50% 100%', rotateX: 90, rotateY: 0 },
  left: { origin: '0% 50%', rotateX: 0, rotateY: 90 },
  right: { origin: '100% 50%', rotateX: 0, rotateY: -90 }
};

const renderWhitespace = (value, key) =>
  value.split(/(\n)/).map((part, index) => {
    if (part === '\n') return <br key={`${key}-br-${index}`} />;
    if (!part) return null;

    return (
      <span className="fold-text-whitespace" key={`${key}-space-${index}`}>
        {part.replace(/ /g, '\u00A0')}
      </span>
    );
  });

export default function FoldText({
  text = 'Design unfolds',
  splitBy = 'word',
  hinge = 'top',
  duration = 0.65,
  stagger = 0.035,
  perspective = 700,
  creaseShading = 0.45,
  trigger = 'scroll',
  fontSize = 'inherit',
  fontWeight = 'inherit',
  color = 'inherit',
  className = '',
  style = {}
}) {
  const rootRef = useRef(null);
  const [isVisible, setIsVisible] = useState(trigger === 'mount');
  const hingeConfig = HINGE_CONFIG[hinge] || HINGE_CONFIG.top;

  useEffect(() => {
    if (trigger === 'mount') {
      setIsVisible(true);
      return;
    }

    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [trigger]);

  const segments = useMemo(() => {
    if (!text) return null;
    let pieceIndex = 0;

    const renderPiece = (content, key, split = splitBy) => {
      const currentDelay = pieceIndex * stagger;
      pieceIndex += 1;

      return (
        <span
          className="fold-text-segment"
          data-fold-split={split}
          key={key}
          style={{ '--fold-perspective': `${perspective}px` }}
        >
          <span
            className={`fold-text-piece ${isVisible ? 'fold-text-piece--active' : ''}`}
            data-fold-hinge={hinge}
            style={{
              transformOrigin: hingeConfig.origin,
              '--fold-duration': `${duration}s`,
              '--fold-delay': `${currentDelay}s`,
              '--fold-crease': creaseShading,
              '--fold-rotate-x': `${hingeConfig.rotateX}deg`,
              '--fold-rotate-y': `${hingeConfig.rotateY}deg`
            }}
          >
            {content || '\u00A0'}
          </span>
        </span>
      );
    };

    if (splitBy === 'line') {
      return text.split('\n').map((line, index) => (
        <span className="fold-text-line" key={`line-${index}`}>
          {renderPiece(line || '\u00A0', `segment-line-${index}`, 'line')}
        </span>
      ));
    }

    if (splitBy === 'word') {
      return text.split(/(\s+)/).flatMap((part, index) => {
        if (!part) return [];
        if (/^\s+$/.test(part)) return renderWhitespace(part, `ws-${index}`);
        return renderPiece(part, `segment-word-${index}`);
      });
    }

    return Array.from(text).map((char, index) => {
      if (char === '\n') return <br key={`br-${index}`} />;
      return renderPiece(char === ' ' ? '\u00A0' : char, `segment-char-${index}`);
    });
  }, [text, splitBy, hinge, hingeConfig, duration, stagger, perspective, creaseShading, isVisible]);

  const rootStyle = {
    '--fold-text-font-size': typeof fontSize === 'number' ? `${fontSize}px` : fontSize,
    '--fold-text-font-weight': fontWeight,
    '--fold-text-color': color,
    ...style
  };

  return (
    <span ref={rootRef} className={`fold-text ${className}`.trim()} style={rootStyle}>
      <span className="fold-text-sr-only">{text}</span>
      <span className="fold-text-visual" aria-hidden="true">
        {segments}
      </span>
    </span>
  );
}
