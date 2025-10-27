import { motion } from 'framer-motion';
import { Code2, Sparkles, Briefcase, Github, ExternalLink } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Sections() {
  return (
    <div className="relative">
      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop"
              alt="Portrait"
              className="h-64 w-64 rounded-2xl object-cover shadow-lg md:h-80 md:w-80"
            />
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 animate-pulse rounded-xl bg-gradient-to-br from-indigo-500/30 to-pink-500/30 blur-xl" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">About Me</h2>
            <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-300">
              I’m a multidisciplinary maker who thrives at the intersection of design and engineering. I love turning
              complex ideas into elegant interfaces, with a focus on motion and delightful micro-interactions.
            </p>
            <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                Currently exploring WebGL, creative coding, and performant frontend architectures. Open to freelance and
                full-time roles.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-24">
        <motion.h2
          className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Skills
        </motion.h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[{ label: 'React / Next.js', level: 90 }, { label: 'TypeScript', level: 85 }, { label: 'Node.js', level: 80 }, { label: 'UI/UX & Motion', level: 88 }].map(
            (s) => (
              <motion.div
                key={s.label}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeIn}
                className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm font-medium text-neutral-800 dark:text-neutral-100">
                    <Code2 size={16} className="text-indigo-500" /> {s.label}
                  </span>
                  <span className="text-xs text-neutral-500">{s.level}%</span>
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-24">
        <motion.h2
          className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Projects
        </motion.h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop`}
                  alt="Project"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Project {i}</h3>
                  <span className="rounded-full bg-indigo-50 px-2 py-1 text-xs text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">UI</span>
                </div>
                <p className="mt-1 line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400">
                  A short description about the project highlighting impact and tech used.
                </p>
                <div className="mt-3 flex items-center gap-3 text-sm text-indigo-600 dark:text-indigo-400">
                  <span className="inline-flex items-center gap-1 hover:underline">
                    <Github size={16} /> Code
                  </span>
                  <span className="inline-flex items-center gap-1 hover:underline">
                    <ExternalLink size={16} /> Live
                  </span>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <Sparkles className="absolute right-3 top-3 text-white" size={18} />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-4 py-24">
        <motion.h2
          className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Experience
        </motion.h2>
        <div className="mt-8 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800 md:left-1/2" />
          <div className="space-y-8">
            {[
              { title: 'Senior Frontend Engineer', time: '2023 — Present', desc: 'Leading UI engineering and design systems.' },
              { title: 'Product Designer', time: '2021 — 2023', desc: 'Shipped end-to-end product experiences with motion.' },
              { title: 'Creative Developer', time: '2019 — 2021', desc: 'Built immersive, animated websites and installations.' },
            ].map((e, idx) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className={`relative md:flex md:items-center ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
              >
                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                  <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">{e.title}</h3>
                      <span className="text-xs text-neutral-500">{e.time}</span>
                    </div>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{e.desc}</p>
                  </div>
                </div>
                <div className="absolute left-4 top-7 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white bg-indigo-500 shadow-md dark:border-neutral-900 md:left-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
