import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="hero-text">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Kedar Sainath Joshi</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light">
            CS Undergraduate | Full-Stack & ML Developer
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Ambitious and results-driven Computer Science undergraduate at BMSCE with hands-on experience 
            in full-stack development and machine learning.
          </p>
        </div>
        
        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium"
            onClick={() => window.open('https://drive.google.com/file/d/1vlUwNK3DS9RDiB9kM0cbNoAlAWE4xK8R/view?usp=sharing', '_blank')}
          >
            View Resume
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-border hover:bg-secondary text-foreground px-8 py-3 text-lg font-medium"
            onClick={scrollToProjects}
          >
            Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
