'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'HOME' },
    { href: '/profile', label: 'PROFILE' },
    { href: '/portfolio', label: 'PORTFOLIO' },
    { href: '/services', label: 'SERVICES' },
    { href: '/archive', label: 'ARCHIVE' },
    { href: '/contact', label: 'CONTACT US' },
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updatePillPosition = () => {
      if (!navRef.current) return;
      
      const activeLink = navRef.current.querySelector(`a[href="${pathname}"]`) as HTMLElement;
      if (activeLink) {
        const navRect = navRef.current.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();
        
        setPillStyle({
          left: linkRect.left - navRect.left,
          width: linkRect.width,
          opacity: 1,
        });
      }
    };

    updatePillPosition();
    window.addEventListener('resize', updatePillPosition);
    return () => window.removeEventListener('resize', updatePillPosition);
  }, [pathname]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!navRef.current) return;
    
    const target = e.currentTarget;
    const navRect = navRef.current.getBoundingClientRect();
    const linkRect = target.getBoundingClientRect();
    
    setPillStyle({
      left: linkRect.left - navRect.left,
      width: linkRect.width,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    if (!navRef.current) return;
    
    const activeLink = navRef.current.querySelector(`a[href="${pathname}"]`) as HTMLElement;
    if (activeLink) {
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      
      setPillStyle({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
        opacity: 1,
      });
    }
  };

  return (
    <nav className={`sticky top-0 left-0 w-full z-50 border-b transition-all duration-1000 ease-in-out ${
      scrolled && !isMenuOpen
        ? 'bg-transparent border-transparent shadow-none translate-y-0 opacity-0 pointer-events-none' 
        : 'bg-primary border-black/10 shadow-sm translate-y-0 opacity-100'
    }`}>
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image 
            src="/assets/logomarten.svg" 
            alt="Martensite Logo" 
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
          />
        </Link>

        {/* Desktop Navigation with Pill Effect */}
        <div 
          ref={navRef}
          className="hidden md:flex items-center space-x-2 mx-auto relative"
          onMouseLeave={handleMouseLeave}
        >
          {/* Animated Pill Background */}
          <div
            className="absolute h-8 bg-white/50 rounded-full transition-all duration-300 ease-out pointer-events-none"
            style={{
              left: `${pillStyle.left}px`,
              width: `${pillStyle.width}px`,
              opacity: pillStyle.opacity,
            }}
          />

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onMouseEnter={handleMouseEnter}
              className={`relative px-4 py-2 font-semibold text-sm transition-colors duration-200 rounded-full z-10 ${
                pathname === item.href
                  ? 'text-black'
                  : 'text-black/60 hover:text-black'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-black hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#EEE8D0] border-t border-black/10 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block py-2 px-3 font-semibold rounded-lg transition-colors ${
                pathname === item.href
                  ? 'bg-black/10 text-black'
                  : 'text-black/60 hover:bg-black/5 hover:text-black'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
