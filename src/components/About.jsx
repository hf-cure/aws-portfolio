import { Card, CardContent } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { 
  Code, 
  Database, 
  Cloud, 
  Users, 
  GraduationCap, 
  Briefcase,
  Target,
  Lightbulb,
  Rocket,
  Award,
  Globe,
  TrendingUp
} from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Full-Stack Development',
      description: 'Expert in building end-to-end web applications using modern frameworks like Laravel, React, and Flask',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950'
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: 'Data Engineering',
      description: 'Specialized in big data processing, ETL pipelines, and analytics using Hadoop, Spark, and advanced ML algorithms',
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950'
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: 'Cloud & DevOps',
      description: 'Proficient in AWS deployments, Azure DevOps, CI/CD pipelines, and scalable cloud architecture design',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Team Leadership',
      description: 'Experienced Scrum Master with proven track record in leading agile development teams and project delivery',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950'
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: 'Academic Excellence',
      description: 'Master\'s degree in Information Technology with focus on Information Systems Development and emerging technologies',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-950'
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: 'Industry Experience',
      description: 'Nearly 4 years of hands-on experience across healthcare, e-commerce, and enterprise software domains',
      color: 'text-red-600',
      bgColor: 'bg-red-50 dark:bg-red-950'
    }
  ];

  const skills = [
    { category: 'Languages', items: ['PHP', 'JavaScript', 'Python', 'HTML/CSS', 'SQL'] },
    { category: 'Frameworks', items: ['Laravel', 'React', 'Flask', 'FastAPI', 'Bootstrap'] },
    { category: 'Databases', items: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis'] },
    { category: 'Cloud & DevOps', items: ['AWS', 'Azure DevOps', 'Docker', 'CI/CD', 'Git'] },
    { category: 'Data & Analytics', items: ['Hadoop', 'Spark', 'Tableau', 'Machine Learning', 'Big Data'] },
    { category: 'Tools & Methods', items: ['Scrum', 'Agile', 'REST APIs', 'Microservices', 'TDD'] }
  ];

  const achievements = [
    {
      icon: <Target className="h-5 w-5" />,
      title: 'Project Success Rate',
      value: '100%',
      description: 'All projects delivered on time and within scope'
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: 'Team Leadership',
      value: '3+',
      description: 'Years of experience as Scrum Master'
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: 'Global Experience',
      value: 'International',
      description: 'Cross-cultural collaboration and remote work'
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: 'Continuous Growth',
      value: '15+',
      description: 'Technologies mastered and counting'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about creating innovative solutions and driving technological advancement
            </p>
          </div>

          {/* Enhanced Personal Story */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  <Lightbulb className="h-6 w-6 text-primary mr-2" />
                  My Journey
                </h3>
                <p className="text-foreground leading-relaxed mb-4">
                  As an <strong>international IT graduate</strong> with nearly <strong>4 years of industry experience</strong>, 
                  I've had the privilege of working across diverse technological landscapes that have shaped my expertise 
                  in modern software development and system architecture.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  My journey began with a passion for problem-solving and has evolved into comprehensive expertise in 
                  <span className="text-primary font-semibold"> full-stack web development</span>, 
                  <span className="text-accent font-semibold"> scalable system design</span>, and 
                  <span className="text-primary font-semibold"> data-centric applications</span> that drive real business value.
                </p>
                <p className="text-foreground leading-relaxed">
                  Throughout my career, I've contributed to mission-critical systems in healthcare technology, 
                  enterprise e-commerce platforms, and content management solutions, always focusing on delivering 
                  robust, scalable, and user-centric applications.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  <Rocket className="h-6 w-6 text-accent mr-2" />
                  What Drives Me
                </h3>
                <p className="text-foreground leading-relaxed mb-4">
                  I believe in <strong>continuous learning</strong> and staying at the forefront of technology trends. 
                  My academic background in <strong>Information Systems Development</strong>, combined with hands-on 
                  industry experience, allows me to bridge the gap between theoretical knowledge and practical implementation.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  As a <strong>certified Scrum Master</strong>, I've led cross-functional development teams, 
                  implementing agile methodologies that improve delivery speed while maintaining code quality and team collaboration.
                </p>
                <p className="text-foreground leading-relaxed">
                  My expertise spans from building sophisticated backend systems with <strong>PHP Laravel</strong> and 
                  <strong>Python Flask</strong> to creating engaging frontend experiences with <strong>React</strong> and 
                  modern JavaScript frameworks.
                </p>
              </div>
            </div>
          </div>

          {/* Key Highlights Grid */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
              Core Expertise & Specializations
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50"
                >
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${highlight.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className={highlight.color}>
                        {highlight.icon}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {highlight.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
              Professional Achievements
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <span className="text-primary">
                          {achievement.icon}
                        </span>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                      {achievement.value}
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-foreground">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced Skills Section */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
              Technical Skills & Technologies
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Ready to Collaborate?
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                I'm always excited to discuss new opportunities, innovative projects, and potential collaborations. 
                Let's build something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get In Touch
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-200 font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

