import { Clock, User, Tag, ArrowRight, Heart, MessageSquare } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  imageUrl: string;
  likes: number;
  comments: number;
  featured?: boolean;
}

interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "featured";
}

const BlogCard = ({ post, variant = "default" }: BlogCardProps) => {
  const isFeatured = variant === "featured" || post.featured;

  return (
    <Card className={`group cursor-pointer ${isFeatured ? 'border-accent shadow-accent-glow' : ''}`}>
      {/* Image */}
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {isFeatured && (
          <div className="absolute top-4 left-4 bg-gradient-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
            Featured Quest
          </div>
        )}
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
          {post.category}
        </div>
      </div>

      <CardHeader className="space-y-3">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <h3 className={`font-heading font-semibold leading-tight group-hover:text-primary transition-colors ${
          isFeatured ? 'text-xl' : 'text-lg'
        }`}>
          {post.title}
        </h3>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground leading-relaxed">
          {post.excerpt}
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Heart className="h-4 w-4" />
            <span>{post.likes}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MessageSquare className="h-4 w-4" />
            <span>{post.comments}</span>
          </div>
        </div>
        
        <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          Read More
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;