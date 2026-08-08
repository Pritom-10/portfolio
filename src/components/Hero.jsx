import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import profile from "../images/profile.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-100/50 dark:bg-emerald-900/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative"
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white dark:border-zinc-800 shadow-xl overflow-hidden bg-zinc-200 dark:bg-zinc-800">
              <img
                src={profile}
                alt="Pritom Barua Shiro"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-2 -right-2 bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg"
            >
              OPEN TO WORK
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl sm:text-7xl font-bold text-zinc-900 dark:text-white tracking-tight mb-4"
          >
            Pritom Barua Shiro
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 font-medium mb-6"
          >
            Backend Software Developer{" "}
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
              (Node.js)
            </span>{" "}
            <span className="text-zinc-300 dark:text-zinc-700 mx-2">|</span> API
            & Database Specialist
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl text-zinc-500 dark:text-zinc-400 text-lg mb-10 leading-relaxed"
          >
            I build scalable backend systems, design secure RESTful APIs, and
            optimize databases with{" "}
            <span className="font-semibold text-zinc-800 dark:text-zinc-200">
              Node.js
            </span>
            ,{" "}
            <span className="font-semibold text-zinc-800 dark:text-zinc-200">
              Express
            </span>
            , and{" "}
            <span className="font-semibold text-zinc-800 dark:text-zinc-200">
              PostgreSQL
            </span>
            . Focused on clean architecture, TypeScript, and delivering reliable
            solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-zinc-900 dark:bg-emerald-600 text-white rounded-full font-semibold hover:bg-zinc-800 dark:hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-zinc-200 dark:shadow-none"
            >
              View Projects
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 rounded-full font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all flex items-center justify-center shadow-sm"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-400 dark:text-zinc-600"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
