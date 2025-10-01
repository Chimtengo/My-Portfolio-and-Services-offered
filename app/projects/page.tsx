'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub, FaCode, FaMobile, FaDatabase, FaLaptop, FaStar } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with modern features including product management, shopping cart, user authentication, and payment integration. Built with scalable architecture and optimized for performance.',
      category: 'Web Development',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Tailwind CSS', 'Node.js'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Fitness Mobile App',
      description: 'Cross-platform fitness tracking application with workout plans, progress tracking, and social features to keep users motivated. Includes real-time sync and offline capabilities.',
      category: 'Mobile Development',
      technologies: ['React Native', 'Firebase', 'Redux', 'Node.js', 'TypeScript'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive data visualization dashboard for business analytics with real-time data updates and customizable reporting features. Processes millions of data points efficiently.',
      category: 'Data Solutions',
      technologies: ['Python', 'D3.js', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task management system with real-time updates, team collaboration features, and project tracking capabilities. Supports file sharing and deadline management.',
      category: 'Web Development',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB', 'JWT', 'AWS'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Weather Mobile App',
      description: 'Beautiful weather application with location-based forecasts, severe weather alerts, and customizable weather widgets. Features smooth animations and intuitive UI.',
      category: 'Mobile Development',
      technologies: ['Flutter', 'Dart', 'REST API', 'Google Maps', 'Firebase'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Customer Analytics Platform',
      description: 'Comprehensive customer analytics platform that processes and visualizes customer data to provide business insights. Includes predictive analytics and trend analysis.',
      category: 'Data Solutions',
      technologies: ['Python', 'Pandas', 'Plotly', 'AWS', 'Machine Learning', 'SQL'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web Development':
        return <FaCode className="text-blue-400 text-xl" />;
      case 'Mobile Development':
        return <FaMobile className="text-green-400 text-xl" />;
      case 'Data Solutions':
        return <FaDatabase className="text-purple-400 text-xl" />;
      default:
        return <FaLaptop className="text-blue-400 text-xl" />;
    }
  };

  return (
    <section className="min-h-screen py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
          >
            My <span className="gradient-text">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
          >
            A collection of projects that showcase my skills and expertise across different domains. 
            Each project represents unique challenges and innovative solutions.
          </motion.p>
        </motion.div>

        {/* Projects Grid - IMPROVED SPACING */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Project Card */}
              <div className="bg-slate-800 rounded-2xl overflow-hidden border-2 border-slate-700 hover:border-blue-500/50 transition-all duration-500 shadow-2xl shadow-black/30 h-full flex flex-col">
                
                {/* Project Header with Image */}
                <div className="relative h-56 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                      {getCategoryIcon(project.category)}
                    </div>
                    <div className="text-lg font-semibold bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700">
                      Project Preview
                    </div>
                  </div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                      <FaStar className="text-sm" />
                      Featured
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-slate-300 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>

                {/* Project Content - LARGER & BETTER SPACED */}
                <div className="p-8 flex-1 flex flex-col">
                  {/* Category */}
                  <div className="flex items-center gap-3 mb-4">
                    {getCategoryIcon(project.category)}
                    <span className="text-slate-400 text-base font-medium">{project.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>

                  {/* Description - LARGER TEXT */}
                  <p className="text-slate-300 mb-6 leading-relaxed text-lg flex-1">
                    {project.description}
                  </p>

                  {/* Technologies - BETTER SPACING */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-slate-700 text-slate-300 rounded-full text-sm font-medium border border-slate-600 hover:bg-slate-600 hover:border-blue-400/50 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons - LARGER & BETTER SPACED */}
                  <div className="flex gap-4 mt-auto">
                    <Link
                      href={project.liveUrl}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-center text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                      Live Demo
                    </Link>
                    <Link
                      href={project.githubUrl}
                      className="flex-1 bg-slate-700 text-slate-300 py-4 px-6 rounded-xl font-semibold hover:bg-slate-600 hover:text-white transition-all duration-300 text-center text-lg flex items-center justify-center gap-3 border border-slate-600 hover:border-slate-500 hover:scale-105"
                    >
                      <FaGithub className="text-lg" />
                      Code
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-12 border-2 border-slate-700 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Have a Project in Mind?
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's work together to bring your ideas to life. I'm passionate about creating 
              solutions that make a difference and deliver exceptional user experiences.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-semibold px-12 py-5 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Start Your Project Today
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}