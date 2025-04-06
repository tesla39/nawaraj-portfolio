import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon."
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
  return <section id="contact" className="section-padding bg-gradient-to-b from-white to-muted/30 bg-gray-800 py-px my-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-950">
            Let's Work Together
          </h2>
          <p className="max-w-2xl mx-auto text-xl font-semibold text-indigo-800">
            Have a project in mind? Get in touch and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl shadow-md flex flex-col items-center text-center bg-gray-800">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
              <Mail size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-950">Email</h3>
            <p className="text-muted-foreground">codenawaraj@gmail.com</p>
          </div>
          
          <div className="p-6 rounded-xl shadow-md flex flex-col items-center text-center bg-gray-800">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
              <Phone size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-950">Phone</h3>
            <p className="text-muted-foreground">+919818540415 (WhatsApp)</p>
          </div>
          
          <div className="p-6 rounded-xl shadow-md flex flex-col items-center text-center bg-gray-800">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
              <MapPin size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-950">Location</h3>
            <p className="text-muted-foreground">Gurugram, India</p>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-portfolio-navy p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="mb-6">
                Fill out the form and I'll get back to you as soon as possible.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-3" size={18} />
                  <span>codenawaraj@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-3" size={18} />
                  <span>+919818540415</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-3" size={18} />
                  <span>Gurugram, India</span>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 bg-gray-700">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your email" required />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your message" rows={5} required />
                </div>
                
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                  {isSubmitting ? <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span> : <span className="flex items-center">
                      Send Message <Send size={16} className="ml-2" />
                    </span>}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;