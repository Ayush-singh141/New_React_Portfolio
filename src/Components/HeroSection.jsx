import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const imageAnim = {
  hidden: { opacity: 0, x: 20 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    } 
  }
};

const HeroSection = () => {
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // aligns the top of the element with the top of the viewport
      });
    }
  };
  return (
    <section className="bg-black text-white min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6 py-24 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content - Left Side */}
          <motion.div 
            className="lg:w-1/2 space-y-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h1 
              className="font-monument text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              variants={item}
            >
              Crafting Digital Experiences
            </motion.h1>
            
            <motion.p 
              className="text-gray-300 text-lg md:text-xl max-w-lg"
              variants={item}
            >
              I design and build intuitive interfaces that blend aesthetics with functionality.
            </motion.p>
            
            <motion.div 
              className="flex gap-4 pt-4"
              variants={item}
            >
              <motion.button 
                className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={()=>scrollToElement('portfolio')}
              >
                View Work
              </motion.button>
              <motion.button 
                className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-black transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={()=>scrollToElement('contact')}
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial="hidden"
            animate="show"
            variants={imageAnim}
          >
            <div className="relative w-full max-w-md lg:max-w-none">
              <motion.div 
                className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                {/* Replace with your actual image */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <img src="https://i.ibb.co/35gScpgv/myimage.jpg" alt="my image" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;