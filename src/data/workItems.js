import nuggetImg from "../assets/daily-nugget-logo.png"
import tripAwareImg from "../assets/tripaware-map.png"
import jasmineWareImg from "../assets/jasmine-ware-empty-flesh.jpg"
import automationToolsImg from "../assets/AutomationTools.svg"
import barrigasAndFriendsImg from "../assets/barrigas-profile.jpg"

const tripAwareUrl = "https://trip-aware.vercel.app"
const dailyNuggetUrl = "https://thedailynugget.app"

export const WORK_ITEMS = [
  {
    slug: "the-daily-nugget",
    title: "The Daily Nugget",
    image: nuggetImg,
    icon: "mobile",
    platforms: ["Web app", "iOS", "Android"],
    description: "A daily motivation app with quotes, affirmations, and games for quick breaks.",
    overview: "The Daily Nugget brings bite-sized content and games into a daily routine across mobile and web.",
    keyFeatures: [
      "Daily quotes and affirmations",
      "Reminders and notifications",
      "Favorites and collections",
    ],
    links: [
      { label: "Open web app", url: dailyNuggetUrl },
      { label: "View on the App Store", url: "https://apps.apple.com/us/app/the-daily-nugget/id6745912191" },
    ],
  },
  {
    slug: "trip-aware",
    title: "TripAware",
    image: tripAwareImg,
    imageFrame: "globe",
    imageAlt: "TripAware world map with destinations colored by advisory level",
    icon: "compass",
    platforms: ["Web app"],
    description: "A travel advisory app with an interactive world map and searchable destination directory.",
    overview: "Built by Blackburn Works, TripAware organizes U.S. Department of State travel advisories and records changes it observes over time.",
    keyFeatures: [
      "Color-coded advisory map",
      "Destination pages with official sources",
      "Advisory change history",
    ],
    links: [
      { label: "Open web app", url: tripAwareUrl },
      { label: "Explore the world map", url: `${tripAwareUrl}/map` },
      { label: "Search destinations", url: `${tripAwareUrl}/destinations` },
      { label: "See advisory changes", url: `${tripAwareUrl}/advisories` },
    ],
  },
  {
    slug: "jasmine-ware",
    title: "Jasmine Ware — Artist Portfolio",
    image: jasmineWareImg,
    imageFit: "cover",
    imagePosition: "center 32%",
    icon: "palette",
    platforms: ["Website"],
    description: "An artist portfolio that brings Jasmine Ware’s artwork, exhibitions, and commission inquiries together.",
    overview: "The site gives visitors a place to explore Jasmine Ware’s collections, learn about her studio practice, and get in touch about commissions.",
    keyFeatures: [
      "Artwork galleries with theme filters",
      "Artist story and exhibition details",
      "Commission inquiry form",
    ],
    links: [{ label: "Visit website", url: "https://jp-ware.vercel.app/" }],
  },
  {
    slug: "barrigas-and-friends",
    title: "Barrigas & Friends",
    image: barrigasAndFriendsImg,
    icon: "globe",
    platforms: ["Website"],
    description: "A responsive brand website designed to introduce Barrigas & Friends and grow with its community.",
    overview: "The site gives Barrigas & Friends a clear online home and a flexible foundation for adding content as the brand grows.",
    keyFeatures: [
      "Custom landing page",
      "Responsive layouts",
      "Reusable site components",
    ],
    links: [{ label: "Visit website", url: "https://baf-wp.vercel.app/" }],
  },
  {
    slug: "automation-tools",
    title: "PowerShell Automation Toolkit",
    image: automationToolsImg,
    icon: "terminal",
    platforms: ["PowerShell"],
    description: "A PowerShell toolkit that standardizes repetitive IT tasks such as workstation setup and system checks.",
    overview: "The toolkit turns common support tasks into reusable scripts, helping IT teams run them consistently across workstations.",
    keyFeatures: [
      "Workstation setup scripts",
      "System checks and reporting",
      "Repeatable administration workflows",
    ],
    links: [],
  },
]
