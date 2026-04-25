// SVG thumbnails for each project. Kept as a lookup map so ProjectCard
// stays lean and new thumbnails can be added in one place.
const THUMBS = {
  "web-allinsure": (
    <svg viewBox="0 0 200 140" width="80%" fill="none">
      <defs>
        <filter id="shield-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <rect x="10" y="10" width="180" height="120" rx="12" fill="rgba(241,235,225,0.02)" stroke="rgba(241,235,225,0.1)" />
      
      {/* Background Data Grid */}
      <path d="M10 40 H190 M10 70 H190 M10 100 H190 M50 10 V130 M100 10 V130 M150 10 V130" stroke="rgba(241,235,225,0.03)" strokeWidth="0.5" />
      
      {/* Insurance Shield Motif */}
      <g filter="url(#shield-glow)">
        <path d="M100 30 L135 42 L135 75 C135 95 100 110 100 110 C100 110 65 95 65 75 L65 42 Z" fill="rgba(217,75,43,0.1)" stroke="#d94b2b" strokeWidth="2" strokeLinejoin="round" />
        <path d="M85 72 L95 82 L115 58" fill="none" stroke="rgba(241,235,225,0.9)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <animate attributeName="stroke-dasharray" values="0,50;50,0" dur="2s" repeatCount="1" />
        </path>
      </g>
      
      {/* Scanning Line */}
      <rect x="65" y="42" width="70" height="1" fill="#d94b2b" opacity="0.5">
        <animate attributeName="y" values="42;105;42" dur="4s" repeatCount="indefinite" />
      </rect>
    </svg>
  ),
  "web-hyderabad": (
    <svg viewBox="0 0 200 140" width="80%" fill="none">
      <defs>
        <linearGradient id="food-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d94b2b" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#d94b2b" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="180" height="120" rx="12" fill="rgba(241,235,225,0.02)" stroke="rgba(241,235,225,0.15)" />
      
      {/* Decorative Compass/Plate Circles */}
      <circle cx="140" cy="70" r="35" stroke="rgba(217,75,43,0.2)" strokeWidth="1" strokeDasharray="4 4">
        <animateTransform attributeName="transform" type="rotate" from="0 140 70" to="360 140 70" dur="20s" repeatCount="indefinite" />
      </circle>
      <circle cx="140" cy="70" r="25" fill="url(#food-grad)" stroke="#d94b2b" strokeWidth="1.5" />
      
      {/* Abstract Food Elements */}
      <path d="M130 65 Q140 55 150 65 T150 75 Q140 85 130 75 Z" fill="rgba(241,235,225,0.2)" opacity="0.6" />
      
      {/* UI Content Blocks */}
      <rect x="30" y="35" width="70" height="10" rx="2" fill="#d94b2b" opacity="0.8" />
      <rect x="30" y="55" width="50" height="4" rx="2" fill="rgba(241,235,225,0.2)" />
      <rect x="30" y="65" width="40" height="4" rx="2" fill="rgba(241,235,225,0.2)" />
      
      {/* Reservation Button Pulse */}
      <rect x="30" y="85" width="50" height="15" rx="7.5" fill="rgba(217,75,43,0.15)" stroke="#d94b2b" strokeWidth="1">
        <animate attributeName="stroke-opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
      </rect>
    </svg>
  ),
  "web-rovix": (
    <svg viewBox="0 0 200 140" width="80%" fill="none">
      <defs>
        <radialGradient id="rovix-core-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4a7bd9" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#4a7bd9" stopOpacity="0" />
        </radialGradient>
      </defs>
      
      {/* Background Frame */}
      <rect x="10" y="10" width="180" height="120" rx="12" fill="rgba(241,235,225,0.02)" stroke="rgba(241,235,225,0.15)" strokeWidth="1" />
      
      {/* AI Pulse Rings */}
      <circle cx="100" cy="70" r="40" stroke="rgba(74,123,217,0.1)" strokeWidth="1" strokeDasharray="4 8">
        <animateTransform attributeName="transform" type="rotate" from="0 100 70" to="360 100 70" dur="20s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="70" r="30" stroke="rgba(217,75,43,0.15)" strokeWidth="1" strokeDasharray="2 4">
        <animateTransform attributeName="transform" type="rotate" from="360 100 70" to="0 100 70" dur="15s" repeatCount="indefinite" />
      </circle>
      
      {/* Central Core Glow */}
      <circle cx="100" cy="70" r="20" fill="url(#rovix-core-glow)" />
      
      {/* Floating UI Elements (Chat Bubbles simplified) */}
      <g opacity="0.8">
        {/* Left Bubble */}
        <rect x="35" y="45" width="45" height="25" rx="6" fill="rgba(74,123,217,0.1)" stroke="#4a7bd9" strokeWidth="1" />
        <rect x="42" y="54" width="20" height="2" rx="1" fill="rgba(241,235,225,0.3)" />
        <rect x="42" y="60" width="30" height="2" rx="1" fill="rgba(241,235,225,0.3)" />
        
        {/* Right Bubble */}
        <rect x="120" y="75" width="45" height="25" rx="6" fill="rgba(217,75,43,0.1)" stroke="#d94b2b" strokeWidth="1" />
        <rect x="127" y="84" width="30" height="2" rx="1" fill="rgba(241,235,225,0.3)" />
        <rect x="127" y="90" width="20" height="2" rx="1" fill="rgba(241,235,225,0.3)" />
      </g>
      
      {/* Connection Nodes */}
      <circle cx="100" cy="70" r="4" fill="#4a7bd9" />
      <path d="M100 70 L80 57" stroke="#4a7bd9" strokeWidth="0.5" strokeDasharray="2 2" />
      <path d="M100 70 L120 87" stroke="#d94b2b" strokeWidth="0.5" strokeDasharray="2 2" />
      
      {/* Dynamic Waveform */}
      <path d="M100 70 M85 70 Q92.5 60 100 70 Q107.5 80 115 70" stroke="rgba(241,235,225,0.4)" strokeWidth="1" fill="none">
        <animate attributeName="d" values="M100 70 M85 70 Q92.5 60 100 70 Q107.5 80 115 70; M100 70 M85 70 Q92.5 80 100 70 Q107.5 60 115 70; M100 70 M85 70 Q92.5 60 100 70 Q107.5 80 115 70" dur="2s" repeatCount="indefinite" />
      </path>
    </svg>
  ),
  "web-synergix": (
    <svg viewBox="0 0 200 140" width="80%" fill="none">
      <defs>
        <filter id="it-glow">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>
      <rect x="10" y="10" width="180" height="120" rx="12" fill="rgba(241,235,225,0.02)" stroke="rgba(241,235,225,0.15)" />
      
      {/* Neural/IT Pulse Background */}
      <g opacity="0.3">
        <circle cx="60" cy="40" r="2" fill="#4a7bd9" />
        <circle cx="140" cy="40" r="2" fill="#d94b2b" />
        <circle cx="60" cy="100" r="2" fill="#d94b2b" />
        <circle cx="140" cy="100" r="2" fill="#4a7bd9" />
        <path d="M60 40 L140 100 M140 40 L60 100" stroke="rgba(241,235,225,0.2)" strokeWidth="0.5" />
      </g>
      
      {/* Central Knowledge/IT Hub */}
      <g>
        <path d="M70 45 L100 40 L130 45 L130 95 L100 100 L70 95 Z" fill="rgba(74,123,217,0.1)" stroke="#4a7bd9" strokeWidth="2" strokeLinejoin="round" />
        <path d="M100 40 V100" stroke="#4a7bd9" strokeWidth="1" />
        
        {/* Animated Data Nodes */}
        <circle cx="100" cy="70" r="5" fill="#d94b2b" filter="url(#it-glow)">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Floating Sparkles */}
      <path d="M160 30 L162 35 L167 37 L162 39 L160 44 L158 39 L153 37 L158 35 Z" fill="#e8b84c" opacity="0.6" />
    </svg>
  ),
  "web-oorja": (
    <svg viewBox="0 0 200 140" width="80%" fill="none">
      <defs>
        <radialGradient id="healing-aura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4a7bd9" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#4a7bd9" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="10" y="10" width="180" height="120" rx="12" fill="rgba(241,235,225,0.02)" stroke="rgba(241,235,225,0.1)" />
      
      {/* Aura Glow */}
      <circle cx="100" cy="70" r="45" fill="url(#healing-aura)">
        <animate attributeName="r" values="35;50;35" dur="6s" repeatCount="indefinite" />
      </circle>
      
      {/* Lotus Motif */}
      <g>
        <path d="M100 40 C115 65 145 75 100 105 C55 75 85 65 100 40 Z" fill="rgba(74,123,217,0.15)" stroke="#4a7bd9" strokeWidth="2" />
        <path d="M100 55 C115 70 120 85 100 100 C80 85 85 70 100 55 Z" fill="rgba(232,184,76,0.1)" stroke="#e8b84c" strokeWidth="1" />
      </g>
      
      {/* Floating Energy Particles */}
      <circle cx="60" cy="50" r="2" fill="#4a7bd9" opacity="0.6">
        <animate attributeName="cy" values="50;45;50" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="145" cy="85" r="1.5" fill="#e8b84c" opacity="0.6">
        <animate attributeName="cy" values="85;90;85" dur="4s" repeatCount="indefinite" />
      </circle>
    </svg>
  ),
  "web-brandlino": (
    <svg viewBox="0 0 200 140" width="80%" fill="none">
      <defs>
        <filter id="brand-glow">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>
      <rect x="10" y="10" width="180" height="120" rx="12" fill="rgba(241,235,225,0.02)" stroke="rgba(241,235,225,0.15)" />
      
      {/* Brand Identity Abstract */}
      <g>
        <circle cx="100" cy="70" r="30" stroke="rgba(74,123,217,0.2)" strokeWidth="1" strokeDasharray="5 5" />
        <path d="M80 50 L120 90 M120 50 L80 90" stroke="rgba(217,75,43,0.3)" strokeWidth="2" />
        
        {/* Animated Creative Pulse */}
        <circle cx="100" cy="70" r="8" fill="#d94b2b" filter="url(#brand-glow)">
          <animate attributeName="r" values="6;10;6" dur="3s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Design Tools UI */}
      <rect x="30" y="30" width="15" height="15" rx="3" fill="rgba(74,123,217,0.1)" stroke="#4a7bd9" />
      <rect x="155" y="95" width="15" height="15" rx="3" fill="rgba(217,75,43,0.1)" stroke="#d94b2b" />
    </svg>
  ),
  "ui-paper": (
    <svg viewBox="0 0 200 140" width="80%" fill="none">
      <rect x="60" y="8" width="80" height="124" rx="12" fill="rgba(241,235,225,0.05)" stroke="rgba(241,235,225,0.25)" />
      <rect x="70" y="22" width="60" height="16" rx="3" fill="rgba(217,75,43,0.3)" />
      <rect x="70" y="44" width="60" height="30" rx="3" fill="rgba(241,235,225,0.1)" />
      <rect x="70" y="80" width="28" height="40" rx="3" fill="rgba(74,123,217,0.25)" />
      <rect x="102" y="80" width="28" height="40" rx="3" fill="rgba(232,184,76,0.25)" />
      <circle cx="100" cy="126" r="2" fill="rgba(241,235,225,0.5)" />
    </svg>
  ),
  "web-txpre": (
    <svg viewBox="0 0 200 140" width="80%" fill="none">
      <rect x="10" y="10" width="180" height="120" rx="12" fill="rgba(241,235,225,0.02)" stroke="rgba(241,235,225,0.15)" />
      
      {/* Urban/Grid Background */}
      <path d="M20 110 H180" stroke="rgba(241,235,225,0.1)" strokeWidth="1" />
      
      {/* Building Outlines */}
      <g opacity="0.6">
        <rect x="40" y="60" width="25" height="50" fill="rgba(217,75,43,0.1)" stroke="#d94b2b" strokeWidth="1" />
        <rect x="75" y="40" width="40" height="70" fill="rgba(74,123,217,0.1)" stroke="#4a7bd9" strokeWidth="1.5" />
        <rect x="125" y="70" width="30" height="40" fill="rgba(241,235,225,0.05)" stroke="rgba(241,235,225,0.2)" strokeWidth="1" />
      </g>
      
      {/* Location Pin */}
      <g>
        <path d="M95 25 C95 18 105 18 105 25 C105 32 100 40 100 40 C100 40 95 32 95 25 Z" fill="#d94b2b">
          <animate attributeName="opacity" values="1;0.6;1" dur="2s" repeatCount="indefinite" />
        </path>
        <circle cx="100" cy="25" r="2" fill="#0b0b0c" />
      </g>
      
      {/* Search Radar */}
      <circle cx="100" cy="70" r="50" stroke="rgba(241,235,225,0.05)" strokeWidth="1" strokeDasharray="5 5">
        <animate attributeName="r" values="30;60;30" dur="5s" repeatCount="indefinite" />
      </circle>
    </svg>
  ),
  "web-yardful": (
    <svg viewBox="0 0 200 140" width="80%" fill="none">
      <defs>
        <filter id="leaf-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <rect x="10" y="10" width="180" height="120" rx="12" fill="rgba(241,235,225,0.02)" stroke="rgba(241,235,225,0.1)" />
      
      {/* Garden Grid */}
      <path d="M30 30 H170 M30 70 H170 M30 110 H170 M70 30 V110 M130 30 V110" stroke="rgba(241,235,225,0.04)" strokeWidth="0.5" />
      
      {/* Central Leaf Motif */}
      <g filter="url(#leaf-glow)">
        <path d="M100 40 C130 40 140 70 100 100 C60 70 70 40 100 40 Z" fill="rgba(74,123,217,0.1)" stroke="#4a7bd9" strokeWidth="2">
          <animate attributeName="stroke-opacity" values="1;0.4;1" dur="4s" repeatCount="indefinite" />
        </path>
        <path d="M100 40 V100" stroke="#4a7bd9" strokeWidth="1" strokeDasharray="2 2" />
      </g>
      
      {/* Chatbot Node */}
      <g>
        <rect x="140" y="90" width="25" height="18" rx="4" fill="#d94b2b" />
        <path d="M145 108 L150 114 L155 108" fill="#d94b2b" />
        <circle cx="148" cy="98" r="1.5" fill="#0b0b0c" />
        <circle cx="157" cy="98" r="1.5" fill="#0b0b0c" />
      </g>
    </svg>
  ),
  "brand-omstructures": (
    <svg viewBox="0 0 200 140" width="80%" fill="none">
      <rect x="10" y="10" width="180" height="120" rx="12" fill="#0b0b0c" stroke="rgba(241,235,225,0.1)" />
      
      {/* Social Poster Layout Abstract */}
      <g opacity="0.8">
        <rect x="40" y="30" width="50" height="60" rx="2" fill="rgba(241,235,225,0.9)" />
        <rect x="110" y="50" width="50" height="60" rx="2" fill="rgba(241,235,225,0.9)" />
      </g>
      
      {/* Accent Colors (Branding) */}
      <rect x="45" y="35" width="20" height="4" fill="#1a3b8c" />
      <rect x="115" y="55" width="20" height="4" fill="#26c245" />
      
      {/* Mouse Cursor Animation */}
      <path d="M140 100 L150 110 L145 112 Z" fill="#d94b2b">
        <animateTransform attributeName="transform" type="translate" values="0,0; -10,-10; 0,0" dur="4s" repeatCount="indefinite" />
      </path>
    </svg>
  ),
  "brand-packpal": (
    <svg viewBox="0 0 200 140" width="80%" fill="none">
      <rect x="10" y="10" width="180" height="120" rx="12" fill="#0b0b0c" stroke="rgba(241,235,225,0.1)" />
      
      {/* Shipping/Moving Motif */}
      <g>
        <rect x="60" y="50" width="80" height="40" fill="rgba(217,75,43,0.1)" stroke="#d94b2b" strokeWidth="1.5" />
        <path d="M60 50 L100 35 L140 50" stroke="#d94b2b" strokeWidth="1.5" />
        
        {/* Dynamic Motion Lines */}
        <line x1="30" y1="60" x2="50" y2="60" stroke="#d94b2b" strokeWidth="2">
          <animate attributeName="x1" values="30;40;30" dur="1s" repeatCount="indefinite" />
          <animate attributeName="x2" values="50;60;50" dur="1s" repeatCount="indefinite" />
        </line>
        <line x1="35" y1="80" x2="55" y2="80" stroke="#4a7bd9" strokeWidth="2" opacity="0.6">
          <animate attributeName="x1" values="35;45;35" dur="1.2s" repeatCount="indefinite" />
          <animate attributeName="x2" values="55;65;55" dur="1.2s" repeatCount="indefinite" />
        </line>
      </g>
    </svg>
  ),
  "web-omstructures": (
    <svg viewBox="0 0 200 140" width="80%" fill="none">
      <defs>
        <filter id="structure-glow">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
      </defs>
      <rect x="10" y="10" width="180" height="120" rx="12" fill="rgba(241,235,225,0.02)" stroke="rgba(241,235,225,0.15)" />
      
      {/* Construction Blueprint Lines */}
      <path d="M30 115 L100 115 M100 115 L170 115" stroke="rgba(241,235,225,0.2)" strokeWidth="1" strokeDasharray="2 4" />
      
      {/* House Frame Animation */}
      <g>
        <path d="M100 35 L55 75 L145 75 Z" fill="rgba(217,75,43,0.1)" stroke="#d94b2b" strokeWidth="2" strokeLinejoin="round" />
        <rect x="70" y="75" width="60" height="40" stroke="rgba(241,235,225,0.3)" strokeWidth="1.5" />
        
        {/* Animated Support Nodes */}
        <circle cx="100" cy="35" r="3" fill="#e8b84c">
          <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="55" cy="75" r="2" fill="#e8b84c" />
        <circle cx="145" cy="75" r="2" fill="#e8b84c" />
      </g>
      
      {/* Measurement UI */}
      <text x="110" y="105" fill="rgba(241,235,225,0.4)" fontSize="8" fontFamily="monospace">60.0ft</text>
      <path d="M70 110 V120 M130 110 V120 M70 115 H130" stroke="rgba(241,235,225,0.2)" strokeWidth="1" />
    </svg>
  ),
  "brand-yardful": (
    <svg viewBox="0 0 200 140" width="80%" fill="none">
      <rect x="10" y="10" width="180" height="120" rx="12" fill="#0b0b0c" stroke="rgba(241,235,225,0.1)" />
      
      {/* Social Media Grid Abstract */}
      <g>
        <circle cx="100" cy="70" r="45" stroke="rgba(38,194,69,0.1)" strokeWidth="1" strokeDasharray="5 5" />
        <rect x="75" y="45" width="50" height="50" rx="8" fill="rgba(38,194,69,0.1)" stroke="#26c245" strokeWidth="2" />
        
        {/* Animated Bloom Effect */}
        <circle cx="100" cy="70" r="10" fill="#26c245" opacity="0.6">
          <animate attributeName="r" values="8;12;8" dur="4s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Floating Instagram Hearts */}
      <path d="M160 40 L163 43 L166 40 L168 42 L163 48 L158 42 Z" fill="#d94b2b" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
      </path>
    </svg>
  ),
};

export default function ProjectThumb({ thumbKey }) {
  return THUMBS[thumbKey] || null;
}
