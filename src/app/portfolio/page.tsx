"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductGalleryBackground from "../../components/backgrounds/ProductGalleryBackground";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import "./portfolio.css";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const portfolioGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (portfolioGridRef.current) {
        const items = gsap.utils.toArray<HTMLElement>('.gallery-item');
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "expo.out",
              stagger: 0.1,
              delay: 0.2,
              scrollTrigger: {
                trigger: portfolioGridRef.current,
                start: "top 80%",
                once: true,
              }
            }
          );
        }
      }

      const refreshTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);

      return () => clearTimeout(refreshTimeout);
    }, portfolioGridRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-8 bg-foreground/5 masterpieces-section">
        <div className="container mx-auto relative" style={{ zIndex: 10 }}>
          <motion.h2 
            className="text-4xl font-serif font-bold text-accent-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >Our Masterpieces</motion.h2>
          <motion.p 
            className="text-lg text-foreground/80 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >Explore the exceptional craftsmanship of Elite Woodcraft through our portfolio of bespoke woodcarvings, each a testament to artistry and precision.</motion.p>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="relative py-20 px-4 sm:px-8 bg-[#3a2c28] portfolio-background">
        <div style={{ zIndex: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <ProductGalleryBackground />
        </div>
        <div className="container mx-auto relative z-10">
          <motion.div 
            className="flex justify-between items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-serif font-semibold text-accent-primary">Featured Projects</h3>
            <div className="flex space-x-4">
              <button className="text-foreground/70 hover:text-foreground border border-foreground/20 px-3 py-1 rounded-md text-sm">All</button>
              <button className="text-foreground/70 hover:text-foreground border border-foreground/20 px-3 py-1 rounded-md text-sm">Furniture</button>
              <button className="text-foreground/70 hover:text-foreground border border-foreground/20 px-3 py-1 rounded-md text-sm">Decorative</button>
              <button className="text-foreground/70 hover:text-foreground border border-foreground/20 px-3 py-1 rounded-md text-sm">Architectural</button>
            </div>
          </motion.div>
          <div ref={portfolioGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group gallery-item">
              <div className="relative overflow-hidden rounded-lg shadow-md h-80 bg-foreground/10 mb-4">
                <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-3 right-3 bg-accent-primary text-background text-xs font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">Featured</div>
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/80 text-foreground px-4 py-2 rounded-md font-medium opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background">View Details</button>
              </div>
              <h4 className="text-lg font-serif font-semibold text-foreground mb-1">Grand Oak Dining Set</h4>
              <p className="text-foreground/70 text-sm">A bespoke dining table and chairs crafted for a luxury estate, featuring intricate carvings and premium oak.</p>
            </div>
            {/* Project 2 */}
            <div className="group gallery-item">
              <div className="relative overflow-hidden rounded-lg shadow-md h-80 bg-foreground/10 mb-4">
                <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/80 text-foreground px-4 py-2 rounded-md font-medium opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background">View Details</button>
              </div>
              <h4 className="text-lg font-serif font-semibold text-foreground mb-1">Walnut Wall Installation</h4>
              <p className="text-foreground/70 text-sm">A custom wall sculpture for a corporate lobby, showcasing natural walnut grain with modern design.</p>
            </div>
            {/* Project 3 */}
            <div className="group gallery-item">
              <div className="relative overflow-hidden rounded-lg shadow-md h-80 bg-foreground/10 mb-4">
                <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/80 text-foreground px-4 py-2 rounded-md font-medium opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background">View Details</button>
              </div>
              <h4 className="text-lg font-serif font-semibold text-foreground mb-1">Cherry Library Mantels</h4>
              <p className="text-foreground/70 text-sm">Ornate mantels designed for a private library, crafted in rich cherry with traditional detailing.</p>
            </div>
            {/* Project 4 */}
            <div className="group gallery-item">
              <div className="relative overflow-hidden rounded-lg shadow-md h-80 bg-foreground/10 mb-4">
                <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/80 text-foreground px-4 py-2 rounded-md font-medium opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background">View Details</button>
              </div>
              <h4 className="text-lg font-serif font-semibold text-foreground mb-1">Maple Staircase Balustrade</h4>
              <p className="text-foreground/70 text-sm">A grand staircase feature with hand-carved balusters, enhancing a historic home's elegance.</p>
            </div>
            {/* Project 5 */}
            <div className="group gallery-item">
              <div className="relative overflow-hidden rounded-lg shadow-md h-80 bg-foreground/10 mb-4">
                <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-3 right-3 bg-accent-secondary text-background text-xs font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">Recent</div>
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/80 text-foreground px-4 py-2 rounded-md font-medium opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background">View Details</button>
              </div>
              <h4 className="text-lg font-serif font-semibold text-foreground mb-1">Ebony Entrance Doors</h4>
              <p className="text-foreground/70 text-sm">Custom entrance doors with striking ebony finish, designed to make a lasting first impression.</p>
            </div>
            {/* Project 6 */}
            <div className="group gallery-item">
              <div className="relative overflow-hidden rounded-lg shadow-md h-80 bg-foreground/10 mb-4">
                <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/80 text-foreground px-4 py-2 rounded-md font-medium opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background">View Details</button>
              </div>
              <h4 className="text-lg font-serif font-semibold text-foreground mb-1">Mahogany Study Desk</h4>
              <p className="text-foreground/70 text-sm">A bespoke desk crafted for productivity and style, featuring classic mahogany joinery.</p>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              <button className="bg-accent-primary text-background px-3 py-1 rounded-md text-sm">1</button>
              <button className="text-foreground/70 hover:text-foreground px-3 py-1 rounded-md text-sm">2</button>
              <button className="text-foreground/70 hover:text-foreground px-3 py-1 rounded-md text-sm">Next →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-8 bg-accent-primary/10">
        <motion.div 
          className="container mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-serif font-bold text-accent-primary mb-4">Inspired by Our Work?</h3>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">Commission a custom piece that reflects your unique vision and complements your space with unparalleled craftsmanship.</p>
          <Link href="/contact" className="inline-block bg-accent-primary text-background px-8 py-3 rounded-md font-medium hover:bg-accent-primary/90 transition-colors">Request a Consultation</Link>
        </motion.div>
      </section>
    </div>
  );
}
