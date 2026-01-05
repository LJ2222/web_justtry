// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Menu, X } from 'lucide-react';

export function Navbar({
  $w,
  currentPage
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [{
    id: 'projects',
    label: '案例'
  }, {
    id: 'tools',
    label: '工具'
  }, {
    id: 'about',
    label: '关于'
  }];
  const handleNavigate = pageId => {
    $w.utils.navigateTo({
      pageId,
      params: {}
    });
    setMobileMenuOpen(false);
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavigate('projects')}>
            <img src="cloud://giveitashot-6gzysi4642da2f34.6769-giveitashot-6gzysi4642da2f34-1319892591/builder-uploads/8d784045d5a786f067cb981c3e30fdcc.png" alt="哎哟喂吓" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => <button key={item.id} onClick={() => handleNavigate(item.id)} className={`px-3 py-2 text-sm font-medium transition-colors ${currentPage === item.id ? 'text-black border-b-2 border-black' : 'text-gray-600 hover:text-black'}`}>
                {item.label}
              </button>)}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-black hover:bg-gray-100 focus:outline-none">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(item => <button key={item.id} onClick={() => handleNavigate(item.id)} className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${currentPage === item.id ? 'text-black bg-gray-100' : 'text-gray-600 hover:text-black hover:bg-gray-100'}`}>
                {item.label}
              </button>)}
          </div>
        </div>}
    </nav>;
}