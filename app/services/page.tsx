'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCode, FaMobile, FaDatabase, FaPaintBrush, FaCloud, FaCog, FaCheck, FaArrowRight, FaRocket } from 'react-icons/fa';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
}

export default function Services() {
  const services: Service[] = [
    {
      icon: <FaCode className="text-3xl" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like Next.js, React, and TypeScript.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance', 'Security'],
      price: 'Starting at $2,500'
    },
    {
      icon: <FaMobile className="text-3xl" />,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications for iOS and Android with native performance.',
      features: ['iOS & Android', 'Offline Support', 'Push Notifications', 'App Store Deployment'],
      price: 'Starting at $4,000'
    },
    {
      icon: <FaDatabase className="text-3xl" />,
      title: 'Data Solutions',
      description: 'Data analysis, visualization, and processing to transform raw data into insights.',
      features: ['Data Cleaning', 'Dashboards', 'Real-time Analytics', 'Reports'],
      price: 'Starting at $1,800'
    },
    {
      icon: <FaPaintBrush className="text-3xl" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces that provide exceptional user experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      price: 'Starting at $1,500'
    },
    {
      icon: <FaCloud className="text-3xl" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions for your applications.',
      features: ['AWS/Azure/GCP', 'DevOps', 'CI/CD', 'Monitoring'],
      price: 'Starting at $1,200'
    },
    {
      icon: <FaCog className="text-3xl" />,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and support to keep your applications running smoothly.',
      features: ['Security Updates', 'Bug Fixes', 'Performance', '24/7 Support'],
      price: 'Starting at $500/month'
    }
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
            My <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions to bring your ideas to life. From concept to deployment, 
            I provide end-to-end services tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="card p-6 group card-spacing"
            >
              <div className="text-center mb-6">
                <div className="inline-flex p-3 rounded-xl bg-blue-600 text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-card-title font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="text-blue-400 font-bold text-lg">
                  {service.price}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-slate-300">
                    <FaCheck className="text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="w-full btn-primary text-center"
              >
                Get Started
                <FaArrowRight className="ml-2" />
              </Link>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your project requirements and create a custom solution that fits your needs and budget.
            </p>
            <Link
              href="/contact"
              className="btn-primary text-lg px-8 py-4"
            >
              <FaRocket className="mr-2" />
              Start Your Project
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}