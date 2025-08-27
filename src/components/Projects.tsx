import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'iNoteBook',
      description:
        '📒 iNotebook - A MERN stack notes app built with React, Express.js, and MongoDB. Includes user authentication (JWT), secure APIs, and CRUD operations for managing personal notes..',
      technologies: ['React', 'Bootstrap', 'Mongodb', 'Express.js'],
      githubUrl: 'https://github.com/zainjaved-ui/INoteBook',
      liveUrl: 'https://your-weather-demo.com',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500&h=300&fit=crop',
    },
    {
      id: 2,
      title: 'Job website',
      description:
        'A responsive Job Portal website built with React.js, featuring real-time job listings fetched from an external API. This project highlights skills in React, API integration, and modern web development practices.',
      technologies: ['React', 'Bootstrap', 'Job API'],
      githubUrl: 'https://github.com/zainjaved-ui/Job-Portal-website',
      liveUrl: ' https://zainjaved-ui.github.io/Job-Portal-website/',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&h=300&fit=crop',
    },
    {
      id: 3,
      title: 'Face Recognization',
      description:
        '🔍 Face Detection project built in Python using FaceNet and MTCNN for accurate facial recognition. Implemented and trained a custom Convolutional Neural Network (CNN) model on my own dataset to detect and classify faces. The project demonstrates dataset preprocessing, model training, and real-time face detection.',
      technologies: ['Python', 'Mtcn', 'FaceNet', 'CNN'],
      githubUrl: 'https://github.com/zainjaved-ui/Face-Recognization',
      liveUrl: 'https://your-task-manager-demo.com',
      image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&h=300&fit=crop',
    },
    {
      id: 4,
      title: 'Student Managment',
      description:
        'A simple PHP CRUD (Create, Read, Update, Delete) application that demonstrates basic database operations using PHP and MySQL. Includes functionality to add, view, edit, and delete records with a clean and minimal interface.',
      technologies: ['Php', 'Sql'],
      githubUrl: 'https://github.com/zainjaved-ui/PHP-CRUD-OPERATION',
      liveUrl: 'https://your-task-manager-demo.com',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&h=300&fit=crop',
    },
    {
      id: 5,
      title: 'News Website',
      description:
        'A React-based news website that fetches and displays the latest news articles using a third-party News API. Includes categorized news sections, dynamic rendering, and responsive design for a better user experience.',
      technologies: ['React', 'Bootstrap', 'News API'],
      githubUrl: 'https://github.com/zainjaved-ui/News-Website-React-API',
      liveUrl: 'https://your-ecommerce-demo.com',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&h=300&fit=crop',
    },
  ];

  // State for showing more projects
  const [showAll, setShowAll] = useState(false);

  // Decide which projects to display
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id='projects' className='py-20 bg-surface'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16 animate-fade-in'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 text-foreground'>Featured Projects</h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Here are some of my recent projects that showcase my skills in web development and AI integration.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {displayedProjects.map((project, index) => (
            <Card
              key={project.id}
              className='gradient-card border-0 shadow-card hover-lift overflow-hidden animate-slide-up'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className='aspect-video overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
                />
              </div>

              <div className='p-6'>
                <h3 className='text-2xl font-bold mb-3 text-foreground'>{project.title}</h3>
                <p className='text-muted-foreground mb-4 leading-relaxed'>{project.description}</p>

                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='flex flex-col sm:flex-row gap-3'>
                  <Button
                    asChild
                    variant='outline'
                    className='flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  >
                    <a href={project.githubUrl} target='_blank' rel='noopener noreferrer'>
                      <Github className='w-4 h-4 mr-2' />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    asChild
                    className='flex-1 bg-gradient-primary hover:shadow-glow text-primary-foreground'
                  >
                    <a href={project.liveUrl} target='_blank' rel='noopener noreferrer'>
                      <ExternalLink className='w-4 h-4 mr-2' />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && projects.length > 4 && (
          <div className='text-center mt-12'>
            <Button
              onClick={() => setShowAll(true)}
              className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-md'
            >
              Show More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
