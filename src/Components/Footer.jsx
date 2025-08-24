import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: false, amount: 0.1 });
  const controls = useAnimation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      icon: <FiGithub />,
      url: "https://github.com/Ayush-singh141",
      label: "GitHub",
    },
    {
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/ayush-singh-a619622a9/",
      label: "LinkedIn",
    },
    {
      icon: <FiTwitter />,
      url: "https://x.com/BATTLEPRIM39865",
      label: "Twitter",
    },
    { icon: <FiMail />, url: "ayushsinghgaur.works@gmail.com", label: "Email" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialLinkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const copyrightVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const backToTopVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.9,
        duration: 0.8,
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    },
  };

  return (
    <footer
      ref={footerRef}
      className="bg-[#111111] text-white py-12 px-6 sm:px-8 relative overflow-hidden"
      style={{ minHeight: "400px" }}
    >
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-8"
        >
          {/* Left section */}
          <div className="md:col-span-5 lg:col-span-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Let's Build Something{" "}
              <span className="text-[#7b7b7b]">Amazing</span>
            </h2>
            <p className="text-[#7b7b7b] text-sm sm:text-base max-w-md">
              I'm always open to discussing new projects and opportunities.
            </p>
          </div>

          {/* Right section */}
          <div className="md:col-span-7 lg:col-span-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="col-span-1">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#7b7b7b] mb-4">
                  Navigation
                </h3>
                <ul className="space-y-2">
                  {["Home", "Projects", "About", "Contact"].map(
                    (item, index) => (
                      <motion.li
                        key={index}
                        variants={itemVariants}
                        custom={index}
                      >
                        <a
                          href={`#${item.toLowerCase()}`}
                          className="text-white hover:text-[#7b7b7b] transition-colors duration-200 text-sm sm:text-base"
                        >
                          {item}
                        </a>
                      </motion.li>
                    )
                  )}
                </ul>
              </div>

              <div className="col-span-1">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#7b7b7b] mb-4">
                  Resources
                </h3>
                <ul className="space-y-2">
                  {["Blog", "Tutorials", "GitHub"].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      custom={index + 4}
                    >
                      {item === "Blog" ? (
                        <a
                          href="https://ezy-blogs-ai-frontend.vercel.app/"
                          className="text-white hover:text-[#7b7b7b] transition-colors duration-200 text-sm sm:text-base"
                        >
                          {item}
                        </a>
                      ) : (
                        <a
                          href="#"
                          className="text-white hover:text-[#7b7b7b] transition-colors duration-200 text-sm sm:text-base"
                        >
                          {item}
                        </a>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#7b7b7b] mb-4">
                  Contact
                </h3>
                <ul className="space-y-2">
                  <motion.li variants={itemVariants} custom={7}>
                    <a
                      href="mailto:ayushsinghgaur.works@gmail.com"
                      className="text-white hover:text-teal-300 transition-colors duration-200 text-sm sm:text-base break-words"
                    >
                      ayushsinghgaur.works@gmail.com
                    </a>
                  </motion.li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div className="mt-12 flex justify-center space-x-4 sm:space-x-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#222222] text-white hover:bg-[#7b7b7b] transition-all duration-300"
              variants={socialLinkVariants}
              custom={index}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="mt-8 text-center text-[#7b7b7b] text-xs sm:text-sm"
          variants={copyrightVariants}
        >
          <p>© {new Date().getFullYear()} Ayush Singh. All rights reserved.</p>
          <p className="mt-1">Built with React and Tailwind CSS</p>
        </motion.div>
      </motion.div>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-[#7b7b7b] text-white shadow-lg hover:bg-white hover:text-black transition-all duration-300 z-50"
        variants={backToTopVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
      >
        <FiArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;
