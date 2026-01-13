import { Star } from 'lucide-react';

export function About() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl mb-8 text-center text-gray-900 flex items-center justify-center gap-3">
          <Star className="text-yellow-500" size={32} />
          About Me
          <Star className="text-yellow-500" size={32} />
        </h2>
        <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-12 border-4 border-purple-100">
          <p className="text-lg text-gray-600 mb-6">
            I'm a full-stack developer and designer with a passion for creating intuitive, 
            user-centered digital experiences 💖 With over 5 years of experience in the industry, 
            I've worked on everything from small business websites to large-scale enterprise applications.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            My approach combines technical expertise with creative problem-solving, ensuring that 
            every project not only works flawlessly but also delights users with its design and functionality ✨
          </p>
          <p className="text-lg text-gray-600">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source 
            projects, or sharing my knowledge through technical writing and mentoring 🌟
          </p>
        </div>
      </div>
    </section>
  );
}
