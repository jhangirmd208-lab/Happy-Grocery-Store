import { useState, useEffect } from 'react';
import { ShoppingBasket, Leaf, Menu, X, Phone } from 'lucide-react';
import { siteData } from '../data';
import { Button } from './ui';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-primary text-white py-2 px-4 text-sm font-medium flex justify-between items-center sm:justify-center">
        <div className="text-center w-full">Open Daily • {siteData.hours}</div>
        <a href={`tel:${siteData.phoneClean}`} className="sm:hidden flex items-center gap-1 shrink-0 bg-white/20 px-3 py-1 rounded-full text-xs">
          <Phone className="w-3 h-3" /> Call
        </a>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${isScrolled ? 'bg-surface/90 backdrop-blur-md shadow-sm py-3' : 'bg-surface py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <ShoppingBasket className="w-6 h-6" />
              <Leaf className="w-4 h-4 absolute -bottom-1 -right-1 text-accent" />
            </div>
            <div className="font-heading font-black text-xl md:text-2xl text-primary leading-none uppercase tracking-tight">
              Happy<br/><span className="text-accent text-xs font-bold uppercase tracking-widest block mt-1">Grocery Store</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6 text-muted font-semibold text-sm uppercase tracking-wider">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button href={siteData.directionsUrl} variant="primary" className="px-6 py-2.5 rounded-full">
              Get Directions
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-main"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-surface border-t border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="block text-lg font-medium text-main"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button href={siteData.directionsUrl} variant="primary" className="w-full mt-2">
              Get Directions
            </Button>
          </div>
        )}
      </header>
    </>
  );
}
