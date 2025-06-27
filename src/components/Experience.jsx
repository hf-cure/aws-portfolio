import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'CureMD',
      position: 'Software Developer & Scrum Master',
      duration: '2021 - 2023',
      location: 'On-site',
      description: [
        'Led ATS (Applicant Tracking System) development using PHP Laravel framework',
        'Implemented CI/CD pipelines and automated deployment processes using Azure DevOps',
        'Integrated external APIs including Codility API and Criteria Corp ATS',
        'Acted as Scrum Master for internal development teams, facilitating agile processes',
        'Managed database operations with MySQL and MongoDB for scalable applications',
        'Collaborated with cross-functional teams to deliver high-quality software solutions'
      ],
      technologies: ['PHP Laravel', 'MySQL', 'MongoDB', 'Codility API', 'Criteria Corp CCAT Test', 'Azure DevOps', 'Scrum'],
      type: 'Full-time'
    },
    {
      company: 'Onyxtec',
      position: 'Web Developer',
      duration: '2021 - 2021',
      location: 'On-site',
      description: [
        'Developed and maintained CMS and eCommerce platforms using PHP Laravel',
        'Worked with Magento for enterprise-level eCommerce solutions',
        'Implemented custom features and modules for client-specific requirements',
        'Optimized application performance and database queries',
        'Collaborated with design teams to implement responsive user interfaces',
        'Provided technical support and maintenance for existing applications'
      ],
      technologies: ['PHP Laravel', 'Magento', 'MySQL', 'JavaScript', 'HTML/CSS', 'Git'],
      type: 'Full-time'
    },
    {
      company: 'Tetralogix',
      position: 'Jr. Web Developer',
      duration: '2019 - 2020',
      location: 'On-site',
      description: [
        'Built robust e-commerce backend features using PHP Laravel framework',
        'Integrated Shopify API for seamless e-commerce functionality',
        'Developed RESTful APIs for frontend and mobile applications',
        'Implemented secure payment processing and order management systems',
        'Worked on inventory management and product catalog systems',
        'Participated in code reviews and maintained coding standards'
      ],
      technologies: ['PHP Laravel', 'Shopify API', 'MySQL', 'REST APIs', 'Git', 'Composer'],
      type: 'Full-time'
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Work Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A journey through my professional career and the impact I've made
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <CardTitle className="text-xl font-bold text-primary mb-1">
                              {exp.position}
                            </CardTitle>
                            <div className="flex items-center space-x-2 text-lg font-semibold mb-2">
                              <Building className="h-5 w-5 text-muted-foreground" />
                              <span>{exp.company}</span>
                            </div>
                          </div>
                          <Badge variant="outline" className="ml-2">
                            {exp.type}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <ul className="space-y-2 mb-6">
                          {exp.description.map((item, idx) => (
                            <li key={idx} className="text-muted-foreground flex items-start">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div>
                          <h4 className="font-semibold mb-3">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-muted-foreground">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

