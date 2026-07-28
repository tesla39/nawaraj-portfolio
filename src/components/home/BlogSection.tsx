import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatDistanceToNow } from 'date-fns';

type MediumPost = {
  id: string;
  title: string;
  excerpt: string;
  imageUrl?: string;
  date: Date;
  author: string;
  category?: string;
  url: string;
};

type RssItem = {
  guid: string;
  title: string;
  description: string;
  content?: string;
  link: string;
  pubDate: string;
  author?: string;
  categories?: string[];
  thumbnail?: string;
};

type RssResponse = {
  status: 'ok' | 'error';
  feed?: { author?: string };
  items?: RssItem[];
};

const mediumUsername = import.meta.env.VITE_MEDIUM_USERNAME?.replace(/^@/, '').trim();

const htmlToText = (html: string) => {
  const document = new DOMParser().parseFromString(html, 'text/html');
  return (document.body.textContent || '').replace(/\s+/g, ' ').trim();
};

const getImageFromContent = (html?: string) => {
  if (!html) return undefined;
  const document = new DOMParser().parseFromString(html, 'text/html');
  return document.querySelector('img')?.src;
};

const BlogSection = () => {
  const [posts, setPosts] = useState<MediumPost[]>([]);

  useEffect(() => {
    if (!mediumUsername) return;

    const controller = new AbortController();
    const loadPosts = async () => {
      try {
        const feedUrl = encodeURIComponent(`https://medium.com/feed/@${mediumUsername}`);
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${feedUrl}`, {
          signal: controller.signal,
        });
        if (!response.ok) return;

        const data = (await response.json()) as RssResponse;
        if (data.status !== 'ok' || !data.items) return;

        setPosts(data.items.slice(0, 3).map((item) => ({
          id: item.guid || item.link,
          title: htmlToText(item.title),
          excerpt: htmlToText(item.description).slice(0, 180),
          imageUrl: item.thumbnail || getImageFromContent(item.content || item.description),
          date: new Date(item.pubDate),
          author: item.author || data.feed?.author || mediumUsername,
          category: item.categories?.[0],
          url: item.link,
        })));
      } catch (error) {
        if (!(error instanceof DOMException && error.name === 'AbortError')) setPosts([]);
      }
    };

    loadPosts();
    return () => controller.abort();
  }, []);

  return <section id="blog" className="section-padding">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <div>
          <h2 className="section-title">From the Blog</h2>
          <p className="text-muted-foreground max-w-xl">Latest writing from my Medium publication.</p>
        </div>
        <Button asChild className="mt-4 md:mt-0 bg-primary hover:bg-primary/90">
          <Link to="/blog">View All Posts <ArrowRight size={16} className="ml-2" /></Link>
        </Button>
      </div>

      {posts.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => <a href={post.url} target="_blank" rel="noreferrer" key={post.id} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 card-hover">
          <div className="relative aspect-video overflow-hidden bg-muted">
            {post.imageUrl ? <img src={post.imageUrl} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" /> : <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/30" />}
            {post.category && <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-medium">{post.category}</div>}
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
              <span>{post.author}</span><span>•</span><span>{formatDistanceToNow(post.date, { addSuffix: true })}</span>
            </div>
            <h3 className="text-xl mb-2 transition-colors font-bold text-gray-900">{post.title}</h3>
            <p className="text-gray-900">{post.excerpt}{post.excerpt.length === 180 ? '…' : ''}</p>
            <div className="mt-4 inline-flex items-center text-primary font-medium">Read on Medium <ExternalLink size={15} className="ml-2" /><ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" /></div>
          </div>
        </a>)}
      </div> : <p className="text-muted-foreground">{mediumUsername ? 'Latest Medium articles are loading.' : 'Add your Medium username to VITE_MEDIUM_USERNAME to show your latest articles.'}</p>}
    </div>
  </section>;
};

export default BlogSection;
