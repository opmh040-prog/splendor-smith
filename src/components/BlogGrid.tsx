import { Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogCard from "./BlogCard";

// Mock data for recent posts
const recentPosts = [
  {
    id: "4",
    title: "Oil Painting Techniques: Creating Texture and Depth",
    excerpt: "Master traditional oil painting methods to create rich textures and stunning depth in your artistic compositions.",
    author: "OilMaster",
    publishDate: "2024-01-08",
    readTime: "10 min read",
    category: "Oil Painting",
    imageUrl: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&h=200&fit=crop",
    likes: 142,
    comments: 23
  },
  {
    id: "5",
    title: "Abstract Art: Expressing Emotion Through Form",
    excerpt: "Discover how to convey powerful emotions and concepts through abstract compositions and experimental techniques.",
    author: "AbstractArtist",
    publishDate: "2024-01-05",
    readTime: "7 min read",
    category: "Abstract",
    imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=200&fit=crop",
    likes: 198,
    comments: 41
  },
  {
    id: "6",
    title: "Sculpture Fundamentals: From Clay to Bronze",
    excerpt: "Explore the journey from initial clay models to finished bronze sculptures with professional casting techniques.",
    author: "SculptureStudio",
    publishDate: "2024-01-03",
    readTime: "15 min read",
    category: "Sculpture",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop",
    likes: 167,
    comments: 29
  },
  {
    id: "7",
    title: "Photography as Art: Composition and Light",
    excerpt: "Learn to transform ordinary scenes into extraordinary artistic statements through masterful composition and lighting.",
    author: "PhotoArtist",
    publishDate: "2024-01-01",
    readTime: "9 min read",
    category: "Photography",
    imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=200&fit=crop",
    likes: 134,
    comments: 18
  },
  {
    id: "8",
    title: "Mixed Media Art: Breaking Creative Boundaries",
    excerpt: "Explore the limitless possibilities of combining different materials and techniques in innovative mixed media artworks.",
    author: "MixedMediaMaven",
    publishDate: "2023-12-28",
    readTime: "11 min read",
    category: "Mixed Media",
    imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=200&fit=crop",
    likes: 176,
    comments: 35
  },
  {
    id: "9",
    title: "Printmaking: Traditional Techniques for Modern Artists",
    excerpt: "Discover the timeless appeal of printmaking and how contemporary artists are reimagining these classical methods.",
    author: "PrintMaster",
    publishDate: "2023-12-25",
    readTime: "6 min read",
    category: "Printmaking",
    imageUrl: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&h=200&fit=crop",
    likes: 203,
    comments: 47
  }
];

const categories = ["All", "Digital Art", "Drawing", "Oil Painting", "Abstract", "Sculpture", "Photography", "Mixed Media", "Printmaking"];

const BlogGrid = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
              Latest
              <span className="bg-gradient-primary bg-clip-text text-transparent ml-3">
                Creations
              </span>
            </h2>
            <p className="text-muted-foreground">
              Fresh inspiration from our artistic community
            </p>
          </div>
          
          <div className="flex items-center space-x-2 mt-4 lg:mt-0">
            <Button variant="outline" size="sm">
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className="text-sm"
            >
              {category}
            </Button>
          ))}
          <Button variant="ghost" size="sm">
            <Filter className="h-4 w-4" />
            More Filters
          </Button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Discover More Art
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;