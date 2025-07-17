import { Experience, Project, Skill, Achievement, Certification, PersonalInfo } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Sourabh Singh",
  email: "singhsourabh16c@gmail.com",
  phone: "+91-7982480700",
  linkedin: "https://www.linkedin.com/in/saurabh-singh-b420b3197",
  github: "https://github.com/sr16official",
  summary: "Performance-oriented and diligent Machine Learning Engineer with expertise in Python programming, Generative AI, data modeling, and database management. Strong foundation in machine learning algorithms and statistical modeling. Experienced in Deep Learning and LangChain for developing advanced AI applications."
};

export const education = {
  institution: "Maharaja Surajmal Institute of Technology",
  location: "Delhi, India",
  degree: "Bachelor of Technology – Electronics and Communication Engineering",
  gpa: "9.1",
  duration: "August 2019 - June 2023",
  courses: ["Data Structures", "Linear Algebra", "Calculus", "Artificial Intelligence", "Machine Learning", "Databases", "SQL", "NLP", "System design"]
};

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["Python", "SQL", "Go"]
  },
  {
    category: "ML Frameworks",
    items: ["TensorFlow", "Scikit-learn", "NLTK", "PyTorch"]
  },
  {
    category: "Data Visualization",
    items: ["Tableau", "Matplotlib", "Plotly"]
  },
  {
    category: "AI Technologies",
    items: ["Generative AI", "LangChain", "LLMOp", "Hugging Face"]
  },
  {
    category: "Soft Skills",
    items: ["Leadership", "Event Management", "Writing", "Problem Solving"]
  }
];

export const experiences: Experience[] = [
  {
    company: "Univ.AI",
    role: "Teaching Assistant and Content Creator",
    duration: "Sep 2022 - Present",
    type: "Full-time",
    description: [
      "Provided comprehensive assistance for 150+ students learning Python, ML, and AI",
      "Achieved 25% increase in student grades and 90% satisfaction rating",
      "Streamlined editorial calendar, enhancing content delivery efficiency by 50%",
      "Published high-quality articles and case studies on ML topics"
    ]
  },
  {
    company: "Alphec",
    role: "Data Science Intern",
    duration: "Dec 2021 - June 2022",
    type: "Remote",
    description: [
      "Developed AI Chatbot with voice input and dual-output functionality",
      "Built AI-based legal system with NLP and ML techniques",
      "Enhanced legal research efficiency by 30%",
      "Collaborated with multidisciplinary team of developers and legal experts"
    ]
  }
];

export const projects: Project[] = [
  {
    title: "Legal AI System",
    description: "Comprehensive legal AI system with query answering and bail prediction features using fine-tuned Llama 12B and NandaB 10B models.",
    technologies: ["Python", "Streamlit", "Hugging Face", "Google Colab"],
    date: "August 2024",
    features: [
      "Legal query answering system",
      "Bail prediction using ML models",
      "Model quantization and pruning",
      "Supreme Court and High Court judgments corpus"
    ]
  },
  {
    title: "GPT-2 from Scratch",
    description: "Reproduced GPT-2 architecture from scratch with optimized training pipeline for fast overnight training on Google Cloud.",
    technologies: ["Python", "PyTorch", "Google Colab"],
    date: "June 2025",
    features: [
      "Complete GPT-2 reproduction",
      "Optimized training pipeline",
      "Google Cloud deployment",
      "Performance benchmarking"
    ]
  },
  {
    title: "Restaurant Web Application",
    description: "Modern web application with chatbot integration for restaurant information and table booking system.",
    technologies: ["Next.js", "React", "TypeScript"],
    date: "June 2025",
    features: [
      "Restaurant information display",
      "Table booking system",
      "Integrated chatbot",
      "Responsive design"
    ]
  },
  {
    title: "Sports & Nutrition RAG Model",
    description: "RAG pipeline utilizing GPT-3 for sports and nutrition content generation with real-time data integration.",
    technologies: ["Python", "Flask", "Streamlit", "GPT-3"],
    date: "March 2024",
    features: [
      "Retrieval-Augmented Generation",
      "Real-time data integration",
      "Sports and nutrition focus",
      "Enhanced accuracy and relevance"
    ]
  },
  {
    title: "Image-to-Image GANs",
    description: "Innovative GAN implementation for realistic image generation from basic outlines with 30-second improvement in rendering time.",
    technologies: ["Python", "TensorFlow", "GANs"],
    date: "March 2023",
    features: [
      "Image-to-Image translation",
      "Realistic image generation",
      "30-second rendering improvement",
      "Basic outline to detailed image"
    ]
  }
];

export const achievements: Achievement[] = [
  {
    platform: "LeetCode",
    count: "850+",
    description: "Coding Problems Solved",
    link: "https://leetcode.com/sr16official11/"
  },
  {
    platform: "StrataScracth",
    count: "100+",
    description: "SQL & Pandas Questions",
    link: "https://platform.stratascratch.com/user/sr16official@gmail.com"
  }
];

export const certifications: Certification[] = [
  {
    name: "Natural Language Processing (NLP)",
    issuer: "Coursera and Sentdex"
  },
  {
    name: "Data Structures and Algorithms with Python",
    issuer: "Online Platform"
  },
  {
    name: "Machine Learning",
    issuer: "Udemy"
  }
];