import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx';
import { GraduationCap, BookOpen, Award, Code, Database, Globe, Shield, BarChart, Cloud, Brain } from 'lucide-react';

const Education = () => {
  const courseCategories = [
    {
      id: 'programming',
      name: 'Programming & Development',
      icon: <Code className="h-5 w-5" />,
      courses: [
        {
          name: 'Programming & Data Structures',
          technology: 'Python',
          description: 'Advanced programming concepts, algorithms, and data structure implementation',
          icon: <Code className="h-6 w-6" />
        },
        {
          name: 'Web Development',
          technology: 'HTML, CSS, JS',
          description: 'Frontend and backend web development fundamentals',
          icon: <Globe className="h-6 w-6" />
        },
        {
          name: 'Enterprise Web Development',
          technology: 'AWS',
          description: 'Scalable web applications with cloud-based deployments',
          icon: <Cloud className="h-6 w-6" />
        }
      ]
    },
    {
      id: 'data',
      name: 'Data & Analytics',
      icon: <Database className="h-5 w-5" />,
      courses: [
        {
          name: 'ML Algorithms & Applications',
          technology: 'Python, ML',
          description: 'Machine learning algorithms with Aspect-Based Sentiment Analysis project',
          icon: <Brain className="h-6 w-6" />
        },
        {
          name: 'Information Visualization',
          technology: 'Tableau',
          description: 'Data visualization techniques and dashboard creation',
          icon: <BarChart className="h-6 w-6" />
        },
        {
          name: 'Big Data',
          technology: 'Hadoop, Spark, Hive',
          description: 'Big data processing and distributed computing systems',
          icon: <Database className="h-6 w-6" />
        }
      ]
    },
    {
      id: 'management',
      name: 'Management & Systems',
      icon: <BookOpen className="h-5 w-5" />,
      courses: [
        {
          name: 'System Analysis & Project Management',
          technology: 'MS Project, Gantt Chart, WBS',
          description: 'Project planning, system analysis, and management methodologies',
          icon: <BookOpen className="h-6 w-6" />
        },
        {
          name: 'IT-Enabled Supply Chain',
          technology: 'IoT',
          description: 'Supply chain optimization with IoT integration project',
          icon: <Globe className="h-6 w-6" />
        },
        {
          name: 'Security Essentials, Ethics & Professionalism',
          technology: 'Security',
          description: 'Information security principles and professional ethics',
          icon: <Shield className="h-6 w-6" />
        }
      ]
    }
  ];

  const capstoneProject = {
    title: 'PSI-based Password Manager',
    technologies: ['Flask', 'FastAPI', 'OpenMined'],
    description: 'Developed a secure password manager using Private Set Intersection (PSI) technology, implementing advanced cryptographic techniques for privacy-preserving password management.',
    features: [
      'Private Set Intersection implementation',
      'Secure password storage and retrieval',
      'RESTful API with Flask and FastAPI',
      'Privacy-preserving authentication',
      'Cryptographic security protocols'
    ]
  };

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Academic foundation in Information Technology and Information Systems Development
            </p>
          </div>

          {/* Degree Information */}
          <Card className="mb-12 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold">Master's Degree in Information Technology</CardTitle>
                  <p className="text-lg text-muted-foreground">Major: Information Systems Development</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Comprehensive graduate program focusing on advanced information systems, software development, 
                data analytics, and emerging technologies. The curriculum combines theoretical foundations 
                with practical, hands-on experience in modern IT solutions.
              </p>
              <div className="flex items-center space-x-4">
                <Badge variant="outline" className="flex items-center space-x-2">
                  <Award className="h-4 w-4" />
                  <span>Graduate Degree</span>
                </Badge>
                <Badge variant="outline">Information Systems</Badge>
                <Badge variant="outline">Technology Focus</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Course Categories */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center">Key Coursework</h3>
            <Tabs defaultValue="programming" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                {courseCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="flex items-center space-x-2">
                    {category.icon}
                    <span className="hidden sm:inline">{category.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {courseCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.courses.map((course, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <div className="flex items-start space-x-3">
                            <div className="text-primary mt-1">
                              {course.icon}
                            </div>
                            <div>
                              <CardTitle className="text-lg font-semibold mb-2">
                                {course.name}
                              </CardTitle>
                              <Badge variant="secondary" className="text-xs">
                                {course.technology}
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            {course.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Capstone Project */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Capstone Project</h3>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Award className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold">{capstoneProject.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {capstoneProject.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {capstoneProject.description}
                </p>
                <div>
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {capstoneProject.features.map((feature, index) => (
                      <li key={index} className="text-muted-foreground flex items-start">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

