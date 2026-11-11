import type { ImageMetadata } from "astro";
import commtb from "../assets/projects/commtb.png";
import flipxer from "../assets/projects/flipxer.webp";
import corporatePortal from "../assets/projects/leadway-corporate-portal.webp";
import leadwayHealthApp from "../assets/projects/leadway-health-app.webp";
import prosplug from "../assets/projects/prosplug.webp";
import leadwayOne from "../assets/projects/leadwayone.webp";
import leadwayHealthWeb from "../assets/projects/leadway-health-web.webp";

export type LinkKind = "appstore" | "playstore" | "live" | "code";

export interface Project {
  title: string;
  /** One-line pitch shown under the title. */
  summary: string;
  /** Short bullet points: scope, features, scale. */
  highlights?: string[];
  tags: string[];
  links: { kind: LinkKind; href: string }[];
  image?: ImageMetadata;
  /** Optional label, e.g. company or "Freelance". */
  context?: string;
  /** What you worked on, e.g. "Frontend · Backend · Mobile". */
  role?: string;
  /** Composite with a transparent background: shown whole over the themed panel. */
  framed?: boolean;
  /** Placeholder shown when there is no image. Defaults to "phone". */
  mockup?: "phone" | "browser";
  /** Featured projects render as large case-study cards. */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Flipxer",
    context: "Flipxer",
    role: "Frontend · Backend",
    summary:
      "A Nigerian crypto exchange: buy, sell, swap and send crypto from one balance, with naira in and naira out.",
    highlights: [
      "Trading across 12 assets including BTC, ETH, USDT and SOL, with rates locked during review and fees shown up front",
      "Naira deposits by bank transfer and payouts to verified bank accounts, gated by BVN/NIN and selfie KYC",
      "Security built into every flow: 2FA at sign-in, PIN or authenticator for trades and withdrawals, risk-checked withdrawals",
    ],
    tags: ["React", "TypeScript", "Tailwind", "NestJS", "PostgreSQL", "Jest", "GitHub Actions"],
    links: [{ kind: "live", href: "https://app.flipxer.com" }],
    image: flipxer,
    framed: true,
    featured: true,
  },
  {
    title: "LeadwayOne",
    context: "Leadway Group",
    role: "Mobile",
    summary:
      "A single app for every Leadway product: insurance, pension, investments and health, in one secure account.",
    highlights: [
      "Buy and renew motor, home, travel and life cover; file and track claims",
      "Real-time RSA pension balance and contributions, with in-app fund and redeem for investments",
      "Telemedicine, pharmacy benefits and provider search, plus opt-in Health Connect step tracking",
    ],
    tags: ["React Native", "TypeScript", "Expo", "Tailwind"],
    image: leadwayOne,
    framed: true,
    links: [
      { kind: "appstore", href: "https://apps.apple.com/ng/app/leadway-one/id1645505127" },
      { kind: "playstore", href: "https://play.google.com/store/apps/details?id=com.leadway.mobileOne" },
    ],
    featured: true,
  },
  {
    title: "Leadway Corporate Portal",
    context: "Leadway Group",
    role: "Frontend · Backend",
    summary:
      "A multi-tenant portal where companies manage their employees' Leadway Health cover in one place.",
    highlights: [
      "Multi-tenant architecture serving many organisations from one codebase",
      "HR teams manage members, browse the provider network, and track utilisation, claims and loss ratio",
      "Finance and reporting: invoices and scheme performance per organisation",
    ],
    tags: ["React", "ASP.NET", "MSSQL", "Multi-tenant"],
    links: [{ kind: "live", href: "https://corporateportal.leadwayhealth.com" }],
    image: corporatePortal,
    framed: true,
    featured: true,
  },
  {
    title: "Leadway Health",
    context: "Leadway Health",
    role: "Mobile",
    summary:
      "The Leadway Health enrollee app: appointments, claims and health plans in your pocket.",
    highlights: [
      "100K+ installs on Google Play",
      "Hospital appointments, pre-authorisation approvals, claims and dependents management",
      "HealthKit and Health Connect step tracking with step-based rewards",
    ],
    tags: ["React Native", "TypeScript", "Expo", "Tailwind"],
    image: leadwayHealthApp,
    framed: true,
    links: [
      { kind: "appstore", href: "https://apps.apple.com/ng/app/leadway-health/id1534135962" },
      { kind: "playstore", href: "https://play.google.com/store/apps/details?id=com.leadway.health" },
    ],
    featured: true,
  },
  {
    title: "Leadway Health website",
    context: "Leadway Health",
    role: "Frontend · Backend",
    summary:
      "Leadway Health's public website and online sales channel, where people compare and buy health plans, find providers and file claims.",
    highlights: [
      "Online purchase for every retail plan: multi-step Myself, Family (up to four dependants) and Gift-a-friend flows with ID, photo upload and medical-history checks",
      "Checkout through Paystack and Payfi, with orders and payment verification handled by custom PHP endpoints",
      "Provider directory and onboarding for hospitals, pharmacies, labs, dental, optical and gyms, plus claims reimbursement, diabetes and hypertension risk profilers, and data-access requests",
    ],
    tags: ["WordPress", "PHP", "JavaScript", "jQuery", "Bootstrap", "Paystack"],
    image: leadwayHealthWeb,
    framed: true,
    links: [{ kind: "live", href: "https://leadwayhealth.com" }],
    featured: true,
  },
  {
    title: "Prosplug",
    context: "Prosplug Ltd",
    role: "Mobile",
    summary:
      "A two-sided marketplace connecting clients with verified tradespeople and service providers, remote or on-site.",
    highlights: [
      "Browse and hire verified professionals across service categories",
      "In-app chat before booking, plus project and progress tracking",
      "Secure in-app payments, wallet transaction history, and reviews and ratings",
    ],
    tags: ["React Native", "TypeScript", "Jest", "React Native Testing Library"],
    image: prosplug,
    framed: true,
    links: [
      { kind: "appstore", href: "https://apps.apple.com/us/app/prosplug/id6748471958" },
      { kind: "playstore", href: "https://play.google.com/store/apps/details?id=com.prosplug.prosplug" },
    ],
    featured: true,
  },
  {
    title: "CommTB",
    context: "Palm Inventive",
    role: "Mobile",
    summary:
      "An offline-first data-entry app that lets field health workers capture patient information without a network connection.",
    highlights: [
      "Built for low-connectivity environments: works fully offline in the field",
      "Data sync strategy that keeps records consistent across devices and servers",
    ],
    tags: ["React Native", "Expo", "Android"],
    image: commtb,
    links: [
      { kind: "playstore", href: "https://play.google.com/store/apps/details?id=com.instratghs.commtb" },
    ],
    featured: true,
  },
];
