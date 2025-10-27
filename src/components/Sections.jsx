import { motion } from 'framer-motion';
import { Code2, Sparkles, Briefcase, ExternalLink } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-800 dark:text-neutral-200">
    {children}
  </span>
);

export default function Sections() {
  return (
    <div className="relative">
      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-24">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="relative"
          >
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">About Me</h2>
              <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-300">
                Motivated and growth-focused Full Stack Developer skilled in React.js, TypeScript, Node.js, MongoDB, and Tailwind CSS. Experienced in building scalable and efficient real-world applications with clean UI, RESTful APIs, and WebRTC integrations. Passionate about high-performance web apps, real-time features, and smooth animations.
              </p>
            </div>
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 animate-pulse rounded-xl bg-gradient-to-br from-indigo-500/30 to-pink-500/30 blur-xl" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="space-y-4"
          >
            <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                Education
              </p>
              <p className="mt-1 text-neutral-900 dark:text-neutral-100">Bachelor of Technology (B-Tech)</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">VVP, DBATU University — CGPA: 8</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
              <p className="text-sm text-neutral-700 dark:text-neutral-300">Currently</p>
              <p className="mt-1 text-neutral-900 dark:text-neutral-100">Open to opportunities and collaborations</p>
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
          Technical Skills
        </motion.h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeIn}
            className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-neutral-800 dark:text-neutral-100">
              <Code2 size={16} className="text-indigo-500" /> Frontend
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {['React.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'CSS3/SCSS', 'Redux', 'Framer Motion'].map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeIn}
            className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-neutral-800 dark:text-neutral-100">
              <Code2 size={16} className="text-indigo-500" /> Backend
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Node.js', 'Express.js', 'MongoDB', 'Socket.IO'].map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeIn}
            className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-neutral-800 dark:text-neutral-100">
              <Code2 size={16} className="text-indigo-500" /> Tools & Other
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Git', 'GitHub', 'Postman', 'Vercel', 'Microsoft Azure', 'RESTful APIs', 'JWT Authentication', 'Cloudinary', 'MongoDB GridFS'].map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </motion.div>
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
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {/* YouTube Clone */}
          <motion.a
            href="https://youtube-frontend-dle2.vercel.app/"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
              <Sparkles className="text-indigo-500" />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">YouTube Clone (Full Stack App)</h3>
                <span className="rounded-full bg-indigo-50 px-2 py-1 text-xs text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">Live</span>
              </div>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                React, Node.js, Express, MongoDB. Video metadata management, JWT auth, Cloudinary for optimized storage and delivery.
              </p>
              <div className="mt-3 flex items-center gap-3 text-sm text-indigo-600 dark:text-indigo-400">
                <span className="inline-flex items-center gap-1 hover:underline">
                  <ExternalLink size={16} /> Visit
                </span>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.a>

          {/* Admin Panel for Media Management */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
              <Sparkles className="text-indigo-500" />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Admin Panel for Media Management</h3>
                <span className="rounded-full bg-indigo-50 px-2 py-1 text-xs text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">Dashboard</span>
              </div>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                React, Node.js, Express, MongoDB. Admin dashboard with role-based JWT auth and MongoDB GridFS for large media storage and retrieval.
              </p>
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>
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
              {
                title: 'Junior Software Developer',
                time: 'Feb 2025 – Present',
                desc: (
                  <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-400">
                    <li>Built a complete video calling feature using WebRTC for real-time NGO–Donor communication.</li>
                    <li>Designed Socket.IO signaling logic and RESTful APIs using Node.js and Express.</li>
                    <li>Created admin APIs to manage donation data and real-time analytics.</li>
                    <li>Developed React-based frontend for seamless campaign donations.</li>
                    <li>Focused on real-time updates, scalability, and version control using Git and GitHub.</li>
                  </ul>
                ),
              },
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
                    <div className="mt-2">{e.desc}</div>
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
