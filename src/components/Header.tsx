import { Search, Menu, PenTool, BookOpen, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                <Palette className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-heading font-bold bg-gradient-primary bg-clip-text text-transparent">
                  ArtBlog
                </h1>
                <span className="text-xs text-muted-foreground">Create & Inspire</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Home
            </a>
            <a href="/posts" className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth">
              All Posts
            </a>
            <a href="/categories" className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth">
              Categories
            </a>
            <a href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth">
              About
            </a>
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search posts..."
                className="w-64 pl-10 bg-muted/50 border-muted focus:border-primary"
              />
            </div>
            
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <BookOpen className="h-4 w-4" />
              Read
            </Button>
            
            <Button variant="default" size="sm">
              <PenTool className="h-4 w-4" />
              Create
            </Button>

            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;