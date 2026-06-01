// lib/data.js
// ── Edit all your portfolio content here ──────────────────────────────────────

export const personal = {
  name: "Abdul Suban",
  fullName: "Abdul Suban Mohd Ismail Shaikh",
  tagline: "Full Stack Developer",
  roles: [
    "Full Stack Developer",
    "React & Next.js Engineer",
    "Backend Developer",
    "Problem Solver",
  ],
  summary:
    "Results-driven Full Stack Developer with hands-on experience building scalable web applications using React, Node, Express, MongoDB & Flask. Proven in end-to-end product delivery, REST API development, real-time chat systems & payment integrations.",
  location: "Mumbai, Maharashtra",
  email: "suban14925@gmail.com",
  phone: "+91 7208718064",
  github: "https://github.com/Suban2108",
  linkedin: "https://linkedin.com/in/suban-shaikh",
  leetcode: "https://leetcode.com/u/suban-shaikh",
  swapCircle: "https://swap-circle-frontend.onrender.com/",
  resumeUrl: "/resume.pdf", // Place your resume PDF in the /public folder as resume.pdf
};

export const skills = [
  {
    category: "Languages",
    icon: "Code2",
    items: [
      { name: "JavaScript", level: 88 },
      { name: "Python", level: 82 },
      { name: "C / C++", level: 75 },
      { name: "SQL", level: 78 },
      { name: "HTML5 / CSS3", level: 92 },
    ],
  },
  {
    category: "Frontend",
    icon: "Layout",
    items: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Redux", level: 75 },
      { name: "Tailwind CSS", level: 88 },
      { name: "ShadCN UI", level: 82 },
      { name: "PWA", level: 72 },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 83 },
      { name: "Flask", level: 78 },
      { name: "RESTful APIs", level: 88 },
    ],
  },
  {
    category: "Database",
    icon: "Database",
    items: [
      { name: "MongoDB Atlas", level: 85 },
      { name: "MySQL", level: 75 },
      { name: "PostgreSQL", level: 68 },
      { name: "Firebase Firestore", level: 72 },
      { name: "IndexedDB", level: 65 },
    ],
  },
  {
    category: "Tools",
    icon: "Wrench",
    items: [
      { name: "Git & GitHub", level: 88 },
      { name: "Postman", level: 82 },
      { name: "JIRA", level: 70 },
      { name: "Firebase", level: 75 },
    ],
  },
  {
    category: "AI / ML",
    icon: "Brain",
    items: [
      { name: "TensorFlow / Keras", level: 68 },
      { name: "PyTorch", level: 62 },
      { name: "OpenAI APIs", level: 72 },
      { name: "NLP / Pandas", level: 65 },
    ],
  },
];

export const experience = [
  {
    role: "Frontend Developer Intern",
    company: "Lonely Bag Food Rescue Pvt Ltd",
    location: "Mumbai, India",
    period: "Mar 2024 – Apr 2024",
    type: "Internship",
    bullets: [
      "Collaborated with senior engineers to build and deploy a cross-platform web application using Next.js, improving development efficiency by an estimated 25%.",
      "Contributed across the full development lifecycle — reducing feature iteration time by an estimated 20% — through ideation, architecture design, UI/UX, and coding.",
      "Implemented scalable state management and API integration practices, reducing 15+ recurring API-related issues and improving overall application reliability.",
      "Participated in code reviews, sprint planning, and Agile collaboration, contributing to 10+ successful sprint deliveries.",
    ],
    tech: ["Next.js", "React.js", "REST APIs", "Agile", "JIRA"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Seed Connect",
    subtitle: "Farmer-to-Retailer Platform",
    period: "Jun 2023 – Dec 2023",
    description:
      "Web platform enabling direct transactions between farmers and retailers, eliminating intermediaries and improving pricing transparency to support fair crop trade for 500+ agricultural listings.",
    bullets: [
      "Integrated map-based location tracking for farmer profiles, helping retailers identify nearby suppliers — improving product discovery by 35%.",
      "Built business onboarding & classification module, improving farmer/retailer search efficiency by 40%.",
      "Optimised cloud-based data management with MongoDB Atlas, ensuring 99.9% data availability.",
      "Built responsive and reusable UI components, reducing frontend development effort by 25%.",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "RazorPay",
      "ShadCN UI",
      "Google Maps API",
    ],
    github: "https://github.com/Suban2108/Seed-Connect",
    live: null,
    color: "#10b981", // green accent
    icon: "Sprout",
  },
    {
    id: 2,
    title: "Innovate Sphere Tech",
    subtitle: "E-Commerce Recommendation System",
    period: "Jan 2024 - May 2024", // Update if you have exact dates
    description:
      "E-Commerce platform focused on product management, authentication, and personalized recommendations to enhance user engagement and product discovery.",
    bullets: [
      "Developed and maintained RESTful APIs using Node.js and Express.js for product management and user authentication workflows.",
      "Implemented a recommendation system that improved product discovery and personalized the user experience.",
      "Designed secure backend services with optimized database operations, enhancing application performance and scalability.",
      "Ensured reliable server-side functionality through efficient API architecture and MongoDB data management.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Suban2108/E-Commerce-TECH-", // Add repository link
    live: null,
    color: "#3b82f6", // blue accent
    icon: "ShoppingBag",
  },
  {
    id: 3,
    title: ".Tomato",
    subtitle: "Food Delivery Website Application",
    period: "Feb 2024 - Apr 2024", // Update if you have exact dates
    description:
      "Optimized food delivery web application featuring dynamic menu listings, cart management, secure online payments, and an admin dashboard for efficient food and order management.",
    bullets: [
      "Developed dynamic food item listing and add-to-cart functionality, providing a seamless ordering experience for customers.",
      "Integrated Stripe payment gateway to enable secure and reliable online transactions.",
      "Built an Admin Dashboard for adding, updating, and managing food items with real-time synchronization on the client side.",
      "Implemented order management features, allowing administrators to efficiently track and process customer orders.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Stripe"],
    github: "https://github.com/Suban2108/FOOD-DEL-MERN", // Add repository link
    live: "https://food-del-frontend-osgd.onrender.com", // Add deployment link
    admin_live: "https://food-del-admin-ho40.onrender.com",
    color: "#ef4444", // tomato red accent
    icon: "UtensilsCrossed",
  },
    {
    id: 4,
    title: "SwapCircle",
    subtitle: "Items Barter Platform",
    period: "Nov 2024 – Jan 2025",
    description:
      "Web platform enabling private item bartering & donations within invite-only user circles, facilitating community exchanges & increasing user engagement by 35%.",
    bullets: [
      "Engineered a private bartering platform supporting 200+ item exchanges and improving user engagement by 35%.",
      "Built a real-time one-to-one and group chat system integrated with barter & donation threads, enabling 250+ user interactions.",
      "Introduced a Karma points reward system that increased repeat participation by an estimated 30%.",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Tailwind CSS",
      "ShadCN UI",
    ],
    github: "https://github.com/Suban2108/Swap-Circle",
    live: "https://swap-circle-frontend.onrender.com/",
    color: "#6366f1", // indigo accent
    icon: "ArrowLeftRight",
  },
  {
    id: 5,
    title: "MedBridge AI",
    subtitle: "AI Healthcare Assistant — Final Year Project",
    period: "May 2025 – May 2026",
    description:
      "Multi-model healthcare AI application enabling symptom-based disease prediction and AI chatbot assistance with 14+ language support and PWA offline functionality.",
    bullets: [
      "Built prediction and recommendation workflows using a medical dataset with 41 diseases, 132 symptoms, and ~4,920 records with 90% model accuracy.",
      "Designed REST APIs with fast response time (<50ms for prediction, <100ms for chatbot responses).",
      "Integrated multilingual voice input using OpenAI Whisper API with support for 14+ languages.",
      "Implemented PWA features with service worker caching and IndexedDB for offline usage.",
    ],
    tech: [
      "React.js",
      "Vite",
      "Flask",
      "Python",
      "TensorFlow/Keras",
      "PyTorch",
      "OpenAI Whisper",
      "PWA",
      "IndexedDB",
    ],
    github: "https://github.com/Suban2108/MedBridge-AI",
    live: null,
    color: "#06b6d4", // cyan accent
    icon: "HeartPulse",
    featured: true,
  },
];

export const certifications = [
  {
    title: "Python for Everybody",
    issuer: "Coursera",
    year: "2024",
    credentialId: "QXOIR8SGUV3L",
    link: "https://www.coursera.org",
    icon: "GraduationCap",
    color: "#0ea5e9",
  },
  {
    title: "Generative AI & Prompt Engineering",
    issuer: "Udemy",
    year: "2025",
    credentialId: null,
    link: "https://www.udemy.com",
    icon: "Bot",
    color: "#a78bfa",
  },
];

export const achievements = [
  {
    title: "LeetCode Top 50% Globally",
    description:
      "Ranked among the top 50% globally in LeetCode Weekly Contests, solving 380+ algorithmic and data structure problems.",
    icon: "Trophy",
    color: "#f59e0b",
  },
  {
    title: "HackerRank 5★ C++",
    description:
      "Earned 5-star rating in C++ on HackerRank for proficiency in algorithms and object-oriented programming.",
    icon: "Star",
    color: "#10b981",
  },
];

export const education = [
  {
    degree: "B.E. in Computer Engineering",
    institution: "Thadomal Shahani Engineering College",
    affiliation: "Mumbai University",
    period: "2022 – 2026",
    grade: "CGPA: 8.4 / 10.0",
    icon: "GraduationCap",
  },
  {
    degree: "HSC – Computer Science Bifocal",
    institution: "SIES College of Arts, Science & Commerce",
    affiliation: "Maharashtra State Board",
    period: "2020 – 2022",
    grade: "81.50%",
    icon: "School",
  },
  {
    degree: "SSC",
    institution: "Crescent High School",
    affiliation: "Maharashtra State Board",
    period: "2019 – 2020",
    grade: "89.20%",
    icon: "School",
  },
];
