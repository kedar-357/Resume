import { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
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

  const projects = [
    {
      title: "Marine Debris Detection",
      description: "Implemented a deep learning pipeline combining YOLOv3 and ResNet50 to detect and localize underwater marine debris, achieving high accuracy in real-time environmental analysis.",
      category: 'ml' as const,
      imageUrl: "/marine-debris-detection.jpg"
    },
    {
      title: "Skin Cancer Detection and Classification",
      description: "Implemented a PyTorch-based ML model that allows users to upload skin images and get classification results immediately.",
      category: 'ml' as const,
      imageUrl: "/SkinC.png"
    },
    {
      title: "Job Tracker Website",
      description: "A full-stack job tracking application that enables users to manage job applications, view analytics, and receive AI-generated resume feedback. Built with the MERN stack.",
      liveUrl: "https://job-wise.online",
      imageUrl: "/job2.png",
      isDeployed: true,
      category: 'fullstack' as const
    },
    {
      title: "Excellytics (Zidio Internship Project)",
      description: "A full-stack MERN application that lets users upload Excel files, organize them as projects, and visualize data with export functionality in JPG/PDF formats. Deployed with frontend on Vercel and backend on Render.",
      liveUrl: "https://excellytics-psi.vercel.app/",
      imageUrl: "/excel.png",
      isDeployed: true,
      category: 'fullstack' as const
    },
    {
      title: "BMSCE ACM CHAPTER WEBSITE",
      description: "Developed the official website for BMSCE ACM Chapter using React and Tailwind CSS, focusing on creating an appealing, user-friendly, and interactive UI.",
      githubUrl: "https://github.com/acm-bmsce/BMSCE-ACM-STUDENT-CHAPTER-WEBSITE",
      imageUrl: "/acm.png",
      category: 'frontend' as const
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div ref={sectionRef} className="fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            Featured <span className="text-primary">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;