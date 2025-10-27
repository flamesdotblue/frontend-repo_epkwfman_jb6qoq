import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-4 py-24">
      <motion.h2
        className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact
      </motion.h2>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <motion.form
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const name = fd.get('name');
            const msg = fd.get('message');
            const email = fd.get('email');
            const body = encodeURIComponent(`Hi, I am ${name}.\n\n${msg}\n\nReach me at: ${email}`);
            // Open default email client without pre-filled recipient
            window.location.href = `mailto:?subject=Portfolio%20Inquiry&body=${body}`;
          }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="grid gap-4">
            <div>
              <label className="text-sm text-neutral-600 dark:text-neutral-300">Name</label>
              <input name="name" required className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-none ring-indigo-500/20 focus:ring-2 dark:border-neutral-700 dark:bg-neutral-950" />
            </div>
            <div>
              <label className="text-sm text-neutral-600 dark:text-neutral-300">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-none ring-indigo-500/20 focus:ring-2 dark:border-neutral-700 dark:bg-neutral-950" />
            </div>
            <div>
              <label className="text-sm text-neutral-600 dark:text-neutral-300">Message</label>
              <textarea name="message" rows="4" required className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-none ring-indigo-500/20 focus:ring-2 dark:border-neutral-700 dark:bg-neutral-950" />
            </div>
            <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow hover:from-indigo-500 hover:to-purple-500">
              Send Message
            </button>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
        >
          <p className="text-neutral-600 dark:text-neutral-300">
            I’m currently open to new opportunities and collaborations. Use the form to start a conversation, and I’ll get back to you.
          </p>
          <div className="mt-6 grid gap-3">
            <span className="inline-flex items-center gap-2 text-neutral-800 dark:text-neutral-100">
              <Mail size={18} /> Email available upon request
            </span>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-indigo-500/10 to-transparent" />
    </section>
  );
}
