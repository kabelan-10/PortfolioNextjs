import AnimatedText from '@/components/AnimatedText';
import ParallaxEffect from '@/components/ParallaxEffect';
import BlogCard from '@/components/ui/BlogCard';
import { blogPosts } from '@/lib/data';

export default function BlogPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
        </div>
        
        <div className="container px-4 mx-auto">
          <div className="text-center">
            <AnimatedText 
              text="Blog & Insights" 
              className="text-4xl md:text-6xl font-bold mb-6"
            />
            <AnimatedText
              text="Thoughts, insights, and discussions on web development, design, and technology."
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              once
            />
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Signup */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="container px-4 mx-auto">
          <ParallaxEffect>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe to My Newsletter</h2>
              <p className="text-muted-foreground mb-8">
                Get notified about new articles, tutorials, and insights directly in your inbox.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 flex-grow"
                  required
                />
                <button 
                  type="submit"
                  className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-sm text-muted-foreground mt-4">
                No spam, ever. I respect your privacy and you can unsubscribe at any time.
              </p>
            </div>
          </ParallaxEffect>
        </div>
      </section>
    </div>
  );
}