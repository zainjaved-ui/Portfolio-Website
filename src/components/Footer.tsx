import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-surface border-t border-border py-12'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-4 md:mb-0'>
            <h3 className='text-xl font-bold text-primary mb-2'>Portfolio</h3>
            <p className='text-muted-foreground'>© {currentYear} Your Name. All rights reserved.</p>
          </div>

          <div className='flex space-x-6'>
            <a href='https://github.com/zainjaved-ui' target='_blank' rel='noopener noreferrer' className='text-muted-foreground hover:text-primary transition-colors duration-200'>
              <Github className='w-6 h-6' />
            </a>
            <a href='https://www.linkedin.com/in/zain-javed-514733274/' target='_blank' rel='noopener noreferrer' className='text-muted-foreground hover:text-primary transition-colors duration-200'>
              <Linkedin className='w-6 h-6' />
            </a>
            <a href='mailto:zainjaved1965@gmail.com' className='text-muted-foreground hover:text-primary transition-colors duration-200'>
              <Mail className='w-6 h-6' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
