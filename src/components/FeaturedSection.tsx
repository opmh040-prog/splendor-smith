import { Zap, TrendingUp, Award } from "lucide-react";
import BlogCard from "./BlogCard";

// Mock data for featured posts
const featuredPosts = [
  {
    id: "1",
    title: "Building a Real-Time Chat App with React and Socket.io",
    excerpt: "Learn how to create an epic multiplayer chat experience with real-time messaging, user authentication, and gaming-style features.",
    author: "CodeMaster",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    category: "React",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop",
    likes: 234,
    comments: 45,
    featured: true
  },
  {
    id: "2",
    title: "Mastering TypeScript: Advanced Patterns for Game Development",
    excerpt: "Dive deep into TypeScript's advanced features to build robust game engines and interactive applications with perfect type safety.",
    author: "TypeScript Hero",
    publishDate: "2024-01-12",
    readTime: "12 min read",
    category: "TypeScript",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop",
    likes: 189,
    comments: 32,
    featured: true
  },
  {
    id: "3",
    title: "CSS Grid: Creating Epic Game Layouts",
    excerpt: "Master CSS Grid to create stunning game interfaces, responsive dashboards, and pixel-perfect layouts that wow your users.",
    author: "LayoutLegend",
    publishDate: "2024-01-10",
    readTime: "6 min read",
    category: "CSS",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
    likes: 156,
    comments: 28
  }
];

const FeaturedSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-accent rounded-full px-4 py-2 text-accent-foreground">
            <Zap className="h-4 w-4" />
            <span className="text-sm font-medium">Epic Content</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Featured
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-3">
              Quests
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked tutorials and guides from our community's finest developers. 
            Level up your skills with these legendary posts.
          </p>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Featured Post */}
          <div className="lg:col-span-2">
            <BlogCard post={featuredPosts[0]} variant="featured" />
          </div>
          
          {/* Secondary Featured Posts */}
          <div className="space-y-6">
            {featuredPosts.slice(1).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-card rounded-2xl p-8 border border-accent/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary">1.2M+</h3>
              <p className="text-muted-foreground">Code Lines Written</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary">500+</h3>
              <p className="text-muted-foreground">Achievements Unlocked</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary">99.9%</h3>
              <p className="text-muted-foreground">Epic Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;