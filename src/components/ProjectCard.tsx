import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  isDeployed?: boolean;
  category: 'ml' | 'fullstack' | 'frontend' | 'other';
  imageUrl?: string;
}

const ProjectCard = ({ title, description, liveUrl, githubUrl, isDeployed, category, imageUrl }: ProjectCardProps) => {
  const getCategoryColor = () => {
    switch (category) {
      case 'ml':
        return 'bg-blue-100 text-blue-800';
      case 'fullstack':
        return 'bg-green-100 text-green-800';
      case 'frontend':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryLabel = () => {
    switch (category) {
      case 'ml':
        return 'Machine Learning';
      case 'fullstack':
        return 'Full Stack';
      case 'frontend':
        return 'Frontend';
      default:
        return 'Other';
    }
  };

  return (
    <Card className="project-card p-6 bg-card border border-border rounded-2xl">
      {/* Project Image */}
      <div className="w-full h-48 bg-muted rounded-xl mb-6 overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={`${title} screenshot`}
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error('Image failed to load:', imageUrl);
              e.currentTarget.style.display = 'none';
            }}
            onLoad={() => console.log('Image loaded successfully:', imageUrl)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">🖼️</div>
              <p className="text-sm text-muted-foreground">Project Screenshot</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Category Badge */}
      <div className="mb-4">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor()}`}>
          {getCategoryLabel()}
          {isDeployed && <span className="ml-2">✅</span>}
        </span>
      </div>
      
      {/* Project Info */}
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
      
      {/* Action Buttons */}
      <div className="flex gap-3">
        {liveUrl && (
          <Button 
            variant="default" 
            size="sm" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => window.open(liveUrl, '_blank')}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </Button>
        )}
        
        <Button 
          variant="outline" 
          size="sm" 
          className="border-border hover:bg-secondary"
          onClick={() => window.open('https://github.com/kedar-357', '_blank')}
        >
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Button>
      </div>
    </Card>
  );
};

export default ProjectCard;