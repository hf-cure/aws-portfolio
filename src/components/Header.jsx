import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Menu, X, Github, Linkedin, Mail, Download, Moon, Sun, ExternalLink } from 'lucide-react';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleResumeDownload = () => {
    // Download the actual PDF resume
    const link = document.createElement('a');
    link.href = '/Hamza_Farrukh_Resume.pdf';
    link.download = 'Hamza_Farrukh_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: 'https://github.com/hammxah',
      label: 'GitHub Profile'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: 'https://linkedin.com/in/hammxah',
      label: 'LinkedIn Profile'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: 'mailto:hammxah@gmail.com',
      label: 'Send Email'
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-lg' 
        : 'bg-background/80 backdrop-blur-md border-b border-border'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
              HF
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-primary">Hamza Farrukh</div>
              <div className="text-xs text-muted-foreground">IT Professional</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative text-foreground hover:text-primary transition-colors duration-200 font-medium group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="hover:bg-accent transition-colors duration-200"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleResumeDownload}
              className="flex items-center space-x-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </Button>
            
            <div className="flex items-center space-x-2 border-l border-border pl-4">
              {socialLinks.map((social, index) => (
                <Button 
                  key={index}
                  variant="ghost" 
                  size="icon" 
                  className="hover:bg-accent hover:scale-110 transition-all duration-200"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="hover:bg-accent"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-accent"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border animate-in slide-in-from-top-2 duration-300">
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground hover:text-primary transition-colors duration-200 py-2 px-2 rounded-md hover:bg-accent"
                >
                  {item.name}
                </button>
              ))}
            </nav>
            
            <div className="flex flex-col space-y-4 mt-6 pt-4 border-t border-border">
              <Button
                variant="outline"
                size="sm"
                onClick={handleResumeDownload}
                className="flex items-center justify-center space-x-2 w-full"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </Button>
              
              <div className="flex items-center justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <Button 
                    key={index}
                    variant="ghost" 
                    size="icon" 
                    className="hover:bg-accent hover:scale-110 transition-all duration-200"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

