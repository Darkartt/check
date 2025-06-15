"use client";

import Link from "next/link";
<<<<<<< HEAD
import { motion } from "framer-motion";
import ThreeBackground from "../../components/ThreeBackground";

export default function Process() {
  return (
    <div className="flex flex-col min-h-screen text-foreground relative overflow-hidden" style={{ background: 'transparent' }}>
      {/* Full Page Background */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: -1, pointerEvents: 'none', width: '100%', height: '100vh' }}>
        <ThreeBackground sceneType="about" />
      </div>
      {/* Header Section */}
      <header className="py-6 px-4 sm:px-8 bg-background border-b border-foreground/10 relative" style={{ zIndex: 10 }}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold text-accent-primary">Elite Woodcraft</h1>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-foreground/80 hover:text-accent-primary transition-colors">Home</Link>
            <Link href="/portfolio" className="text-foreground/80 hover:text-accent-primary transition-colors">Portfolio</Link>
            <Link href="/shop" className="text-foreground/80 hover:text-accent-primary transition-colors">Shop</Link>
            <Link href="/blog" className="text-foreground/80 hover:text-accent-primary transition-colors">Blog</Link>
            <Link href="/contact" className="text-foreground/80 hover:text-accent-primary transition-colors">Contact</Link>
          </nav>
          {/* Mobile menu placeholder */}
          <div className="md:hidden">
            <button className="text-foreground/80 hover:text-accent-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-8 bg-foreground/5 overflow-hidden" style={{ zIndex: 5 }}>
        <div className="container mx-auto relative">
=======
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Header from "../../components/Header";

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (stepsRef.current) {
        const stepItems = gsap.utils.toArray<HTMLElement>('.step-item');
        if (stepItems.length > 0) {
          gsap.fromTo(
            stepItems,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "expo.out",
              stagger: 0.1,
              delay: 0.2,
              scrollTrigger: {
                trigger: stepsRef.current,
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
    }, stepsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-8 bg-foreground/5">
        <div className="container mx-auto relative" style={{ zIndex: 10 }}>
>>>>>>> f7d0c5bf1442387ada4246c3e9b3d86ab7f25bfe
          <motion.h2 
            className="text-4xl font-serif font-bold text-accent-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
<<<<<<< HEAD
          >Our Creative Process</motion.h2>
=======
          >Our Craftsmanship Process</motion.h2>
>>>>>>> f7d0c5bf1442387ada4246c3e9b3d86ab7f25bfe
          <motion.p 
            className="text-lg text-foreground/80 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
<<<<<<< HEAD
          >Understand the journey from concept to completion at Elite Woodcraft, where each step is crafted with precision and passion to bring your vision to life.</motion.p>
=======
          >Discover the meticulous journey of creating bespoke wooden masterpieces at Elite Woodcraft, from initial concept to final installation.</motion.p>
>>>>>>> f7d0c5bf1442387ada4246c3e9b3d86ab7f25bfe
        </div>
      </section>

      {/* Process Steps Section */}
<<<<<<< HEAD
      <section className="py-24 px-4 sm:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <motion.h3 
            className="text-3xl font-serif font-bold text-accent-primary mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >How We Work</motion.h3>
          <div className="space-y-16">
            {/* Step 1: Consultation */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="md:col-span-1 flex justify-center items-start">
                <div className="w-16 h-16 bg-accent-primary/20 rounded-full flex items-center justify-center text-accent-primary font-bold text-xl">1</div>
              </div>
              <div className="md:col-span-2">
                <h4 className="text-xl font-serif font-semibold text-foreground mb-4">Consultation & Vision</h4>
                <p className="text-foreground/80 mb-4">Placeholder: We begin with a detailed consultation to understand your vision, needs, and preferences. Whether it's a custom furniture piece or a decorative carving, we discuss design ideas, materials, and intended use to ensure alignment.</p>
                <p className="text-foreground/80">Placeholder: Timeline: Initial meeting (1-2 hours), follow-up discussions as needed (1-3 days).</p>
              </div>
            </motion.div>
            {/* Step 2: Design & Approval */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="md:col-span-1 flex justify-center items-start">
                <div className="w-16 h-16 bg-accent-primary/20 rounded-full flex items-center justify-center text-accent-primary font-bold text-xl">2</div>
              </div>
              <div className="md:col-span-2">
                <h4 className="text-xl font-serif font-semibold text-foreground mb-4">Design & Approval</h4>
                <p className="text-foreground/80 mb-4">Placeholder: Our artisans create detailed sketches or 3D renderings based on the consultation. We present these designs for your feedback and make revisions until the concept is perfected and approved.</p>
                <p className="text-foreground/80">Placeholder: Timeline: Design phase (1-2 weeks), revisions and approval (3-7 days).</p>
              </div>
            </motion.div>
            {/* Step 3: Material Selection */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="md:col-span-1 flex justify-center items-start">
                <div className="w-16 h-16 bg-accent-primary/20 rounded-full flex items-center justify-center text-accent-primary font-bold text-xl">3</div>
              </div>
              <div className="md:col-span-2">
                <h4 className="text-xl font-serif font-semibold text-foreground mb-4">Material Selection</h4>
                <p className="text-foreground/80 mb-4">Placeholder: We source the finest hardwoods and materials that match the design aesthetic and durability requirements. You’ll have the opportunity to review samples and finalize choices.</p>
                <p className="text-foreground/80">Placeholder: Timeline: Material selection and procurement (1-2 weeks).</p>
              </div>
            </motion.div>
            {/* Step 4: Crafting */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="md:col-span-1 flex justify-center items-start">
                <div className="w-16 h-16 bg-accent-primary/20 rounded-full flex items-center justify-center text-accent-primary font-bold text-xl">4</div>
              </div>
              <div className="md:col-span-2">
                <h4 className="text-xl font-serif font-semibold text-foreground mb-4">Crafting & Creation</h4>
                <p className="text-foreground/80 mb-4">Placeholder: Our master artisans begin crafting your piece using traditional and modern techniques. We provide periodic updates with photos or videos to show progress and ensure satisfaction.</p>
                <p className="text-foreground/80">Placeholder: Timeline: Crafting phase (4-12 weeks, depending on complexity).</p>
              </div>
            </motion.div>
            {/* Step 5: Finishing */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="md:col-span-1 flex justify-center items-start">
                <div className="w-16 h-16 bg-accent-primary/20 rounded-full flex items-center justify-center text-accent-primary font-bold text-xl">5</div>
              </div>
              <div className="md:col-span-2">
                <h4 className="text-xl font-serif font-semibold text-foreground mb-4">Finishing & Quality Assurance</h4>
                <p className="text-foreground/80 mb-4">Placeholder: Once crafted, the piece undergoes meticulous finishing—staining, sealing, or polishing—and a thorough quality check to ensure it meets our high standards.</p>
                <p className="text-foreground/80">Placeholder: Timeline: Finishing and QA (1-2 weeks).</p>
              </div>
            </motion.div>
            {/* Step 6: Delivery */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="md:col-span-1 flex justify-center items-start">
                <div className="w-16 h-16 bg-accent-primary/20 rounded-full flex items-center justify-center text-accent-primary font-bold text-xl">6</div>
              </div>
              <div className="md:col-span-2">
                <h4 className="text-xl font-serif font-semibold text-foreground mb-4">Delivery & Installation</h4>
                <p className="text-foreground/80 mb-4">Placeholder: We arrange secure delivery or shipping, and for larger pieces, offer professional installation at your location to ensure perfect placement and satisfaction.</p>
                <p className="text-foreground/80">Placeholder: Timeline: Delivery scheduling and installation (1-3 weeks, depending on location).</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 px-4 sm:px-8 bg-foreground/5">
        <div className="container mx-auto max-w-4xl">
          <motion.h3 
            className="text-3xl font-serif font-bold text-accent-primary mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >Frequently Asked Questions</motion.h3>
          <div className="space-y-8">
            {/* FAQ 1 */}
            <motion.div 
              className="bg-background p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-3">Placeholder: How long does a custom project typically take?</h4>
              <p className="text-foreground/80">Placeholder: Custom projects generally take between 8-20 weeks from consultation to delivery, depending on the complexity, size, and materials involved. We provide a detailed timeline after the design is approved.</p>
            </motion.div>
            {/* FAQ 2 */}
            <motion.div 
              className="bg-background p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-3">Placeholder: Can I provide my own design or concept?</h4>
              <p className="text-foreground/80">Placeholder: Absolutely. We welcome your sketches, photos, or ideas as a starting point. Our team will work with you to refine and adapt your concept into a feasible design for crafting.</p>
            </motion.div>
            {/* FAQ 3 */}
            <motion.div 
              className="bg-background p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-3">Placeholder: What types of wood do you work with?</h4>
              <p className="text-foreground/80">Placeholder: We work with a variety of premium hardwoods including oak, walnut, cherry, maple, and mahogany, sourced sustainably. We can also accommodate special requests for exotic woods based on availability.</p>
            </motion.div>
            {/* FAQ 4 */}
            <motion.div 
              className="bg-background p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-3">Placeholder: Do you ship internationally?</h4>
              <p className="text-foreground/80">Placeholder: Yes, we ship worldwide. Shipping costs and timelines vary based on location and the size of the piece. We ensure secure packaging and can assist with customs documentation if needed.</p>
            </motion.div>
            {/* FAQ 5 */}
            <motion.div 
              className="bg-background p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-3">Placeholder: What is your payment and deposit policy?</h4>
              <p className="text-foreground/80">Placeholder: We typically require a 50% deposit upon design approval to begin crafting, with the balance due before delivery. Payment plans can be arranged for larger projects. We accept bank transfers and major credit cards.</p>
            </motion.div>
=======
      <section className="py-16 px-4 sm:px-8 bg-background" ref={stepsRef}>
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-16">
            <div className="step-item grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg shadow-lg h-80 bg-foreground/10"></div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-accent-primary mb-4">1. Consultation & Vision</h3>
                <p className="text-foreground/80 mb-4">Every project begins with a detailed consultation. We listen to your ideas, preferences, and requirements to understand your vision. Whether it's a piece of furniture, a decorative carving, or an architectural element, we ensure your personality and style are reflected in the design.</p>
                <p className="text-foreground/80">Our team provides expert guidance on materials, dimensions, and finishes, often presenting initial sketches or digital renderings to visualize the concept.</p>
              </div>
            </div>
            <div className="step-item grid grid-cols-1 md:grid-cols-2 gap-8 items-center flex-row-reverse">
              <div className="rounded-lg shadow-lg h-80 bg-foreground/10"></div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-accent-primary mb-4">2. Design & Planning</h3>
                <p className="text-foreground/80 mb-4">Once the concept is finalized, our designers create detailed blueprints and 3D models. This stage involves close collaboration with you to refine every detail, ensuring the design aligns perfectly with your vision and space.</p>
                <p className="text-foreground/80">We select premium, sustainably sourced hardwoods and plan the carving techniques that will bring the design to life, balancing aesthetics with structural integrity.</p>
              </div>
            </div>
            <div className="step-item grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg shadow-lg h-80 bg-foreground/10"></div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-accent-primary mb-4">3. Material Selection</h3>
                <p className="text-foreground/80 mb-4">The choice of wood is critical to the beauty and longevity of each piece. We source only the finest hardwoods from sustainable forests, such as oak, walnut, cherry, and mahogany, ensuring exceptional grain and durability.</p>
                <p className="text-foreground/80">Each piece of timber is carefully inspected for quality, ensuring it meets our exacting standards before craftsmanship begins.</p>
              </div>
            </div>
            <div className="step-item grid grid-cols-1 md:grid-cols-2 gap-8 items-center flex-row-reverse">
              <div className="rounded-lg shadow-lg h-80 bg-foreground/10"></div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-accent-primary mb-4">4. Handcrafting & Carving</h3>
                <p className="text-foreground/80 mb-4">Our master artisans bring the design to life using a blend of traditional hand-carving techniques and precision tools. Every cut, joint, and detail is executed with meticulous care, often taking weeks or months for intricate pieces.</p>
                <p className="text-foreground/80">This stage is where the unique character of your piece emerges, with each carving telling a story through its craftsmanship.</p>
              </div>
            </div>
            <div className="step-item grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg shadow-lg h-80 bg-foreground/10"></div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-accent-primary mb-4">5. Finishing & Refinement</h3>
                <p className="text-foreground/80 mb-4">After carving, the piece undergoes sanding, staining, and finishing to enhance its natural beauty and protect it for generations. We use eco-friendly finishes that highlight the wood's grain while ensuring durability.</p>
                <p className="text-foreground/80">Multiple layers of finish are applied by hand, with careful attention to achieving the perfect tone and texture as envisioned in the design phase.</p>
              </div>
            </div>
            <div className="step-item grid grid-cols-1 md:grid-cols-2 gap-8 items-center flex-row-reverse">
              <div className="rounded-lg shadow-lg h-80 bg-foreground/10"></div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-accent-primary mb-4">6. Quality Assurance</h3>
                <p className="text-foreground/80 mb-4">Before delivery, every piece is rigorously inspected to ensure it meets our uncompromising standards. We check for structural integrity, finish quality, and fidelity to the original design.</p>
                <p className="text-foreground/80">This step ensures that the final product is not only a work of art but also a functional, lasting piece that exceeds your expectations.</p>
              </div>
            </div>
            <div className="step-item grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg shadow-lg h-80 bg-foreground/10"></div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-accent-primary mb-4">7. Delivery & Installation</h3>
                <p className="text-foreground/80 mb-4">We take great care in packaging and delivering your piece, whether it's to a local residence or an international destination. For larger or architectural pieces, our team provides professional installation to ensure a perfect fit.</p>
                <p className="text-foreground/80">Our commitment doesn't end at delivery—we follow up to ensure your complete satisfaction with the final result.</p>
              </div>
            </div>
>>>>>>> f7d0c5bf1442387ada4246c3e9b3d86ab7f25bfe
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
<<<<<<< HEAD
      <section className="py-24 px-4 sm:px-8 bg-accent-primary/10">
=======
      <section className="py-16 px-4 sm:px-8 bg-accent-primary/10">
>>>>>>> f7d0c5bf1442387ada4246c3e9b3d86ab7f25bfe
        <motion.div 
          className="container mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
<<<<<<< HEAD
          <h3 className="text-3xl font-serif font-bold text-accent-primary mb-6">Ready to Start Your Journey?</h3>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">Placeholder: Contact us to begin the process of creating a bespoke woodcarving piece tailored to your vision. Let’s craft something extraordinary together.</p>
          <Link href="/commission" className="inline-block bg-accent-primary text-background px-8 py-3 rounded-md font-medium hover:bg-accent-primary/90 transition-colors">Begin Your Project</Link>
=======
          <h3 className="text-3xl font-serif font-bold text-accent-primary mb-4">Ready to Begin Your Project?</h3>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">Experience our detailed craftsmanship process firsthand. Let's collaborate to create a bespoke piece that reflects your vision.</p>
          <Link href="/contact" className="inline-block bg-accent-primary text-background px-8 py-3 rounded-md font-medium hover:bg-accent-primary/90 transition-colors">Request a Consultation</Link>
>>>>>>> f7d0c5bf1442387ada4246c3e9b3d86ab7f25bfe
        </motion.div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 px-4 sm:px-8 bg-foreground/5 border-t border-foreground/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-serif font-bold text-accent-primary mb-4">Elite Woodcraft</h4>
              <p className="text-foreground/70 mb-4">Creating timeless wooden masterpieces for discerning clients worldwide.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-foreground/70 hover:text-accent-primary transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-foreground/70 hover:text-accent-primary transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-foreground/70 hover:text-accent-primary transition-colors">
                  <span className="sr-only">Pinterest</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 20l4-9"></path>
                    <path d="M10.76 13.76c-.24 1.44.62 2.87 2.05 3.12a3.26 3.26 0 0 0 3.29-1.8 16.52 16.52 0 0 0 1.38-5.17c-.26-3.77-2.05-6.91-5.75-7.87A6.15 6.15 0 0 0 4.11 4.3c.58 2.47 1.46 4.89 2.63 7.14 1.86-3.32 6.6-5.89 9.92-3.98-2.96 2.13-3.98 6.62-1.85 9.58a6.9 6.9 0 0 0 2.89 1.05c-.88 2.29-2.75 3.85-5.02 4.57l1.33 4.34"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-foreground mb-3">Explore</h5>
              <ul className="space-y-2">
                <li><Link href="/portfolio" className="text-foreground/70 hover:text-accent-primary transition-colors">Portfolio</Link></li>
<<<<<<< HEAD
=======
                <li><Link href="/services" className="text-foreground/70 hover:text-accent-primary transition-colors">Services</Link></li>
                <li><Link href="/process" className="text-foreground/70 hover:text-accent-primary transition-colors">Process</Link></li>
>>>>>>> f7d0c5bf1442387ada4246c3e9b3d86ab7f25bfe
                <li><Link href="/shop" className="text-foreground/70 hover:text-accent-primary transition-colors">Shop</Link></li>
                <li><Link href="/blog" className="text-foreground/70 hover:text-accent-primary transition-colors">Blog</Link></li>
                <li><Link href="/about" className="text-foreground/70 hover:text-accent-primary transition-colors">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-foreground mb-3">Services</h5>
              <ul className="space-y-2">
                <li><Link href="/services/custom-furniture" className="text-foreground/70 hover:text-accent-primary transition-colors">Custom Furniture</Link></li>
                <li><Link href="/services/decorative-carvings" className="text-foreground/70 hover:text-accent-primary transition-colors">Decorative Carvings</Link></li>
                <li><Link href="/services/architectural-elements" className="text-foreground/70 hover:text-accent-primary transition-colors">Architectural Elements</Link></li>
                <li><Link href="/services/restoration" className="text-foreground/70 hover:text-accent-primary transition-colors">Restoration</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-foreground mb-3">Contact</h5>
              <address className="text-foreground/70 not-italic space-y-2">
                <p>123 Timber Lane</p>
                <p>Suite 456</p>
                <p>Oakwood, CA 90210</p>
                <p><a href="tel:+15551234567" className="hover:text-accent-primary transition-colors">(555) 123-4567</a></p>
                <p><a href="mailto:info@elitewoodcraft.com" className="hover:text-accent-primary transition-colors">info@elitewoodcraft.com</a></p>
              </address>
            </div>
          </div>
          <div className="border-t border-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/50 text-sm">© {new Date().getFullYear()} Elite Woodcraft. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/privacy" className="text-foreground/50 text-sm hover:text-foreground/80 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-foreground/50 text-sm hover:text-foreground/80 transition-colors">Terms of Service</Link>
            </div>
          </div>
<<<<<<< HEAD
          {/* Newsletter Signup in Footer */}
          <div className="mt-8 flex flex-col md:flex-row gap-3 justify-center">
            <input type="email" placeholder="Subscribe to Newsletter" className="flex-1 px-4 py-3 border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary/50 bg-background text-foreground" required />
            <button type="submit" className="bg-accent-primary text-background px-6 py-3 rounded-md font-medium hover:bg-accent-primary/90 transition-colors">Subscribe</button>
          </div>
          <p className="text-foreground/60 text-sm mt-3 text-center">We respect your privacy and will never share your information.</p>
=======
>>>>>>> f7d0c5bf1442387ada4246c3e9b3d86ab7f25bfe
        </div>
      </footer>
    </div>
  );
}
