import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='hero' className='min-h-screen flex items-center justify-center relative overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-hero'></div>

      {/* Floating elements */}
      <div className='absolute top-20 left-20 w-20 h-20 bg-primary/10 rounded-full animate-float'></div>
      <div className='absolute top-40 right-32 w-16 h-16 bg-accent/10 rounded-full animate-float' style={{ animationDelay: '2s' }}></div>
      <div className='absolute bottom-32 left-1/4 w-12 h-12 bg-primary/10 rounded-full animate-float' style={{ animationDelay: '4s' }}></div>

      <div className='container mx-auto px-6 text-center relative z-10'>
        <div className='animate-fade-in'>
          <h1 className='text-5xl md:text-7xl font-bold mb-6' style={{ marginTop: '5.25rem' }}>
            <span className='text-foreground '>Hi, I'm </span>
            <span className='bg-gradient-primary bg-clip-text text-transparent'>Zain Javed</span>
          </h1>

          <p className='text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto'>Junior Web Developer | AI Enthusiast</p>

          <p className='text-lg text-muted-foreground mb-12 max-w-2xl mx-auto'>
            Passionate about creating beautiful, functional web applications and exploring the possibilities of artificial intelligence. Let's build something amazing together.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              onClick={() => scrollToSection('resume')}
              className='bg-gradient-primary hover:shadow-glow text-primary-foreground px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300'
            >
              View Resume
            </Button>
            <Button
              variant='outline'
              onClick={() => scrollToSection('projects')}
              className=' mb-5 sm:mb-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300'
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
