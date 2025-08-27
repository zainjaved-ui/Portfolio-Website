import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail, Github, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: "Let's chat directly",
      action: 'Send Message',
      link: "https://wa.me/923225021215?text=Hi! I'd like to discuss a project with you.",
      color: 'text-green-500',
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'zainjaved1965@gmail.com',
      action: 'Send Email',
      link: 'mailto:zainjaved1965@gmail.com?subject=Project Inquiry',
      color: 'text-blue-500',
    },
    {
      icon: Github,
      title: 'GitHub',
      description: 'Check out my code',
      action: 'Visit Profile',
      link: 'https://github.com/zainjaved-ui',
      color: 'text-gray-700',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'Professional network',
      action: 'Connect',
      link: 'https://www.linkedin.com/in/zain-javed-514733274/',
      color: 'text-blue-600',
    },
  ];

  return (
    <section id='contact' className='py-20 bg-background'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16 animate-fade-in'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 text-foreground'>Let's Work Together</h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.</p>
        </div>

        <div className='max-w-4xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'>
            {contactMethods.map((method, index) => (
              <Card key={method.title} className='gradient-card p-6 shadow-card hover-lift animate-slide-up' style={{ animationDelay: `${index * 0.1}s` }}>
                <div className='flex items-start space-x-4'>
                  <div className={`p-3 bg-surface rounded-lg ${method.color}`}>
                    <method.icon className='w-6 h-6' />
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-lg font-semibold text-foreground mb-1'>{method.title}</h3>
                    <p className='text-muted-foreground mb-4 '>{method.description}</p>
                    <Button asChild variant='outline' className='border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full'>
                      <a href={method.link} target='_blank' rel='noopener noreferrer'>
                        {method.action}
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action Card */}
          <Card className='gradient-card p-8 shadow-card text-center animate-fade-in'>
            <div className='mb-6'>
              <MapPin className='w-12 h-12 text-primary mx-auto mb-4' />
              <h3 className='text-2xl font-bold text-foreground mb-2'>Based in Your City</h3>
              <p className='text-muted-foreground'>Available for remote work worldwide</p>
            </div>

            <div className='space-y-4'>
              <p className='text-lg text-foreground font-medium'>Have a project in mind? Let's discuss how we can make it happen.</p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button asChild className='bg-gradient-primary hover:shadow-glow text-primary-foreground px-8 py-3 text-lg font-semibold'>
                  <a href="https://wa.me/923225021215?text=Hi! I have a project I'd like to discuss." target='_blank' rel='noopener noreferrer'>
                    <MessageCircle className='w-5 h-5 mr-2' />
                    Start a Conversation
                  </a>
                </Button>

                <Button asChild variant='outline' className='border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold'>
                  <a href="mailto:zainjaved1965@gmail.com?subject=Project Inquiry&body=Hi! I'm interested in working with you on a project." target='_blank' rel='noopener noreferrer'>
                    <Mail className='w-5 h-5 mr-2' />
                    Send Email
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
