import { Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogCard from "./BlogCard";

// Mock data for recent posts
const recentPosts = [
  {
    id: "4",
    title: "Node.js Performance Optimization: Boss Fight Edition",
    excerpt: "Defeat slow APIs and laggy responses with these powerful Node.js optimization techniques that will make your backend lightning fast.",
    author: "NodeNinja",
    publishDate: "2024-01-08",
    readTime: "10 min read",
    category: "Node.js",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop",
    likes: 142,
    comments: 23
  },
  {
    id: "5",
    title: "React Hooks: Mastering the Magic System",
    excerpt: "Unlock the full potential of React Hooks with advanced patterns, custom hooks, and pro tips that will transform your component game.",
    author: "HookWizard",
    publishDate: "2024-01-05",
    readTime: "7 min read",
    category: "React",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop",
    likes: 198,
    comments: 41
  },
  {
    id: "6",
    title: "GraphQL Quest: Building Epic APIs",
    excerpt: "Embark on a journey to create powerful, flexible APIs with GraphQL that will revolutionize how your frontend and backend communicate.",
    author: "GraphQLGuru",
    publishDate: "2024-01-03",
    readTime: "15 min read",
    category: "GraphQL",
    imageUrl: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=200&fit=crop",
    likes: 167,
    comments: 29
  },
  {
    id: "7",
    title: "Docker Containerization: Deploy Like a Pro",
    excerpt: "Master Docker containers and deployment strategies to ship your applications with confidence and scale like the pros.",
    author: "DockerDev",
    publishDate: "2024-01-01",
    readTime: "9 min read",
    category: "DevOps",
    imageUrl: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=400&h=200&fit=crop",
    likes: 134,
    comments: 18
  },
  {
    id: "8",
    title: "Vue.js 3 Composition API: The Ultimate Guide",
    excerpt: "Discover the power of Vue 3's Composition API and learn how to build more maintainable and powerful applications.",
    author: "VueVanguard",
    publishDate: "2023-12-28",
    readTime: "11 min read",
    category: "Vue.js",
    imageUrl: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&h=200&fit=crop",
    likes: 176,
    comments: 35
  },
  {
    id: "9",
    title: "Tailwind CSS: Crafting Beautiful UIs",
    excerpt: "Level up your styling game with Tailwind CSS and create stunning, responsive interfaces that users will love.",
    author: "StyleSorcerer",
    publishDate: "2023-12-25",
    readTime: "6 min read",
    category: "CSS",
    imageUrl: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=200&fit=crop",
    likes: 203,
    comments: 47
  }
];

const categories = ["All", "React", "TypeScript", "Node.js", "CSS", "GraphQL", "Vue.js", "DevOps"];

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
                Adventures
              </span>
            </h2>
            <p className="text-muted-foreground">
              Fresh content from our developer community
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
              variant={index === 0 ? "gaming" : "outline"}
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
            Load More Epic Content
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;