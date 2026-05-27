import { useState, useEffect, useRef } from "react";

const MAIL = "thalkarsanket1428@gmail.com";
const WA_LINK = `https://wa.me/917057528416?text=Hello%20Sanket%2C%20I%20want%20to%20discuss%20a%20project%20with%20you.`;
const HIRE_MAIL = `mailto:${MAIL}?subject=Freelance%20Project%20Inquiry&body=Hello%20Sanket%2C%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20with%20you.%0D%0A%0D%0AProject%20details%3A%0D%0A`;

const skills = [
  { name: "Java", icon: "☕" },
  { name: "Spring Boot", icon: "🌱" },
  { name: "React", icon: "⚛" },
  { name: "Angular", icon: "🔺" },
  { name: "REST API", icon: "🔌" },
  { name: "Microservices", icon: "🧩" },
  { name: "MySQL", icon: "🗄" },
  { name: "Oracle", icon: "🔶" },
  { name: "JWT Security", icon: "🔐" },
  { name: "PrimeNG", icon: "🎨" },
  { name: "Hibernate", icon: "🐻" },
  { name: "JDBC", icon: "🔗" },
  { name: "JavaScript", icon: "🟡" },
  { name: "Struts", icon: "🏗" },
  { name: "JSP", icon: "📄" },
  { name: "Servlet", icon: "⚙" },
  { name: "Thymeleaf", icon: "🍃" },
  { name: "Spring Security", icon: "🛡" },
  { name: "Postman", icon: "📮" },
  { name: "GitHub", icon: "🐙" },
  { name: "SVN", icon: "📦" },
];

const projects = [
  {
    title: "Billing System",
    tag: "Inventory & GST",
    desc: "Multi-shop billing and inventory management with GST invoice generation, stock tracking, and real-time reporting dashboard.",
    tech: ["Java", "Spring Boot", "MySQL", "Angular"],
    icon: "🧾",
  },
  {
    title: "ERP Management",
    tag: "Enterprise",
    desc: "Full-featured ERP modules with secure REST APIs, role-based access control, and optimized backend architecture for large-scale enterprises.",
    tech: ["Spring Boot", "Thymeleaf", "Oracle", "JWT"],
    icon: "🏢",
  },
  {
    title: "Microservices Platform",
    tag: "Scalable Architecture",
    desc: "Scalable Spring Boot microservices architecture with API gateway, service discovery, and inter-service REST communication.",
    tech: ["Microservices", "Spring Boot", "REST API", "GitHub"],
    icon: "🧩",
  },
];

const services = [
  {
    icon: "🖥",
    title: "Full Stack Web Apps",
    desc: "End-to-end Java + React/Angular applications, from database design to UI deployment.",
  },
  {
    icon: "🔧",
    title: "REST API Development",
    desc: "Secure, scalable REST APIs with JWT authentication and comprehensive documentation.",
  },
  {
    icon: "🏭",
    title: "ERP & Billing Systems",
    desc: "Custom ERP modules, billing software, and inventory management tailored to your business.",
  },
  {
    icon: "🧱",
    title: "Microservices Architecture",
    desc: "Break down monoliths into scalable microservices with Spring Boot.",
  },
];

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [popupPos, setPopupPos] = useState({ top: 0, left: 0 });
  const btnRef = useRef(null);
  const popupRef = useRef(null);

  // Calculate popup position relative to viewport (fixed positioning)
  const openContact = () => {
    if (!contactOpen && btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setPopupPos({ top: rect.bottom + 10, left: rect.left });
    }
    setContactOpen((v) => !v);
  };

  useEffect(() => {
    function handleClick(e) {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setContactOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.08 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(MAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap');

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
          background: var(--bg);
          color: var(--text);
          font-family: var(--body);
          font-size: 16px;
          line-height: 1.7;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--cyan); border-radius: 4px; }

        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .fade-in.visible { opacity: 1; transform: translateY(0); }

        /* NAV */
        nav {
          position: sticky; top: 0; z-index: 50;
          background: rgba(5,6,8,0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
        }
        .nav-inner {
          max-width: 1160px; margin: auto; padding: 0 36px;
          height: 64px; display: flex; justify-content: space-between; align-items: center;
        }
        .logo {
          font-family: var(--display);
          font-size: 24px; font-weight: 800;
          color: var(--text); text-decoration: none;
          letter-spacing: -0.5px;
        }
        .logo span { color: var(--cyan); }
        .nav-links { display: flex; gap: 4px; align-items: center; list-style: none; }
        .nav-links a {
          color: var(--muted); text-decoration: none;
          font-size: 14px; font-weight: 500;
          padding: 7px 14px; border-radius: 8px;
          transition: color 0.2s, background 0.2s;
        }
        .nav-links a:hover { color: var(--text); background: rgba(255,255,255,0.04); }
        .nav-cta {
          background: var(--cyan) !important; color: #000 !important;
          font-weight: 700 !important; border-radius: 8px !important;
          transition: background 0.2s, transform 0.2s !important;
        }
        .nav-cta:hover { background: #33eeff !important; transform: translateY(-1px) !important; }

        /* LAYOUT */
        .container { max-width: 1160px; margin: auto; padding: 0 36px; }
        section { padding: 90px 0; }

        /* HERO */
        .hero-grid {
          display: grid; grid-template-columns: 1.15fr 0.85fr;
          gap: 72px; align-items: center;
          padding: 90px 0 80px;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--cyan-dim);
          color: var(--cyan);
          border: 1px solid rgba(0,229,255,0.18);
          padding: 7px 16px; border-radius: 50px;
          font-size: 13px; font-weight: 500;
          letter-spacing: 0.3px; margin-bottom: 24px;
          font-family: var(--body);
        }
        .hero-badge::before {
          content: ''; width: 6px; height: 6px;
          border-radius: 50%; background: var(--cyan);
          animation: blink 2s infinite;
        }
        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0.2; } }

        h1.hero-title {
          font-family: var(--display);
          font-size: 64px; font-weight: 900;
          line-height: 1.06; letter-spacing: -2.5px;
          margin-bottom: 22px;
        }
        h1.hero-title .accent { color: var(--cyan); }

        .hero-sub {
          color: var(--muted); font-size: 17px; line-height: 1.75;
          max-width: 500px; margin-bottom: 40px;
          font-weight: 400;
        }

        /* BUTTONS */
        .btn-row { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; }
        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--cyan); color: #000;
          border: none; padding: 15px 34px; border-radius: 11px;
          font-size: 15px; font-weight: 700;
          font-family: var(--body); cursor: pointer;
          transition: all 0.22s; text-decoration: none;
        }
        .btn-primary:hover {
          background: #33eeff;
          transform: translateY(-3px);
          box-shadow: 0 10px 36px var(--cyan-glow);
        }
        .btn-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: var(--text);
          border: 1px solid var(--border);
          padding: 15px 34px; border-radius: 11px;
          font-size: 15px; font-weight: 500;
          font-family: var(--body); cursor: pointer;
          transition: all 0.22s; text-decoration: none;
        }
        .btn-secondary:hover {
          border-color: var(--border-cyan); color: var(--cyan);
          transform: translateY(-3px);
        }

        /* CONTACT POPUP — fixed so it never overlaps content weirdly */
        .contact-popup {
          position: fixed;
          width: 310px;
          background: #0f1015;
          border: 1px solid rgba(0,229,255,0.22);
          border-radius: 18px;
          padding: 26px;
          box-shadow: 0 28px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,229,255,0.04);
          z-index: 9999;
          animation: popIn 0.18s cubic-bezier(0.16,1,0.3,1);
        }
        @keyframes popIn {
          from { opacity:0; transform: translateY(-10px) scale(0.96); }
          to   { opacity:1; transform: translateY(0)    scale(1); }
        }
        .popup-title {
          font-family: var(--display);
          font-size: 20px; font-weight: 700;
          margin-bottom: 18px; letter-spacing: -0.4px;
        }
        .popup-row {
          padding: 11px 0; border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .popup-row:last-of-type { border-bottom: none; }
        .popup-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.8px;
          text-transform: uppercase; color: var(--muted); margin-bottom: 4px;
        }
        .popup-val {
          font-size: 14px; color: var(--cyan); font-weight: 500;
          display: flex; align-items: center; justify-content: space-between;
        }
        .copy-btn {
          background: rgba(0,229,255,0.08); border: 1px solid rgba(0,229,255,0.15);
          color: var(--cyan); padding: 3px 10px; border-radius: 6px;
          font-size: 11px; font-weight: 600; cursor: pointer;
          transition: all 0.15s; font-family: var(--body);
        }
        .copy-btn:hover { background: rgba(0,229,255,0.18); }
        .popup-actions { margin-top: 14px; display: flex; flex-direction: column; gap: 9px; }
        .popup-wa {
          display: flex; align-items: center; gap: 9px;
          background: #128C7E; color: #fff;
          text-decoration: none; padding: 12px 18px;
          border-radius: 10px; font-weight: 600; font-size: 14px;
          font-family: var(--body); transition: all 0.2s;
        }
        .popup-wa:hover { background: #0e7166; transform: translateY(-1px); }
        .popup-mail {
          display: flex; align-items: center; gap: 9px;
          background: var(--cyan); color: #000;
          text-decoration: none; padding: 12px 18px;
          border-radius: 10px; font-weight: 700; font-size: 14px;
          font-family: var(--body); transition: all 0.2s;
        }
        .popup-mail:hover { background: #33eeff; transform: translateY(-1px); }

        /* ABOUT CARD */
        .about-card {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 22px; padding: 40px;
          position: relative; overflow: hidden;
        }
        .about-card::after {
          content: ''; position: absolute;
          top: -60px; right: -60px;
          width: 200px; height: 200px;
          background: radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 65%);
          pointer-events: none;
        }
        .about-card h2 {
          font-family: var(--display);
          font-size: 26px; font-weight: 700;
          margin-bottom: 24px; letter-spacing: -0.5px;
        }
        .about-item {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 0; border-bottom: 1px solid var(--border);
          font-size: 14px; color: #ccc;
        }
        .about-item:last-child { border-bottom: none; }
        .about-icon {
          width: 34px; height: 34px; flex-shrink: 0;
          background: var(--cyan-dim); border-radius: 8px;
          display: flex; align-items: center; justify-content: center; font-size: 15px;
        }
        .stat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 24px; }
        .stat-box {
          background: var(--bg3); border: 1px solid var(--border);
          border-radius: 12px; padding: 18px; text-align: center;
        }
        .stat-num {
          font-family: var(--display); font-size: 30px;
          font-weight: 900; color: var(--cyan); line-height: 1;
        }
        .stat-lbl {
          font-size: 11px; color: var(--muted); margin-top: 5px;
          text-transform: uppercase; letter-spacing: 0.7px; font-weight: 500;
        }

        /* SECTION HEADING */
        .sec-tag {
          display: inline-block;
          background: var(--cyan-dim); color: var(--cyan);
          font-size: 11px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; padding: 5px 13px;
          border-radius: 50px; margin-bottom: 14px;
          border: 1px solid rgba(0,229,255,0.14);
          font-family: var(--body);
        }
        h2.sec-title {
          font-family: var(--display);
          font-size: 50px; font-weight: 900;
          letter-spacing: -2px; line-height: 1.08;
          margin-bottom: 14px;
        }
        .sec-sub {
          color: var(--muted); font-size: 16px;
          max-width: 480px; margin-bottom: 52px; font-weight: 400;
        }
        .divider {
          width: 48px; height: 3px;
          background: linear-gradient(90deg, var(--cyan), transparent);
          border-radius: 2px; margin-bottom: 44px;
        }

        /* SERVICES */
        .services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .service-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 18px; padding: 30px;
          transition: border-color 0.22s, transform 0.22s;
        }
        .service-card:hover { border-color: var(--border-cyan); transform: translateY(-4px); }
        .service-icon { font-size: 30px; margin-bottom: 16px; }
        .service-card h3 {
          font-family: var(--display); font-size: 18px; font-weight: 700;
          margin-bottom: 8px; letter-spacing: -0.3px;
        }
        .service-card p { color: var(--muted); font-size: 14px; line-height: 1.7; }

        /* SKILLS */
        .skills-wrap { display: flex; flex-wrap: wrap; gap: 10px; }
        .skill-pill {
          display: flex; align-items: center; gap: 7px;
          background: var(--bg2); border: 1px solid var(--border);
          padding: 9px 18px; border-radius: 50px;
          font-size: 13px; font-weight: 500;
          transition: all 0.2s; cursor: default;
        }
        .skill-pill:hover {
          border-color: var(--border-cyan); color: var(--cyan);
          background: var(--cyan-dim); transform: translateY(-2px);
        }

        /* PROJECTS */
        .projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .project-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 20px; padding: 28px;
          transition: all 0.25s; display: flex; flex-direction: column; gap: 14px;
        }
        .project-card:hover {
          border-color: var(--border-cyan); transform: translateY(-5px);
          box-shadow: 0 16px 50px rgba(0,229,255,0.06);
        }
        .proj-icon {
          font-size: 32px; width: 56px; height: 56px;
          background: var(--cyan-dim); border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
        }
        .proj-tag {
          font-size: 10px; font-weight: 700; letter-spacing: 1px;
          text-transform: uppercase; color: var(--cyan);
          background: var(--cyan-dim); border: 1px solid rgba(0,229,255,0.13);
          padding: 4px 10px; border-radius: 50px; width: fit-content;
        }
        .project-card h3 {
          font-family: var(--display); font-size: 20px; font-weight: 700;
          letter-spacing: -0.3px;
        }
        .project-card p { color: var(--muted); font-size: 13px; line-height: 1.7; flex: 1; }
        .tech-row { display: flex; flex-wrap: wrap; gap: 7px; }
        .tech-badge {
          font-size: 11px; background: var(--bg3);
          border: 1px solid var(--border); color: var(--muted);
          padding: 3px 9px; border-radius: 5px;
        }

        /* CTA */
        .cta-box {
          background: linear-gradient(140deg, rgba(0,229,255,0.06) 0%, rgba(0,229,255,0.01) 100%);
          border: 1px solid rgba(0,229,255,0.18);
          border-radius: 26px; padding: 76px 60px; text-align: center;
          position: relative; overflow: hidden;
        }
        .cta-box::before {
          content: ''; position: absolute;
          top: -100px; left: 50%; transform: translateX(-50%);
          width: 500px; height: 300px;
          background: radial-gradient(ellipse, rgba(0,229,255,0.09) 0%, transparent 60%);
          pointer-events: none;
        }
        .cta-box h2 {
          font-family: var(--display); font-size: 44px;
          font-weight: 900; letter-spacing: -1.5px; margin-bottom: 14px;
        }
        .cta-box p { color: var(--muted); font-size: 17px; max-width: 440px; margin: 0 auto 36px; }
        .cta-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }

        /* FOOTER */
        footer { border-top: 1px solid var(--border); padding: 36px 0; }
        .footer-inner {
          display: flex; justify-content: space-between; align-items: center;
          gap: 16px; flex-wrap: wrap;
        }
        .footer-copy { color: var(--muted); font-size: 13px; }
        .footer-links { display: flex; gap: 18px; }
        .footer-links a {
          color: var(--muted); text-decoration: none;
          font-size: 13px; transition: color 0.2s;
        }
        .footer-links a:hover { color: var(--cyan); }
      `}</style>

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
          <div className="fade-in">
            <div className="hero-badge">Available for Freelance Projects</div>
            <h1 className="hero-title">
              Full Stack
              <br />
              <span className="accent">Java</span> Developer
              <br />
              for Hire
            </h1>
            <p className="hero-sub">
              2.7+ years building enterprise web apps with Spring Boot, Angular
              & React. I ship clean, scalable code — on time, every time.
            </p>
            <div className="btn-row">
              <a href={HIRE_MAIL} className="btn-primary">
                📧 Hire Me Now
              </a>

              {/* Contact toggle button */}
              <button
                ref={btnRef}
                className="btn-secondary"
                onClick={openContact}
              >
                Contact Me {contactOpen ? "▲" : "▼"}
              </button>
            </div>
          </div>

          {/* About */}
          <div
            className="about-card fade-in"
            style={{ transitionDelay: "0.15s" }}
          >
            <h2>About Me</h2>
            {[
              { icon: "💼", text: "Software Developer @ Infiniti Infosystems" },
              { icon: "🎓", text: "MCA Graduate" },
              { icon: "📍", text: "Pune, Maharashtra" },
              { icon: "⚡", text: "Spring Boot · Angular · React Specialist" },
            ].map((item) => (
              <div className="about-item" key={item.text}>
                <div className="about-icon">{item.icon}</div>
                {item.text}
              </div>
            ))}
            <div className="stat-grid">
              <div className="stat-box">
                <div className="stat-num">2.7+</div>
                <div className="stat-lbl">Years Exp.</div>
              </div>
              <div className="stat-box">
                <div className="stat-num">21</div>
                <div className="stat-lbl">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT POPUP — fixed position, never overlaps sections */}
      {contactOpen && (
        <div
          ref={popupRef}
          className="contact-popup"
          style={{ top: popupPos.top, left: popupPos.left }}
        >
          <div className="popup-title">Let's Talk 👋</div>
          <div className="popup-row">
            <div className="popup-label">Email</div>
            <div className="popup-val">
              <span>{MAIL}</span>
              <button className="copy-btn" onClick={copyEmail}>
                {copied ? "✓ Copied" : "Copy"}
              </button>
            </div>
          </div>
          <div className="popup-row">
            <div className="popup-label">Phone / WhatsApp</div>
            <div className="popup-val">+91 70575 28416</div>
          </div>
          <div className="popup-actions">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="popup-wa"
            >
              <span>💬</span> Chat on WhatsApp
            </a>
            <a href={HIRE_MAIL} className="popup-mail">
              <span>📧</span> Send Email
            </a>
          </div>
        </div>
      )}

      {/* SERVICES */}
      <section id="services">
        <div className="container">
          <div className="fade-in">
            <span className="sec-tag">What I Offer</span>
            <h2 className="sec-title">Services</h2>
            <div className="divider" />
          </div>
          <div
            className="services-grid fade-in"
            style={{ transitionDelay: "0.1s" }}
          >
            {services.map((s) => (
              <div className="service-card" key={s.title}>
                <div className="service-icon">{s.icon}</div>
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
          <div className="fade-in">
            <span className="sec-tag">Tech Stack</span>
            <h2 className="sec-title">Technical Skills</h2>
            <div className="divider" />
          </div>
          <div
            className="skills-wrap fade-in"
            style={{ transitionDelay: "0.1s" }}
          >
            {skills.map((s) => (
              <div className="skill-pill" key={s.name}>
                <span>{s.icon}</span>
                {s.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="container">
          <div className="fade-in">
            <span className="sec-tag">My Work</span>
            <h2 className="sec-title">Featured Projects</h2>
            <div className="divider" />
          </div>
          <div
            className="projects-grid fade-in"
            style={{ transitionDelay: "0.1s" }}
          >
            {projects.map((p) => (
              <div className="project-card" key={p.title}>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container">
          <div className="cta-box fade-in">
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
                📧 Send Project Details
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ fontSize: 16, padding: "16px 40px" }}
              >
                💬 WhatsApp Me
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
                  marginBottom: 5,
                }}
              >
                Sanket<span style={{ color: "var(--cyan)" }}>.dev</span>
              </div>
              <p className="footer-copy">
                © 2026 Sanket Thalkar · Java Full Stack Developer
              </p>
            </div>
            <div className="footer-links">
              <a
                href="https://github.com/thalkar123"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sanket-thalkar-30b531194/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a href={HIRE_MAIL}>Email</a>
              <a href={WA_LINK} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
