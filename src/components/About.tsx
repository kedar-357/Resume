import { useEffect, useRef } from 'react';

const About = () => {
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div ref={sectionRef} className="fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            About <span className="text-primary">Me</span>
          </h2>
          
          <div className="bg-card rounded-2xl p-8 sm:p-12 shadow-sm border border-border">
            <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">
              I am currently pursuing my <span className="text-foreground font-semibold">B.E. in Computer Science and Engineering</span> at 
              <span className="text-primary font-semibold"> BMS College of Engineering, Bengaluru</span>. 
              With a strong academic foundation and practical experience, I am passionate about developing solutions 
              in <span className="text-foreground font-semibold">full-stack web development</span> and 
              <span className="text-foreground font-semibold"> machine learning</span>.
            </p>
            
            <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground mt-6">
              My interests include <span className="text-primary font-semibold">Data Science</span>, 
              <span className="text-primary font-semibold"> Generative AI</span>, and 
              <span className="text-primary font-semibold"> Cloud Architecture</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;