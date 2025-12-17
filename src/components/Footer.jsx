import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-600 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-gold to-accent-goldDark rounded-xl flex items-center justify-center">
                <Cpu className="w-7 h-7 text-dark-900" />
              </div>
              <div>
                <span className="font-display font-bold text-2xl gradient-text">NEXUS</span>
                <span className="block text-xs text-gray-400 tracking-[0.3em] -mt-1">PC STORE</span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Your ultimate destination for premium PC components and gaming hardware. Build your dream setup with us.
            </p>
            <div className="flex gap-4 mt-6">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center hover:bg-accent-gold/20 hover:border-accent-gold/50 border border-dark-600 transition-all group"
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-accent-gold" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Products', 'Deals', 'New Arrivals', 'Best Sellers', 'Build a PC'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-accent-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-display font-semibold text-lg text-white mb-6">Categories</h3>
            <ul className="space-y-3">
              {['Graphics Cards', 'Processors', 'Memory', 'Storage', 'Motherboards', 'Power Supplies'].map((cat) => (
                <li key={cat}>
                  <a href="#" className="text-gray-400 hover:text-accent-gold transition-colors">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-accent-gold" />
                <span>123 Tech Street, Silicon Valley, CA</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-accent-gold" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-accent-gold" />
                <span>support@nexuspc.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 NEXUS PC Store. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-accent-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent-gold transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
