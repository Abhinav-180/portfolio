import { useEffect, useRef, useState } from "react";
import {
  Github, Linkedin, Mail, Globe, Folder,
  ArrowRight, MoreHorizontal, FileText,
} from "lucide-react";

/* ═══════════════════════════════════════════════════
   HOOKS & UTILITIES
   ═══════════════════════════════════════════════════ */

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Section({ children, first = false, id }) {
  return (
    <section
      id={id}
      style={{
        borderTop: first ? "none" : "1px solid #E7E4DB",
        padding: "56px 0",
        scrollMarginTop: 80,
      }}
    >
      {children}
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   PROJECT DATA
   ═══════════════════════════════════════════════════ */

const CATEGORIES = [
  {
    label: "Web Development",
    color: "#0EA5B7",
    cols: 3,
    projects: [
      {
        eyebrow: "Full-Stack Application",
        sub: "MERN Stack · Role-based hiring platform",
        title: "Job Portal",
        desc: "A scalable job portal connecting seekers and recruiters with RBAC, real-time applicant tracking, JWT auth, and Cloudinary-powered media uploads.",
        stack: ["React.js", "Redux", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
        links: [
          { type: "live", href: "https://job-portal-zeta-orcin.vercel.app" },
          { type: "github", href: "https://github.com/Abhinav-180/job-portal" },
        ],
      },
      {
        eyebrow: "AI-Powered Tool",
        sub: "Gemini API · Prompt pipeline · Version control",
        title: "AI Website Builder",
        desc: "Generates production-ready websites from natural language prompts using Gemini API, with a multi-step prompt pipeline and version control for design iterations.",
        stack: ["React 19", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Gemini API"],
        links: [
          { type: "live", href: "https://ai-website-builder-topaz.vercel.app/" },
          { type: "github", href: "https://github.com/Abhinav-180/ai-website-builder" },
        ],
      },
      {
        eyebrow: "Real-Time Application",
        sub: "MERN + Socket.io · Private messaging",
        title: "MERN Chat App",
        desc: "Real-time chat app with Socket.io enabling bi-directional messaging, typing indicators, online/offline presence, and Cloudinary media sharing with a responsive dark-themed UI.",
        stack: ["React.js", "Node.js", "MongoDB", "Socket.io", "JWT", "Tailwind CSS"],
        links: [
          { type: "github", href: "https://github.com/Abhinav-180/chat_app" },
        ],
      },
    ],
  },
  {
    label: "Generative AI",
    color: "#8B5CF6",
    cols: 2,
    projects: [
      {
        eyebrow: "Multi-Agent System",
        sub: "LangChain · Tavily · Automated research",
        title: "ResearchMind",
        desc: "An intelligent multi-agent research assistant that searches the web, reads source pages, writes structured reports, and critiques the output — powered by LangChain, Tavily, and Mistral AI.",
        stack: ["Python", "LangChain", "Mistral AI", "Tavily", "Streamlit"],
        links: [
          { type: "live", href: "https://research-mind-4vcvgdnejo6x6mrqnjcfuf.streamlit.app/" },
          { type: "github", href: "https://github.com/Abhinav-180/Research-Mind" },
        ],
      },
      {
        eyebrow: "RAG Application",
        sub: "Whisper · ChromaDB · Video Q&A",
        title: "AI Video Assistant",
        desc: "An end-to-end AI meeting assistant that transcribes videos using OpenAI Whisper, with RAG-powered conversational Q&A over transcripts using ChromaDB and Mistral AI.",
        stack: ["Python", "LangChain", "Whisper", "ChromaDB", "Mistral AI", "Streamlit"],
        links: [
          { type: "live", href: "https://ai-video-assistant-mvavfu6dtwkxt9ay6qcfhf.streamlit.app/" },
          { type: "github", href: "https://github.com/Abhinav-180/AI-Video-Assistant" },
        ],
      },
    ],
  },
  {
    label: "Machine Learning",
    color: "#16A34A",
    cols: 2,
    projects: [
      {
        eyebrow: "End-to-End ML Pipeline",
        sub: "K-Means · XGBoost · RFM Analysis",
        title: "Customer Segmentation & Churn Prediction",
        desc: "Segments e-commerce customers using RFM analysis + K-Means clustering, then predicts churn with a time-based approach preventing data leakage — achieving 81.4% recall with XGBoost.",
        stack: ["Python", "pandas", "scikit-learn", "XGBoost", "matplotlib", "seaborn"],
        links: [
          { type: "github", href: "https://github.com/Abhinav-180/-Customer-Segmentation-Churn-Prediction" },
        ],
      },
      {
        eyebrow: "Computer Vision",
        sub: "YOLOv8 · Object Detection · Streamlit",
        title: "Safety Equipment Detection",
        desc: "Automated detection of safety equipment (fire extinguishers, oxygen tanks, first aid kits) using YOLOv8 trained with T4 GPU, deployed via Streamlit.",
        stack: ["Python", "YOLOv8", "Streamlit", "Google Colab"],
        links: [
          { type: "github", href: "#" },
        ],
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════
   SKILLS DATA
   Order: Languages → Frontend → Backend → Gen AI → AI/ML → Tools
   ═══════════════════════════════════════════════════ */

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const DI2 = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const SKILLS = [
  {
    group: "Languages",
    color: "#D97706",
    items: [
      { name: "C/C++", icon: `${DI}/cplusplus/cplusplus-original.svg` },
      { name: "JavaScript", icon: `${DI}/javascript/javascript-original.svg` },
      { name: "TypeScript", icon: `${DI}/typescript/typescript-original.svg` },
      { name: "Python", icon: `${DI}/python/python-original.svg` },
      { name: "Java", icon: `${DI}/java/java-original.svg` },
      { name: "SQL", icon: `${DI2}/azuresqldatabase/azuresqldatabase-original.svg` },
    ],
  },
  {
    group: "Frontend",
    color: "#2563EB",
    items: [
      { name: "React.js", icon: `${DI}/react/react-original.svg` },
      { name: "Redux", icon: `${DI}/redux/redux-original.svg` },
      { name: "Tailwind CSS", icon: `${DI2}/tailwindcss/tailwindcss-original.svg` },
      { name: "Streamlit", icon: `${DI2}/streamlit/streamlit-original.svg` },
      { name: "HTML5", icon: `${DI}/html5/html5-original.svg` },
      { name: "shadcn/ui", icon: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4" },
    ],
  },
  {
    group: "Backend",
    color: "#0EA5B7",
    items: [
      { name: "Node.js", icon: `${DI}/nodejs/nodejs-original.svg` },
      { name: "Express.js", icon: `${DI}/express/express-original.svg` },
      { name: "MongoDB", icon: `${DI}/mongodb/mongodb-original.svg` },
      { name: "PostgreSQL", icon: `${DI}/postgresql/postgresql-original.svg` },
      { name: "REST API", icon: null },
      { name: "Socket.io", icon: `${DI2}/socketio/socketio-original.svg` },
    ],
  },
  {
    group: "Gen AI",
    color: "#8B5CF6",
    items: [
      { name: "LangChain", icon: null },
      { name: "RAG", icon: null },
      { name: "OpenAI", icon: null },
      { name: "Mistral AI", icon: null },
      { name: "Prompt Engineering", icon: null },
    ],
  },
  {
    group: "AI / ML",
    color: "#059669",
    items: [
      { name: "scikit-learn", icon: null },
      { name: "XGBoost", icon: null },
      { name: "YOLOv8", icon: null },
      { name: "seaborn", icon: null },
      { name: "pandas", icon: null },
    ],
  },
  {
    group: "Dev Tools",
    color: "#DB2777",
    items: [
      { name: "Git", icon: `${DI}/git/git-original.svg` },
      { name: "GitHub", icon: `${DI}/github/github-original.svg` },
      { name: "Vercel", icon: `${DI2}/vercel/vercel-original.svg` },
      { name: "Vite", icon: `${DI}/vitejs/vitejs-original.svg` },
      { name: "Postman", icon: `${DI2}/postman/postman-original.svg` },
    ],
  },
];

/* ═══════════════════════════════════════════════════
   SMALL HELPER COMPONENTS
   ═══════════════════════════════════════════════════ */

function initials(name) {
  return name
    .split(/[.\s]/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function LetterBadge({ name, color, size = 22 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 6,
        background: `${color}1F`,
        color,
        fontSize: size * 0.45,
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {initials(name)}
    </div>
  );
}

function SkillBadge({ name, color, icon }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      {icon ? (
        <img
          src={icon}
          alt={name}
          style={{ width: 22, height: 22, flexShrink: 0 }}
          onError={(e) => { e.target.style.display = "none"; }}
        />
      ) : (
        <LetterBadge name={name} color={color} />
      )}
      <span style={{ fontSize: 14, color: "#3A3830" }}>{name}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   PROJECT CARD  — plain text stack tags
   ═══════════════════════════════════════════════════ */

function ProjectCard({ p, color }) {
  return (
    <div
      className="project-card"
      style={{
        background: "#F1EFE8",
        border: "1px solid #E7E4DB",
        borderRadius: 16,
        padding: "20px 20px 18px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 10,
          fontWeight: 500,
          color,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          margin: "0 0 3px",
        }}
      >
        {p.eyebrow}
      </p>
      <p
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 10,
          color: "#9A968A",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          margin: "0 0 14px",
        }}
      >
        {p.sub}
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
        <Folder size={16} color={color} />
        <h4
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: 17,
            fontWeight: 700,
            color: "#1A1A1A",
            margin: 0,
          }}
        >
          {p.title}
        </h4>
      </div>

      <p style={{ fontSize: 13, lineHeight: 1.6, color: "#5A5850", margin: "0 0 16px", flex: 1 }}>
        {p.desc}
      </p>

      <div
        style={{
          borderTop: "1px solid #E0DDD2",
          paddingTop: 12,
          marginBottom: 14,
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
        }}
      >
        {p.stack.map((s) => (
          <span
            key={s}
            style={{
              fontSize: 11,
              color: "#3A3830",
              background: "#FFFFFF",
              border: "1px solid #E0DDD2",
              borderRadius: 999,
              padding: "4px 10px",
            }}
          >
            {s}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        {p.links.map((l) => (
          <a
            key={l.type}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-btn"
            title={l.type === "live" ? "Live Demo" : "Source Code"}
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: "#FFFFFF",
              border: "1px solid #E0DDD2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color,
              textDecoration: "none",
            }}
          >
            {l.type === "live" ? <Globe size={14} /> : <Github size={14} />}
          </a>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   CYCLING HEADLINE  (footer)
   ═══════════════════════════════════════════════════ */

const CYCLE_WORDS = ["build", "create", "design", "ship"];

function CyclingHeadline() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % CYCLE_WORDS.length);
        setFade(true);
      }, 280);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <h2
      className="footer-heading"
      style={{
        fontFamily: "Space Grotesk, sans-serif",
        fontWeight: 700,
        fontSize: 44,
        lineHeight: 1.15,
        color: "#F4F2EC",
        margin: "0 0 6px",
      }}
    >
      Let&rsquo;s{" "}
      <span
        style={{
          display: "inline-block",
          opacity: fade ? 1 : 0,
          transform: fade ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.28s ease, transform 0.28s ease",
          color: "#9A988F",
        }}
      >
        {CYCLE_WORDS[index]}
      </span>
    </h2>
  );
}

/* ═══════════════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════════════ */

function Navbar() {
  const [compact, setCompact] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 60) setCompact(false);
      else if (y > lastY.current) setCompact(true);
      else setCompact(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
  ];

  return (
    <nav
      onClick={() => compact && setCompact(false)}
      style={{
        position: "fixed",
        top: 16,
        left: "50%",
        transform: "translateX(-50%)",
        background: "#FFFFFF",
        border: "1px solid #ECE9DF",
        borderRadius: 999,
        boxShadow: "0 8px 24px -10px rgba(0,0,0,0.12)",
        padding: compact ? "8px 10px 8px 18px" : "10px 12px 10px 20px",
        display: "flex",
        alignItems: "center",
        gap: compact ? 0 : 32,
        cursor: compact ? "pointer" : "default",
        zIndex: 50,
        transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
        whiteSpace: "nowrap",
      }}
    >
      <a
        href="#"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontFamily: "Space Grotesk, sans-serif",
          fontWeight: 700,
          fontSize: 15,
          textDecoration: "none",
          color: "#141414",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L4.09 12.11C3.69 12.59 3.89 13.34 4.47 13.55L10.47 15.89C10.85 16.03 11.08 16.41 11.03 16.82L10.12 22.87C10.01 23.56 10.88 23.97 11.33 23.43L20.91 12.39C21.31 11.91 21.11 11.16 20.53 10.95L14.53 8.61C14.15 8.47 13.92 8.09 13.97 7.68L14.88 1.63C14.99 0.94 14.12 0.53 13.67 1.07L13 2Z" fill="#141414"/>
        </svg>
        Abhinav Singh Vatsa
      </a>

      {compact ? (
        <MoreHorizontal size={18} color="#8A8880" style={{ marginLeft: 14 }} />
      ) : (
        <>
          <div
            className="nav-links"
            style={{ display: "flex", gap: 26, fontSize: 14, color: "#5A5850" }}
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="nav-link"
                style={{ color: "#5A5850", textDecoration: "none" }}
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="nav-contact"
            style={{
              background: "#F1EFE8",
              border: "1px solid #E7E4DB",
              borderRadius: 999,
              padding: "8px 18px",
              fontSize: 14,
              fontWeight: 500,
              color: "#141414",
              textDecoration: "none",
            }}
          >
            Contact
          </a>
        </>
      )}
    </nav>
  );
}

/* ═══════════════════════════════════════════════════
   ANIMATED COUNTER  — for stats
   ═══════════════════════════════════════════════════ */

function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useReveal();

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 1200;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN APP
   ═══════════════════════════════════════════════════ */

export default function App() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "21d6d69a-6f0a-4f58-bf56-36a6d765f861",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        }),
      });
      if (res.ok) {
        setSent(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 3000);
      }
    } catch {
      // fallback to mailto
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:abhinavsingh180904@gmail.com?subject=${subject}&body=${body}`;
    }
    setSending(false);
  };

  return (
    <div
      style={{
        background: "#FAF9F6",
        color: "#141414",
        fontFamily: "Inter, sans-serif",
        width: "100%",
      }}
    >
      <Navbar />

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ height: 84 }} />

        {/* ──────────────── HERO ──────────────── */}
        <Section first>
          <div
            className="hero-grid"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 48,
            }}
          >
            {/* LEFT — copy */}
            <div style={{ flex: 1 }}>
              <Reveal delay={60}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 22,
                  }}
                >
                  <div className="pulse-dot"
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#16A34A",
                      boxShadow: "0 0 6px rgba(22,163,74,0.5)",
                    }}
                  />
                  <span style={{ fontSize: 13, color: "#8A8880" }}>
                    Open to opportunities
                  </span>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <h1
                  className="hero-heading"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 700,
                    fontSize: 48,
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    margin: "0 0 22px",
                  }}
                >
                  Abhinav Singh{" "}
                  <span style={{ display: "block", color: "#5A5850" }}>Vatsa</span>
                </h1>
              </Reveal>

              <Reveal delay={180}>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.7,
                    color: "#5A5850",
                    maxWidth: 480,
                    marginBottom: 28,
                  }}
                >
                  Passionate{" "}
                  <strong style={{ color: "#141414" }}>Full Stack Developer</strong> with growing
                  expertise in{" "}
                  <strong style={{ color: "#8B5CF6" }}>Generative AI</strong> and{" "}
                  <strong style={{ color: "#16A34A" }}>Machine Learning</strong>. Building
                  production apps and intelligent systems while pursuing B.Tech in Computer Science.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a
                    href="/ResumeGenai.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      background: "#141414",
                      color: "#FAF9F6",
                      borderRadius: 999,
                      padding: "12px 22px",
                      fontSize: 14,
                      fontWeight: 500,
                      textDecoration: "none",
                    }}
                  >
                    <FileText size={15} /> View Resume
                  </a>
                  <a
                    href="#contact"
                    className="cta-btn"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      background: "#FFFFFF",
                      color: "#141414",
                      border: "1px solid #E0DED4",
                      borderRadius: 999,
                      padding: "12px 22px",
                      fontSize: 14,
                      fontWeight: 500,
                      textDecoration: "none",
                    }}
                  >
                    <Mail size={15} /> Get In Touch
                  </a>
                </div>
              </Reveal>

              {/* Quick stats with animated counters */}
              <Reveal delay={320}>
                <div
                  style={{
                    display: "flex",
                    gap: 32,
                    marginTop: 32,
                    paddingTop: 24,
                    borderTop: "1px solid #E7E4DB",
                  }}
                >
                  {[
                    { num: 7, suffix: "+", label: "Projects Built" },
                    { num: 500, suffix: "+", label: "DSA Problems" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p
                        style={{
                          fontFamily: "Space Grotesk, sans-serif",
                          fontSize: 26,
                          fontWeight: 700,
                          color: "#141414",
                          margin: "0 0 2px",
                        }}
                      >
                        <AnimatedCounter target={stat.num} suffix={stat.suffix} />
                      </p>
                      <p style={{ fontSize: 12, color: "#8A8880", margin: 0 }}>
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* RIGHT — rounded rectangle profile image (Austin Serb style) */}
            <Reveal delay={200}>
              <div className="profile-float">
                <div
                  className="hero-image-wrap profile-ring"
                  style={{
                    width: 260,
                    height: 260,
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "4px solid #E7E4DB",
                    boxShadow: "0 20px 60px -15px rgba(0,0,0,0.15)",
                    flexShrink: 0,
                    background: "#E7E4DC",
                  }}
                >
                  <img
                    src="/img2.jpeg"
                    alt="Abhinav Singh Vatsa"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 20%",
                    }}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* ──────────────── ABOUT ──────────────── */}
        <Section id="about">
          <Reveal>
            <p style={{ fontSize: 13, color: "#8A8880", marginBottom: 16 }}>About</p>
          </Reveal>
          <Reveal delay={80}>
            <div
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "#3A3830",
                maxWidth: 680,
              }}
            >
              <p style={{ marginBottom: 16 }}>
                I&rsquo;m a pre-final year Computer Science student at{" "}
                <strong>Indian Institute of Information Technology, Kalyani</strong> with a deep
                passion for turning ideas into working software. My journey spans full-stack web
                development — building production apps with the MERN stack — to Generative AI,
                where I&rsquo;ve created multi-agent systems with LangChain and RAG architectures.
              </p>
              <p style={{ marginBottom: 16 }}>
                I&rsquo;ve shipped <strong>5+ production projects</strong>, from a job portal
                handling real-time hiring workflows to AI-powered research assistants that automate
                entire pipelines. On the ML side, I build models on real-world e-commerce datasets
                that drive actionable business insights like customer segmentation and churn
                prediction.
              </p>
              <p>
                When I&rsquo;m not building, I sharpen my problem-solving skills —{" "}
                <strong>500+ DSA problems solved</strong> across LeetCode, GeeksforGeeks, and
                CodeChef. I competed in the <strong>StatusCode 1 Hackathon</strong> for rapid web
                prototyping and I&rsquo;m always exploring new papers on LLM orchestration and RAG
                architectures.
              </p>
            </div>
          </Reveal>
        </Section>

        {/* ──────────────── PROJECTS ──────────────── */}
        <Section id="projects">
          <Reveal>
            <p style={{ fontSize: 13, color: "#8A8880", marginBottom: 32 }}>Selected work</p>
          </Reveal>

          {CATEGORIES.map((cat, ci) => (
            <div
              key={cat.label}
              style={{ marginBottom: ci === CATEGORIES.length - 1 ? 0 : 40 }}
            >
              <Reveal delay={ci * 40}>
                <h3
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: 15,
                    fontWeight: 700,
                    marginBottom: 16,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 3,
                      background: cat.color,
                      flexShrink: 0,
                    }}
                  />
                  {cat.label}
                </h3>
              </Reveal>

              <div
                className="projects-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${cat.cols}, 1fr)`,
                  gap: 16,
                }}
              >
                {cat.projects.map((p, pi) => (
                  <Reveal delay={ci * 40 + pi * 60} key={p.title}>
                    <ProjectCard p={p} color={cat.color} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </Section>

        {/* ──────────────── SKILLS ──────────────── */}
        <Section id="skills">
          <Reveal>
            <p style={{ fontSize: 13, color: "#8A8880", marginBottom: 24 }}>Skills &amp; Technologies</p>
          </Reveal>

          <div
            className="skills-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
            }}
          >
            {SKILLS.map((group, gi) => (
              <Reveal delay={gi * 50} key={group.group}>
                <div
                  className="skill-card"
                  style={{
                    background: "#F1EFE8",
                    borderRadius: 12,
                    padding: 18,
                    border: "1px solid #E7E4DB",
                    height: "100%",
                  }}
                >
                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: "#8A8880",
                      marginBottom: 14,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {group.group}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {group.items.map((item) => (
                      <SkillBadge
                        key={item.name}
                        name={item.name}
                        color={group.color}
                        icon={item.icon}
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ──────────────── CONTACT (working form) ──────────────── */}
        <Section id="contact">
          <Reveal>
            <div
              className="contact-card"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E7E4DB",
                borderRadius: 20,
                padding: "40px 40px",
              }}
            >
              <div style={{ textAlign: "center", marginBottom: 32 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    marginBottom: 22,
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 10,
                      overflow: "hidden",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src="/img2.jpeg"
                      alt="Abhinav"
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" }}
                    />
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <p style={{ fontSize: 14, fontWeight: 500, margin: 0 }}>Abhinav Singh Vatsa</p>
                    <p style={{ fontSize: 12, color: "#8A8880", margin: 0 }}>
                      Full-Stack Developer &middot; AI/ML
                    </p>
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: 26,
                    fontWeight: 700,
                    margin: "0 0 4px",
                  }}
                >
                  Building something amazing?
                </h3>
                <h3
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: 26,
                    fontWeight: 700,
                    margin: "0 0 16px",
                    color: "#7C8CA8",
                  }}
                >
                  Let&rsquo;s chat.
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: "#5A5850",
                    maxWidth: 460,
                    margin: "0 auto",
                  }}
                >
                  I build fast, accessible web apps with React, Node.js, and applied AI. Open to
                  internships, freelance projects, and full-time roles where I can make an impact.
                </p>
              </div>

              {/* Working contact form */}
              <form onSubmit={handleSubmit}>
                <div
                  className="form-row"
                  style={{ display: "flex", gap: 12, marginBottom: 14, flexWrap: "wrap" }}
                >
                  <div style={{ flex: 1, minWidth: 140 }}>
                    <label
                      style={{
                        display: "block",
                        fontSize: 11,
                        color: "#9A968A",
                        marginBottom: 6,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                      style={{
                        width: "100%",
                        background: "#F7F5EF",
                        border: "1px solid #E7E4DB",
                        borderRadius: 8,
                        height: 40,
                        padding: "0 12px",
                        fontSize: 13,
                        color: "#3A3830",
                        outline: "none",
                        fontFamily: "Inter, sans-serif",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                  <div style={{ flex: 1, minWidth: 140 }}>
                    <label
                      style={{
                        display: "block",
                        fontSize: 11,
                        color: "#9A968A",
                        marginBottom: 6,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                      style={{
                        width: "100%",
                        background: "#F7F5EF",
                        border: "1px solid #E7E4DB",
                        borderRadius: 8,
                        height: 40,
                        padding: "0 12px",
                        fontSize: 13,
                        color: "#3A3830",
                        outline: "none",
                        fontFamily: "Inter, sans-serif",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                </div>
                <div style={{ marginBottom: 14 }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: 11,
                      color: "#9A968A",
                      marginBottom: 6,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="Let's discuss opportunities..."
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-input"
                    style={{
                      width: "100%",
                      background: "#F7F5EF",
                      border: "1px solid #E7E4DB",
                      borderRadius: 8,
                      padding: "10px 12px",
                      fontSize: 13,
                      color: "#3A3830",
                      outline: "none",
                      fontFamily: "Inter, sans-serif",
                      resize: "vertical",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="send-btn"
                  disabled={sending}
                  style={{
                    width: "100%",
                    background: sent ? "#16A34A" : "#141414",
                    color: "#FAF9F6",
                    border: "none",
                    borderRadius: 8,
                    padding: "12px 0",
                    fontSize: 14,
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    cursor: sending ? "wait" : "pointer",
                    marginBottom: 24,
                    transition: "background 0.3s ease",
                  }}
                >
                  {sent ? "✓ Opening mail client..." : sending ? "Sending..." : <>Send message <ArrowRight size={14} /></>}
                </button>
              </form>

              {/* social CTA buttons */}
              <div
                className="contact-buttons"
                style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}
              >
                <a
                  href="mailto:abhinavsingh180904@gmail.com"
                  className="social-btn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#141414",
                    color: "#FAF9F6",
                    borderRadius: 999,
                    padding: "10px 20px",
                    fontSize: 14,
                    fontWeight: 500,
                    textDecoration: "none",
                  }}
                >
                  <Mail size={15} /> Email me
                </a>
                <a
                  href="https://www.linkedin.com/in/abhinav-singh-9b5006318/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#FFFFFF",
                    color: "#141414",
                    border: "1px solid #E0DED4",
                    borderRadius: 999,
                    padding: "10px 20px",
                    fontSize: 14,
                    fontWeight: 500,
                    textDecoration: "none",
                  }}
                >
                  <Linkedin size={15} /> LinkedIn
                </a>
                <a
                  href="https://github.com/Abhinav-180"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#FFFFFF",
                    color: "#141414",
                    border: "1px solid #E0DED4",
                    borderRadius: 999,
                    padding: "10px 20px",
                    fontSize: 14,
                    fontWeight: 500,
                    textDecoration: "none",
                  }}
                >
                  <Github size={15} /> GitHub
                </a>
              </div>
            </div>
          </Reveal>
        </Section>
      </div>

      {/* ══════════════════════════════════════════════
          FOOTER
          ══════════════════════════════════════════════ */}
      <div style={{ background: "#0A0A0A", padding: "72px 24px 0", overflow: "hidden" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal>
            <CyclingHeadline />
          </Reveal>
          <Reveal delay={60}>
            <h2
              className="footer-heading"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 700,
                fontSize: 44,
                lineHeight: 1.15,
                color: "#5A5850",
                margin: "0 0 48px",
              }}
            >
              incredible work together.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div style={{ marginBottom: 32 }}>
              <p style={{ fontSize: 12, color: "#7A7A7A", margin: "0 0 6px" }}>Email</p>
              <p style={{ fontSize: 15, color: "#F4F2EC", margin: 0 }}>
                abhinavsingh180904@gmail.com
              </p>
            </div>
          </Reveal>

          <div style={{ borderTop: "1px solid #232323", paddingTop: 24 }}>
            <Reveal delay={140}>
              <div style={{ display: "flex", gap: 24, marginBottom: 24 }}>
                {["Home", "Projects", "About", "Contact"].map((label) => (
                  <a
                    key={label}
                    href={label === "Home" ? "#" : `#${label.toLowerCase()}`}
                    className="nav-link"
                    style={{ color: "#F4F2EC", textDecoration: "none", fontSize: 14 }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div style={{ marginBottom: 48 }}>
                <p style={{ fontSize: 12, color: "#5A5850", margin: 0, textAlign: "right" }}>
                  &copy; {new Date().getFullYear()} Abhinav Singh Vatsa
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={180}>
            <div style={{ overflow: "hidden" }}>
              <h2
                className="footer-giant-name"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(60px, 11vw, 130px)",
                  lineHeight: 1,
                  color: "#F4F2EC",
                  margin: 0,
                  whiteSpace: "nowrap",
                  letterSpacing: "-0.03em",
                  transform: "translateY(25%)",
                }}
              >
                Abhinav Singh
              </h2>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
