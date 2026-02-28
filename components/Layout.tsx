
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CLINIC_INFO } from '../constants';
import SchemaMarkup from './SchemaMarkup';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Robust Body Scroll Lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isMenuOpen]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-[#8A9A5B] selection:text-white bg-[#F5F5DC]">
      <SchemaMarkup />
      
      {/* Premium Header */}
      <header className={`fixed top-0 left-0 right-0 transition-all duration-500 z-[100] ${
        isScrolled ? 'h-20 bg-[#F5F5DC]/95 backdrop-blur-md border-b border-[#C5A059]/10 shadow-sm' : 'h-24 bg-transparent'
      }`}>
        <div className="container mx-auto px-6 lg:px-12 h-full flex items-center justify-between relative z-[110]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group" onClick={closeMenu}>
            <div className="w-10 h-10 bg-[#2C2C2C] rounded-xl flex items-center justify-center text-[#F5F5DC] font-bold text-lg group-hover:bg-[#8A9A5B] transition-all duration-500 shadow-xl">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-[#2C2C2C] leading-none tracking-tighter">AL-AWAN</span>
              <span className="text-[8px] text-[#C5A059] font-bold uppercase tracking-[0.4em] mt-1.5 opacity-80">Dental Studio</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[11px] font-black tracking-[0.2em] transition-all hover:text-[#8A9A5B] uppercase relative py-2 group ${
                  isActive(item.path) ? 'text-[#8A9A5B]' : 'text-[#2C2C2C]/60'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#C5A059] transition-all duration-500 ${isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-[#2C2C2C] text-white px-10 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#8A9A5B] hover:shadow-2xl hover:shadow-[#8A9A5B]/30 transition-all active:scale-95 border border-white/10"
            >
              Consultation
            </Link>
          </nav>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 relative z-[10000]"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className={`w-6 h-0.5 bg-[#2C2C2C] transition-all duration-500 ease-in-out transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-[#2C2C2C] transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}></span>
            <span className={`w-6 h-0.5 bg-[#2C2C2C] transition-all duration-500 ease-in-out transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu Overlay - Premium Full Screen */}
        <div 
          className={`lg:hidden fixed inset-0 w-full h-[100dvh] bg-[#F5F5DC] z-[9999] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isMenuOpen 
              ? 'translate-y-0 opacity-100' 
              : '-translate-y-full opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col h-full pt-40 px-10 pb-16 overflow-y-auto">
            {/* Nav Links with Staggered Entrance */}
            <div className="flex flex-col gap-10">
              {navItems.map((item, idx) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`text-6xl font-black tracking-tighter transition-all duration-700 transform ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                  } ${isActive(item.path) ? 'text-[#8A9A5B]' : 'text-[#2C2C2C]'}`}
                  style={{ transitionDelay: isMenuOpen ? `${150 + idx * 100}ms` : '0ms' }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Bottom Contact Section */}
            <div className={`mt-auto space-y-12 transition-all duration-700 transform ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '500ms' : '0ms' }}>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block w-full bg-[#2C2C2C] text-white text-center py-8 rounded-[2.5rem] text-xs font-black uppercase tracking-[0.4em] shadow-2xl hover:bg-[#8A9A5B] transition-colors"
              >
                Book Appointment
              </Link>
              
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#8A9A5B] shadow-sm border border-[#C5A059]/10">
                    <i className="fa-solid fa-phone text-xl"></i>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#C5A059] mb-1">Direct Support</p>
                    <a href={`tel:${CLINIC_INFO.phone}`} className="text-2xl font-black text-[#2C2C2C] tracking-tight">{CLINIC_INFO.phone}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Modern Integrated Footer */}
      <footer className="bg-[#2C2C2C] text-white/40 py-32 relative overflow-hidden">
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
            <div className="space-y-10">
              <Link to="/" className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#8A9A5B] rounded-2xl flex items-center justify-center text-white font-bold text-2xl">A</div>
                <span className="text-2xl font-black text-white tracking-tighter">Al-Awan</span>
              </Link>
              <p className="text-sm leading-relaxed text-[#F5F5DC]/50 max-w-xs font-medium italic">
                A sanctuary for modern clinical care and artisanal laboratory craftsmanship.
              </p>
              <div className="flex gap-6">
                {['facebook-f', 'instagram', 'whatsapp'].map((icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#8A9A5B] hover:text-white transition-all border border-white/10 group">
                    <i className={`fa-brands fa-${icon} group-hover:scale-110`}></i>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[#C5A059] font-black text-[10px] mb-10 uppercase tracking-[0.4em]">Sitemap</h3>
              <ul className="space-y-6 text-xs font-bold uppercase tracking-widest">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="hover:text-white transition-colors flex items-center gap-4 group">
                      <span className="w-2 h-[1px] bg-[#8A9A5B] group-hover:w-4 transition-all"></span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[#C5A059] font-black text-[10px] mb-10 uppercase tracking-[0.4em]">Focus</h3>
              <ul className="space-y-6 text-xs font-bold uppercase tracking-widest">
                {['Implantology', 'Orthodontics', 'Veneers', 'Digital Lab'].map((text) => (
                  <li key={text} className="flex items-center gap-4 hover:text-white transition-colors cursor-default">
                    <span className="w-1 h-1 bg-[#8A9A5B] rounded-full"></span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-10">
              <h3 className="text-[#C5A059] font-black text-[10px] mb-10 uppercase tracking-[0.4em]">Contact Info</h3>
              <div className="space-y-8 text-xs font-bold">
                <div className="flex gap-6">
                  <i className="fa-solid fa-location-dot text-[#D4A5A5] mt-1"></i>
                  <span className="leading-relaxed text-[#F5F5DC]/60 uppercase tracking-widest">{CLINIC_INFO.address}</span>
                </div>
                <div className="flex gap-6 items-center">
                  <i className="fa-solid fa-phone text-[#8A9A5B]"></i>
                  <span className="text-xl text-white tracking-tighter">{CLINIC_INFO.phone}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[9px] font-black uppercase tracking-[0.5em] text-[#C5A059]/40">
              &copy; {new Date().getFullYear()} Al-Awan Dental Studio.
            </p>
            <div className="flex gap-10 text-[9px] font-black uppercase tracking-[0.3em] text-white/20">
              <a href="#" className="hover:text-[#8A9A5B] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#8A9A5B] transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Minimal Floating Button */}
      {!isMenuOpen && (
        <div className="fixed bottom-10 right-10 z-50">
          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="bg-[#8A9A5B] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-[#2C2C2C] hover:-translate-y-2 transition-all active:scale-90 group relative overflow-hidden"
          >
            <i className="fa-solid fa-phone-flip text-xl relative z-10"></i>
            <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-500"></span>
          </a>
        </div>
      )}
    </div>
  );
};

export default Layout;
