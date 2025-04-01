
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatDistanceToNow } from 'date-fns';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: Date;
  author: string;
  category: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Evolution of Web Design in 2023",
    excerpt: "Exploring the latest trends and innovations shaping the world of web design this year.",
    imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: new Date(2023, 5, 12),
    author: "Jane Doe",
    category: "Design"
  },
  {
    id: 2,
    title: "Mastering TypeScript for Modern Web Development",
    excerpt: "A comprehensive guide to leveraging TypeScript to build robust and maintainable applications.",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: new Date(2023, 4, 28),
    author: "John Smith",
    category: "Development"
  },
  {
    id: 3,
    title: "Creating Accessible Interfaces: A Designer's Responsibility",
    excerpt: "Why accessibility should be at the forefront of every design decision and how to implement it effectively.",
    imageUrl: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: new Date(2023, 4, 15),
    author: "Alex Johnson",
    category: "Accessibility"
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="section-title">From the Blog</h2>
            <p className="text-muted-foreground max-w-xl">
              Thoughts, ideas, and insights on design, development, and creativity.
            </p>
          </div>
          <Button asChild className="mt-4 md:mt-0 bg-primary hover:bg-primary/90">
            <Link to="/blog">
              View All Posts <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link 
              to={`/blog/${post.id}`} 
              key={post.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-medium">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{formatDistanceToNow(post.date, { addSuffix: true })}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-portfolio-navy group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground">{post.excerpt}</p>
                <div className="mt-4 inline-flex items-center text-primary font-medium">
                  Read More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
