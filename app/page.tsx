'use client'
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - Full screen introduction */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            Hi, I'm <span className="text-blue-600">Your Name</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-8"
          >
            Full-Stack Developer & Data Specialist
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for your digital needs</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Development',
                description: 'Custom websites and web applications built with modern technologies like Next.js, React, and Node.js',
                icon: '💻'
              },
              {
                title: 'Mobile Development',
                description: 'Cross-platform mobile apps for iOS and Android using React Native and Flutter',
                icon: '📱'
              },
              {
                title: 'Data Cleaning & Visualization',
                description: 'Transform raw data into meaningful insights and beautiful, interactive visualizations',
                icon: '📊'
              },
              {
                title: 'Website Maintenance',
                description: 'Ongoing support, security updates, and performance optimization for your websites',
                icon: '🔧'
              },
              {
                title: 'UI/UX Design',
                description: 'User-centered design that creates intuitive and engaging user experiences',
                icon: '🎨'
              },
              {
                title: 'API Development',
                description: 'RESTful and GraphQL APIs that power your applications and integrations',
                icon: '⚡'
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}