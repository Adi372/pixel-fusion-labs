
import React from 'react';

const TechStack = () => {
  const technologies = [
    { name: "React", category: "Frontend", color: "from-blue-400 to-blue-600" },
    { name: "Node.js", category: "Backend", color: "from-green-400 to-green-600" },
    { name: "TypeScript", category: "Language", color: "from-blue-500 to-blue-700" },
    { name: "Next.js", category: "Framework", color: "from-gray-700 to-gray-900" },
    { name: "Python", category: "Backend", color: "from-yellow-400 to-yellow-600" },
    { name: "AWS", category: "Cloud", color: "from-orange-400 to-orange-600" },
    { name: "Docker", category: "DevOps", color: "from-blue-400 to-blue-700" },
    { name: "PostgreSQL", category: "Database", color: "from-blue-600 to-blue-800" },
    { name: "MongoDB", category: "Database", color: "from-green-500 to-green-700" },
    { name: "Redis", category: "Cache", color: "from-red-400 to-red-600" },
    { name: "GraphQL", category: "API", color: "from-pink-400 to-pink-600" },
    { name: "Kubernetes", category: "DevOps", color: "from-blue-500 to-purple-600" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30 mb-6">
            <span className="text-blue-300 text-sm font-medium">Technology Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cutting-Edge Technologies
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We leverage the most advanced and reliable technologies to build scalable, 
            secure, and high-performance web solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="group relative p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:scale-105 hover:bg-slate-800/80"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
              <p className="text-sm text-slate-400">{tech.category}</p>
              
              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-300 text-lg mb-8">
            And many more technologies to meet your specific requirements
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Microservices", "CI/CD", "Agile Development", "Cloud-Native", "API-First"].map((badge, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
