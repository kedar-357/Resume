import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { CalendarDays, MapPin } from 'lucide-react';

const Experience = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div ref={sectionRef} className="fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            Professional <span className="text-primary">Experience</span>
          </h2>
          
          <Card className="p-8 sm:p-12 bg-card border border-border rounded-2xl">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded-lg"></div>
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Web Developer Intern
                </h3>
                
                <h4 className="text-xl text-primary font-semibold mb-4">
                  Zidio Development
                </h4>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    <span>June 2025 – Aug 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Bengaluru</span>
                  </div>
                </div>
                
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Built a full-stack MERN application enabling users to upload Excel files and visualize data.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Implemented export functionality for JPG/PDF.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Deployed frontend on Vercel and backend on Render.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;