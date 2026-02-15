import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3">Portfolio</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Building innovative solutions with modern technologies across the full development stack.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-800 dark:text-white mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/education" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                  Experience
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-bold text-gray-800 dark:text-white mb-3">More</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#resume" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                  Download CV
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-gray-800 dark:text-white mb-3">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400 text-sm">
                <a href="mailto:engr.antor.3@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors block mb-1">
                  engr.antor.3@gmail.com
                </a>
                <a href="mailto:antor@sparktechagency.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors block">
                  antor@sparktechagency.com
                </a>
              </li>
              <li className="text-gray-600 dark:text-gray-400 text-sm">
                <a href="tel:+8801832814129" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  +880 1832 814129
                </a>
              </li>
              <li className="text-gray-600 dark:text-gray-400 text-sm">
                Bashundhara, Dhaka
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
          <a
            href="https://github.com/engrAntor"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/engrAntor"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://twitter.com/engrAntor"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
          <a
            href="mailto:engr.antor.3@gmail.com"
            className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center justify-center gap-1">
            © {currentYear} Antor Chandra Das. Made with <Heart className="text-red-500" size={16} fill="currentColor" />
          </p>
        </div>
      </div>
    </footer>
  );
}