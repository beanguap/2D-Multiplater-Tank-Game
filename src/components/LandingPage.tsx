// src/components/LandingPage.tsx
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Track mouse for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });
    
    const sections = document.querySelectorAll('.reveal-section');
    sections.forEach(section => observer.observe(section));
    
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);
  
  // Calculate parallax positions
  const calcParallax = (movement: number) => {
    if (!heroRef.current) return { x: 0, y: 0 };
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    return {
      x: (mousePosition.x - centerX) / 25,
      y: (mousePosition.y - centerY) / 25
    };
  };
  
  const parallax = calcParallax(20);

  useEffect(() => {
    const buttons = document.querySelectorAll('.btn');
    
    const createRipple = (event: MouseEvent) => {
      const button = event.currentTarget as HTMLElement;
      const circle = document.createElement('span');
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;
      
      const rect = button.getBoundingClientRect();
      
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - rect.left - radius}px`;
      circle.style.top = `${event.clientY - rect.top - radius}px`;
      circle.classList.add('ripple');
      
      const ripple = button.querySelector('.ripple');
      if (ripple) {
        ripple.remove();
      }
      
      button.appendChild(circle);
      
      // Clean up after animation
      setTimeout(() => {
        if (circle.parentElement === button) {
          button.removeChild(circle);
        }
      }, 800);
    };
    
    buttons.forEach(button => {
      button.addEventListener('mousedown', createRipple as EventListener);
    });
    
    return () => {
      buttons.forEach(button => {
        button.removeEventListener('mousedown', createRipple as EventListener);
      });
    };
  }, []);
  
  return (
    <div className="retro-landing">
      {/* Pixelated background overlay */}
      <div className="pixel-overlay"></div>
      
      {/* Floating tank shapes background */}
      <div className="bg-shapes">
        <div className="pixelated shape shape-1"></div>
        <div className="pixelated shape shape-2"></div>
        <div className="pixelated shape shape-3"></div>
        <div className="pixelated shape shape-4"></div>
      </div>
      
      {/* Scanlines effect */}
      <div className="scanlines"></div>
      
      {/* Hero Section */}
      <div 
        ref={heroRef} 
        className={`hero-section ${isLoaded ? 'loaded' : ''}`}
        style={{
          transform: `translate(${parallax.x}px, ${parallax.y}px)`
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title pixel-text">2D Multiplayer <span className="highlight">Tank Game</span></h1>
          <p className="hero-tagline pixel-text-small">Engage. Conquer. Dominate the battlefield.</p>
          
          <div className="hero-buttons">
            <Link to="/game" className="pixel-btn play-btn">
              <span className="btn-text">Play Now</span>
              <span className="btn-icon">▶</span>
            </Link>
            <Link to="/customize" className="pixel-btn customize-btn">
              <span className="btn-text">Customize Your Tank</span>
              <span className="btn-icon">⚙️</span>
            </Link>
          </div>
        </div>
        
        <div className="tank-preview pixelated">
          <div className="tank-shadow"></div>
          <div className="tank-body pixel-border">
            <div className="tank-turret"></div>
          </div>
        </div>
      </div>
      
      {/* Info Sections with animated reveals */}
      <div className="info-sections">
        <div className="info-section reveal-section pixel-border">
          <div className="info-icon">🔥</div>
          <h2 className="pixel-text-medium">Real-Time Battles</h2>
          <p className="pixel-text-small">Experience fast-paced, strategic combat in real time with players from around the world.</p>
        </div>
        
        <div className="info-section reveal-section pixel-border">
          <div className="info-icon">🏆</div>
          <h2 className="pixel-text-medium">Competitive Leaderboard</h2>
          <p className="pixel-text-small">Climb the ranks and prove your tactical superiority against global competition.</p>
        </div>
        
        <div className="info-section reveal-section pixel-border">
          <div className="info-icon">🛠️</div>
          <h2 className="pixel-text-medium">Customize Your Arsenal</h2>
          <p className="pixel-text-small">Design your perfect battle machine with extensive customization options.</p>
        </div>
      </div>
      
      {/* Call to action */}
      <div className="cta-section">
        <h2 className="pixel-text-medium">Ready for Battle?</h2>
        <Link to="/game" className="pixel-btn cta-btn blink-animation">
          Enter the Battlefield
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
