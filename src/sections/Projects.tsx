import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Calendar, Code, Zap, Star, GitBranch, Users, Award } from 'lucide-react';
import { projects } from '../data/portfolio';

export const Projects: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="relative">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Featured Projects
            </h2>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl" />
          </div>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
            <Code className="w-8 h-8 text-blue-600" />
            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full" />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore my collection of innovative AI solutions and cutting-edge machine learning applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(index)}
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-blue-600 h-full overflow-hidden">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Project Header */}
                <div className="relative flex items-center justify-between mb-6">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Code className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{project.date}</span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full font-medium border border-blue-200 dark:border-blue-800"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-600 dark:text-gray-400 text-sm rounded-full font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Stats or Highlights */}
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>Featured</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitBranch className="w-4 h-4 text-green-500" />
                    <span>Open Source</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="relative flex gap-3">
                  <motion.a
                    href="https://github.com/sr16official" // Replace with your GitHub profile URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </motion.a>
                </div>

                {/* Hover Effect Indicator */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-b-3xl"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredProject === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Project Detail Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-4xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-gray-700"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {projects[selectedProject].title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {projects[selectedProject].date}
                      </p>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                {/* Project Description */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    About This Project
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    {projects[selectedProject].description}
                  </p>
                </div>

                {/* Key Features */}
                {projects[selectedProject].features && (
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Zap className="w-6 h-6 text-blue-600" />
                      Key Features
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {projects[selectedProject].features!.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-100 dark:border-blue-800"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-3 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {projects[selectedProject].technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Project Stats */}
                <div className="mb-8">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
                      <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 dark:text-gray-400">Status</p>
                      <p className="font-semibold text-gray-900 dark:text-white">Featured</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl">
                      <GitBranch className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 dark:text-gray-400">Type</p>
                      <p className="font-semibold text-gray-900 dark:text-white">Open Source</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
                      <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 dark:text-gray-400">Category</p>
                      <p className="font-semibold text-gray-900 dark:text-white">AI/ML</p>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex justify-center">
                  <motion.a
                    href="https://github.com/sr16official" // Replace with your GitHub profile URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                    View on GitHub
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};