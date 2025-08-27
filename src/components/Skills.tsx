import { Code, Database, Palette, Brain, Globe, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: ['React','Python', 'TypeScript', 'Bootstrap']
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: ['Node.js', 'FastAPI', 'MySQL', 'MongoDB',]
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      skills: ['OpenAI API', 'TensorFlow', 'PyTorch', 'MTCN', ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise in modern web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="gradient-card p-6 rounded-lg shadow-card hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="px-3 py-2 bg-surface rounded-md text-muted-foreground hover:bg-primary/5 hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Problem Solving',
              'Team Collaboration',
              'Agile Development',
              'Code Review',
              'Technical Documentation',
              'Performance Optimization',
              'Security Best Practices',
              'Continuous Learning'
            ].map((competency, index) => (
              <span 
                key={competency}
                className="px-4 py-2 bg-accent/10 text-accent rounded-full font-medium hover:bg-accent/20 transition-colors duration-200 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {competency}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;