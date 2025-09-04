import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);


  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kedar.cs22@bmsce.ac.in",
      href: "mailto:kedar.cs22@bmsce.ac.in"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "7338439882",
      href: "tel:7338439882"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/kedar-sainath-joshi-1aaa6529a",
      href: "https://linkedin.com/in/kedar-sainath-joshi-1aaa6529a"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div ref={sectionRef} className="fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            Get in <span className="text-primary">Touch</span>
          </h2>
          
          <div className="flex justify-center">
            <div className="max-w-2xl w-full">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Let's Connect
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Card key={index} className="p-6 bg-card border border-border rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <a
                            href={item.href}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                          >
                            {item.value}
                          </a>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;