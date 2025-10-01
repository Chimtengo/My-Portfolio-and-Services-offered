import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 border-t border-slate-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4 gradient-text">DevCraft</h3>
            <p className="text-slate-400 mb-4">
              Creating innovative digital solutions that drive business growth and user engagement.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-slate-400 hover:text-blue-400 transition duration-300">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com" className="text-slate-400 hover:text-blue-400 transition duration-300">
                <FaLinkedin size={20} />
              </a>
              <a href="https://twitter.com" className="text-slate-400 hover:text-blue-400 transition duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="mailto:contact@devcraft.com" className="text-slate-400 hover:text-blue-400 transition duration-300">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/about" className="block text-slate-400 hover:text-blue-400 transition duration-300">About</a>
              <a href="/services" className="block text-slate-400 hover:text-blue-400 transition duration-300">Services</a>
              <a href="/portfolio" className="block text-slate-400 hover:text-blue-400 transition duration-300">Portfolio</a>
              <a href="/contact" className="block text-slate-400 hover:text-blue-400 transition duration-300">Contact</a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <div className="space-y-2">
              <a href="/services#web" className="block text-slate-400 hover:text-blue-400 transition duration-300">Web Development</a>
              <a href="/services#mobile" className="block text-slate-400 hover:text-blue-400 transition duration-300">Mobile Apps</a>
              <a href="/services#data" className="block text-slate-400 hover:text-blue-400 transition duration-300">Data Solutions</a>
              <a href="/services#design" className="block text-slate-400 hover:text-blue-400 transition duration-300">UI/UX Design</a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {currentYear} DevCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}