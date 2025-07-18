import React, { useRef, useEffect, useState } from "react";
import {
  FiArrowRight,
  FiGithub,
  FiExternalLink,
  FiCode,
  FiStar,
  FiEye,
} from "react-icons/fi";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
    github: "https://github.com/Ayush-singh141/e_com_backend.git",
    live: "https://ecombitbazaar.vercel.app/",
    image: "https://i.ibb.co/4wRLkhvj/image.png",
    size: "large",
    featured: true,
    stats: { stars: 0, views: 200 },
  },
  {
    title: "Legacy Vault",
    description:
      "A Storage Vault For Memories , supports audio/video/image.Add family members in your vault and leave behind your legacy",
    tags: [
      "React",
      "Cloudinary",
      "Express",
      "Gemini Ai",
      "Linus",
      "Framer-Motion",
    ],
    github: "https://github.com/Ayush-singh141/Legacy_Frontend.git",
    live: "https://legacy-frontend-eight.vercel.app/",
    image: "https://i.ibb.co/Q7PzFxbX/bg-img-legacy.png",
    size: "medium",
    featured: true,
    stats: { stars: 1, views: 200 },
  },
  {
    title: "AI Url Analyzer",
    description:
      "AI-powered url analyser which uses groq api and web crawling to summarize a website and its content and also you can chat with the ai chatbot to ask all type of question about that Analysed Website. (HackHazard Hackathon Project)",
    tags: ["Groq", "Gemini", "Mern Stack"],
    github:
      "https://github.com/Ayush-singh141/HackHazard_Groq_Url_analyzer-_-submission.git",
    live: "https://urlanalyzer.vercel.app/",
    image: "https://i.ibb.co/35Xsf1Bk/image.png",
    size: "small",
    featured: false,
    stats: { stars: 0, views: 300 },
  },
  {
    title: "Anubis Ai ChatBot",
    description:
      "My Best Creation Using Pure HTML,CSS and JAVASCRIPT.It is an Automated Natural User Bot and Intelligent System which support code generation,image generation,image analysis,chat history,chat memory and chart creation using Mermaid.js(Beta Unstable)",
    tags: [
      "HTML",
      "Gemini",
      "Css",
      "Javascript",
      "Mermaid Js",
      "Stable Diffusion",
    ],
    github: "https://new-optimized-anubis.vercel.app/",
    live: "https://new-optimized-anubis.vercel.app/",
    image: "https://i.ibb.co/8nfYCCZ3/image.png",
    size: "large",
    featured: true,
    stats: { stars: 0, views: 450 },
  },
  {
    title: "Portfolio (old)",
    description:
      "This is My Old Portfolio which i made when i was learning react and animations",
    tags: ["Framer-Motion", "React", "Gsap"],
    github: "https://react-portfolio-indol-theta.vercel.app/",
    live: "https://react-portfolio-indol-theta.vercel.app/",
    image: "https://i.ibb.co/R1KpkLS/image.png",
    size: "small",
    featured: false,
    stats: { stars: 1, views: 500 },
  },
  {
    title: "Pdf Processor",
    description:
      "I and My Friend made this project to solve our odd semester mcq exam problem,where we had to search their answers from different ai apps.This Web App Takes Your mcq question sheet and gives back a full pdf with almost all answers using ai and other tools in backend",
    tags: ["Tesseract Js", "Gemini", "Mern Stack"],
    github: "https://pdf-fixer.vercel.app/",
    live: "https://pdf-fixer.vercel.app/",
    image: "https://i.ibb.co/Kzf94cjR/image.png",
    size: "medium",
    featured: true,
    stats: { stars: 0, views: 2 },
  },
];

const ExploreMyProjectSection = () => {
  const sectionRef = useRef(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getBentoClass = (size) => {
    switch (size) {
      case "small":
        return "md:col-span-4 lg:col-span-4";
      case "medium":
        return "md:col-span-8 lg:col-span-8";
      case "large":
        return "md:col-span-12 lg:col-span-12";
      default:
        return "md:col-span-8 lg:col-span-8";
    }
  };

  const getHeightClass = (size) => {
    switch (size) {
      case "small":
        return "h-72";
      case "medium":
        return "h-80";
      case "large":
        return "h-96";
      default:
        return "h-80";
    }
  };

  const getGradient = (index) => {
    const gradients = [
      "from-purple-600/40 via-indigo-600/30 to-blue-600/20",
      "from-emerald-600/40 via-teal-600/30 to-cyan-600/20",
      "from-pink-600/40 via-rose-600/30 to-orange-600/20",
      "from-blue-600/40 via-cyan-600/30 to-teal-600/20",
      "from-yellow-600/40 via-orange-600/30 to-red-600/20",
      "from-indigo-600/40 via-purple-600/30 to-pink-600/20",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative"
      id="projects"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transform transition-all duration-1000 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Explore My{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A curated collection of my latest work, showcasing innovation in
            design and development
          </p>
        </div>

        {/* Enhanced Bento Grid */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative col-span-12 ${getBentoClass(
                project.size
              )} 
                transform transition-all duration-700 hover:scale-[1.02] hover:z-10
                ${
                  inView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <FiStar className="w-3 h-3" />
                  Featured
                </div>
              )}

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl overflow-hidden border border-gray-700/50 backdrop-blur-sm hover:border-gray-600/70 transition-all duration-500 h-full">
                {/* Project Image/Visual */}
                <div
                  className={`${getHeightClass(
                    project.size
                  )}  relative overflow-hidden`}
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                    backgroundPosition: "center center",
                  }}
                >
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] animate-pulse"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(255,255,255,0.05)_50%,transparent_51%)] bg-[length:20px_20px]"></div>
                  </div>

                  {/* Hover Overlay */}
                  <div
                    className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
                      hoveredProject === index ? "opacity-100" : "opacity-0"
                    } flex items-center justify-center`}
                  >
                    <div className="flex gap-4">
                      <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200">
                        <a target="_blank" href={project.github}>
                          <FiGithub className="w-5 h-5 text-white" />
                        </a>
                      </button>
                      <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200">
                        <a target="_blank" href={project.live}>
                          <FiExternalLink className="w-5 h-5 text-white" />
                        </a>
                      </button>
                    </div>
                  </div>

                  {/* Project Icon */}
                  <div className="absolute top-4 left-4 p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                    <FiCode className="w-5 h-5 text-white" />
                  </div>

                  {/* Stats */}
                  <div className="absolute bottom-4 left-4 flex gap-4 text-white/80 text-sm">
                    <div className="flex items-center gap-1">
                      <FiStar className="w-4 h-4" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <FiEye className="w-4 h-4" />
                      {project.stats.views}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-gray-800/50 to-gray-700/50 text-sm text-gray-300 rounded-full border border-gray-700/50 hover:border-gray-600/50 transition-all duration-200 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-lg"
                        aria-label="GitHub repository"
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                      <a
                        href={project.live}
                        className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-lg"
                        aria-label="Live demo"
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    <a
                      href={project.live}
                      className="flex items-center text-sm font-medium text-white hover:text-purple-400 transition-colors duration-200 group/link"
                    >
                      View Project
                      <FiArrowRight className="ml-1 group-hover/link:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <div
          className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <a
            target="_blank"
            href="https://github.com/Ayush-singh141"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 border border-transparent hover:scale-105 group"
          >
            View All Projects
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExploreMyProjectSection;
