import React, { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: '首页', href: '#top' },
    { name: '核心优势', href: '#features' },
    { name: '服务流程', href: '#process' },
    { name: '目的地', href: '#services' },
    { name: '成功率', href: '#outcomes' },
    { name: '合作医院', href: '#hospitals' },
    { name: '价格套餐', href: '#pricing' },
    { name: '常见问题', href: '#faq' },
    { name: '联系我们', href: '#contact' },
  ];

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="#top" className="flex items-center gap-2">
              <span className="text-3xl font-bold text-blue-700">GeoIVF</span>
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              <Phone size={18} />
              免费咨询
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-blue-600 focus:outline-none"
              aria-label={isMenuOpen ? '关闭菜单' : '打开菜单'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-t border-slate-100 shadow-lg absolute w-full"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-100 px-3">
              <a 
                href="#contact"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={18} />
                免费咨询
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
