import { Link, Routes, Route } from "react-router-dom";
import BWIcon from "./assets/BWIconTransp.png";
import { WORK_ITEMS } from "./data/workItems";

const NAV = [
  { id: "platform", label: "Platform" },
  { id: "services", label: "Services" },
  { id: "features", label: "Features" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

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
    <div className="bw-tech">
      <nav className="navbar navbar-expand-lg bw-nav sticky-top">
        <div className="container bw-container py-2">
          <button
            className="navbar-brand d-flex align-items-center gap-2 bg-transparent border-0 p-0"
            type="button"
            onClick={() => scrollToId("top")}
          >
            <img src={BWIcon} alt="Blackburn Works" width="34" height="34" />
            <span className="bw-brand">Blackburn Works</span>
          </button>

          <div className="ms-auto d-none d-lg-flex align-items-center gap-3">
            {NAV.map((n) => (
              <button
                key={n.id}
                className="btn btn-link bw-navlink text-decoration-none p-0"
                type="button"
                onClick={() => scrollToId(n.id)}
              >
                {n.label}
              </button>
            ))}
            <button
              className="btn bw-btnGold"
              type="button"
              onClick={() => scrollToId("contact")}
            >
              Get in touch
            </button>
          </div>
        </div>
      </nav>

      <header id="top" className="bw-heroTech">
        <img
          src={BWIcon}
          alt=""
          className="bw-heroWatermark"
          aria-hidden="true"
        />

        <div className="container bw-container py-5 py-lg-6">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="bw-kicker mb-3">
                <span className="bw-dot" />
                <span>PRODUCT • WEB • AUTOMATION</span>
              </div>

              <h1 className="bw-h1Tech mb-3 lh-sm">
                Build digital products that feel like real platforms{" "}
                <span className="bw-gold">not just pages</span>!
              </h1>

              <p className="bw-leadTech mb-4">
                Blackburn Works LLC ships responsive web experiences,
                product-style landing pages, and automation tooling—clean UX,
                clear scope, and fast iteration.
              </p>

              <div className="d-flex flex-wrap gap-2">
                <button
                  className="btn bw-btnGold btn-lg"
                  type="button"
                  onClick={() => scrollToId("contact")}
                >
                  Start a project
                </button>
                <button
                  className="btn bw-btnGhost btn-lg"
                  type="button"
                  onClick={() => scrollToId("work")}
                >
                  See examples
                </button>
              </div>

              <div className="bw-microProof mt-4">
                <MicroStat value="7–14 days" label="Typical delivery" />
                <MicroStat value="React + Vite" label="Modern stack" />
                <MicroStat value="Mobile-first" label="Default standard" />
              </div>
            </div>

            <div className="col-lg-6 d-none d-lg-flex">
              <div className="bw-heroVisual">
                <img src={BWIcon} alt="Blackburn Works" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="bw-logoStrip mt-5">
            <div className="bw-logoPill mb-3">Selected Work</div>
            <div className="bw-logos">
              <LogoChip
                text="Coaches Lounge"
                to="/work/coaches-lounge"
              />
              <LogoChip
                text="The Academy"
                to="/work/the-academy"
              />
              <LogoChip
                text="The Daily Nugget"
                to="/work/the-daily-nugget"
              />
            </div>
          </div>
        </div>
      </header>

      <section id="platform" className="bw-sectionTech">
        <div className="container bw-container py-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <div className="bw-shot">
                <div className="bw-shotTop">
                  <span className="bw-shotDot" />
                  <span className="bw-shotDot" />
                  <span className="bw-shotDot" />
                  <span className="bw-shotTitle">Platform Preview</span>
                </div>
                <div className="bw-shotBody">
                  <div className="bw-shotLeft" />
                  <div className="bw-shotMain">
                    <div className="bw-shotCard" />
                    <div className="bw-shotRow">
                      <div className="bw-shotMini" />
                      <div className="bw-shotMini" />
                      <div className="bw-shotMini" />
                    </div>
                    <div className="bw-shotChart" />
                  </div>
                </div>
                <div className="bw-shotHint">Drop a real screenshot here later</div>
              </div>
            </div>

            <div className="col-lg-6">
              <h2 className="bw-h2Tech mb-2">
                A platform feel, even for “just a landing page.”
              </h2>
              <p className="bw-subTech mb-4">
                We design your site like a product—clear hierarchy, modern
                components, and a structure you can expand into a full platform
                over time.
              </p>

              <div className="row g-3">
                <BulletCard
                  title="Design system"
                  desc="Consistent spacing, type scale, and components."
                />
                <BulletCard
                  title="Performance"
                  desc="Fast loads, clean markup, production-ready builds."
                />
                <BulletCard
                  title="Scalable foundation"
                  desc="Start simple. Add features without rework."
                />
                <BulletCard
                  title="Deployment-ready"
                  desc="Vercel-friendly, modern build pipeline."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bw-sectionTech bw-altTech">
        <div className="container bw-container py-5">
          <div className="bw-sectionHeadTech mb-4">
            <h2 className="bw-h2Tech mb-2">Features</h2>
            <p className="bw-subTech mb-0">
              This is where it stops feeling like a resume and starts feeling
              like a product company.
            </p>
          </div>

          <div className="row g-3">
            <Feature
              icon={<IconBolt />}
              title="Fast iteration"
              desc="Short cycles and clear checkpoints."
            />
            <Feature
              icon={<IconShield />}
              title="Corporate polish"
              desc="Clean UI and trustworthy layout."
            />
            <Feature
              icon={<IconDevice />}
              title="Responsive by default"
              desc="Looks premium on mobile."
            />
            <Feature
              icon={<IconCode />}
              title="Maintainable code"
              desc="Structured components and styles."
            />
            <Feature
              icon={<IconRocket />}
              title="Launch-ready"
              desc="Deploy + test + handoff."
            />
            <Feature
              icon={<IconFlow />}
              title="Automation options"
              desc="Workflows & tooling when needed."
            />
          </div>
        </div>
      </section>

      <section id="work" className="bw-sectionTech">
        <div className="container bw-container py-5">
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4">
            <div>
              <h2 className="bw-h2Tech mb-2">Selected work</h2>
              <p className="bw-subTech mb-0">
                Real products. Real systems. Built for performance and scale.
              </p>
            </div>
            <button
              className="btn bw-btnGhost"
              type="button"
              onClick={() => scrollToId("contact")}
            >
              Request a quote
            </button>
          </div>

          <div className="row g-3">
            {WORK_ITEMS.map((item) => (
              <CaseStudy
                key={item.slug}
                title={item.title}
                desc={item.desc}
                tags={item.tags}
                to={`/work/${item.slug}`}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bw-ctaTech">
        <div className="container bw-container py-5">
          <div className="bw-ctaBoxTech p-4 p-lg-5">
            <div className="row align-items-center g-4">
              <div className="col-lg-8">
                <h3 className="bw-ctaTitle mb-2">
                  Ready to build something that looks like a real tech brand?
                </h3>
                <p className="bw-subTech mb-0">
                  Send the idea + timeline. You’ll get a clean plan and next
                  steps.
                </p>
              </div>
              <div className="col-lg-4 d-flex justify-content-lg-end">
                <button
                  className="btn bw-btnGold btn-lg w-100 w-lg-auto"
                  type="button"
                  onClick={() => scrollToId("contact")}
                >
                  Contact Blackburn Works
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bw-sectionTech bw-altTech">
        <div className="container bw-container py-5">
          <div className="bw-sectionHeadTech mb-4">
            <h2 className="bw-h2Tech mb-2">Contact</h2>
            <p className="bw-subTech mb-0">
              For now this opens an email draft. We can replace it with a real
              form later.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-7">
              <div className="bw-cardTech p-4">
                <ContactForm />
              </div>
            </div>

            <div className="col-lg-5">
              <div className="bw-cardTech p-4 h-100">
                <h3 className="bw-miniTitle mb-3">Blackburn Works LLC</h3>
                <InfoRow label="Services" value="Web, UI, automation" />
                <InfoRow label="Stack" value="React, Vite, Bootstrap" />
                <InfoRow label="Delivery" value="Fast, scoped, modern" />

                <div className="bw-dividerTech my-4" />

                <div className="bw-mapMock">
                  <div className="bw-mapPin" />
                  <div className="bw-mapText">Serving clients remotely</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bw-footerTech">
        <div className="container bw-container py-4 d-flex flex-column flex-md-row justify-content-between gap-3">
          <div className="bw-footTech">
            © 2025 - {year} Blackburn Works LLC
          </div>
          <div className="d-flex gap-3">
            <button
              className="btn btn-link bw-footerLinkTech p-0 text-decoration-none"
              type="button"
              onClick={() => scrollToId("top")}
            >
              Back to top
            </button>
            <button
              className="btn btn-link bw-footerLinkTech p-0 text-decoration-none"
              type="button"
              onClick={() => scrollToId("contact")}
            >
              Contact
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function WorkPage({ item }) {
  return (
    <div className="bw-tech">
      <nav className="navbar navbar-expand-lg bw-nav sticky-top">
        <div className="container bw-container py-2">
          <Link
            to="/"
            className="navbar-brand d-flex align-items-center gap-2 text-decoration-none"
          >
            <img src={BWIcon} alt="Blackburn Works" width="34" height="34" />
            <span className="bw-brand">Blackburn Works</span>
          </Link>

          <div className="ms-auto d-flex align-items-center gap-3">
            <Link to="/" className="btn bw-btnGhost">
              Back to home
            </Link>
            <a href="#contact" className="btn bw-btnGold">
              Start a project
            </a>
          </div>
        </div>
      </nav>

      <section className="bw-sectionTech">
        <div className="container bw-container py-5">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7">
              <div className="bw-kicker mb-3">
                <span className="bw-dot" />
                <span>SELECTED WORK</span>
              </div>

              <h1 className="bw-h1Tech mb-3">{item.title}</h1>
              <p className="bw-leadTech mb-4">{item.desc}</p>

              <div className="d-flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag) => (
                  <span key={tag} className="bw-tagTech">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="d-flex flex-wrap gap-2">
                <Link to="/" className="btn bw-btnGhost btn-lg">
                  Back to home
                </Link>
                <a
                  href={item.liveUrl}
                  className="btn bw-btnGold btn-lg"
                  target="_blank"
                  rel="noreferrer"
                >
                  View live site
                </a>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="bw-case p-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="bw-thumb"
                  style={{ 
                    height: "260px", 
                    objectFit: "contain",
                    width: "100%",
                     
                  }}
                />
                <div className="p-3">
                  <div className="bw-caseTitle">Project overview</div>
                  <div className="bw-caseDesc mt-2">{item.shortDesc}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-1">
            <div className="col-lg-6">
              <div className="bw-cardTech p-4 h-100">
                <h3 className="bw-miniTitle mb-3">What it is</h3>
                <p className="bw-subTech mb-0">{item.summary}</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="bw-cardTech p-4 h-100">
                <h3 className="bw-miniTitle mb-3">Impact</h3>
                <p className="bw-subTech mb-0">{item.outcome}</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="bw-cardTech p-4 h-100">
                <h3 className="bw-miniTitle mb-3">Key Features</h3>
                <div className="d-flex flex-wrap gap-2">
                  {item.keyFeatures.map((feature, index) => (
                    <span key={index} className="bw-tagTech">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="bw-cardTech p-4 h-100">
                <h3 className="bw-miniTitle mb-3">Let's build something</h3>
                <p className="bw-subTech mb-3">
                  Want something with a similar level of polish, structure, and
                  scalability?
                </p>
                <Link to="/" className="btn bw-btnGold">
                  Request a project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductMock() {
  return (
    <div className="bw-productMock">
      <div className="bw-mockTop">
        <div className="bw-mockDots">
          <span />
          <span />
          <span />
        </div>
        <div className="bw-mockTitle">Blackburn Works Preview</div>
        <div className="bw-mockRightPill">Live Build</div>
      </div>

      <div className="bw-mockBody">
        <div className="bw-mockSide">
          <div className="bw-mockSideItem bw-active" />
          <div className="bw-mockSideItem" />
          <div className="bw-mockSideItem" />
          <div className="bw-mockSideItem" />
        </div>

        <div className="bw-mockMain">
          <div className="bw-mockGrid">
            <div className="bw-mockTile" />
            <div className="bw-mockTile" />
          </div>
          <div className="bw-mockWide" />
          <div className="bw-mockRow">
            <div className="bw-mockSmall" />
            <div className="bw-mockSmall" />
            <div className="bw-mockSmall" />
          </div>
        </div>
      </div>

      <div className="bw-mockHint">Replace this with a real screenshot later.</div>
    </div>
  );
}

function LogoChip({ text, to }) {
  return (
    <Link to={to} className="bw-logoTile text-decoration-none">
      {text}
    </Link>
  );
}

function MicroStat({ value, label }) {
  return (
    <div className="bw-micro">
      <div className="bw-microVal">{value}</div>
      <div className="bw-microLab">{label}</div>
    </div>
  );
}

function BulletCard({ title, desc }) {
  return (
    <div className="col-md-6">
      <div className="bw-bulletCard p-3">
        <div className="bw-bulletTitle">{title}</div>
        <div className="bw-bulletDesc">{desc}</div>
      </div>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="bw-feature p-4 h-100">
        <div className="bw-featureIcon">{icon}</div>
        <div className="bw-featureTitle mt-3">{title}</div>
        <div className="bw-featureDesc mt-2">{desc}</div>
      </div>
    </div>
  );
}

function CaseStudy({ title, desc, tags, to, image }) {
  return (
    <div className="col-md-4">
      <Link to={to} className="bw-case h-100 d-block text-decoration-none">
        
        <div className="bw-thumb">
          {image && (
            <img src={image} alt={title} className="bw-thumbImg" />
          )}
        </div>

        <div className="p-3">
          <div className="bw-caseTitle">{title}</div>
          <div className="bw-caseDesc">{desc}</div>

          <div className="d-flex flex-wrap gap-2 mt-2">
            {tags.map((tag, i) => (
              <span key={i} className="bw-tagTech">
                {tag}
              </span>
            ))}
          </div>
        </div>

      </Link>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="d-flex justify-content-between gap-3 py-2 border-bottom border-white border-opacity-10">
      <div className="text-white-50">{label}</div>
      <div className="text-white fw-semibold text-end">{value}</div>
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
        const message = String(fd.get("message") || "");

        const to = "youremail@example.com";
        const subject = encodeURIComponent(
          `Blackburn Works Inquiry — ${name || "New Lead"}`
        );
        const body = encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );
        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
      }}
    >
      <div className="col-md-6">
        <input
          name="name"
          className="form-control bw-inputTech"
          placeholder="Your name"
          required
        />
      </div>
      <div className="col-md-6">
        <input
          type="email"
          name="email"
          className="form-control bw-inputTech"
          placeholder="Email"
          required
        />
      </div>
      <div className="col-12">
        <textarea
          name="message"
          rows="6"
          className="form-control bw-inputTech"
          placeholder="Tell me what you want to build"
          required
        />
      </div>
      <div className="col-12">
        <button className="btn bw-btnGold" type="submit">
          Send inquiry
        </button>
      </div>
    </form>
  );
}

function IconBolt() {
  return <span aria-hidden="true">⚡</span>;
}

function IconShield() {
  return <span aria-hidden="true">🛡️</span>;
}

function IconDevice() {
  return <span aria-hidden="true">📱</span>;
}

function IconCode() {
  return <span aria-hidden="true">{"</>"}</span>;
}

function IconRocket() {
  return <span aria-hidden="true">🚀</span>;
}

function IconFlow() {
  return <span aria-hidden="true">🔁</span>;
}