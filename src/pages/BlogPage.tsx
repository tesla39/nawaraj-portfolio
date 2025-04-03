import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  date: Date;
  author: string;
  category: string;
  tags: string[];
};
const blogPosts: BlogPost[] = [{
  id: 1,
  title: "The Evolution of Web Design in 2023",
  excerpt: "Exploring the latest trends and innovations shaping the world of web design this year.",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nisi ultricies nunc, quis ultricies nisl nisi quis nunc.",
  imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  date: new Date(2023, 5, 12),
  author: "Jane Doe",
  category: "Design",
  tags: ["Web Design", "Trends", "UI", "UX"]
}, {
  id: 2,
  title: "Mastering TypeScript for Modern Web Development",
  excerpt: "A comprehensive guide to leveraging TypeScript to build robust and maintainable applications.",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nisi ultricies nunc, quis ultricies nisl nisi quis nunc.",
  imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  date: new Date(2023, 4, 28),
  author: "John Smith",
  category: "Development",
  tags: ["TypeScript", "JavaScript", "Web Development", "Programming"]
}, {
  id: 3,
  title: "Creating Accessible Interfaces: A Designer's Responsibility",
  excerpt: "Why accessibility should be at the forefront of every design decision and how to implement it effectively.",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nisi ultricies nunc, quis ultricies nisl nisi quis nunc.",
  imageUrl: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  date: new Date(2023, 4, 15),
  author: "Alex Johnson",
  category: "Accessibility",
  tags: ["Accessibility", "UX", "Inclusive Design", "WCAG"]
}, {
  id: 4,
  title: "The Role of Microinteractions in Modern Web Experiences",
  excerpt: "How small interactive details can significantly enhance user engagement and satisfaction.",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nisi ultricies nunc, quis ultricies nisl nisi quis nunc.",
  imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  date: new Date(2023, 3, 20),
  author: "Sarah Williams",
  category: "UX",
  tags: ["Microinteractions", "UX Design", "Animation", "User Experience"]
}, {
  id: 5,
  title: "Building Scalable CSS Architecture for Large Applications",
  excerpt: "Strategies and best practices for maintaining clean and efficient CSS in complex projects.",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nisi ultricies nunc, quis ultricies nisl nisi quis nunc.",
  imageUrl: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  date: new Date(2023, 3, 5),
  author: "David Brown",
  category: "Development",
  tags: ["CSS", "Architecture", "Web Development", "Best Practices"]
}, {
  id: 6,
  title: "The Importance of Performance Optimization in Web Design",
  excerpt: "Why website speed matters and techniques to improve loading times and overall performance.",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nisi ultricies nunc, quis ultricies nisl nisi quis nunc.",
  imageUrl: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  date: new Date(2023, 2, 18),
  author: "Michelle Lee",
  category: "Performance",
  tags: ["Web Performance", "Optimization", "Speed", "User Experience"]
}];
const BlogPage = () => {
  const categories = ["All", "Design", "Development", "Accessibility", "UX", "Performance"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const filteredPosts = blogPosts.filter(post => {
    // Filter by category
    if (activeCategory !== "All" && post.category !== activeCategory) {
      return false;
    }

    // Filter by search term
    if (searchTerm && !post.title.toLowerCase().includes(searchTerm.toLowerCase()) && !post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true;
  });
  return <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Blog</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Thoughts, ideas, and insights on design, development, and creativity.
              </p>
              <div className="relative">
                <Input type="text" placeholder="Search articles..." className="w-full pl-10" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map(category => <button key={category} onClick={() => setActiveCategory(category)} className="text-neutral-950">
                  {category}
                </button>)}
            </div>

            {filteredPosts.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map(post => <Link to={`/blog/${post.id}`} key={post.id} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 card-hover">
                    <div className="relative aspect-video overflow-hidden">
                      <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-medium">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>{format(post.date, 'MMM dd, yyyy')}</span>
                        </div>
                        <div className="flex items-center">
                          <User size={14} className="mr-1" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-portfolio-navy group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, index) => <Badge key={index} variant="outline">{tag}</Badge>)}
                      </div>
                      <div className="inline-flex items-center text-primary font-medium">
                        Read More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>)}
              </div> : <div className="text-center py-12">
                <h3 className="text-xl font-bold mb-2">No articles found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </div>}
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default BlogPage;