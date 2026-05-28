import { useState, useEffect, useRef } from "react";
import profile from "./assets/sanketimg.jpeg";
const MAIL = "thalkarsanket1428@gmail.com";
const WA_LINK = `https://wa.me/917057528416?text=Hello%20Sanket%2C%20I%20want%20to%20discuss%20a%20project%20with%20you.`;
const HIRE_MAIL = `mailto:${MAIL}?subject=Freelance%20Project%20Inquiry&body=Hello%20Sanket%2C%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20with%20you.%0D%0A%0D%0AProject%20details%3A%0D%0A`;
const RESUME_LINK =
  "https://drive.google.com/file/d/1jRAv2IiYpY88XoZyDjv2i7amwW4S72v6/view?usp=sharing"; // Replace with actual resume link

const skills = [
  { name: "Java", icon: "fa-brands fa-java" },
  { name: "Spring Boot", icon: "fa-solid fa-leaf" },
  { name: "Spring Security", icon: "fa-solid fa-shield-halved" },
  { name: "React", icon: "fa-brands fa-react" },
  { name: "Angular", icon: "fa-brands fa-angular" },
  { name: "JavaScript", icon: "fa-brands fa-js" },
  { name: "REST API", icon: "fa-solid fa-plug" },
  { name: "Microservices", icon: "fa-solid fa-cubes" },
  { name: "MySQL", icon: "fa-solid fa-database" },
  { name: "Oracle", icon: "fa-solid fa-circle-nodes" },
  { name: "JWT Security", icon: "fa-solid fa-lock" },
  { name: "PrimeNG", icon: "fa-solid fa-palette" },
  { name: "Hibernate", icon: "fa-solid fa-link" },
  { name: "JDBC", icon: "fa-solid fa-link" },
  { name: "JSP", icon: "fa-solid fa-code" },
  { name: "Servlet", icon: "fa-solid fa-server" },
  { name: "Thymeleaf", icon: "fa-solid fa-leaf" },
  { name: "Struts", icon: "fa-solid fa-sitemap" },
  { name: "Postman", icon: "fa-solid fa-envelope-open-text" },
  { name: "GitHub", icon: "fa-brands fa-github" },
  { name: "SVN", icon: "fa-solid fa-box-archive" },
];

const projects = [
  {
    title: "Billing System",
    tag: "Inventory & GST",
    desc: "Multi-shop billing and inventory management with GST invoice generation, stock tracking, real-time reporting, and multi-tenant architecture.",
    tech: ["Java", "Spring Boot", "MySQL", "Angular"],
    icon: "🧾",
    demo: "https://billing-system-xz7r.onrender.com/login",
    github: "https://github.com/thalkar123",
    // Replace with actual screenshot URL
    screenshot:
      "https://placehold.co/600x360/0c0d11/00e5ff?text=Billing+System+Screenshot",
    highlights: ["Multi-tenant", "GST Invoice", "Real-time Reports"],
  },
  {
    title: "ERP Management",
    tag: "Enterprise",
    desc: "Full-featured ERP modules with secure REST APIs, role-based access control, and optimized backend architecture for large-scale enterprises.",
    tech: ["Spring Boot", "Thymeleaf", "Oracle", "JWT"],
    icon: "🏢",
    demo: "#",
    github: "https://github.com/thalkar123",
    screenshot:
      "https://placehold.co/600x360/0c0d11/00e5ff?text=ERP+Management+Screenshot",
    highlights: ["Role-based Access", "Secure REST APIs", "Oracle DB"],
  },
  {
    title: "Microservices Platform",
    tag: "Scalable Architecture",
    desc: "Scalable Spring Boot microservices with API gateway, service discovery, and inter-service REST communication.",
    tech: ["Microservices", "Spring Boot", "REST API", "GitHub"],
    icon: "🧩",
    demo: "#",
    github: "https://github.com/thalkar123",
    screenshot:
      "https://placehold.co/600x360/0c0d11/00e5ff?text=Microservices+Platform+Screenshot",
    highlights: ["API Gateway", "Service Discovery", "Scalable"],
  },
];

const services = [
  {
    icon: "fa-solid fa-layer-group",
    title: "Full Stack Web Apps",
    desc: "End-to-end Java + Angular/React applications, from DB design to UI deployment.",
  },
  {
    icon: "fa-solid fa-plug",
    title: "REST API Development",
    desc: "Secure, scalable REST APIs with JWT authentication and full documentation.",
  },
  {
    icon: "fa-brands fa-java",
    title: "Spring Boot Backend",
    desc: "Production-grade Spring Boot backends with security, validation & testing.",
  },
  {
    icon: "fa-brands fa-angular",
    title: "Angular Frontend",
    desc: "Responsive, mobile-first Angular UIs with PrimeNG and Tailwind CSS.",
  },
  {
    icon: "fa-brands fa-react",
    title: "React Applications",
    desc: "Modern React SPAs with hooks, context, and clean component architecture.",
  },
  {
    icon: "fa-solid fa-file-invoice-dollar",
    title: "Billing & ERP Software",
    desc: "Custom billing systems, GST invoicing, inventory & ERP modules for businesses.",
  },
];

const experience = [
  {
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    period: "2022 – Present",
    type: "Freelance",
    color: "#00e5ff",
    points: [
      "Designed and delivered 3+ production-level web applications for clients",
      "Built multi-tenant Billing & Inventory system with GST invoice generation",
      "Developed full ERP suite with role-based access control using Spring Security & JWT",
      "Architected scalable microservices platform with API gateway & service discovery",
    ],
  },
  {
    role: "Java Full Stack Developer",
    company: "Enterprise Client Project",
    period: "2021 – 2022",
    type: "Contract",
    color: "#3ddc84",
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

// ── Project Card with Screenshot Modal ──────────────────────────────────────
function ProjectCard({ p, i }) {
  const [imgModal, setImgModal] = useState(false);

  return (
    <>
      <div
        className="project-card"
        data-aos="zoom-in"
        style={{ transitionDelay: `${0.05 + i * 0.06}s` }}
      >
        {/* Screenshot thumbnail */}
        <div
          className="proj-screenshot"
          onClick={() => setImgModal(true)}
          title="Click to preview"
        >
          <img src={p.screenshot} alt={`${p.title} screenshot`} />
          <div className="screenshot-overlay">
            <i className="fa-solid fa-expand"></i>
            <span>Preview</span>
          </div>
        </div>

        <div className="proj-meta">
          <span className="proj-icon">{p.icon}</span>
          <span className="proj-tag">{p.tag}</span>
        </div>
        <h3>{p.title}</h3>
        <p>{p.desc}</p>

        {/* Highlights */}
        <div className="proj-highlights">
          {p.highlights.map((h) => (
            <span className="highlight-badge" key={h}>
              <i className="fa-solid fa-check"></i> {h}
            </span>
          ))}
        </div>

        <div className="tech-row">
          {p.tech.map((t) => (
            <span className="tech-badge" key={t}>
              {t}
            </span>
          ))}
        </div>

        <div className="proj-btns">
          <a
            href={p.demo}
            className="proj-btn demo"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="fa-solid fa-arrow-up-right-from-square"
              style={{ fontSize: 11 }}
            ></i>
            Live Demo
          </a>
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="proj-btn gh"
          >
            <i className="fa-brands fa-github" style={{ fontSize: 13 }}></i>
            GitHub
          </a>
        </div>
      </div>

      {/* Screenshot Modal */}
      {imgModal && (
        <div className="img-modal-backdrop" onClick={() => setImgModal(false)}>
          <div className="img-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setImgModal(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="modal-header">
              <span className="proj-tag" style={{ marginBottom: 0 }}>
                {p.tag}
              </span>
              <h3 style={{ margin: 0 }}>{p.title}</h3>
            </div>
            <img
              src={p.screenshot}
              alt={`${p.title} full preview`}
              className="modal-img"
            />
            <div className="modal-actions">
              <a
                href={p.demo}
                className="proj-btn demo"
                target="_blank"
                rel="noreferrer"
              >
                <i
                  className="fa-solid fa-arrow-up-right-from-square"
                  style={{ fontSize: 11 }}
                ></i>
                Live Demo
              </a>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="proj-btn gh"
              >
                <i className="fa-brands fa-github"></i> GitHub
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

  // Active nav highlight on scroll
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
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cyan: #00e5ff;
          --cyan-dim: rgba(0,229,255,0.08);
          --cyan-mid: rgba(0,229,255,0.15);
          --cyan-glow: rgba(0,229,255,0.25);
          --green: #3ddc84;
          --green-dim: rgba(61,220,132,0.08);
          --bg: #040507;
          --bg2: #0a0b0f;
          --bg3: #0f1016;
          --bg4: #141519;
          --border: rgba(255,255,255,0.06);
          --border-hover: rgba(255,255,255,0.11);
          --border-cyan: rgba(0,229,255,0.28);
          --text: #e8eaf0;
          --muted: #6b7180;
          --muted2: #9aa0b0;
          --display: 'Syne', system-ui, sans-serif;
          --body: 'DM Sans', system-ui, sans-serif;
          --radius: 16px;
          --radius-sm: 10px;
        }

        html { scroll-behavior: smooth; }
        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--body);
          font-size: 15px;
          line-height: 1.75;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }
        ::-webkit-scrollbar { width: 2px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--cyan); border-radius: 4px; }

        /* ── AOS ── */
        [data-aos] { opacity: 0; transform: translateY(32px); transition: opacity 0.65s cubic-bezier(.16,1,.3,1), transform 0.65s cubic-bezier(.16,1,.3,1); }
        [data-aos].aos-animate { opacity: 1; transform: translateY(0); }
        [data-aos="fade-left"] { transform: translateX(-32px); }
        [data-aos="fade-left"].aos-animate { transform: translateX(0); }
        [data-aos="fade-right"] { transform: translateX(32px); }
        [data-aos="fade-right"].aos-animate { transform: translateX(0); }
        [data-aos="zoom-in"] { transform: scale(0.90); opacity: 0; }
        [data-aos="zoom-in"].aos-animate { transform: scale(1); opacity: 1; }

        /* ── NAV ── */
        nav {
          position: sticky; top: 0; z-index: 100;
          background: rgba(4,5,7,0.85);
          backdrop-filter: blur(24px) saturate(180%);
          border-bottom: 1px solid var(--border);
        }
        .nav-inner {
          max-width: 1200px; margin: auto; padding: 0 40px;
          height: 66px; display: flex; justify-content: space-between; align-items: center;
        }
        .logo {
          font-family: var(--display); font-size: 20px; font-weight: 700;
          color: var(--text); text-decoration: none; letter-spacing: -.2px;
          display: flex; align-items: center; gap: 2px;
        }
        .logo-dot { color: var(--cyan); }
        .logo-domain {
          font-size: 10px; font-weight: 500; color: var(--muted);
          background: var(--bg3); border: 1px solid var(--border);
          padding: 2px 7px; border-radius: 20px;
          margin-left: 8px; letter-spacing: .5px; font-family: var(--body);
        }
        .nav-links { display: flex; gap: 2px; align-items: center; list-style: none; }
        .nav-links a {
          color: var(--muted2); text-decoration: none; font-size: 13.5px;
          font-weight: 500; padding: 6px 13px; border-radius: 8px;
          transition: color .2s, background .2s; position: relative;
        }
        .nav-links a:hover { color: var(--text); background: rgba(255,255,255,0.04); }
        .nav-links a.active { color: var(--cyan); }
        .nav-links a.active::after {
          content: ''; position: absolute; bottom: -1px; left: 13px; right: 13px;
          height: 2px; background: var(--cyan); border-radius: 1px;
        }
        .nav-cta {
          background: var(--cyan) !important; color: #000 !important;
          font-weight: 700 !important; font-size: 13px !important;
          padding: 8px 18px !important; border-radius: 8px !important;
          transition: all .2s !important;
        }
        .nav-cta:hover { background: #33eeff !important; transform: translateY(-1px) !important; box-shadow: 0 8px 24px rgba(0,229,255,0.28) !important; }
        .nav-avail {
          display: flex; align-items: center; gap: 6px; font-size: 11.5px;
          color: var(--green); font-weight: 600;
          background: var(--green-dim); border: 1px solid rgba(61,220,132,0.18);
          padding: 5px 11px; border-radius: 50px;
        }

        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0.25; } }
        .avail-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--green); animation: blink 2.2s infinite; flex-shrink: 0; }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: .6; }
          100% { transform: scale(1.6); opacity: 0; }
        }

        /* ── LAYOUT ── */
        .container { max-width: 1200px; margin: auto; padding: 0 40px; }
        section { padding: 96px 0; }

        /* ── HERO ── */
        .hero-grid {
          display: grid; grid-template-columns: 1.15fr 0.85fr;
          gap: 80px; align-items: center; padding: 96px 0 80px;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--cyan-dim); color: var(--cyan);
          border: 1px solid rgba(0,229,255,0.16); padding: 6px 15px;
          border-radius: 50px; font-size: 12.5px; font-weight: 500;
          letter-spacing: .3px; margin-bottom: 26px;
        }
        .hero-badge::before {
          content: ''; width: 6px; height: 6px; border-radius: 50%;
          background: var(--cyan); animation: blink 2s infinite; flex-shrink: 0;
        }
        h1.hero-title {
          font-family: var(--display); font-size: 54px; font-weight: 700;
          line-height: 1.1; letter-spacing: -1.8px; margin-bottom: 24px;
        }
        h1.hero-title .accent { color: var(--cyan); }
        .hero-sub {
          color: var(--muted2); font-size: 16.5px; line-height: 1.8;
          max-width: 490px; margin-bottom: 38px; font-weight: 400;
        }
        .domain-pill {
          display: inline-flex; align-items: center; gap: 7px;
          background: var(--bg3); border: 1px solid var(--border-cyan);
          padding: 6px 14px; border-radius: 8px; font-size: 13px;
          font-weight: 500; color: var(--cyan); margin-bottom: 24px;
          font-family: monospace; letter-spacing: .4px;
        }
        .domain-pill i { font-size: 11px; color: var(--muted); }

        /* ── BUTTONS ── */
        .btn-row { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--cyan); color: #000; border: none;
          padding: 13px 30px; border-radius: 10px; font-size: 14.5px;
          font-weight: 700; font-family: var(--body); cursor: pointer;
          transition: all .22s; text-decoration: none; letter-spacing: -.1px;
        }
        .btn-primary:hover { background: #33eeff; transform: translateY(-2px); box-shadow: 0 12px 36px var(--cyan-glow); }
        .btn-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: var(--text);
          border: 1px solid var(--border-hover); padding: 13px 30px;
          border-radius: 10px; font-size: 14.5px; font-weight: 500;
          font-family: var(--body); cursor: pointer; transition: all .22s; text-decoration: none;
        }
        .btn-secondary:hover { border-color: var(--border-cyan); color: var(--cyan); transform: translateY(-2px); }
        .btn-outline-green {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--green-dim); color: var(--green);
          border: 1px solid rgba(61,220,132,0.25); padding: 13px 30px;
          border-radius: 10px; font-size: 14.5px; font-weight: 600;
          font-family: var(--body); cursor: pointer; transition: all .22s; text-decoration: none;
        }
        .btn-outline-green:hover { background: rgba(61,220,132,0.14); transform: translateY(-2px); box-shadow: 0 10px 32px rgba(61,220,132,0.15); }

        /* ── PHOTO ── */
        .photo-wrap { position: relative; display: flex; justify-content: center; align-items: center; }
        .photo-ring {
          position: relative; width: 248px; height: 248px; border-radius: 50%;
          background: conic-gradient(var(--cyan) 0%, rgba(0,229,255,0.08) 60%, var(--cyan) 100%);
          padding: 3px; animation: spin 12s linear infinite;
        }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .photo-inner {
          width: 100%; height: 100%; border-radius: 50%;
          background: var(--bg2); overflow: hidden; border: 2px solid var(--bg3);
          animation: spin 12s linear infinite reverse;
        }
        .photo-inner img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }
        .badge-float {
          position: absolute; bottom: 12px; right: -16px;
          background: var(--bg3); border: 1px solid var(--border-cyan);
          border-radius: 10px; padding: 7px 12px; font-size: 11.5px;
          font-weight: 600; color: var(--cyan); display: flex; align-items: center;
          gap: 6px; white-space: nowrap; box-shadow: 0 8px 24px rgba(0,0,0,0.5);
        }
        .badge-float2 {
          position: absolute; top: 12px; left: -16px;
          background: var(--bg3); border: 1px solid rgba(61,220,132,0.28);
          border-radius: 10px; padding: 7px 12px; font-size: 11.5px;
          font-weight: 600; color: var(--green); display: flex; align-items: center;
          gap: 6px; white-space: nowrap; box-shadow: 0 8px 24px rgba(0,0,0,0.5);
        }

        /* ── CONTACT POPUP ── */
        .contact-popup-wrap { position: relative; margin-top: 16px; max-width: 360px; }
        .contact-popup {
          background: var(--bg3); border: 1px solid rgba(0,229,255,0.2);
          border-radius: 20px; padding: 24px;
          box-shadow: 0 32px 80px rgba(0,0,0,0.75), 0 0 0 1px rgba(0,229,255,0.05);
          animation: popIn .18s cubic-bezier(.16,1,.3,1);
        }
        @keyframes popIn { from { opacity:0; transform:translateY(-8px) scale(.97); } to { opacity:1; transform:translateY(0) scale(1); } }
        .popup-title { font-family: var(--display); font-size: 19px; font-weight: 700; margin-bottom: 16px; letter-spacing: -.3px; }
        .contact-cards { display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px; }
        .contact-card {
          background: var(--bg4); border: 1px solid var(--border);
          border-radius: 12px; padding: 11px 13px; display: flex; align-items: center; gap: 11px;
        }
        .cc-icon { width: 34px; height: 34px; border-radius: 9px; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; }
        .cc-icon.email { background: rgba(0,229,255,0.1); color: var(--cyan); }
        .cc-icon.phone { background: rgba(61,220,132,0.1); color: var(--green); }
        .cc-icon.wa { background: rgba(18,140,126,0.14); color: #25d366; }
        .cc-label { font-size: 9.5px; font-weight: 700; letter-spacing: .9px; text-transform: uppercase; color: var(--muted); margin-bottom: 2px; }
        .cc-val { font-size: 12px; font-weight: 500; color: var(--text); }
        .copy-btn {
          background: rgba(0,229,255,0.07); border: 1px solid rgba(0,229,255,0.14);
          color: var(--cyan); padding: 3px 10px; border-radius: 6px; font-size: 11px;
          font-weight: 600; cursor: pointer; font-family: var(--body); transition: all .15s; margin-left: auto;
        }
        .copy-btn.copied { background: rgba(61,220,132,0.1); border-color: rgba(61,220,132,0.25); color: var(--green); }
        .popup-actions { display: flex; flex-direction: column; gap: 8px; }
        .popup-wa { display: flex; align-items: center; gap: 9px; background: #128C7E; color: #fff; text-decoration: none; padding: 11px 16px; border-radius: 10px; font-weight: 600; font-size: 14px; font-family: var(--body); transition: all .2s; }
        .popup-wa:hover { background: #0e7166; transform: translateY(-1px); }
        .popup-mail { display: flex; align-items: center; gap: 9px; background: var(--cyan); color: #000; text-decoration: none; padding: 11px 16px; border-radius: 10px; font-weight: 700; font-size: 14px; font-family: var(--body); transition: all .2s; }
        .popup-mail:hover { background: #33eeff; transform: translateY(-1px); }

        /* ── ABOUT CARD ── */
        .about-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 20px; padding: 28px; position: relative; overflow: hidden;
        }
        .about-card::after {
          content: ''; position: absolute; top: -80px; right: -80px;
          width: 220px; height: 220px;
          background: radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 65%);
          pointer-events: none;
        }
        .about-card h2 { font-family: var(--display); font-size: 18px; font-weight: 600; margin-bottom: 18px; letter-spacing: -.2px; }
        .about-item { display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px solid var(--border); font-size: 13.5px; color: var(--muted2); }
        .about-item:last-child { border-bottom: none; }
        .about-icon { width: 30px; height: 30px; flex-shrink: 0; background: var(--cyan-dim); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 13px; color: var(--cyan); }
        .stat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 18px; }
        .stat-box { background: var(--bg3); border: 1px solid var(--border); border-radius: 12px; padding: 16px; text-align: center; }
        .stat-num { font-family: var(--display); font-size: 26px; font-weight: 700; color: var(--cyan); line-height: 1; }
        .stat-lbl { font-size: 10.5px; color: var(--muted); margin-top: 5px; text-transform: uppercase; letter-spacing: .8px; font-weight: 500; }

        /* ── SECTION HEADINGS ── */
        .sec-tag {
          display: inline-block; background: var(--cyan-dim); color: var(--cyan);
          font-size: 10.5px; font-weight: 700; letter-spacing: 1.8px; text-transform: uppercase;
          padding: 5px 13px; border-radius: 50px; margin-bottom: 13px;
          border: 1px solid rgba(0,229,255,0.13); font-family: var(--body);
        }
        h2.sec-title {
          font-family: var(--display); font-size: 40px; font-weight: 700;
          letter-spacing: -1.4px; line-height: 1.1; margin-bottom: 12px;
        }
        .sec-sub { color: var(--muted2); font-size: 15.5px; max-width: 480px; margin-bottom: 48px; }
        .divider { width: 44px; height: 3px; background: linear-gradient(90deg, var(--cyan), transparent); border-radius: 2px; margin-bottom: 44px; }

        /* ── SERVICES ── */
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .service-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 18px;
          padding: 26px; transition: border-color .22s, transform .22s, box-shadow .22s;
        }
        .service-card:hover { border-color: var(--border-cyan); transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,229,255,0.05); }
        .service-icon { font-size: 26px; margin-bottom: 14px; color: var(--cyan); }
        .service-card h3 { font-family: var(--display); font-size: 16px; font-weight: 600; margin-bottom: 8px; letter-spacing: -.15px; }
        .service-card p { color: var(--muted); font-size: 13px; line-height: 1.75; }

        /* ── SKILLS ── */
        .skills-wrap { display: flex; flex-wrap: wrap; gap: 9px; }
        .skill-pill {
          display: flex; align-items: center; gap: 7px;
          background: var(--bg2); border: 1px solid var(--border);
          padding: 8px 16px; border-radius: 50px; font-size: 13px;
          font-weight: 500; transition: all .2s; cursor: default;
        }
        .skill-pill:hover { border-color: var(--border-cyan); color: var(--cyan); background: var(--cyan-dim); transform: translateY(-2px); }
        .skill-pill i { font-size: 13px; color: var(--cyan); }

        /* ── PROJECTS ── */
        .projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .project-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 20px;
          overflow: hidden; transition: all .25s; display: flex; flex-direction: column;
        }
        .project-card:hover { border-color: var(--border-cyan); transform: translateY(-5px); box-shadow: 0 20px 60px rgba(0,229,255,0.07); }
        .proj-screenshot {
          position: relative; overflow: hidden; height: 175px; cursor: pointer;
          background: var(--bg3); flex-shrink: 0;
        }
        .proj-screenshot img { width: 100%; height: 100%; object-fit: cover; transition: transform .35s; display: block; }
        .project-card:hover .proj-screenshot img { transform: scale(1.04); }
        .screenshot-overlay {
          position: absolute; inset: 0; background: rgba(0,229,255,0.12);
          display: flex; align-items: center; justify-content: center; gap: 7px;
          color: var(--cyan); font-size: 13px; font-weight: 600; opacity: 0;
          transition: opacity .22s; backdrop-filter: blur(2px);
        }
        .proj-screenshot:hover .screenshot-overlay { opacity: 1; }
        .screenshot-overlay i { font-size: 16px; }
        .proj-meta { display: flex; align-items: center; gap: 10px; padding: 20px 20px 0; }
        .proj-icon { font-size: 24px; }
        .proj-tag {
          font-size: 9.5px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase;
          color: var(--cyan); background: var(--cyan-dim); border: 1px solid rgba(0,229,255,0.12);
          padding: 4px 9px; border-radius: 50px;
        }
        .project-card h3 { font-family: var(--display); font-size: 17px; font-weight: 600; letter-spacing: -.15px; padding: 10px 20px 0; }
        .project-card p { color: var(--muted); font-size: 12.5px; line-height: 1.75; flex: 1; padding: 8px 20px; }
        .proj-highlights { display: flex; flex-wrap: wrap; gap: 5px; padding: 0 20px; }
        .highlight-badge {
          font-size: 10.5px; background: var(--green-dim); color: var(--green);
          border: 1px solid rgba(61,220,132,0.15); padding: 3px 8px; border-radius: 5px;
          font-weight: 600; display: flex; align-items: center; gap: 4px;
        }
        .highlight-badge i { font-size: 9px; }
        .tech-row { display: flex; flex-wrap: wrap; gap: 5px; padding: 10px 20px; }
        .tech-badge {
          font-size: 10.5px; background: var(--bg3); border: 1px solid var(--border);
          color: var(--muted); padding: 3px 8px; border-radius: 5px;
        }
        .proj-btns { display: flex; gap: 8px; padding: 0 20px 20px; }
        .proj-btn {
          display: inline-flex; align-items: center; gap: 6px; padding: 7px 13px;
          border-radius: 8px; font-size: 12px; font-weight: 600; font-family: var(--body);
          cursor: pointer; text-decoration: none; transition: all .2s; border: none;
        }
        .proj-btn.demo { background: var(--cyan); color: #000; }
        .proj-btn.demo:hover { background: #33eeff; }
        .proj-btn.gh { background: transparent; border: 1px solid var(--border-hover); color: var(--muted); }
        .proj-btn.gh:hover { border-color: var(--border-cyan); color: var(--cyan); }

        /* ── SCREENSHOT MODAL ── */
        .img-modal-backdrop {
          position: fixed; inset: 0; background: rgba(0,0,0,0.88); z-index: 1000;
          display: flex; align-items: center; justify-content: center; padding: 24px;
          animation: fadeIn .18s ease;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .img-modal {
          background: var(--bg2); border: 1px solid var(--border-cyan);
          border-radius: 22px; max-width: 820px; width: 100%; overflow: hidden;
          box-shadow: 0 40px 120px rgba(0,0,0,0.9);
          animation: popIn .22s cubic-bezier(.16,1,.3,1);
          position: relative;
        }
        .modal-close {
          position: absolute; top: 14px; right: 14px; z-index: 10;
          width: 34px; height: 34px; border-radius: 50%; background: var(--bg3);
          border: 1px solid var(--border); color: var(--muted2); cursor: pointer;
          font-size: 15px; display: flex; align-items: center; justify-content: center;
          transition: all .2s; font-family: var(--body);
        }
        .modal-close:hover { border-color: var(--border-cyan); color: var(--cyan); }
        .modal-header { display: flex; align-items: center; gap: 12px; padding: 20px 20px 12px; }
        .modal-img { width: 100%; display: block; max-height: 480px; object-fit: contain; background: var(--bg3); }
        .modal-actions { display: flex; gap: 10px; padding: 14px 20px; border-top: 1px solid var(--border); }

        /* ── EXPERIENCE ── */
        .exp-timeline { display: flex; flex-direction: column; gap: 0; position: relative; }
        .exp-timeline::before {
          content: ''; position: absolute; left: 19px; top: 24px; bottom: 24px;
          width: 2px; background: linear-gradient(to bottom, var(--cyan), rgba(0,229,255,0.1));
        }
        .exp-item { display: flex; gap: 28px; padding: 0 0 40px; position: relative; }
        .exp-dot-wrap { flex-shrink: 0; display: flex; flex-direction: column; align-items: center; }
        .exp-dot {
          width: 40px; height: 40px; border-radius: 50%; border: 2px solid;
          display: flex; align-items: center; justify-content: center; font-size: 15px;
          background: var(--bg2); flex-shrink: 0; z-index: 1;
        }
        .exp-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 18px;
          padding: 24px; flex: 1; transition: border-color .22s;
        }
        .exp-card:hover { border-color: var(--border-hover); }
        .exp-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; margin-bottom: 6px; flex-wrap: wrap; }
        .exp-role { font-family: var(--display); font-size: 16px; font-weight: 600; letter-spacing: -.15px; }
        .exp-company { font-size: 13px; color: var(--muted2); margin-bottom: 14px; display: flex; align-items: center; gap: 8px; }
        .exp-badge {
          font-size: 10px; font-weight: 700; letter-spacing: .8px; padding: 2px 8px;
          border-radius: 20px; text-transform: uppercase;
        }
        .exp-badge.freelance { background: var(--cyan-dim); color: var(--cyan); border: 1px solid rgba(0,229,255,0.15); }
        .exp-badge.contract { background: var(--green-dim); color: var(--green); border: 1px solid rgba(61,220,132,0.15); }
        .exp-period { font-size: 12px; color: var(--muted); background: var(--bg3); border: 1px solid var(--border); padding: 4px 11px; border-radius: 20px; white-space: nowrap; }
        .exp-points { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .exp-points li { display: flex; align-items: flex-start; gap: 9px; font-size: 13.5px; color: var(--muted2); line-height: 1.65; }
        .exp-points li::before { content: '→'; color: var(--cyan); flex-shrink: 0; margin-top: 1px; font-size: 13px; }

        /* ── RESUME SECTION ── */
        .resume-box {
          background: linear-gradient(135deg, var(--bg2) 0%, var(--bg3) 100%);
          border: 1px solid var(--border-cyan); border-radius: 24px; overflow: hidden;
        }
        .resume-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 0; align-items: stretch; }
        .resume-left { padding: 48px; border-right: 1px solid var(--border); }
        .resume-right { padding: 48px; display: flex; flex-direction: column; justify-content: center; }
        .resume-title { font-family: var(--display); font-size: 32px; font-weight: 700; letter-spacing: -1px; margin-bottom: 14px; }
        .resume-title span { color: var(--cyan); }
        .resume-desc { color: var(--muted2); font-size: 15px; line-height: 1.8; margin-bottom: 28px; }
        .resume-items { display: flex; flex-direction: column; gap: 12px; }
        .resume-item { display: flex; align-items: center; gap: 12px; padding: 14px 16px; background: var(--bg4); border: 1px solid var(--border); border-radius: 12px; }
        .resume-item-icon { width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 15px; flex-shrink: 0; }
        .resume-item-icon.green { background: var(--green-dim); color: var(--green); }
        .resume-item-icon.cyan { background: var(--cyan-dim); color: var(--cyan); }
        .resume-item-text .label { font-size: 10px; font-weight: 700; letter-spacing: .9px; text-transform: uppercase; color: var(--muted); margin-bottom: 2px; }
        .resume-item-text .value { font-size: 13.5px; font-weight: 500; color: var(--text); }
        .resume-download-area { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; text-align: center; height: 100%; }
        .resume-file-icon {
          width: 90px; height: 110px; background: var(--bg4);
          border: 2px solid var(--border-cyan); border-radius: 14px;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 8px; position: relative; color: var(--cyan);
        }
        .resume-file-icon::after {
          content: 'PDF'; position: absolute; bottom: -1px; left: 0; right: 0;
          background: var(--cyan); color: #000; font-size: 9px; font-weight: 800;
          letter-spacing: 1px; padding: 4px; border-radius: 0 0 12px 12px;
          font-family: var(--body);
        }
        .resume-file-icon i { font-size: 32px; }
        .resume-file-name { font-family: var(--display); font-size: 13px; font-weight: 700; color: var(--muted2); }
        .resume-download-btn {
          display: inline-flex; align-items: center; gap: 9px;
          background: var(--cyan); color: #000; border: none;
          padding: 14px 32px; border-radius: 11px; font-size: 15px;
          font-weight: 700; font-family: var(--body); cursor: pointer;
          transition: all .22s; text-decoration: none; width: 100%; justify-content: center;
        }
        .resume-download-btn:hover { background: #33eeff; transform: translateY(-2px); box-shadow: 0 12px 36px var(--cyan-glow); }
        .resume-view-btn {
          display: inline-flex; align-items: center; gap: 9px;
          background: transparent; color: var(--muted2); border: 1px solid var(--border);
          padding: 12px 32px; border-radius: 11px; font-size: 14px;
          font-weight: 500; font-family: var(--body); cursor: pointer;
          transition: all .22s; text-decoration: none; width: 100%; justify-content: center;
        }
        .resume-view-btn:hover { border-color: var(--border-cyan); color: var(--cyan); }

        /* ── CTA ── */
        .cta-box {
          background: linear-gradient(140deg, rgba(0,229,255,0.05) 0%, rgba(0,229,255,0.01) 100%);
          border: 1px solid rgba(0,229,255,0.16); border-radius: 28px;
          padding: 80px 60px; text-align: center; position: relative; overflow: hidden;
        }
        .cta-box::before {
          content: ''; position: absolute; top: -120px; left: 50%; transform: translateX(-50%);
          width: 600px; height: 350px;
          background: radial-gradient(ellipse, rgba(0,229,255,0.08) 0%, transparent 60%);
          pointer-events: none;
        }
        .cta-box h2 { font-family: var(--display); font-size: 40px; font-weight: 700; letter-spacing: -1.2px; margin-bottom: 14px; }
        .cta-box p { color: var(--muted2); font-size: 16.5px; max-width: 440px; margin: 0 auto 34px; }
        .cta-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }

        /* ── FOOTER ── */
        footer { border-top: 1px solid var(--border); padding: 44px 0; }
        .footer-inner { display: flex; justify-content: space-between; align-items: flex-start; gap: 24px; flex-wrap: wrap; }
        .footer-copy { color: var(--muted); font-size: 12.5px; margin-top: 6px; }
        .footer-domain { font-family: monospace; font-size: 11.5px; color: var(--cyan); background: var(--cyan-dim); border: 1px solid rgba(0,229,255,0.12); padding: 3px 9px; border-radius: 5px; margin-left: 6px; }
        .footer-avail { display: inline-flex; align-items: center; gap: 6px; font-size: 11.5px; color: var(--green); font-weight: 600; background: var(--green-dim); border: 1px solid rgba(61,220,132,0.18); padding: 5px 12px; border-radius: 50px; margin-top: 10px; }
        .footer-links { display: flex; gap: 6px; flex-wrap: wrap; }
        .footer-links a { color: var(--muted); text-decoration: none; font-size: 13px; padding: 8px 14px; border-radius: 9px; border: 1px solid var(--border); display: flex; align-items: center; gap: 7px; transition: all .2s; }
        .footer-links a:hover { color: var(--cyan); border-color: var(--border-cyan); background: var(--cyan-dim); }
        .footer-links a i { font-size: 14px; }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; gap: 50px; padding: 60px 0 50px; }
          h1.hero-title { font-size: 44px; }
          .services-grid, .projects-grid { grid-template-columns: 1fr; }
          h2.sec-title { font-size: 36px; }
          .resume-inner { grid-template-columns: 1fr; }
          .resume-left { border-right: none; border-bottom: 1px solid var(--border); padding: 32px; }
          .resume-right { padding: 32px; }
          .nav-links { display: none; }
          .container { padding: 0 20px; }
          .cta-box { padding: 50px 24px; }
          .cta-box h2 { font-size: 32px; }
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
            Sanket<span className="logo-dot">.dev</span>
            <span className="logo-domain">sanketthalkar.dev</span>
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
              <span className="nav-avail">
                <span className="avail-dot"></span>Open to Work
              </span>
            </li>
            <li>
              <a
                href={HIRE_MAIL}
                className="nav-links a nav-cta"
                style={{
                  background: "var(--cyan)",
                  color: "#000",
                  fontWeight: 700,
                  fontSize: 13,
                  padding: "8px 18px",
                  borderRadius: 8,
                  transition: "all .2s",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Hire Me →
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
            <div className="hero-badge">Available for Freelance Projects</div>
            {/* Custom Domain Display */}
            <div className="domain-pill">
              <i className="fa-solid fa-globe"></i>
              sanketthalkar.dev
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
            <h1 className="hero-title">
              Full Stack
              <br />
              <span className="accent">Java</span> Developer
              <br />
              for Hire
            </h1>
            <p className="hero-sub">
              3+ years building enterprise web apps with Spring Boot, Angular &
              React. Clean, scalable code — on time, every time.
            </p>
            <div className="btn-row">
              <a href={HIRE_MAIL} className="btn-primary">
                <i className="fa-solid fa-envelope"></i> Hire Me Now
              </a>
              <button
                ref={toggleRef}
                className="btn-secondary"
                onClick={() => setContactOpen((v) => !v)}
              >
                <i className="fa-solid fa-address-card"></i> Contact Me{" "}
                <i
                  className="fa-solid fa-chevron-down"
                  style={{
                    fontSize: 10,
                    transition: "transform .2s",
                    transform: contactOpen ? "rotate(180deg)" : "rotate(0)",
                  }}
                ></i>
              </button>
              <a href="#resume" className="btn-outline-green">
                <i className="fa-solid fa-file-arrow-down"></i> Resume
              </a>
            </div>

            {/* Contact Popup */}
            {contactOpen && (
              <div className="contact-popup-wrap" ref={popupRef}>
                <div className="contact-popup">
                  <div className="popup-title">Let's Talk 👋</div>
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
                    >
                      <i
                        className="fa-brands fa-whatsapp"
                        style={{ fontSize: 16 }}
                      ></i>{" "}
                      Chat on WhatsApp
                    </a>
                    <a href={HIRE_MAIL} className="popup-mail">
                      <i
                        className="fa-solid fa-envelope"
                        style={{ fontSize: 15 }}
                      ></i>{" "}
                      Send Email
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right */}
          <div
            data-aos="fade-left"
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            <div className="photo-wrap">
              <div className="photo-ring">
                <div className="photo-inner">
                  {/* Replace src with: import profile from "./assets/sanketimg.jpeg"; then use src={profile} */}
                  <img
                    src={profile}
                    alt="Sanket Thalkar"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                      borderRadius: "50%",
                      padding: "8px",
                    }}
                  />
                </div>
              </div>
              <div className="badge-float">
                <span style={{ color: "var(--green)", fontSize: 8 }}>●</span>{" "}
                Available Now
              </div>
              <div className="badge-float2">
                <i
                  className="fa-solid fa-briefcase"
                  style={{ fontSize: 10 }}
                ></i>{" "}
                3+ Yrs Exp.
              </div>
            </div>

            <div className="about-card">
              <h2>About Me</h2>
              {[
                {
                  icon: "fa-solid fa-laptop-code",
                  text: "3+ Years Experience • Freelance Full Stack Developer",
                },
                { icon: "fa-solid fa-graduation-cap", text: "MCA Graduate" },
                { icon: "fa-solid fa-location-dot", text: "Pune, Maharashtra" },
                {
                  icon: "fa-solid fa-bolt",
                  text: "Spring Boot · Angular · React Specialist",
                },
                { icon: "fa-solid fa-globe", text: "sanketthalkar.dev" },
              ].map((item) => (
                <div className="about-item" key={item.text}>
                  <div className="about-icon">
                    <i className={item.icon}></i>
                  </div>
                  {item.text}
                </div>
              ))}
              <div className="stat-grid">
                <div className="stat-box">
                  <div className="stat-num">3+</div>
                  <div className="stat-lbl">Years Exp.</div>
                </div>
                <div className="stat-box">
                  <div className="stat-num">21+</div>
                  <div className="stat-lbl">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section id="services">
        <div className="container">
          <div data-aos="fade-up">
            <span className="sec-tag">What I Offer</span>
            <h2 className="sec-title">Services</h2>
            <div className="divider"></div>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div
                className="service-card"
                key={s.title}
                data-aos="zoom-in"
                style={{ transitionDelay: `${0.04 + i * 0.05}s` }}
              >
                <div className="service-icon">
                  <i className={s.icon}></i>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills">
        <div className="container">
          <div data-aos="fade-up">
            <span className="sec-tag">Tech Stack</span>
            <h2 className="sec-title">Technical Skills</h2>
            <div className="divider"></div>
          </div>
          <div
            className="skills-wrap"
            data-aos="fade-up"
            style={{ transitionDelay: "0.1s" }}
          >
            {skills.map((s) => (
              <div className="skill-pill" key={s.name}>
                <i className={s.icon}></i>
                {s.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects">
        <div className="container">
          <div data-aos="fade-up">
            <span className="sec-tag">My Work</span>
            <h2 className="sec-title">Featured Projects</h2>
            <p className="sec-sub">
              Click any screenshot to preview the full project.
            </p>
            <div className="divider"></div>
          </div>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} p={p} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience">
        <div className="container">
          <div data-aos="fade-up">
            <span className="sec-tag">Work History</span>
            <h2 className="sec-title">Experience</h2>
            <div className="divider"></div>
          </div>
          <div className="exp-timeline">
            {experience.map((exp, i) => (
              <div
                className="exp-item"
                key={exp.role}
                data-aos="fade-up"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="exp-dot-wrap">
                  <div
                    className="exp-dot"
                    style={{ borderColor: exp.color, color: exp.color }}
                  >
                    <i
                      className="fa-solid fa-briefcase"
                      style={{ fontSize: 14 }}
                    ></i>
                  </div>
                </div>
                <div className="exp-card">
                  <div className="exp-top">
                    <div>
                      <div className="exp-role">{exp.role}</div>
                      <div className="exp-company">
                        <i
                          className="fa-solid fa-building"
                          style={{ fontSize: 12 }}
                        ></i>
                        {exp.company}
                        <span className={`exp-badge ${exp.type.toLowerCase()}`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <span className="exp-period">
                      <i
                        className="fa-solid fa-calendar-days"
                        style={{ fontSize: 11, marginRight: 5 }}
                      ></i>
                      {exp.period}
                    </span>
                  </div>
                  <ul className="exp-points">
                    {exp.points.map((pt) => (
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
            <span className="sec-tag">Download CV</span>
            <h2 className="sec-title">My Resume</h2>
            <div className="divider"></div>
          </div>
          <div className="resume-box" data-aos="zoom-in">
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
                      color: "cyan",
                      label: "Location",
                      value: "Pune, Maharashtra",
                    },
                    {
                      icon: "fa-solid fa-briefcase",
                      color: "green",
                      label: "Experience",
                      value: "3+ Years • Freelance",
                    },
                    {
                      icon: "fa-solid fa-code",
                      color: "cyan",
                      label: "Specialization",
                      value: "Spring Boot · Angular · React",
                    },
                    {
                      icon: "fa-solid fa-globe",
                      color: "green",
                      label: "Portfolio",
                      value: "sanketthalkar.dev",
                    },
                    {
                      icon: "fa-solid fa-envelope",
                      color: "cyan",
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
                        fontSize: 20,
                        fontWeight: 700,
                        letterSpacing: "-.3px",
                        marginBottom: 6,
                      }}
                    >
                      Resume Ready
                    </div>
                    <p
                      style={{
                        color: "var(--muted2)",
                        fontSize: 13.5,
                        lineHeight: 1.7,
                      }}
                    >
                      Download my latest resume to see full work history,
                      education, and technical skills in detail.
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
                    >
                      <i className="fa-solid fa-download"></i> Download Resume
                      (PDF)
                    </a>
                    <a
                      href={RESUME_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="resume-view-btn"
                    >
                      <i className="fa-solid fa-eye"></i> Preview in Browser
                    </a>
                  </div>
                  <p
                    style={{
                      fontSize: 11,
                      color: "var(--muted)",
                      textAlign: "center",
                    }}
                  >
                    Last updated · May 2026 · PDF format
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
          <div className="cta-box" data-aos="zoom-in">
            <h2>Ready to Build Something?</h2>
            <p>
              Let's work on your next ERP, billing system, REST API, or
              full-stack project.
            </p>
            <div className="cta-btns">
              <a
                href={HIRE_MAIL}
                className="btn-primary"
                style={{ fontSize: 15, padding: "15px 38px" }}
              >
                <i className="fa-solid fa-envelope"></i> Send Project Details
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ fontSize: 15, padding: "15px 38px" }}
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
                  fontSize: 20,
                  fontWeight: 800,
                  marginBottom: 2,
                }}
              >
                Sanket<span style={{ color: "var(--cyan)" }}>.dev</span>
                <span className="footer-domain">sanketthalkar.dev</span>
              </div>
              <p className="footer-copy">
                © 2026 Sanket Thalkar · Java Full Stack Developer
              </p>
              <div className="footer-avail">
                <span className="avail-dot"></span> Available for Freelance
                Projects
              </div>
            </div>
            <div className="footer-links">
              <a
                href="https://github.com/thalkar123"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sanket-thalkar-30b531194/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i> LinkedIn
              </a>
              <a href={RESUME_LINK} target="_blank" rel="noreferrer">
                <i className="fa-solid fa-file-lines"></i> Resume
              </a>
              <a href={HIRE_MAIL}>
                <i className="fa-solid fa-envelope"></i> Email
              </a>
              <a href={WA_LINK} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-whatsapp"></i> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
