'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaDownload, FaGraduationCap, FaBriefcase, FaAward, FaCode, FaTools, FaLanguage } from 'react-icons/fa';

export default function Resume() {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      year: '2018-2022',
      description: 'Specialized in Software Engineering and Data Structures'
    },
    {
      degree: 'Full Stack Web Development Bootcamp',
      school: 'Tech Academy',
      year: '2021',
      description: 'Intensive 6-month program focusing on modern web technologies'
    }
  ];

  const experience = [
    {
      position: 'Full Stack Developer',
      company: 'Freelance',
      period: '2022 - Present',
      responsibilities: [
        'Developed and maintained web applications using Next.js, React, and Node.js',
        'Built responsive mobile applications with React Native',
        'Implemented data visualization dashboards for clients',
        'Managed project timelines and client communications'
      ]
    },
    {
      position: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: '2021 - 2022',
      responsibilities: [
        'Collaborated with design team to implement UI/UX designs',
        'Optimized application performance and SEO',
        'Participated in agile development processes',
        'Mentored junior developers'
      ]
    },
    {
      position: 'Junior Developer',
      company: 'Web Agency',
      period: '2020 - 2021',
      responsibilities: [
        'Assisted in developing client websites and applications',
        'Performed code reviews and testing',
        'Maintained and updated existing projects',
        'Learned modern development practices and tools'
      ]
    }
  ];

  const skills = {
    technical: [
      'Next.js & React', 'TypeScript', 'Node.js', 'React Native',
      'Python', 'MongoDB', 'PostgreSQL', 'Tailwind CSS',
      'AWS', 'Docker', 'Git', 'REST APIs'
    ],
    soft: [
      'Problem Solving', 'Communication', 'Team Collaboration',
      'Project Management', 'Agile Methodology', 'Client Relations'
    ],
    languages: [
      'English (Fluent)', 'Spanish (Intermediate)', 'French (Basic)'
    ]
  };

  const certifications = [
    'AWS Certified Developer Associate',
    'Google Cloud Professional Developer',
    'React Native Certification',
    'MongoDB University Certification'
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
            My <span className="gradient-text">Resume</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my education, experience, and skills. 
            Download my resume to learn more about my qualifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Contact Me
            </Link>
            <button className="btn-secondary">
              <FaDownload className="mr-2" />
              Download PDF
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Education & Skills */}
          <div className="lg:col-span-1 space-y-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FaGraduationCap className="text-blue-400 mr-3" />
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-blue-400 pl-4">
                    <div className="text-blue-400 font-semibold text-sm">{edu.year}</div>
                    <h3 className="text-white font-bold text-lg">{edu.degree}</h3>
                    <p className="text-slate-400 font-medium">{edu.school}</p>
                    <p className="text-slate-300 text-sm mt-2">{edu.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FaCode className="text-blue-400 mr-3" />
                Technical Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-slate-700 text-slate-300 rounded-lg text-sm font-medium border border-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FaTools className="text-blue-400 mr-3" />
                Soft Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-slate-700 text-slate-300 rounded-lg text-sm font-medium border border-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FaLanguage className="text-blue-400 mr-3" />
                Languages
              </h2>
              <div className="space-y-2">
                {skills.languages.map((language, index) => (
                  <div key={index} className="text-slate-300">
                    {language}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Experience & Certifications */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FaBriefcase className="text-blue-400 mr-3" />
                Work Experience
              </h2>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-blue-400 pl-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <div>
                        <h3 className="text-white font-bold text-xl">{exp.position}</h3>
                        <p className="text-blue-400 font-semibold">{exp.company}</p>
                      </div>
                      <div className="text-slate-400 font-medium bg-slate-800 px-3 py-1 rounded-full text-sm mt-2 sm:mt-0">
                        {exp.period}
                      </div>
                    </div>
                    <ul className="space-y-2 mt-4">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start text-slate-300">
                          <span className="text-blue-400 mr-2">•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FaAward className="text-blue-400 mr-3" />
                Certifications
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-slate-800 border border-slate-600 rounded-lg p-4 text-center hover:border-blue-400 transition-colors duration-300"
                  >
                    <div className="text-blue-400 mb-2">
                      <FaAward className="text-2xl mx-auto" />
                    </div>
                    <h3 className="text-white font-semibold text-sm">{cert}</h3>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Interested in Working Together?
              </h2>
              <p className="text-slate-300 mb-6">
                Let's discuss how I can contribute to your team and bring value to your projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary"
                >
                  Contact Me
                </Link>
                <Link
                  href="/projects"
                  className="btn-secondary"
                >
                  View Projects
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}