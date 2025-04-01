
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Contact Me</h1>
              <p className="text-xl text-muted-foreground">
                Have a question or want to work together? Feel free to get in touch.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-serif font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Whether you have a project in mind, a question about my work, or just want to say hello, 
                  I'd love to hear from you. Fill out the form or use the contact information below to get in touch.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Email</h3>
                      <p className="text-muted-foreground">hello@portfolio.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-4">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Location</h3>
                      <p className="text-muted-foreground">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-bold text-lg mb-4">Connect With Me</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-portfolio-navy text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                      <Github size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-portfolio-navy text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-portfolio-navy text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                      <Twitter size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-portfolio-navy text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-serif font-bold mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message <Send size={16} className="ml-2" />
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              I'm currently available for freelance work. If you have a project 
              that needs some creative touch, I'd love to help bring your ideas to life.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View My Work
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
