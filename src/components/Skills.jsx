import { motion } from 'motion/react';
import { Code2, Server, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="text-emerald-500" />,
      skills: [
        { name: "HTML5 / CSS3", level: 95 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "React.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="text-blue-500" />,
      skills: [
        { name: "Node.js", level: 60 },
        { name: "Express.js", level: 55 },
        { name: "RESTful APIs", level: 65 },
        { name: "MongoDB (Learning)", level: 40 },
      ]
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="text-amber-500" />,
      skills: [
        { name: "Git / GitHub", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Figma (UI Design)", level: 70 },
        { name: "Responsive Design", level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-2 block"
          >
            Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-zinc-900 dark:text-white"
          >
            My Technical Skills
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{skill.name}</span>
                      <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-zinc-100 dark:bg-zinc-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full rounded-full ${
                          category.title.includes('Frontend') ? 'bg-emerald-500' : 
                          category.title.includes('Backend') ? 'bg-blue-500' : 'bg-amber-500'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
