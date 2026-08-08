import { motion } from 'motion/react';
import { Award, Trophy, Star } from 'lucide-react';

const Certificates = () => {
  const achievements = [
    {
      title: "Inter-University Programming Contest",
      organization: "Tech Excellence 2024",
      date: "Oct 2024",
      icon: <Trophy className="text-amber-500" />,
      description: "Ranked in Top 10 among 50+ participating teams."
    },
    {
      title: "National Tech Exhibition",
      organization: "Innovation Hub",
      date: "Aug 2024",
      icon: <Star className="text-blue-500" />,
      description: "Showcased a smart city management prototype using IoT and React."
    },
    {
      title: "Best Web Developer Award",
      organization: "University IT Club",
      date: "May 2025",
      icon: <Award className="text-emerald-500" />,
      description: "Recognized for outstanding contributions to the club's digital presence."
    },
    {
      title: "Full-Stack Development Bootcamp",
      organization: "Online Academy",
      date: "Jan 2024",
      icon: <Award className="text-purple-500" />,
      description: "Intensive 6-month training on modern web technologies."
    }
  ];

  return (
    <section id="certificates" className="py-24 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-2 block"
          >
            Recognition
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-zinc-900 dark:text-white"
          >
            Certificates & Achievements
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-zinc-800 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-700 flex gap-6 hover:shadow-lg transition-all group"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-zinc-50 dark:bg-zinc-900 rounded-2xl flex items-center justify-center group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/20 transition-colors">
                {item.icon}
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{item.title}</h3>
                  <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">{item.date}</span>
                </div>
                <p className="text-emerald-600 dark:text-emerald-500 text-sm font-semibold mb-3">{item.organization}</p>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
