import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import studynookImage from '../images/studynook.PNG';
import LiveStockImage from '../images/livestock.PNG';
import keenKeeperImage from '../images/keenkeeper.PNG';

const Projects = () => {
  const projects = [
    {
      title: "Studynook (Online Room Booking System)",
      description:
        "A full-stack room reservation system where students can browse, book, and manage study rooms in real time. Includes availability calendar, booking status management, and an admin panel for room and booking control.",
      image: studynookImage,
      tech: [
        "React",
        "Tailwind CSS",
        "Recharts",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      github: "https://github.com/Pritom-10/studynook",
      live: "https://studynook-six.vercel.app",
    },
    {
      title: "LiveStock (Real-Time Stock Market Dashboard)",
      description:
        "Real-time stock market dashboard with live price streaming via WebSocket. Interactive and customizable charts built with D3.js for deep market analysis. Backend API powered by Node.js, Express, and MongoDB handles data aggregation and user watchlists. Delivers a professional trading experience with instant updates and responsive design.",
      image: LiveStockImage,
      tech: ["React", "D3.js", "WebSocket", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/Pritom-10/livestock",
      live: "https://livestock-gules.vercel.app",
    },
    {
      title: "KeenKeeper (Collaborative Task Tracker)",
      description:
        "Collaborative task tracker featuring intuitive drag-and-drop board management for teams. Users can create workspaces, assign tasks, and track progress in real time. Built with React for a seamless frontend experience, and a Node.js/Express backend ensuring smooth data handling and synchronization. Focused on productivity and clean team workflows.",
      image: keenKeeperImage,
      tech: ["React", "Node.js", "Express"],
      github: "https://github.com/Pritom-10/Assignment-07",
      live: "https://dashing-gnome-ad9615.netlify.app",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-2 block"
            >
              Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold text-zinc-900 dark:text-white"
            >
              Featured Projects
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="https://github.com/Pritom-10"
            className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-500 font-medium flex items-center gap-2 transition-colors"
          >
            View all on GitHub <ExternalLink size={16} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-zinc-50 dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-zinc-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.github} className="p-3 bg-white dark:bg-zinc-800 rounded-full text-zinc-900 dark:text-white hover:bg-emerald-500 hover:text-white transition-all">
                    <Github size={20} />
                  </a>
                  <a href={project.live} className="p-3 bg-white dark:bg-zinc-800 rounded-full text-zinc-900 dark:text-white hover:bg-emerald-500 hover:text-white transition-all">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-bold rounded-full border border-zinc-200 dark:border-zinc-700">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <a href={project.live} className="text-zinc-900 dark:text-white font-bold text-sm flex items-center gap-1 group/link">
                    Live Demo 
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper for ArrowRight since it's used in the component
const ArrowRight = ({ size, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

export default Projects;
