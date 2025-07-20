import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../assets/logo.png";

const Navbar = () => {
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // aligns the top of the element with the top of the viewport
      });
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About Me', href: '#about' ,id:"about"},
    { name: 'Portfolio', href: '#portfolio' ,id:"portfolio"},
    { name: 'Services', href: '#services' ,id:"services"},
    { name: 'Blog', href: 'https://ezy-blogs-ai-frontend.vercel.app/' },
  ];

  // Stagger animation variants
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
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-black fixed w-full z-50'>
      <div className='flex justify-between items-center pl-0 ml-0 pr-4 mr-0 w-full mx-auto max-w-[1440px] h-[10vh]'>
        {/* Logo and Desktop Navigation */}
        <div className='flex items-center gap-2'>
          <img src={logo} alt="logo" className='w-[90px]' />
          
          {/* Desktop Navigation with Stagger */}
          <motion.ul 
            className='hidden md:flex items-center gap-4 text-white'
            variants={container}
            initial="hidden"
            animate="show"
          >
            {navLinks.map((link) => (
              <motion.li 
                key={link.name}
                className='cursor-pointer hover:text-gray-400 transition-all duration-300 relative'
                variants={item}
                whileHover={{ scale: 1.05 }}
              >
                {link.name === 'Blog' ? (
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                ) : (
                  <span onClick={()=>{scrollToElement(link.id)}}>{link.name}</span>
                )}
                
                <motion.div 
                  className="absolute bottom-0 left-0 w-0 h-[2px] bg-white"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Contact Button - Desktop with Stagger */}
        <motion.div 
          className='hidden md:flex items-center gap-2'
          variants={item}
          initial="hidden"
          animate="show"
          transition={{ delay: navLinks.length * 0.1 }}
        >
          <motion.button 
            className='bg-white text-black px-4 py-2 rounded-md cursor-pointer hover:bg-black hover:text-white hover:border-white border-2 border-transparent transition-all duration-300'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={()=>{scrollToElement("contact")}}
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button 
          className='md:hidden text-white focus:outline-none'
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          <div className='w-6 flex flex-col gap-1.5'>
            <motion.span 
              className='h-0.5 bg-white block'
              animate={isOpen ? { rotate: 45, y: 6 } : {}}
            />
            <motion.span 
              className='h-0.5 bg-white block'
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span 
              className='h-0.5 bg-white block'
              animate={isOpen ? { rotate: -45, y: -6 } : {}}
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className='md:hidden bg-black w-full overflow-hidden'
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className='flex flex-col items-center py-4 space-y-6'>
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className='text-white text-lg'
                >
                  <a 
                    href={link.href} 
                    className='hover:text-gray-400 transition-all duration-300'
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
               <a href="#contact">
               <button 
                  className='bg-white text-black px-6 py-2 rounded-md hover:bg-black hover:text-white hover:border-white border-2 border-transparent transition-all duration-300'
                  onClick={() => {setIsOpen(false);}}
                >
                  Contact Me
                </button>
               </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;