import BWIcon from "./assets/BWIconTransp.png";
import BWLogo from "./assets/BWLogoTransP.png"

const NAV = [
  { id: "platform", label: "Platform" },
  { id: "features", label: "Features" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function App() {
  return (
    <div className="bw-tech">
      {/* NAV */}
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
            <button className="btn bw-btnGold" type="button" onClick={() => scrollToId("contact")}>
              Get in touch
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header id="top" className="bw-heroTech">
        <img className="bw-heroWatermark" src={BWLogo} alt="" aria-hidden="true" />
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
                Blackburn Works LLC ships responsive web experiences, product-style landing pages,
                and automation tooling—clean UX, clear scope, and fast iteration.
              </p>

              <div className="d-flex flex-wrap gap-2">
                <button className="btn bw-btnGold btn-lg" type="button" onClick={() => scrollToId("contact")}>
                  Start a project
                </button>
                <button className="btn bw-btnGhost btn-lg" type="button" onClick={() => scrollToId("work")}>
                  See examples
                </button>
              </div>

              <div className="bw-microProof mt-4">
                <MicroStat value="7–14 days" label="Typical delivery" />
                <MicroStat value="React + Vite" label="Modern stack" />
                <MicroStat value="Mobile-first" label="Default standard" />
              </div>
            </div>
          </div>

          {/* LOGO STRIP */}
          <div className="bw-logoStrip mt-5">
            <div className="bw-logoPill mb-3">Platforms</div>
            <div className="bw-logos">
              <LogoChip text="Coaches Lounge" />
              <LogoChip text="The Academy" />
              <LogoChip text="The Daily Nugget" />
            </div>
          </div>
        </div>
      </header>

      {/* PLATFORM (image + text) */}
      <section id="platform" className="bw-sectionTech">
        <div className="container bw-container py-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <div className="bw-shot">
                <div className="bw-shotTop">
                  <span className="bw-shotDot" />
                  <span className="bw-shotDot" />
                  <span className="bw-shotDot" />
                  <span className="bw-shotTitle">Product / Website Preview</span>
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
              <h2 className="bw-h2Tech mb-2">A platform feel, even for “just a landing page.”</h2>
              <p className="bw-subTech mb-4">
                We design your site like a product—clear hierarchy, modern components, and
                a structure you can expand into a full platform over time.
              </p>

              <div className="row g-3">
                <BulletCard title="Design system" desc="Consistent spacing, type scale, and components." />
                <BulletCard title="Performance" desc="Fast loads, clean markup, production-ready builds." />
                <BulletCard title="Scalable foundation" desc="Start simple. Add features without rework." />
                <BulletCard title="Deployment-ready" desc="Vercel-friendly, modern build pipeline." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES (icons) */}
      <section id="features" className="bw-sectionTech bw-altTech">
        <div className="container bw-container py-5">
          <div className="bw-sectionHeadTech mb-4">
            <h2 className="bw-h2Tech mb-2">Features</h2>
            <p className="bw-subTech mb-0">
              This is where it stops feeling like a resume and starts feeling like a product company.
            </p>
          </div>

          <div className="row g-3">
            <Feature icon={<IconBolt />} title="Fast iteration" desc="Short cycles and clear checkpoints." />
            <Feature icon={<IconShield />} title="Corporate polish" desc="Clean UI and trustworthy layout." />
            <Feature icon={<IconDevice />} title="Responsive by default" desc="Looks premium on mobile." />
            <Feature icon={<IconCode />} title="Maintainable code" desc="Structured components and styles." />
            <Feature icon={<IconRocket />} title="Launch-ready" desc="Deploy + test + handoff." />
            <Feature icon={<IconFlow />} title="Automation options" desc="Workflows & tooling when needed." />
          </div>
        </div>
      </section>

      {/* WORK (with thumbnails) */}
      <section id="work" className="bw-sectionTech">
        <div className="container bw-container py-5">
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4">
            <div>
              <h2 className="bw-h2Tech mb-2">Selected work</h2>
              <p className="bw-subTech mb-0">Thumbnail-first. Minimal copy. Feels like a company.</p>
            </div>
            <button className="btn bw-btnGhost" type="button" onClick={() => scrollToId("contact")}>
              Request a quote
            </button>
          </div>

          <div className="row g-3">
            <CaseStudy
              title="The Daily Nugget"
              desc="Content experience with modern UI."
              tags={["React", "Mobile", "Content"]}
            />
            <CaseStudy
              title="Coaches Lounge MVP"
              desc="MVP build with scalable direction."
              tags={["React", "UI/UX", "MVP"]}
            />
            <CaseStudy
              title="Automation Tools"
              desc="Workflow tools that reduce repetitive work."
              tags={["Automation", "Ops", "Efficiency"]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bw-ctaTech">
        <div className="container bw-container py-5">
          <div className="bw-ctaBoxTech p-4 p-lg-5">
            <div className="row align-items-center g-4">
              <div className="col-lg-8">
                <h3 className="bw-ctaTitle mb-2">Ready to build something that looks like a real tech brand?</h3>
                <p className="bw-subTech mb-0">
                  Send the idea + timeline. You’ll get a clean plan and next steps.
                </p>
              </div>
              <div className="col-lg-4 d-flex justify-content-lg-end">
                <button className="btn bw-btnGold btn-lg w-100 w-lg-auto" type="button" onClick={() => scrollToId("contact")}>
                  Contact Blackburn Works
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bw-sectionTech bw-altTech">
        <div className="container bw-container py-5">
          <div className="bw-sectionHeadTech mb-4">
            <h2 className="bw-h2Tech mb-2">Contact</h2>
            <p className="bw-subTech mb-0">
              For now this opens an email draft. We can replace with a real form later.
            </p>
          </div>

          <div className="row g-3">
            <div className="col-lg-7">
              <div className="bw-cardTech p-4">
                <ContactForm />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="bw-cardTech p-4 h-100">
                <div className="bw-miniTitle mb-3">Business info</div>
                <InfoRow label="Email" value="youremail@example.com" />
                <InfoRow label="Phone" value="(555) 555-5555" />
                <InfoRow label="Website" value="blackburn.works" />
                <div className="bw-dividerTech my-4" />
                <div className="bw-mapMock">
                  <div className="bw-mapPin" />
                  <div className="bw-mapText">Map / location placeholder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bw-footerTech">
        <div className="container bw-container py-4 d-flex flex-column flex-md-row justify-content-between gap-2">
          <div className="bw-footTech">
            © {new Date().getFullYear()} <strong>Blackburn Works LLC</strong>
          </div>
          <div className="d-flex flex-wrap gap-3">
            {NAV.map((n) => (
              <button
                key={n.id}
                className="btn btn-link bw-footerLinkTech text-decoration-none p-0"
                type="button"
                onClick={() => scrollToId(n.id)}
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- UI blocks ---------- */

function ProductMock() {
  return (
    <div className="bw-productMock">
      <div className="bw-mockTop">
        <div className="bw-mockDots">
          <span />
          <span />
          <span />
        </div>
        <div className="bw-mockTitle">Dashboard Preview</div>
        <div className="bw-mockRightPill">Live</div>
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

function LogoChip({ text }) {
  return <div className="bw-logoTile">{text}</div>;
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

function CaseStudy({ title, desc, tags }) {
  return (
    <div className="col-lg-4">
      <div className="bw-case p-3 h-100">
        <div className="bw-thumb" />
        <div className="p-3">
          <div className="bw-caseTitle">{title}</div>
          <div className="bw-caseDesc mt-1">{desc}</div>
          <div className="d-flex flex-wrap gap-2 mt-3">
            {tags.map((t) => (
              <span key={t} className="bw-tagTech">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
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

        // CHANGE THIS:
        const to = "youremail@example.com";

        const subject = encodeURIComponent(`Blackburn Works Inquiry — ${name || "New Lead"}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
      }}
    >
      <div className="col-md-6">
        <label className="form-label text-white-75 fw-semibold">Name</label>
        <input name="name" className="form-control bw-inputTech" placeholder="Your name" required />
      </div>

      <div className="col-md-6">
        <label className="form-label text-white-75 fw-semibold">Email</label>
        <input
          name="email"
          type="email"
          className="form-control bw-inputTech"
          placeholder="you@email.com"
          required
        />
      </div>

      <div className="col-12">
        <label className="form-label text-white-75 fw-semibold">Message</label>
        <textarea
          name="message"
          rows="5"
          className="form-control bw-inputTech"
          placeholder="What do you want built?"
          required
        />
      </div>

      <div className="col-12 d-flex gap-2 flex-wrap">
        <button type="submit" className="btn bw-btnGold btn-lg">
          Send
        </button>
        <span className="text-white-50 align-self-center">Opens your email client.</span>
      </div>
    </form>
  );
}

/* ---------- Icons (inline SVG) ---------- */

function IconBolt() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M13 2 3 14h7l-1 8 12-14h-7l-1-6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  );
}
function IconShield() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 2 20 6v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  );
}
function IconDevice() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 6h16v10H4V6Z" stroke="currentColor" strokeWidth="2" />
      <path d="M8 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
function IconCode() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M9 18 3 12l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconRocket() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M5 14c3-7 9-9 14-9 0 5-2 11-9 14l-5-5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M10 19l-2 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 14c0-2 1-4 3-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
function IconFlow() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M7 7h10v4H7V7Z" stroke="currentColor" strokeWidth="2" />
      <path d="M7 13h10v4H7v-4Z" stroke="currentColor" strokeWidth="2" />
      <path d="M12 11v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}