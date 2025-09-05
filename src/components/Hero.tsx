import { ArrowRight, Gamepad2, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-primary rounded-full px-6 py-2 text-primary-foreground">
            <Gamepad2 className="h-4 w-4" />
            <span className="text-sm font-medium">Quest Complete: Full-Stack Blog</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
            Level Up Your
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent glow-text">
              Coding Journey
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join thousands of developers sharing knowledge, tutorials, and epic coding adventures. 
            Create, share, and discover amazing content in our gaming-inspired developer community.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
              Start Your Quest
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
              Explore Posts
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 text-2xl md:text-3xl font-heading font-bold text-primary">
                <Star className="h-6 w-6 text-accent" />
                <span>1.2k</span>
              </div>
              <p className="text-sm text-muted-foreground">Epic Posts</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 text-2xl md:text-3xl font-heading font-bold text-primary">
                <Users className="h-6 w-6 text-accent" />
                <span>5.7k</span>
              </div>
              <p className="text-sm text-muted-foreground">Developers</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 text-2xl md:text-3xl font-heading font-bold text-primary">
                <Gamepad2 className="h-6 w-6 text-accent" />
                <span>250</span>
              </div>
              <p className="text-sm text-muted-foreground">Categories</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;