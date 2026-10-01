// ============================================================
// portfolioData.js — Centralized configuration for Shagun Vashisth's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

// ============================================================
// Personal Information
// ============================================================

export const personalInfo = {
  name: "Shagun Vashisth",
  firstName: "Shagun",
  brandName: "Shagun Vashisth",
  title: "Full Stack AI Developer",
  location: "Noida, Uttar Pradesh, India",
  phone: "YOUR_PHONE_NUMBER",
  emails: {
    primary: "sharmashagun426@gmail.com",
    secondary: "YOUR_SECONDARY_EMAIL",
  },
  summary:
    "Full Stack AI Developer with 7+ years of experience designing and building enterprise-scale web applications and AI-powered solutions. Specialized in React, Next.js, TypeScript, Node.js, Generative AI, RAG, LangChain, Vector Databases, and intelligent SaaS platforms. Passionate about building scalable products that combine modern software engineering with Artificial Intelligence.",
  resumeUrl: "/Shagun_Vashisth_Resume.pdf",
};

// ============================================================
// Social Links
// ============================================================

export const socialLinks = {
  github: "YOUR_GITHUB_PROFILE",
  linkedin: "YOUR_LINKEDIN_PROFILE",
  instagram: "https://instagram.com/i_shagun_vashisth",
};

// ============================================================
// Hero Section
// ============================================================

export const heroContent = {
  greeting: "Hi, I'm Shagun Vashisth",
  titleHighlight: "Full-Stack AI Developer",
  subtitle:
    "Building enterprise applications and AI-powered solutions with modern technologies",
  ctaPrimary: {
    text: "View My Work",
    href: "#projects",
  },
  ctaSecondary: {
    text: "Contact Me",
    href:
      "mailto:YOUR_PRIMARY_EMAIL?subject=Hiring Inquiry – Portfolio&body=Hello Shagun,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: {
    text: "Resume",
    href: "/Shagun_Vashisth_Resume.pdf",
  },
};

// ============================================================
// About
// ============================================================

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Shagun Vashisth</span>, a Senior Software Engineer and Full Stack AI Developer with 7+ years of experience building enterprise applications and AI-driven products. I specialize in React, Next.js, TypeScript, Node.js, and Generative AI technologies, creating scalable software, intelligent automation, and production-ready SaaS platforms that solve real-world business challenges.`,
  techStack: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Generative AI",
    "RAG",
  ],
};

// ============================================================
// Process
// ============================================================

export const skillsContent = {
  badge: "How I Build",
  heading: "Turning complex ideas into intelligent digital products",
  description:
    "From product discovery to AI-powered deployment, I follow a structured engineering approach that combines scalable architecture, clean code, and modern AI technologies to build high-quality software.",

  cards: [
    {
      number: "01",
      title: "Discover",
      text: "Understanding business goals, user problems, technical requirements, and defining the right solution before writing a single line of code.",
    },
    {
      number: "02",
      title: "Architect",
      text: "Designing scalable frontend, backend, APIs, databases, and AI workflows with performance, maintainability, and future growth in mind.",
    },
    {
      number: "03",
      title: "Build",
      text: "Developing enterprise-grade web applications, AI chatbots, RAG systems, and SaaS products using modern frameworks and industry best practices.",
    },
    {
      number: "04",
      title: "Optimize & Deploy",
      text: "Testing, performance optimization, CI/CD integration, cloud deployment, monitoring, and continuous improvements to deliver production-ready software.",
    },
  ],

  endText: "Building the future with AI 🚀",
};

// ============================================================
// Technical Skills
// ============================================================

export const technicalSkills = {
  categories: [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 98 },
        { name: "Next.js", level: 95 },
        { name: "TypeScript", level: 95 },
        { name: "JavaScript (ES6+)", level: 98 },
        { name: "HTML5", level: 98 },
        { name: "CSS3 / SCSS", level: 96 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Material UI", level: 95 },
        { name: "Bootstrap", level: 94 }
      ]
    },

    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 86 },
        { name: "REST APIs", level: 95 },
        { name: "JWT Authentication", level: 90 },
        { name: "API Integration", level: 95 }
      ]
    },

    {
      title: "AI & Generative AI",
      skills: [
        { name: "Generative AI", level: 90 },
        { name: "RAG", level: 92 },
        { name: "LangChain", level: 90 },
        { name: "Google Gemini API", level: 92 },
        { name: "Prompt Engineering", level: 90 },
        { name: "Vector Databases", level: 88 },
        { name: "Pinecone", level: 88 },
        { name: "Embeddings", level: 87 },
        { name: "Semantic Search", level: 90 },
        { name: "AI Chatbots", level: 92 }
      ]
    },

    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "MongoDB Atlas", level: 88 },
        { name: "PostgreSQL", level: 82 },
        { name: "Pinecone", level: 88 }
      ]
    },

    {
      title: "Libraries & Tools",
      skills: [
        { name: "Redux Toolkit", level: 95 },
        { name: "TanStack Query", level: 92 },
        { name: "TanStack Table", level: 90 },
        { name: "D3.js", level: 85 },
        { name: "ApexCharts", level: 88 },
        { name: "Git", level: 95 },
        { name: "GitHub", level: 95 },
        { name: "Azure DevOps", level: 90 },
        { name: "Postman", level: 95 },
        { name: "VS Code", level: 98 }
      ]
    },

    {
      title: "Software Engineering",
      skills: [
        { name: "System Design", level: 85 },
        { name: "Micro Frontends", level: 88 },
        { name: "Module Federation", level: 85 },
        { name: "Performance Optimization", level: 95 },
        { name: "Responsive Design", level: 98 },
        { name: "CI/CD", level: 85 },
        { name: "Agile", level: 95 }
      ]
    }
  ]
};

// Brand New Content Creation Data
export const contentCreation = {
  badge: "Cinematic Content",
  heading: "Creative Direction & Cinematic Edits",
  description: "Beyond coding, I craft visual stories with premium editing, color grading, and creative pacing.",
  categories: [
    {
      title: "Cinematic Reels",
      description: "Visual stories crafted with cinematic lighting, premium color grading, and high-impact sound design.",
      stats: "100+ Reels Created With 100M views",
      icon: "🎥"
    },
    {
      title: "Travel Videos",
      description: "Immersive travel vlogs and aesthetic edits capturing cultures, landscapes, and visual rhythms.",
      stats: "2 Countries and 50+ Cities in India",
      icon: "✈️"
    },
    {
      title: "Guest Lecturer",
      description: "Invited by colleges to deliver technical sessions on modern web development, Full Stack engineering, and Artificial Intelligence, helping students bridge the gap between academics and industry.",
      stats: "Invited Speaker",
      icon: "🎤"
    },
    {
      title: "Knowledge Base SaaS",
      description:"Building enterprise AI platforms for organizations to securely search and chat with internal documents.",
      stats: "Current Project",
      icon: "📚",
    }
  ]
};

export const leadershipList = [
  {
    title: "7+ Years of Professional Experience",
    description:
      "Delivered scalable enterprise web applications across multiple business domains using modern frontend technologies.",
    role: "Senior Software Engineer",
    badge: "Experience",
  },
  {
    title: "AI & Generative AI Development",
    description:
      "Building RAG systems, AI chatbots, intelligent document search, and enterprise AI SaaS solutions.",
    role: "Full Stack AI Developer",
    badge: "AI",
  },
  {
    title: "Enterprise Application Development",
    description:
      "Worked on large-scale products for global clients with a focus on scalability, maintainability, and performance.",
    role: "Enterprise Software",
    badge: "Projects",
  },
  {
    title: "Award Recognition",
    description:
      "Received 'Pat on the Back' and 'Team Player' awards for delivering high-quality enterprise solutions.",
    role: "Award Winner",
    badge: "Recognition",
  },
  {
    title: "Continuous Learning",
    description:
      "Actively expanding expertise in Agentic AI, LangGraph, MCP, Docker, Kubernetes, and modern AI infrastructure.",
    role: "Lifelong Learner",
    badge: "Growth",
  },
];

// export const internshipsList = [
//   {
//     organization: "Coforge Limited",
//     role: "Senior Software Engineer",
//     duration: "May 2024 - Present",
//     skills: [
//       "React.js",
//       "Next.js",
//       "TypeScript",
//       "AI Integration",
//       "Enterprise Applications",
//     ],
//     tech: [
//       "React",
//       "Next.js",
//       "TypeScript",
//       "Azure DevOps",
//       "Git",
//     ],
//   },
//   {
//     organization: "Bada Business Pvt. Ltd.",
//     role: "Senior Frontend Developer",
//     duration: "Nov 2022 - Apr 2024",
//     skills: [
//       "Performance Dashboard",
//       "Data Visualization",
//       "State Management",
//       "API Integration",
//     ],
//     tech: [
//       "React",
//       "Redux",
//       "Material UI",
//       "ApexCharts",
//       "REST APIs",
//     ],
//   },
//   {
//     organization: "Chetu India Pvt. Ltd.",
//     role: "Software Engineer",
//     duration: "Jun 2021 - Sep 2022",
//     skills: [
//       "Frontend Development",
//       "Enterprise Solutions",
//       "Responsive UI",
//     ],
//     tech: [
//       "React",
//       "JavaScript",
//       "Bootstrap",
//       "Git",
//     ],
//   },
//   {
//     organization: "SachTech Solutions",
//     role: "Software Engineer Trainee",
//     duration: "Jun 2019 - May 2021",
//     skills: [
//       "Full Stack Development",
//       "JavaScript",
//       "React",
//       "Web Technologies",
//     ],
//     tech: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "React",
//     ],
//   },
// ];

export const internshipsList = [
  {
    organization: "Coforge Limited",
    role: "Senior Software Engineer",
    duration: "May 2024 - Present",
    skills: [
      "Developing enterprise-grade full-stack applications",
      "Designing AI-powered applications and RAG solutions",
      "Integrating LLMs and intelligent chatbot workflows",
    ],
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "LangChain",
      "Google Gemini",
      "RAG",
      "Pinecone",
      "Prompt Engineering",
      "AI Chatbots",
      "Redux Toolkit",
      "Azure DevOps",
    ],
  },

  {
    organization: "Bada Business Pvt. Ltd.",
    role: "Senior Software Engineer",
    duration: "Nov 2022 - Apr 2024",
    skills: [
      "Developed enterprise business dashboards",
      "Built reusable and scalable frontend architecture",
      "Integrated backend services and secure REST APIs",
      "Implemented state management and data visualization",
    ],
    tech: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Redux Toolkit",
      "Material UI",
      "ApexCharts",
      "D3.js",
      "TanStack Query",
      "Git",
      "GitHub",
    ],
  },

  {
    organization: "Chetu India Pvt. Ltd.",
    role: "Software Engineer",
    duration: "Jun 2021 - Sep 2022",
    skills: [
      "Developed full-stack enterprise web applications",
      "Built responsive and reusable user interfaces",
      "Designed backend APIs and business logic",
      "Integrated third-party services and REST APIs",
    ],
    tech: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "REST APIs",
      "JWT Authentication",
      "Git",
      "GitHub",
    ],
  },

  {
    organization: "SachTech Solutions Pvt. Ltd.",
    role: "Software Engineer Trainee",
    duration: "Jun 2019 - May 2021",
    skills: [
      "Built full-stack web applications",
      "Worked on frontend and backend development",
      "Learned software engineering best practices",
      "Collaborated on real-world client projects",
    ],
    tech: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Git",
      "GitHub",
    ],
  },
];

// Brand New Soft Skills Data
export const softSkillsList = [
  { name: "Leadership", icon: "👑", desc: "Guiding teams, managing tasks, and driving project completion with shared vision." },
  { name: "Public Speaking", icon: "🎤", desc: "Confident stage presence, anchoring summits, and delivering articulate technical ideas." },
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating across fields, building racing carts, and engineering code in sync." },
  { name: "Communication", icon: "💬", desc: "Clear, concise, and structured interactions in both business and technical contexts." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new frameworks like FastAPI, Spring Boot, or automation tools like n8n." },
  { name: "Creativity", icon: "🎨", desc: "Blending cinematic aesthetics with software structure to build premium experiences." },
  { name: "Time Management", icon: "⏰", desc: "Balancing B.Tech studies, event hosting, and developing robust software platforms." }
];

export const projects = [
  {
    id: "ai-knowledge-base",
    number: "01",
    badge: "🚀 Featured AI Product",
    title: "AI Knowledge Base SaaS",
    description:
      "An enterprise AI-powered knowledge management platform that enables organizations to upload documents and interact with them through an intelligent chatbot. Built using RAG architecture, LangChain, Pinecone Vector Database, and Google Gemini to provide accurate, context-aware answers with source references.",
    techTags: [
      "React",
      "Next.js",
      "Node.js",
      "LangChain",
      "Gemini",
      "Pinecone",
      "RAG",
      "MongoDB",
      "TypeScript"
    ],
    links: {
      github: "#",
      demo: "#",
    },
    isFlagship: true,
  },

{
  id: "flydubai Kiosk Application",

  number: "02",

  badge: "✈️ Featured Aviation Product",

  title: "flydubai Self-Service Kiosk",

  description:
    "A self-service airport kiosk application developed for flydubai using the CUSS 1.5 platform and Embross. The application enables passengers to complete key airport self-service workflows including check-in, passport and boarding pass scanning, boarding pass printing, baggage tag printing, and baggage drop. Built with React, TypeScript, Redux, and Material UI, with a focus on reliable kiosk interactions and seamless passenger experience.",

  techTags: [
    "React",
    "TypeScript",
    "Redux",
    "Material UI",
    "CUSS 1.5",
    "Embross",
    "REST APIs",
    "Self-Service Kiosk"
  ],

  links: {
    github: "#",
    demo: "#",
  },

  isFlagship: true,
},
  {
    id: "smartdsa",
    number: "03",
    badge: "🤖 AI Project",
    title: "SmartDSA AI Instructor",
    description:
      "An AI-powered DSA mentor that provides algorithm explanations, optimized solutions, complexity analysis, and coding guidance using Generative AI. Designed with an interactive chat interface and focused on helping developers prepare for coding interviews.",
    techTags: [
      "React",
      "Node.js",
      "Gemini",
      "JavaScript",
      "Markdown",
      "AI Chatbot"
    ],
    links: {
      github: "https://github.com/sharmashagun426/SmartDSA.AI",
      demo: "https://smartdsaai.vercel.app/",
    },
    isFlagship: false,
  },

  {
    id: "volcafe",
    number: "04",
    badge: "💼 Enterprise Project",
    title: "Volcafe EUDR Portal",
    description:
      "Enterprise web application developed at Coforge for regulatory compliance and supply chain management. Contributed to scalable frontend architecture, reusable components, dashboard development, API integrations, and performance optimization.",
    techTags: [
      "React",
      "Next.js",
      "TypeScript",
      "Material UI",
      "Redux",
      "Azure DevOps"
    ],
    links: {
      github: null,
    },
    isFlagship: false,
  },

  {
    id: "performance-dashboard",
    number: "05",
    badge: "📊 Enterprise CRM Dashboard",
    title: "Performance Dashboard",
    description:
      "Developed an enterprise analytics dashboard for business performance monitoring with interactive charts, KPI tracking, real-time data visualization, and responsive user interfaces.",
    techTags: [
      "React",
      "Redux",
      "ApexCharts",
      "D3.js",
      "REST APIs",
      "Material UI"
    ],
    links: {
      github: null,
    },
    isFlagship: false,
  },

  {
    id: "flydubai",
    number: "05",
    badge: "✈️ Aviation",
    title: "Flydubai Kiosk Application",
    description:
      "Developed self-service airline kiosk modules with responsive UI, passenger workflows, and enterprise integrations using React, TypeScript, and Vite for airport check-in systems.",
    techTags: [
      "React",
      "TypeScript",
      "Vite",
      "REST APIs",
      "Enterprise Application"
    ],
    links: {
      github: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "micro1 AI Certification",
      issuer: "micro1",
      icon: "🤖",
    },
    {
      name: "GitHub Copilot",
      issuer: "Coforge Limited",
      icon: "💻",
    },
    {
      name: "Agile Principles & Methodology",
      issuer: "Coforge Limited",
      icon: "📋",
    },
    {
      name: "Full Stack Web Development",
      issuer: "SachTech Solutions Pvt. Ltd.",
      icon: "🌐",
    },
    {
      name: "Soft Skills Certification",
      issuer: "Mahindra Pride Classrooms",
      icon: "🤝",
    },
    {
      name: "Personality Development",
      issuer: "Mahindra Pride Classrooms",
      icon: "🎓",
    },
  ],

  viewAllUrl: "#",
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "Shri Venkateshwara university",
  cgpa: "8.35",
  graduation: "2023",
  twelfth: "12th Science – 81%",
  tenth: "10th CBSE – 80%",
};

export const footerContent = {
  taglines: [
    "Full Stack AI Developer",
    "React • Next.js • TypeScript • Node.js",
    "GenAI • RAG • LangChain • Pinecone",
  ],
  credential: "Senior Software Engineer • 7+ Years Experience",
  copyright: `© ${new Date().getFullYear()} Shagun Vashisth | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
