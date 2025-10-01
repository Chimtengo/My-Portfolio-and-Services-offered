'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub, FaCode, FaMobile, FaDatabase, FaChartBar, FaPaintBrush } from 'react-icons/fa';

interface PortfolioItem {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  year: string;
}

export default function Portfolio() {
  const portfolioItems: PortfolioItem[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A complete e-commerce solution with admin dashboard, payment processing, and inventory management.',
      category: 'Web Development',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      year: '2024'
    },
    {
      title: 'Fitness Tracking App',
      description: 'Mobile app for tracking workouts, nutrition, and progress with social features.',
      category: 'Mobile Development',
      technologies: ['React Native', 'Firebase', 'Redux'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      year: '2024'
    },
    {
      title: 'Business Analytics Dashboard',
      description: 'Real-time analytics dashboard for business metrics and performance tracking.',
      category: 'Data Solutions',
      technologies: ['Python', 'D3.js', 'FastAPI', 'PostgreSQL'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      year: '2023'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates and team features.',
      category: 'Web Development',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      year: '2023'
    },
    {
      title: 'Weather Application',
      description: 'Beautiful weather app with forecasts, maps, and customizable alerts.',
      category: 'Mobile Development',
      technologies: ['Flutter', 'Dart', 'REST API'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      year: '2023'
    },
    {
      title: 'Data Visualization Platform',
      description: 'Interactive platform for creating and sharing data visualizations.',
      category: 'Data Solutions',
      technologies: ['Python', 'Plotly', 'React', 'AWS'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      year: '2022'
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web Development':
        return <FaCode className="text-blue-400" />;
      case 'Mobile Development':
        return <FaMobile className="text-green-400" />;
      case 'Data Solutions':
        return <FaDatabase className="text-purple-400" />;
      case 'UI/UX Design':
        return <FaPaintBrush className="text-pink-400" />;
      default:
        return <FaChartBar className="text-blue-400" />;
    }
  };

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
            My <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive showcase of my work across various technologies and domains. 
            Each project demonstrates my commitment to quality and innovation.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="card overflow-hidden group"
            >
              {/* Portfolio Item Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <div className="text-4xl mb-2">
                    {getCategoryIcon(item.category)}
                  </div>
                  <div className="text-sm font-semibold">Project Preview</div>
                </div>
                <div className="absolute top-4 right-4 bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-sm font-medium">
                  {item.year}
                </div>
              </div>

              {/* Portfolio Item Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(item.category)}
                    <span className="text-slate-400 text-sm font-medium">{item.category}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-slate-300 mb-4 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs font-medium border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link
                    href={item.liveUrl}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 text-center text-sm flex items-center justify-center gap-2"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    View Live
                  </Link>
                  <Link
                    href={item.githubUrl}
                    className="flex-1 bg-slate-700 text-slate-300 py-2 px-4 rounded-lg font-semibold hover:bg-slate-600 transition duration-300 text-center text-sm flex items-center justify-center gap-2"
                  >
                    <FaGithub />
                    Code
                  </Link>
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
          className="text-center mt-20"
        >
          <div className="card p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Like What You See?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm always excited to take on new challenges and create amazing digital experiences. 
              Let's discuss how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary text-lg px-8 py-4"
              >
                Start a Project
              </Link>
              <Link
                href="/services"
                className="btn-secondary text-lg px-8 py-4"
              >
                View Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}