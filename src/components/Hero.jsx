import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const roles = ['Developer', 'Designer', 'Creator'];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-24">
      {/* Background gradient overlay - does not block interaction */}
      <div className="pointer-events-none absolute inset-0">
        {/* Subtle radial color washes for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.16),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.14),transparent_45%)]" />
        {/* Top-to-bottom vignette for readability (light/dark variants) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.06),transparent_60%)] dark:bg-[linear-gradient(to_top,rgba(0,0,0,0.25),transparent_60%)]" />
      </div>

      {/* Spline full-bleed cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/oRrPvYYzPQFRFKuU/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-neutral-900 to-neutral-700 bg-clip-text text-4xl font-extrabold leading-tight text-transparent dark:from-white dark:to-neutral-300 sm:text-6xl"
          >
            Hi, I’m <span className="text-indigo-600 dark:text-indigo-400">Your Name</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 sm:text-xl"
          >
            I craft modern, animated web experiences with a focus on performance and polish.
          </motion.p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-400">I’m a</span>
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="rounded-full bg-white/70 px-3 py-1 text-sm font-medium text-neutral-800 shadow-sm backdrop-blur dark:bg-neutral-900/60 dark:text-neutral-100"
            >
              {roles[index]}
            </motion.span>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow transition hover:from-indigo-500 hover:to-purple-500"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-neutral-300 bg-white/70 px-6 py-3 text-sm font-semibold text-neutral-800 shadow-sm backdrop-blur transition hover:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900/60 dark:text-neutral-100"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
