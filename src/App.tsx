import React, { useState, useEffect, useMemo } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Search, 
  MapPin, 
  Mail, 
  Linkedin, 
  Globe, 
  Download, 
  Sun, 
  Moon, 
  ExternalLink, 
  Award, 
  ChevronRight, 
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
  ArrowUpRight,
  Sliders,
  FileText,
  ArrowRight,
  ShieldCheck,
  Clock,
  Layers
} from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [paletteSearch, setPaletteSearch] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  // ROI / Scoping Calculator State
  const [calcProjectType, setCalcProjectType] = useState<'web' | 'ai' | 'geo' | 'saas'>('web');
  const [calcScale, setCalcScale] = useState<'mvp' | 'standard' | 'enterprise'>('standard');
  const [calcAddons, setCalcAddons] = useState<{ [key: string]: boolean }>({
    scopingEngine: true,
    authSecurity: true,
    aiOrchestration: false,
    analyticsGIS: false,
    multiRegion: true,
  });

  // Contact form state
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  // Synchronize Dark Mode Class on document body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Global Keyboard Shortcut: Ctrl+K or Cmd+K for Command Palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setCommandPaletteOpen(false);
        setSelectedProject(null);
        setShowResumeModal(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  // Profile Image Source provided by user
  const profileImg = "./profile.png";

  // Data Objects
  const projects = [
    {
      id: 'aeif-showdown-2026',
      title: 'AEIF International AI Showdown Pitch',
      category: 'ai',
      categoryLabel: 'AI & Global Innovation',
      badge: '🏆 Top 5 Finalist @ FAST University',
      description: 'Pitched an innovative AI solution and honored in the Top 5 at the 4th International AEIF Foundation AI Showdown 2026 at FAST-NUCES Lahore.',
      longDescription: 'Selected among elite international and national teams at FAST University, Lahore. Presented a high-impact AI proposal before an esteemed panel of international jurors and industry leaders, achieving a top 5 global finish for technological viability, novelty, and commercial scalability.',
      techStack: ['AI System Design', 'Generative AI', 'Predictive Modeling', 'FastAPI', 'Executive Pitching'],
      metrics: ['Top 5 Rank Internationally', 'Pitched at FAST University Lahore', '4th AEIF Foundation Laureate'],
      link: 'https://gozepra.tech'
    },
    {
      id: 'lahore-pulse',
      title: 'Lahore Pulse AI — Urban Intelligence Dashboard',
      category: 'ai',
      categoryLabel: 'AI & Civic Technology',
      badge: 'Civic Innovation Hackathon 2026',
      description: 'AI-driven city intelligence platform providing real-time air quality indexing (AQI), urban traffic forecasting, and automated citizen issue reporting in Lahore.',
      longDescription: 'Developed for the Civic Innovation Hackathon 2026 at Lahore Garrison University (LGU). Integrates real-time GIS spatial maps, AI sentiment analysis for civic feedback, and lightweight time-series forecasting for regional AQI levels.',
      techStack: ['Next.js 15', 'React', 'Tailwind CSS', 'TypeScript', 'AI Analytics', 'Leaflet GIS'],
      metrics: ['LGU Civic Innovation Showcase', 'Real-Time AQI & Mobility Engine', 'Sub-second Response Times'],
      link: 'https://gozepra.tech'
    },
    {
      id: 'zepra-tech-suite',
      title: 'Zepra Tech Enterprise Web & Scoping Engine',
      category: 'web',
      categoryLabel: 'Enterprise Cloud Systems',
      badge: 'Flagship Core Product',
      description: 'Full-stack client onboarding platform featuring real-time project scoping calculators, dynamic ROI forecasting engines, and seamless cloud services.',
      longDescription: 'Architected and deployed as CEO of Zepra Tech. Serves dual-region enterprise clients (Lahore, PK & Andover, MA). Built on Next.js 15 with custom server actions for instantaneous cost estimation and lead pipeline management.',
      techStack: ['Next.js 15', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
      metrics: ['45% Conversion Lift', 'Dual-Region Infrastructure (PK & US)', 'Integrated Scoping Engine'],
      link: 'https://gozepra.tech'
    },
    {
      id: 'softec-26-entry',
      title: 'SOFTEC 26 Web Innovation Platform',
      category: 'web',
      categoryLabel: 'Full-Stack Web Dev',
      badge: 'FAST-NUCES SOFTEC 2026',
      description: 'High-performance web architecture built for the SOFTEC 2026 Web Development Competition at FAST-NUCES Lahore by Team Zepra Tech.',
      longDescription: 'Built under competitive speed constraints during SOFTEC 2026. Features modular state design, full accessibility compliance, and optimized web vitals for instantaneous state synchronization across distributed client nodes.',
      techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'REST API', 'Vite'],
      metrics: ['FAST-NUCES SOFTEC Participant', '100 Lighthouse Performance', 'Zero Layout Shift'],
      link: 'https://gozepra.tech'
    },
    {
      id: 'real-estate-engine',
      title: 'Real Estate Multi-Channel Growth Engine',
      category: 'marketing',
      categoryLabel: 'Digital Marketing & Growth',
      badge: 'Enterprise Performance Marketing',
      description: 'GEO/AEO search positioning and multi-channel paid ad growth engines for premier real estate ventures across DHA Lahore, Mangla Greens & Al Ghani Garden.',
      longDescription: 'End-to-end performance marketing framework integrating Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) to dominate AI-driven search engine results (Perplexity, ChatGPT, Google SGE) alongside targeted Meta and Google Ads.',
      techStack: ['GEO / AEO Optimization', 'Meta Ads Manager', 'Google Ads', 'TikTok Ads', 'Conversion Funnels'],
      metrics: ['3.2x Campaign ROI', 'Top AI Search Indexing', 'High-Ticket Sales Conversions'],
      link: 'https://gozepra.tech'
    }
  ];

  const skillCategories = [
    {
      title: 'Full-Stack Web Engineering',
      icon: <Code2 className="w-5 h-5 text-blue-500" />,
      skills: ['Next.js 15', 'React.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'REST APIs', 'Framer Motion', 'PostgreSQL / SQL']
    },
    {
      title: 'Digital Marketing & Next-Gen Search Strategy',
      icon: <BarChart3 className="w-5 h-5 text-cyan-500" />,
      skills: ['GEO (Generative Engine Opt.)', 'AEO (Answer Engine Opt.)', 'SEO Strategy', 'Meta Ads Manager', 'Google Ads', 'TikTok Ad Campaigns', 'Funnel Optimization']
    },
    {
      title: 'AI, Logic & Computer Science Core',
      icon: <Cpu className="w-5 h-5 text-indigo-500" />,
      skills: ['AI Pitching & Architecture', 'Digital Logic Design', 'SQL Systems', 'Data Structures & Algorithms', 'System Analysis', 'Software Lifecycle']
    }
  ];

  const experiences = [
    {
      role: 'Chief Executive Officer & Business Development Director',
      company: 'Zepra Tech',
      period: '2024 – Present',
      location: 'DHA Phase 8, Lahore, PK | Andover, MA, USA',
      bullets: [
        'Direct overall technical strategy, client growth pipelines, and software project execution.',
        'Architect modern full-stack web applications using Next.js 15, React, and Tailwind CSS.',
        'Pioneer Next-Gen search strategies (GEO, AEO) and performance advertising campaigns for enterprise clients.'
      ]
    },
    {
      role: 'IT Training & Systems Operations Specialist',
      company: 'Integrated IT Training & Tech Solutions',
      period: '2023 – Present',
      location: 'Lahore, Pakistan',
      bullets: [
        'Organize technical course modules, automated scheduling frameworks, and administrative CRM integrations.',
        'Mentor aspiring tech talent in web development fundamentals, database logic, and modern IT workflows.'
      ]
    }
  ];

  // Filtered projects by tab and query
  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchesTab = activeTab === 'all' || p.category === activeTab;
      const matchesQuery = searchQuery === '' || 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesQuery;
    });
  }, [activeTab, searchQuery]);

  // Scoping / ROI Calculator Calculations
  const calculatedEstimates = useMemo(() => {
    let baseDays = 14;
    let baseLift = 30;
    let baseROI = 2.8;

    if (calcProjectType === 'web') {
      baseDays = 14; baseLift = 40; baseROI = 3.2;
    } else if (calcProjectType === 'ai') {
      baseDays = 21; baseLift = 48; baseROI = 3.8;
    } else if (calcProjectType === 'geo') {
      baseDays = 10; baseLift = 55; baseROI = 4.2;
    } else if (calcProjectType === 'saas') {
      baseDays = 30; baseLift = 45; baseROI = 3.5;
    }

    if (calcScale === 'mvp') {
      baseDays = Math.round(baseDays * 0.7);
      baseLift -= 5;
    } else if (calcScale === 'enterprise') {
      baseDays = Math.round(baseDays * 1.6);
      baseLift += 15;
      baseROI += 0.6;
    }

    // Addons impact
    let addonCount = 0;
    Object.values(calcAddons).forEach(v => {
      if (v) addonCount++;
    });

    const totalDays = baseDays + addonCount * 3;
    const totalLift = Math.min(baseLift + addonCount * 4, 85);
    const totalROI = (baseROI + addonCount * 0.15).toFixed(1);

    return {
      weeks: `${Math.ceil(totalDays / 7)} Weeks (${totalDays} Workdays)`,
      lift: `+${totalLift}% Projected Lift`,
      roi: `${totalROI}x Target ROI`,
      tier: calcScale === 'enterprise' ? 'Enterprise Flagship' : calcScale === 'mvp' ? 'Rapid Launch MVP' : 'Core Production Grade'
    };
  }, [calcProjectType, calcScale, calcAddons]);

  const transferCalculatorToContact = () => {
    const summary = `Inquiry based on Scoping Calculator:
- System Type: ${calcProjectType.toUpperCase()} Platform
- Scale: ${calcScale.toUpperCase()}
- Add-ons: ${Object.entries(calcAddons).filter(([_, v]) => v).map(([k]) => k).join(', ')}
- Projected Timeline: ${calculatedEstimates.weeks}
- Targeted Conversion: ${calculatedEstimates.lift}`;

    setContactSubject(`Project Scope Request: ${calcProjectType.toUpperCase()} (${calcScale.toUpperCase()})`);
    setContactMessage(summary);

    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
    }, 900);
  };

  // Command Palette Items
  const paletteItems = [
    { title: 'View 4th AEIF AI Showdown Honors', category: 'Honors', action: () => { setCommandPaletteOpen(false); setSelectedProject(projects[0]); } },
    { title: 'Explore Lahore Pulse AI (Civic Hackathon)', category: 'Honors', action: () => { setCommandPaletteOpen(false); setSelectedProject(projects[1]); } },
    { title: 'Zepra Tech Scoping & ROI Calculator', category: 'Tool', action: () => { setCommandPaletteOpen(false); document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' }); } },
    { title: 'Open Printable CV / Resume View', category: 'Resume', action: () => { setCommandPaletteOpen(false); setShowResumeModal(true); } },
    { title: 'Visit Zepra Tech Platform (gozepra.tech)', category: 'Links', action: () => { window.open('https://gozepra.tech', '_blank'); } },
    { title: 'Open LinkedIn Profile', category: 'Links', action: () => { window.open('https://www.linkedin.com/in/muhammad-daud-ali-lashari-1302a5337/', '_blank'); } },
    { title: 'Copy Email Address (daudalilashari@gmail.com)', category: 'Contact', action: () => { copyToClipboard('daudalilashari@gmail.com'); setCommandPaletteOpen(false); } },
    { title: 'Toggle Dark / Light Theme', category: 'Settings', action: () => { toggleDarkMode(); setCommandPaletteOpen(false); } }
  ];

  const filteredPaletteItems = paletteItems.filter(item => 
    item.title.toLowerCase().includes(paletteSearch.toLowerCase()) ||
    item.category.toLowerCase().includes(paletteSearch.toLowerCase())
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* ================= STICKY HEADER NAV ================= */}
      <header className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors ${darkMode ? 'bg-slate-950/85 border-slate-800/80' : 'bg-white/85 border-slate-200'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          <a href="#hero" className="flex items-center gap-2.5 font-bold text-lg tracking-tight group">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white font-mono shadow-md group-hover:scale-105 transition-transform">
              M
            </span>
            <span>
              M. Daud Ali <span className="text-cyan-500 font-normal hidden sm:inline">| Lashari</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#honors" className="hover:text-cyan-400 transition-colors">Honors</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#calculator" className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-cyan-400">
              <Calculator className="w-3.5 h-3.5" />
              <span>Scoping ROI</span>
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>

          {/* Action Group */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Command Palette Button */}
            <button
              onClick={() => setCommandPaletteOpen(true)}
              className={`hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs border transition-colors ${darkMode ? 'border-slate-800 bg-slate-900/80 text-slate-400 hover:border-slate-700 hover:text-slate-200' : 'border-slate-200 bg-slate-100 text-slate-600 hover:text-slate-900'}`}
              title="Quick Command Search (Ctrl+K)"
            >
              <Command className="w-3.5 h-3.5 text-cyan-400" />
              <span>Search</span>
              <kbd className="px-1.5 py-0.5 text-[10px] rounded bg-slate-800 text-slate-300 font-mono">⌘K</kbd>
            </button>

            {/* CV Summary Modal Trigger */}
            <button
              onClick={() => setShowResumeModal(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white transition-all shadow-sm hover:shadow-cyan-500/20"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Executive CV</span>
              <span className="xs:hidden">CV</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg border transition-colors ${darkMode ? 'border-slate-800 hover:bg-slate-900 text-amber-400' : 'border-slate-200 hover:bg-slate-100 text-slate-600'}`}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg border transition-colors ${darkMode ? 'border-slate-800 hover:bg-slate-900 text-slate-300' : 'border-slate-200 hover:bg-slate-100 text-slate-700'}`}
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className={`lg:hidden border-b px-4 py-4 space-y-3 animate-slide-down ${darkMode ? 'bg-slate-950/95 border-slate-800' : 'bg-white/95 border-slate-200'}`}>
            <div className="flex flex-col space-y-2 text-sm font-medium">
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-800/40 transition-colors"
              >
                About Daud
              </a>
              <a 
                href="#honors" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-800/40 text-amber-400 font-semibold transition-colors flex items-center justify-between"
              >
                <span>Honors &amp; Pitches</span>
                <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20">Top 5 FAST</span>
              </a>
              <a 
                href="#experience" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-800/40 transition-colors"
              >
                Experience &amp; Education
              </a>
              <a 
                href="#projects" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-800/40 transition-colors"
              >
                Portfolio Projects
              </a>
              <a 
                href="#calculator" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-800/40 text-cyan-400 font-semibold transition-colors flex items-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                <span>Zepra Tech Scoping Calculator</span>
              </a>
              <a 
                href="#skills" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-800/40 transition-colors"
              >
                Technical Matrix
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-800/40 transition-colors"
              >
                Contact &amp; Advisory
              </a>
            </div>

            <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between">
              <button
                onClick={() => { setMobileMenuOpen(false); setCommandPaletteOpen(true); }}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400"
              >
                <Command className="w-3.5 h-3.5 text-cyan-400" />
                <span>Command Search</span>
              </button>
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.linkedin.com/in/muhammad-daud-ali-lashari-1302a5337/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-1.5 rounded text-slate-400 hover:text-cyan-400"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://gozepra.tech" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-1.5 rounded text-slate-400 hover:text-cyan-400"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ================= HERO SECTION ================= */}
      <section id="hero" className="relative py-16 md:py-24 overflow-hidden border-b border-slate-800/40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-500/10 blur-[110px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/30 backdrop-blur-sm">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>Top 5 Finalist @ 4th International AEIF AI Showdown 2026</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Muhammad Daud <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
                  Ali Lashari
                </span>
              </h1>

              <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Tech Entrepreneur &amp; Full-Stack Architect. Founder &amp; CEO at <strong>Zepra Tech</strong>, architecting high-performance cloud platforms, dynamic project scoping calculators, and GEO/AEO digital growth engines. Computer Science Undergraduate at Lahore Garrison University.
              </p>

              {/* Quick Info Badges */}
              <div className="flex flex-wrap gap-2.5 text-xs font-medium">
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${darkMode ? 'bg-slate-900/90 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-sm'}`}>
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>Lahore, PK &amp; Andover, MA</span>
                </div>
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${darkMode ? 'bg-slate-900/90 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-sm'}`}>
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>FA25-BSCS-233 (LGU)</span>
                </div>
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${darkMode ? 'bg-slate-900/90 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-sm'}`}>
                  <Award className="w-3.5 h-3.5 text-indigo-400" />
                  <span>FAST-NUCES Competitor</span>
                </div>
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${darkMode ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-700'}`}>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Available for Advisory &amp; Contracts</span>
                </div>
              </div>

              {/* CTA Buttons & Social Links */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <a
                  href="#honors"
                  className="px-6 py-3 rounded-lg font-semibold text-sm bg-gradient-to-r from-amber-500 via-blue-600 to-cyan-500 hover:from-amber-400 hover:to-cyan-400 text-white shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-2"
                >
                  <Trophy className="w-4 h-4" />
                  <span>View Honors &amp; Pitches</span>
                </a>

                <a
                  href="#calculator"
                  className={`px-5 py-3 rounded-lg font-semibold text-sm border flex items-center gap-2 transition-colors ${darkMode ? 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20' : 'border-cyan-400 bg-cyan-50 text-cyan-800 hover:bg-cyan-100'}`}
                >
                  <Calculator className="w-4 h-4 text-cyan-400" />
                  <span>Scoping Calculator</span>
                </a>

                <a
                  href="#contact"
                  className={`px-5 py-3 rounded-lg font-semibold text-sm border transition-colors ${darkMode ? 'border-slate-800 hover:bg-slate-900 text-slate-200' : 'border-slate-300 hover:bg-slate-100 text-slate-800'}`}
                >
                  Get In Touch
                </a>

                <div className="flex items-center gap-2 pl-1">
                  <a
                    href="https://www.linkedin.com/in/muhammad-daud-ali-lashari-1302a5337/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-lg border transition-colors ${darkMode ? 'border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 text-slate-400' : 'border-slate-200 hover:border-cyan-500/50 hover:text-cyan-600 text-slate-600'}`}
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://gozepra.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-lg border transition-colors ${darkMode ? 'border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 text-slate-400' : 'border-slate-200 hover:border-cyan-500/50 hover:text-cyan-600 text-slate-600'}`}
                    aria-label="Website"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column Profile Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-sm">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500 via-blue-600 to-cyan-400 blur-md opacity-40 group-hover:opacity-75 transition duration-500"></div>
                
                <div className={`relative rounded-2xl p-4 border overflow-hidden ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-xl'}`}>
                  <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-800 mb-4 relative">
                    <img
                      src={profileImg}
                      alt="Muhammad Daud Ali Lashari"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl backdrop-blur-md bg-slate-950/85 border border-slate-700/50 text-white text-xs space-y-1">
                      <p className="font-semibold text-slate-100 flex items-center justify-between">
                        <span>Muhammad Daud Ali Lashari</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      </p>
                      <p className="text-amber-400 text-[11px] font-medium flex items-center gap-1.5">
                        <Trophy className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>Top 5 Pitcher @ AEIF AI Showdown '26</span>
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2.5 text-xs pt-1">
                    <div className="flex justify-between items-center text-slate-400">
                      <span>Leadership</span>
                      <span className="text-cyan-400 font-semibold">Founder &amp; CEO @ Zepra Tech</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-400">
                      <span>Education</span>
                      <span className="text-slate-200 font-medium">BSCS @ LGU (FA25-BSCS-233)</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-400">
                      <span>Headquarters</span>
                      <span className="text-slate-300 font-mono text-[11px]">DHA Ph. 8 Lahore &amp; Andover, MA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= KEY IMPACT METRICS (KPI BAR) ================= */}
      <section className={`py-8 border-b ${darkMode ? 'bg-slate-900/50 border-slate-800/80' : 'bg-slate-100/80 border-slate-200'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 flex items-center justify-center gap-1">
                <Trophy className="w-6 h-6 inline-block text-amber-400" />
                <span>Top 5</span>
              </div>
              <p className="text-xs text-slate-400 font-medium">Global AI Pitch (AEIF @ FAST)</p>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">
                +45%
              </div>
              <p className="text-xs text-slate-400 font-medium">Conversion Lift via Zepra Tech</p>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">
                3.2x
              </div>
              <p className="text-xs text-slate-400 font-medium">Target Campaign ROI (GEO/AEO)</p>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 flex items-center justify-center gap-1">
                <ShieldCheck className="w-6 h-6 inline-block text-emerald-400" />
                <span>100</span>
              </div>
              <p className="text-xs text-slate-400 font-medium">Lighthouse Web Performance</p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= HONORS & ACHIEVEMENTS FEATURED SECTION ================= */}
      <section id="honors" className={`py-16 border-b ${darkMode ? 'border-slate-800 bg-slate-900/30' : 'border-slate-200 bg-slate-50'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
              <Trophy className="w-4 h-4" />
              <span>Key Recognitions</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">Featured Honors &amp; Pitch Victories</h3>
            <p className={`text-sm mt-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Demonstrated competitive excellence before international and national juries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Spotlight Achievement: AEIF 2026 */}
            <div className={`lg:col-span-2 p-6 rounded-2xl border relative overflow-hidden transition-all duration-300 hover:border-amber-400/60 ${darkMode ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/25 border-amber-500/40' : 'bg-gradient-to-br from-white via-amber-50/40 to-white border-amber-300 shadow-md'}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>Global Top 5 Finalist</span>
                </span>
                <span className="text-xs font-mono text-slate-400">FAST University, Lahore</span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold mb-3">4th International AEIF Foundation AI Showdown 2026</h4>
              <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Pitched an innovative AI solution before an international panel of jurors and industry figures at <strong>FAST University, Lahore</strong>. Honored in the <strong>Top 5</strong> globally, recognized for technical innovation, market potential, and rapid delivery viability.
              </p>

              <div className="flex flex-wrap gap-2 text-xs font-medium pt-2">
                <span className="px-3 py-1 rounded-md bg-slate-800 text-amber-300 border border-amber-500/30">
                  Global Jury Panel
                </span>
                <span className="px-3 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                  FAST-NUCES Lahore
                </span>
                <span className="px-3 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                  AEIF AI Showdown 2026
                </span>
              </div>
            </div>

            {/* Civic Innovation Hackathon */}
            <div className={`p-6 rounded-2xl border transition-all duration-300 hover:border-cyan-500/50 ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center gap-1">
                  <BrainCircuit className="w-3.5 h-3.5" />
                  <span>City Intelligence</span>
                </span>
                <span className="text-xs font-mono text-slate-400">LGU '26</span>
              </div>
              <h4 className="text-base font-bold mb-2">Civic Innovation Hackathon 2026</h4>
              <p className={`text-xs leading-relaxed mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Designed and presented <strong>Lahore Pulse AI</strong> under the City Intelligence &amp; Urban Mobility track at Lahore Garrison University.
              </p>
              <div className="text-[11px] font-semibold text-cyan-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Featured LGU Innovation Project</span>
              </div>
            </div>

            {/* SOFTEC 2026 */}
            <div className={`p-6 rounded-2xl border transition-all duration-300 hover:border-blue-500/50 ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center gap-1">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Web Competition</span>
                </span>
                <span className="text-xs font-mono text-slate-400">FAST-NUCES</span>
              </div>
              <h4 className="text-base font-bold mb-2">SOFTEC '26 Web Development</h4>
              <p className={`text-xs leading-relaxed mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Competed with Team Zepra Tech at FAST-NUCES Lahore, building highly optimized, accessible web applications under live challenge constraints.
              </p>
              <div className="text-[11px] font-semibold text-blue-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Team Zepra Tech Lead</span>
              </div>
            </div>

            {/* SUPARCO Registration */}
            <div className={`lg:col-span-2 p-6 rounded-2xl border transition-all duration-300 hover:border-indigo-500/50 ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Technical Delegation</span>
                </span>
                <span className="text-xs font-mono text-slate-400">National Forum</span>
              </div>
              <h4 className="text-base font-bold mb-2">SUPARCO Technical Delegation Briefing</h4>
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Registered participant for the national technical delegation briefing with Pakistan's National Space Agency (SUPARCO), focusing on space-tech applications, GIS satellite integration, and high-performance data computing systems.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= EXECUTIVE SUMMARY / ABOUT ================= */}
      <section id="about" className={`py-16 border-b ${darkMode ? 'border-slate-900 bg-slate-950' : 'border-slate-200 bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-500 mb-2">Executive Summary</h2>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">Building Modern Software &amp; Scaling Digital Growth</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                <Rocket className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold mb-2">Entrepreneurial Executive</h4>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                As CEO of Zepra Tech, I direct tech teams and consult on full-stack web architecture, ROI estimation calculators, and dual-region operations (Lahore, PK &amp; Andover, MA).
              </p>
            </div>

            <div className={`p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold mb-2">Full-Stack Architect</h4>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Specialized in JavaScript/TypeScript ecosystems (Next.js 15, React, Tailwind CSS, Node.js). Focused on sleek UI, performant databases (SQL), and sub-second page loads.
              </p>
            </div>

            <div className={`p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
                <Search className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold mb-2">GEO / AEO &amp; Paid Growth</h4>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Pioneering Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), Meta Ads, Google Ads Manager, and high-ROI multi-channel growth funnels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE ZEPRA TECH SCOPING & ROI CALCULATOR ================= */}
      <section id="calculator" className={`py-16 border-b ${darkMode ? 'border-slate-800 bg-slate-900/50' : 'border-slate-200 bg-cyan-50/40'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">
              <Calculator className="w-4 h-4" />
              <span>Interactive Client Tool</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">Zepra Tech Scoping &amp; ROI Estimator</h3>
            <p className={`text-sm mt-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Simulate your enterprise project parameters, expected delivery timeline, and forecasted growth lift in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Controls Side */}
            <div className={`lg:col-span-7 p-6 sm:p-8 rounded-2xl border space-y-6 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              
              {/* 1. Project Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  1. Select System Architecture
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'web', label: 'Enterprise Web', icon: Code2 },
                    { id: 'ai', label: 'AI Intelligence', icon: BrainCircuit },
                    { id: 'geo', label: 'GEO/AEO Growth', icon: BarChart3 },
                    { id: 'saas', label: 'Custom SaaS', icon: Layers }
                  ].map((type) => {
                    const Icon = type.icon;
                    const isSelected = calcProjectType === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setCalcProjectType(type.id as any)}
                        className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${isSelected ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400 font-bold ring-1 ring-cyan-500' : darkMode ? 'border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-700' : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'}`}
                      >
                        <Icon className="w-4 h-4 mb-2 text-cyan-400" />
                        <span className="text-xs">{type.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Scale / Complexity */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  2. Deployment Scale &amp; Scope
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'mvp', label: 'Sprint MVP', desc: 'Fast prototype' },
                    { id: 'standard', label: 'Standard Production', desc: 'Core business ready' },
                    { id: 'enterprise', label: 'Global Enterprise', desc: 'High concurrency' }
                  ].map((scale) => {
                    const isSelected = calcScale === scale.id;
                    return (
                      <button
                        key={scale.id}
                        type="button"
                        onClick={() => setCalcScale(scale.id as any)}
                        className={`p-3 rounded-xl border text-left transition-all ${isSelected ? 'border-blue-500 bg-blue-500/10 text-blue-400 font-bold ring-1 ring-blue-500' : darkMode ? 'border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-700' : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'}`}
                      >
                        <div className="text-xs">{scale.label}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{scale.desc}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Add-on Modules */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  3. Key Modular Add-Ons
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    { key: 'scopingEngine', label: 'Interactive Scoping Engine' },
                    { key: 'authSecurity', label: 'Role-Based Auth & Security' },
                    { key: 'aiOrchestration', label: 'Generative AI / LLM Integration' },
                    { key: 'analyticsGIS', label: 'Real-Time GIS / Spatial Analytics' },
                    { key: 'multiRegion', label: 'Dual-Region Infrastructure (PK/US)' }
                  ].map((addon) => (
                    <label
                      key={addon.key}
                      className={`flex items-center gap-2.5 p-2.5 rounded-lg border cursor-pointer select-none transition-colors ${calcAddons[addon.key] ? 'border-cyan-500/50 bg-cyan-500/5 text-cyan-300' : darkMode ? 'border-slate-800 bg-slate-950 text-slate-400' : 'border-slate-200 bg-slate-50 text-slate-600'}`}
                    >
                      <input
                        type="checkbox"
                        checked={calcAddons[addon.key]}
                        onChange={(e) => setCalcAddons({ ...calcAddons, [addon.key]: e.target.checked })}
                        className="rounded border-slate-700 text-cyan-500 focus:ring-cyan-400"
                      />
                      <span>{addon.label}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>

            {/* Results Live Card */}
            <div className={`lg:col-span-5 p-6 sm:p-8 rounded-2xl border space-y-6 ${darkMode ? 'bg-gradient-to-br from-slate-900 to-slate-950 border-cyan-500/30' : 'bg-white border-cyan-200 shadow-md'}`}>
              <div className="flex items-center justify-between border-b pb-4 border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                  Calculated Forecast
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {calculatedEstimates.tier}
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                  <div className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>Estimated Delivery Timeline</span>
                  </div>
                  <div className="text-xl font-bold text-white font-mono">
                    {calculatedEstimates.weeks}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                  <div className="text-xs text-slate-400 flex items-center gap-1.5">
                    <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Projected Conversion Lift</span>
                  </div>
                  <div className="text-xl font-bold text-cyan-400 font-mono">
                    {calculatedEstimates.lift}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                  <div className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Rocket className="w-3.5 h-3.5 text-amber-400" />
                    <span>Target ROI Multiplier</span>
                  </div>
                  <div className="text-xl font-bold text-amber-400 font-mono">
                    {calculatedEstimates.roi}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={transferCalculatorToContact}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Transfer Scope to Contact Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-center text-slate-400">
                Directly sends specifications to Muhammad Daud Ali Lashari for rapid review.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WORK & ACADEMIC TIMELINE ================= */}
      <section id="experience" className="py-16 border-b border-slate-800/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-500 mb-2">Career Journey</h2>
              <h3 className="text-2xl sm:text-3xl font-bold">Experience &amp; Academic Track</h3>
            </div>
            <p className={`text-sm mt-2 md:mt-0 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Blending business leadership with rigorous Computer Science studies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Professional Experience Column */}
            <div className="lg:col-span-7 space-y-6">
              <h4 className="text-sm font-semibold uppercase text-slate-400 tracking-wider flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-400" />
                Professional Leadership
              </h4>

              <div className="space-y-6 border-l-2 border-slate-800 pl-6 ml-2">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-slate-950"></div>
                    <div className={`p-5 rounded-xl border transition-all ${darkMode ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 shadow-sm'}`}>
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                        <div>
                          <h5 className="font-bold text-base text-cyan-400">{exp.role}</h5>
                          <div className="text-sm font-medium">{exp.company}</div>
                        </div>
                        <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mb-3 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {exp.location}
                      </p>
                      <ul className="space-y-2 text-xs">
                        {exp.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Track Column */}
            <div className="lg:col-span-5 space-y-6">
              <h4 className="text-sm font-semibold uppercase text-slate-400 tracking-wider flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                Education &amp; Credentials
              </h4>

              <div className="space-y-4">
                
                {/* LGU Degree */}
                <div className={`p-5 rounded-xl border ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-blue-400">Undergraduate BSCS</span>
                    <span className="text-xs font-mono text-slate-400">FA25-BSCS-233</span>
                  </div>
                  <h5 className="font-bold text-base">Lahore Garrison University (LGU)</h5>
                  <p className={`text-xs mt-1 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Bachelor of Science in Computer Science. Core focuses: SQL Architecture, Digital Logic Systems Design, Algorithms, and Software Systems.
                  </p>
                </div>

                {/* Quick Info Card */}
                <div className={`p-5 rounded-xl border ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <h5 className="font-bold text-sm mb-2 flex items-center gap-1.5 text-amber-400">
                    <Trophy className="w-4 h-4" /> Competitions Summary
                  </h5>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">•</span>
                      <span><strong>4th AEIF AI Showdown 2026:</strong> Top 5 Pitcher @ FAST University</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <span><strong>Civic Hackathon 2026:</strong> Lahore Pulse AI Showcase</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span><strong>SOFTEC '26:</strong> FAST-NUCES Web Dev Participant</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PROJECTS SHOWCASE WITH SEARCH & FILTER ================= */}
      <section id="projects" className={`py-16 border-b ${darkMode ? 'border-slate-900 bg-slate-950/50' : 'border-slate-200 bg-slate-100/50'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-500 mb-2">Portfolio Showcase</h2>
              <h3 className="text-2xl sm:text-3xl font-bold">Featured Works &amp; Initiatives</h3>
            </div>

            {/* Project Search Bar */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-9 pr-4 py-2 rounded-xl text-xs border outline-none transition-colors ${darkMode ? 'bg-slate-900 border-slate-800 focus:border-cyan-500 text-slate-200' : 'bg-white border-slate-300 focus:border-cyan-500 text-slate-900'}`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'ai', label: 'AI & Pitching' },
              { id: 'web', label: 'Web Dev & Systems' },
              { id: 'marketing', label: 'Digital Marketing & GEO' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-sm' : darkMode ? 'bg-slate-900 text-slate-400 hover:text-slate-200' : 'bg-white text-slate-600 hover:text-slate-900'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          {filteredProjects.length === 0 ? (
            <div className="p-12 text-center rounded-2xl border border-dashed border-slate-800 text-slate-400">
              <Search className="w-8 h-8 mx-auto mb-2 text-slate-600" />
              <p className="text-sm">No projects found matching "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
                className="mt-3 text-xs text-cyan-400 underline"
              >
                Reset search filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((p) => (
                <div
                  key={p.id}
                  className={`group rounded-xl border p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-slate-900/80 border-slate-800 hover:border-cyan-500/40' : 'bg-white border-slate-200 hover:border-cyan-500/40 shadow-sm'}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded border ${p.id === 'aeif-showdown-2026' ? 'bg-amber-500/10 text-amber-400 border-amber-500/30 font-bold' : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'}`}>
                        {p.badge}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">{p.categoryLabel}</span>
                    </div>

                    <h4 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                      {p.title}
                    </h4>

                    <p className={`text-xs leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {p.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className={`text-[11px] px-2 py-0.5 rounded ${darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-800/60">
                    <button
                      onClick={() => setSelectedProject(p)}
                      className="text-xs font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                    >
                      <span>View Case Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1"
                    >
                      <span>Live Platform</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ================= SKILLS MATRIX ================= */}
      <section id="skills" className="py-16 border-b border-slate-800/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-500 mb-2">Technical Matrix</h2>
            <h3 className="text-2xl sm:text-3xl font-bold">Skills &amp; Strategic Capabilities</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl border transition-all duration-300 hover:border-slate-700 ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  {cat.icon}
                  <h4 className="font-bold text-base">{cat.title}</h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`text-xs px-2.5 py-1.5 rounded-lg border font-medium ${darkMode ? 'bg-slate-800/70 border-slate-700/60 text-slate-200' : 'bg-slate-100 border-slate-200 text-slate-800'}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className={`py-16 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-500 mb-2">Direct Contact</h2>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Let's Connect &amp; Collaborate</h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Whether you need custom Next.js web systems, AI pitches, GEO/AEO optimization, or digital advertising strategy, I am available for consultations and projects.
                </p>
              </div>

              <div className="space-y-4 text-sm">
                
                {/* Email Card with Copy button */}
                <div className={`p-4 rounded-xl border flex items-center justify-between ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Email Address</div>
                      <a href="mailto:daudalilashari@gmail.com" className="font-medium hover:text-cyan-400 transition-colors text-xs sm:text-sm">
                        daudalilashari@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard('daudalilashari@gmail.com')}
                    className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Company Platform */}
                <div className={`p-4 rounded-xl border flex items-center justify-between ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Company Platform</div>
                      <a href="https://gozepra.tech" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-cyan-400 transition-colors text-xs sm:text-sm">
                        gozepra.tech
                      </a>
                    </div>
                  </div>
                  <a href="https://gozepra.tech" target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-cyan-400">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Location */}
                <div className={`p-4 rounded-xl border flex items-center gap-3 ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Offices &amp; Presence</div>
                    <div className="font-medium text-xs">
                      DHA Phase 8, Lahore • Andover, MA, USA
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <div className={`p-6 sm:p-8 rounded-2xl border ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <h4 className="text-lg font-bold mb-4">Send a Direct Inquiry</h4>

                {formStatus === 'success' ? (
                  <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-400" />
                    <h5 className="font-bold text-base">Message Transmitted!</h5>
                    <p className="text-xs text-emerald-300">
                      Thank you for getting in touch. Muhammad Daud Ali Lashari will respond to your email promptly.
                    </p>
                    <button
                      onClick={() => setFormStatus(null)}
                      className="mt-4 px-4 py-1.5 rounded text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-500"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-1.5 font-medium text-slate-400">Your Name</label>
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="Full Name"
                          className={`w-full px-3 py-2.5 rounded-lg border outline-none transition-colors ${darkMode ? 'bg-slate-950 border-slate-800 focus:border-cyan-500 text-slate-100' : 'bg-white border-slate-300 focus:border-cyan-500 text-slate-900'}`}
                        />
                      </div>
                      <div>
                        <label className="block mb-1.5 font-medium text-slate-400">Email Address</label>
                        <input
                          type="email"
                          required
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          placeholder="email@domain.com"
                          className={`w-full px-3 py-2.5 rounded-lg border outline-none transition-colors ${darkMode ? 'bg-slate-950 border-slate-800 focus:border-cyan-500 text-slate-100' : 'bg-white border-slate-300 focus:border-cyan-500 text-slate-900'}`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block mb-1.5 font-medium text-slate-400">Subject / Category</label>
                      <input
                        type="text"
                        required
                        value={contactSubject}
                        onChange={(e) => setContactSubject(e.target.value)}
                        placeholder="Web Engineering / AI Solution / Performance Growth"
                        className={`w-full px-3 py-2.5 rounded-lg border outline-none transition-colors ${darkMode ? 'bg-slate-950 border-slate-800 focus:border-cyan-500 text-slate-100' : 'bg-white border-slate-300 focus:border-cyan-500 text-slate-900'}`}
                      />
                    </div>

                    <div>
                      <label className="block mb-1.5 font-medium text-slate-400">Message</label>
                      <textarea
                        rows={4}
                        required
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        placeholder="Detail your inquiry or project scope..."
                        className={`w-full px-3 py-2.5 rounded-lg border outline-none transition-colors ${darkMode ? 'bg-slate-950 border-slate-800 focus:border-cyan-500 text-slate-100' : 'bg-white border-slate-300 focus:border-cyan-500 text-slate-900'}`}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === 'sending'}
                      className="w-full py-3 rounded-lg font-bold text-xs bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      {formStatus === 'sending' ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Transmit Direct Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className={`py-8 border-t text-xs ${darkMode ? 'border-slate-900 bg-slate-950 text-slate-500' : 'border-slate-200 bg-slate-100 text-slate-600'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Muhammad Daud Ali Lashari. CEO &amp; Founder at Zepra Tech.
          </div>
          <div className="flex items-center gap-4">
            <a href="https://gozepra.tech" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">gozepra.tech</a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/muhammad-daud-ali-lashari-1302a5337/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn Profile</a>
            <span>•</span>
            <a href="#hero" className="hover:text-cyan-400 transition-colors">Back to top ↑</a>
          </div>
        </div>
      </footer>

      {/* ================= COMMAND PALETTE (CTRL+K / CMD+K) ================= */}
      {commandPaletteOpen && (
        <div 
          id="command-palette-backdrop"
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"
          onClick={() => setCommandPaletteOpen(false)}
        >
          <div 
            className={`relative w-full max-w-xl rounded-2xl border shadow-2xl overflow-hidden ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center px-4 py-3 border-b border-slate-800">
              <Search className="w-4 h-4 text-cyan-400 mr-3" />
              <input
                type="text"
                autoFocus
                placeholder="Type a command or jump to section..."
                value={paletteSearch}
                onChange={(e) => setPaletteSearch(e.target.value)}
                className="w-full bg-transparent outline-none text-sm placeholder:text-slate-500"
              />
              <button 
                onClick={() => setCommandPaletteOpen(false)}
                className="p-1 rounded text-slate-500 hover:text-slate-300"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="max-h-72 overflow-y-auto p-2 space-y-1 text-xs">
              {filteredPaletteItems.length === 0 ? (
                <div className="p-4 text-center text-slate-500">
                  No matching commands found.
                </div>
              ) : (
                filteredPaletteItems.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={item.action}
                    className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between transition-colors ${darkMode ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-100 text-slate-800'}`}
                  >
                    <span>{item.title}</span>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                      {item.category}
                    </span>
                  </button>
                ))
              )}
            </div>

            <div className="px-4 py-2 border-t border-slate-800/60 bg-slate-950/50 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span>Navigation: Click or Enter</span>
              <span>Press ESC to close</span>
            </div>
          </div>
        </div>
      )}

      {/* ================= PROJECT DETAIL DRAWER ================= */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl p-6 border shadow-2xl ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'}`}>
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {selectedProject.badge}
            </span>

            <h3 className="text-2xl font-bold mt-3 mb-2">{selectedProject.title}</h3>
            <p className="text-xs text-slate-400 font-mono mb-4">{selectedProject.categoryLabel}</p>

            <div className="space-y-4 text-xs leading-relaxed mb-6">
              <p className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                {selectedProject.longDescription}
              </p>

              <div>
                <h5 className="font-bold text-sm mb-2 text-cyan-400">Key Highlights &amp; Metrics</h5>
                <ul className="space-y-1.5">
                  {selectedProject.metrics.map((m: string, i: number) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-sm mb-2 text-cyan-400">Core Technologies &amp; Methodologies</h5>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech: string, i: number) => (
                    <span key={i} className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-lg text-xs font-medium border border-slate-700 hover:bg-slate-800"
              >
                Close
              </button>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center gap-1.5"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

      {/* ================= PRINTABLE EXECUTIVE RESUME MODAL ================= */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in overflow-y-auto">
          <div className={`relative w-full max-w-3xl my-8 rounded-2xl p-6 sm:p-8 border shadow-2xl print-page ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'}`}>
            
            {/* Modal Controls (Hidden in Print) */}
            <div className="flex items-center justify-between border-b pb-4 mb-6 border-slate-800 no-print">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-cyan-400" />
                <h4 className="font-bold text-base">Executive Curriculum Vitae</h4>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / PDF</span>
                </button>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Document Body */}
            <div className="space-y-6 text-xs text-slate-300">
              {/* Header */}
              <div className="border-b border-slate-800 pb-4">
                <h2 className="text-2xl font-bold text-white tracking-tight">MUHAMMAD DAUD ALI LASHARI</h2>
                <p className="text-cyan-400 font-semibold text-sm mt-0.5">
                  Tech Entrepreneur • Full-Stack Systems Architect • AI Innovator
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-slate-400 mt-2 font-mono">
                  <span>DHA Phase 8, Lahore, PK &amp; Andover, MA, USA</span>
                  <span>•</span>
                  <a href="mailto:daudalilashari@gmail.com" className="hover:text-cyan-400">daudalilashari@gmail.com</a>
                  <span>•</span>
                  <a href="https://gozepra.tech" target="_blank" rel="noreferrer" className="hover:text-cyan-400">gozepra.tech</a>
                </div>
              </div>

              {/* Profile Summary */}
              <div>
                <h5 className="font-bold text-sm uppercase tracking-wider text-cyan-400 mb-1.5">Executive Summary</h5>
                <p className="leading-relaxed">
                  Tech entrepreneur and systems architect with proven execution across full-stack web platforms, client ROI forecasting algorithms, and Next-Gen search strategies (GEO/AEO). Recognized as a Top 5 Finalist at the 4th International AEIF Foundation AI Showdown 2026 at FAST University. Currently pursuing Computer Science at Lahore Garrison University while directing dual-region client deployments at Zepra Tech.
                </p>
              </div>

              {/* Key Recognitions */}
              <div>
                <h5 className="font-bold text-sm uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                  <Trophy className="w-4 h-4" /> Key Honors &amp; Awards
                </h5>
                <ul className="space-y-2">
                  <li className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                    <span className="font-bold text-white">🏆 Top 5 Finalist — 4th International AEIF AI Showdown 2026 (FAST University, Lahore)</span>
                    <p className="text-[11px] text-slate-400 mt-0.5">Selected among elite international and national teams for AI system design, technological viability, and commercial execution.</p>
                  </li>
                  <li className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                    <span className="font-bold text-white">Civic Innovation Hackathon 2026 (Lahore Garrison University)</span>
                    <p className="text-[11px] text-slate-400 mt-0.5">Architected Lahore Pulse AI — real-time GIS spatial mapping and AQI urban mobility forecasting.</p>
                  </li>
                  <li className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                    <span className="font-bold text-white">FAST-NUCES SOFTEC 2026 Web Development Competition</span>
                    <p className="text-[11px] text-slate-400 mt-0.5">Team Lead for Zepra Tech, engineering 100 Lighthouse performance web architecture under competition constraints.</p>
                  </li>
                </ul>
              </div>

              {/* Professional Experience */}
              <div>
                <h5 className="font-bold text-sm uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4" /> Professional Leadership
                </h5>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-white">Founder &amp; Chief Executive Officer — Zepra Tech</span>
                      <span className="font-mono text-slate-400">2024 – Present</span>
                    </div>
                    <p className="text-slate-400 text-[11px]">DHA Phase 8, Lahore, PK &amp; Andover, MA, USA</p>
                    <ul className="list-disc list-inside mt-1 space-y-1 text-slate-300">
                      <li>Direct full-stack web architectures using Next.js 15, TypeScript, Node.js, and PostgreSQL.</li>
                      <li>Architected interactive client scoping engines resulting in +45% lead conversion uplift.</li>
                      <li>Spearhead Generative Engine Optimization (GEO) &amp; Answer Engine Optimization (AEO) frameworks.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-white">IT Training &amp; Systems Operations Specialist — Integrated IT Solutions</span>
                      <span className="font-mono text-slate-400">2023 – Present</span>
                    </div>
                    <ul className="list-disc list-inside mt-1 space-y-1 text-slate-300">
                      <li>Designed database automation workflows, course delivery frameworks, and CRM pipelines.</li>
                      <li>Mentored developers on modern full-stack engineering and cloud deployment protocols.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h5 className="font-bold text-sm uppercase tracking-wider text-cyan-400 mb-1.5 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" /> Education
                </h5>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-bold text-white">Bachelor of Science in Computer Science (BSCS)</span>
                    <p className="text-slate-400 text-[11px]">Lahore Garrison University (LGU) • Roll: FA25-BSCS-233</p>
                  </div>
                  <span className="font-mono text-slate-400">In Progress</span>
                </div>
              </div>

              {/* Core Technical Matrix */}
              <div>
                <h5 className="font-bold text-sm uppercase tracking-wider text-cyan-400 mb-2">Technical Core Competencies</h5>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div>
                    <strong className="text-white">Web &amp; Cloud:</strong> Next.js 15, React, TypeScript, Node.js, Tailwind CSS, PostgreSQL, REST APIs
                  </div>
                  <div>
                    <strong className="text-white">Search &amp; Growth:</strong> Generative Engine Optimization (GEO), AEO, Meta Ads, Google Ads Manager, Funnels
                  </div>
                  <div>
                    <strong className="text-white">AI &amp; CS Fundamentals:</strong> AI Pitching &amp; Architecture, Digital Logic Design, SQL Systems, Algorithms
                  </div>
                  <div>
                    <strong className="text-white">Leadership:</strong> Technical Project Management, Client Scoping, Venture Strategy, Cross-Border Operations
                  </div>
                </div>
              </div>

            </div>

            {/* Modal Footer (Hidden in Print) */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between no-print">
              <span className="text-[11px] text-slate-500 font-mono">
                Tip: Press Print to generate a clean PDF resume.
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="px-4 py-2 rounded-lg text-xs font-medium border border-slate-700 hover:bg-slate-800"
                >
                  Close
                </button>
                <a
                  href="mailto:daudalilashari@gmail.com?subject=Inquiry%20from%20Portfolio"
                  className="px-4 py-2 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Daud</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
