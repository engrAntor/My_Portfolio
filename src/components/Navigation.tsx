'use client';

import { Menu, X, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const navItems = [
    { id: '/', label: 'Home' },
    { id: '/education', label: 'Education' },
    { id: '/skills', label: 'Skills' },
    { id: '/experience', label: 'Experience' },
    { id: '/projects', label: 'Projects' },
    { id: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md sticky top-0 z-40 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:opacity-80 transition-opacity">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.id}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive(item.id)
                    ? 'bg-blue-600 text-white dark:bg-blue-500'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-200"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.id}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 mb-1 ${
                  isActive(item.id)
                    ? 'bg-blue-600 text-white dark:bg-blue-500'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
