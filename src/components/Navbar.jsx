import { useEffect, useMemo, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Sun, Moon, Download } from 'lucide-react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [theme, setTheme] = useState('light');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored ?? (prefersDark ? 'dark' : 'light');
    setTheme(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleJump = (id) => {
    const node = document.getElementById(id);
    if (node) node.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navClass = useMemo(
    () =>
      `fixed left-0 right-0 top-0 z-50 transition-all ${
        scrolled
          ? 'backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 shadow-sm'
          : 'bg-transparent'
      }`,
    [scrolled]
  );

  const downloadResume = () => {
    const content = `Resume\nName: Your Name\nRole: Developer / Designer / Creator\nSummary: Passionate about building delightful digital products.`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.txt';
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    a.remove();
  };

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 h-1 origin-left bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        style={{ scaleX: scrollYProgress }}
      />
      <nav className={navClass}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <button
            onClick={() => handleJump('home')}
            className="font-semibold tracking-tight text-neutral-800 transition-colors hover:text-indigo-600 dark:text-neutral-100 dark:hover:text-indigo-400"
          >
            <span className="text-lg">MyPortfolio</span>
          </button>

          <div className="hidden items-center gap-6 md:flex">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleJump(s.id)}
                className="text-sm text-neutral-600 transition-colors hover:text-indigo-600 dark:text-neutral-300 dark:hover:text-indigo-400"
              >
                {s.label}
              </button>
            ))}
            <button
              onClick={downloadResume}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow hover:from-indigo-500 hover:to-purple-500"
            >
              <Download size={16} /> Resume
            </button>
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
              className="rounded-full border border-neutral-200 bg-white p-2 text-neutral-700 shadow-sm transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={downloadResume}
              className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 p-2 text-white shadow"
            >
              <Download size={18} />
            </button>
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
              className="rounded-full border border-neutral-200 bg-white p-2 text-neutral-700 shadow-sm transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile nav row */}
        <div className="mx-auto block max-w-7xl px-4 pb-3 md:hidden">
          <div className="flex flex-wrap gap-3">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleJump(s.id)}
                className="rounded-full border border-neutral-200 px-3 py-1.5 text-sm text-neutral-700 hover:border-indigo-400 hover:text-indigo-600 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
