import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Calendar, Award, Code } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Full-Stack Developer',
    'System Architect', 
    'Data Engineer',
    'Scrum Master',
    'IT Professional'
  ];

  // Rotate through roles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    window.open('mailto:hammxah@gmail.com?subject=Professional Inquiry&body=Hi Hamza,%0D%0A%0D%0AI came across your portfolio and would like to discuss...', '_blank');
  };

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      href: 'https://github.com/hammxah',
      label: 'View GitHub Profile',
      color: 'hover:text-gray-900 dark:hover:text-gray-100'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      href: 'https://linkedin.com/in/hammxah',
      label: 'Connect on LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      href: 'mailto:hammxah@email.com',
      label: 'Send Email',
      color: 'hover:text-green-600'
    }
  ];

  const achievements = [
    {
      icon: <Calendar className="h-5 w-5" />,
      text: '4+ Years Experience',
      color: 'text-blue-600'
    },
    {
      icon: <Award className="h-5 w-5" />,
      text: 'Master\'s in IT',
      color: 'text-purple-600'
    },
    {
      icon: <Code className="h-5 w-5" />,
      text: '10+ Technologies',
      color: 'text-green-600'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      text: 'Remote Ready',
      color: 'text-orange-600'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-primary/20 rounded-full animate-bounce`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Enhanced Profile Section */}
          <div className="mb-8 flex flex-col items-center">
            <div className="relative mb-6">
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-primary via-accent to-primary p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-5xl font-bold text-primary-foreground shadow-2xl">
                  HF
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center border-4 border-background animate-bounce">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            
            {/* Achievement Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 px-3 py-2 bg-background/50 backdrop-blur-sm rounded-full border border-border hover:scale-105 transition-transform duration-200"
                >
                  <span className={achievement.color}>{achievement.icon}</span>
                  <span className="text-sm font-medium text-foreground">{achievement.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-300% leading-tight">
              Hamza Farrukh
            </h1>
            
            {/* Dynamic Role Display */}
            <div className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-4 h-12 flex items-center justify-center">
              <span className="inline-block">
                <span className="text-foreground font-semibold"></span>
                <span 
                  key={currentRole}
                  className="text-primary font-bold animate-in slide-in-from-bottom-2 duration-500"
                >
                  {roles[currentRole]}
                </span>
              </span>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-2">
              International IT Graduate
            </p>
          </div>

          {/* Enhanced Bio */}
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              Transforming complex business challenges into elegant digital solutions through 
              <span className="text-primary font-semibold"> innovative web development</span>, 
              <span className="text-accent font-semibold"> scalable system architecture</span>, and 
              <span className="text-primary font-semibold"> data-driven insights</span>.
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              With 3+ years of hands-on experience across diverse industries, I specialize in building 
              robust full-stack applications, leading agile development teams, and implementing cutting-edge 
              technologies that drive business growth and user engagement.
            </p>
          </div>

          {/* Enhanced Experience Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium mb-10 hover:bg-primary/20 transition-colors duration-300">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-primary rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-lg font-semibold">Available for New Opportunities</span>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection('#projects')}
              className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
            >
              <span>Explore My Work</span>
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={handleContactClick}
              className="text-lg px-8 py-4 border-2 hover:bg-accent hover:border-accent hover:text-accent-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
            >
              <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Let's Connect</span>
            </Button>
            
            <Button
              variant="ghost"
              size="lg"
              onClick={() => scrollToSection('#about')}
              className="text-lg px-8 py-4 hover:bg-muted group"
            >
              <span>Learn More</span>
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-background/50 backdrop-blur-sm border border-border rounded-full hover:bg-accent hover:scale-110 transition-all duration-300 group ${social.color}`}
                title={social.label}
              >
                <div className="group-hover:rotate-12 transition-transform duration-300">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="animate-bounce">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection('#about')}
              className="hover:bg-accent rounded-full p-3 group"
              title="Scroll to learn more"
            >
              <ArrowDown className="h-6 w-6 group-hover:translate-y-1 transition-transform duration-300" />
            </Button>
            <p className="text-sm text-muted-foreground mt-2">Discover More</p>
          </div>
        </div>
      </div>

      {/* Add CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
        .bg-300\\% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  );
};

export default Hero;

