import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiUser, FiMessageSquare, FiSend, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

const ContactMeSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace with your actual email submission logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const slideInLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    }
  };

  const slideInRight = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    }
  };

  return (
    <section 
      className="bg-[#0a0a0a] text-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-x-hidden"
      id="contact"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"
            variants={itemVariants}
          >
            Get In <span className="text-[#7b7b7b]">Touch</span>
          </motion.h2>
          <motion.p 
            className="text-[#7b7b7b] text-base sm:text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Form */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
            className="bg-[#111111] rounded-xl p-6 sm:p-8 lg:p-10 border border-[#7b7b7b]/20 hover:border-[#7b7b7b]/50 transition-all duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">Send Me a Message</h3>
            
            {submitStatus === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-900/30 border border-green-500 rounded-lg"
              >
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-900/30 border border-red-500 rounded-lg"
              >
                Something went wrong. Please try again later.
              </motion.div>
            )}

            <form onSubmit={handleSubmit}>
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Name Field */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-[#7b7b7b] mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="text-[#7b7b7b]" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-[#222222] border border-[#7b7b7b]/30 focus:border-[#7b7b7b]/50 w-full pl-10 pr-4 py-3 rounded-lg text-white placeholder-[#7b7b7b]/50 focus:outline-none focus:ring-1 focus:ring-[#7b7b7b]/30 transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                </motion.div>

                {/* Email Field */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-[#7b7b7b] mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="text-[#7b7b7b]" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-[#222222] border border-[#7b7b7b]/30 focus:border-[#7b7b7b]/50 w-full pl-10 pr-4 py-3 rounded-lg text-white placeholder-[#7b7b7b]/50 focus:outline-none focus:ring-1 focus:ring-[#7b7b7b]/30 transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </motion.div>

                {/* Message Field */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-[#7b7b7b] mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3">
                      <FiMessageSquare className="text-[#7b7b7b]" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="bg-[#222222] border border-[#7b7b7b]/30 focus:border-[#7b7b7b]/50 w-full pl-10 pr-4 py-3 rounded-lg text-white placeholder-[#7b7b7b]/50 focus:outline-none focus:ring-1 focus:ring-[#7b7b7b]/30 transition-all duration-200"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${isSubmitting ? 'bg-[#7b7b7b]/50' : 'bg-[#7b7b7b] hover:bg-white hover:text-black'}`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message <FiSend className="ml-2" />
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
            className="bg-[#111111] rounded-xl p-6 sm:p-8 lg:p-10 border border-[#7b7b7b]/20 hover:border-[#7b7b7b]/50 transition-all duration-300 h-full"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">Contact Information</h3>
            
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                variants={itemVariants}
                className="flex items-start"
              >
                <div className="flex-shrink-0 bg-[#222222] p-3 rounded-lg mr-4">
                  <FiMail className="text-[#7b7b7b] w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-[#7b7b7b] mb-1">Email</h4>
                  <a href="mailto:ayushsinghgaur.works@gmail.com" className="text-white hover:text-[#7b7b7b] transition-colors duration-200">
                  ayushsinghgaur.works@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-start"
              >
                <div className="flex-shrink-0 bg-[#222222] p-3 rounded-lg mr-4">
                  <svg className="text-[#7b7b7b] w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-[#7b7b7b] mb-1">Location</h4>
                  <p className="text-white">Kanpur, Uttar Pradesh</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-start"
              >
                <div className="flex-shrink-0 bg-[#222222] p-3 rounded-lg mr-4">
                  <svg className="text-[#7b7b7b] w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-[#7b7b7b] mb-1">Phone</h4>
                  <a href="tel:+1234567890" className="text-white hover:text-[#7b7b7b] transition-colors duration-200">
                    +91 9794-580-488    
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="pt-6"
              >
                <h4 className="text-sm font-medium text-[#7b7b7b] mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com/Ayush-singh141"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#222222] hover:bg-[#7b7b7b] w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiGithub className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/ayush-singh-a619622a9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#222222] hover:bg-[#7b7b7b] w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiLinkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://x.com/BATTLEPRIM39865"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#222222] hover:bg-[#7b7b7b] w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiTwitter className="w-5 h-5" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMeSection;