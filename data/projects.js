// Single source of truth for project cards + detail pages.
// Add a new entry here and it appears in the grid AND gets a /work/<slug> page.

export const projects = [
  {
    slug: "allinsure-group",
    cat: "web",
    num: "00",
    year: "2025",
    type: "Insurance Web",
    label: "Web · Live",
    name: "Allinsure Group",
    desc: "Designed and developed a comprehensive digital presence and client portal for an insurance firm.",
    tagline: "A modern, trustworthy digital experience for comprehensive insurance services.",
    tags: ["Design", "Development", "Live"],
    role: "Lead Designer & Developer",
    duration: "Shipped",
    client: "Allinsure Group",
    thumbKey: "web-allinsure",
    scrollerImg: "/images/allinusre.jpeg",
    link: "https://allinsuregroup.com/",
    overview: [
      "Allinsure Group needed a digital home that matched the credibility and trust their clients already placed in them offline. The existing presence was fragmented — no clear quote flow, outdated branding, and zero mobile-first thinking.",
      "The mandate was to unify their insurance product lines under one clean, conversion-focused platform that guides visitors from awareness to a submitted enquiry — without friction.",
    ],
    phases: [
      {
        title: "Discovery & audit",
        body: "Ran a full audit of competitor insurance sites, mapped out the user journeys for each product line, and identified where drop-off was most likely to occur.",
      },
      {
        title: "Information architecture",
        body: "Restructured the site map so each insurance category had a dedicated landing flow. Clear CTAs at every level ensured no visitor was ever more than one click from a quote.",
      },
      {
        title: "Design & brand alignment",
        body: "Built a visual system — typography, colour, iconography — rooted in trust signals: blues, clean whitespace, and professional illustration to convey security.",
      },
      {
        title: "Development & launch",
        body: "Developed the full site with a responsive layout, integrated a contact/quote form, and shipped to production with SEO foundations in place from day one.",
      },
    ],
  },
  {
    slug: "hyderabad-nawabs",
    cat: "web",
    num: "01",
    year: "2025",
    type: "Restaurant Web",
    label: "Web · Live",
    name: "Hyderabad Nawabs",
    desc: "End-to-end design and development for an authentic Indian restaurant in Canada.",
    tagline: "Authentic flavors brought to life through a rich digital experience.",
    tags: ["Web Design", "Development", "Live"],
    role: "Lead designer & developer",
    duration: "Shipped",
    client: "Hyderabad Nawabs",
    thumbKey: "web-hyderabad",
    scrollerImg: "/images/hyderabadnawabscanada.png",
    link: "https://hyderabadnawabscanada.com/",
    overview: [
      "Hyderabad Nawabs is an authentic Indian restaurant in Canada serving royal Hyderabadi cuisine. They needed a website that reflected their rich cultural roots while still feeling modern and easy to navigate for a local Canadian audience.",
      "The challenge was balancing heritage aesthetics — warm colours, ornate detail — with a clean, appetizing digital experience that drives table reservations and online orders.",
    ],
    phases: [
      {
        title: "Brand & culture research",
        body: "Studied Hyderabadi design traditions, sourced authentic visual references, and defined a palette rooted in royal golds, deep reds, and warm neutrals.",
      },
      {
        title: "Menu architecture",
        body: "Structured the digital menu so food categories were easy to browse on mobile. Hero imagery was prioritised to make dishes look as good online as they taste.",
      },
      {
        title: "UI design",
        body: "Designed a rich, immersive UI with full-bleed food photography, elegant serif typography, and subtle animations to evoke the royal dining experience.",
      },
      {
        title: "Development & delivery",
        body: "Built a fully responsive site with a reservation inquiry flow, optimised load times for imagery-heavy pages, and submitted to Google Search Console for local SEO.",
      },
    ],
  },
  {
    slug: "rovix-ai",
    cat: "web",
    num: "02",
    year: "2025",
    type: "AI Chatbot",
    label: "Web · Live",
    name: "Rovix AI",
    desc: "End-to-end design and development of an OpenAI-integrated conversational chatbot that intelligently responds to customer queries.",
    tagline: "A conversational AI chatbot built to automate customer support seamlessly.",
    tags: ["OpenAI", "Web Development", "UI/UX"],
    role: "Lead Designer & Developer",
    duration: "Shipped",
    client: "Rovix AI",
    thumbKey: "web-rovix",
    scrollerImg: "/images/chatbot-rovixai.png",
    link: "https://chatbot.rovixai.com/",
    overview: [
      "Rovix AI wanted an intelligent chatbot product that could be embedded on client websites to handle first-line customer support — answering FAQs, routing leads, and capturing contact details automatically.",
      "The product needed to feel smart and polished: a clean chat interface, real-time OpenAI responses, and a branded experience that clients could white-label for their own customers.",
    ],
    phases: [
      {
        title: "Product scoping",
        body: "Defined the feature set: real-time AI responses via OpenAI API, conversation history, a customisable system prompt, and a lead-capture handoff when the bot couldn't answer.",
      },
      {
        title: "UI/UX design",
        body: "Designed the chat interface for clarity and speed — minimal bubbles, smooth typing indicators, and a branded header that made the bot feel like a product, not a script.",
      },
      {
        title: "OpenAI integration",
        body: "Integrated the OpenAI Chat Completions API with a custom system prompt architecture so the bot could be trained per-client. Added streaming responses for a real-time feel.",
      },
      {
        title: "Deployment & testing",
        body: "Deployed the chatbot as an embeddable widget, stress-tested response accuracy across edge cases, and refined the prompt engineering until answers were consistently useful.",
      },
    ],
  },
  {
    slug: "synergix-group",
    cat: "web",
    num: "03",
    year: "2025",
    type: "Education & IT Solutions",
    label: "Web · Live",
    name: "Synergix Group",
    desc: "Designed and developed a comprehensive digital platform for an education and IT solutions provider, featuring a custom AI chatbot for automated support.",
    tagline: "Empowering education and businesses through innovative IT solutions.",
    tags: ["Web Development", "AI Chatbot", "Education", "IT Solutions", "Live"],
    role: "Lead Developer",
    duration: "Shipped",
    client: "Synergix Group",
    thumbKey: "web-synergix",
    scrollerImg: "/images/synergix.jpeg",
    link: "https://synergix-group.com/",
    overview: [
      "Synergix Group is a leading provider of education and IT solutions, dedicated to empowering schools, colleges, and businesses through technology. They needed a digital presence that accurately reflected their expertise and the breadth of their services.",
      "A key feature of the platform is an integrated AI chatbot designed to handle student inquiries and client support 24/7, ensuring that information about IT solutions and educational programs is always accessible.",
    ],
    phases: [
      {
        title: "Strategy & discovery",
        body: "Collaborated with the Synergix team to define their core service pillars — Managed IT, Software Development, and Training — and mapped out the user journey for potential institutional partners.",
      },
      {
        title: "Information architecture",
        body: "Developed a clear sitemap that categorizes their extensive service offerings, ensuring that visitors can easily find specific IT solutions or educational programs within a few clicks.",
      },
      {
        title: "UI/UX design",
        body: "Designed a clean, modern interface using a professional color palette and high-quality imagery to establish credibility and highlight the transformative power of their technology.",
      },
      {
        title: "Development & AI integration",
        body: "Built the website with a focus on performance and responsiveness. Developed and integrated a custom AI chatbot trained on Synergix's service catalogue to automate front-line support and lead generation.",
      },
    ],
  },
  {
    slug: "txpre-real-estate",
    cat: "web",
    num: "04",
    year: "2025",
    type: "Real Estate Web",
    label: "Web · Live",
    name: "TXPRE",
    desc: "Developed a custom web platform for a commercial real estate business to showcase properties.",
    tagline: "A robust real estate platform built for performance and scale.",
    tags: ["Web Development", "Live"],
    role: "Lead Developer",
    duration: "Shipped",
    client: "TXPRE",
    thumbKey: "web-txpre",
    scrollerImg: "/images/txpre.png",
    link: "https://txpre.com/",
    overview: [
      "TXPRE is a Texas-based commercial real estate firm that needed a high-performance web platform to present their property listings and attract investor inquiries. Their previous site was slow, unresponsive, and made it hard for prospects to find what they needed.",
      "The goal was a clean, professional platform — fast to load, easy to navigate, and built to scale as their portfolio grew.",
    ],
    phases: [
      {
        title: "Requirements & planning",
        body: "Gathered the full listing catalogue, defined the property search and filter requirements, and mapped out the content hierarchy so high-value listings had maximum visibility.",
      },
      {
        title: "Property display system",
        body: "Built a modular property card and detail layout system, allowing new listings to be added without touching code. Each listing page included specs, imagery, and a direct inquiry form.",
      },
      {
        title: "Performance optimisation",
        body: "Implemented lazy loading, next-gen image formats, and minimal JS overhead to ensure sub-2-second load times even on heavy listing pages.",
      },
      {
        title: "Launch & indexing",
        body: "Deployed the platform, configured robots.txt and sitemaps for search engine indexing, and verified Google Search Console for ongoing visibility tracking.",
      },
    ],
  },
  {
    slug: "yardful-lawn",
    cat: "web",
    num: "05",
    year: "2026",
    type: "Landscaping Web",
    label: "Web · Live",
    name: "Yardfullawn Services",
    desc: "Developed a robust web platform for a landscaping business, complete with a custom AI chatbot for seamless lead generation.",
    tagline: "A digital front door for top-tier lawn care and landscaping.",
    tags: ["Web Development", "AI Chatbot", "Live"],
    role: "Lead Developer",
    duration: "Shipped",
    client: "Yardful",
    thumbKey: "web-yardful",
    scrollerImg: "/images/yardfullawnservices.png",
    link: "https://yardfullawnservices.com/",
    overview: [
      "Yardful Lawn Services is a premium landscaping company that was relying entirely on word-of-mouth and social media to generate leads. They needed a professional digital presence that could capture enquiries 24/7 — even when the team was out in the field.",
      "The solution combined a clean service-focused website with an AI-powered chatbot so site visitors could instantly get quotes, ask service questions, and book consultations without waiting for a callback.",
    ],
    phases: [
      {
        title: "Service mapping",
        body: "Documented all service offerings — mowing, landscaping, seasonal cleanups — and structured them into a clear, scannable service catalogue with dedicated landing sections.",
      },
      {
        title: "Website design & build",
        body: "Designed a clean, outdoors-inspired aesthetic with lush green tones and strong calls-to-action throughout. Built fully responsive with mobile-first layout.",
      },
      {
        title: "AI chatbot integration",
        body: "Embedded a custom AI chatbot trained on Yardful's services and pricing FAQs. The bot qualifies leads, captures contact info, and hands off to the team — around the clock.",
      },
      {
        title: "SEO & local visibility",
        body: "Optimised each service page for local search terms, submitted to Google Business Profile, and set up structured data markup for improved local SERP presence.",
      },
    ],
  },
/*
  {
    slug: "om-structures-posters",
    cat: "brand",
    num: "06",
    year: "2026",
    type: "Social Media Branding",
    label: "Brand · Social",
    name: "OM Structures Posters",
    desc: "Designed cohesive and conversion-focused Instagram posters for OM Structures, highlighting their remodeling process and seasonal offers.",
    tagline: "Creative direction that drives leads for home remodeling.",
    tags: ["Creative Direction", "Social Media", "Branding"],
    role: "Creative Director",
    duration: "Shipped",
    client: "OM Structures",
    thumbKey: "brand-omstructures",
    gallery: ["/images/poster/om-1.jpeg", "/images/poster/om-2.jpeg"],
    link: "https://www.instagram.com/omstructures",
    overview: [
      "OM Structures is a home remodeling and construction company that needed a consistent, professional visual identity across their Instagram presence. Their posts were inconsistent in style, tone, and quality — making the brand look smaller than it actually was.",
      "The brief was to design a series of high-impact posters that showcased their work and seasonal promotions in a way that stopped the scroll and drove enquiry.",
    ],
    phases: [
      {
        title: "Brand audit",
        body: "Reviewed OM Structures' existing posts, competitor feeds, and industry visual trends to define what 'professional construction brand on Instagram' should look like.",
      },
      {
        title: "Visual system",
        body: "Developed a consistent colour palette, layout grid, and typographic hierarchy that could be applied across every poster type — promos, process shots, before/afters.",
      },
      {
        title: "Poster design",
        body: "Designed each poster to communicate a single clear message: a seasonal offer, a project showcase, or a process step. Strong hierarchy, bold typography, clean composition.",
      },
      {
        title: "Delivery & rollout",
        body: "Delivered print-ready and web-optimised versions of every poster. Supplied a usage guide so the OM team could post on-brand without needing a designer each time.",
      },
    ],
  },
*/
/*
  {
    slug: "packpal-posters",
    cat: "brand",
    num: "07",
    year: "2026",
    type: "Social Media Branding",
    label: "Brand · Social",
    name: "PackPal Movers Posters",
    desc: "Designed engaging, high-converting Instagram posters for a moving company, emphasizing fragile item safety and moving prep timelines.",
    tagline: "Creative direction that makes moving look stress-free.",
    tags: ["Creative Direction", "Social Media", "Branding"],
    role: "Creative Director",
    duration: "Shipped",
    client: "PackPal Movers",
    thumbKey: "brand-packpal",
    gallery: ["/images/poster/packpal-1.jpeg", "/images/poster/packpal-2.jpeg"],
    link: "https://www.instagram.com/packpal_movers",
    overview: [
      "PackPal Movers is a residential moving company that wanted to build trust on Instagram before a potential customer ever picked up the phone. Their biggest barrier wasn't price — it was anxiety around fragile items and messy move-day logistics.",
      "The poster series was designed to address those fears head-on: educational content about packing fragile items, move-day timelines, and what to expect when PackPal shows up.",
    ],
    phases: [
      {
        title: "Audience insight",
        body: "Identified the core customer anxieties — broken items, hidden costs, no-show movers — and used these as the content pillars for the poster series.",
      },
      {
        title: "Content strategy",
        body: "Planned a content calendar covering educational posts, trust-builders, and seasonal promotions. Each poster had a clear job: inform, reassure, or convert.",
      },
      {
        title: "Design execution",
        body: "Designed each piece with clean layout, friendly iconography, and PackPal's brand colours. Made fragile items and packing tips look approachable rather than overwhelming.",
      },
      {
        title: "Delivery",
        body: "Handed over all assets sized for Instagram feed and Stories, with suggested captions to maximise engagement and click-throughs to their booking page.",
      },
    ],
  },
*/
  {
    slug: "om-structures",
    cat: "web",
    num: "08",
    year: "2026",
    type: "Home Remodeling Web",
    label: "Web · Live",
    name: "OM Structures",
    desc: "Developed a dynamic and responsive website for a home remodeling and construction company.",
    tagline: "A sturdy digital foundation for a premier home remodeling firm.",
    tags: ["Web Development", "Dynamic", "Live"],
    role: "Lead Developer",
    duration: "Shipped",
    client: "OM Structures",
    thumbKey: "web-omstructures",
    scrollerImg: "/images/omstructures.png",
    link: "https://www.omstructures.com/",
    overview: [
      "OM Structures had the portfolio and reputation of a top-tier remodeling firm — but their website didn't reflect it. Static pages, no project gallery, and a contact form that went nowhere were costing them real leads.",
      "The project was to build a dynamic, professional website that showcased their work, established credibility from the first scroll, and made it effortless for homeowners to reach out.",
    ],
    phases: [
      {
        title: "Content gathering",
        body: "Collected project photos, service descriptions, team bios, and testimonials from the OM Structures team and organised them into a clear site structure.",
      },
      {
        title: "Design direction",
        body: "Went for a bold, confident aesthetic — dark tones, strong type, full-bleed project photography — to match the quality of their physical work.",
      },
      {
        title: "Development",
        body: "Built a fully dynamic, responsive site with a project gallery, animated sections, smooth scroll, and a working contact & quote request form.",
      },
      {
        title: "Launch & performance",
        body: "Deployed to production, ran Lighthouse audits across all key pages to ensure performance scores stayed high, and configured local SEO for the Houston market.",
      },
    ],
  },
/*
  {
    slug: "yardful-posters",
    cat: "brand",
    num: "09",
    year: "2026",
    type: "Social Media Branding",
    label: "Brand · Social",
    name: "Yardful Social Posters",
    desc: "Designed a series of highly engaging, brand-aligned posters for Yardful Lawn Services' Instagram marketing campaign.",
    tagline: "Creative direction that makes lawn care look incredibly fresh.",
    tags: ["Creative Direction", "Social Media", "Design"],
    role: "Creative Director",
    duration: "Shipped",
    client: "Yardful",
    thumbKey: "brand-yardful",
    gallery: ["/images/poster/yardful-1.jpeg", "/images/poster/yardful-2.jpeg"],
    link: "https://www.instagram.com/yardful_lawn_services",
    overview: [
      "Alongside building Yardful's website, we produced a dedicated Instagram poster campaign to support the launch and keep the feed active with branded, professional content.",
      "The posters needed to match the website's clean, outdoors-fresh aesthetic and communicate service highlights — seasonal cleanups, mowing packages, and landscaping transformations — in a scroll-stopping visual format.",
    ],
    phases: [
      {
        title: "Campaign planning",
        body: "Mapped out a content calendar aligned with the seasonal nature of lawn care — spring cleanups, summer mowing, fall prep — so every post had a timely, relevant hook.",
      },
      {
        title: "Visual system extension",
        body: "Extended the website's visual language into Instagram format: same green palette, clean typography, bold imagery. Consistency was the goal across every touchpoint.",
      },
      {
        title: "Poster production",
        body: "Produced each poster for maximum impact at a glance — a single strong visual, a punchy headline, and a clear CTA driving followers to book via the website or DM.",
      },
      {
        title: "Asset delivery",
        body: "Delivered all assets in both feed and Stories dimensions, with a simple naming convention so the Yardful team could roll out the campaign themselves week by week.",
      },
    ],
  },
*/
  {
    slug: "oorja-healing",
    cat: "web",
    num: "10",
    year: "2025",
    type: "Healing & Wellness",
    label: "Web · Live",
    name: "Oorja Healing",
    desc: "Developed a serene and professional web platform for a holistic energy healing practice, integrated with an AI wellness assistant for personalized guidance.",
    tagline: "Restoring balance and harmony through ancient healing practices.",
    tags: ["Web Development", "AI Chatbot", "Wellness", "Design", "Live"],
    role: "Lead Designer & Developer",
    duration: "Shipped",
    client: "Oorja Healing",
    thumbKey: "web-oorja",
    scrollerImg: "/images/oorjahealing.jpeg",
    link: "https://oorjahealing.com/",
    overview: [
      "Oorja Healing & Wellness is dedicated to guiding individuals towards holistic well-being through ancient energy-based practices like Pranic Healing and Chakra Balancing. To enhance the user journey, we integrated an AI-powered wellness assistant.",
      "The AI assistant helps site visitors navigate the various healing modalities, provides instant answers to common wellness questions, and helps users identify which healing path might be best for their current energy needs.",
    ],
    phases: [
      {
        title: "Holistic discovery",
        body: "Immersed in the world of energy healing to understand the core principles of Prana and Chakras, ensuring the digital experience felt authentic to the practice's spiritual roots.",
      },
      {
        title: "Serene design system",
        body: "Crafted a visual identity using soothing tones, organic shapes, and minimalist typography to evoke a sense of peace and trust from the very first scroll.",
      },
      {
        title: "Service architecture",
        body: "Structured the site around personalized healing journeys, making it easy for users to explore various modalities like Crystal Healing, Trauma Healing, and Tarot Reading.",
      },
      {
        title: "AI Assistant development",
        body: "Designed and trained an AI wellness assistant to reflect the compassionate tone of the brand, providing users with a supportive digital entry point into their healing journey.",
      },
    ],
  },
];

export const filters = [
  { key: "all", label: "All · 08" },
  { key: "web", label: "Web" },
  // { key: "crm", label: "CRM" },
  // { key: "ui", label: "UI / UX" },
  // { key: "brand", label: "Branding" },
];

export const getProjectBySlug = (slug) =>
  projects.find((p) => p.slug === slug);

export const getNextProject = (slug) => {
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return projects[0];
  return projects[(idx + 1) % projects.length];
};
