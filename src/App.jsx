import { useState, useEffect, useRef } from "react";
import profile from "./assets/sanketimg.jpeg";
const MAIL = "thalkarsanket1428@gmail.com";
const WA_LINK = `https://wa.me/917057528416?text=Hello%20Sanket%2C%20I%20want%20to%20discuss%20a%20project%20with%20you.`;
const HIRE_MAIL = `mailto:${MAIL}?subject=Freelance%20Project%20Inquiry&body=Hello%20Sanket%2C%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20with%20you.%0D%0A%0D%0AProject%20details%3A%0D%0A`;

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
  },
  {
    title: "ERP Management",
    tag: "Enterprise",
    desc: "Full-featured ERP modules with secure REST APIs, role-based access control, and optimized backend architecture for large-scale enterprises.",
    tech: ["Spring Boot", "Thymeleaf", "Oracle", "JWT"],
    icon: "🏢",
    demo: "#",
    github: "https://github.com/thalkar123",
  },
  {
    title: "Microservices Platform",
    tag: "Scalable Architecture",
    desc: "Scalable Spring Boot microservices with API gateway, service discovery, and inter-service REST communication.",
    tech: ["Microservices", "Spring Boot", "REST API", "GitHub"],
    icon: "🧩",
    demo: "#",
    github: "https://github.com/thalkar123",
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

// ─── AOS Hook ────────────────────────────────────────────────────────────────
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

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const popupRef = useRef(null);
  const toggleRef = useRef(null);

  useAOS();

  // Close popup on outside click
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

  const copyEmail = () => {
    navigator.clipboard.writeText(MAIL).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cyan: #00e5ff;
          --cyan-dim: rgba(0,229,255,0.1);
          --cyan-glow: rgba(0,229,255,0.22);
          --bg: #050608;
          --bg2: #0c0d11;
          --bg3: #111318;
          --border: rgba(255,255,255,0.07);
          --border-cyan: rgba(0,229,255,0.35);
          --text: #eef0f5;
          --muted: #7a7f8e;
          --display: 'Outfit', 'Segoe UI', system-ui, sans-serif;
          --body: 'Space Grotesk', 'Segoe UI', system-ui, sans-serif;
        }

        html { scroll-behavior: smooth; }
        body {
          background: var(--bg); color: var(--text);
          font-family: var(--body); font-size: 16px; line-height: 1.7;
          overflow-x: hidden; -webkit-font-smoothing: antialiased;
        }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--cyan); border-radius: 4px; }

        /* AOS */
        [data-aos] { opacity: 0; transform: translateY(36px); transition: opacity 0.7s cubic-bezier(.16,1,.3,1), transform 0.7s cubic-bezier(.16,1,.3,1); }
        [data-aos].aos-animate { opacity: 1; transform: translateY(0); }
        [data-aos="fade-left"] { transform: translateX(-36px); }
        [data-aos="fade-left"].aos-animate { transform: translateX(0); }
        [data-aos="fade-right"] { transform: translateX(36px); }
        [data-aos="fade-right"].aos-animate { transform: translateX(0); }
        [data-aos="zoom-in"] { transform: scale(0.88); opacity: 0; }
        [data-aos="zoom-in"].aos-animate { transform: scale(1); opacity: 1; }

        /* NAV */
        nav { position: sticky; top: 0; z-index: 50; background: rgba(5,6,8,0.9); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border); }
        .nav-inner { max-width: 1160px; margin: auto; padding: 0 36px; height: 64px; display: flex; justify-content: space-between; align-items: center; }
        .logo { font-family: var(--display); font-size: 24px; font-weight: 800; color: var(--text); text-decoration: none; letter-spacing: -.5px; }
        .logo span { color: var(--cyan); }
        .nav-links { display: flex; gap: 4px; align-items: center; list-style: none; }
        .nav-links a { color: var(--muted); text-decoration: none; font-size: 14px; font-weight: 500; padding: 7px 14px; border-radius: 8px; transition: color .2s, background .2s; }
        .nav-links a:hover { color: var(--text); background: rgba(255,255,255,0.04); }
        .nav-cta { background: var(--cyan) !important; color: #000 !important; font-weight: 700 !important; border-radius: 8px !important; transition: background .2s, transform .2s !important; }
        .nav-cta:hover { background: #33eeff !important; transform: translateY(-1px) !important; }
        .nav-avail { display: flex; align-items: center; gap: 6px; font-size: 12px; color: #3ddc84; font-weight: 600; background: rgba(61,220,132,0.08); border: 1px solid rgba(61,220,132,0.2); padding: 5px 12px; border-radius: 50px; }

        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0.2; } }
        .avail-dot { width: 6px; height: 6px; border-radius: 50%; background: #3ddc84; animation: blink 2s infinite; }

        /* LAYOUT */
        .container { max-width: 1160px; margin: auto; padding: 0 36px; }
        section { padding: 90px 0; }

        /* HERO */
        .hero-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 72px; align-items: center; padding: 90px 0 80px; }
        .hero-badge { display: inline-flex; align-items: center; gap: 8px; background: var(--cyan-dim); color: var(--cyan); border: 1px solid rgba(0,229,255,0.18); padding: 7px 16px; border-radius: 50px; font-size: 13px; font-weight: 500; letter-spacing: .3px; margin-bottom: 24px; }
        .hero-badge::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--cyan); animation: blink 2s infinite; }
        h1.hero-title { font-family: var(--display); font-size: 60px; font-weight: 900; line-height: 1.06; letter-spacing: -2.5px; margin-bottom: 22px; }
        h1.hero-title .accent { color: var(--cyan); }
        .hero-sub { color: var(--muted); font-size: 17px; line-height: 1.75; max-width: 500px; margin-bottom: 40px; font-weight: 400; }

        /* BUTTONS */
        .btn-row { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; }
        .btn-primary { display: inline-flex; align-items: center; gap: 8px; background: var(--cyan); color: #000; border: none; padding: 14px 32px; border-radius: 11px; font-size: 15px; font-weight: 700; font-family: var(--body); cursor: pointer; transition: all .22s; text-decoration: none; }
        .btn-primary:hover { background: #33eeff; transform: translateY(-3px); box-shadow: 0 10px 36px var(--cyan-glow); }
        .btn-secondary { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: var(--text); border: 1px solid var(--border); padding: 14px 32px; border-radius: 11px; font-size: 15px; font-weight: 500; font-family: var(--body); cursor: pointer; transition: all .22s; text-decoration: none; }
        .btn-secondary:hover { border-color: var(--border-cyan); color: var(--cyan); transform: translateY(-3px); }

        /* PHOTO */
        .photo-wrap { position: relative; display: flex; justify-content: center; align-items: center; margin-bottom: 20px; }
        .photo-ring { position: relative; width: 240px; height: 240px; border-radius: 50%; background: linear-gradient(135deg, var(--cyan) 0%, rgba(0,229,255,0.1) 100%); padding: 3px; }
        .photo-inner { width: 100%; height: 100%; border-radius: 50%; background: var(--bg2); display: flex; align-items: center; justify-content: center; overflow: hidden; border: 1px solid var(--border); }
        .photo-inner img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }
        .photo-placeholder { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; color: var(--muted); font-size: 12px; text-align: center; padding: 20px; }
        .badge-float { position: absolute; bottom: 10px; right: -10px; background: var(--bg2); border: 1px solid var(--border-cyan); border-radius: 12px; padding: 8px 12px; font-size: 12px; font-weight: 600; color: var(--cyan); display: flex; align-items: center; gap: 6px; white-space: nowrap; }
        .badge-float2 { position: absolute; top: 10px; left: -10px; background: var(--bg2); border: 1px solid rgba(61,220,132,0.3); border-radius: 12px; padding: 8px 12px; font-size: 12px; font-weight: 600; color: #3ddc84; display: flex; align-items: center; gap: 6px; white-space: nowrap; }

        /* CONTACT POPUP */
        .contact-popup-wrap { position: relative; margin-top: 14px; max-width: 340px; }
        .contact-popup { background: #0f1015; border: 1px solid rgba(0,229,255,0.22); border-radius: 18px; padding: 24px; box-shadow: 0 28px 80px rgba(0,0,0,0.7); animation: popIn .18s cubic-bezier(.16,1,.3,1); }
        @keyframes popIn { from { opacity:0; transform:translateY(-10px) scale(.96); } to { opacity:1; transform:translateY(0) scale(1); } }
        .popup-title { font-family: var(--display); font-size: 20px; font-weight: 700; margin-bottom: 16px; letter-spacing: -.4px; }
        .contact-cards { display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px; }
        .contact-card { background: var(--bg3); border: 1px solid var(--border); border-radius: 12px; padding: 12px 14px; display: flex; align-items: center; gap: 12px; }
        .cc-icon { width: 34px; height: 34px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 15px; flex-shrink: 0; }
        .cc-icon.email { background: rgba(0,229,255,0.12); color: var(--cyan); }
        .cc-icon.phone { background: rgba(61,220,132,0.12); color: #3ddc84; }
        .cc-icon.wa { background: rgba(18,140,126,0.15); color: #25d366; }
        .cc-label { font-size: 10px; font-weight: 600; letter-spacing: .8px; text-transform: uppercase; color: var(--muted); margin-bottom: 2px; }
        .cc-val { font-size: 12px; font-weight: 500; color: var(--text); }
        .copy-btn { background: rgba(0,229,255,0.08); border: 1px solid rgba(0,229,255,0.15); color: var(--cyan); padding: 3px 10px; border-radius: 6px; font-size: 11px; font-weight: 600; cursor: pointer; font-family: var(--body); transition: all .15s; margin-left: auto; }
        .copy-btn.copied { background: rgba(61,220,132,0.12); border-color: rgba(61,220,132,0.3); color: #3ddc84; }
        .popup-actions { display: flex; flex-direction: column; gap: 8px; }
        .popup-wa { display: flex; align-items: center; gap: 9px; background: #128C7E; color: #fff; text-decoration: none; padding: 11px 16px; border-radius: 10px; font-weight: 600; font-size: 14px; font-family: var(--body); transition: all .2s; }
        .popup-wa:hover { background: #0e7166; transform: translateY(-1px); }
        .popup-mail { display: flex; align-items: center; gap: 9px; background: var(--cyan); color: #000; text-decoration: none; padding: 11px 16px; border-radius: 10px; font-weight: 700; font-size: 14px; font-family: var(--body); transition: all .2s; }
        .popup-mail:hover { background: #33eeff; transform: translateY(-1px); }

        /* ABOUT CARD */
        .about-card { background: var(--bg2); border: 1px solid var(--border); border-radius: 22px; padding: 32px; position: relative; overflow: hidden; }
        .about-card::after { content: ''; position: absolute; top: -60px; right: -60px; width: 200px; height: 200px; background: radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 65%); pointer-events: none; }
        .about-card h2 { font-family: var(--display); font-size: 22px; font-weight: 700; margin-bottom: 20px; letter-spacing: -.5px; }
        .about-item { display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px solid var(--border); font-size: 14px; color: #ccc; }
        .about-item:last-child { border-bottom: none; }
        .about-icon { width: 32px; height: 32px; flex-shrink: 0; background: var(--cyan-dim); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 14px; color: var(--cyan); }
        .stat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 20px; }
        .stat-box { background: var(--bg3); border: 1px solid var(--border); border-radius: 12px; padding: 16px; text-align: center; }
        .stat-num { font-family: var(--display); font-size: 28px; font-weight: 900; color: var(--cyan); line-height: 1; }
        .stat-lbl { font-size: 11px; color: var(--muted); margin-top: 5px; text-transform: uppercase; letter-spacing: .7px; font-weight: 500; }

        /* SECTION HEADING */
        .sec-tag { display: inline-block; background: var(--cyan-dim); color: var(--cyan); font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; padding: 5px 13px; border-radius: 50px; margin-bottom: 14px; border: 1px solid rgba(0,229,255,0.14); font-family: var(--body); }
        h2.sec-title { font-family: var(--display); font-size: 48px; font-weight: 900; letter-spacing: -2px; line-height: 1.08; margin-bottom: 14px; }
        .sec-sub { color: var(--muted); font-size: 16px; max-width: 480px; margin-bottom: 50px; font-weight: 400; }
        .divider { width: 48px; height: 3px; background: linear-gradient(90deg, var(--cyan), transparent); border-radius: 2px; margin-bottom: 44px; }

        /* SERVICES */
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .service-card { background: var(--bg2); border: 1px solid var(--border); border-radius: 18px; padding: 28px; transition: border-color .22s, transform .22s; }
        .service-card:hover { border-color: var(--border-cyan); transform: translateY(-4px); }
        .service-icon { font-size: 28px; margin-bottom: 14px; color: var(--cyan); }
        .service-card h3 { font-family: var(--display); font-size: 17px; font-weight: 700; margin-bottom: 8px; letter-spacing: -.3px; }
        .service-card p { color: var(--muted); font-size: 13px; line-height: 1.7; }

        /* SKILLS */
        .skills-wrap { display: flex; flex-wrap: wrap; gap: 10px; }
        .skill-pill { display: flex; align-items: center; gap: 7px; background: var(--bg2); border: 1px solid var(--border); padding: 9px 18px; border-radius: 50px; font-size: 13px; font-weight: 500; transition: all .2s; cursor: default; }
        .skill-pill:hover { border-color: var(--border-cyan); color: var(--cyan); background: var(--cyan-dim); transform: translateY(-2px); }
        .skill-pill i { font-size: 14px; color: var(--cyan); }

        /* PROJECTS */
        .projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .project-card { background: var(--bg2); border: 1px solid var(--border); border-radius: 20px; padding: 26px; transition: all .25s; display: flex; flex-direction: column; gap: 12px; }
        .project-card:hover { border-color: var(--border-cyan); transform: translateY(-5px); box-shadow: 0 16px 50px rgba(0,229,255,0.06); }
        .proj-icon { font-size: 30px; width: 52px; height: 52px; background: var(--cyan-dim); border-radius: 12px; display: flex; align-items: center; justify-content: center; }
        .proj-tag { font-size: 10px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: var(--cyan); background: var(--cyan-dim); border: 1px solid rgba(0,229,255,0.13); padding: 4px 10px; border-radius: 50px; width: fit-content; }
        .project-card h3 { font-family: var(--display); font-size: 19px; font-weight: 700; letter-spacing: -.3px; }
        .project-card p { color: var(--muted); font-size: 13px; line-height: 1.7; flex: 1; }
        .tech-row { display: flex; flex-wrap: wrap; gap: 6px; }
        .tech-badge { font-size: 11px; background: var(--bg3); border: 1px solid var(--border); color: var(--muted); padding: 3px 9px; border-radius: 5px; }
        .proj-btns { display: flex; gap: 8px; margin-top: 4px; }
        .proj-btn { display: inline-flex; align-items: center; gap: 6px; padding: 7px 14px; border-radius: 8px; font-size: 12px; font-weight: 600; font-family: var(--body); cursor: pointer; text-decoration: none; transition: all .2s; border: none; }
        .proj-btn.demo { background: var(--cyan); color: #000; }
        .proj-btn.demo:hover { background: #33eeff; }
        .proj-btn.gh { background: transparent; border: 1px solid var(--border); color: var(--muted); }
        .proj-btn.gh:hover { border-color: var(--border-cyan); color: var(--cyan); }

        /* CTA */
        .cta-box { background: linear-gradient(140deg, rgba(0,229,255,0.06) 0%, rgba(0,229,255,0.01) 100%); border: 1px solid rgba(0,229,255,0.18); border-radius: 26px; padding: 72px 60px; text-align: center; position: relative; overflow: hidden; }
        .cta-box::before { content: ''; position: absolute; top: -100px; left: 50%; transform: translateX(-50%); width: 500px; height: 300px; background: radial-gradient(ellipse, rgba(0,229,255,0.09) 0%, transparent 60%); pointer-events: none; }
        .cta-box h2 { font-family: var(--display); font-size: 44px; font-weight: 900; letter-spacing: -1.5px; margin-bottom: 14px; }
        .cta-box p { color: var(--muted); font-size: 17px; max-width: 440px; margin: 0 auto 34px; }
        .cta-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }

        /* FOOTER */
        footer { border-top: 1px solid var(--border); padding: 40px 0; }
        .footer-inner { display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; }
        .footer-copy { color: var(--muted); font-size: 13px; }
        .footer-avail { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; color: #3ddc84; font-weight: 600; background: rgba(61,220,132,0.08); border: 1px solid rgba(61,220,132,0.2); padding: 5px 12px; border-radius: 50px; margin-top: 8px; }
        .footer-links { display: flex; gap: 6px; flex-wrap: wrap; }
        .footer-links a { color: var(--muted); text-decoration: none; font-size: 13px; padding: 7px 14px; border-radius: 8px; border: 1px solid var(--border); display: flex; align-items: center; gap: 6px; transition: all .2s; }
        .footer-links a:hover { color: var(--cyan); border-color: var(--border-cyan); background: var(--cyan-dim); }
        .footer-links a i { font-size: 15px; }
      `}</style>

      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />

      {/* NAV */}
      <nav>
        <div className="nav-inner">
          <a href="#home" className="logo">
            Sanket<span>.dev</span>
          </a>
          <ul className="nav-links">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <span className="nav-avail">
                <span className="avail-dot"></span>Open to Work
              </span>
            </li>
            <li>
              <a href={HIRE_MAIL} className="nav-cta">
                Hire Me →
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <div id="home" className="container">
        <div className="hero-grid">
          {/* Left */}
          <div data-aos="fade-right">
            <div className="hero-badge">Available for Freelance Projects</div>
            <h1 className="hero-title">
              Full Stack
              <br />
              <span className="accent">Java</span> Developer
              <br />
              for Hire
            </h1>
            <p className="hero-sub">
              2+ years building enterprise web apps with Spring Boot, Angular &
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
                    fontSize: 11,
                    transition: "transform .2s",
                    transform: contactOpen ? "rotate(180deg)" : "rotate(0)",
                  }}
                ></i>
              </button>
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

          {/* Right — Photo + About */}
          <div
            data-aos="fade-left"
            style={{ display: "flex", flexDirection: "column", gap: 22 }}
          >
            {/* Photo */}
            <div className="photo-wrap">
              <div className="photo-ring">
                <div className="photo-inner">
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
                <span style={{ color: "#3ddc84" }}>●</span> Available Now
              </div>
              <div className="badge-float2">
                <i
                  className="fa-solid fa-briefcase"
                  style={{ fontSize: 11 }}
                ></i>
                2+ Yrs Exp.
              </div>
            </div>

            {/* About */}
            <div className="about-card">
              <h2>About Me</h2>
              {[
                {
                  icon: "fa-solid fa-building",
                  text: "Software Developer @ Infiniti Infosystems",
                },
                { icon: "fa-solid fa-graduation-cap", text: "MCA Graduate" },
                { icon: "fa-solid fa-location-dot", text: "Pune, Maharashtra" },
                {
                  icon: "fa-solid fa-bolt",
                  text: "Spring Boot · Angular · React Specialist",
                },
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
                  <div className="stat-num">2+</div>
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

      {/* SERVICES */}
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
                style={{ transitionDelay: `${0.05 + i * 0.05}s` }}
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

      {/* SKILLS */}
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

      {/* PROJECTS */}
      <section id="projects">
        <div className="container">
          <div data-aos="fade-up">
            <span className="sec-tag">My Work</span>
            <h2 className="sec-title">Featured Projects</h2>
            <div className="divider"></div>
          </div>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <div
                className="project-card"
                key={p.title}
                data-aos="zoom-in"
                style={{ transitionDelay: `${0.05 + i * 0.05}s` }}
              >
                <div className="proj-icon">{p.icon}</div>
                <div className="proj-tag">{p.tag}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="tech-row">
                  {p.tech.map((t) => (
                    <span className="tech-badge" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="proj-btns">
                  <a href={p.demo} className="proj-btn demo">
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
                    <i
                      className="fa-brands fa-github"
                      style={{ fontSize: 13 }}
                    ></i>
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
                style={{ fontSize: 16, padding: "16px 40px" }}
              >
                <i className="fa-solid fa-envelope"></i> Send Project Details
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ fontSize: 16, padding: "16px 40px" }}
              >
                <i className="fa-brands fa-whatsapp"></i> WhatsApp Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-inner">
            <div>
              <div
                style={{
                  fontFamily: "var(--display)",
                  fontSize: 20,
                  fontWeight: 800,
                  marginBottom: 4,
                }}
              >
                Sanket<span style={{ color: "var(--cyan)" }}>.dev</span>
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
