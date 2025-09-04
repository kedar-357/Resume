import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Code, Database, Brain, Cloud } from 'lucide-react';

const Skills = () => {
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

  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      skills: ["C++", "Java", "Python"],
      color: "text-blue-600"
    },
    {
      icon: Database,
      title: "Web Development",
      skills: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "SQL"],
      color: "text-green-600"
    },
    {
      icon: Brain,
      title: "ML/AI",
      skills: ["PyTorch", "Machine Learning", "Data Science", "GenAI"],
      color: "text-purple-600"
    },
    {
      icon: Cloud,
      title: "Other",
      skills: ["Cloud Architecture", "Git"],
      color: "text-orange-600"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div ref={sectionRef} className="fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            Technical <span className="text-primary">Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="p-6 bg-card border border-border rounded-2xl hover:shadow-lg transition-all duration-300">
                  <div className="text-center">
                    <div className="mb-4">
                      <IconComponent className={`h-12 w-12 mx-auto ${category.color}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {category.title}
                    </h3>
                    
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="inline-block bg-secondary px-3 py-1 rounded-full text-sm text-foreground font-medium m-1"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;