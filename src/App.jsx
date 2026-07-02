import { useState, useEffect, useRef } from "react";
import profile from "./assets/sanketimg.jpeg";
import ReactGA from "react-ga4";

ReactGA.initialize("G-0K98CFT5ZZ");
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});

// ── GA4 Event Helper ─────────────────────────────────────────────────────────
const track = (eventName, params = {}) => {
  ReactGA.event(eventName, {
    ...params,
    timestamp: new Date().toISOString(),
  });
};

const MAIL = "thalkarsanket1428@gmail.com";
const WA_LINK = `https://wa.me/917057528416?text=Hello%20Sanket%2C%20I%20want%20to%20discuss%20a%20project%20with%20you.`;
const CONNECT_MAIL = `mailto:${MAIL}?subject=Project%20Inquiry%20%E2%80%94%20thesanketthalkar.in&body=Hi%20Sanket%2C%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.%0D%0A%0D%0AProject%20details%3A%0D%0A`;
const RESUME_LINK =
  "https://drive.google.com/file/d/1jRAv2IiYpY88XoZyDjv2i7amwW4S72v6/view?usp=sharing";
const DOMAIN = "thesanketthalkar.in";

// ── Content ──────────────────────────────────────────────────────────────────
const skillGroups = [
  {
    label: "Languages",
    items: [
      { name: "Java", icon: "fa-brands fa-java" },
      { name: "JavaScript", icon: "fa-brands fa-js" },
    ],
  },
  {
    label: "Backend & Frameworks",
    items: [
      { name: "Spring Boot", icon: "fa-solid fa-leaf" },
      { name: "Spring Security", icon: "fa-solid fa-shield-halved" },
      { name: "Hibernate", icon: "fa-solid fa-link" },
      { name: "JDBC", icon: "fa-solid fa-link" },
      { name: "Servlet / JSP", icon: "fa-solid fa-server" },
      { name: "Thymeleaf", icon: "fa-solid fa-leaf" },
      { name: "Struts", icon: "fa-solid fa-sitemap" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", icon: "fa-brands fa-react" },
      { name: "Angular", icon: "fa-brands fa-angular" },
      { name: "PrimeNG", icon: "fa-solid fa-palette" },
    ],
  },
  {
    label: "APIs & Architecture",
    items: [
      { name: "REST API", icon: "fa-solid fa-plug" },
      { name: "Microservices", icon: "fa-solid fa-cubes" },
      { name: "JWT Security", icon: "fa-solid fa-lock" },
    ],
  },
  {
    label: "Data",
    items: [
      { name: "MySQL", icon: "fa-solid fa-database" },
      { name: "Oracle", icon: "fa-solid fa-circle-nodes" },
    ],
  },
  {
    label: "Tooling",
    items: [
      { name: "Postman", icon: "fa-solid fa-envelope-open-text" },
      { name: "GitHub", icon: "fa-brands fa-github" },
      { name: "SVN", icon: "fa-solid fa-box-archive" },
    ],
  },
];

const endpoints = [
  {
    method: "POST",
    path: "/services/business-website",
    title: "Business Website Development",
    desc: "Fast, responsive business websites that load quickly, rank well, and convert visitors into leads.",
  },
  {
    method: "POST",
    path: "/services/full-stack-apps",
    title: "Full Stack Web Application Development",
    desc: "End-to-end Java + Angular/React applications, from schema design to UI deployment.",
  },
  {
    method: "POST",
    path: "/services/spring-backend",
    title: "Spring Boot Backend Development",
    desc: "Production-grade backends with validation, security and test coverage built in.",
  },
  {
    method: "POST",
    path: "/services/rest-api",
    title: "REST API Development",
    desc: "Secure, scalable REST APIs with JWT authentication and clear documentation.",
  },
  {
    method: "POST",
    path: "/services/react-app",
    title: "React Frontend Development",
    desc: "Modern React SPAs with hooks, context and clean component architecture.",
  },
  {
    method: "POST",
    path: "/services/admin-dashboard",
    title: "Admin Dashboard Development",
    desc: "Role-based admin panels with data tables, charts, and real-time reporting.",
  },
  {
    method: "POST",
    path: "/services/billing-invoice",
    title: "Billing & Invoice Software Development",
    desc: "Custom billing systems, GST-compliant invoicing, and automated invoice generation.",
  },
  {
    method: "POST",
    path: "/services/custom-software",
    title: "Custom Business Software Development",
    desc: "Purpose-built software tailored to your workflow — not a one-size-fits-all template.",
  },
  {
    method: "POST",
    path: "/services/angular-ui",
    title: "Angular Frontend Development",
    desc: "Responsive, mobile-first Angular UIs built with PrimeNG and Tailwind CSS.",
  },
  {
    method: "POST",
    path: "/services/erp-inventory",
    title: "ERP & Inventory Management Systems",
    desc: "Multi-shop inventory, stock tracking, and enterprise resource planning modules.",
  },
  {
    method: "POST",
    path: "/services/api-integration",
    title: "API Integration & Third-Party Services",
    desc: "Connecting payment gateways, SMS/email providers, and other external APIs into your app.",
  },
  {
    method: "POST",
    path: "/services/maintenance-support",
    title: "Application Maintenance & Support",
    desc: "Bug fixes, performance tuning, and ongoing support for existing applications.",
  },
];

const releases = [
  {
    version: "v3.1.0",
    status: "Live",
    title: "Billing System",
    tag: "Inventory & GST",
    desc: "Multi-shop billing and inventory management with GST invoice generation and multi-tenant architecture.",
    changes: [
      "Added multi-tenant data isolation per shop",
      "GST-compliant invoice generation",
      "Real-time stock & sales reporting",
    ],
    tech: ["Java", "Spring Boot", "MySQL", "Angular"],
    icon: "🧾",
    demo: "https://billing-system-xz7r.onrender.com/login",
    github: "https://github.com/thalkar123",
    screenshot:
      "https://placehold.co/600x360/F5F6F2/2F5D9E?text=Billing+System",
  },
  {
    version: "v2.0.0",
    status: "Client project",
    title: "ERP Management",
    tag: "Enterprise",
    desc: "Full-featured ERP modules with secure REST APIs, role-based access control, and an optimized backend architecture.",
    changes: [
      "Role-based access control across modules",
      "Secure REST endpoints with JWT",
      "Oracle-backed reporting layer",
    ],
    tech: ["Spring Boot", "Thymeleaf", "Oracle", "JWT"],
    icon: "🏢",
    demo: "#",
    github: "https://github.com/thalkar123",
    screenshot:
      "https://placehold.co/600x360/F5F6F2/1E8A5D?text=ERP+Management",
  },
  {
    version: "v1.4.0",
    status: "In progress",
    title: "Microservices Platform",
    tag: "Scalable Architecture",
    desc: "Scalable Spring Boot microservices with API gateway, service discovery, and inter-service REST communication.",
    changes: [
      "API gateway with centralized routing",
      "Service discovery for horizontal scale",
      "Inter-service REST contracts",
    ],
    tech: ["Microservices", "Spring Boot", "REST API", "GitHub"],
    icon: "🧩",
    demo: "#",
    github: "https://github.com/thalkar123",
    screenshot:
      "https://placehold.co/600x360/F5F6F2/2F5D9E?text=Microservices+Platform",
  },
];

const changelog = [
  {
    version: "v2.0.0",
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    period: "2022 — Present",
    type: "Freelance",
    color: "var(--blue)",
    points: [
      "Designed and delivered 3+ production-level web applications for clients",
      "Built a multi-tenant Billing & Inventory system with GST invoice generation",
      "Developed a full ERP suite with role-based access control using Spring Security & JWT",
      "Architected a scalable microservices platform with API gateway & service discovery",
    ],
  },
  {
    version: "v1.0.0",
    role: "Java Full Stack Developer",
    company: "Enterprise Client Project",
    period: "2021 — 2022",
    type: "Contract",
    color: "var(--green)",
    points: [
      "Developed REST APIs consumed by Angular & React frontends",
      "Integrated Spring Boot with Oracle DB using Hibernate ORM",
      "Implemented Spring Security with JWT for stateless authentication",
      "Worked with CI/CD pipelines using GitHub and SVN version control",
    ],
  },
];

function useAOS() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("aos-animate");
        }),
      { threshold: 0.07 },
    );
    document
      .querySelectorAll("[data-aos]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ── Release Card with Screenshot Modal ──────────────────────────────────────
function ReleaseCard({ r, i }) {
  const [imgModal, setImgModal] = useState(false);

  return (
    <>
      <div
        className="release-card"
        data-aos="fade-up"
        style={{ transitionDelay: `${0.05 + i * 0.06}s` }}
      >
        <div className="release-top">
          <span className="release-version">{r.version}</span>
          <span
            className={`release-status ${
              r.status === "Live"
                ? "live"
                : r.status === "In progress"
                  ? "progress"
                  : "client"
            }`}
          >
            {r.status}
          </span>
        </div>

        <div
          className="release-screenshot"
          onClick={() => setImgModal(true)}
          title="Preview"
        >
          <img src={r.screenshot} alt={`${r.title} screenshot`} />
          <div className="screenshot-overlay">
            <i className="fa-solid fa-expand"></i>
            <span>Preview</span>
          </div>
        </div>

        <div className="release-meta">
          <span className="release-icon">{r.icon}</span>
          <span className="release-tag">{r.tag}</span>
        </div>
        <h3>{r.title}</h3>
        <p className="release-desc">{r.desc}</p>

        <ul className="release-changes">
          {r.changes.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>

        <div className="tech-row">
          {r.tech.map((t) => (
            <span className="tech-badge" key={t}>
              {t}
            </span>
          ))}
        </div>

        <div className="release-btns">
          <a
            href={r.demo}
            className="rbtn primary"
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              track("project_demo_click", {
                project_name: r.title,
                location: "release_card",
              })
            }
          >
            <i
              className="fa-solid fa-arrow-up-right-from-square"
              style={{ fontSize: 11 }}
            ></i>
            Live Demo
          </a>
          <a
            href={r.github}
            target="_blank"
            rel="noreferrer"
            className="rbtn ghost"
            onClick={() =>
              track("github_click", {
                project_name: r.title,
                location: "release_card",
              })
            }
          >
            <i className="fa-brands fa-github" style={{ fontSize: 13 }}></i>
            Source
          </a>
        </div>
      </div>

      {imgModal && (
        <div className="img-modal-backdrop" onClick={() => setImgModal(false)}>
          <div className="img-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setImgModal(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="modal-header">
              <span className="release-version">{r.version}</span>
              <h3 style={{ margin: 0 }}>{r.title}</h3>
            </div>
            <img
              src={r.screenshot}
              alt={`${r.title} full preview`}
              className="modal-img"
            />
            <div className="modal-actions">
              <a
                href={r.demo}
                className="rbtn primary"
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  track("project_demo_click", {
                    project_name: r.title,
                    location: "screenshot_modal",
                  })
                }
              >
                <i
                  className="fa-solid fa-arrow-up-right-from-square"
                  style={{ fontSize: 11 }}
                ></i>
                Live Demo
              </a>
              <a
                href={r.github}
                target="_blank"
                rel="noreferrer"
                className="rbtn ghost"
                onClick={() =>
                  track("github_click", {
                    project_name: r.title,
                    location: "screenshot_modal",
                  })
                }
              >
                <i className="fa-brands fa-github"></i> Source
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const popupRef = useRef(null);
  const toggleRef = useRef(null);

  useAOS();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  useEffect(() => {
    function handleClick(e) {
      if (
        contactOpen &&
        popupRef.current &&
        !popupRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        setContactOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [contactOpen]);

  useEffect(() => {
    const sections = [
      "home",
      "services",
      "skills",
      "projects",
      "experience",
      "resume",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.3 },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(MAIL).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    track("email_copy", { location: "contact_popup" });
  };

  const handleContactOpen = () => {
    const next = !contactOpen;
    setContactOpen(next);
    if (next) track("contact_popup_open", { location: "hero" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --paper: #F5F6F2;
          --paper2: #FFFFFF;
          --ink: #14171C;
          --ink-soft: #454C56;
          --steel: #868D93;
          --line: #DBDDD4;
          --line-soft: #E9EAE3;
          --blue: #2F5D9E;
          --blue-dim: rgba(47,93,158,0.06);
          --blue-mid: rgba(47,93,158,0.13);
          --blue-line: rgba(47,93,158,0.32);
          --green: #1E8A5D;
          --green-dim: rgba(30,138,93,0.07);
          --green-mid: rgba(30,138,93,0.15);
          --green-line: rgba(30,138,93,0.30);
          --display: 'Space Grotesk', system-ui, sans-serif;
          --body: 'IBM Plex Sans', system-ui, sans-serif;
          --mono: 'IBM Plex Mono', monospace;
          --radius: 10px;
          --radius-sm: 6px;
        }

        html { scroll-behavior: smooth; }
        body {
          background: var(--paper);
          color: var(--ink);
          font-family: var(--body);
          font-size: 15px;
          line-height: 1.7;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: var(--paper); }
        ::-webkit-scrollbar-thumb { background: var(--line); border-radius: 4px; }

        [data-aos] { opacity: 0; transform: translateY(24px); transition: opacity 0.6s cubic-bezier(.16,1,.3,1), transform 0.6s cubic-bezier(.16,1,.3,1); }
        [data-aos].aos-animate { opacity: 1; transform: translateY(0); }
        [data-aos="fade-left"] { transform: translateX(-24px); }
        [data-aos="fade-left"].aos-animate { transform: translateX(0); }
        [data-aos="fade-right"] { transform: translateX(24px); }
        [data-aos="fade-right"].aos-animate { transform: translateX(0); }

        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0.3; } }
        .status-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--green); animation: blink 2.2s infinite; flex-shrink: 0; }

        nav {
          position: sticky; top: 0; z-index: 100;
          background: rgba(245,246,242,0.92);
          backdrop-filter: blur(16px) saturate(140%);
          border-bottom: 1px solid var(--line);
        }
        .nav-inner {
          max-width: 1180px; margin: auto; padding: 0 40px;
          height: 62px; display: flex; justify-content: space-between; align-items: center;
        }
        .logo {
          font-family: var(--display); font-size: 18px; font-weight: 700;
          color: var(--ink); text-decoration: none; letter-spacing: -.2px;
          display: flex; align-items: center; gap: 8px;
        }
        .logo-version {
          font-family: var(--mono); font-size: 10.5px; font-weight: 500; color: var(--blue);
          background: var(--blue-dim); border: 1px solid var(--blue-line);
          padding: 2px 7px; border-radius: var(--radius-sm);
          letter-spacing: .3px;
        }
        .nav-links { display: flex; gap: 2px; align-items: center; list-style: none; }
        .nav-links a {
          color: var(--ink-soft); text-decoration: none; font-size: 13px;
          font-weight: 500; padding: 6px 12px; border-radius: var(--radius-sm);
          transition: color .2s, background .2s; position: relative;
          font-family: var(--mono);
        }
        .nav-links a:hover { color: var(--ink); background: var(--line-soft); }
        .nav-links a.active { color: var(--blue); }
        .nav-links a.active::after {
          content: ''; position: absolute; bottom: -1px; left: 12px; right: 12px;
          height: 2px; background: var(--blue); border-radius: 1px;
        }
        .nav-cta {
          background: var(--ink) !important; color: var(--paper2) !important;
          font-weight: 600 !important; font-size: 13px !important;
          padding: 8px 16px !important; border-radius: var(--radius-sm) !important;
          transition: all .2s !important; font-family: var(--body) !important;
        }
        .nav-cta:hover { background: var(--blue) !important; transform: translateY(-1px) !important; }
        .nav-status {
          display: flex; align-items: center; gap: 6px; font-size: 11px;
          color: var(--green); font-weight: 600; font-family: var(--mono);
          background: var(--green-dim); border: 1px solid var(--green-line);
          padding: 5px 10px; border-radius: var(--radius-sm);
        }

        .container { max-width: 1180px; margin: auto; padding: 0 40px; }
        section { padding: 92px 0; }

        .hero-grid {
          display: grid; grid-template-columns: 1.15fr 0.85fr;
          gap: 72px; align-items: start; padding: 88px 0 72px;
        }
        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--green-dim); color: var(--green);
          border: 1px solid var(--green-line); padding: 6px 13px;
          border-radius: var(--radius-sm); font-size: 11.5px; font-weight: 600;
          letter-spacing: .3px; margin-bottom: 22px; font-family: var(--mono);
        }
        h1.hero-title {
          font-family: var(--display); font-size: 46px; font-weight: 700;
          line-height: 1.14; letter-spacing: -1.3px; margin-bottom: 18px; color: var(--ink);
        }
        h1.hero-title .accent { color: var(--blue); }
        .hero-sub {
          color: var(--ink-soft); font-size: 16px; line-height: 1.8;
          max-width: 480px; margin-bottom: 28px; font-weight: 400;
        }

        .meta-table {
          display: flex; flex-wrap: wrap; gap: 0; border: 1px solid var(--line);
          border-radius: var(--radius); overflow: hidden; margin-bottom: 30px; background: var(--paper2);
        }
        .meta-cell {
          padding: 11px 16px; border-right: 1px solid var(--line); flex: 1; min-width: 120px;
        }
        .meta-cell:last-child { border-right: none; }
        .meta-key { font-family: var(--mono); font-size: 9.5px; font-weight: 600; letter-spacing: .8px; text-transform: uppercase; color: var(--steel); margin-bottom: 4px; }
        .meta-val { font-size: 13px; font-weight: 600; color: var(--ink); }

        .btn-row { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--ink); color: var(--paper2); border: none;
          padding: 13px 26px; border-radius: var(--radius-sm); font-size: 14px;
          font-weight: 600; font-family: var(--body); cursor: pointer;
          transition: all .2s; text-decoration: none; letter-spacing: -.1px;
        }
        .btn-primary:hover { background: var(--blue); transform: translateY(-2px); box-shadow: 0 10px 28px var(--blue-mid); }
        .btn-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--paper2); color: var(--ink);
          border: 1px solid var(--line); padding: 13px 26px;
          border-radius: var(--radius-sm); font-size: 14px; font-weight: 500;
          font-family: var(--body); cursor: pointer; transition: all .2s; text-decoration: none;
        }
        .btn-secondary:hover { border-color: var(--blue-line); color: var(--blue); transform: translateY(-2px); }
        .btn-outline-green {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--green-dim); color: var(--green);
          border: 1px solid var(--green-line); padding: 13px 26px;
          border-radius: var(--radius-sm); font-size: 14px; font-weight: 600;
          font-family: var(--body); cursor: pointer; transition: all .2s; text-decoration: none;
        }
        .btn-outline-green:hover { background: var(--green-mid); transform: translateY(-2px); }

        .photo-card {
          background: var(--paper2); border: 1px solid var(--line); border-radius: var(--radius);
          overflow: hidden; margin-bottom: 16px;
        }
        .photo-frame { position: relative; aspect-ratio: 1/1; overflow: hidden; background: var(--line-soft); }
        .photo-frame img { width: 100%; height: 100%; object-fit: cover; object-position: top; display: block; }
        .photo-label {
          position: absolute; bottom: 10px; left: 10px;
          font-family: var(--mono); font-size: 10.5px; font-weight: 500; color: var(--paper2);
          background: rgba(20,23,26,0.72); padding: 4px 9px; border-radius: var(--radius-sm);
          backdrop-filter: blur(4px);
        }
        .photo-status {
          display: flex; align-items: center; justify-content: space-between;
          padding: 11px 14px; border-top: 1px solid var(--line); font-family: var(--mono); font-size: 11.5px;
        }
        .photo-status .avail { color: var(--green); font-weight: 600; display: flex; align-items: center; gap: 6px; }
        .photo-status .exp { color: var(--steel); }

        .contact-popup-wrap { position: relative; margin-top: 16px; max-width: 360px; }
        .contact-popup {
          background: var(--paper2); border: 1px solid var(--line);
          border-radius: var(--radius); padding: 22px;
          box-shadow: 0 24px 60px rgba(20,23,26,0.14);
          animation: popIn .18s cubic-bezier(.16,1,.3,1);
        }
        @keyframes popIn { from { opacity:0; transform:translateY(-8px) scale(.97); } to { opacity:1; transform:translateY(0) scale(1); } }
        .popup-title { font-family: var(--display); font-size: 18px; font-weight: 700; margin-bottom: 15px; letter-spacing: -.3px; color: var(--ink); }
        .contact-cards { display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px; }
        .contact-card {
          background: var(--paper); border: 1px solid var(--line-soft);
          border-radius: var(--radius-sm); padding: 11px 13px; display: flex; align-items: center; gap: 11px;
        }
        .cc-icon { width: 32px; height: 32px; border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; font-size: 13px; flex-shrink: 0; }
        .cc-icon.email { background: var(--blue-dim); color: var(--blue); }
        .cc-icon.phone { background: var(--green-dim); color: var(--green); }
        .cc-icon.wa { background: rgba(37,211,102,0.1); color: #1e9e56; }
        .cc-label { font-family: var(--mono); font-size: 9px; font-weight: 600; letter-spacing: .8px; text-transform: uppercase; color: var(--steel); margin-bottom: 2px; }
        .cc-val { font-size: 12px; font-weight: 500; color: var(--ink); }
        .copy-btn {
          background: var(--blue-dim); border: 1px solid var(--blue-line);
          color: var(--blue); padding: 3px 10px; border-radius: var(--radius-sm); font-size: 11px;
          font-weight: 600; cursor: pointer; font-family: var(--body); transition: all .15s; margin-left: auto;
        }
        .copy-btn.copied { background: var(--green-dim); border-color: var(--green-line); color: var(--green); }
        .popup-actions { display: flex; flex-direction: column; gap: 8px; }
        .popup-wa { display: flex; align-items: center; gap: 9px; background: #1e9e56; color: #fff; text-decoration: none; padding: 11px 16px; border-radius: var(--radius-sm); font-weight: 600; font-size: 13.5px; font-family: var(--body); transition: all .2s; }
        .popup-wa:hover { background: #187f45; transform: translateY(-1px); }
        .popup-mail { display: flex; align-items: center; gap: 9px; background: var(--ink); color: var(--paper2); text-decoration: none; padding: 11px 16px; border-radius: var(--radius-sm); font-weight: 600; font-size: 13.5px; font-family: var(--body); transition: all .2s; }
        .popup-mail:hover { background: var(--blue); transform: translateY(-1px); }

        .sec-eyebrow {
          display: flex; align-items: center; gap: 8px; margin-bottom: 12px;
        }
        .sec-eyebrow .path {
          font-family: var(--mono); font-size: 11px; font-weight: 600; color: var(--blue);
          background: var(--blue-dim); border: 1px solid var(--blue-line);
          padding: 4px 10px; border-radius: var(--radius-sm);
        }
        h2.sec-title {
          font-family: var(--display); font-size: 34px; font-weight: 700;
          letter-spacing: -1.1px; line-height: 1.15; margin-bottom: 10px; color: var(--ink);
        }
        .sec-sub { color: var(--ink-soft); font-size: 15px; max-width: 480px; margin-bottom: 40px; }
        .divider { width: 40px; height: 2px; background: var(--blue); border-radius: 2px; margin-bottom: 40px; }

        .endpoints-list { display: flex; flex-direction: column; gap: 10px; }
        .endpoint-row {
          display: flex; align-items: flex-start; gap: 18px;
          background: var(--paper2); border: 1px solid var(--line); border-radius: var(--radius);
          padding: 20px 22px; transition: border-color .2s, transform .2s;
        }
        .endpoint-row:hover { border-color: var(--blue-line); transform: translateX(3px); }
        .endpoint-method {
          font-family: var(--mono); font-size: 11px; font-weight: 700; color: var(--green);
          background: var(--green-dim); border: 1px solid var(--green-line);
          padding: 5px 10px; border-radius: var(--radius-sm); flex-shrink: 0; margin-top: 2px;
        }
        .endpoint-body { flex: 1; }
        .endpoint-path { font-family: var(--mono); font-size: 12.5px; color: var(--steel); margin-bottom: 6px; display: block; }
        .endpoint-body h3 { font-family: var(--display); font-size: 16.5px; font-weight: 600; color: var(--ink); margin-bottom: 5px; letter-spacing: -.1px; }
        .endpoint-body p { font-size: 13px; color: var(--ink-soft); line-height: 1.7; }

        .skills-groups { display: flex; flex-direction: column; gap: 22px; }
        .skill-group-label {
          font-family: var(--mono); font-size: 11px; font-weight: 600; letter-spacing: 1px;
          text-transform: uppercase; color: var(--steel); margin-bottom: 10px; display: block;
        }
        .skills-wrap { display: flex; flex-wrap: wrap; gap: 8px; }
        .skill-pill {
          display: flex; align-items: center; gap: 7px;
          background: var(--paper2); border: 1px solid var(--line);
          padding: 7px 14px; border-radius: var(--radius-sm); font-size: 12.5px;
          font-weight: 500; transition: all .2s; cursor: default; color: var(--ink-soft);
        }
        .skill-pill:hover { border-color: var(--blue-line); color: var(--blue); background: var(--blue-dim); }
        .skill-pill i { font-size: 12px; color: var(--blue); }

        .releases-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .release-card {
          background: var(--paper2); border: 1px solid var(--line); border-radius: var(--radius);
          overflow: hidden; transition: all .22s; display: flex; flex-direction: column;
        }
        .release-card:hover { border-color: var(--blue-line); transform: translateY(-4px); box-shadow: 0 16px 40px rgba(20,23,26,0.07); }
        .release-top { display: flex; justify-content: space-between; align-items: center; padding: 14px 18px 0; }
        .release-version { font-family: var(--mono); font-size: 12px; font-weight: 600; color: var(--ink); }
        .release-status { font-family: var(--mono); font-size: 10px; font-weight: 600; padding: 3px 9px; border-radius: var(--radius-sm); text-transform: uppercase; letter-spacing: .5px; }
        .release-status.live { background: var(--green-dim); color: var(--green); border: 1px solid var(--green-line); }
        .release-status.progress { background: var(--blue-dim); color: var(--blue); border: 1px solid var(--blue-line); }
        .release-status.client { background: var(--line-soft); color: var(--steel); border: 1px solid var(--line); }
        .release-screenshot {
          position: relative; overflow: hidden; height: 155px; cursor: pointer;
          background: var(--line-soft); margin: 14px 18px 0; border-radius: var(--radius-sm); flex-shrink: 0;
        }
        .release-screenshot img { width: 100%; height: 100%; object-fit: cover; transition: transform .35s; display: block; }
        .release-card:hover .release-screenshot img { transform: scale(1.04); }
        .screenshot-overlay {
          position: absolute; inset: 0; background: rgba(47,93,158,0.14);
          display: flex; align-items: center; justify-content: center; gap: 7px;
          color: var(--blue); font-size: 13px; font-weight: 600; opacity: 0;
          transition: opacity .22s; backdrop-filter: blur(2px);
        }
        .release-screenshot:hover .screenshot-overlay { opacity: 1; }
        .release-meta { display: flex; align-items: center; gap: 10px; padding: 16px 18px 0; }
        .release-icon { font-size: 20px; }
        .release-tag {
          font-family: var(--mono); font-size: 9.5px; font-weight: 600; letter-spacing: .8px; text-transform: uppercase;
          color: var(--blue); background: var(--blue-dim); border: 1px solid var(--blue-line);
          padding: 3px 8px; border-radius: var(--radius-sm);
        }
        .release-card h3 { font-family: var(--display); font-size: 17px; font-weight: 600; letter-spacing: -.15px; padding: 10px 18px 0; color: var(--ink); }
        .release-desc { color: var(--ink-soft); font-size: 12.5px; line-height: 1.7; padding: 8px 18px 0; }
        .release-changes { list-style: none; display: flex; flex-direction: column; gap: 6px; padding: 12px 18px 0; }
        .release-changes li { font-size: 12px; color: var(--ink-soft); padding-left: 16px; position: relative; line-height: 1.6; }
        .release-changes li::before { content: '→'; color: var(--green); position: absolute; left: 0; font-family: var(--mono); }
        .tech-row { display: flex; flex-wrap: wrap; gap: 5px; padding: 12px 18px; }
        .tech-badge {
          font-family: var(--mono); font-size: 10px; background: var(--paper); border: 1px solid var(--line);
          color: var(--steel); padding: 3px 8px; border-radius: var(--radius-sm);
        }
        .release-btns { display: flex; gap: 8px; padding: 0 18px 18px; margin-top: auto; }
        .rbtn {
          display: inline-flex; align-items: center; gap: 6px; padding: 8px 13px;
          border-radius: var(--radius-sm); font-size: 12px; font-weight: 600; font-family: var(--body);
          cursor: pointer; text-decoration: none; transition: all .2s; border: none; flex: 1; justify-content: center;
        }
        .rbtn.primary { background: var(--ink); color: var(--paper2); }
        .rbtn.primary:hover { background: var(--blue); }
        .rbtn.ghost { background: transparent; border: 1px solid var(--line); color: var(--ink-soft); }
        .rbtn.ghost:hover { border-color: var(--blue-line); color: var(--blue); }

        .img-modal-backdrop {
          position: fixed; inset: 0; background: rgba(20,23,26,0.6); z-index: 1000;
          display: flex; align-items: center; justify-content: center; padding: 24px;
          animation: fadeIn .18s ease;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .img-modal {
          background: var(--paper2); border: 1px solid var(--line);
          border-radius: var(--radius); max-width: 780px; width: 100%; overflow: hidden;
          box-shadow: 0 32px 90px rgba(20,23,26,0.3);
          animation: popIn .22s cubic-bezier(.16,1,.3,1);
          position: relative;
        }
        .modal-close {
          position: absolute; top: 14px; right: 14px; z-index: 10;
          width: 32px; height: 32px; border-radius: var(--radius-sm); background: var(--paper);
          border: 1px solid var(--line); color: var(--ink-soft); cursor: pointer;
          font-size: 14px; display: flex; align-items: center; justify-content: center;
          transition: all .2s; font-family: var(--body);
        }
        .modal-close:hover { border-color: var(--blue-line); color: var(--blue); }
        .modal-header { display: flex; align-items: center; gap: 12px; padding: 20px 20px 12px; }
        .modal-img { width: 100%; display: block; max-height: 460px; object-fit: contain; background: var(--paper); }
        .modal-actions { display: flex; gap: 10px; padding: 14px 20px; border-top: 1px solid var(--line); }

        .changelog-list { display: flex; flex-direction: column; gap: 0; }
        .changelog-item { display: flex; gap: 24px; padding: 0 0 32px; position: relative; }
        .changelog-item::before {
          content: ''; position: absolute; left: 36px; top: 36px; bottom: -4px; width: 1px; background: var(--line);
        }
        .changelog-item:last-child::before { display: none; }
        .changelog-ver-wrap { flex-shrink: 0; display: flex; flex-direction: column; align-items: center; width: 72px; }
        .changelog-ver {
          font-family: var(--mono); font-size: 12px; font-weight: 700;
          background: var(--paper2); border: 1.5px solid; border-radius: var(--radius-sm);
          padding: 6px 10px; z-index: 1;
        }
        .changelog-card {
          background: var(--paper2); border: 1px solid var(--line); border-radius: var(--radius);
          padding: 22px; flex: 1; transition: border-color .2s;
        }
        .changelog-card:hover { border-color: var(--line); }
        .changelog-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; margin-bottom: 6px; flex-wrap: wrap; }
        .changelog-role { font-family: var(--display); font-size: 16px; font-weight: 600; letter-spacing: -.15px; color: var(--ink); }
        .changelog-company { font-size: 13px; color: var(--ink-soft); margin-bottom: 14px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .changelog-badge {
          font-family: var(--mono); font-size: 9.5px; font-weight: 600; letter-spacing: .6px; padding: 2px 8px;
          border-radius: var(--radius-sm); text-transform: uppercase;
        }
        .changelog-badge.freelance { background: var(--blue-dim); color: var(--blue); border: 1px solid var(--blue-line); }
        .changelog-badge.contract { background: var(--green-dim); color: var(--green); border: 1px solid var(--green-line); }
        .changelog-period { font-family: var(--mono); font-size: 11.5px; color: var(--steel); background: var(--paper); border: 1px solid var(--line); padding: 4px 10px; border-radius: var(--radius-sm); white-space: nowrap; }
        .changelog-points { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .changelog-points li { display: flex; align-items: flex-start; gap: 9px; font-size: 13.5px; color: var(--ink-soft); line-height: 1.65; }
        .changelog-points li::before { content: '+'; color: var(--green); font-family: var(--mono); font-weight: 700; flex-shrink: 0; }

        .resume-box {
          background: var(--paper2);
          border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden;
        }
        .resume-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 0; align-items: stretch; }
        .resume-left { padding: 44px; border-right: 1px solid var(--line); }
        .resume-right { padding: 44px; display: flex; flex-direction: column; justify-content: center; background: var(--paper); }
        .resume-title { font-family: var(--display); font-size: 28px; font-weight: 700; letter-spacing: -1px; margin-bottom: 12px; color: var(--ink); }
        .resume-title span { color: var(--blue); }
        .resume-desc { color: var(--ink-soft); font-size: 14.5px; line-height: 1.8; margin-bottom: 26px; }
        .resume-items { display: flex; flex-direction: column; gap: 10px; }
        .resume-item { display: flex; align-items: center; gap: 12px; padding: 13px 15px; background: var(--paper); border: 1px solid var(--line); border-radius: var(--radius-sm); }
        .resume-item-icon { width: 34px; height: 34px; border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; }
        .resume-item-icon.green { background: var(--green-dim); color: var(--green); }
        .resume-item-icon.blue { background: var(--blue-dim); color: var(--blue); }
        .resume-item-text .label { font-family: var(--mono); font-size: 9px; font-weight: 600; letter-spacing: .8px; text-transform: uppercase; color: var(--steel); margin-bottom: 2px; }
        .resume-item-text .value { font-size: 13px; font-weight: 500; color: var(--ink); }
        .resume-download-area { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 18px; text-align: center; height: 100%; }
        .resume-file-icon {
          width: 84px; height: 100px; background: var(--paper2);
          border: 1.5px solid var(--blue-line); border-radius: var(--radius);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 8px; position: relative; color: var(--blue);
        }
        .resume-file-icon::after {
          content: 'PDF'; position: absolute; bottom: -1px; left: 0; right: 0;
          background: var(--blue); color: var(--paper2); font-size: 9px; font-weight: 700;
          letter-spacing: 1px; padding: 4px; border-radius: 0 0 8px 8px;
          font-family: var(--mono);
        }
        .resume-file-icon i { font-size: 28px; }
        .resume-download-btn {
          display: inline-flex; align-items: center; gap: 9px;
          background: var(--ink); color: var(--paper2); border: none;
          padding: 13px 30px; border-radius: var(--radius-sm); font-size: 14px;
          font-weight: 600; font-family: var(--body); cursor: pointer;
          transition: all .2s; text-decoration: none; width: 100%; justify-content: center;
        }
        .resume-download-btn:hover { background: var(--blue); transform: translateY(-2px); }
        .resume-view-btn {
          display: inline-flex; align-items: center; gap: 9px;
          background: transparent; color: var(--ink-soft); border: 1px solid var(--line);
          padding: 11px 30px; border-radius: var(--radius-sm); font-size: 13px;
          font-weight: 500; font-family: var(--body); cursor: pointer;
          transition: all .2s; text-decoration: none; width: 100%; justify-content: center;
        }
        .resume-view-btn:hover { border-color: var(--blue-line); color: var(--blue); }

        .cta-box {
          background: var(--paper2);
          border: 1px solid var(--line); border-radius: var(--radius);
          padding: 72px 60px; text-align: center; position: relative; overflow: hidden;
        }
        .cta-box h2 { font-family: var(--display); font-size: 34px; font-weight: 700; letter-spacing: -1.1px; margin-bottom: 12px; color: var(--ink); }
        .cta-box p { color: var(--ink-soft); font-size: 15.5px; max-width: 420px; margin: 0 auto 30px; }
        .cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

        footer { border-top: 1px solid var(--line); padding: 40px 0; }
        .footer-inner { display: flex; justify-content: space-between; align-items: flex-start; gap: 24px; flex-wrap: wrap; }
        .footer-copy { color: var(--steel); font-size: 12px; margin-top: 6px; font-family: var(--mono); }
        .footer-domain { font-family: var(--mono); font-size: 11px; color: var(--blue); background: var(--blue-dim); border: 1px solid var(--blue-line); padding: 3px 9px; border-radius: var(--radius-sm); margin-left: 6px; }
        .footer-status { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; font-family: var(--mono); color: var(--green); font-weight: 600; background: var(--green-dim); border: 1px solid var(--green-line); padding: 5px 11px; border-radius: var(--radius-sm); margin-top: 10px; }
        .footer-links { display: flex; gap: 6px; flex-wrap: wrap; }
        .footer-links a { color: var(--ink-soft); text-decoration: none; font-size: 12.5px; padding: 8px 13px; border-radius: var(--radius-sm); border: 1px solid var(--line); display: flex; align-items: center; gap: 7px; transition: all .2s; background: var(--paper2); }
        .footer-links a:hover { color: var(--blue); border-color: var(--blue-line); background: var(--blue-dim); }
        .footer-links a i { font-size: 13px; }

        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; gap: 44px; padding: 56px 0 44px; }
          h1.hero-title { font-size: 36px; }
          .releases-grid { grid-template-columns: 1fr; }
          h2.sec-title { font-size: 28px; }
          .resume-inner { grid-template-columns: 1fr; }
          .resume-left { border-right: none; border-bottom: 1px solid var(--line); padding: 30px; }
          .resume-right { padding: 30px; }
          .nav-links { display: none; }
          .container { padding: 0 20px; }
          .cta-box { padding: 44px 22px; }
          .cta-box h2 { font-size: 27px; }
          .meta-table { flex-direction: column; }
          .meta-cell { border-right: none; border-bottom: 1px solid var(--line); }
          .meta-cell:last-child { border-bottom: none; }
        }
      `}</style>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />

      {/* ── NAV ── */}
      <nav>
        <div className="nav-inner">
          <a href="#home" className="logo">
            Sanket Thalkar
            <span className="logo-version">v3.0</span>
          </a>
          <ul className="nav-links">
            {["services", "skills", "projects", "experience", "resume"].map(
              (s) => (
                <li key={s}>
                  <a
                    href={`#${s}`}
                    className={activeSection === s ? "active" : ""}
                  >
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </a>
                </li>
              ),
            )}
            <li>
              <span className="nav-status">
                <span className="status-dot"></span>Available
              </span>
            </li>
            <li>
              <a
                href={CONNECT_MAIL}
                className="nav-links a nav-cta"
                onClick={() => track("connect_click", { location: "navbar" })}
                style={{
                  background: "var(--ink)",
                  color: "var(--paper2)",
                  fontWeight: 600,
                  fontSize: 13,
                  padding: "8px 16px",
                  borderRadius: "var(--radius-sm)",
                  transition: "all .2s",
                  textDecoration: "none",
                  display: "inline-block",
                  fontFamily: "var(--body)",
                }}
              >
                Let's Connect →
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ── HERO ── */}
      <div id="home" className="container">
        <div className="hero-grid">
          {/* Left */}
          <div data-aos="fade-right">
            <div className="hero-eyebrow">
              <span className="status-dot"></span>
              status: open for new projects
            </div>
            <h1 className="hero-title">
              Full Stack
              <br />
              <span className="accent">Java</span> Developer
              <br />
              for enterprise teams
            </h1>
            <p className="hero-sub">
              3+ years building production web applications with Spring Boot,
              Angular & React. Clean, scalable code — delivered on time, every
              time.
            </p>

            <div className="meta-table">
              <div className="meta-cell">
                <div className="meta-key">Experience</div>
                <div className="meta-val">3+ years</div>
              </div>
              <div className="meta-cell">
                <div className="meta-key">Stack</div>
                <div className="meta-val">Spring · React · Angular</div>
              </div>
              <div className="meta-cell">
                <div className="meta-key">Location</div>
                <div className="meta-val">Pune, IN</div>
              </div>
              <div className="meta-cell">
                <div className="meta-key">Domain</div>
                <div className="meta-val">{DOMAIN}</div>
              </div>
            </div>

            <div className="btn-row">
              <a
                href={CONNECT_MAIL}
                className="btn-primary"
                onClick={() => track("connect_click", { location: "hero" })}
              >
                <i className="fa-solid fa-envelope"></i> Let's Connect
              </a>
              <button
                ref={toggleRef}
                className="btn-secondary"
                onClick={handleContactOpen}
              >
                <i className="fa-solid fa-address-card"></i> Contact Info{" "}
                <i
                  className="fa-solid fa-chevron-down"
                  style={{
                    fontSize: 10,
                    transition: "transform .2s",
                    transform: contactOpen ? "rotate(180deg)" : "rotate(0)",
                  }}
                ></i>
              </button>
              <a
                href="#resume"
                className="btn-outline-green"
                onClick={() =>
                  track("resume_click", { location: "hero_button" })
                }
              >
                <i className="fa-solid fa-file-arrow-down"></i> Resume
              </a>
            </div>

            {/* Contact Popup */}
            {contactOpen && (
              <div className="contact-popup-wrap" ref={popupRef}>
                <div className="contact-popup">
                  <div className="popup-title">Let's Connect</div>
                  <div className="contact-cards">
                    <div className="contact-card">
                      <div className="cc-icon email">
                        <i className="fa-solid fa-envelope"></i>
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div className="cc-label">Email</div>
                        <div
                          className="cc-val"
                          style={{ fontSize: 11, wordBreak: "break-all" }}
                        >
                          {MAIL}
                        </div>
                      </div>
                      <button
                        className={`copy-btn${copied ? " copied" : ""}`}
                        onClick={copyEmail}
                      >
                        {copied ? "✓ Copied" : "Copy"}
                      </button>
                    </div>
                    <div className="contact-card">
                      <div className="cc-icon phone">
                        <i className="fa-solid fa-phone"></i>
                      </div>
                      <div>
                        <div className="cc-label">Phone / WhatsApp</div>
                        <div className="cc-val">+91 70575 28416</div>
                      </div>
                    </div>
                    <div className="contact-card">
                      <div className="cc-icon wa">
                        <i className="fa-brands fa-whatsapp"></i>
                      </div>
                      <div>
                        <div className="cc-label">WhatsApp Chat</div>
                        <div className="cc-val">Available anytime</div>
                      </div>
                    </div>
                  </div>
                  <div className="popup-actions">
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="popup-wa"
                      onClick={() =>
                        track("whatsapp_click", { location: "contact_popup" })
                      }
                    >
                      <i
                        className="fa-brands fa-whatsapp"
                        style={{ fontSize: 15 }}
                      ></i>{" "}
                      Chat on WhatsApp
                    </a>
                    <a
                      href={CONNECT_MAIL}
                      className="popup-mail"
                      onClick={() =>
                        track("connect_click", { location: "contact_popup" })
                      }
                    >
                      <i
                        className="fa-solid fa-envelope"
                        style={{ fontSize: 14 }}
                      ></i>{" "}
                      Send Email
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right */}
          <div data-aos="fade-left">
            <div className="photo-card">
              <div className="photo-frame">
                <img src={profile} alt="Sanket Thalkar" />
                <div className="photo-label">sanket.jpg</div>
              </div>
              <div className="photo-status">
                <span className="avail">
                  <span className="status-dot"></span> Available now
                </span>
                <span className="exp">3+ yrs exp.</span>
              </div>
            </div>

            <div className="meta-table" style={{ marginBottom: 0 }}>
              <div className="meta-cell">
                <div className="meta-key">Education</div>
                <div className="meta-val">MCA Graduate</div>
              </div>
              <div className="meta-cell">
                <div className="meta-key">Technologies</div>
                <div className="meta-val">21+</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section id="services">
        <div className="container">
          <div data-aos="fade-up">
            <div className="sec-eyebrow">
              <span className="path">GET /services</span>
            </div>
            <h2 className="sec-title">What I build</h2>
            <div className="divider"></div>
          </div>
          <div className="endpoints-list">
            {endpoints.map((e, i) => (
              <div
                className="endpoint-row"
                key={e.title}
                data-aos="fade-up"
                style={{ transitionDelay: `${0.03 + i * 0.04}s` }}
              >
                <span className="endpoint-method">{e.method}</span>
                <div className="endpoint-body">
                  <span className="endpoint-path">{e.path}</span>
                  <h3>{e.title}</h3>
                  <p>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills">
        <div className="container">
          <div data-aos="fade-up">
            <div className="sec-eyebrow">
              <span className="path">GET /stack</span>
            </div>
            <h2 className="sec-title">Technical stack</h2>
            <div className="divider"></div>
          </div>
          <div className="skills-groups" data-aos="fade-up">
            {skillGroups.map((g) => (
              <div key={g.label}>
                <span className="skill-group-label">{g.label}</span>
                <div className="skills-wrap">
                  {g.items.map((s) => (
                    <div className="skill-pill" key={s.name}>
                      <i className={s.icon}></i>
                      {s.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects">
        <div className="container">
          <div data-aos="fade-up">
            <div className="sec-eyebrow">
              <span className="path">GET /releases</span>
            </div>
            <h2 className="sec-title">Selected work</h2>
            <p className="sec-sub">
              Click a preview to see the full screenshot.
            </p>
            <div className="divider"></div>
          </div>
          <div className="releases-grid">
            {releases.map((r, i) => (
              <ReleaseCard key={r.title} r={r} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience">
        <div className="container">
          <div data-aos="fade-up">
            <div className="sec-eyebrow">
              <span className="path">GET /changelog</span>
            </div>
            <h2 className="sec-title">Career log</h2>
            <div className="divider"></div>
          </div>
          <div className="changelog-list">
            {changelog.map((c, i) => (
              <div
                className="changelog-item"
                key={c.role}
                data-aos="fade-up"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="changelog-ver-wrap">
                  <div
                    className="changelog-ver"
                    style={{ borderColor: c.color, color: c.color }}
                  >
                    {c.version}
                  </div>
                </div>
                <div className="changelog-card">
                  <div className="changelog-top">
                    <div>
                      <div className="changelog-role">{c.role}</div>
                      <div className="changelog-company">
                        <i
                          className="fa-solid fa-building"
                          style={{ fontSize: 12 }}
                        ></i>
                        {c.company}
                        <span
                          className={`changelog-badge ${c.type.toLowerCase()}`}
                        >
                          {c.type}
                        </span>
                      </div>
                    </div>
                    <span className="changelog-period">{c.period}</span>
                  </div>
                  <ul className="changelog-points">
                    {c.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESUME ── */}
      <section id="resume">
        <div className="container">
          <div data-aos="fade-up">
            <div className="sec-eyebrow">
              <span className="path">GET /resume</span>
            </div>
            <h2 className="sec-title">Download my resume</h2>
            <div className="divider"></div>
          </div>
          <div className="resume-box" data-aos="fade-up">
            <div className="resume-inner">
              <div className="resume-left">
                <h3 className="resume-title">
                  Sanket <span>Thalkar</span>
                </h3>
                <p className="resume-desc">
                  Full Stack Java Developer with 3+ years of hands-on experience
                  building production-grade web applications, REST APIs, and
                  enterprise software solutions.
                </p>
                <div className="resume-items">
                  {[
                    {
                      icon: "fa-solid fa-graduation-cap",
                      color: "green",
                      label: "Education",
                      value: "MCA Graduate",
                    },
                    {
                      icon: "fa-solid fa-location-dot",
                      color: "blue",
                      label: "Location",
                      value: "Pune, Maharashtra",
                    },
                    {
                      icon: "fa-solid fa-briefcase",
                      color: "green",
                      label: "Experience",
                      value: "3+ Years · Freelance",
                    },
                    {
                      icon: "fa-solid fa-code",
                      color: "blue",
                      label: "Specialization",
                      value: "Spring Boot · Angular · React",
                    },
                    {
                      icon: "fa-solid fa-globe",
                      color: "green",
                      label: "Portfolio",
                      value: DOMAIN,
                    },
                    {
                      icon: "fa-solid fa-envelope",
                      color: "blue",
                      label: "Email",
                      value: MAIL,
                    },
                  ].map((item) => (
                    <div className="resume-item" key={item.label}>
                      <div className={`resume-item-icon ${item.color}`}>
                        <i className={item.icon}></i>
                      </div>
                      <div className="resume-item-text">
                        <div className="label">{item.label}</div>
                        <div className="value">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="resume-right">
                <div className="resume-download-area">
                  <div className="resume-file-icon">
                    <i className="fa-solid fa-file-lines"></i>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontFamily: "var(--display)",
                        fontSize: 19,
                        fontWeight: 700,
                        letterSpacing: "-.3px",
                        marginBottom: 6,
                        color: "var(--ink)",
                      }}
                    >
                      Resume ready
                    </div>
                    <p
                      style={{
                        color: "var(--ink-soft)",
                        fontSize: 13,
                        lineHeight: 1.7,
                      }}
                    >
                      Download the latest version for full work history,
                      education, and technical skills.
                    </p>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    <a
                      href={RESUME_LINK}
                      download
                      className="resume-download-btn"
                      onClick={() =>
                        track("resume_download", { location: "resume_section" })
                      }
                    >
                      <i className="fa-solid fa-download"></i> Download Resume
                      (PDF)
                    </a>
                    <a
                      href={RESUME_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="resume-view-btn"
                      onClick={() =>
                        track("resume_preview", { location: "resume_section" })
                      }
                    >
                      <i className="fa-solid fa-eye"></i> Preview in Browser
                    </a>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10.5,
                      color: "var(--steel)",
                      textAlign: "center",
                    }}
                  >
                    last-updated: 2026-05 · format: pdf
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section>
        <div className="container">
          <div className="cta-box" data-aos="fade-up">
            <h2>Ready to build something?</h2>
            <p>
              Let's talk about your next ERP, billing system, REST API, or
              full-stack project.
            </p>
            <div className="cta-btns">
              <a
                href={CONNECT_MAIL}
                className="btn-primary"
                style={{ fontSize: 14.5, padding: "14px 34px" }}
                onClick={() =>
                  track("connect_click", { location: "cta_section" })
                }
              >
                <i className="fa-solid fa-envelope"></i> Send Project Details
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ fontSize: 14.5, padding: "14px 34px" }}
                onClick={() =>
                  track("whatsapp_click", { location: "cta_section" })
                }
              >
                <i className="fa-brands fa-whatsapp"></i> WhatsApp Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="container">
          <div className="footer-inner">
            <div>
              <div
                style={{
                  fontFamily: "var(--display)",
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: 2,
                  color: "var(--ink)",
                }}
              >
                Sanket Thalkar
                <span className="footer-domain">{DOMAIN}</span>
              </div>
              <p className="footer-copy">
                © 2026 Sanket Thalkar · Java Full Stack Developer
              </p>
              <div className="footer-status">
                <span className="status-dot"></span> Available for new projects
              </div>
            </div>
            <div className="footer-links">
              <a
                href="https://github.com/thalkar123"
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  track("github_click", {
                    project_name: "portfolio",
                    location: "footer",
                  })
                }
              >
                <i className="fa-brands fa-github"></i> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sanket-thalkar-30b531194/"
                target="_blank"
                rel="noreferrer"
                onClick={() => track("linkedin_click", { location: "footer" })}
              >
                <i className="fa-brands fa-linkedin"></i> LinkedIn
              </a>
              <a
                href={RESUME_LINK}
                target="_blank"
                rel="noreferrer"
                onClick={() => track("resume_preview", { location: "footer" })}
              >
                <i className="fa-solid fa-file-lines"></i> Resume
              </a>
              <a
                href={CONNECT_MAIL}
                onClick={() => track("connect_click", { location: "footer" })}
              >
                <i className="fa-solid fa-envelope"></i> Email
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                onClick={() => track("whatsapp_click", { location: "footer" })}
              >
                <i className="fa-brands fa-whatsapp"></i> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
