'use client'
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaCode, FaRocket, FaCheck, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

export default function About() {
  const skills = [
    { name: 'Next.js & React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 88 },
    { name: 'React Native', level: 85 },
    { name: 'Python & Data Analysis', level: 82 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'MongoDB & PostgreSQL', level: 85 },
    { name: 'AWS & DevOps', level: 78 },
  ];

  const stats = [
    { icon: <FaAward className="text-3xl" />, number: '50+', label: 'Projects Completed' },
    { icon: <FaUsers className="text-3xl" />, number: '30+', label: 'Happy Clients' },
    { icon: <FaCode className="text-3xl" />, number: '3+', label: 'Years Experience' },
    { icon: <FaRocket className="text-3xl" />, number: '100%', label: 'Client Satisfaction' },
  ];

  const experience = [
    { year: '2022-Present', role: 'Full Stack Developer', company: 'Freelance' },
    { year: '2021-2022', role: 'Frontend Developer', company: 'Tech Solutions Inc.' },
    { year: '2020-2021', role: 'Junior Developer', company: 'Web Agency' },
  ];

  return (
    <section className="min-h-screen py-20 bg-slate-900">
      <div className="container-fixed">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Passionate developer with expertise in creating digital solutions that make a difference. 
            I combine technical excellence with creative problem-solving.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <div className="text-blue-400 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-slate-400 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold text-white">{skill.name}</span>
                    <span className="text-blue-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience & Approach */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Experience */}
            <div className="card p-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FaBriefcase className="text-blue-400 mr-3" />
                Experience
              </h3>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-blue-400 pl-4">
                    <div className="text-blue-400 font-semibold">{exp.year}</div>
                    <div className="text-white font-bold">{exp.role}</div>
                    <div className="text-slate-400">{exp.company}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* My Approach */}
            <div className="card p-6">
              <h3 className="text-2xl font-bold text-white mb-6">My Approach</h3>
              <div className="space-y-4">
                {[
                  'Focus on clean, maintainable code',
                  'User-centered design principles',
                  'Agile development methodology',
                  'Continuous learning and improvement',
                  'Strong communication and collaboration',
                  'Quality assurance and testing'
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-slate-300">
                    <FaCheck className="text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}