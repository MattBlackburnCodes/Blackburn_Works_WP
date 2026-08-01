import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import NewBWLogo from "./assets/blackburn-works-2026.png";
import BWMark from "./assets/blackburn-works-mark.png";
import { ADD_ONS } from "./data/addOns";
import { WORK_ITEMS } from "./data/workItems";
import { WEBSITE_TIERS } from "./data/websiteTiers";
import {
  ArrowRight,
  Check,
  Code,
  Globe,
  LayoutGrid,
  LifeBuoy,
  Mail,
  Menu,
  Palette,
  Phone,
  Quote,
  Terminal,
  X,
} from "lucide-react";

const NAV = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

const WEBSITE_TIER_ICONS = {
  globe: <Globe size={20} />,
  layoutGrid: <LayoutGrid size={20} />,
  code: <Code size={20} />,
};

const SERVICE_PAGE_ICONS = {
  website: <Globe size={20} />,
  it: <LifeBuoy size={20} />,
  automation: <Terminal size={20} />,
};

const IT_SERVICES = [
  "Workstation setup and configuration",
  "Data transfer and migration",
  "Encrypted drive access assistance and data recovery support",
  "System diagnostics and troubleshooting",
  "Laptop and desktop hardware repair",
  "Software troubleshooting and installation",
  "Virus and malware removal",
  "Performance optimization and PC tune-ups",
  "Printer and peripheral setup",
  "Home office and small business technology setup",
];

const DMV_SERVICE_AREAS = [
  "Washington, DC",
  "Arlington, VA",
  "Alexandria, VA",
  "Fairfax, VA",
  "Silver Spring, MD",
  "Bethesda, MD",
  "Rockville, MD",
  "College Park, MD",
  "Bowie, MD",
];

const OWNERSHIP_POINTS = [
  "Black-owned",
  "Veteran-owned",
  "Serving the DMV area",
];

const SERVICE_PAGES = [
  {
    slug: "website-development",
    icon: "website",
    kicker: "Digital Presence Design",
    shortTitle: "Digital Presence Design",
    title: "Digital presence design for businesses ready to show up clearly.",
    metaTitle: "Digital Presence Design in the DMV | Blackburn Works LLC",
    metaDescription:
      "Blackburn Works creates brand-forward websites and complete digital presences for businesses across Washington, DC, Maryland, and Northern Virginia.",
    homepageSummary:
      "Brand-forward websites, messaging structure, and visual direction for businesses that need a clear and credible online presence.",
    lead:
      "Blackburn Works designs how your business shows up online—from visual direction and messaging structure to the responsive website that brings it together.",
    price: "Website packages from $750",
    timeline: "7-30 days depending on scope",
    tags: ["Digital presence", "Visual direction", "Responsive design", "DMV area"],
    highlights: [
      "Digital presence and custom website packages",
      "Mobile responsive layouts built for real users",
      "Clear messaging, calls to action, and visual consistency",
    ],
    benefits: [
      "Clarify your offer so visitors understand what you do quickly",
      "Create a polished first impression for customers searching locally",
      "Give your business a web presence that can be updated without a rebuild",
    ],
    process: [
      "Confirm pages, goals, and content needs",
      "Build a clean responsive layout around your brand and services",
      "Review, polish, deploy, and hand off with clear next steps",
    ],
    detailText:
      "Website development is scoped separately from IT support. Choose a starter site, business site, or custom build when you need a professional web presence for the DMV market.",
    faqs: [
      {
        question: "Do you build websites for small businesses in the DMV area?",
        answer:
          "Yes. Blackburn Works builds small business websites for Washington, DC, Maryland, and Northern Virginia clients who need a polished online presence.",
      },
      {
        question: "Can the website include the portfolio and service pages?",
        answer:
          "Yes. Website projects can include service pages, portfolio sections, contact forms, basic SEO setup, and mobile responsive layouts.",
      },
      {
        question: "How is website development priced?",
        answer:
          "Website work is scoped as a package or custom build, with starter website packages beginning at $750.",
      },
    ],
  },
  {
    slug: "it-services",
    icon: "it",
    kicker: "IT Services",
    shortTitle: "IT Services",
    title: "Affordable IT services in Washington, DC, Maryland, and Northern Virginia.",
    metaTitle: "Affordable IT Services in the DMV Area | Blackburn Works LLC",
    metaDescription:
      "Affordable DMV IT services from Blackburn Works LLC. Remote support or onsite computer help within 50 miles of Washington, DC, starting at $50/hour.",
    homepageSummary:
      "Practical computer support for homes, home offices, and small businesses, including setup, troubleshooting, repairs, recovery support, and tune-ups.",
    lead:
      "Whether you are setting up a workstation, recovering important files, removing malware, or troubleshooting a stubborn computer issue, Blackburn Works provides practical help without the confusion.",
    price: "Starting at $50/hour",
    timeline: "Remote or onsite support",
    tags: ["Computer repair", "PC tune-ups", "Data migration", "50-mile DC radius"],
    highlights: [
      "Remote support available",
      "Onsite service within a 50-mile radius of Washington, DC",
      "Home office and small business technology setup",
    ],
    benefits: [
      "Get practical troubleshooting without a confusing sales process",
      "Support new workstation setup, data transfers, and peripheral setup",
      "Improve performance, remove malware, and recover from technical issues",
    ],
    process: [
      "Describe the device, issue, location, and urgency",
      "Confirm whether remote or onsite support is the best fit",
      "Diagnose the problem and recommend clear next steps before deeper work",
    ],
    detailText:
      "IT services are hourly and focused on clear, affordable support for homes, home offices, and small businesses across the DMV area.",
    faqs: [
      {
        question: "Do you offer onsite IT support near Washington, DC?",
        answer:
          "Yes. Onsite service is available within a 50-mile radius of Washington, DC, and remote support is available for many troubleshooting needs.",
      },
      {
        question: "What does IT support cost?",
        answer:
          "IT services start at $50/hour. The scope depends on the device, issue, location, and whether support can be handled remotely.",
      },
      {
        question: "Can you help with data transfer or encrypted drive access?",
        answer:
          "Yes. Blackburn Works can help with data transfer, migration, encrypted drive access assistance, and data recovery support when practical.",
      },
    ],
  },
  {
    slug: "powershell-automation",
    icon: "automation",
    kicker: "PowerShell Automation",
    shortTitle: "PowerShell Automation",
    title: "PowerShell automation for repeatable IT and business workflows.",
    metaTitle: "PowerShell Automation Services | Blackburn Works LLC",
    metaDescription:
      "Custom PowerShell automation from Blackburn Works LLC for workstation setup, reporting, repeatable admin tasks, and small business IT workflows.",
    homepageSummary:
      "Custom scripts and workflow tools that reduce manual work, standardize repeat tasks, and make internal IT processes easier to run.",
    lead:
      "Blackburn Works builds practical PowerShell scripts for the tasks you repeat often, from workstation setup and system checks to reporting and internal process improvements.",
    price: "Scoped by workflow",
    timeline: "Planned around the task",
    tags: ["PowerShell scripts", "Workflow automation", "System checks", "Reporting"],
    highlights: [
      "Workstation setup automation",
      "Repeatable admin tasks and reporting",
      "Internal IT workflow improvements",
    ],
    benefits: [
      "Reduce repetitive technical work that eats up time",
      "Make routine tasks more consistent and easier to hand off",
      "Build tools around the way your environment actually works",
    ],
    process: [
      "Identify the task, inputs, outputs, and success criteria",
      "Build and review a practical script or tool for the workflow",
      "Document usage so the automation is easier to maintain",
    ],
    detailText:
      "Automation is scoped around the workflow or tool you need. It is a separate service from website development and hourly IT support.",
    faqs: [
      {
        question: "What can PowerShell automation help with?",
        answer:
          "PowerShell automation can support workstation setup, system checks, reporting, repeatable admin tasks, and internal IT workflow improvements.",
      },
      {
        question: "Is automation separate from IT support?",
        answer:
          "Yes. Automation is scoped as a workflow or tool build, while IT support is hourly troubleshooting or setup help.",
      },
      {
        question: "Do you document the scripts?",
        answer:
          "Yes. Automation work includes practical usage notes so the tool is easier to understand, run, and maintain.",
      },
    ],
  },
];

const year = new Date().getFullYear();

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const DEFAULT_META = {
  title: "Blackburn Works LLC | Digital Presence Design, IT & Automation",
  description:
    "Blackburn Works designs complete digital presences and provides practical IT support and PowerShell automation across the DMV area.",
  path: "/",
};

const SITE_URL = (import.meta.env.VITE_SITE_URL || "https://blackburnworks.com").replace(/\/$/, "");

const WEB_APP_WORK_ITEMS = WORK_ITEMS.filter(
  (item) =>
    !item.tags?.includes("PowerShell") &&
    item.tags?.some((tag) => ["Web", "Mobile", "MVP", "UI/UX"].includes(tag)),
);

const setMetaContent = (selector, content) => {
  const element = document.querySelector(selector);
  if (element) {
    element.setAttribute("content", content);
  }
};

const ensureCanonicalLink = () => {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  return link;
};

const getCanonicalUrl = (path = "/") =>
  `${SITE_URL}${path === "/" ? "/" : path.replace(/\/$/, "")}`;

const setJsonLd = (id, data) => {
  const existing = document.getElementById(id);
  if (!data) {
    existing?.remove();
    return;
  }

  const script = existing || document.createElement("script");
  script.id = id;
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  if (!existing) {
    document.head.appendChild(script);
  }
};

const getServiceSchema = (service) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${getCanonicalUrl(`/services/${service.slug}`)}#service`,
      name: service.shortTitle,
      description: service.metaDescription,
      provider: {
        "@type": "LocalBusiness",
        name: "Blackburn Works LLC",
        url: SITE_URL,
        description:
          "Black-owned and veteran-owned technology business serving the DMV area.",
      },
      areaServed: DMV_SERVICE_AREAS.map((area) => ({
        "@type": "Place",
        name: area,
      })),
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          description: service.price,
        },
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${getCanonicalUrl(`/services/${service.slug}`)}#faq`,
      mainEntity: service.faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
});

function usePageMeta({ title, description, path = "/", schema = null }) {
  useEffect(() => {
    const canonicalUrl = getCanonicalUrl(path);
    document.title = title;
    ensureCanonicalLink().setAttribute("href", canonicalUrl);
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[property="og:url"]', canonicalUrl);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);
    setJsonLd("bw-page-schema", schema);
  }, [title, description, path, schema]);
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {SERVICE_PAGES.map((service) => (
        <Route
          key={service.slug}
          path={`/services/${service.slug}`}
          element={<ServicePage service={service} />}
        />
      ))}
      {WORK_ITEMS.map((item) => (
        <Route
          key={item.slug}
          path={`/work/${item.slug}`}
          element={<WorkPage item={item} />}
        />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

function HomePage() {
  usePageMeta(DEFAULT_META);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!id) return;
    const scroll = () => scrollToId(id);
    window.requestAnimationFrame(scroll);
    const timeout = window.setTimeout(scroll, 150);
    return () => window.clearTimeout(timeout);
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <div className="bw-site">
      <header className="bw-header sticky-top">
        <div className="container bw-shell">
          <div className="bw-headerInner">
            <button
              className="bw-brandWrap"
              type="button"
              onClick={() => handleNavClick("hero")}
            >
              <img src={BWMark} alt="Blackburn Works" className="bw-brandMark" />
            </button>

            <button
              className="bw-menuToggle"
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-controls="primary-navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <nav
              id="primary-navigation"
              className={`bw-navMenu${menuOpen ? " bw-navMenuOpen" : ""}`}
            >
              {NAV.map((item) => (
                <button
                  key={item.id}
                  className="bw-navLink"
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <button
              className="bw-btn bw-btnPrimary bw-headerCta"
              type="button"
              onClick={() => handleNavClick("contact")}
            >
              Get in touch
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="hero" className="bw-heroSection">
          <div className="container bw-shell">
            <div className="row align-items-center gy-5">
              <div className="col-lg-6">
                <div className="bw-kicker">Digital presence designer · DMV</div>
                <h1 className="bw-display">
                  Designing your digital presence. <span className="bw-accent">Solving what powers it.</span>
                </h1>
                <p className="bw-lead">
                  Blackburn Works shapes how businesses show up online—from
                  brand-forward websites to the systems behind the work. We also
                  solve stubborn IT problems and automate repetitive workflows.
                  Based in the DMV. Clear scope, direct support.
                </p>
                <div className="bw-identityRow" aria-label="Business ownership and service area">
                  {OWNERSHIP_POINTS.map((point) => (
                    <span key={point}>{point}</span>
                  ))}
                </div>
                <div className="bw-heroActions">
                  <button
                    className="bw-btn bw-btnPrimary"
                    type="button"
                    onClick={() => scrollToId("contact")}
                  >
                    Tell us what you need
                  </button>
                  <button
                    className="bw-btn bw-btnSecondary"
                    type="button"
                    onClick={() => scrollToId("services")}
                  >
                    Explore services
                  </button>
                </div>
                <div className="bw-statsGrid">
                  <StatCard value="01" label="Websites that earn attention" />
                  <StatCard value="02" label="IT help without the runaround" />
                  <StatCard value="03" label="Automation that saves real time" />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="bw-heroVisual">
                  <div className="bw-heroVisualPanel">
                    <img src={NewBWLogo} alt="Blackburn Works — building digital presence, solving problems, creating impact" className="bw-heroLogo" />
                    <div className="bw-heroCaption">
                      <span>Washington, DC</span>
                      <span>Web · IT · Automation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bw-bgShape bw-bgShapeOne" />
          <div className="bw-bgShape bw-bgShapeTwo" />
        </section>

        <section id="about" className="bw-section">
          <div className="container bw-shell">
            <div className="row align-items-start gy-5">
              <div className="col-lg-5">
                <div className="bw-sectionLabel">The Blackburn approach</div>
                <h2 className="bw-sectionTitle">
                  A stronger presence, built on useful technology.
                </h2>
                <p className="bw-sectionText">
                  Blackburn Works is a Black-owned and veteran-owned technology
                  studio helping small businesses look established, communicate
                  clearly, and work more efficiently. Digital presence design,
                  practical IT support, and PowerShell tools all live under one roof.
                </p>

                <button
                  className="bw-btn bw-btnPrimary"
                  type="button"
                  onClick={() => scrollToId("contact")}
                >
                  Start a conversation
                </button>
              </div>

              <div className="col-lg-7">
                <div className="bw-aboutGrid">
                  <div className="bw-aboutFeatureCard bw-aboutFeatureCardAccent">
                    <div className="bw-aboutFeatureIcon">
                      <Palette size={20} />
                    </div>
                    <h3>Clear UX Thinking</h3>
                    <p>
                      Interfaces shaped for usability, flow, and a polished visual
                      experience.
                    </p>
                  </div>

                  <div className="bw-aboutFeatureCard">
                    <div className="bw-aboutFeatureIcon">
                      <Code size={20} />
                    </div>
                    <h3>Modern Web Builds</h3>
                    <p>
                      Responsive frontend development with clean structure and strong
                      presentation.
                    </p>
                  </div>

                  <div className="bw-aboutFeatureCard">
                    <div className="bw-aboutFeatureIcon">
                      <Terminal size={20} />
                    </div>
                    <h3>PowerShell Automation</h3>
                    <p>
                      Practical tools for repeatable tasks, reporting, and
                      internal IT workflows.
                    </p>
                  </div>

                  <div className="bw-aboutFeatureCard">
                    <div className="bw-aboutFeatureIcon">
                      <LayoutGrid size={20} />
                    </div>
                    <h3>Owner-led from Start to Finish</h3>
                    <p>
                      You work directly with the person planning, building, and
                      supporting the finished solution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="bw-section bw-sectionAlt">
          <div className="container bw-shell">
            <SectionHeader
              title="Selected work."
              text="Distinct digital experiences shaped around the people, products, and stories they represent."
            />

            <div className="row g-4">
              {WEB_APP_WORK_ITEMS.map((item) => (
                <ProjectCard key={item.slug} item={item} />
              ))}
            </div>

            <div className="bw-workProof" aria-label="Blackburn Works project approach">
              <span>React + Vite</span>
              <span>PowerShell</span>
              <span>Vercel deployment</span>
              <span>Direct client support</span>
            </div>
          </div>
        </section>

        <section id="services" className="bw-section">
          <div className="container bw-shell">
            <SectionHeader
              title="Three ways we can help."
              text="Choose a focused engagement or bring us a problem that crosses disciplines. We will define the right path before the work begins."
            />

            <div className="bw-serviceOverviewGrid">
              {SERVICE_PAGES.map((service) => (
                <ServiceOverviewCard key={service.slug} service={service} />
              ))}
            </div>

            <div className="bw-localServiceArea bw-serviceAreaCompact">
              <span>Local service area</span>
              <p>
                Serving Washington, DC, Maryland, and Northern Virginia—with
                remote support available beyond the DMV.
              </p>
            </div>

            <div className="bw-servicesCta bw-servicesCtaWide">
              <div>
                <h3>Not sure which service fits?</h3>
                <p>
                  Send the basics and Blackburn Works will help route the
                  request clearly: digital presence design, hourly IT support, automation,
                  or a combination that makes sense.
                </p>
              </div>
              <div className="bw-servicesCtaActions">
                <button
                  className="bw-btn bw-btnPrimary"
                  type="button"
                  onClick={() => scrollToId("contact")}
                >
                  Send your project
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bw-section bw-sectionAlt bw-trustSection">
          <div className="container bw-shell">
            <div className="bw-trustGrid">
              <div className="bw-trustIntro">
                <div className="bw-sectionLabel">Client words</div>
                <h2 className="bw-sectionTitle">
                  Good work gets remembered.
                </h2>
                <p className="bw-sectionText">
                  Founder-led, Black-owned, and veteran-owned. Every engagement
                  gets direct communication, a clear scope, and work built around
                  the person who will actually use it.
                </p>
              </div>

              <div className="bw-testimonialGrid">
                <blockquote className="bw-testimonialCard">
                  <Quote size={24} aria-hidden="true" />
                  <p>“OMG you did that! I love it! I showed my mama and she said thank you so much and that you have some talent!”</p>
                  <footer>
                    <strong>Jasmine Ware</strong>
                    <span>Artist portfolio client</span>
                  </footer>
                </blockquote>
                <blockquote className="bw-testimonialCard">
                  <Quote size={24} aria-hidden="true" />
                  <p>“You are my go to guy for any of my IT needs! Thank you for everything you do!”</p>
                  <footer>
                    <strong>Dave Churchill</strong>
                    <span>IT support client</span>
                  </footer>
                </blockquote>
              </div>
            </div>

            <div className="bw-processStrip">
              <ProcessStep number="01" title="Share the need" text="Send the essentials: the service you need, where you are located, and what outcome matters most." />
              <ProcessStep number="02" title="Confirm the fit" text="You get a clear recommendation for website work, hourly IT support, PowerShell automation, or a practical next step." />
              <ProcessStep number="03" title="Move with clarity" text="The work stays focused on useful outcomes, plain-language communication, and a clean handoff." />
            </div>
          </div>
        </section>

        {/* <section id="team" className="bw-section">
          <div className="container bw-shell">
            <SectionHeader
              title="Team"
              text="Reserved for future team content."
            />
          </div>
        </section> */}

        {/* <section id="leadership" className="bw-section bw-sectionAlt">
          <div className="container bw-shell">
            <SectionHeader
              title="Leadership"
              text="Reserved for future leadership content."
            />
          </div>
        </section> */}

        <section id="contact" className="bw-section bw-sectionAlt">
          <div className="container bw-shell">
            <SectionHeader
              title="Contact"
              text="Need a stronger digital presence, practical IT support, or automation? Send a few details and I'll follow up within 24 hours with clear next steps."
            />

            <div className="row g-4 align-items-stretch">
              <div className="col-lg-5">
                <div className="bw-contactFormCard">
                  <div className="bw-formIntro">
                    <div className="bw-formIcon">
                      <IconMessage />
                    </div>
                    <h3>Let&apos;s start a conversation</h3>
                    <p>
                      No pressure and no long discovery process. Share the
                      basics and I&apos;ll help route the request clearly:
                      digital presence design, hourly IT support, or PowerShell
                      automation.
                    </p>
                  </div>
                  <ContactForm />
                </div>
              </div>

              <div className="col-lg-7">
                <div className="bw-contactInfoArea">
                  <div className="bw-infoHeader">
                    <h3>Clear next steps, not a hard sell.</h3>
                    <p>
                      You can ask about a website build, describe a technical
                      issue, or request automation guidance before committing to
                      anything. The first step is simple: send the details you
                      have.
                    </p>
                  </div>

                  <div className="bw-directContact" aria-label="Direct contact options">
                    <a href="mailto:contact@blackburn.works">
                      <Mail size={19} aria-hidden="true" />
                      <span><small>Email</small>contact@blackburn.works</span>
                    </a>
                    <a href="tel:+12026564550">
                      <Phone size={19} aria-hidden="true" />
                      <span><small>Call or text</small>(202) 656-4550</span>
                    </a>
                  </div>

                  <div className="bw-methodGrid">
                    <InfoCard
                      title="Digital Presence Design"
                      value="Starting at $750"
                      note="Visual direction, messaging, and tailored websites"
                      icon={<IconSpark />}
                    />
                    <InfoCard
                      title="IT Services"
                      value="Starting at $50/hour"
                      note="Remote or onsite within 50 miles of Washington, DC"
                      icon={<LifeBuoy size={20} />}
                    />
                    <InfoCard
                      title="PowerShell Automation"
                      value="Workflow tools"
                      note="Scripts for repeatable tasks and reporting"
                      icon={<IconCode />}
                    />
                  </div>

                  <div className="bw-contactMeta">
                    <div className="bw-metaStat">
                      <div className="bw-metaValue">DMV Area</div>
                      <div className="bw-metaLabel">Washington, DC, Maryland, and Northern Virginia</div>
                    </div>
                    <div className="bw-metaStat">
                      <div className="bw-metaValue">Remote + Onsite</div>
                      <div className="bw-metaLabel">Flexible IT support options</div>
                    </div>
                    <div className="bw-metaMap">Digital presence design, hourly IT support, and PowerShell automation are scoped clearly before work begins</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bw-footer">
        <div className="container bw-shell">
          <div className="bw-footerGrid">
            <div>
              <div className="bw-footerBrand">
                <img src={BWMark} alt="Blackburn Works" className="bw-footerMark" />
              </div>
              <p className="bw-footerCopy">
                Black-owned and veteran-owned. Modern websites, practical
                digital presence design, PowerShell automation, and affordable
                DMV-area IT services for small businesses and home offices.
              </p>
            </div>

            <div>
              <h4 className="bw-footerTitle">Navigation</h4>
              <div className="bw-footerLinks">
                {NAV.map((item) => (
                  <button
                    key={item.id}
                    className="bw-footerLink"
                    type="button"
                    onClick={() => scrollToId(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="bw-footerTitle">Blackburn Works</h4>
              <div className="bw-footerMeta">
                <span>Digital Presence Design</span>
                <span>Black-owned Business</span>
                <span>Veteran-owned Business</span>
                <span>Affordable DMV IT Support</span>
                <span>PC Repair & Troubleshooting</span>
                <span>UI/UX</span>
                <span>PowerShell Automation & Tools</span>
              </div>
            </div>
          </div>

          <div className="bw-footerBottom">© 2025 - {year} Blackburn Works LLC</div>
        </div>
      </footer>
    </div>
  );
}

function ServicePage({ service }) {
  usePageMeta({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    schema: getServiceSchema(service),
  });

  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!id) return;
    const scroll = () => scrollToId(id);
    window.requestAnimationFrame(scroll);
    const timeout = window.setTimeout(scroll, 150);
    return () => window.clearTimeout(timeout);
  }, [service.slug]);

  const isWebsite = service.slug === "website-development";
  const isIT = service.slug === "it-services";
  const isAutomation = service.slug === "powershell-automation";

  return (
    <div className="bw-site">
      <header className="bw-header sticky-top">
        <div className="container bw-shell">
          <div className="bw-headerInner">
            <Link to="/" className="bw-brandWrap bw-brandLink">
              <img src={BWMark} alt="Blackburn Works" className="bw-brandMark" />
            </Link>

            <div className="bw-detailActions">
              <Link to="/#services" className="bw-btn bw-btnSecondary text-decoration-none">
                All Services
              </Link>
              <Link to="/#contact" className="bw-btn bw-btnPrimary text-decoration-none">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="bw-section bw-detailHero bw-serviceDetailHero">
          <div className="container bw-shell">
            <div className="row align-items-center gy-5">
              <div className="col-lg-7">
                <div className="bw-kicker">{service.kicker}</div>
                <h1 className="bw-display bw-detailTitle">{service.title}</h1>
                <p className="bw-lead">{service.lead}</p>
                <div className="bw-identityRow" aria-label="Business ownership and service area">
                  {OWNERSHIP_POINTS.map((point) => (
                    <span key={point}>{point}</span>
                  ))}
                </div>
                <div className="bw-tagRow">
                  {service.tags.map((tag) => (
                    <span key={tag} className="bw-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="col-lg-5">
                <div className="bw-detailCard bw-serviceSummaryCard">
                  <div className="bw-serviceIcon">{SERVICE_PAGE_ICONS[service.icon]}</div>
                  <h3>{service.shortTitle}</h3>
                  <p>{service.homepageSummary}</p>
                  <div className="bw-tierMetaGrid">
                    <div className="bw-tierMeta">
                      <div className="bw-tierMetaLabel">Pricing</div>
                      <div className="bw-tierMetaValue">{service.price}</div>
                    </div>
                    <div className="bw-tierMeta">
                      <div className="bw-tierMetaLabel">Timeline / Availability</div>
                      <div className="bw-tierMetaValue">{service.timeline}</div>
                    </div>
                  </div>
                  <Link to="/#contact" className="bw-btn bw-btnPrimary text-decoration-none">
                    Request This Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bw-section bw-sectionAlt">
          <div className="container bw-shell">
            <SectionHeader title={`${service.shortTitle} details`} text={service.detailText} />

            <div className="bw-serviceDetailGrid">
              <ServiceDetailList title="Common needs" items={service.highlights} />
              <ServiceDetailList title="How this helps" items={service.benefits} />
              <ServiceDetailList title="Process" items={service.process} />
            </div>

            {isWebsite ? (
              <div className="bw-servicePageSection">
                <div id="website-portfolio" className="bw-servicePageSectionAnchor">
                  <div className="bw-subsectionIntro">
                    <div className="bw-sectionLabel">Website &amp; App Portfolio</div>
                    <h2 className="bw-subsectionTitle">
                      Webpages, apps, and product-style builds.
                    </h2>
                    <p className="bw-subsectionText">
                      A focused look at Blackburn Works website and app projects,
                      separated from IT support and PowerShell automation so the
                      web development work is easier to review.
                    </p>
                  </div>

                  <div className="row g-4">
                    {WEB_APP_WORK_ITEMS.map((item) => (
                      <ProjectCard key={item.slug} item={item} />
                    ))}
                  </div>
                </div>

                <div className="bw-subsectionIntro">
                  <div className="bw-sectionLabel">Website Packages</div>
                  <h2 className="bw-subsectionTitle">Choose the right website scope.</h2>
                  <p className="bw-subsectionText">
                    Website development is offered as starter, business, or custom
                    work so the scope matches the size of the business need.
                  </p>
                </div>

                <div className="row g-4 align-items-stretch">
                  {WEBSITE_TIERS.map((tier) => (
                    <div key={tier.title} className="col-xl-4 col-md-6">
                      <WebsiteTierCard tier={tier} />
                    </div>
                  ))}
                </div>

                <p className="bw-servicesNote">
                  Timeline begins once all content and assets are provided.
                </p>
              </div>
            ) : null}

            {isIT ? (
              <div className="bw-itServicesPanel bw-servicePageSection">
                <div className="bw-itServicesIntro">
                  <div>
                    <div className="bw-sectionLabel">IT Support List</div>
                    <h2 className="bw-subsectionTitle">
                      Computer help without the confusion.
                    </h2>
                    <p className="bw-subsectionText bw-subsectionTextTight">
                      Remote support is available, and onsite service is
                      available within a 50-mile radius of Washington, DC.
                    </p>
                  </div>

                  <div className="bw-itPricingCard">
                    <span>Pricing</span>
                    <strong>Starting at $50/hour</strong>
                  </div>
                </div>

                <div className="bw-itServicesGrid">
                  {IT_SERVICES.map((item) => (
                    <div key={item} className="bw-itServiceItem">
                      <Check size={16} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bw-itAvailability">
                  <LifeBuoy size={18} />
                  <span>
                    Remote support available or onsite service within a 50-mile
                    radius of Washington, DC.
                  </span>
                </div>
              </div>
            ) : null}

            {isAutomation ? (
              <div className="bw-addonsPanel bw-servicePageSection">
                <div className="bw-addonsHeader">
                  <div>
                    <div className="bw-sectionLabel">Automation Examples</div>
                    <h2 className="bw-subsectionTitle">
                      PowerShell tools for practical repeat work.
                    </h2>
                    <p className="bw-subsectionText bw-subsectionTextTight">
                      Automation work is scoped around the real workflow, the
                      environment it needs to run in, and the outcome it should
                      produce.
                    </p>
                  </div>
                  <Link to="/#contact" className="bw-btn bw-btnPrimary text-decoration-none">
                    Start Automation
                  </Link>
                </div>

                <div className="bw-addonsGrid">
                  {ADD_ONS.map((item) => (
                    <div key={item} className="bw-addonChip">
                      <Check size={16} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <FAQSection faqs={service.faqs} />

            <div className="bw-localServiceArea bw-servicePageSection">
              <span>DMV service area</span>
              <p>
                Blackburn Works serves Washington, DC, Maryland, and Northern
                Virginia with remote service options and local onsite IT support
                where available.
              </p>
              <div className="bw-tagRow">
                {DMV_SERVICE_AREAS.map((area) => (
                  <span key={area} className="bw-tag">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="bw-servicesCta bw-servicesCtaWide">
              <div>
                <h3>Ready to talk through {service.shortTitle}?</h3>
                <p>
                  Send the details you have. Blackburn Works will respond with
                  clear next steps, practical scope guidance, and no hard sell.
                </p>
              </div>
              <div className="bw-servicesCtaActions">
                <Link to="/#contact" className="bw-btn bw-btnPrimary text-decoration-none">
                  Start Your Project
                </Link>
                <Link to="/#services" className="bw-btn bw-btnSecondary text-decoration-none">
                  Compare Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ServiceFooter />
    </div>
  );
}

function NotFoundPage() {
  usePageMeta({
    title: "Page Not Found | Blackburn Works LLC",
    description:
      "The requested Blackburn Works page could not be found. Explore digital presence design, IT services, and PowerShell automation for the DMV area.",
    path: "/404",
  });

  return (
    <div className="bw-site">
      <header className="bw-header sticky-top">
        <div className="container bw-shell">
          <div className="bw-headerInner">
            <Link to="/" className="bw-brandWrap bw-brandLink">
              <img src={BWMark} alt="Blackburn Works" className="bw-brandMark" />
            </Link>

            <div className="bw-detailActions">
              <Link to="/" className="bw-btn bw-btnSecondary text-decoration-none">
                Back Home
              </Link>
              <Link to="/#services" className="bw-btn bw-btnPrimary text-decoration-none">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="bw-section bw-detailHero">
          <div className="container bw-shell">
            <div className="bw-kicker">404</div>
            <h1 className="bw-display bw-detailTitle">This page is not available.</h1>
            <p className="bw-lead">
              The page may have moved, but Blackburn Works can still help with
              digital presence design, affordable DMV IT services, and practical
              PowerShell automation.
            </p>
            <div className="bw-heroActions">
              <Link to="/#services" className="bw-btn bw-btnPrimary text-decoration-none">
                Explore Services
              </Link>
              <Link to="/#contact" className="bw-btn bw-btnSecondary text-decoration-none">
                Contact Blackburn Works
              </Link>
            </div>
          </div>
        </section>
      </main>

      <ServiceFooter />
    </div>
  );
}

function WorkPage({ item }) {
  usePageMeta({
    title: `${item.title} | Blackburn Works LLC`,
    description: item.shortDesc || item.desc,
    path: `/work/${item.slug}`,
  });

  return (
    <div className="bw-site">
      <header className="bw-header sticky-top">
        <div className="container bw-shell">
          <div className="bw-headerInner">
            <Link to="/" className="bw-brandWrap bw-brandLink">
              <img src={BWMark} alt="Blackburn Works" className="bw-brandMark" />
            </Link>

            <div className="bw-detailActions">
              <Link to="/" className="bw-btn bw-btnSecondary text-decoration-none">
                Back to Main Site
              </Link>
              <a
                href={item.liveUrl}
                className="bw-btn bw-btnPrimary text-decoration-none"
                target="_blank"
                rel="noreferrer"
              >
                Open Live Project
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="bw-section bw-detailHero">
          <div className="container bw-shell">
            <div className="row align-items-center gy-5">
              <div className="col-lg-7">
                <div className="bw-kicker">Selected Project</div>
                <h1 className="bw-display bw-detailTitle">{item.title}</h1>
                <p className="bw-lead">{item.desc}</p>
                <div className="bw-tagRow">
                  {item.tags?.map((tag) => (
                    <span key={tag} className="bw-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                {item.platforms?.length ? (
                  <div className="bw-platformRow" aria-label="Available platforms">
                    <span>Available on</span>
                    {item.platforms.map((platform) => (
                      <strong key={platform}>{platform}</strong>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="col-lg-5">
                <div className="bw-projectPreview">
                  <ProjectThumb item={item} detail />
                  <div className="bw-projectPreviewBody">
                    <h3>Project overview</h3>
                    <p>{item.shortDesc || item.summary}</p>
                    {item.appStoreUrl || item.webUrl ? (
                      <div className="bw-projectLinks">
                        {item.appStoreUrl ? (
                          <a href={item.appStoreUrl} target="_blank" rel="noreferrer">Apple App Store</a>
                        ) : null}
                        {item.webUrl ? (
                          <a href={item.webUrl} target="_blank" rel="noreferrer">Open web app</a>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            <div className="row g-4 bw-detailGrid">
              <div className="col-lg-6">
                <DetailCard title="What it is" text={item.summary} />
              </div>
              <div className="col-lg-6">
                <DetailCard title="Impact" text={item.outcome} />
              </div>
              <div className="col-lg-6">
                <div className="bw-detailCard">
                  <h3>Key features</h3>
                  <div className="bw-tagRow">
                    {item.keyFeatures?.map((feature) => (
                      <span key={feature} className="bw-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bw-detailCard">
                  <h3>Need something similar?</h3>
                  <p>
                    Blackburn Works can shape a clean, modern build around your
                    own product, brand, or platform idea.
                  </p>
                  <Link to="/" className="bw-btn bw-btnPrimary text-decoration-none">
                    Start Your Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function SectionHeader({ title, text }) {
  return (
    <div className="bw-sectionHeader">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function ServiceFooter() {
  return (
    <footer className="bw-footer">
      <div className="container bw-shell">
        <div className="bw-footerGrid">
          <div>
            <div className="bw-footerBrand">
              <img src={BWMark} alt="Blackburn Works" className="bw-footerMark" />
            </div>
            <p className="bw-footerCopy">
              Black-owned and veteran-owned technology support for websites,
              automation, and affordable IT services across the DMV area.
            </p>
          </div>

          <div>
            <h4 className="bw-footerTitle">Services</h4>
            <div className="bw-footerLinks">
              {SERVICE_PAGES.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="bw-footerLink text-decoration-none"
                >
                  {service.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="bw-footerTitle">Service Area</h4>
            <div className="bw-footerMeta">
              <span>Washington, DC</span>
              <span>Maryland</span>
              <span>Northern Virginia</span>
              <span>Remote Support</span>
              <span>Onsite IT within 50 miles of DC</span>
            </div>
          </div>
        </div>

        <div className="bw-footerBottom">© 2025 - {year} Blackburn Works LLC</div>
      </div>
    </footer>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="bw-statCard">
      <div className="bw-statValue">{value}</div>
      <div className="bw-statLabel">{label}</div>
    </div>
  );
}

function ServiceOverviewCard({ service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="bw-serviceCard bw-serviceOverviewCard text-decoration-none"
    >
      <div className="bw-serviceIcon">{SERVICE_PAGE_ICONS[service.icon]}</div>
      <div className="bw-tierEyebrow">{service.kicker}</div>
      <h3>{service.shortTitle}</h3>
      <p>{service.homepageSummary}</p>
      <ul className="bw-featureList bw-featureListCompact">
        {service.highlights.map((item) => (
          <li key={item}>
            <Check size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <span className="bw-serviceLearnMore">
        Learn more <ArrowRight size={16} />
      </span>
    </Link>
  );
}

function ServiceDetailList({ title, items }) {
  return (
    <div className="bw-detailCard">
      <h3>{title}</h3>
      <ul className="bw-featureList">
        {items.map((item) => (
          <li key={item}>
            <Check size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FAQSection({ faqs }) {
  return (
    <div className="bw-servicePageSection">
      <div className="bw-subsectionIntro">
        <div className="bw-sectionLabel">FAQ</div>
        <h2 className="bw-subsectionTitle">Common questions</h2>
      </div>

      <div className="bw-faqGrid">
        {faqs.map((item) => (
          <div key={item.question} className="bw-detailCard">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProcessStep({ number, title, text }) {
  return (
    <div className="bw-processStep">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function WebsiteTierCard({ tier }) {
  return (
    <div className={`bw-tierCard${tier.featured ? " bw-tierCardFeatured" : ""}`}>
      {tier.badge ? <span className="bw-serviceBadge">{tier.badge}</span> : null}

      <div className="bw-serviceIcon">{WEBSITE_TIER_ICONS[tier.icon]}</div>
      <div className="bw-tierHeader">
        <div className="bw-tierEyebrow">Website Service</div>
        <h3>{tier.title}</h3>
        <p className="bw-tierSummary">{tier.summary}</p>
        <p className="bw-tierPositioning">{tier.positioning}</p>
      </div>

      <div className="bw-tierMetaGrid">
        <div className="bw-tierMeta">
          <div className="bw-tierMetaLabel">Pricing</div>
          <div className="bw-tierMetaValue">{tier.price}</div>
        </div>
        <div className="bw-tierMeta">
          <div className="bw-tierMetaLabel">Timeline</div>
          <div className="bw-tierMetaValue">{tier.timeline}</div>
        </div>
      </div>

      <div className="bw-tierBestFor">
        <span>Best for</span>
        <p>{tier.bestFor}</p>
      </div>

      <div className="bw-tierOutcome">
        <span>Outcome</span>
        <p>{tier.outcome}</p>
      </div>

      <div className="bw-tierDivider" />

      <div className="bw-tierListLabel">Includes</div>
      <ul className="bw-featureList">
        {tier.features.map((feature) => (
          <li key={feature}>
            <Check size={16} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        className={`bw-btn ${tier.featured ? "bw-btnPrimary" : "bw-btnSecondary"} bw-tierButton text-decoration-none`}
        to="/#contact"
      >
        {tier.cta}
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}

function ProjectCard({ item }) {
  return (
    <div className="col-xl-4 col-lg-6">
      <Link to={`/work/${item.slug}`} className="bw-projectCard text-decoration-none">
        <ProjectThumb item={item} />
        <div className="bw-projectBody">
          <div className="bw-projectMeta">
            <span>{item.tags?.[0] || "Project"}</span>
            <span>{item.tags?.length || 0} focus areas</span>
          </div>
          <h3>{item.title}</h3>
          <p>{item.impactDesc || item.shortDesc || item.desc}</p>
          {item.platforms?.length ? (
            <div className="bw-platformList" aria-label={`${item.title} availability`}>
              {item.platforms.map((platform) => (
                <span key={platform}>{platform}</span>
              ))}
            </div>
          ) : null}
          <div className="bw-tagRow">
            {item.tags?.map((tag) => (
              <span key={tag} className="bw-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}

function ProjectThumb({ item, detail = false }) {
  return (
    <div className={`bw-projectThumb${detail ? " bw-projectThumbDetail" : ""}`}>
      {item.image ? (
        <img
          src={item.image}
          alt={item.title}
          className={`bw-projectImage${item.imageFit === "cover" ? " bw-projectImageCover" : ""}`}
          style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
        />
      ) : (
        <div className="bw-projectPlaceholder">
          <span>{item.shortTitle || item.title}</span>
        </div>
      )}
    </div>
  );
}

function InfoCard({ title, value, note, icon }) {
  return (
    <div className="bw-infoCard">
      <div className="bw-infoIcon">{icon}</div>
      <h4>{title}</h4>
      <div className="bw-infoValue">{value}</div>
      <p>{note}</p>
    </div>
  );
}

function DetailCard({ title, text }) {
  return (
    <div className="bw-detailCard">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    setLoading(true);
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/mwvnnoba", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Message received. I’ll follow up within 24 hours.");
        setTimeout(() => setStatus(""), 5000);
        form.reset();
      } else {
        setStatus("Something went wrong. Try again.");
      }
    } catch {
      setStatus("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="row g-3" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <input
          name="name"
          className="form-control bw-input"
          placeholder="Your name"
          required
        />
      </div>

      <div className="col-md-6">
        <input
          type="email"
          name="email"
          className="form-control bw-input"
          placeholder="Email address"
          required
        />
      </div>

      <div className="col-md-6">
        <select
          name="service_type"
          className="form-select bw-input"
          defaultValue=""
          aria-label="Service type"
          required
        >
          <option value="" disabled>
            Service type
          </option>
          <option value="Digital Presence Design">Digital Presence Design</option>
          <option value="IT Services">IT Services</option>
          <option value="PowerShell Automation">PowerShell Automation</option>
          <option value="Not Sure">Not Sure Yet</option>
        </select>
      </div>

      <div className="col-md-6">
        <select
          name="support_preference"
          className="form-select bw-input"
          defaultValue=""
          aria-label="Support preference"
        >
          <option value="" disabled>
            Remote, onsite, or not sure?
          </option>
          <option value="Remote support">Remote support</option>
          <option value="Onsite support">Onsite support</option>
          <option value="Not sure">Not sure</option>
          <option value="Not applicable">Not applicable</option>
        </select>
      </div>

      <div className="col-12">
        <input
          name="subject"
          className="form-control bw-input"
          placeholder="What do you need help with?"
        />
      </div>

      <div className="col-12">
        <textarea
          name="message"
          rows="5"
          className="form-control bw-input"
          placeholder="Tell us whether this is IT support, a website, automation, or another technical need. Include your location if you need onsite service."
          required
        />
      </div>

      <div className="col-12">
        <input type="text" name="_gotcha" style={{ display: "none" }} />
        <input type="hidden" name="_subject" value="New Blackburn Works inquiry" />
        <button className="bw-btn bw-btnPrimary" type="submit" disabled={loading}>
          {loading ? "Sending..." : "Start the Conversation"}
        </button>

        {status && <p className="bw-responseNote">{status}</p>}
      </div>
    </form>
  );
}

function IconSpark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9zM6 15l.9 2.1L9 18l-2.1.9L6 21l-.9-2.1L3 18l2.1-.9z" />
    </svg>
  );
}

function IconCode() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.5 8L4 12l4.5 4M15.5 8L20 12l-4.5 4M13.5 4l-3 16" />
    </svg>
  );
}

function IconMessage() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5h16v10H8l-4 4z" />
    </svg>
  );
}
