import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Cpu, Search } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount } = useCart();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/deals', label: 'Deals' },
    { path: '/about', label: 'About' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/90 backdrop-blur-xl border-b border-accent-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-gold to-accent-goldDark rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-7 h-7 text-dark-900" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gold to-accent-goldDark rounded-xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
            </div>
            <div>
              <span className="font-display font-bold text-2xl gradient-text">NEXUS</span>
              <span className="block text-xs text-gray-400 tracking-[0.3em] -mt-1">PC STORE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body font-medium text-lg relative py-2 transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-accent-gold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-gold to-accent-goldDark" />
                )}
              </Link>
            ))}
          </nav>

          {/* Search & Cart */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="hidden lg:flex items-center relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 bg-dark-700 border border-dark-600 rounded-xl py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent-gold/50 transition-colors"
              />
              <Search className="absolute left-3 w-5 h-5 text-gray-500" />
            </div>

            {/* Cart Button */}
            <Link
              to="/cart"
              className="relative p-3 bg-dark-700 rounded-xl border border-dark-600 hover:border-accent-gold/50 transition-all duration-300 group"
            >
              <ShoppingCart className="w-6 h-6 text-gray-300 group-hover:text-accent-gold transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-accent-gold to-accent-goldDark rounded-full flex items-center justify-center text-xs font-bold text-dark-900 pulse-badge">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 bg-dark-700 rounded-xl border border-dark-600"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-dark-600">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 font-body text-lg rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? 'bg-dark-700 text-accent-gold'
                    : 'text-gray-300 hover:bg-dark-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
