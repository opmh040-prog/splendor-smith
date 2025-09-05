import { Paintbrush, TrendingUp, Award } from "lucide-react";
import BlogCard from "./BlogCard";

// Mock data for featured posts
const featuredPosts = [
  {
    id: "1",
    title: "Mastering Digital Watercolor Techniques",
    excerpt: "Discover the secrets of creating stunning digital watercolor paintings with professional techniques and artistic insights.",
    author: "ArtMaestro",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    category: "Digital Art",
    imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=200&fit=crop",
    likes: 234,
    comments: 45,
    featured: true
  },
  {
    id: "2",
    title: "Portrait Drawing: Capturing Human Expression",
    excerpt: "Learn advanced portrait techniques to capture emotion and personality in your drawings with masterful precision.",
    author: "PortraitPro",
    publishDate: "2024-01-12",
    readTime: "12 min read",
    category: "Drawing",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop",
    likes: 189,
    comments: 32,
    featured: true
  },
  {
    id: "3",
    title: "Color Theory: Creating Harmonious Palettes",
    excerpt: "Master the art of color selection and create breathtaking compositions that evoke emotion and capture attention.",
    author: "ColorVirtuoso",
    publishDate: "2024-01-10",
    readTime: "6 min read",
    category: "Theory",
    imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=200&fit=crop",
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
            <Paintbrush className="h-4 w-4" />
            <span className="text-sm font-medium">Featured Art</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Curated
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-3">
              Masterpieces
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked tutorials and inspiration from our community's finest artists. 
            Elevate your artistry with these inspiring creations.
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
              <p className="text-muted-foreground">Artworks Created</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary">500+</h3>
              <p className="text-muted-foreground">Awards Won</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Paintbrush className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary">99.9%</h3>
              <p className="text-muted-foreground">Inspiration Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;