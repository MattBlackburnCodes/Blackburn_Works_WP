import { Link, Route, Routes } from "react-router-dom";
import BWIcon from "./assets/BWIconTransp.png";
import BWLogo from "./assets/BWLogoTransP.png";
import { ADD_ONS } from "./data/addOns";
import { CAPABILITY_SERVICES } from "./data/capabilityServices";
import { WORK_ITEMS } from "./data/workItems";
import { WEBSITE_TIERS } from "./data/websiteTiers";
import {
  ArrowRight,
  Check,
  Code,
  Globe,
  LayoutGrid,
  LifeBuoy,
  Palette,
  Terminal,
  Workflow,
} from "lucide-react";

const NAV = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const WEBSITE_TIER_ICONS = {
  globe: <Globe size={20} />,
  layoutGrid: <LayoutGrid size={20} />,
  code: <Code size={20} />,
};

const CAPABILITY_SERVICE_ICONS = {
  support: <LifeBuoy size={20} />,
  workflow: <Workflow size={20} />,
  palette: <Palette size={20} />,
};

const year = new Date().getFullYear();

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {WORK_ITEMS.map((item) => (
        <Route
          key={item.slug}
          path={`/work/${item.slug}`}
          element={<WorkPage item={item} />}
        />
      ))}
    </Routes>
  );
}

function HomePage() {
  return (
    <div className="bw-site">
      <header className="bw-header sticky-top">
        <div className="container bw-shell">
          <div className="bw-headerInner">
            <button
              className="bw-brandWrap"
              type="button"
              onClick={() => scrollToId("hero")}
            >
              <img src={BWIcon} alt="Blackburn Works" className="bw-brandIcon" />
              <span className="bw-brandText">Blackburn Works LLC</span>
            </button>

            <nav className="bw-navMenu">
              {NAV.map((item) => (
                <button
                  key={item.id}
                  className="bw-navLink"
                  type="button"
                  onClick={() => scrollToId(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <button
              className="bw-btn bw-btnPrimary"
              type="button"
              onClick={() => scrollToId("contact")}
            >
              Book a Build Call
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="hero" className="bw-heroSection">
          <div className="container bw-shell">
            <div className="row align-items-center gy-5">
              <div className="col-lg-6">
                <div className="bw-kicker">Blackburn Works LLC</div>
                <h1 className="bw-display">
                  Modern digital builds with a <span className="bw-accent">clean, product-first presence.</span>
                </h1>
                <p className="bw-lead">
                  Helping small businesses, creators, and startups launch fast, modern websites without the stress.
                </p>
                <div className="bw-heroActions">
                  <button
                    className="bw-btn bw-btnPrimary"
                    type="button"
                    onClick={() => scrollToId("contact")}
                  >
                    Start Your Build
                  </button>
                  <button
                    className="bw-btn bw-btnSecondary"
                    type="button"
                    onClick={() => scrollToId("portfolio")}
                  >
                    See Recent Work
                  </button>
                </div>
                <div className="bw-statsGrid">
                  <StatCard value={`${WORK_ITEMS.length}+`} label="Projects Built" />
                  <StatCard value="React + Vite" label="Core Build Stack" />
                  <StatCard value="Mobile-First" label="Default Approach" />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="bw-heroVisual">
                  <div className="bw-heroVisualPanel">
                    <img src={BWLogo} alt="Blackburn Works logo" className="bw-heroLogo" />
                    <div className="bw-orbit bw-orbitOne" />
                    <div className="bw-orbit bw-orbitTwo" />
                    <div className="bw-heroCard bw-icon-node bw-heroCardOne">
                      <Code size={20} color="#d4af37"/>
                    </div>
                    <div className="bw-heroCard bw-icon-node bw-heroCardTwo">
                      <Palette size={20} color="#d4af37"/>
                    </div>
                    <div className="bw-heroCard bw-icon-node bw-heroCardThree">
                      <Terminal size={20} color="#d4af37"/>
                    </div>
                    <div className="bw-heroCard bw-icon-node bw-heroCardFour">
                      <LayoutGrid size={20} color="#d4af37"/>
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
                <div className="bw-sectionLabel">How Blackburn Works Builds</div>
                <h2 className="bw-sectionTitle">
                  Built with clarity, speed, and a product-first mindset.
                </h2>
                <p className="bw-sectionText">
                  Blackburn Works creates modern digital experiences that feel polished,
                  usable, and ready to grow. From websites and UI systems to workflow
                  automation, the goal is simple: build work that looks sharp and works
                  hard.
                </p>

                <button
                  className="bw-btn bw-btnPrimary"
                  type="button"
                  onClick={() => scrollToId("portfolio")}
                >
                  See What We Build
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
                    <h3>Automation Mindset</h3>
                    <p>
                      Practical solutions that reduce repetitive work and improve
                      delivery.
                    </p>
                  </div>

                  <div className="bw-aboutFeatureCard">
                    <div className="bw-aboutFeatureIcon">
                      <LayoutGrid size={20} />
                    </div>
                    <h3>Built to Scale</h3>
                    <p>
                      Flexible foundations that can grow from a landing page into
                      something bigger.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bw-section bw-sectionAlt">
          <div className="container bw-shell">
            <SectionHeader
              title="Services"
              text="Clear, modern website packages built for businesses that want a polished digital presence without unnecessary friction. Each option is designed to be easy to understand, professional to launch, and aligned with the next stage of your business."
            />

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

            <div className="bw-serviceSplit">
              <div className="bw-subsectionIntro">
                <div className="bw-sectionLabel">After Launch</div>
                <h3 className="bw-subsectionTitle">
                  Ongoing Support &amp; Growth
                </h3>
                <p className="bw-subsectionText">
                  Support doesn&apos;t stop at launch. Blackburn Works can help keep
                  your site current, improve workflows, and extend the build with
                  thoughtful product-minded enhancements over time.
                </p>
              </div>

              <div className="row g-4">
                {CAPABILITY_SERVICES.map((service) => (
                  <div key={service.title} className="col-lg-4">
                    <AdditionalServiceCard service={service} />
                  </div>
                ))}
              </div>
            </div>

            <div className="bw-addonsPanel">
              <div className="bw-addonsHeader">
                <div>
                  <div className="bw-sectionLabel">Enhancements</div>
                  <h3 className="bw-subsectionTitle">
                    Automation / Add-Ons
                  </h3>
                  <p className="bw-subsectionText bw-subsectionTextTight">
                    Optional improvements that make the website more capable,
                    operationally useful, and easier to work with behind the scenes.
                  </p>
                </div>
                <button
                  className="bw-btn bw-btnSecondary"
                  type="button"
                  onClick={() => scrollToId("contact")}
                >
                  Talk Through an Add-On
                </button>
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

            <div className="bw-servicesCta bw-servicesCtaWide">
              <div>
                <h3>Ready to start the right website build?</h3>
                <p>
                  Start with the package that fits best, or request a quote if the
                  project needs a more tailored scope. The process stays clear,
                  focused, and easy to move forward with.
                </p>
              </div>
              <div className="bw-servicesCtaActions">
                <button
                  className="bw-btn bw-btnPrimary"
                  type="button"
                  onClick={() => scrollToId("contact")}
                >
                  Start the Conversation
                </button>
                <button
                  className="bw-btn bw-btnSecondary"
                  type="button"
                  onClick={() => scrollToId("contact")}
                >
                  Get a Clear Quote
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bw-section bw-trustSection">
          <div className="container bw-shell">
            <div className="bw-trustGrid">
              <div className="bw-trustIntro">
                <div className="bw-sectionLabel">Why Blackburn Works</div>
                <h2 className="bw-sectionTitle">
                  A focused partner for clean launches and confident next steps.
                </h2>
                <p className="bw-sectionText">
                  The goal is not to overcomplicate the build. It is to give you
                  a premium web presence with clear scope, practical decisions,
                  and a finished product that helps people take your business
                  seriously.
                </p>
              </div>

              <div className="bw-trustCards">
                <TrustCard
                  title="Clarity before code"
                  text="Scope, content, and priorities are shaped up front so the build moves with fewer surprises."
                />
                <TrustCard
                  title="Launch-ready execution"
                  text="Responsive layouts, polished UI, deployment, and core SEO details are handled with care."
                />
                <TrustCard
                  title="Built for momentum"
                  text="Your site is structured so future pages, automations, and feature upgrades can be added cleanly."
                />
              </div>
            </div>

            <div className="bw-processStrip">
              <ProcessStep number="01" title="Share the goal" text="Send the essentials: what you need, who it is for, and what success should look like." />
              <ProcessStep number="02" title="Confirm the scope" text="You get a clear direction, package fit, timeline, and next-step recommendation." />
              <ProcessStep number="03" title="Launch with polish" text="The build moves through design, development, review, and deployment with launch readiness in mind." />
            </div>
          </div>
        </section>

        <section id="portfolio" className="bw-section">
          <div className="container bw-shell">
            <SectionHeader
              title="Projects"
              text="Selected builds that show how Blackburn Works turns product ideas, brand presence, and operational needs into polished digital experiences."
            />

            <div className="bw-filterRow">
              <span className="bw-filterPill bw-filterPillActive">All Projects</span>
              <span className="bw-filterPill">Web</span>
              <span className="bw-filterPill">Product</span>
              <span className="bw-filterPill">Automation</span>
            </div>

            <div className="row g-4">
              {WORK_ITEMS.map((item) => (
                <ProjectCard key={item.slug} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* <section id="testimonials" className="bw-section bw-sectionAlt">
          <div className="container bw-shell">
            <SectionHeader
              title="Testimonials"
              text="Reserved for future client testimonials."
            />
          </div>
        </section> */}

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
              text="Have a project in mind, or just need help choosing the right direction? Send a few details and Blackburn Works will respond within 1-2 business days with a clear next step."
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
                      No pressure and no bloated discovery process. Share the
                      basics and Blackburn Works will help determine whether a
                      starter site, business site, custom build, or add-on is
                      the right fit.
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
                      A good launch starts with the right scope. You can ask a
                      question, describe a rough idea, or request pricing
                      guidance before committing to anything.
                    </p>
                  </div>

                  <div className="bw-methodGrid">
                    <InfoCard
                      title="Best Starting Point"
                      value="Website packages"
                      note="Starter, business, or custom"
                      icon={<IconSpark />}
                    />
                    <InfoCard
                      title="Response Timing"
                      value="1-2 business days"
                      note="Clear reply with next steps"
                      icon={<IconCode />}
                    />
                    <InfoCard
                      title="Working Style"
                      value="Scoped and practical"
                      note="Built around launch readiness"
                      icon={<IconClock />}
                    />
                  </div>

                  <div className="bw-contactMeta">
                    <div className="bw-metaStat">
                      <div className="bw-metaValue">Remote</div>
                      <div className="bw-metaLabel">Serving clients wherever they are</div>
                    </div>
                    <div className="bw-metaStat">
                      <div className="bw-metaValue">Simple Start</div>
                      <div className="bw-metaLabel">A few project details are enough to begin</div>
                    </div>
                    <div className="bw-metaMap">Launch-focused websites, UI, and automation support</div>
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
                <img src={BWIcon} alt="Blackburn Works" className="bw-footerIcon" />
                <span>Blackburn Works LLC</span>
              </div>
              <p className="bw-footerCopy">
                Premium modern websites, product-minded interfaces, and practical
                automations built for clarity, momentum, and launch readiness.
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
                <span>Web Design</span>
                <span>UI/UX</span>
                <span>Automation</span>
              </div>
            </div>
          </div>

          <div className="bw-footerBottom">© 2025 - {year} Blackburn Works LLC</div>
        </div>
      </footer>
    </div>
  );
}

function WorkPage({ item }) {
  return (
    <div className="bw-site">
      <header className="bw-header sticky-top">
        <div className="container bw-shell">
          <div className="bw-headerInner">
            <Link to="/" className="bw-brandWrap bw-brandLink">
              <img src={BWIcon} alt="Blackburn Works" className="bw-brandIcon" />
              <span className="bw-brandText">Blackburn Works LLC</span>
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
              </div>

              <div className="col-lg-5">
                <div className="bw-projectPreview">
                  <ProjectThumb item={item} detail />
                  <div className="bw-projectPreviewBody">
                    <h3>Project overview</h3>
                    <p>{item.shortDesc || item.summary}</p>
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
                    Start a Similar Build
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

function StatCard({ value, label }) {
  return (
    <div className="bw-statCard">
      <div className="bw-statValue">{value}</div>
      <div className="bw-statLabel">{label}</div>
    </div>
  );
}

function TrustCard({ title, text }) {
  return (
    <div className="bw-trustCard">
      <div className="bw-trustMark">
        <Check size={18} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
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

      <button
        className={`bw-btn ${tier.featured ? "bw-btnPrimary" : "bw-btnSecondary"} bw-tierButton`}
        type="button"
        onClick={() => scrollToId("contact")}
      >
        {tier.cta}
        <ArrowRight size={16} />
      </button>
    </div>
  );
}

function AdditionalServiceCard({ service }) {
  return (
    <div className="bw-serviceCard bw-serviceCardExpanded">
      <div className="bw-serviceIcon">{CAPABILITY_SERVICE_ICONS[service.icon]}</div>
      <h3>{service.title}</h3>
      <p>{service.desc}</p>
      <ul className="bw-featureList bw-featureListCompact">
        {service.features.map((feature) => (
          <li key={feature}>
            <Check size={16} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
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
        <img src={item.image} alt={item.title} className="bw-projectImage" />
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
  return (
    <form
      className="row g-3"
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const name = String(fd.get("name") || "");
        const email = String(fd.get("email") || "");
        const subjectLine = String(fd.get("subject") || "");
        const message = String(fd.get("message") || "");

        const to = "youremail@example.com";
        const subject = encodeURIComponent(
          `Blackburn Works Inquiry - ${subjectLine || name || "New Lead"}`
        );
        const body = encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\nProject type / subject: ${subjectLine}\n\nMessage:\n${message}`
        );
        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
      }}
    >
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
      <div className="col-12">
        <input
          name="subject"
          className="form-control bw-input"
          placeholder="Website, redesign, automation, or not sure yet"
        />
      </div>
      <div className="col-12">
        <textarea
          name="message"
          rows="5"
          className="form-control bw-input"
          placeholder="Tell us what you want to build, what you already have, and any timeline you have in mind."
          required
        />
      </div>
      <div className="col-12">
        <button className="bw-btn bw-btnPrimary" type="submit">
          Send Project Details
        </button>
        <p className="bw-responseNote">Expect a reply within 1-2 business days.</p>
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

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 6v6l4 2M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
    </svg>
  );
}
