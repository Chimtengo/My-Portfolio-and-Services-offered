'use client'
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Full-stack web development using modern technologies like Next.js, React, Node.js, and more. I create responsive, performant, and scalable web applications tailored to your specific needs.',
      features: ['Custom Web Applications', 'E-commerce Solutions', 'API Development', 'Performance Optimization', 'Responsive Design', 'SEO Optimization'],
      icon: '💻',
      color: 'blue'
    },
    {
      title: 'Mobile Development',
      description: 'Cross-platform mobile app development for iOS and Android using React Native and Flutter. Build once, deploy everywhere with native-like performance and user experience.',
      features: ['Cross-Platform Apps', 'UI/UX Design', 'App Store Deployment', 'Push Notifications', 'Offline Functionality', 'API Integration'],
      icon: '📱',
      color: 'green'
    },
    {
      title: 'Data Cleaning & Visualization',
      description: 'Transform your raw data into actionable insights with comprehensive data cleaning and beautiful visualizations. Make data-driven decisions with clear, interactive dashboards.',
      features: ['Data Processing', 'Dashboard Creation', 'Statistical Analysis', 'Report Generation', 'Interactive Charts', 'Data Storytelling'],
      icon: '📊',
      color: 'purple'
    },
    {
      title: 'Website Maintenance',
      description: 'Ongoing support and maintenance to keep your website secure, updated, and performing optimally. Focus on your business while I handle the technical details.',
      features: ['Security Updates', 'Performance Monitoring', 'Content Updates', 'Backup Management', 'Bug Fixes', 'Technical Support'],
      icon: '🔧',
      color: 'orange'
    },
  ];

  // Function to return gradient classes based on color
  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
    };
    return colors[color] || colors.blue;
  };

  return (
    <Layout>
      <section className="min-h-screen py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-4">My Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs. 
              From concept to deployment, I deliver high-quality results that drive growth.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                {/* Service Header with Gradient */}
                <div className={`bg-gradient-to-r ${getColorClasses(service.color)} p-6`}>
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl">{service.icon}</span>
                    <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <h3 className="font-semibold text-gray-900 mb-4 text-lg">What I Offer:</h3>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contact"
                    className="block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16 bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life. I'm committed to delivering 
              solutions that exceed your expectations and drive real results for your business.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}