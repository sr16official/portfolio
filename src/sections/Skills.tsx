import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, BarChart3, Brain, Users, Bot, GitBranch } from 'lucide-react';

// Enhanced skills data (no changes needed here)
const skills = [
	{
		category: 'Programming & Databases',
		items: ['Python', 'SQL', 'Go'],
	},
	{
		category: 'ML Frameworks & Libraries',
		items: ['TensorFlow', 'Scikit-learn', 'NLTK', 'Pytorch'],
	},
	{
		category: 'AI Technologies',
		items: [
			'Generative AI',
			'LangChain',
			'Large Language Models (LLM)',
			'LLMOps',
			'Computer Vision',
			'NLP',
		],
	},
	{
		category: 'Data Science & MLOps',
		items: [
			'Data Modeling',
			'Data Wrangling',
			'Database Management',
			'Predictive Modeling',
			'Statistical Modeling',
			'ML Ops',
		],
	},
	{
		category: 'Data Visualization',
		items: ['Tableau', 'Matplotlib'],
	},
	{
		category: 'Developer Tools & Platforms',
		items: ['GitHub', 'Google Colab', 'Streamlit', 'Next.js', 'React', 'Flask'],
	},
];

const categoryIcons = {
	'Programming & Databases': Code,
	'ML Frameworks & Libraries': Brain,
	'AI Technologies': Bot,
	'Data Science & MLOps': Database,
	'Data Visualization': BarChart3,
	'Developer Tools & Platforms': GitBranch,
	'Soft Skills': Users,
};

export const Skills: React.FC = () => {
	const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

	return (
		<section id="skills" className="relative py-24 bg-slate-950 overflow-hidden">
            {/* Background pattern for continuity */}
            <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full bg-[radial-gradient(circle_at_2px_2px,_rgba(34,211,238,0.4)_2px,_transparent_0)] bg-[size:40px_40px]" />
            </div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="text-center mb-20"
				>
					<h2 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                            Skills & Expertise
                        </span>
					</h2>
					<div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 mx-auto rounded-full" />
					<p className="text-lg text-slate-300 mt-8 max-w-3xl mx-auto font-light leading-relaxed">
						A comprehensive toolkit spanning machine learning, data science, and
						software development, reflecting a deep expertise in building
						intelligent systems.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{skills.map((skillCategory, categoryIndex) => {
						const Icon =
							categoryIcons[
								skillCategory.category as keyof typeof categoryIcons
							] || Code;

						return (
							<motion.div
								key={categoryIndex}
								initial={{ opacity: 0, y: 40 }}
								animate={inView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
								className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 border border-slate-700 hover:border-cyan-400/50 hover:-translate-y-2"
							>
								<div className="flex items-center gap-4 mb-6">
									<motion.div
										className="w-14 h-14 bg-gradient-to-br from-cyan-500 via-purple-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg"
										whileHover={{ rotate: 10, scale: 1.1 }}
									>
										<Icon className="w-7 h-7 text-white" />
									</motion.div>
									<h3 className="text-xl font-semibold text-white">
										{skillCategory.category}
									</h3>
								</div>

								<div className="space-y-3">
									{skillCategory.items.map((skill, skillIndex) => (
										<motion.div
											key={skillIndex}
											initial={{ opacity: 0, x: -20 }}
											animate={inView ? { opacity: 1, x: 0 } : {}}
											transition={{
												duration: 0.5,
												delay:
													categoryIndex * 0.1 + skillIndex * 0.05,
											}}
											className="flex items-center gap-3.5 p-3 bg-slate-800/60 rounded-lg hover:bg-slate-700/80 transition-colors duration-200"
										>
											<div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full flex-shrink-0" />
											<span className="text-slate-300 font-medium">
												{skill}
											</span>
										</motion.div>
									))}
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
