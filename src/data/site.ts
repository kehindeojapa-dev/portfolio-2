import portrait from "../assets/portrait.jpg";

export const site = {
  name: "Kehinde Ojapa",
  role: "Full-Stack Engineer",
  location: "Lagos, Nigeria",
  email: "kehindeojapa@gmail.com",
  /** Shown on the CV only, not on the website. */
  phone: "+234 816 097 1454",
  cv: "/cv/kehinde-ojapa-cv.pdf",
  yearsExperience: "5+",
  /** Includes internal products not listed on the site. */
  productsShipped: "10+",
  portrait,
  description:
    "Kehinde Ojapa is a full-stack engineer with 5+ years of experience in Lagos, Nigeria, building web platforms, backends and mobile apps across fintech, insurance, health and on-demand services.",
  headline: "I build products end to end, from the backend to the app store.",
  intro:
    "A full-stack engineer with 5+ years of experience, based in Lagos, Nigeria. I ship web platforms, the backends behind them and cross-platform mobile apps, across fintech, insurance, health and on-demand services.",
  bio: [
    "I'm Kehinde, a self-taught full-stack engineer with 5+ years of shipping production software. I enjoy turning messy real-world workflows into products that feel simple: from offline-first field tools and a crypto exchange to multi-tenant platforms and multi-product apps for Leadway Group.",
    "I work across the whole stack: React and TypeScript on the web, React Native and Expo on mobile, and NestJS or ASP.NET services on PostgreSQL and SQL Server behind them, covered by Jest tests and shipped through GitHub Actions. I care about systems that stay fast on modest devices, handle money and personal data carefully, and remain easy for a team to change.",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/kehindeojapa-dev", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kehinde-ojapa-69378b158", icon: "linkedin" },
  ],
  skills: [
    { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "jQuery"] },
    { group: "Mobile", items: ["React Native", "Expo", "iOS", "Android"] },
    { group: "Backend", items: ["NestJS", ".NET (C#)", "Node.js", "Express", "PHP"] },
    { group: "Data", items: ["PostgreSQL", "MSSQL", "MongoDB"] },
    { group: "Testing", items: ["Jest", "React Native Testing Library"] },
    { group: "DevOps & Cloud", items: ["Docker", "GitHub Actions", "CI/CD", "Azure"] },
    { group: "Practices", items: ["Multi-tenant apps", "Offline-first", "App Store & Play releases", "Git"] },
  ],
  domains: ["Fintech & Payments", "Insurance", "Health-tech", "Offline-first Mobile"],
  cvProfile: [
    "Full-stack engineer with 5+ years of experience building scalable web and mobile applications across fintech, insurance and health-tech. I build products end to end: React and Next.js on the web, React Native on mobile, and NestJS or .NET services on PostgreSQL and SQL Server behind them.",
    "Full-time at Leadway Assurance since 2021, alongside contract work on fintech and marketplace products. Proven track record of delivering high-impact solutions, optimising performance and leading third-party integrations, from concept to production.",
  ],
  certifications: [
    { name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft", date: "Aug 2025" },
    { name: "ISO/IEC 27001 Lead Implementer", date: "Oct 2024" },
  ],
  education: [
    {
      degree: "B.Tech, Computer Science",
      school: "Federal University of Technology, Akure (FUTA)",
      period: "2015 – 2019",
      activities: "Google Developer Group, FUTA Chapter",
    },
  ],
} as const;

export type Site = typeof site;
