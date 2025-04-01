
import { Link } from 'react-router-dom';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold">Portfolio</h3>
            <p className="text-gray-300 max-w-xs">
              Creating digital experiences that inspire, engage, and deliver results.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={20} />
              </Link>
              <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                <Github size={20} />
              </Link>
              <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Get in Touch</h4>
            <p className="text-gray-300 mb-4">
              Have a project in mind? Let's talk about it.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-white text-portfolio-navy px-5 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Portfolio. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm text-gray-400">
                <li>
                  <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
