import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 dark:bg-zinc-950 text-white py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <div className="mb-4 flex justify-center md:justify-start">
              <Logo />
            </div>
            <p className="text-zinc-400 max-w-xs">
              Frontend Developer transitioning to Backend. Building the future of the web.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-800 dark:bg-zinc-900 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-all">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-800 dark:bg-zinc-900 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-all">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-800 dark:bg-zinc-900 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-all">
              <Twitter size={20} />
            </a>
            <a href="mailto:pritomshiro@gmail.com" className="w-12 h-12 bg-zinc-800 dark:bg-zinc-900 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-all">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>© {currentYear} Pritom Barua Shiro. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
