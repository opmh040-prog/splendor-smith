import { Github, Twitter, MessageCircle, Mail, Heart, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                <Gamepad2 className="h-4 w-4 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-heading font-bold">GameBlog</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Level up your coding skills with our gaming-inspired developer community. 
              Share knowledge, complete quests, and unlock achievements together.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <MessageCircle className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-heading font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="/posts" className="text-muted-foreground hover:text-primary transition-colors">All Posts</a></li>
              <li><a href="/categories" className="text-muted-foreground hover:text-primary transition-colors">Categories</a></li>
              <li><a href="/authors" className="text-muted-foreground hover:text-primary transition-colors">Authors</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-sm font-heading font-semibold">Popular Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/category/react" className="text-muted-foreground hover:text-primary transition-colors">React</a></li>
              <li><a href="/category/typescript" className="text-muted-foreground hover:text-primary transition-colors">TypeScript</a></li>
              <li><a href="/category/nodejs" className="text-muted-foreground hover:text-primary transition-colors">Node.js</a></li>
              <li><a href="/category/css" className="text-muted-foreground hover:text-primary transition-colors">CSS</a></li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="text-sm font-heading font-semibold">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/write" className="text-muted-foreground hover:text-primary transition-colors">Write for Us</a></li>
              <li><a href="/guidelines" className="text-muted-foreground hover:text-primary transition-colors">Guidelines</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 GameBlog. Built with{" "}
            <Heart className="h-4 w-4 inline text-red-500" />{" "}
            by developers, for developers.
          </p>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;