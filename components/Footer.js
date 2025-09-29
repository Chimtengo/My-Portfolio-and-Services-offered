import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">MyPortfolio</h3>
            <p className="text-gray-400">
              Creating innovative digital solutions that drive business growth and user engagement.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/about" className="block text-gray-400 hover:text-white transition duration-300">About</a>
              <a href="/services" className="block text-gray-400 hover:text-white transition duration-300">Services</a>
              <a href="/projects" className="block text-gray-400 hover:text-white transition duration-300">Projects</a>
              <a href="/contact" className="block text-gray-400 hover:text-white transition duration-300">Contact</a>
            </div>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-400 hover:text-white transition duration-300">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-white transition duration-300">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} MyPortfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}