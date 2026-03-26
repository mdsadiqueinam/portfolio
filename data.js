export const cvData = {
  personalInfo: {
    name: "MD SADIQUE INAM",
    title: "Freelance Full-Stack Developer",
    heroTagline: "Building fast, reliable web applications.",
    heroDescription:
      "Freelance Full-Stack Developer with over 4 years of experience creating real-time web apps that solve real business problems.",
  },

  contacts: [
    {
      type: "email",
      value: "md.sadique32@gmail.com",
      icon: "alternate_email",
      link: "mailto:md.sadique32@gmail.com",
    },
    {
      type: "location",
      value: "Kolkata, West Bengal, India",
      icon: "location_on",
    },
    {
      type: "github",
      value: "github.com/mdsadiqueinam",
      icon: "account_tree",
      link: "https://github.com/mdsadiqueinam",
    },
    {
      type: "linkedin",
      value: "linkedin.com/in/md32",
      icon: "link",
      link: "https://www.linkedin.com/in/md32/",
    },
  ],

  skills: [
    {
      name: "JavaScript",
      color: "blue",
      icon: "javascript",
      group: "Frontend",
    },
    {
      name: "Vue.js",
      color: "blue",
      icon: "settings_input_component",
      group: "Frontend",
    },
    { name: "TypeScript", color: "blue", icon: "terminal", group: "Frontend" },
    {
      name: "Kotlin (Android)",
      color: "blue",
      icon: "layers",
      group: "Frontend",
    },
    { name: "Kotlin", color: "blue", icon: "layers", group: "Backend" },
    { name: "Node.js", color: "blue", icon: "memory", group: "Backend" },
    { name: "AdonisJS", color: "blue", icon: "network_node", group: "Backend" },
    { name: "Rust", color: "red", icon: "rocket_launch", group: "Backend" },
    { name: "SQL", color: "green", icon: "database", group: "Databases" },
    {
      name: "Docker",
      color: "gray",
      icon: "deployed_code",
      group: "DevOps & Tools",
    },
    { name: "Git", color: "gray", icon: "fork_right", group: "DevOps & Tools" },
    { name: "HTML & CSS", color: "gray", icon: "html", group: "Frontend" },
  ],

  summary:
    "Full-Stack Developer with 4+ years of experience building real-time web applications. Specialized in Vue.js frontend development and Node.js/AdonisJS backend architecture. Proficient with PostgreSQL database design, Docker containerization, and Socket.IO real-time communication. Currently pursuing B.Tech in Computer Science while delivering freelance projects. Adept at modernizing legacy systems and building maintainable, scalable solutions.",

  experience: [
    {
      title: "Freelance Full-Stack Developer",
      company: "Independent Consultant",
      location: "Remote",
      period: "April 2022 - Present",
      responsibilities: [
        "Full-Stack Development: Designed and implemented complete web applications from database schema design to responsive Vue.js frontend interfaces.",
        "System Upgrades: Migrated legacy applications to modern tech stacks with comprehensive testing to ensure zero downtime during transitions.",
        "Code Modernization: Refactored outdated codebases into maintainable, reusable component architectures improving performance and developer velocity.",
        "Real-Time Features: Integrated Socket.IO for live data synchronization and instant updates in workspace collaboration tools.",
        "Client Collaboration: Worked directly with stakeholders to translate business requirements into technical solutions with on-time delivery.",
      ],
    },
  ],

  projects: [
    {
      name: "TurboGraph",
      period: "2025 - Present",
      description:
        "Open-source Rust library for automatic GraphQL API generation from PostgreSQL schemas via schema introspection. Built with async-graphql, supporting generated queries, mutations, filtering, ordering, and pagination. Features request-level transaction configuration for roles, settings, timeouts, and Row-Level Security patterns. Integrates with Axum web framework. Published on crates.io.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2426&auto=format&fit=crop",
      tags: ["Rust", "PostgreSQL", "GraphQL", "async-graphql", "Axum", "TypeScript"],
    },
    {
      name: "Confidential Client | Business Management Software (EOS)",
      period: "April 2025 - November 2025",
      description:
        "Enterprise web application implementing the Entrepreneurial Operating System (EOS) framework. Built live dashboards, scorecards, and tracking tools with real-time data visualization.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      tags: [
        "Vue.js",
        "Node.js",
        "AdonisJS",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Socket.IO",
        "TypeScript",
      ],
    },
    {
      name: "Confidential Client | Enterprise Messaging System",
      period: "Jan 2025 - Present",
      description:
        "High-throughput messaging system handling real-time SMS notification delivery with reliable processing and delivery confirmation.",
      image:
        "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop",
      tags: ["Vue.js", "Node.js", "TypeScript"],
    },
    {
      name: "Confidential Client | Infrastructure Platform",
      period: "Apr 2022 - Apr 2024",
      description:
        "Field operations management platform enabling real-time data sharing and communication between field engineers and project managers.",
      image:
        "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=2070&auto=format&fit=crop",
      tags: [
        "Vue.js",
        "Node.js",
        "AdonisJS",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Socket.IO",
        "TypeScript",
      ],
    },
    {
      name: "Confidential Client | Agile Workspace Tool",
      period: "Nov 2023 - Apr 2024",
      description:
        "Collaborative workspace application featuring real-time document editing, time tracking, and Kanban-style project boards.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
      tags: ["Vue.js", "Node.js", "Socket.IO", "TypeScript"],
    },
  ],

  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Seacom Skills University",
      location: "West Bengal, India",
      period: "2024 - 2027",
    },
    {
      degree: "Diploma in Electrical Engineering",
      institution: "Santiniketan Institute of Polytechnic",
      location: "West Bengal, India",
      period: "2019 - 2022",
    },
  ],

  services: [
    {
      icon: "terminal",
      title: "Full-Stack Development",
      description:
        "Building complete web apps from the database up to the user interface using Node.js, PostgreSQL, and Vue.js.",
    },
    {
      icon: "api",
      title: "API Integration",
      description:
        "Creating secure, fast APIs that connect your app to other services smoothly and reliably.",
    },
    {
      icon: "brush",
      title: "Frontend Modernization",
      description:
        "Taking old, slow code and updating it with modern tools to make it faster, better for SEO, and easier to work with.",
    },
  ],

  testimonials: [],
};
