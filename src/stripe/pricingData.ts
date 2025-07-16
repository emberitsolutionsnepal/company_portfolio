import { Price } from "@/types/price";

export const pricingData: Price[] = [
  {
    id: "web_landing",
    unit_amount: 15000 * 100, // NPR 15,000
    nickname: "Landing Page",
    offers: [
      "Single-page scroll website",
      "Modern, responsive design",
      "CTA buttons & contact section",
      "Optimized for speed",
      "Basic SEO & social share tags",
      "1 revision included",
      "Free hosting setup",
    ],
  },
  {
    id: "web_basic",
    unit_amount: 30000 * 100, // NPR 30,000
    nickname: "Basic Website",
    offers: [
      "5–7 page website",
      "Mobile responsive design",
      "Contact form integration",
      "Basic SEO setup",
      "Google Analytics + Meta Pixel",
      "WhatsApp/chat widget integration",
      "1 month technical support",
      "Free hosting setup (Netlify/Vercel)",
    ],
  },
  {
    id: "web_premium",
    unit_amount: 80000 * 100, // NPR 80,000
    nickname: "Business Website + E-commerce",
    offers: [
      "E-commerce ready website",
      "Admin panel for managing products & orders",
      "Payment gateway integration (eSewa, Khalti, Stripe)",
      "Order notification via email",
      "Inventory & customer management",
      "Basic marketing setup (SEO, Analytics, Facebook Pixel)",
      "3 months premium support",
      "Free domain & hosting setup",
    ],
  },
  {
    id: "mvp_starter",
    unit_amount: 120000 * 100, // NPR 120,000
    nickname: "MVP Starter Package",
    offers: [
      "Rapid MVP for startup ideas (web/mobile)",
      "Authentication + CRUD + role management",
      "Admin dashboard",
      "REST API or Firebase backend",
      "UI design + prototyping",
      "GitHub + deployment ready",
      "3 months support & updates",
    ],
  },

  // 🔽 MOBILE APP PACKAGES 🔽

  {
    id: "mobile_basic",
    unit_amount: 90000 * 100, // NPR 90,000
    nickname: "Basic Mobile App",
    offers: [
      "Cross-platform (Flutter)",
      "Clean UI + 3–5 main screens",
      "Contact form / feedback / inquiry app",
      "Offline access support",
      "App icon + splash screen",
      "App store / Play Store ready",
      "3 months free support",
    ],
  },
  {
    id: "mobile_business",
    unit_amount: 140000 * 100, // NPR 140,000
    nickname: "Business App",
    offers: [
      "Cross-platform mobile app (Flutter)",
      "User login/signup + basic dashboard",
      "Push notifications (Firebase)",
      "Data sync with backend (Firebase/REST)",
      "Location, camera, or file upload integration",
      "App deployment (Play Store / App Store)",
      "6 months bug-fix support",
    ],
  },
  {
    id: "mobile_custom",
    unit_amount: 200000 * 100, // NPR 200,000
    nickname: "Custom Mobile Application",
    offers: [
      "Fully tailored mobile application",
      "Complex logic + backend integration",
      "User management system",
      "Admin panel + analytics",
      "Realtime chat, maps, or other features",
      "CI/CD deployment setup",
      "1 year priority support",
    ],
  },

  {
    id: "custom_web",
    unit_amount: 220000 * 100, // NPR 220,000
    nickname: "Custom Web Application",
    offers: [
      "Full-stack web application",
      "API development (REST/GraphQL)",
      "Custom database (PostgreSQL/MySQL)",
      "Role-based access system",
      "Notification/email system",
      "Admin control panel",
      "Cloud deployment & CI/CD setup",
      "1 year priority support",
    ],
  },
  {
    id: "enterprise",
    unit_amount: 500000 * 100, // NPR 500,000
    nickname: "Enterprise Solution",
    offers: [
      "Tailored business software with scalability",
      "Multi-user role system",
      "Advanced security & compliance",
      "Custom integrations (ERP, SMS, APIs)",
      "DevOps setup + automated backups",
      "Mobile + web interface",
      "24/7 monitoring & SLAs",
      "2 years ongoing support",
    ],
  },
];
