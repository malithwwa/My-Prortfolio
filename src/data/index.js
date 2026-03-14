export const PROFILE = {
  name:     "Malith Anjana",
  title:    "Software Engineer",
  location: "Colombo, Sri Lanka 🇱🇰",
  email:    "malithwwa@gmail.com",
  github:   "github.com/malithwwa",
  linkedin: "linkedin.com/in/malithwwa",
  bio:      "I craft scalable, high-performance web applications with a passion for clean architecture and elegant user experiences. 5+ years turning complex problems into elegant digital solutions.",
  avatar:   "MA",
};

export const HERO_ROLES = [
  "Software Engineer",
  "Full Stack Developer",
  "Cloud Architect",
  "Open Source Contributor",
];

export const HERO_STATS = [
  { num: 5,  suffix: "+",  label: "Years Exp."   },
  { num: 20, suffix: "+",  label: "Projects"     },
  { num: 3,  suffix: "",   label: "Countries"    },
  { num: 50, suffix: "K+", label: "Users Served" },
];

export const SKILLS = [
  { category: "Frontend",       items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
  { category: "Backend",        items: ["Node.js", "Express", "Spring Boot", "Python", "FastAPI"] },
  { category: "Database",       items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase"] },
  { category: "DevOps & Cloud", items: ["Docker", "AWS", "CI/CD", "Kubernetes", "Terraform"] },
];

export const PROJECTS = [
  { id: 1, icon: "🌾", title: "AgriSense Platform",
    description: "IoT-powered smart agriculture platform connecting 500+ farmers across Sri Lanka. Real-time crop monitoring, weather analytics, and AI-driven yield predictions.",
    tags: ["React", "Node.js", "AWS IoT", "MongoDB"],
    live: "#", github: "#",
    stats: { users: "500+", uptime: "99.9%", data: "2M+ pts" } },
  { id: 2, icon: "💳", title: "CeylonPay Gateway",
    description: "Secure fintech payment gateway processing LKR transactions. End-to-end encrypted, PCI-DSS compliant with real-time fraud detection and multi-bank integration.",
    tags: ["Spring Boot", "PostgreSQL", "Redis", "Docker"],
    live: "#", github: "#",
    stats: { txns: "1M+", security: "PCI-DSS", latency: "<50ms" } },
  { id: 3, icon: "🏥", title: "MediTrack HMS",
    description: "Hospital management system deployed across 12 private hospitals. Patient records, appointment scheduling, pharmacy, and billing — all in one HIPAA-compliant system.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Docker"],
    live: "#", github: "#",
    stats: { hospitals: "12", patients: "50K+", records: "200K+" } },
  { id: 4, icon: "👁️", title: "DeepVision Analytics",
    description: "Computer vision SaaS for retail analytics. Footfall counting, heatmaps, demographic analysis, and conversion funnel optimization using custom-trained YOLO models.",
    tags: ["Python", "PyTorch", "React", "FastAPI"],
    live: "#", github: "#",
    stats: { accuracy: "97.3%", cams: "300+", fps: "30fps" } },
  { id: 5, icon: "📚", title: "EduLanka LMS",
    description: "Learning management system supporting 25,000+ students across Sri Lanka. Video streaming, live classes, AI-powered quiz generation, and progress analytics.",
    tags: ["Vue.js", "Node.js", "MongoDB", "AWS"],
    live: "#", github: "#",
    stats: { students: "25K+", courses: "500+", completion: "78%" } },
  { id: 6, icon: "🚚", title: "LogiTrack Supply Chain",
    description: "End-to-end supply chain visibility platform for FMCG companies. Real-time GPS tracking, demand forecasting, and automated reorder management.",
    tags: ["React", "Spring Boot", "Kafka", "PostgreSQL"],
    live: "#", github: "#",
    stats: { vehicles: "2K+", orders: "500K+", savings: "23%" } },
];

export const EXPERIENCE = [
  { role: "Senior Software Engineer", company: "Sysco LABS Sri Lanka", period: "2022 – Present",
    desc: "Leading a team of 6 engineers building microservices architecture for US food distribution. Reduced API latency by 40% through caching strategies." },
  { role: "Software Engineer", company: "WSO2", period: "2020 – 2022",
    desc: "Contributed to open-source API management platform. Built OAuth2/OIDC flows, improved developer portal UX, and wrote integration test suites." },
  { role: "Junior Developer", company: "Virtusa", period: "2019 – 2020",
    desc: "Developed banking portals for tier-1 US banks. Implemented responsive React components, REST API integrations, and accessibility improvements." },
];
