import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Calendar, MapPin } from 'lucide-react';

const Resume = () => {
  const experiences = [
    {
      title: 'Frontend Developer Inern',
      company: '',
      location: 'Islamabd',
      period: 'June -August 2025',
      description: 'Developing responsive web applications using React. Collaborated with design team for pixel-perfect UI and integrated APIs.'
    },

  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'PMAS ARID UNIVERSITY',
      location: 'Rawalpndi, Pakistan',
      period: '2022 - CURRENT',
      gpa: '3.5/4.0'
    }
  ];

  return (
    <section id="resume" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Resume
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Download my complete resume or explore my professional journey below.
          </p>
          
          <Button 
            asChild
            className="bg-gradient-primary hover:shadow-glow text-primary-foreground px-8 py-6 text-lg font-semibold rounded-lg"
          >
            <a href="/resume.pdf" download="resume.pdf">
              <Download className="w-5 h-5 mr-2" />
              Download Resume (PDF)
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold mb-8 text-foreground flex items-center">
              <FileText className="w-8 h-8 mr-3 text-primary" />
              Experience
            </h3>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="gradient-card p-6 shadow-card hover-lift">
                  <h4 className="text-xl font-semibold text-foreground mb-2">{exp.title}</h4>
                  <div className="text-primary font-medium mb-1">{exp.company}</div>
                  <div className="flex items-center text-muted-foreground text-sm mb-3 space-x-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold mb-8 text-foreground flex items-center">
              <FileText className="w-8 h-8 mr-3 text-primary" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="gradient-card p-6 shadow-card hover-lift">
                  <h4 className="text-xl font-semibold text-foreground mb-2">{edu.degree}</h4>
                  <div className="text-primary font-medium mb-1">{edu.school}</div>
                  <div className="flex items-center text-muted-foreground text-sm mb-3 space-x-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.period}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {edu.location}
                    </span>
                  </div>
                  <div className="text-accent font-medium">GPA: {edu.gpa}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;