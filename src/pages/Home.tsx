import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Sparkles, ChevronDown } from 'lucide-react';

export function Home() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center">
          <div className="inline-block mb-4 animate-bounce">
            <Sparkles className="text-yellow-500" size={32} />
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-gray-900">
            Hi, I'm <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Your Name</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A passionate developer & designer creating beautiful digital experiences ✨
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <Link
              to="/projects"
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all"
            >
              View My Work 🎨
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-purple-400 text-purple-600 rounded-full hover:bg-white hover:scale-105 transition-all"
            >
              Get In Touch 💌
            </Link>
          </div>
          <div className="flex justify-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-500 transition-colors hover:scale-110 transform">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition-colors hover:scale-110 transform">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-pink-500 transition-colors hover:scale-110 transform">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-12 animate-bounce">
          <Link to="/about" className="text-purple-400 hover:text-purple-600">
            <ChevronDown size={32} />
          </Link>
        </div>
      </div>
    </section>
  );
}
