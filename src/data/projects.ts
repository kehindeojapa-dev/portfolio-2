import type { ImageMetadata } from "astro";
import commtb from "../assets/projects/commtb.png";
import leadwayHealthWeb from "../assets/projects/leadway-health-web.png";
import movieApp from "../assets/projects/movie-app.png";
import jobListing from "../assets/projects/job-listing.png";
import jsMini from "../assets/projects/js-mini.png";
import landingPages from "../assets/projects/landing-pages.png";

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
  /** Featured projects render as large case-study cards. */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "LeadwayOne",
    context: "Leadway Group",
    summary:
      "A single app for every Leadway product: insurance, pension, investments and health, in one secure account.",
    highlights: [
      "Buy and renew motor, home, travel and life cover; file and track claims",
      "Real-time RSA pension balance and contributions, with in-app fund and redeem for investments",
      "Telemedicine, pharmacy benefits and provider search, plus opt-in Health Connect step tracking",
    ],
    tags: ["Insurtech", "Fintech", "iOS", "Android"],
    links: [
      { kind: "appstore", href: "https://apps.apple.com/ng/app/leadway-one/id1645505127" },
      { kind: "playstore", href: "https://play.google.com/store/apps/details?id=com.leadway.mobileOne" },
    ],
    featured: true,
  },
  {
    title: "Leadway Health",
    context: "Leadway Health",
    summary:
      "The Leadway Health enrollee app: appointments, claims and health plans in your pocket.",
    highlights: [
      "100K+ installs on Google Play",
      "Hospital appointments, pre-authorisation approvals, claims and dependents management",
      "HealthKit and Health Connect step tracking with step-based rewards",
    ],
    tags: ["Healthtech", "iOS", "Android"],
    links: [
      { kind: "appstore", href: "https://apps.apple.com/ng/app/leadway-health/id1534135962" },
      { kind: "playstore", href: "https://play.google.com/store/apps/details?id=com.leadway.health" },
    ],
    featured: true,
  },
  {
    title: "Prosplug",
    context: "Prosplug Ltd",
    summary:
      "A two-sided marketplace connecting clients with verified tradespeople and service providers, remote or on-site.",
    highlights: [
      "Browse and hire verified professionals across service categories",
      "In-app chat before booking, plus project and progress tracking",
      "Secure in-app payments, wallet transaction history, and reviews and ratings",
    ],
    tags: ["Marketplace", "Payments", "iOS", "Android"],
    links: [
      { kind: "appstore", href: "https://apps.apple.com/us/app/prosplug/id6748471958" },
      { kind: "playstore", href: "https://play.google.com/store/apps/details?id=com.prosplug.prosplug" },
    ],
    featured: true,
  },
  {
    title: "CommTB",
    context: "Field health",
    summary:
      "An offline-first data-entry app that lets field workers capture patient information without a network connection.",
    highlights: ["Supports fully offline use in the field"],
    tags: ["React Native", "Expo", "Android"],
    image: commtb,
    links: [
      { kind: "playstore", href: "https://play.google.com/store/apps/details?id=com.instratghs.commtb" },
    ],
    featured: true,
  },
  {
    title: "Leadway Health website",
    summary: "Marketing website for the Leadway Health company.",
    tags: ["WordPress", "Bootstrap", "JavaScript"],
    image: leadwayHealthWeb,
    links: [{ kind: "live", href: "https://leadwayhealth.com" }],
  },
  {
    title: "Movie App",
    summary:
      "Browse TMDB movies by category, with search, trailers and streaming options.",
    tags: ["JavaScript", "REST API"],
    image: movieApp,
    links: [
      { kind: "live", href: "https://kehindeojapa-dev.github.io/movieApp" },
      { kind: "code", href: "https://github.com/kehindeojapa-dev/movieApp" },
    ],
  },
  {
    title: "Job Listing",
    summary: "Job board UI with multi-criteria filtering.",
    tags: ["JavaScript", "CSS"],
    image: jobListing,
    links: [
      { kind: "live", href: "https://kehindeojapa-dev.github.io/jobListing" },
      { kind: "code", href: "https://github.com/kehindeojapa-dev/jobListing" },
    ],
  },
  {
    title: "JS Mini Projects",
    summary:
      "A collection of UI interactions: carousels, navbars, to-do lists and form flows.",
    tags: ["JavaScript"],
    image: jsMini,
    links: [
      { kind: "live", href: "https://kehindeojapa-dev.github.io/jsMiniProjects" },
      { kind: "code", href: "https://github.com/kehindeojapa-dev/jsMiniProjects" },
    ],
  },
  {
    title: "Landing Pages",
    summary: "Responsive landing pages built from Frontend Mentor designs.",
    tags: ["HTML", "CSS"],
    image: landingPages,
    links: [
      { kind: "live", href: "https://kehindeojapa-dev.github.io/landingpages" },
      { kind: "code", href: "https://github.com/kehindeojapa-dev/landingpages" },
    ],
  },
];
