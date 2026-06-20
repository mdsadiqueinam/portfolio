export const cvData = {
  personalInfo: {
    name: "MD SADIQUE INAM",
    title: "Senior Full-Stack Developer",
    heroTagline: "Building fast, reliable web applications.",
    heroDescription:
      "Full-Stack Developer with over 4 years of experience creating real-time web apps that solve real business problems.",
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
    "Full-Stack Developer with 4+ years of experience building real-time web applications. Specialized in Vue.js frontend development and Node.js backend architecture. Proficient with PostgreSQL database design, Docker containerization, and Socket.IO real-time communication. Currently pursuing B.Tech in Computer Science while delivering production projects. Adept at modernizing legacy systems and building maintainable, scalable solutions.",

  experience: [
    {
      title: "Senior Full-Stack Developer",
      company: "Wiseboxs Softworks Private Limited",
      location: "Hybrid",
      period: "April 2022 - May 2026",
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
      period: "2026 - Present",
      description:
        "Open-source Rust library for automatic GraphQL API generation from PostgreSQL schemas via schema introspection. Built with async-graphql, supporting generated queries, mutations, filtering, ordering, and pagination. Features request-level transaction configuration for roles, settings, timeouts, and Row-Level Security patterns. Integrates with Axum web framework. Published on crates.io.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2426&auto=format&fit=crop",
      tags: [
        "Rust",
        "PostgreSQL",
        "GraphQL",
        "async-graphql",
        "Axum",
        "TypeScript",
      ],
    },
    {
      name: "Success.co",
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
      name: "Wire2air",
      period: "Jan 2025 - May 2026",
      description:
        "Identifying and resolving software bugs to maintain application stability. Developing and implementing new components based on evolving user requirements and collaborating with designers, PMs, and QA engineers for seamless integration.",
      image:
        "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop",
      tags: ["Vue.js", "Node.js", "TypeScript"],
    },
    {
      name: "MHC NorthStar",
      period: "May 2024 - Dec 2024",
      description:
        "Spearheaded the project migration from Vue 2 to Vue 3. This involved updating Vuetify.js components, resolving breaking changes, and writing Jest tests to ensure code quality and prevent regressions.",
      tags: ["Vue.js", "Node.js", "TypeScript"],
    },
    {
      name: "Struxe",
      period: "Apr 2022 - Apr 2024",
      description:
        "Led full-stack development of a project management platform using Quasar (Vue.js 3), Pinia, and Socket.IO. Developed the backend with AdonisJS 5, Node.js, TypeScript, Docker, and PostgreSQL.",
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
      name: "Teamwork",
      period: "Nov 2023 - Apr 2024",
      description:
        "Converted the Teamwork Project Management Tool's legacy settings pages from iframes into modern, maintainable Vue.js components, building them from scratch to match existing designs.",
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
