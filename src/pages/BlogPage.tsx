import { useEffect, useMemo, useState } from 'react';
import { Search, Calendar, User, ArrowRight, ExternalLink } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { format } from 'date-fns';

type MediumPost = {
  id: string;
  title: string;
  excerpt: string;
  imageUrl?: string;
  date: Date;
  author: string;
  categories: string[];
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
  feed?: { title?: string; author?: string };
  items?: RssItem[];
  message?: string;
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

const BlogPage = () => {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [isLoading, setIsLoading] = useState(Boolean(mediumUsername));
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!mediumUsername) return;

    const controller = new AbortController();
    const loadPosts = async () => {
      try {
        const feedUrl = encodeURIComponent(`https://medium.com/feed/@${mediumUsername}`);
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${feedUrl}`, {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error('Unable to load the Medium feed.');

        const data = (await response.json()) as RssResponse;
        if (data.status !== 'ok' || !data.items) {
          throw new Error(data.message || 'Unable to load the Medium feed.');
        }

        setPosts(data.items.map((item) => ({
          id: item.guid || item.link,
          title: htmlToText(item.title),
          excerpt: htmlToText(item.description).slice(0, 220),
          imageUrl: item.thumbnail || getImageFromContent(item.content || item.description),
          date: new Date(item.pubDate),
          author: item.author || data.feed?.author || mediumUsername,
          categories: item.categories?.filter(Boolean) || [],
          url: item.link,
        })));
      } catch (loadError) {
        if (loadError instanceof DOMException && loadError.name === 'AbortError') return;
        setError(loadError instanceof Error ? loadError.message : 'Unable to load the Medium feed.');
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
    return () => controller.abort();
  }, []);

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(posts.flatMap((post) => post.categories))).sort()],
    [posts],
  );

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.categories.includes(activeCategory);
    const query = searchTerm.toLowerCase();
    const matchesSearch = !query || post.title.toLowerCase().includes(query) || post.excerpt.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow pt-20">
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Blog</h1>
            <p className="text-xl text-muted-foreground mb-8">Latest writing from my Medium publication.</p>
            <div className="relative">
              <Input type="text" placeholder="Search articles..." className="w-full pl-10" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          {categories.length > 1 && <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => <button key={category} onClick={() => setActiveCategory(category)} className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${activeCategory === category ? 'bg-primary text-white' : 'bg-zinc-200 text-neutral-950 hover:bg-zinc-100'}`}>
              {category}
            </button>)}
          </div>}

          {!mediumUsername ? <div className="text-center py-12">
            <h3 className="text-xl font-bold mb-2">Connect your Medium account</h3>
            <p className="text-muted-foreground">Add your Medium username to <code>.env</code> as <code>VITE_MEDIUM_USERNAME=your-username</code>, then restart the site.</p>
          </div> : isLoading ? <div className="text-center py-12 text-muted-foreground">Loading articles from Medium...</div> : error ? <div className="text-center py-12">
            <h3 className="text-xl font-bold mb-2">Could not load your Medium articles</h3>
            <p className="text-muted-foreground">{error}</p>
          </div> : filteredPosts.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => <a href={post.url} target="_blank" rel="noreferrer" key={post.id} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 card-hover">
              <div className="relative aspect-video overflow-hidden bg-muted">
                {post.imageUrl ? <img src={post.imageUrl} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" /> : <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/30" />}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center"><Calendar size={14} className="mr-1" /><span>{format(post.date, 'MMM dd, yyyy')}</span></div>
                  <div className="flex items-center"><User size={14} className="mr-1" /><span>{post.author}</span></div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}{post.excerpt.length === 220 ? '…' : ''}</p>
                {post.categories.length > 0 && <div className="flex flex-wrap gap-2 mb-4">
                  {post.categories.slice(0, 3).map((category) => <Badge key={category} variant="outline" className="bg-slate-900">{category}</Badge>)}
                </div>}
                <div className="inline-flex items-center text-primary font-medium">Read on Medium <ExternalLink size={15} className="ml-2" /><ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" /></div>
              </div>
            </a>)}
          </div> : <div className="text-center py-12">
            <h3 className="text-xl font-bold mb-2">No articles found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter.</p>
          </div>}
        </div>
      </section>
    </main>
    <Footer />
  </div>;
};

export default BlogPage;
