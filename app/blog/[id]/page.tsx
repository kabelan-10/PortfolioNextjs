"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { blogPosts } from '@/lib/data';
import { BlogPost } from '@/lib/types';

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (params.id) {
      const foundPost = blogPosts.find((p) => p.id === params.id);
      if (foundPost) {
        setPost(foundPost);
      } else {
        router.push('/blog');
      }
    }
    setLoading(false);
  }, [params.id, router]);
  
  if (loading || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
  // Format the date
  const formattedDate = format(new Date(post.date), 'MMMM dd, yyyy');
  
  // Convert markdown-like content to JSX
  const formatContent = (content: string) => {
    // Split by lines
    const lines = content.trim().split('\n');
    
    return lines.map((line, index) => {
      // Headers
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{line.replace('## ', '')}</h2>;
      }
      
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-bold mt-6 mb-3">{line.replace('### ', '')}</h3>;
      }
      
      // Code blocks
      if (line.startsWith('```') && line.endsWith('```')) {
        return (
          <pre key={index} className="bg-muted p-4 rounded-md overflow-x-auto my-4">
            <code>{line.replace(/```/g, '')}</code>
          </pre>
        );
      }
      
      // Regular paragraphs
      if (line.trim() !== '') {
        return <p key={index} className="mb-4 leading-relaxed">{line}</p>;
      }
      
      return null;
    });
  };
  
  return (
    <div className="pt-24 pb-20">
      <div className="container px-4 mx-auto">
        {/* Back Button */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Blog
        </Link>
        
        {/* Article Header */}
        <article className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-muted-foreground gap-4 mb-8">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{formattedDate}</span>
              </div>
              
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{post.author}</span>
              </div>
              
              <div className="flex items-center">
                <Tag size={16} className="mr-2" />
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-accent/50 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-video w-full overflow-hidden rounded-lg mb-10"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="prose dark:prose-invert max-w-none"
          >
            {formatContent(post.content)}
          </motion.div>
        </article>
      </div>
    </div>
  );
}