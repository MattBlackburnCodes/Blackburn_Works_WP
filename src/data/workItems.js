import nuggetImg from "../assets/daily-nugget-logo.png"
import jasmineWareImg from "../assets/jasmine-ware-empty-flesh.jpg"
import automationToolsImg from "../assets/AutomationTools.svg"
import barrigasAndFriendsImg from "../assets/barrigas-profile.jpg"

export const WORK_ITEMS = [
  {
    slug: "the-daily-nugget",
    image: nuggetImg,
    shortTitle: "The Daily Nugget",
    title: "The Daily Nugget",
    desc: "Daily motivation app with dynamic content delivery.",
    tags: ["Product Design", "Mobile", "Web", "API"],
    platforms: ["Apple App Store", "Google Play", "Web App"],
    appStoreUrl: "https://apps.apple.com/us/app/the-daily-nugget/id6745912191",
    webUrl: "https://thedailynugget.app",
    keyFeatures: [
      "Daily dynamic quotes and affirmations",
      "Category-based content discovery",
      "Native availability on iOS and Android",
      "Full browser experience at thedailynugget.app",
      "Optimized API-driven performance",
      "Seamless social sharing",
      "Daily reminders and notifications",
      "Save favorites and collections",
      "Personalized content preferences"
    ],
    shortDesc:
      "A cross-platform motivation product available on the Apple App Store, Google Play, and the web at thedailynugget.app.",
    impactDesc:
      "Gives users one recognizable daily habit across iOS, Android, and the web, with room for personalization, reminders, games, and community content.",
    outcome:
      "A production-ready product spanning the Apple App Store, Google Play, and a responsive web application, all built around one recognizable mascot-led brand.",
    summary:"The Daily Nugget is a mascot-led motivation platform delivering quotes, facts, affirmations, jokes, games, and community content through a fast daily habit. Blackburn Works shaped the product across iOS, Android, and the web so users can find the same recognizable experience wherever they prefer to use it.",
    liveUrl: "https://thedailynugget.app",
  },
  {
    slug: "jasmine-ware",
    image: jasmineWareImg,
    imageFit: "cover",
    imagePosition: "center 32%",
    shortTitle: "Jasmine Ware",
    title: "Jasmine Ware — Artist Portfolio",
    desc: "An immersive digital home for a Washington, DC visual storyteller.",
    tags: ["Digital Presence", "Art Direction", "Web"],
    keyFeatures: [
      "Immersive artist-led visual direction",
      "Editorial portfolio and collection system",
      "Artwork filtering by theme",
      "Artist story and studio narrative",
      "Commission inquiry experience",
      "Exhibition and venue promotion",
      "Responsive gallery presentation",
      "Custom interactions built around the artwork"
    ],
    shortDesc:
      "A cinematic portfolio that turns Jasmine Ware’s artwork, voice, and studio practice into one cohesive digital presence.",
    impactDesc:
      "Gives Jasmine’s work a distinctive online home designed for discovery, exhibitions, and commission inquiries.",
    outcome:
      "Delivered an expressive, mobile-ready portfolio that feels like an extension of the artist rather than a generic gallery template.",
    summary:
      "Jasmine Ware’s portfolio was designed as an evolving archive of feeling. The experience pairs bold editorial typography with an artwork-first collection, personal storytelling, studio process, exhibition details, and a direct path to commission inquiries.",
    liveUrl: "https://jp-ware.vercel.app/",
  },
  {
    slug: "barrigas-and-friends",
    image: barrigasAndFriendsImg,
    shortTitle: "Barrigas & Friends",
    title: "Barrigas & Friends",
    desc: "Modern website for a growing brand focused on community and identity.",
    tags: ["React", "UI/UX", "Web"],
    keyFeatures: [
      "Clean, brand-focused landing experience",
      "Responsive layout across all devices",
      "Optimized performance and fast load times",
      "Structured content for easy navigation",
      "Scalable foundation for future features",
      "Custom UI tailored to brand identity",
      "Modern component-based architecture",
      "Deployment-ready with Vercel integration"
    ],
    shortDesc:
      "A modern, responsive website designed to establish a strong online presence while remaining flexible for future growth and expansion.",
    impactDesc:
      "Strengthens brand credibility with a clean web presence that can expand without a full rebuild.",
    outcome:
      "Delivered a polished, production-ready website that strengthens brand visibility and provides a scalable foundation for future updates and features.",
    summary:
      "Barrigas & Friends was developed as a clean and modern web experience focused on building a strong digital presence. The goal was to create something visually appealing, easy to navigate, and adaptable as the brand evolves. Emphasis was placed on performance, responsive design, and a scalable structure—allowing the platform to grow over time without needing a complete rebuild.",
    liveUrl: "https://baf-wp.vercel.app/",
  },
  {
    slug: "automation-tools",
    image: automationToolsImg,
    shortTitle: "PowerShell Automation",
    title: "PowerShell Automation Toolkit",
    desc: "Custom PowerShell scripts that reduce repetitive IT work.",
    tags: ["PowerShell", "IT Support", "Efficiency"],
    keyFeatures: [
      "Workstation setup automation",
      "System checks and reporting",
      "Repeatable admin tasks",
      "Workflow automation",
      "Internal IT process improvements",
    ],
    shortDesc:
      "A practical PowerShell toolkit designed to reduce manual work, standardize repeat tasks, and improve consistency.",
    impactDesc:
      "Helps teams save time on manual IT tasks while making common support processes easier to run and repeat.",
    summary:
      "A collection of PowerShell automation concepts focused on workstation setup, routine admin tasks, system checks, reporting, and internal IT process improvements.",
    outcome:
      "Created to make internal IT work faster, more consistent, and easier to maintain without adding unnecessary complexity.",
    liveUrl: "#",
  },
];
