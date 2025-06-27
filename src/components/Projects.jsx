import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Button } from '@/components/ui/button.jsx';
import { ExternalLink, Github, Eye, Brain, Shield, Calendar, BarChart, Database, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Aspect-Based Sentiment Analysis on IMDB Reviews',
      description: 'Advanced machine learning project analyzing sentiment in movie reviews with aspect-based classification. Implemented natural language processing techniques to identify specific aspects of movies and their associated sentiments.',
      technologies: ['Python', 'NLP', 'Machine Learning', 'IMDB API', 'Scikit-learn', 'NLTK'],
      category: 'Machine Learning',
      icon: <Brain className="h-6 w-6" />,
      features: [
        'Aspect extraction from movie reviews',
        'Sentiment classification per aspect',
        'Data preprocessing and feature engineering',
        'Model evaluation and performance metrics'
      ],
      status: 'Completed'
    },
    {
      title: 'PSI-based Password Manager',
      description: 'Secure password management system using Private Set Intersection (PSI) technology. Built with Flask and FastAPI, integrated with OpenMined for privacy-preserving operations.',
      technologies: ['Flask', 'FastAPI', 'OpenMined', 'Python', 'Cryptography', 'SQLite'],
      category: 'Security',
      icon: <Shield className="h-6 w-6" />,
      features: [
        'Private Set Intersection implementation',
        'Encrypted password storage',
        'RESTful API endpoints',
        'Privacy-preserving authentication',
        'Secure key management'
      ],
      status: 'Completed'
    },
    {
      title: 'Doctor/Patient Appointment System',
      description: 'Comprehensive healthcare management system deployed on AWS. Features appointment scheduling, patient records management, and doctor availability tracking with secure authentication.',
      technologies: ['PHP', 'AWS', 'MySQL', 'Bootstrap', 'jQuery'],
      category: 'Web Application',
      icon: <Calendar className="h-6 w-6" />,
      features: [
        'Appointment scheduling system',
        'Patient and doctor dashboards',
        'Medical records management',
        'AWS cloud deployment'
      ],
      status: 'Completed'
    },
    {
      title: 'FIFA Sentiment Analysis',
      description: 'Data analysis project examining public sentiment around FIFA events using social media data. Created interactive visualizations and dashboards using Python and Tableau.',
      technologies: ['Python', 'Tableau', 'Pandas', 'Twitter API', 'Data Visualization', 'Sentiment Analysis'],
      category: 'Data Analytics',
      icon: <BarChart className="h-6 w-6" />,
      features: [
        'Social media data collection',
        'Sentiment analysis algorithms',
        'Interactive Tableau dashboards',
        'Trend analysis and insights',
        'Real-time data processing'
      ],
      status: 'Completed'
    },
    {
      title: 'Big Data Pipeline',
      description: 'Scalable data processing pipeline built with Hadoop ecosystem. Handles large-scale data ingestion, processing, and analytics using Spark and Hive for distributed computing.',
      technologies: ['Hadoop', 'Spark', 'Hive', 'Python', 'Scala', 'HDFS'],
      category: 'Big Data',
      icon: <Database className="h-6 w-6" />,
      features: [
        'Distributed data processing',
        'ETL pipeline implementation',
        'Real-time data streaming',
        'Data warehouse integration',
        'Performance optimization'
      ],
      status: 'Completed'
    },
    {
      title: 'Shift Grabber App',
      description: 'Console application for shift management and scheduling. Built with PHP, allowing driver to pick shifts efficiently.',
      technologies: ['PHP'],
      category: 'Console Application',
      icon: <Smartphone className="h-6 w-6" />,
      features: [
        'Shift scheduling interface',
        'Employee availability tracking',
        'Real-time notifications',
        'Mobile-responsive design',
        'Admin management panel'
      ],
      status: 'Completed'
    }
  ];

  const categories = ['All', 'Machine Learning', 'Security', 'Web Application', 'Data Analytics', 'Big Data'];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical projects spanning machine learning, web development, and data analytics
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                size="sm"
                className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-primary">
                      {project.icon}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold mb-2">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent>
                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-xs text-muted-foreground">
                          +{project.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <Eye className="h-3 w-3 mr-1" />
                      View Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button>
                  </div>

                  {/* Status */}
                  <div className="mt-4 flex items-center justify-between">
                    <Badge variant="default" className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {project.status}
                    </Badge>
                    <Button variant="ghost" size="sm" className="text-xs p-0 h-auto">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Project Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Technologies Used</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <div className="text-muted-foreground">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

