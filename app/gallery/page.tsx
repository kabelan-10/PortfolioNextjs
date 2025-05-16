"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import ParallaxEffect from "@/components/ParallaxEffect";

import { galleryItems } from "@/lib/data";
import { GalleryItem as GalleryItemType } from "@/lib/types";
import Link from "next/link";
import SlowFadeText from "@/components/SlowFadeText";

// Number of items to load per batch
const ITEMS_PER_PAGE = 9;

export default function GalleryPage() {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<GalleryItemType | null>(
    null
  );
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
  const [displayedItems, setDisplayedItems] = useState<GalleryItemType[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  // Extract unique categories
  const allCategories = Array.from(
    new Set(galleryItems.map((item) => item.category))
  );

  // Get filtered items based on categories
  const getFilteredItems = () => {
    return categories.length > 0
      ? galleryItems.filter((item) => categories.includes(item.category))
      : galleryItems;
  };

  // Load more items when user scrolls to bottom
  const loadMoreItems = () => {
    if (loading || !hasMore) return;

    setLoading(true);

    // Simulate network request with setTimeout
    setTimeout(() => {
      const filteredItems = getFilteredItems();
      const startIndex = page * ITEMS_PER_PAGE;
      const itemsToAdd = filteredItems.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
      );

      if (itemsToAdd.length > 0) {
        setDisplayedItems((prev) => [...prev, ...itemsToAdd]);
        setPage((prev) => prev + 1);
      }

      // Check if we've loaded all items
      setHasMore(startIndex + ITEMS_PER_PAGE < filteredItems.length);
      setLoading(false);
    }, 500); // Simulate network delay
  };

  // Reset everything when categories change
  useEffect(() => {
    setPage(0);
    setHasMore(true);

    const filteredItems = getFilteredItems();
    const initialItems = filteredItems.slice(0, ITEMS_PER_PAGE);

    setDisplayedItems(initialItems);
    setHasMore(ITEMS_PER_PAGE < filteredItems.length);
  }, [categories]);

  // Setup Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMoreItems();
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore, loading, page, categories]);

  const toggleCategory = (category: string) => {
    if (categories.includes(category)) {
      setCategories(categories.filter((c) => c !== category));
    } else {
      setCategories([...categories, category]);
    }
  };

  // Split the items into columns
  const [numColumns, setNumColumns] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setNumColumns(1); // base
      } else if (width < 768) {
        setNumColumns(2); // sm
      } else {
        setNumColumns(3); // md and up
      }
    };

    handleResize(); // Set on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Distribute items across columns
  const columns = Array.from(
    { length: numColumns },
    () => [] as GalleryItemType[]
  );

  displayedItems.forEach((item, index) => {
    columns[index % numColumns].push(item);
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center text-center">
            <AnimatedText
              cusy
              zooming
              direction="up"
              text="Gallery & Works"
              className="text-4xl w-fit md:text-6xl font-bold mb-6"
            />
            <AnimatedText
              cusy
              once={true}
              text="A showcase of my visual design work, creative projects, and portfolio pieces."
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 max-w-7xl mx-auto">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <button
              onClick={() => setCategories([])}
              className={`px-4 py-2 rounded-full transition-colors ${
                categories.length === 0
                  ? "bg-primary text-primary-foreground"
                  : "bg-accent/30 hover:bg-accent/50"
              }`}
            >
              All
            </button>

            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  categories.includes(category)
                    ? "bg-primary text-primary-foreground"
                    : "bg-accent/30 hover:bg-accent/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid with Infinite Scroll */}
      <section className="py-8 pb-24 max-w-7xl mx-auto">
        <div className="container px-2 sm:px-4 sm:mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="relative">
                {/** Parallax Effect for Small Screens (sm) */}
                <div className="sm:hidden">
                  <div className="flex flex-col gap-6 overflow-clip">
                    {column.map((item, index) => (
                      <ParallaxEffect
                        dis={40}
                        key={item.id}
                        speed={2} // Add speed adjustment for small screens
                        direction={index % 2 === 0 ? "left" : "right"} // Change direction based on index
                        className="relative"
                      >
                        <div
                          onMouseEnter={() => setHoveredItemId(item.id)}
                          onMouseLeave={() => setHoveredItemId(null)}
                        >
                          <motion.div
                            initial={{
                              opacity: 1,
                              x: index % 2 === 0 ? 20 : -20, // Alternate the x position
                            }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: columnIndex * 0.1 + index * 0.1,
                            }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="relative cursor-pointer group"
                            onClick={() => setSelectedItem(item)}
                            viewport={{ once: false, amount: 0.3 }}
                          >
                            <div className="overflow-hidden rounded-lg ">
                              <div className="aspect-square  relative">
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  fill
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                  className={`object-cover transition-all duration-300 sm:p-0 ${
                                    hoveredItemId === null ||
                                    hoveredItemId === item.id
                                      ? ""
                                      : "grayscale blur-[2px]"
                                  }`}
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                              </div>
                            </div>
                            <div className="mt-3 p-4 sm:p-0">
                              <h3 className="font-medium text-lg">
                                {item.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {item.category}
                              </p>
                            </div>
                          </motion.div>
                        </div>
                      </ParallaxEffect>
                    ))}
                  </div>
                </div>

                {/** Parallax Effect for Medium Screens (md and above) */}
                <ParallaxEffect
                  className="hidden sm:block"
                  key={columnIndex}
                  speed={
                    columnIndex === 0
                      ? 1 // Left column speed
                      : columnIndex === 1
                      ? 0.8 // Middle column speed (faster)
                      : 2 // Right column speed
                  }
                  direction={
                    columnIndex === 0
                      ? "up"
                      : columnIndex === 1
                      ? "downonly"
                      : "up"
                  }
                >
                  <div className="flex flex-col gap-6">
                    {column.map((item, index) => (
                      <div
                        key={item.id}
                        onMouseEnter={() => setHoveredItemId(item.id)}
                        onMouseLeave={() => setHoveredItemId(null)}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: columnIndex * 0.1 + index * 0.1,
                          }}
                          whileHover={{ y: -5, scale: 1.02 }}
                          className="relative cursor-pointer group"
                          onClick={() => setSelectedItem(item)}
                          viewport={{ once: true, amount: 0.3 }}
                        >
                          <div className="overflow-hidden rounded-lg">
                            <div className="aspect-square relative">
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                className={`object-cover transition-all duration-300 ${
                                  hoveredItemId === null ||
                                  hoveredItemId === item.id
                                    ? ""
                                    : "grayscale blur-[2px]"
                                }`}
                              />
                              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                            </div>
                          </div>
                          <div className="mt-3">
                            <h3 className="font-medium text-lg">
                              {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {item.category}
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </ParallaxEffect>
              </div>
            ))}
          </div>

          {/* Loading indicator */}
          <div ref={loaderRef} className="w-full py-8 flex justify-center">
            {loading && (
              <div className="flex items-center gap-2">
                <Loader2 className="animate-spin h-5 w-5 text-primary" />
                <span className="text-muted-foreground">
                  Loading more items...
                </span>
              </div>
            )}
          </div>

          {/* Empty state message */}
          {displayedItems.length === 0 && !loading && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No items found. Try changing your filters.
              </p>
            </div>
          )}

          {/* End of results message */}
          {!hasMore && displayedItems.length > 0 && !loading && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">
                You've reached the end of the gallery
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modal for enlarged view */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-card rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="relative aspect-video w-full">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {selectedItem.title}
                </h3>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                    {selectedItem.category}
                  </span>
                </div>
                <p className="text-muted-foreground">
                  {selectedItem.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <section className="py-20 bg-primary">
        <div className="container px-4 mx-auto text-center">
          <ParallaxEffect>
            <h2>
              <AnimatedText
                cusy
                direction="down"
                text=" Interested in Working Together?"
                className="text-3xl md:text-5xl flex justify-center flex-wrap  gap-1 font-bold mb-6 text-primary-foreground"
              />
            </h2>
            <SlowFadeText
              once
              text="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
              className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto"
            />

            <Link
              href="/contact"
              className="px-8 py-4 bg-primary-foreground text-primary rounded-full inline-flex items-center font-medium hover:bg-primary-foreground/90 transition-colors"
            >
              Lets's Talk
            </Link>
          </ParallaxEffect>
        </div>
      </section>
    </div>
  );
}
