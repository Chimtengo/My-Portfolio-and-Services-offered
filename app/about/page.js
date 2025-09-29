'use client'
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';

export default function About() {
  const skills = [
    { name: 'Next.js', level: 90 },
    { name: 'React', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'Data Analysis', level: 75 },
  ];

  return (
    <Layout>
      <section className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Me</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate developer with expertise in creating digital solutions that make a difference
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  With over 3 years of experience in web and mobile development, I've helped numerous clients 
                  bring their ideas to life through innovative digital solutions. My passion for technology 
                  started early, and I've been constantly learning and adapting to new challenges.
                </p>
                <p>
                  My journey started with frontend development, expanded to full-stack capabilities, 
                  and now includes data analysis and visualization to provide comprehensive solutions 
                  for businesses of all sizes.
                </p>
                <p>
                  I believe in writing clean, maintainable code and creating user experiences that 
                  are both beautiful and functional. Every project is an opportunity to learn, grow, 
                  and deliver exceptional value.
                </p>
              </div>
            </motion.div>

            {/* Motivation Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">What Drives Me</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Creating solutions that solve real problems
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Continuous learning and adapting to new technologies
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Delivering exceptional user experiences
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Building long-term relationships with clients
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Skills & Technologies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900">{skill.name}</span>
                    <span className="text-blue-600 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-blue-600 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}