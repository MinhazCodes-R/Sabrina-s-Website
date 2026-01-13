import { Code2, Palette, Smartphone } from 'lucide-react';

export function Skills() {
  const skills = [
    { icon: Code2, name: 'Web Development', description: 'React, TypeScript, Node.js', color: 'bg-pink-100 text-pink-600' },
    { icon: Palette, name: 'UI/UX Design', description: 'Figma, Adobe XD, Sketch', color: 'bg-purple-100 text-purple-600' },
    { icon: Smartphone, name: 'Mobile Development', description: 'React Native, Flutter', color: 'bg-blue-100 text-blue-600' },
  ];

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl mb-12 text-center text-gray-900">Skills & Expertise 🚀</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl hover:scale-105 transition-all border-4 border-purple-100"
            >
              <div className={`w-16 h-16 ${skill.color} rounded-2xl flex items-center justify-center mb-4`}>
                <skill.icon size={28} />
              </div>
              <h3 className="text-xl mb-2 text-gray-900">{skill.name}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
