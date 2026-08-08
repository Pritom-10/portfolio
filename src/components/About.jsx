import { motion } from 'motion/react';
import { Layout, Database, Code, Zap } from 'lucide-react';

const About = () => {
  const pillars = [
    {
      icon: <Layout className="text-emerald-500" />,
      title: "User-Centric UI",
      desc: "Crafting pixel-perfect, accessible, and intuitive interfaces that users love."
    },
    {
      icon: <Database className="text-blue-500" />,
      title: "Scalable Backend",
      desc: "Building robust server-side logic and efficient database schemas for high performance."
    },
    {
      icon: <Code className="text-purple-500" />,
      title: "Clean Architecture",
      desc: "Writing maintainable, well-documented, and modular code following best practices."
    },
    {
      icon: <Zap className="text-amber-500" />,
      title: "Performance First",
      desc: "Optimizing every line of code to ensure lightning-fast load times and smooth interactions."
    }
  ];

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-800 hover:shadow-xl hover:border-emerald-100 dark:hover:border-emerald-900 transition-all group"
              >
                <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-4 block">
              About Me
            </span>
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
              Building Scalable{" "}
              <span className="text-emerald-600">Backend Systems</span> with{" "}
              <span className="text-blue-600">Clean Architecture</span>
            </h2>

            {/* পরিবর্তিত অংশ এখান থেকে */}
            <div className="space-y-3 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
              <p>
                I’m a{" "}
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Backend Developer
                </span>{" "}
                focused on{" "}
                <span className="text-emerald-600 font-medium">Node.js</span>{" "}
                and{" "}
                <span className="text-emerald-600 font-medium">Express.js</span>
                , building secure and scalable{" "}
                <span className="text-blue-600 font-medium">RESTful APIs</span>{" "}
                with TypeScript and JWT authentication.
              </p>
              <p>
                I design efficient database schemas and optimize queries for{" "}
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                  PostgreSQL
                </span>
                ,{" "}
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                  MySQL
                </span>
                , and{" "}
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                  MongoDB
                </span>
                .
              </p>
              <p>
                My workflow revolves around clean architecture, asynchronous
                programming, SSR, middleware integration, and{" "}
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Git/GitHub
                </span>{" "}
                version control.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">
                With{" "}
                <span className="font-bold text-zinc-900 dark:text-white">
                  2+ years
                </span>{" "}
                of hands-on experience and{" "}
                <span className="font-bold text-zinc-900 dark:text-white">
                  15+ projects
                </span>{" "}
                delivered, I enjoy solving real-world problems through
                well-structured, maintainable code.
              </p>
            </div>
            {/* পরিবর্তিত অংশ শেষ */}

            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-bold text-zinc-900 dark:text-white">
                  3+
                </h4>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm uppercase tracking-wide font-medium">
                  Years Experience
                </p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-zinc-900 dark:text-white">
                  15+
                </h4>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm uppercase tracking-wide font-medium">
                  Projects Completed
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
