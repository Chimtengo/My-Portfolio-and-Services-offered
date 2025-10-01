'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaCode, 
  FaMobile, 
  FaDatabase, 
  FaPaintBrush, 
  FaRocket, 
  FaArrowRight, 
  FaCheck, 
  FaAward, 
  FaUsers, 
  FaStar,
  FaLaptopCode,
  FaChartLine,
  FaShieldAlt
} from 'react-icons/fa';

export default function Home() {
  // Stats data
  const stats = [
    { icon: <FaAward className="text-3xl" />, number: '50+', label: 'Projects Completed' },
    { icon: <FaUsers className="text-3xl" />, number: '30+', label: 'Happy Clients' },
    { icon: <FaStar className="text-3xl" />, number: '3+', label: 'Years Experience' },
    { icon: <FaCheck className="text-3xl" />, number: '100%', label: 'Client Satisfaction' },
  ];

  // Services data
  const services = [
    {
      icon: <FaCode className="text-4xl" />,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies like Next.js, React, and Node.js. I create fast, scalable, and user-friendly web solutions.',
      features: ['Custom Web Applications', 'E-commerce Solutions', 'API Development', 'Performance Optimization'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaMobile className="text-4xl" />,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications for iOS and Android with native performance using React Native and Flutter. Build engaging mobile experiences that users love.',
      features: ['iOS & Android Apps', 'App Store Deployment', 'Push Notifications', 'Offline Functionality'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaDatabase className="text-4xl" />,
      title: 'Data Solutions',
      description: 'Data analysis, visualization, and processing to transform raw data into actionable business insights. Turn your data into powerful decision-making tools.',
      features: ['Data Cleaning', 'Dashboard Creation', 'Real-time Analytics', 'Report Generation'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaPaintBrush className="text-4xl" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces that provide exceptional user experiences and drive engagement. Design that not only looks good but works perfectly.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  // Process steps
  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We discuss your project requirements, goals, and vision to create a comprehensive plan.',
      icon: <FaLaptopCode className="text-2xl" />
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'I create wireframes and prototypes to visualize the final product and gather feedback.',
      icon: <FaPaintBrush className="text-2xl" />
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Your project is built with best practices and thoroughly tested across all devices.',
      icon: <FaCode className="text-2xl" />
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'Your project goes live, and I provide ongoing support and maintenance as needed.',
      icon: <FaRocket className="text-2xl" />
    }
  ];

  return (
    <main className="min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full"
              >
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-slate-300 font-medium">Full-Stack Developer & Data Specialist</span>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-6"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Build Your
                  <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Digital Future
                  </span>
                  With Me
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                  I create stunning digital experiences that drive results. From web and mobile development 
                  to data solutions, I bring your ideas to life with cutting-edge technology and creative solutions.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  href="/contact"
                  className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/25 flex items-center justify-center gap-3"
                >
                  <FaRocket className="group-hover:animate-bounce" />
                  Start Your Project
                </Link>
                
                <Link
                  href="/projects"
                  className="group border-2 border-slate-600 text-slate-300 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                >
                  View My Work
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-slate-700/50"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-blue-400 mb-3 flex justify-center lg:justify-start">
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Services Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-500"
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {service.description.split(' ').slice(0, 12).join(' ')}...
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-24 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions to transform your ideas into successful, 
              high-performing products that drive business growth.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className={`p-5 rounded-2xl bg-gradient-to-r ${service.color} text-white transform group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-slate-300 text-lg">
                          <FaCheck className="text-green-400 mr-4 flex-shrink-0 text-xl" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA Link */}
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center text-blue-400 font-semibold text-lg hover:text-blue-300 transition-colors duration-300 group/link"
                    >
                      Discuss your project
                      <FaArrowRight className="ml-3 group-hover/link:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              A structured approach to ensure your project's success from concept to launch
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">{step.step}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-slate-800 border-2 border-slate-700 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's work together to create something extraordinary. I'm passionate about 
              turning ideas into successful digital products that make an impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
              >
                <FaRocket className="text-xl" />
                Start Your Project
              </Link>
              
              <Link
                href="/projects"
                className="border-2 border-white text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                View My Work
                <FaArrowRight className="text-xl" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}