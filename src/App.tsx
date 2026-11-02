import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Search, 
  MapPin, 
  Mail, 
  Globe, 
  Download, 
  Sun, 
  Moon, 
  ExternalLink, 
  Award, 
  ChevronRight, 
  ChevronLeft,
  Sparkles, 
  X, 
  Send, 
  CheckCircle2, 
  BarChart3, 
  Cpu, 
  Rocket, 
  Trophy, 
  BrainCircuit, 
  Building2, 
  Users, 
  Menu, 
  Calculator, 
  Command, 
  Printer, 
  Copy, 
  Check, 
  FileText, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Layers, 
  MessageSquare, 
  Phone, 
  FileCheck2, 
  Eye, 
  Share2, 
  Terminal, 
  Zap, 
  Maximize2,
  Play,
  Pause,
  RotateCcw,
  Bot,
  User,
  RefreshCw,
  Minus
} from 'lucide-react';

// Custom Type-Safe Inline Brand SVGs (matches 24x24 stroke aesthetic)
const Linkedin = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const XTwitterIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

// High-Fidelity Animated 3D Cute Robot Assistant Avatar (Vector Clean)
const CuteBotAvatar = ({ className = "w-20 h-24", animated = true }: { className?: string; animated?: boolean }) => (
  <svg
    viewBox="0 0 160 190"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${animated ? 'animate-bot-float' : ''}`}
  >
    <defs>
      <linearGradient id="headGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="70%" stopColor="#f1f5f9" />
        <stop offset="100%" stopColor="#cbd5e1" />
      </linearGradient>
      <linearGradient id="visorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#090d16" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
      <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
      <linearGradient id="laptopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#64748b" />
        <stop offset="100%" stopColor="#334155" />
      </linearGradient>
      <filter id="botGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* Antenna */}
    <rect x="77" y="14" width="6" height="18" rx="3" fill="#94a3b8" />
    <circle cx="80" cy="14" r="8" fill="url(#blueGrad)" filter="url(#botGlow)" />
    <circle cx="78" cy="11" r="2.5" fill="#ffffff" opacity="0.85" />

    {/* Ears / Side Headset Caps */}
    <rect x="28" y="52" width="10" height="26" rx="5" fill="url(#blueGrad)" />
    <rect x="122" y="52" width="10" height="26" rx="5" fill="url(#blueGrad)" />
    <circle cx="33" cy="65" r="3" fill="#ffffff" opacity="0.6" />
    <circle cx="127" cy="65" r="3" fill="#ffffff" opacity="0.6" />

    {/* Rounded Head Shell */}
    <rect x="36" y="28" width="88" height="74" rx="36" fill="url(#headGrad)" stroke="#cbd5e1" strokeWidth="2.5" />
    
    {/* Head Top Specular Highlight */}
    <path d="M52 38 Q80 32 108 38" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.9" />

    {/* Dark Glossy Visor */}
    <rect x="46" y="44" width="68" height="44" rx="20" fill="url(#visorGrad)" stroke="#1e293b" strokeWidth="1.5" />
    
    {/* Visor Glare / Reflection */}
    <path d="M56 48 L76 48 L68 56 L52 56 Z" fill="#ffffff" opacity="0.12" />

    {/* Curved Glowing Happy Blue Eyes */}
    <path d="M56 66 Q63 55 70 66" fill="none" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" filter="url(#botGlow)" />
    <path d="M90 66 Q97 55 104 66" fill="none" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" filter="url(#botGlow)" />

    {/* Cheerful Mouth */}
    <path d="M75 75 Q80 80 85 75" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />

    {/* Neck */}
    <rect x="72" y="98" width="16" height="8" rx="4" fill="#64748b" />

    {/* Body / Torso */}
    <path d="M54 104 C54 104 48 144 55 150 C62 155 98 155 105 150 C112 144 106 104 106 104 Z" fill="url(#headGrad)" stroke="#cbd5e1" strokeWidth="2.5" />
    <circle cx="80" cy="116" r="3.5" fill="#38bdf8" filter="url(#botGlow)" />

    {/* Legs / Feet */}
    <rect x="62" y="148" width="14" height="20" rx="7" fill="url(#headGrad)" stroke="#94a3b8" strokeWidth="1.5" />
    <rect x="84" y="148" width="14" height="20" rx="7" fill="url(#headGrad)" stroke="#94a3b8" strokeWidth="1.5" />

    {/* Left Arm & Open Laptop */}
    <path d="M56 112 C44 118 40 136 50 144" fill="none" stroke="url(#headGrad)" strokeWidth="9" strokeLinecap="round" />
    {/* Laptop Base */}
    <polygon points="40,136 78,136 74,148 36,148" fill="url(#laptopGrad)" stroke="#1e293b" strokeWidth="1" />
    {/* Laptop Screen */}
    <rect x="42" y="112" width="30" height="24" rx="2" fill="#1e293b" stroke="#334155" strokeWidth="1" transform="rotate(-6 42 112)" />
    <rect x="44" y="114" width="26" height="20" rx="1.5" fill="#0284c7" opacity="0.95" transform="rotate(-6 42 112)" />
    <circle cx="56" cy="123" r="2.5" fill="#ffffff" />
    <circle cx="50" cy="142" r="5" fill="url(#headGrad)" />

    {/* Right Arm - Waving Hand with Signals */}
    <g className={animated ? 'animate-bot-wave' : ''}>
      <path d="M104 112 C116 110 128 100 132 86" fill="none" stroke="url(#headGrad)" strokeWidth="9" strokeLinecap="round" />
      <circle cx="133" cy="85" r="7" fill="url(#headGrad)" stroke="#cbd5e1" strokeWidth="1.5" />
      <path d="M130 87 Q128 81 133 81" fill="none" stroke="url(#headGrad)" strokeWidth="3.5" strokeLinecap="round" />
      
      {/* Wave Signal Arcs */}
      <path d="M143 77 A12 12 0 0 1 143 93" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
      <path d="M149 72 A20 20 0 0 1 149 98" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </g>
  </svg>
);

// Message Type for Chatbot
interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  actions?: { label: string; actionType: 'whatsapp' | 'cv' | 'door' | 'link'; payload?: string }[];
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [stringPulling, setStringPulling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [dossierModalOpen, setDossierModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [estimatorOpen, setEstimatorOpen] = useState(false);
  
  // Real-time Pakistan Clock (UTC+5)
  const [pktTime, setPktTime] = useState('');
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setPktTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Keyboard shortcut Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setCommandPaletteOpen(false);
        setDossierModalOpen(false);
        setContactModalOpen(false);
        setEstimatorOpen(false);
        setChatOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Rotating Typewriter Headings in Hero (Reel Flex)
  const roles = useMemo(() => [
    'Founder & CEO @ Zepra Tech',
    'AEIF Top 5 AI Finalist',
    'Full-Stack Systems Architect',
    'Autonomous Agent Engineer',
    'Enterprise Solutions Lead'
  ], []);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout: any;

    if (!isDeleting && displayedText !== currentRole) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, 70);
    } else if (!isDeleting && displayedText === currentRole) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayedText !== '') {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      }, 40);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  // Pull string light switch handler
  const handlePullString = () => {
    setStringPulling(true);
    setTimeout(() => {
      setDarkMode(prev => !prev);
      setStringPulling(false);
    }, 280);
  };

  // Flagship Doors Data ("Magic happens behind the doors")
  const doors = [
    {
      id: 'sabz-ai',
      doorNumber: '01',
      title: 'SABZ AI Traffic System',
      category: 'Computer Vision & Real-time AI',
      badge: '5th Worldwide @ 4th AEIF AI Showdown',
      doorColor: 'from-blue-900 via-indigo-950 to-slate-950',
      plaqueColor: 'border-amber-400/80 bg-gradient-to-r from-amber-600/30 to-amber-500/20 text-amber-200',
      lightColor: 'rgba(245, 158, 11, 0.35)',
      description: 'Intelligent real-time traffic signal optimization and emergency vehicle corridor routing utilizing custom YOLOv8 inference telemetry.',
      metrics: [
        { label: 'Global Standing', value: 'Top 5 Worldwide' },
        { label: 'Latency', value: '< 42ms Edge' },
        { label: 'Congestion Drop', value: '-34% Idle Delay' },
        { label: 'Telemetry', value: 'Multi-Camera Stream' }
      ],
      highlights: [
        'Recognized 5th internationally at the 4th International AEIF AI Showdown 2026',
        'Real-time vehicle detection and density estimation across multi-lane junctions',
        'Automatic green-wave priority clearing for emergency responders and ambulances',
        'Fully simulated micro-traffic edge controllers ready for city-scale rollout'
      ],
      techStack: ['Python', 'YOLOv8', 'OpenCV', 'FastAPI', 'PyTorch', 'Next.js 15', 'Docker'],
      demoType: 'traffic'
    },
    {
      id: 'linkedin-resume-engine',
      doorNumber: '02',
      title: 'LinkedIn Autonomous Resume Engine',
      category: 'Autonomous Document & Vector Pipeline',
      badge: 'Data Extraction & Vector Generation',
      doorColor: 'from-cyan-950 via-slate-900 to-slate-950',
      plaqueColor: 'border-cyan-400/80 bg-gradient-to-r from-cyan-600/30 to-blue-500/20 text-cyan-200',
      lightColor: 'rgba(6, 182, 212, 0.35)',
      description: 'Automated data ingestion and vector document compiler that transforms structured LinkedIn profiles into high-DPI executive PDF dossiers and interactive web portfolios.',
      metrics: [
        { label: 'Dossier Output', value: '2.2 MB High-DPI' },
        { label: 'Parsing Fidelity', value: '100% LinkedIn Data' },
        { label: 'Render Engine', value: 'Headless Chromium' },
        { label: 'Sync Status', value: 'Verified Record' }
      ],
      highlights: [
        'Directly synthesized the verified 2.2MB executive curriculum vitae for Daud',
        'Intelligent schema normalization parsing work history, achievements, and technical stacks',
        'Precision typography grid producing print-ready vector PDF documents and instant web previews',
        'End-to-end automated pipeline built directly in Antigravity'
      ],
      techStack: ['Node.js', 'Puppeteer', 'TypeScript', 'LinkedIn Graph Data', 'Tailwind CSS', 'Vite'],
      demoType: 'resume'
    },
    {
      id: 'zepra-tech',
      doorNumber: '03',
      title: 'Zepra Tech Enterprise Platform',
      category: 'Enterprise SaaS & Cloud Infrastructure',
      badge: 'Production Software Ecosystem',
      doorColor: 'from-emerald-950 via-slate-900 to-slate-950',
      plaqueColor: 'border-emerald-400/80 bg-gradient-to-r from-emerald-600/30 to-teal-500/20 text-emerald-200',
      lightColor: 'rgba(16, 185, 129, 0.35)',
      description: 'The digital flagship platform for Zepra Tech, engineering high-throughput web applications, client solutions, and scalable software ecosystems.',
      metrics: [
        { label: 'Role', value: 'Founder & CEO' },
        { label: 'Uptime SLA', value: '99.98%' },
        { label: 'Edge Latency', value: '< 90ms Global' },
        { label: 'Live Domain', value: 'gozepra.tech' }
      ],
      highlights: [
        'Founded and led technology vision, client architecture, and development operations',
        'Delivering modular, scalable full-stack applications with React, Next.js, and TypeScript',
        'End-to-end product delivery from technical specification to production cloud infrastructure',
        'Serving international business requirements with enterprise security and speed'
      ],
      techStack: ['React', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Vercel / Cloud'],
      demoType: 'zepra'
    },
    {
      id: 'agentic-ai',
      doorNumber: '04',
      title: 'Autonomous Multi-Agent Swarms',
      category: 'Agentic AI & LLM Task Orchestration',
      badge: 'Autonomous Workflow Engine',
      doorColor: 'from-purple-950 via-slate-900 to-slate-950',
      plaqueColor: 'border-purple-400/80 bg-gradient-to-r from-purple-600/30 to-fuchsia-500/20 text-purple-200',
      lightColor: 'rgba(168, 85, 247, 0.35)',
      description: 'Distributed autonomous agent networks orchestrating multi-step research, code generation, self-correcting unit tests, and real-time task automation.',
      metrics: [
        { label: 'Architecture', value: 'DAG Execution' },
        { label: 'Coordination', value: 'Subagent Swarm' },
        { label: 'Memory', value: 'Persistent Vector' },
        { label: 'Error Rate', value: '< 0.5% Loop Fallback' }
      ],
      highlights: [
        'Decomposes high-level objectives into specialized subagents running concurrently',
        'Automated file manipulation, test execution, and deployment verification',
        'Context-aware memory indexing to handle long-running background tasks without hallucination',
        'Integrated with modern agentic APIs and structured tool execution'
      ],
      techStack: ['Python', 'TypeScript', 'LangChain / AutoGen', 'FastAPI', 'Embeddings', 'Docker'],
      demoType: 'agents'
    }
  ];

  const [activeDoorId, setActiveDoorId] = useState<string>('sabz-ai');
  const [hoveredDoorId, setHoveredDoorId] = useState<string | null>(null);

  const activeDoor = useMemo(() => {
    return doors.find(d => d.id === activeDoorId) || doors[0];
  }, [activeDoorId]);

  // "Let's go back in time" (Reel Chronometer)
  const timelineEras = [
    {
      year: '2026',
      period: 'JAN 2026 - PRESENT',
      role: 'Founder & CEO — Zepra Tech',
      subtitle: 'Leading Enterprise Software & Global AI Initiatives',
      details: [
        'Leading executive technology vision, enterprise development, and architectural design at Zepra Tech (gozepra.tech).',
        'Achieved Top 5 Global Finalist ranking at the prestigious 4th International AEIF AI Showdown 2026 with SABZ AI Traffic System.',
        'Architecting intelligent web platforms and agentic automation workflows for high-growth ventures.'
      ],
      badges: ['Founder & CEO', 'AEIF Top 5', 'Next.js 15', 'Edge AI', 'Executive Leadership']
    },
    {
      year: '2025',
      period: 'JAN 2025 - DEC 2025',
      role: 'Lead Architect — Autonomous Resume & Vector Engine',
      subtitle: 'Data Pipeline Engineering & Full-Stack Solutions',
      details: [
        'Engineered the LinkedIn Autonomous Resume & Executive Dossier Engine, generating 2.2MB high-DPI vector dossiers directly from structured profile data.',
        'Developed production full-stack web applications with React, TypeScript, Tailwind CSS, and Node.js.',
        'Created high-performance interactive client modules, custom ROI estimators, and responsive interfaces.'
      ],
      badges: ['Autonomous Vector Engine', 'TypeScript', 'Node.js', 'React', 'Puppeteer']
    },
    {
      year: '2024',
      period: 'JAN 2024 - DEC 2024',
      role: 'Full-Stack Developer & Technical Consultant',
      subtitle: 'Modern Web Engineering & Algorithmic Design',
      details: [
        'Delivered high-performance frontend and backend services for diverse clients.',
        'Implemented modern UI/UX design systems with fluid animations, micro-interactions, and accessibility standards.',
        'Deepened expertise in distributed computing, asynchronous task queues, and database optimization.'
      ],
      badges: ['Full-Stack', 'Frontend UI/UX', 'RESTful APIs', 'Database Design']
    },
    {
      year: 'Academic',
      period: 'FOUNDATIONAL DEGREE',
      role: 'Bachelor of Science in Computer Science (BSCS)',
      subtitle: 'Verified Academic Honors & Theoretical Rigor',
      details: [
        'Comprehensive computer science education with top grades across Algorithms, Data Structures, Operating Systems, Computer Architecture, and Artificial Intelligence.',
        'Developed foundational research in neural networks, computer vision, and real-time distributed systems.',
        'Synchronized academic and professional credentials documented in official executive dossier.'
      ],
      badges: ['BSCS Degree', 'Algorithms & DS', 'Operating Systems', 'AI & ML Honors']
    }
  ];

  const [selectedEraIndex, setSelectedEraIndex] = useState(0);
  const [isPlayingTimeline, setIsPlayingTimeline] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isPlayingTimeline) {
      interval = setInterval(() => {
        setSelectedEraIndex(prev => (prev + 1) % timelineEras.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isPlayingTimeline, timelineEras.length]);

  const activeEra = timelineEras[selectedEraIndex];

  // Estimator State
  const [projectType, setProjectType] = useState<'mvp' | 'ai' | 'enterprise'>('ai');
  const [speed, setSpeed] = useState<'standard' | 'accelerated'>('accelerated');

  const estimatedTimeline = useMemo(() => {
    let weeks = projectType === 'mvp' ? 2 : projectType === 'ai' ? 3.5 : 6;
    if (speed === 'accelerated') weeks = Math.max(1, Math.round(weeks * 0.65 * 10) / 10);
    return weeks;
  }, [projectType, speed]);

  const estimatedROI = useMemo(() => {
    if (projectType === 'mvp') return '3x - 5x Launch Velocity';
    if (projectType === 'ai') return '40% - 60% Manual Cost Reduction';
    return '10x Scalability & Sub-100ms Performance';
  }, [projectType]);

  // Form State
  const [contactMessage, setContactMessage] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSent, setContactSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSent(true);
    setTimeout(() => {
      setContactSent(false);
      setContactModalOpen(false);
      setContactMessage('');
      setContactEmail('');
    }, 2500);
  };

  // WhatsApp Pre-filled trigger
  const openWhatsApp = (customText?: string) => {
    const text = customText || `Hi Daud, I viewed your portfolio and would like to discuss a project with you!`;
    const url = `https://wa.me/923286673627?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  // ----------------------------------------------------
  // INTELLIGENT AI AGENT / CHATBOT ENGINE (CV & LINKEDIN)
  // ----------------------------------------------------
  const [chatOpen, setChatOpen] = useState(false);
  const [speechBubbleDismissed, setSpeechBubbleDismissed] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);
  const chatMessagesEndRef = useRef<HTMLDivElement>(null);

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Hello! 👋 I'm Daud's Portfolio AI Agent, trained directly on his verified 2.2MB CV dossier and engineering history. How can I help you today?",
      timestamp: 'Just now',
      actions: [
        { label: '🏆 5th Worldwide @ AEIF', actionType: 'door', payload: 'sabz-ai' },
        { label: '🏢 About Zepra Tech', actionType: 'door', payload: 'zepra-tech' },
        { label: '📄 Download Verified CV', actionType: 'cv' },
        { label: '💬 Chat on WhatsApp', actionType: 'whatsapp' }
      ]
    }
  ]);

  useEffect(() => {
    if (chatOpen) {
      chatMessagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, chatOpen]);

  // Knowledge-based AI response generator
  const generateAgentResponse = (query: string): { text: string; actions?: ChatMessage['actions'] } => {
    const q = query.toLowerCase();

    // 1. Who is Daud?
    if (q.includes('who') || q.includes('about') || q.includes('daud') || q.includes('bio') || q.includes('profile')) {
      return {
        text: "Muhammad Daud Ali Lashari is a Full-Stack Systems Architect, Tech Entrepreneur, and Founder & CEO of Zepra Tech (gozepra.tech). He was awarded 5th Worldwide Finalist at the 4th International AEIF AI Showdown 2026 for building the SABZ AI Traffic System. He holds a BS in Computer Science with top honors and specializes in enterprise web architectures, real-time AI computer vision, and autonomous agent systems.",
        actions: [
          { label: '📄 View Verified CV (PDF)', actionType: 'cv' },
          { label: '💬 Message Daud on WhatsApp', actionType: 'whatsapp' }
        ]
      };
    }

    // 2. AEIF / SABZ AI Traffic System
    if (q.includes('aeif') || q.includes('showdown') || q.includes('sabz') || q.includes('traffic') || q.includes('5th') || q.includes('award')) {
      return {
        text: "At the 4th International AEIF AI Showdown 2026, Daud achieved 5th Worldwide Finalist ranking with the SABZ AI Traffic System! It is an intelligent computer vision engine that processes multi-lane video streams with YOLOv8 at <42ms edge latency, reducing traffic delays by ~34% and automatically giving green-wave priority to emergency responders.",
        actions: [
          { label: '🚪 Open SABZ AI Door', actionType: 'door', payload: 'sabz-ai' },
          { label: '💬 Inquire on WhatsApp', actionType: 'whatsapp', payload: 'Hi Daud, tell me more about SABZ AI Traffic System.' }
        ]
      };
    }

    // 3. Zepra Tech
    if (q.includes('zepra') || q.includes('company') || q.includes('ceo') || q.includes('founder') || q.includes('gozepra')) {
      return {
        text: "Zepra Tech (gozepra.tech) is the technology venture founded and led by Muhammad Daud Ali Lashari. The firm delivers high-concurrency enterprise web platforms, cloud-native microservices, modern React/Next.js platforms, and bespoke AI workflows with 99.98% uptime SLA and sub-100ms response times worldwide.",
        actions: [
          { label: '🌐 Visit gozepra.tech', actionType: 'link', payload: 'https://gozepra.tech' },
          { label: '🚪 Inspect Zepra Door', actionType: 'door', payload: 'zepra-tech' }
        ]
      };
    }

    // 4. Skills & Tech Stack
    if (q.includes('skill') || q.includes('stack') || q.includes('tech') || q.includes('language') || q.includes('framework') || q.includes('react') || q.includes('python')) {
      return {
        text: "Daud's core engineering stack includes:\n• Frontend: React 18/19, Next.js 15, TypeScript, Tailwind CSS, Vite, HTML5 Canvas\n• Backend & Cloud: Node.js, Python, FastAPI, Express, Docker, PostgreSQL, RESTful APIs, Redis\n• AI & Machine Learning: Computer Vision, YOLOv8, PyTorch, OpenCV, Multi-Agent Swarms, LLM Prompt Engineering\n• Vector Systems: LinkedIn Graph data pipelines & headless document generation.",
        actions: [
          { label: '📊 Calculate Project ROI', actionType: 'door', payload: 'sabz-ai' },
          { label: '📄 Full Skill Matrix in CV', actionType: 'cv' }
        ]
      };
    }

    // 5. Resume / CV / PDF
    if (q.includes('cv') || q.includes('resume') || q.includes('pdf') || q.includes('dossier') || q.includes('download')) {
      return {
        text: "Daud's official 2.2 MB High-DPI Executive Dossier was generated directly from his verified LinkedIn credentials using his custom Autonomous Vector Engine. You can view the full preview or download the vector PDF right now!",
        actions: [
          { label: '📄 Download Executive CV (PDF)', actionType: 'cv' }
        ]
      };
    }

    // 6. Hire / Contact / WhatsApp / Pricing
    if (q.includes('hire') || q.includes('contact') || q.includes('whatsapp') || q.includes('email') || q.includes('work') || q.includes('rate') || q.includes('quote') || q.includes('cost')) {
      return {
        text: "Daud is currently open for high-impact technical leadership, full-stack architectural contracts, and AI systems development! You can connect with him directly on WhatsApp (+92 328 6673627) or email (daudlashari39@gmail.com). Typical response time is under 2 hours.",
        actions: [
          { label: '💬 Chat Now on WhatsApp', actionType: 'whatsapp' },
          { label: '✉️ Send Direct Message', actionType: 'link', payload: 'mailto:daudlashari39@gmail.com' }
        ]
      };
    }

    // 7. Social Media Links
    if (q.includes('social') || q.includes('twitter') || q.includes('x') || q.includes('instagram') || q.includes('github') || q.includes('linkedin')) {
      return {
        text: "You can find Daud across all major platforms:\n• LinkedIn: linkedin.com/in/muhammad-daud-ali-lashari-1302a5337/\n• GitHub: github.com/ecomwithdaud-hub\n• X / Twitter: x.com/DaudLashari400\n• Instagram: instagram.com/daud_lashari_9907/\n• Website: gozepra.tech",
        actions: [
          { label: '🐦 Open X / Twitter', actionType: 'link', payload: 'https://x.com/DaudLashari400' },
          { label: '📸 Open Instagram', actionType: 'link', payload: 'https://www.instagram.com/daud_lashari_9907/' },
          { label: '💼 Open LinkedIn', actionType: 'link', payload: 'https://www.linkedin.com/in/muhammad-daud-ali-lashari-1302a5337/' }
        ]
      };
    }

    // 8. Education
    if (q.includes('education') || q.includes('degree') || q.includes('university') || q.includes('college') || q.includes('study') || q.includes('bscs')) {
      return {
        text: "Daud completed his Bachelor of Science in Computer Science (BSCS) with high distinction in Algorithms, Data Structures, Operating Systems, Computer Architecture, and Artificial Intelligence, backed by active leadership in technology societies and hackathons.",
        actions: [
          { label: '📄 Academic Honors in CV', actionType: 'cv' }
        ]
      };
    }

    // Fallback default helpful response
    return {
      text: `Thanks for asking! As Daud's Portfolio AI Agent, I can tell you about his 5th Worldwide Finalist award at AEIF 2026, his work as Founder & CEO of Zepra Tech, his technical stack (React, Next.js 15, Python, AI), or connect you directly with him on WhatsApp or socials.`,
      actions: [
        { label: '💬 Chat on WhatsApp', actionType: 'whatsapp', payload: `Hi Daud, I was asking your AI: "${query}"` },
        { label: '📄 Download Official CV', actionType: 'cv' },
        { label: '🐦 View X / Twitter', actionType: 'link', payload: 'https://x.com/DaudLashari400' }
      ]
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const q = (textToSend || chatInput).trim();
    if (!q) return;

    const userMsg: ChatMessage = {
      id: String(Date.now()),
      sender: 'user',
      text: q,
      timestamp: 'Just now'
    };

    setChatMessages(prev => [...prev, userMsg]);
    setChatInput('');
    setIsBotTyping(true);

    setTimeout(() => {
      const response = generateAgentResponse(q);
      const botMsg: ChatMessage = {
        id: String(Date.now() + 1),
        sender: 'bot',
        text: response.text,
        timestamp: 'Just now',
        actions: response.actions
      };
      setChatMessages(prev => [...prev, botMsg]);
      setIsBotTyping(false);
    }, 600);
  };

  const handleActionClick = (action: NonNullable<ChatMessage['actions']>[number]) => {
    if (action.actionType === 'whatsapp') {
      openWhatsApp(action.payload);
    } else if (action.actionType === 'cv') {
      setDossierModalOpen(true);
    } else if (action.actionType === 'door') {
      setActiveDoorId(action.payload || 'sabz-ai');
      window.location.hash = '#doors';
    } else if (action.actionType === 'link' && action.payload) {
      window.open(action.payload, '_blank');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans ${
      darkMode ? 'bg-[#090d16] text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Subtle Ambient Tech Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className={`absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 transition-colors duration-700 ${
          darkMode ? 'bg-cyan-500/20' : 'bg-cyan-300/30'
        }`} />
        <div className={`absolute top-1/3 right-10 w-[500px] h-[500px] rounded-full blur-[140px] opacity-15 transition-colors duration-700 ${
          darkMode ? 'bg-indigo-500/20' : 'bg-indigo-300/30'
        }`} />
        <div className={`absolute bottom-10 left-1/3 w-[700px] h-[700px] rounded-full blur-[160px] opacity-15 transition-colors duration-700 ${
          darkMode ? 'bg-emerald-500/15' : 'bg-emerald-300/20'
        }`} />
      </div>

      {/* Top Floating Navigation Bar (Reel Style) */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${
        darkMode ? 'bg-[#090d16]/80 border-slate-800/80' : 'bg-white/80 border-slate-200/80 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[1.5px] shadow-lg shadow-cyan-500/20">
              <div className={`w-full h-full rounded-[10px] flex items-center justify-center font-bold text-sm tracking-tighter ${
                darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
              }`}>
                DL
              </div>
            </div>
            <div>
              <span className="font-bold text-base tracking-tight flex items-center gap-1.5">
                Muhammad Daud <span className="text-cyan-400">.</span>
              </span>
              <span className="block text-[10px] uppercase font-mono tracking-wider text-slate-400 -mt-1">
                Zepra Tech • AEIF Top 5
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            <a href="#hero" className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              darkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800/50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}>
              Home
            </a>
            <a href="#doors" className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 ${
              darkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800/50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              The Doors
            </a>
            <a href="#timeline" className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              darkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800/50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}>
              Back In Time
            </a>
            <button 
              onClick={() => setEstimatorOpen(true)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                darkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800/50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Calculator className="w-3.5 h-3.5 text-cyan-400" />
              ROI Calculator
            </button>
            <button 
              onClick={() => setDossierModalOpen(true)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                darkMode ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 hover:bg-cyan-900/40' : 'text-cyan-700 bg-cyan-50 border border-cyan-200 hover:bg-cyan-100'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Dossier (PDF)
            </button>
          </div>

          {/* Right Header Controls (Clock, Location, Actions) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live PKT Clock (Multan, Pakistan UTC+5) */}
            <div className={`hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-mono ${
              darkMode ? 'border-slate-800 bg-slate-900/80 text-slate-300' : 'border-slate-200 bg-slate-100 text-slate-700'
            }`}>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <MapPin className="w-3 h-3 text-cyan-400" />
              <span>Multan, PK</span>
              <span className="text-slate-500">|</span>
              <Clock className="w-3 h-3 text-amber-400" />
              <span className="font-semibold text-cyan-400">{pktTime || '01:25 AM PKT'}</span>
            </div>

            {/* Command Palette Trigger */}
            <button
              onClick={() => setCommandPaletteOpen(true)}
              className={`p-2 rounded-xl border text-xs font-mono transition-colors flex items-center gap-1.5 ${
                darkMode ? 'border-slate-800 bg-slate-900/80 text-slate-400 hover:text-white hover:border-slate-700' : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900'
              }`}
              title="Command Palette (Ctrl+K)"
            >
              <Command className="w-3.5 h-3.5" />
              <span className="hidden lg:inline text-[10px] text-slate-400">Ctrl+K</span>
            </button>

            {/* Contact CTA */}
            <button
              onClick={() => setContactModalOpen(true)}
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/20 transition-all flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Start Project</span>
              <span className="sm:hidden">Talk</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="md:hidden p-2 rounded-xl text-slate-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden px-4 pt-2 pb-4 space-y-2 border-b ${
            darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <a 
              href="#hero" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium"
            >
              Home
            </a>
            <a 
              href="#doors" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium"
            >
              The Doors (Flagship Projects)
            </a>
            <a 
              href="#timeline" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium"
            >
              Back In Time (Timeline & Experience)
            </a>
            <button 
              onClick={() => { setMobileMenuOpen(false); setEstimatorOpen(true); }}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-between"
            >
              <span>ROI & Scope Calculator</span>
              <Calculator className="w-4 h-4 text-cyan-400" />
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); setDossierModalOpen(true); }}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-between"
            >
              <span>Executive Dossier (Verified PDF)</span>
              <Download className="w-4 h-4 text-emerald-400" />
            </button>
          </div>
        )}
      </nav>

      {/* SECTION 1: HERO SECTION (Reel 00:00 - 00:03) */}
      <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Status Pill Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border text-xs font-mono tracking-wide shadow-sm backdrop-blur-md transition-all duration-300 border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold uppercase tracking-wider text-[11px]">Independent Tech Founder &amp; Architect</span>
                <span className="text-emerald-500/50">•</span>
                <span className="text-slate-300 text-[11px]">Available for work</span>
              </div>

              {/* Main Typography Header */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
                  Hi, I'm <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">Daud</span>.
                </h1>
                
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-300 flex flex-wrap items-baseline gap-2">
                  <span>I am a</span>
                  <div className="inline-flex items-center relative">
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent underline decoration-cyan-500/40 decoration-wavy decoration-2 underline-offset-8">
                      {displayedText}
                    </span>
                    <span className="inline-block w-[3px] h-7 bg-cyan-400 ml-1.5 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Subtitle Bio */}
              <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Founder &amp; CEO at <strong className="text-white font-semibold">Zepra Tech</strong>, 
                awarded <span className="text-amber-400 font-semibold">5th Worldwide Finalist</span> at the 4th International AEIF AI Showdown 2026. 
                Engineering intelligent AI systems, high-throughput web applications, and autonomous agent workflows from vision to scale.
              </p>

              {/* Primary Call-to-Action Buttons (Reel Style) */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => openWhatsApp()}
                  className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2 group transform active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 text-slate-950" />
                  <span>Start a project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href="#doors"
                  className={`px-6 py-3.5 rounded-xl font-semibold text-sm border transition-all flex items-center gap-2 ${
                    darkMode 
                      ? 'border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-200 hover:text-white' 
                      : 'border-slate-300 bg-white hover:bg-slate-100 text-slate-800'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>See my work</span>
                </a>

                <button
                  onClick={() => setDossierModalOpen(true)}
                  className={`px-4 py-3.5 rounded-xl text-xs font-mono font-medium border transition-all flex items-center gap-2 ${
                    darkMode ? 'border-cyan-500/30 bg-cyan-950/20 text-cyan-300 hover:bg-cyan-900/30' : 'border-cyan-300 bg-cyan-50 text-cyan-800 hover:bg-cyan-100'
                  }`}
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Verified CV (PDF)</span>
                </button>
              </div>

              {/* Verified Connect Links with X, Instagram, LinkedIn, GitHub, Zepra Tech */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-3 text-xs text-slate-400">
                <span className="font-mono uppercase tracking-wider text-[11px]">Connect:</span>
                
                <a 
                  href="https://www.linkedin.com/in/muhammad-daud-ali-lashari-1302a5337/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                  title="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5 text-cyan-400" /> LinkedIn
                </a>
                
                <span className="text-slate-700">•</span>
                
                <a 
                  href="https://github.com/ecomwithdaud-hub" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                  title="GitHub"
                >
                  <Code2 className="w-3.5 h-3.5 text-slate-300" /> GitHub
                </a>

                <span className="text-slate-700">•</span>

                <a 
                  href="https://x.com/DaudLashari400" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                  title="X (formerly Twitter)"
                >
                  <XTwitterIcon className="w-3.5 h-3.5 text-slate-200" /> X.com
                </a>

                <span className="text-slate-700">•</span>

                <a 
                  href="https://www.instagram.com/daud_lashari_9907/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-pink-400 transition-colors flex items-center gap-1.5"
                  title="Instagram"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-pink-400" /> Instagram
                </a>

                <span className="text-slate-700">•</span>

                <a 
                  href="https://gozepra.tech" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                  title="Zepra Tech Platform"
                >
                  <Globe className="w-3.5 h-3.5 text-emerald-400" /> gozepra.tech
                </a>
              </div>
            </div>

            {/* Right Column: Signature Portrait Card with Interactive Hanging String Pull Light Switch */}
            <div className="lg:col-span-5 relative flex justify-center">
              
              {/* Outer Card Frame with Glassmorphism */}
              <div className="relative w-full max-w-[380px] group">
                
                {/* INTERACTIVE HANGING STRING PULL CORD (Reel Flex Switch) */}
                <div 
                  onClick={handlePullString}
                  className="absolute -top-12 right-6 z-30 cursor-pointer flex flex-col items-center select-none group/cord"
                  title="Click to pull cord and toggle Theme!"
                >
                  {/* Cord Line */}
                  <div className={`w-[2px] h-14 bg-gradient-to-b from-amber-200/80 via-amber-400 to-amber-500 transition-transform origin-top ${
                    stringPulling ? 'scale-y-125' : 'group-hover/cord:scale-y-110'
                  }`} />
                  
                  {/* Brass Pull Handle / Tassel */}
                  <div className={`w-3.5 h-6 rounded-full bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 shadow-md shadow-amber-500/50 flex items-center justify-center transition-transform ${
                    stringPulling ? 'translate-y-3 scale-110' : 'group-hover/cord:translate-y-1'
                  }`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-100" />
                  </div>
                  
                  {/* Tooltip hint */}
                  <span className="absolute -bottom-6 right-0 text-[9px] font-mono whitespace-nowrap px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 opacity-0 group-hover/cord:opacity-100 transition-opacity">
                    Pull light switch
                  </span>
                </div>

                {/* Ambient Glow behind card */}
                <div className={`absolute -inset-1 rounded-3xl blur-xl opacity-60 transition-all duration-700 ${
                  darkMode ? 'bg-gradient-to-tr from-cyan-500/30 via-blue-600/20 to-purple-600/30' : 'bg-gradient-to-tr from-cyan-300/40 via-blue-300/30 to-purple-300/40'
                }`} />

                {/* Card Container */}
                <div className={`relative rounded-3xl p-4 border backdrop-blur-xl shadow-2xl transition-all duration-500 ${
                  darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white/95 border-slate-200'
                }`}>
                  
                  {/* Top Bar of Ability Card */}
                  <div className="flex items-center justify-between px-2 pb-3 mb-2 border-b border-slate-800/60">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        Executive Ability Card
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      Top 5 Finalist
                    </span>
                  </div>

                  {/* Daud's Photograph in Suit */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-b from-slate-800 to-slate-950 border border-slate-800/80">
                    <img
                      src="/profile.png"
                      alt="Muhammad Daud Ali Lashari"
                      className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[0.98] transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient Overlay for Corporate Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    {/* Floating Corner Achievement Pill */}
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl backdrop-blur-md bg-slate-950/80 border border-slate-700/60 shadow-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-white tracking-wide">
                            Muhammad Daud Ali Lashari
                          </p>
                          <p className="text-[10px] text-cyan-300 font-mono">
                            Founder &amp; CEO • Zepra Tech
                          </p>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center">
                          <Trophy className="w-4 h-4 text-amber-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Tag (Reel "my ability card") */}
                  <div className="pt-3 flex items-center justify-between px-2 text-xs">
                    <button
                      onClick={() => setDossierModalOpen(true)}
                      className="text-[11px] font-mono text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" /> Inspect verified CV
                    </button>
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 100% Verified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM MARQUEE TICKER (Reel Flex Ticker) */}
        <div className={`mt-14 py-3 border-y overflow-hidden whitespace-nowrap ${
          darkMode ? 'bg-slate-950/80 border-slate-800/80 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
        }`}>
          <div className="inline-flex items-center gap-8 font-mono text-xs uppercase tracking-widest animate-[marquee_28s_linear_infinite]">
            <span className="flex items-center gap-2 text-cyan-400 font-bold">
              <Sparkles className="w-3.5 h-3.5" /> AVAILABLE FOR HIGH-IMPACT VENTURES
            </span>
            <span>•</span>
            <span className="flex items-center gap-2 text-amber-400 font-bold">
              <Trophy className="w-3.5 h-3.5" /> 5th WORLDWIDE FINALIST @ 4TH INTERNATIONAL AEIF AI SHOWDOWN 2026
            </span>
            <span>•</span>
            <span className="flex items-center gap-2 text-emerald-400 font-bold">
              <Building2 className="w-3.5 h-3.5" /> FOUNDER &amp; CEO AT ZEPRA TECH (GOZEPRA.TECH)
            </span>
            <span>•</span>
            <span className="flex items-center gap-2 text-blue-400 font-bold">
              <Cpu className="w-3.5 h-3.5" /> LINKEDIN AUTONOMOUS RESUME &amp; EXECUTIVE DOSSIER ENGINE
            </span>
            <span>•</span>
            <span className="flex items-center gap-2 text-purple-400 font-bold">
              <BrainCircuit className="w-3.5 h-3.5" /> AUTONOMOUS MULTI-AGENT SWARMS &amp; COMPUTER VISION
            </span>
            <span>•</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: "MAGIC HAPPENS BEHIND THE DOORS" (Reel 00:04 - 00:10) */}
      <section id="doors" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>INTERACTIVE 3D PORTALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Magic happens behind the doors <span className="text-amber-400">.</span>
            </h2>
            <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Select a portal to swing the door open and explore flagship architectures, production code, and live global achievements.
            </p>
          </div>

          {/* DOORS INTERACTIVE CONTAINER */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* The 4 3D Doors Row (Left / Top Grid) */}
            <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4">
              {doors.map((door) => {
                const isOpen = activeDoorId === door.id;
                const isHovered = hoveredDoorId === door.id;

                return (
                  <div
                    key={door.id}
                    onClick={() => setActiveDoorId(door.id)}
                    onMouseEnter={() => setHoveredDoorId(door.id)}
                    onMouseLeave={() => setHoveredDoorId(null)}
                    className="door-container cursor-pointer relative group flex flex-col items-center"
                  >
                    {/* Arched Door Frame Outline */}
                    <div className={`w-full aspect-[9/16] rounded-t-full p-2.5 border-2 transition-all duration-500 relative flex flex-col justify-end ${
                      isOpen 
                        ? 'border-amber-400 shadow-2xl shadow-amber-500/20 bg-slate-950' 
                        : isHovered 
                          ? 'border-cyan-500/70 bg-slate-900/60' 
                          : 'border-slate-800 bg-slate-950/80 hover:border-slate-700'
                    }`}>
                      
                      {/* Interior Glowing Portal Chamber (Revealed when door swings) */}
                      <div 
                        className="absolute inset-2.5 rounded-t-full overflow-hidden flex items-center justify-center transition-opacity duration-700 pointer-events-none"
                        style={{
                          background: isOpen 
                            ? `radial-gradient(ellipse at center, ${door.lightColor} 0%, rgba(15,23,42,0.95) 80%)` 
                            : 'rgba(15,23,42,0.95)'
                        }}
                      >
                        {/* Interior portal icon / light beam */}
                        <div className={`transition-all duration-500 transform ${
                          isOpen ? 'scale-100 opacity-100' : 'scale-50 opacity-20'
                        }`}>
                          <Sparkles className="w-8 h-8 text-amber-300 animate-pulse" />
                        </div>
                      </div>

                      {/* THE 3D DOOR LEAF (Hinged on the left side) */}
                      <div 
                        className={`door-leaf absolute inset-2.5 rounded-t-full border border-slate-700 shadow-2xl flex flex-col justify-between p-3 select-none bg-gradient-to-b ${door.doorColor} ${
                          isOpen ? 'door-open' : isHovered ? 'rotate-[-22deg]' : 'rotate-0'
                        }`}
                        style={{
                          boxShadow: isOpen ? '-12px 10px 25px rgba(0,0,0,0.8)' : undefined
                        }}
                      >
                        {/* Door Arched Header Window / Molding */}
                        <div className="w-full flex flex-col items-center pt-2">
                          <div className="w-12 h-6 border-2 border-slate-700/80 rounded-t-full mb-1 flex items-center justify-center bg-slate-900/40">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                          </div>
                          
                          {/* Brass Nameplate Plaque */}
                          <div className={`w-full py-1 px-1 rounded border text-[9px] font-mono font-bold text-center tracking-tight truncate shadow-sm ${door.plaqueColor}`}>
                            {door.title}
                          </div>
                        </div>

                        {/* Traditional Door Paneling (2 inset rectangles) */}
                        <div className="space-y-2 my-auto w-full px-1">
                          <div className="w-full h-10 rounded border border-slate-800/80 bg-slate-950/40 shadow-inner flex items-center justify-center">
                            <span className="text-[10px] font-mono text-slate-500 font-bold">{door.doorNumber}</span>
                          </div>
                          <div className="w-full h-12 rounded border border-slate-800/80 bg-slate-950/40 shadow-inner" />
                        </div>

                        {/* Door Knob / Brass Handle (Right Edge) */}
                        <div className="w-full flex justify-end pr-1 pb-4">
                          <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 border border-amber-300 shadow-md shadow-amber-500/50 flex items-center justify-center">
                            <div className="w-1 h-1 rounded-full bg-amber-900" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Door Bottom Label / Status */}
                    <div className="mt-3 text-center">
                      <span className={`text-xs font-semibold tracking-tight transition-colors ${
                        isOpen ? 'text-amber-400 font-bold' : 'text-slate-400 group-hover:text-white'
                      }`}>
                        {door.doorNumber}. {door.title}
                      </span>
                      <p className="text-[10px] font-mono text-slate-400 mt-0.5">
                        {isOpen ? '● Open & Inspecting' : 'Click to open'}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* The Expanded Inspection Stage (Right Column, Reel 00:05 - 00:10) */}
            <div className="lg:col-span-7">
              <div className={`rounded-3xl border p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 relative ${
                darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                
                {/* Header of Active Inspection Case */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800/80">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30">
                        DOOR {activeDoor.doorNumber} UNLOCKED
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {activeDoor.category}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-2">
                      {activeDoor.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => openWhatsApp(`Hi Daud, I am interested in discussing your project: ${activeDoor.title}`)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>Inquire About Case</span>
                  </button>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-6">
                  {activeDoor.metrics.map((m, idx) => (
                    <div 
                      key={idx}
                      className={`p-3 rounded-xl border ${
                        darkMode ? 'border-slate-800 bg-slate-950/60' : 'border-slate-200 bg-slate-50'
                      }`}
                    >
                      <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400">{m.label}</p>
                      <p className="text-sm sm:text-base font-bold text-cyan-400 mt-0.5">{m.value}</p>
                    </div>
                  ))}
                </div>

                {/* Description and Checklist */}
                <div className="space-y-4">
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {activeDoor.description}
                  </p>

                  <div className="space-y-2 pt-1">
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                      Architectural Highlights &amp; Scope:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeDoor.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-2">
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Technologies &amp; Frameworks:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {activeDoor.techStack.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono border border-slate-700 bg-slate-800/80 text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* INTERACTIVE DEVICE MOCKUP (Reel 00:07 - 00:10) */}
                  <div className="mt-6 pt-6 border-t border-slate-800/80">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                        Live System Simulation Preview
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400">● Status: Active</span>
                    </div>

                    {/* Mockup Frame */}
                    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs shadow-inner">
                      {activeDoor.demoType === 'traffic' && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-slate-800">
                            <span>SABZ_ENGINE_v4.2 // AEIF_SHOWDOWN_BUILD</span>
                            <span className="text-amber-400 font-bold">5th Worldwide Rank</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                            <div className="p-2 rounded bg-slate-900 border border-slate-800">
                              <span className="text-slate-500 block">Junction 01</span>
                              <span className="text-emerald-400 font-bold text-xs">GREEN (48s)</span>
                            </div>
                            <div className="p-2 rounded bg-slate-900 border border-slate-800">
                              <span className="text-slate-500 block">Emergency Priority</span>
                              <span className="text-cyan-400 font-bold text-xs">AMBULANCE CLEAR</span>
                            </div>
                            <div className="p-2 rounded bg-slate-900 border border-slate-800">
                              <span className="text-slate-500 block">Frame Rate</span>
                              <span className="text-amber-400 font-bold text-xs">60 FPS Edge</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeDoor.demoType === 'resume' && (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-slate-800">
                            <span>VECTOR_COMPILER // LINKEDIN_PROFILE_INGEST</span>
                            <span className="text-cyan-400 font-bold">PDF DPI: 300 Vector</span>
                          </div>
                          <div className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800">
                            <div className="flex items-center gap-2">
                              <FileText className="w-4 h-4 text-cyan-400" />
                              <span className="text-slate-200">Muhammad_Daud_Ali_Lashari_CV.pdf</span>
                            </div>
                            <button
                              onClick={() => setDossierModalOpen(true)}
                              className="text-xs text-cyan-400 hover:underline flex items-center gap-1 font-bold"
                            >
                              Inspect PDF <Eye className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      )}

                      {activeDoor.demoType === 'zepra' && (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-slate-800">
                            <span>ZEPRA_PRODUCTION // EDGE_CLUSTER_GLOBAL</span>
                            <span className="text-emerald-400 font-bold">gozepra.tech</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-[10px]">
                            <div className="p-2 rounded bg-slate-900 border border-slate-800 flex justify-between">
                              <span className="text-slate-400">Response:</span>
                              <span className="text-cyan-400 font-bold">78ms (Global CDN)</span>
                            </div>
                            <div className="p-2 rounded bg-slate-900 border border-slate-800 flex justify-between">
                              <span className="text-slate-400">Security:</span>
                              <span className="text-emerald-400 font-bold">TLS 1.3 Strict</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeDoor.demoType === 'agents' && (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-slate-800">
                            <span>SWARM_ORCHESTRATOR // DAG_EXECUTION_GRAPH</span>
                            <span className="text-purple-400 font-bold">3 Subagents Active</span>
                          </div>
                          <div className="space-y-1 text-[11px] text-slate-300">
                            <p className="text-emerald-400">✔ Agent 1 [Planner]: Objective partitioned into 4 atomic goals</p>
                            <p className="text-cyan-400">✔ Agent 2 [Researcher]: Vector similarity query returned 12 references</p>
                            <p className="text-purple-400">⚡ Agent 3 [Synthesizer]: Verification test suite passing (100%)</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setDossierModalOpen(true)}
                      className="px-4 py-2.5 rounded-xl text-xs font-semibold border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white transition-colors flex items-center gap-2"
                    >
                      <FileCheck2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>View in Full Dossier</span>
                    </button>

                    <button
                      onClick={() => openWhatsApp(`Hi Daud, I want to discuss architectural scoping for ${activeDoor.title}`)}
                      className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30 transition-colors flex items-center gap-2"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Schedule Technical Review</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: "LET'S GO BACK IN TIME" (Reel 00:11 - 00:14 Chronometer) */}
      <section id="timeline" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono">
              <Clock className="w-3.5 h-3.5" />
              <span>CHRONOLOGICAL MILESTONES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Let's go back in time <span className="text-cyan-400">.</span>
            </h2>
            <p className={`text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Scrub through the time machine to inspect verified milestones, leadership roles, and academic achievements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* The Chronometer / Time Machine Graphic (Left, Reel Style) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
                
                {/* Rotating Outer Celestial Ring */}
                <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/30 animate-spin-slow pointer-events-none" />
                <div className="absolute inset-4 rounded-full border border-slate-800 pointer-events-none" />
                
                {/* Ambient Radial Flare */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-indigo-600/15 blur-xl pointer-events-none" />

                {/* Central Time Core */}
                <div className="relative text-center z-10 space-y-1">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 block">
                    ERA ARCHIVE
                  </span>
                  <div className="text-5xl sm:text-6xl font-extrabold tracking-tighter bg-gradient-to-b from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent font-mono">
                    {activeEra.year}
                  </div>
                  <span className="text-xs font-mono text-cyan-400 font-semibold block px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                    {activeEra.period}
                  </span>
                </div>
              </div>

              {/* Scrubber & Player Controls (Reel 00:13 Style) */}
              <div className={`mt-6 p-2 rounded-2xl border flex items-center gap-3 backdrop-blur-md shadow-lg ${
                darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                {/* Prev Button */}
                <button
                  onClick={() => setSelectedEraIndex(prev => (prev - 1 + timelineEras.length) % timelineEras.length)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  title="Previous Era"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Play / Pause Autoplay */}
                <button
                  onClick={() => setIsPlayingTimeline(prev => !prev)}
                  className="p-2 rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
                  title={isPlayingTimeline ? 'Pause Autoplay' : 'Autoplay Timeline'}
                >
                  {isPlayingTimeline ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>

                {/* Next Button */}
                <button
                  onClick={() => setSelectedEraIndex(prev => (prev + 1) % timelineEras.length)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  title="Next Era"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                <div className="h-4 w-px bg-slate-800" />

                {/* Index Indicator */}
                <span className="text-xs font-mono text-slate-400 px-2">
                  0{selectedEraIndex + 1} / 0{timelineEras.length}
                </span>

                {/* Year Selectors */}
                <div className="flex items-center gap-1">
                  {timelineEras.map((era, idx) => (
                    <button
                      key={era.year}
                      onClick={() => setSelectedEraIndex(idx)}
                      className={`px-2 py-1 rounded text-[11px] font-mono transition-colors ${
                        selectedEraIndex === idx
                          ? 'bg-cyan-500 text-slate-950 font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {era.year}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Active Era Details Card (Right Column) */}
            <div className="lg:col-span-7">
              <div className={`rounded-3xl border p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 ${
                darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                <div className="space-y-2 pb-6 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                      {activeEra.period}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {activeEra.role}
                  </h3>
                  <p className="text-sm font-medium text-slate-400">
                    {activeEra.subtitle}
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="py-6 space-y-3">
                  {activeEra.details.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-cyan-400" />
                      </div>
                      <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Skill Badges for Era */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                  {activeEra.badges.map(b => (
                    <span 
                      key={b}
                      className="px-3 py-1 rounded-lg text-xs font-mono border border-slate-700/80 bg-slate-950/60 text-slate-300"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: INTERACTIVE ESTIMATOR & SCOPING PREVIEW */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-3xl border p-8 sm:p-10 backdrop-blur-xl relative overflow-hidden ${
            darkMode ? 'bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border-slate-800' : 'bg-slate-100 border-slate-200'
          }`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>INSTANT ARCHITECTURAL SCOPING</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Need a scoped estimate for your AI or Web platform?
                </h3>
                <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Calculate real-world timelines, engineering velocity, and technical ROI based on Zepra Tech's proven development frameworks.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <button
                  onClick={() => setEstimatorOpen(true)}
                  className="px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Launch ROI Calculator</span>
                </button>
                <button
                  onClick={() => openWhatsApp('Hi Daud, I would like to get a scoping estimate for our software project.')}
                  className={`px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm border transition-all flex items-center justify-center gap-2 ${
                    darkMode ? 'border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700' : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Direct Technical Briefing</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: "GOT A PROJECT? LET'S BUILD IT TOGETHER." (Reel 00:15 Flex Footer) */}
      <footer id="contact" className={`pt-20 pb-12 border-t relative ${
        darkMode ? 'bg-[#070a12] border-slate-800/80 text-slate-300' : 'bg-white border-slate-200 text-slate-700'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Punchy Hero CTA from Reel */}
          <div className="space-y-6 max-w-4xl pb-16 border-b border-slate-800/80">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>AVAILABLE FOR NEW WORK</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              Got a project? <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Let's build it together.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              I'm taking on select high-impact client builds, AI architecture design, and enterprise web solutions. 
              Drop a message and I'll get back to you within a few hours.
            </p>

            {/* Reel CTA Buttons: [Let's talk ↗] and [See my work] */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setContactModalOpen(true)}
                className="px-8 py-4 rounded-xl font-bold text-sm bg-white text-slate-950 hover:bg-slate-200 transition-all shadow-xl flex items-center gap-2 transform active:scale-95"
              >
                <span>Let's talk</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#doors"
                className={`px-8 py-4 rounded-xl font-bold text-sm border transition-all flex items-center gap-2 ${
                  darkMode ? 'border-slate-700 hover:border-slate-500 text-white' : 'border-slate-300 hover:border-slate-400 text-slate-900'
                }`}
              >
                <span>See my work</span>
              </a>

              <button
                onClick={() => setDossierModalOpen(true)}
                className="px-6 py-4 rounded-xl font-mono text-xs text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 bg-cyan-950/20 hover:bg-cyan-900/30 transition-all flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Executive CV Dossier (PDF)</span>
              </button>
            </div>
          </div>

          {/* 4-Column Directory Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-xs">
            
            {/* Column 1: Services */}
            <div className="space-y-3">
              <p className="font-mono uppercase tracking-wider text-slate-400 font-semibold text-[11px]">
                Engineering Focus
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="hover:text-cyan-400 transition-colors">AI &amp; Computer Vision Systems</li>
                <li className="hover:text-cyan-400 transition-colors">Full-Stack Web Architectures</li>
                <li className="hover:text-cyan-400 transition-colors">Autonomous Multi-Agent Swarms</li>
                <li className="hover:text-cyan-400 transition-colors">Vector Document Engines</li>
                <li className="hover:text-cyan-400 transition-colors">Enterprise React &amp; Next.js 15</li>
              </ul>
            </div>

            {/* Column 2: Navigation */}
            <div className="space-y-3">
              <p className="font-mono uppercase tracking-wider text-slate-400 font-semibold text-[11px]">
                Quick Navigation
              </p>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#hero" className="hover:text-cyan-400 transition-colors">Home Portal</a></li>
                <li><a href="#doors" className="hover:text-cyan-400 transition-colors">The Doors (Flagship Cases)</a></li>
                <li><a href="#timeline" className="hover:text-cyan-400 transition-colors">Back In Time (Timeline)</a></li>
                <li><button onClick={() => setEstimatorOpen(true)} className="hover:text-cyan-400 transition-colors">ROI Calculator</button></li>
                <li><button onClick={() => setDossierModalOpen(true)} className="hover:text-cyan-400 transition-colors">Executive PDF Dossier</button></li>
                <li><button onClick={() => setChatOpen(true)} className="hover:text-cyan-400 transition-colors flex items-center gap-1"><Bot className="w-3 h-3 text-cyan-400" /> Talk to AI Agent</button></li>
              </ul>
            </div>

            {/* Column 3: Location & Time */}
            <div className="space-y-3">
              <p className="font-mono uppercase tracking-wider text-slate-400 font-semibold text-[11px]">
                Availability &amp; Location
              </p>
              <div className="space-y-1.5 text-slate-300">
                <p className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Multan, Punjab, Pakistan
                </p>
                <p className="font-mono text-cyan-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" /> Local Time: {pktTime || '01:25 AM PKT'}
                </p>
                <p className="text-[11px] text-slate-400">
                  Remote Worldwide Ready (UTC+5)
                </p>
                <p className="text-[11px] text-emerald-400 font-semibold">
                  Status: Open for High-Impact Roles
                </p>
              </div>
            </div>

            {/* Column 4: Verified Social & Direct (Included X, Instagram, LinkedIn, GitHub, Zepra) */}
            <div className="space-y-3">
              <p className="font-mono uppercase tracking-wider text-slate-400 font-semibold text-[11px]">
                Verified Socials &amp; Direct
              </p>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <a 
                    href="https://www.linkedin.com/in/muhammad-daud-ali-lashari-1302a5337/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-cyan-400" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/ecomwithdaud-hub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                  >
                    <Code2 className="w-3.5 h-3.5 text-slate-300" /> GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://x.com/DaudLashari400"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                  >
                    <XTwitterIcon className="w-3.5 h-3.5 text-slate-200" /> X (Twitter) @DaudLashari400
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/daud_lashari_9907/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-400 transition-colors flex items-center gap-1.5"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-pink-400" /> Instagram @daud_lashari_9907
                  </a>
                </li>
                <li>
                  <a 
                    href="https://gozepra.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                  >
                    <Globe className="w-3.5 h-3.5 text-emerald-400" /> Zepra Tech (gozepra.tech)
                  </a>
                </li>
                <li>
                  <button 
                    onClick={() => openWhatsApp()}
                    className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" /> +92 328 6673627
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright & Disclaimer Bar */}
          <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-4">
            <p>© {new Date().getFullYear()} Muhammad Daud Ali Lashari. All engineering rights reserved.</p>
            <p className="flex items-center gap-2">
              <span>Synchronized with LinkedIn &amp; Executive Dossier Engine</span>
              <span>•</span>
              <span className="text-cyan-400">Vercel Ready</span>
            </p>
          </div>
        </div>
      </footer>

      {/* ---------------------------------------------------------------- */}
      {/* FLOATING WAVING AI ROBOT AVATAR & INTELLIGENT CHATBOT (Requested) */}
      {/* ---------------------------------------------------------------- */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end select-none">
        
        {/* Single Clean Speech Bubble (Pins above the robot) */}
        {!chatOpen && !speechBubbleDismissed && (
          <div className="mb-2 relative animate-bounce [animation-duration:3.5s]">
            <div 
              onClick={() => setChatOpen(true)}
              className="bg-white text-slate-900 rounded-2xl px-4 py-3 shadow-xl border border-slate-200/90 max-w-[210px] relative cursor-pointer hover:shadow-2xl transition-shadow"
            >
              <button 
                onClick={(e) => { e.stopPropagation(); setSpeechBubbleDismissed(true); }}
                className="absolute top-2 right-2 text-slate-400 hover:text-slate-700 p-0.5 rounded-full hover:bg-slate-100 transition-colors"
                title="Dismiss speech bubble"
                aria-label="Dismiss"
              >
                <X className="w-3.5 h-3.5" />
              </button>
              <p className="text-xs font-bold text-slate-900 flex items-center gap-1">
                Hello! <span className="text-sm">👋</span>
              </p>
              <p className="text-[11px] font-medium text-slate-600 mt-0.5 leading-snug">
                How can I help you today?
              </p>
              
              {/* Pointer Arrow pointing down to robot antenna */}
              <div className="absolute -bottom-2 right-9 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[8px] border-t-white filter drop-shadow-sm" />
            </div>
          </div>
        )}

        {/* The Cute Waving Robot Character Button (Vector Clean - No Screenshots) */}
        <div 
          onClick={() => setChatOpen(prev => !prev)}
          className="relative cursor-pointer group flex items-end justify-center transform hover:scale-105 active:scale-95 transition-all"
          title="Click to chat with Daud's AI Assistant!"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -inset-1 rounded-full bg-cyan-500/20 blur-md group-hover:bg-cyan-400/35 transition-colors animate-pulse" />

          {/* Isolated Cute Robot SVG */}
          <div className="relative w-20 h-24 sm:w-24 sm:h-28 flex items-end justify-center">
            <CuteBotAvatar className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(6,182,212,0.35)]" />
            
            {/* Live Green Online Status Badge */}
            <div className="absolute top-2 right-4 flex items-center justify-center">
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-950 shadow-md animate-ping absolute" />
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-950 shadow-md relative" />
            </div>
          </div>
        </div>
      </div>

      {/* AI CHATBOT WINDOW (Interactive, CV-Trained) */}
      {chatOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[400px] h-[550px] max-h-[80vh] rounded-3xl border border-slate-800 bg-slate-950/95 backdrop-blur-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Chat Window Top Bar */}
          <div className="px-4 py-3 bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full overflow-hidden bg-slate-900 border border-cyan-500/50 p-0.5 flex items-center justify-center">
                <CuteBotAvatar className="w-full h-full" animated={false} />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs font-bold text-white">Daud AI Assistant</h4>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <p className="text-[10px] text-cyan-400 font-mono">Trained on Verified CV Dossier</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setChatMessages([
                  {
                    id: String(Date.now()),
                    sender: 'bot',
                    text: "Conversation cleared! How can I assist you with Muhammad Daud's portfolio, background, or projects?",
                    timestamp: 'Just now'
                  }
                ])}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Reset conversation"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setChatOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Minimize chat"
              >
                <Minus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 font-sans text-xs">
            {chatMessages.map((msg) => (
              <div 
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className="flex items-start gap-2 max-w-[85%]">
                  {msg.sender === 'bot' && (
                    <div className="w-6 h-6 rounded-full bg-cyan-950 border border-cyan-500/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                  )}

                  <div className={`p-3 rounded-2xl whitespace-pre-line leading-relaxed shadow-md ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-tr-none'
                      : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>

                {/* Quick Action Buttons attached to Bot Message */}
                {msg.actions && msg.actions.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2 ml-8">
                    {msg.actions.map((act, i) => (
                      <button
                        key={i}
                        onClick={() => handleActionClick(act)}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-mono border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 hover:bg-cyan-900/50 hover:text-white transition-all flex items-center gap-1 shadow-sm"
                      >
                        {act.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isBotTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-[11px] font-mono ml-2">
                <Bot className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
                <span>Daud AI is thinking...</span>
              </div>
            )}

            <div ref={chatMessagesEndRef} />
          </div>

          {/* Quick Prompt Chips */}
          <div className="px-3 py-2 bg-slate-900/70 border-t border-slate-800/80 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-[10px]">
            <span className="text-slate-400 font-mono shrink-0">Ask:</span>
            {[
              'Who is Daud?',
              'AEIF Top 5 Award',
              'Zepra Tech',
              'Skills & Stack',
              'Download CV',
              'WhatsApp & Hire'
            ].map((chip) => (
              <button
                key={chip}
                onClick={() => handleSendMessage(chip)}
                className="px-2 py-0.5 rounded-full border border-slate-700 bg-slate-800/80 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 whitespace-nowrap transition-colors"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Chat Input Bar */}
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
            className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask anything about Daud's CV or projects..."
              className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
            />
            <button
              type="submit"
              disabled={!chatInput.trim()}
              className="p-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 disabled:hover:bg-cyan-500 text-slate-950 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* MODAL 1: EXECUTIVE DOSSIER / VERIFIED CV VIEWER */}
      {dossierModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className={`relative w-full max-w-4xl max-h-[92vh] rounded-3xl border shadow-2xl flex flex-col overflow-hidden ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            
            {/* Header */}
            <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Executive Curriculum Vitae &amp; Dossier</h4>
                  <p className="text-[11px] text-slate-400 font-mono">
                    2.2 MB High-DPI Vector Document • Verified LinkedIn Source
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/Muhammad_Daud_Ali_Lashari_CV.pdf"
                  download="Muhammad_Daud_Ali_Lashari_CV.pdf"
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" /> Download PDF
                </a>
                <button
                  onClick={() => setDossierModalOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Preview Body */}
            <div className="flex-1 overflow-y-auto p-6 bg-slate-950/60 flex flex-col items-center">
              <div className="relative max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-white">
                <img
                  src="/cv_full_preview.png"
                  alt="Muhammad Daud Ali Lashari Verified CV Dossier"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Status: Authenticated Record</span>
              <button
                onClick={() => openWhatsApp('Hi Daud, I reviewed your CV dossier and would like to discuss a role.')}
                className="text-cyan-400 hover:underline flex items-center gap-1"
              >
                Inquire via WhatsApp <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: INTERACTIVE ROI & SCOPING CALCULATOR */}
      {estimatorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className={`relative w-full max-w-2xl rounded-3xl border shadow-2xl p-6 sm:p-8 ${
            darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                  <Calculator className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-base font-bold">Project Scope &amp; ROI Estimator</h4>
                  <p className="text-xs text-slate-400">Zepra Tech Engineering Delivery Framework</p>
                </div>
              </div>
              <button onClick={() => setEstimatorOpen(false)} className="text-slate-400 hover:text-white p-1.5">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-6">
              {/* Scope Choice */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  Project Type &amp; Scale
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'mvp', title: 'Modern MVP', desc: 'React + Full-Stack App' },
                    { id: 'ai', title: 'AI System', desc: 'Computer Vision / Agents' },
                    { id: 'enterprise', title: 'Enterprise Suite', desc: 'High-Concurrency System' }
                  ].map(t => (
                    <button
                      key={t.id}
                      onClick={() => setProjectType(t.id as any)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        projectType === t.id
                          ? 'border-cyan-400 bg-cyan-500/10 text-white shadow-sm'
                          : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <p className="text-xs font-bold text-white">{t.title}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">{t.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Delivery Speed */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  Delivery Cadence
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSpeed('accelerated')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      speed === 'accelerated'
                        ? 'border-amber-400 bg-amber-500/10 text-white'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400'
                    }`}
                  >
                    <p className="text-xs font-bold text-amber-300">⚡ Sprint Accelerated</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">High-priority dedicated cycle</p>
                  </button>
                  <button
                    onClick={() => setSpeed('standard')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      speed === 'standard'
                        ? 'border-cyan-400 bg-cyan-500/10 text-white'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400'
                    }`}
                  >
                    <p className="text-xs font-bold text-cyan-300">Standard Production</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Standard milestone iteration</p>
                  </button>
                </div>
              </div>

              {/* Calculated Outputs */}
              <div className="p-4 rounded-2xl border border-cyan-500/30 bg-cyan-950/30 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[11px] font-mono text-slate-400 uppercase">Estimated Delivery</p>
                  <p className="text-2xl font-extrabold text-cyan-400 mt-0.5">~{estimatedTimeline} Weeks</p>
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-400 uppercase">Target Velocity / ROI</p>
                  <p className="text-sm font-bold text-emerald-400 mt-1">{estimatedROI}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-400 font-mono">100% Free Discovery Assessment</span>
              <button
                onClick={() => openWhatsApp(`Hi Daud, I ran your ROI Estimator for a ${projectType.toUpperCase()} project (~${estimatedTimeline} weeks) and want to discuss.`)}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Confirm Scope on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: CONTACT & BOOKING DRAWER */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className={`relative w-full max-w-lg rounded-3xl border shadow-2xl p-6 sm:p-8 ${
            darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <h4 className="text-lg font-bold text-white">Start a Conversation</h4>
                <p className="text-xs text-slate-400">Direct response within 2-4 hours</p>
              </div>
              <button onClick={() => setContactModalOpen(false)} className="text-slate-400 hover:text-white p-1.5">
                <X className="w-5 h-5" />
              </button>
            </div>

            {contactSent ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h5 className="text-base font-bold text-white">Message Dispatched!</h5>
                <p className="text-xs text-slate-400">Thank you! Daud will review your message shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="py-6 space-y-4">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    Your Email or Organization
                  </label>
                  <input
                    type="text"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-slate-100 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    Project Brief or Role Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Briefly describe what you'd like to build or discuss..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-slate-100 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div className="pt-2 flex flex-col gap-2.5">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-bold text-xs bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" /> Send Message
                  </button>

                  <div className="relative text-center my-1">
                    <span className="text-[10px] font-mono uppercase text-slate-500 bg-slate-900 px-2 relative z-10">
                      OR DIRECT INSTANT CHAT
                    </span>
                    <div className="absolute inset-y-1/2 left-0 right-0 h-px bg-slate-800" />
                  </div>

                  <button
                    type="button"
                    onClick={() => openWhatsApp(contactMessage ? `Hi Daud, from ${contactEmail}: ${contactMessage}` : undefined)}
                    className="w-full py-3 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white transition-colors flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-4 h-4" /> Message Directly on WhatsApp
                  </button>
                </div>
              </form>
            )}

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>📍 Multan, PK (UTC+5)</span>
              <span>⚡ Typical reply: &lt; 2 hrs</span>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 4: COMMAND PALETTE (Ctrl+K / Cmd+K) */}
      {commandPaletteOpen && (
        <div 
          onClick={() => setCommandPaletteOpen(false)}
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/80 backdrop-blur-md"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className={`w-full max-w-xl rounded-2xl border shadow-2xl overflow-hidden ${
              darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <div className="p-3 border-b border-slate-800 flex items-center gap-3">
              <Command className="w-4 h-4 text-cyan-400" />
              <input
                autoFocus
                type="text"
                placeholder="Type a command or jump to section..."
                className="w-full bg-transparent text-sm focus:outline-none placeholder:text-slate-500"
              />
              <button 
                onClick={() => setCommandPaletteOpen(false)}
                className="text-xs font-mono text-slate-500 hover:text-white px-2 py-0.5 rounded bg-slate-800"
              >
                ESC
              </button>
            </div>

            <div className="p-2 space-y-1 text-xs">
              {[
                { title: 'The Doors (Flagship Projects)', href: '#doors', icon: Sparkles },
                { title: 'Back In Time (Timeline & Experience)', href: '#timeline', icon: Clock },
                { title: 'Talk to Daud AI Agent', action: () => { setCommandPaletteOpen(false); setChatOpen(true); }, icon: Bot },
                { title: 'Launch ROI & Scope Calculator', action: () => { setCommandPaletteOpen(false); setEstimatorOpen(true); }, icon: Calculator },
                { title: 'Download Executive CV Dossier (PDF)', action: () => { setCommandPaletteOpen(false); setDossierModalOpen(true); }, icon: Download },
                { title: 'Open LinkedIn Profile', action: () => window.open('https://www.linkedin.com/in/muhammad-daud-ali-lashari-1302a5337/', '_blank'), icon: Globe },
                { title: 'Open GitHub Profile', action: () => window.open('https://github.com/ecomwithdaud-hub', '_blank'), icon: Code2 },
                { title: 'Open X / Twitter (@DaudLashari400)', action: () => window.open('https://x.com/DaudLashari400', '_blank'), icon: Globe },
                { title: 'Open Instagram (@daud_lashari_9907)', action: () => window.open('https://www.instagram.com/daud_lashari_9907/', '_blank'), icon: Globe },
                { title: 'Chat via WhatsApp (+92 328 6673627)', action: () => openWhatsApp(), icon: Phone }
              ].map((cmd, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (cmd.action) cmd.action();
                    else if (cmd.href) {
                      setCommandPaletteOpen(false);
                      window.location.hash = cmd.href;
                    }
                  }}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-cyan-500/10 hover:text-cyan-400 flex items-center justify-between transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <cmd.icon className="w-4 h-4 text-slate-400" />
                    <span>{cmd.title}</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}