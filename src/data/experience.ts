export interface Role {
  company: string;
  /** Your job title, e.g. "Software Engineer". */
  title: string;
  /** e.g. "2022 – Present" or "Mar 2023 – Jun 2024". */
  period: string;
  location?: string;
  /** Shown next to the company, e.g. "Full-time", "Contract", "Freelance". */
  type?: "Full-time" | "Contract" | "Part-time" | "Freelance";
  /** One or two lines on scope and impact, shown on the website timeline. */
  summary?: string;
  /** Longer bullet points, shown on the CV (/cv and the PDF). */
  bullets?: string[];
  /** Project titles from projects.ts shown as chips under this role. */
  projects?: string[];
}

/**
 * Main job first, then contract and freelance work, most recent first. An entry only appears once BOTH `title` and `period`
 * are filled in, and the whole section stays hidden until at least one does.
 * The CV page (/cv) reads from this file too, so edit it here once.
 */
export const experience: Role[] = [
  {
    company: "Leadway Assurance",
    type: "Full-time",
    title: "Software Engineer",
    period: "Dec 2021 – Present",
    location: "Lagos, Nigeria",
    summary:
      "Designing and delivering web and mobile applications for insurance operations and customers. Led payment-gateway and security-provider integrations, and resolved performance bottlenecks in legacy systems.",
    bullets: [
      "Built LeadwayOne in React Native and Expo: one app for Leadway's insurance, pension, investment and health products on iOS and Android.",
      "Built the Leadway Health enrollee app (100K+ installs on Google Play) for appointments, claims and health plans.",
      "Delivered the multi-tenant Corporate Portal end to end (React, ASP.NET, MSSQL), where client HR teams manage members, claims analytics and invoices.",
      "Built online plan sales on the Leadway Health website (PHP, jQuery): multi-step purchase flows with Paystack and Payfi checkout.",
      "Led integration of payment gateways and security providers, improving transaction reliability and system interoperability.",
      "Identified and resolved performance bottlenecks in legacy systems, improving responsiveness and reducing system errors.",
    ],
    projects: ["LeadwayOne", "Leadway Corporate Portal", "Leadway Health", "Leadway Health website"],
  },
  {
    company: "Flipxer",
    type: "Contract",
    title: "Full-Stack Engineer",
    period: "Aug 2026 – Present",
    location: "Remote",
    summary:
      "Building a Nigerian crypto exchange across the React web app and the NestJS and PostgreSQL backend: trading, naira payments, KYC and secure withdrawals.",
    bullets: [
      "Building Flipxer, a Nigerian crypto exchange, across the React and TypeScript web app and the NestJS and PostgreSQL backend.",
      "Delivering trading across 12 assets, naira deposits and payouts, BVN/NIN KYC, and 2FA- and PIN-protected withdrawals.",
      "Testing with Jest and shipping through CI/CD pipelines on GitHub Actions.",
    ],
    projects: ["Flipxer"],
  },
  {
    company: "Prosplug",
    type: "Contract",
    title: "Mobile Application Developer",
    period: "Nov 2024 – Present",
    location: "Warlingham, England · Remote",
    summary:
      "Developing and scaling the Prosplug mobile app, improving UI performance through optimised rendering and state management, with a distributed team.",
    bullets: [
      "Developing and scaling the Prosplug marketplace app for iOS and Android in React Native and TypeScript, with a focus on performance, usability and maintainability.",
      "Improved UI/UX and reduced latency through optimised rendering and efficient state management.",
      "Shipping tested releases (Jest, React Native Testing Library) with a distributed team in an agile environment.",
    ],
    projects: ["Prosplug"],
  },
  {
    company: "Palm Inventive",
    type: "Freelance",
    title: "Software Engineer",
    period: "Jan 2023 – Present",
    location: "Remote",
    summary:
      "Built and maintain CommTB, an offline-first app for field health workers, including the data synchronisation between devices and servers.",
    bullets: [
      "Built and maintain CommTB, an offline-first React Native app for field health workers in low-connectivity environments.",
      "Designed and implemented data synchronisation strategies ensuring consistency across devices and servers.",
      "Iterated on product features with stakeholders based on real-world usage feedback.",
    ],
    projects: ["CommTB"],
  },
];

export const visibleExperience = experience.filter((r) => r.title.trim() && r.period.trim());
