import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiTrendingUp, FiUser, FiAward, FiBriefcase, FiMail, FiDownload } from 'react-icons/fi';
import SpotlightCard from './SpotLightCard';

const AboutMeSection = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardHover = {
    hover: { 
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  const skills = [
    { name: "MERN Stack", level: 90, icon: <FiLayers className="inline mr-2" /> },
    { name: "Frontend Development", level: 85, icon: <FiCode className="inline mr-2" /> },
    { name: "Framer Motion", level: 75, icon: <FiTrendingUp className="inline mr-2" /> },
    { name: "Web Dev Experience", level: 80, icon: <FiAward className="inline mr-2" /> },
    { name: "UI/Ux", level: 70, icon: <FiUser className="inline mr-2" /> },
    { name: "Problem Solving", level: 88, icon: <FiBriefcase className="inline mr-2" /> }
  ];

  const experience = [
    {
      role: "FullStack Development And Ai Marketing Strategies Intern",
      company: "Myna Seva Foundation",
      period: "2025 - Present",
      description: "Working At Myna Seva Foundation Intern as Fullstack and Ai Marketing intern."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            whileHover={{ scale: 1.02 }}
          >
            About <span className="text-[#7b7b7b]">Me</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-[#7b7b7b] max-w-3xl mx-auto"
            whileHover={{ scale: 1.01 }}
          >
            Crafting digital experiences that blend aesthetics with functionality
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Profile Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            whileHover="hover"
            variants={cardHover}
            className="md:col-span-2 bg-[#222222] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#7b7b7b]"
          >
            <SpotlightCard>
            <div className="flex flex-col md:flex-row gap-8">
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ rotate: 2 }}
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#7b7b7b] overflow-hidden shadow-md">
                  {/* Replace with your image */}
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <img className='object-cover' src="https://i.ibb.co/35gScpgv/myimage.jpg" alt="my image" />
                  </div>
                </div>
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Ayush Singh</h3>
                <p className="text-[#7b7b7b] font-medium mb-4">Fullstack Web Developer</p>
                <p className="text-[#7b7b7b] mb-4">
                With over 2+ years of experience building end-to-end digital solutions, I specialize in crafting scalable backend architectures and seamless frontend interfaces. I combine technical depth with a user-focused mindset to deliver robust, performant, and intuitive web applications.
                </p>
                <p className="text-[#7b7b7b] mb-6">
                  When I'm not developing, you can find me contributing to open-source projects, mentoring junior students, or exploring new coffee shops in Kanpur.
                </p>
                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {["UI/UX", "React", "Figma", "Tailwind", "Framer Motion", "JavaScript", "Express", "SQL/MongoDB"].map((tag, index) => (
                    <motion.span 
                      key={tag}
                      variants={fadeIn}
                      className="px-3 py-1 bg-[#7b7b7b] bg-opacity-20 rounded-full text-sm text-white hover:bg-opacity-40 transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>
            </SpotlightCard>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            whileHover="hover"
            variants={cardHover}
            className="bg-[#7b7b7b] bg-opacity-10 rounded-2xl p-8 text-white shadow-lg border border-[#7b7b7b] backdrop-blur-sm"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <motion.div 
                  className="w-12 h-12 bg-[#7b7b7b] bg-opacity-30 rounded-full flex items-center justify-center mb-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <FiTrendingUp className="w-6 h-6" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">My Journey</h3>
                <p className="text-[#7b7b7b] mb-6">Numbers that define my experience</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2+", label: "Years Exp" },
                  { value: "6+", label: "Projects" },
                  { value: "98%", label: "Satisfaction" },
                  { value: "10+", label: "Certificates" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="bg-[#7b7b7b] bg-opacity-20 p-3 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-[#7b7b7b]">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.3 }}
            whileHover="hover"
            variants={cardHover}
            className="md:col-span-1 bg-[#222222] rounded-2xl p-8 shadow-lg border border-[#7b7b7b]"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <FiCode className="text-[#7b7b7b]" />
              <span>My Skills</span>
            </h3>
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-white flex items-center">
                      {skill.icon}
                      {skill.name}
                    </span>
                    <span className="text-[#7b7b7b]">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#7b7b7b] bg-opacity-20 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1, type: "spring" }}
                      className="h-2 rounded-full bg-[#7b7b7b]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.4 }}
            whileHover="hover"
            variants={cardHover}
            className="md:col-span-2 bg-[#222222] rounded-2xl p-8 shadow-lg border border-[#7b7b7b]"
          >
            <SpotlightCard>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <FiBriefcase className="text-[#7b7b7b]" />
              <span>Professional Experience</span>
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div 
                  key={index}
                  className="border-l-2 border-[#7b7b7b] pl-4 py-2 relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: index * 0.15 }}
                >
                  <div className="absolute -left-2 top-3 w-3 h-3 rounded-full bg-[#7b7b7b]"></div>
                  <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
                  <p className="text-[#7b7b7b] font-medium">{exp.company} • {exp.period}</p>
                  <p className="text-[#7b7b7b] mt-2">{exp.description}</p>
                </motion.div>
              ))}
            </div>
            </SpotlightCard>
          </motion.div>

          {/* Philosophy Card */}
          
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center"
        >
          <a target='_blank' href="https://i.ibb.co/Y7LP0q66/Resume.jpg" download>
          <motion.button 
            className="px-8 py-3 bg-[#7b7b7b] text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#222222" }}
            whileTap={{ scale: 0.95 }}
          >
            <FiDownload />
            Download Resume
          </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMeSection;