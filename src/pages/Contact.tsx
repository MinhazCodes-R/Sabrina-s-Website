import { Heart, Mail, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl mb-8 text-gray-900 flex items-center justify-center gap-3">
          <Heart className="text-pink-500" size={32} />
          Get In Touch
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision 💫
        </p>
        <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-12 border-4 border-purple-200">
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all"
            >
              <Mail size={20} />
              Send Email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-purple-400 text-purple-600 rounded-full hover:bg-white hover:scale-105 transition-all"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
          <p className="text-gray-600">
            Or find me on{' '}
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline font-medium">
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
