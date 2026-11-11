import portrait from "../assets/portrait.jpg";

export const site = {
  name: "Kehinde Ojapa",
  role: "Software Developer",
  location: "Lagos, Nigeria",
  email: "kehindeojapa@gmail.com",
  cv: "/cv/kehinde-ojapa-cv.pdf",
  portrait,
  description:
    "Kehinde Ojapa is a software developer in Lagos, Nigeria, building mobile and web products in insurance, health and on-demand services.",
  headline: "I build mobile and web apps people use every day.",
  intro:
    "A software developer based in Lagos, Nigeria. I ship cross-platform apps on the App Store and Google Play, across insurance, health and on-demand services.",
  bio: [
    "I'm Kehinde, a self-taught software developer who enjoys turning messy real-world workflows into products that feel simple: from offline-first field tools to multi-product apps for one of Nigeria's largest financial groups.",
    "I work across the stack, but I'm happiest on mobile: React Native and Expo on the client, and Node.js or ASP.NET behind it. I care about apps that stay fast on modest devices, keep working on patchy networks, and remain easy for a team to change.",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/kehindeojapa-dev", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kehinde-ojapa-69378b158", icon: "linkedin" },
  ],
  skills: [
    { group: "Mobile", items: ["React Native", "Expo", "iOS", "Android"] },
    { group: "Frontend", items: ["TypeScript", "JavaScript", "React", "HTML", "CSS"] },
    { group: "Backend", items: ["Node.js", "Express", "ASP.NET", "MongoDB"] },
    { group: "Practices", items: ["Git", "Offline-first", "App Store & Play releases"] },
  ],
} as const;

export type Site = typeof site;
