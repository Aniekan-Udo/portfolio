import React, { useState, useEffect, useRef } from "react";
import { Mail, ArrowUpRight } from "lucide-react";

/* Brand icons drawn inline — lucide-react dropped logo/brand icons in
   newer versions, so these avoid depending on package version. */
function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.56A10.53 10.53 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
  );
}
function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

/* ---------------------------------------------------------------------- */
/* Content                                                                 */
/* ---------------------------------------------------------------------- */

const CONTACT = {
  name: "Aniekan Udo",
  email: "aniekanudo476@gmail.com",
  linkedin: "https://www.linkedin.com/in/udo-aniekan-90bb00190/",
  github: "https://github.com/Aniekan-Udo",
};

const BOOT_LINES = [
  "$ whoami",
  "aniekan_udo — ai / genai engineer, lagos ng",
  "$ status --check",
  "3.5y production experience — mlops · genai · backend",
  "$ ls ./systems",
  "fraud-pipeline  finassistant  x-reply-bot  brandguideai  whatsapp-rag",
  "$ availability",
  "open_to_remote: true",
];

const CAPABILITIES = [
  {
    label: "01",
    title: "LLM & GenAI Systems",
    body: "Multi-agent pipelines built on LangGraph, retrieval-augmented generation, and prompt engineering tuned against measured output quality — not vibes.",
  },
  {
    label: "02",
    title: "MLOps & Production ML",
    body: "Drift monitoring, automated retraining, and model-promotion gates for systems that aren't allowed to fail silently.",
  },
  {
    label: "03",
    title: "Backend & Infra",
    body: "FastAPI services, Celery/RabbitMQ task pipelines, Postgres + pgvector, Docker, and infrastructure as code on GCP.",
  },
];

const PROJECTS = [
  {
    name: "BrandGuideAI",
    tagline: "Multi-agent pipeline for brand-consistent marketing copy",
    status: "LIVE",
    description:
      "A LangGraph pipeline that learns a brand's voice — not just its facts. Writing style and verbatim facts are extracted and stored separately, so generated copy can sound like the brand without ever putting words in its mouth. A human-in-the-loop step promotes corrected output back into the brand's memory; prompt tuning has already pushed output quality from roughly 6/10 to 8.5/10.",
    highlights: [
      "Separate brand_brains (voice) and brand_facts (verbatim) stores",
      "Three-stage extraction pipeline — metrics, synthesis, facts",
      "Feedback loop promotes human corrections back into brand memory",
    ],
    stack: ["LangGraph", "Celery", "RabbitMQ", "Redis", "Postgres · pgvector", "Groq · Llama 3.3 70B"],
    url: "https://github.com/Aniekan-Udo/BrandGuideAI/tree/best-branch",
    liveUrl: null,
  },
  {
    name: "WhatsApp Business Assistant",
    tagline: "RAG-powered conversational backend for WhatsApp",
    status: "LIVE",
    description:
      "A stateful FastAPI backend that gives a business its own WhatsApp assistant. LangGraph manages conversation memory, Supabase/pgvector indexes each business's uploaded documents, and replies can be delivered straight to WhatsApp Web.",
    highlights: [
      "Per-business document upload and indexing for RAG",
      "Conversation state persisted via LangGraph checkpoints",
      "Full OpenAPI schema handed off for frontend integration",
    ],
    stack: ["FastAPI", "LangGraph", "Supabase · pgvector", "PyWhatKit"],
    url: "https://github.com/Aniekan-Udo/Whatsapp_chatbot",
    liveUrl: null,
  },
  {
    name: "Fraud Detection Pipeline",
    tagline: "Self-monitoring ML system for real-time transaction scoring",
    status: "LIVE",
    description:
      "Scores every transaction for fraud risk in milliseconds, then checks itself: three layers of drift monitoring compare live traffic against training data, model outputs, and real-world recall. When performance slips, a weekly retrain kicks off automatically — a new model only ships if it actually beats the one it's replacing.",
    highlights: [
      "Three-layer drift detection — data, prediction, and performance",
      "Model promotion gate blocks regressions before they ship",
      "SHAP explainability and a full audit trail on every prediction",
      "Load tested to 15,000 concurrent users",
    ],
    stack: ["FastAPI", "XGBoost", "MLflow", "Prefect", "Evidently", "SHAP", "Terraform", "BigQuery"],
    url: "https://github.com/Aniekan-Udo/ML-pipeline",
    liveUrl: null, // add your live demo link here if hosted
  },
  {
    name: "AI Financial Research Assistant",
    tagline: "Hybrid RAG assistant for live market data + platform docs",
    status: "LIVE",
    description:
      "Answers two very different kinds of questions from one assistant: live stock data pulled from Yahoo Finance, and platform-specific policy questions answered from an uploaded PDF knowledge base. An LLM router decides which source a question actually needs before answering.",
    highlights: [
      "Automatic routing between market data and document RAG",
      "Persistent Chroma vector store survives restarts",
      "New platform documents auto-indexed on upload",
    ],
    stack: ["LangGraph", "FastAPI", "Chroma", "Groq · Llama 3.3", "BAAI bge-small"],
    url: "https://github.com/Aniekan-Udo/-FinAssistantAI",
    liveUrl: null,
  },
  {
    name: "Twitter AI Reply Pipeline",
    tagline: "Autonomous social engagement with a built-in safety gate",
    status: "LIVE",
    description:
      "Watches target accounts, drafts an on-brand reply with an LLM, then runs that reply through a second model that scores how risky it is to post. Safe replies go out automatically, borderline ones get a Telegram approval request, and anything genuinely risky is dropped before it reaches a human.",
    highlights: [
      "Five-stage pipeline — ingest, dedupe, draft, moderate, post",
      "Risk-scored moderation with human review for the middle ground",
      "48-hour dedup memory prevents repeat replies across restarts",
    ],
    stack: ["Celery", "RabbitMQ", "FastAPI", "Docker", "Groq · Llama 3.3"],
    url: "https://github.com/Aniekan-Udo/X-auto-reply-bot",
    liveUrl: null,
  },
];

const STATUS_STYLES = {
  LIVE: { color: "var(--green)", label: "LIVE" },
  "IN DEV": { color: "var(--amber)", label: "IN DEV" },
  PROTOTYPE: { color: "var(--blue)", label: "PROTOTYPE" },
};

/* ---------------------------------------------------------------------- */
/* Hooks                                                                   */
/* ---------------------------------------------------------------------- */

function useTypewriter(lines, typeSpeed = 26, holdTime = 1100, eraseSpeed = 14) {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [phase, setPhase] = useState("typing"); // typing | holding | erasing

  useEffect(() => {
    const current = lines[lineIndex % lines.length];
    let timeout;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
      } else {
        timeout = setTimeout(() => setPhase("holding"), holdTime);
      }
    } else if (phase === "holding") {
      timeout = setTimeout(() => setPhase("erasing"), holdTime);
    } else if (phase === "erasing") {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), eraseSpeed);
      } else {
        setLineIndex((i) => (i + 1) % lines.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timeout);
  }, [text, phase, lineIndex, lines, typeSpeed, holdTime, eraseSpeed]);

  return text;
}

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ children, className = "", delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`pf-reveal ${visible ? "pf-reveal--in" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* Small components                                                        */
/* ---------------------------------------------------------------------- */

function StatusPill({ status }) {
  const s = STATUS_STYLES[status] || STATUS_STYLES.PROTOTYPE;
  return (
    <span className="pf-status" style={{ "--dot-color": s.color }}>
      <span className="pf-status__dot" />
      {s.label}
    </span>
  );
}

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 60} className="pf-project">
      <div className="pf-project__head">
        <span className="pf-project__num">{String(index + 1).padStart(2, "0")}</span>
        <StatusPill status={project.status} />
      </div>

      <h3 className="pf-project__name">{project.name}</h3>
      <p className="pf-project__tagline">{project.tagline}</p>
      <p className="pf-project__desc">{project.description}</p>

      <ul className="pf-project__highlights">
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <div className="pf-project__stack">
        {project.stack.map((t) => (
          <span key={t} className="pf-chip">
            {t}
          </span>
        ))}
      </div>

      <div className="pf-project__links">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="pf-project__link pf-project__link--live">
            Live demo <ArrowUpRight size={15} strokeWidth={2.25} />
          </a>
        )}
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="pf-project__link">
          View repository <ArrowUpRight size={15} strokeWidth={2.25} />
        </a>
      </div>
    </Reveal>
  );
}

/* ---------------------------------------------------------------------- */
/* Page                                                                     */
/* ---------------------------------------------------------------------- */

export default function Portfolio() {
  const bootText = useTypewriter(BOOT_LINES);

  return (
    <div className="pf-root">
      <style>{css}</style>

      {/* NAV */}
      <header className="pf-nav">
        <nav className="pf-nav__links">
          <a href="#work">work</a>
          <a href="#stack">stack</a>
          <a href="#contact">contact</a>
        </nav>
        <span className="pf-nav__status">
          <span className="pf-status pf-status--nav">
            <span className="pf-status__dot" style={{ "--dot-color": "var(--green)" }} />
            available
          </span>
        </span>
      </header>

      {/* HERO */}
      <section className="pf-hero">
        <p className="pf-eyebrow">AI / Generative AI Engineer — Lagos, Nigeria (Remote)</p>
        <h1 className="pf-hero__name">
          Aniekan Udo
        </h1>
        <p className="pf-hero__sub">
          I build production grade AI systems and multi-agent LLM pipelines.
        </p>

        <div className="pf-terminal">
          <div className="pf-terminal__bar">
            <span className="pf-terminal__dot" style={{ background: "#e8536b" }} />
            <span className="pf-terminal__dot" style={{ background: "#e8b23d" }} />
            <span className="pf-terminal__dot" style={{ background: "#4fd1a5" }} />
          </div>
          <div className="pf-terminal__body">
            {bootText}
            <span className="pf-cursor" />
          </div>
        </div>

        <div className="pf-hero__stats">
          <div className="pf-stat">
            <span className="pf-stat__value">3.5+ yrs</span>
            <span className="pf-stat__label">production experience</span>
          </div>
          <div className="pf-stat">
            <span className="pf-stat__value">5</span>
            <span className="pf-stat__label">systems shipped</span>
          </div>
          <div className="pf-stat">
            <span className="pf-stat__value">Open</span>
            <span className="pf-stat__label">to remote roles</span>
          </div>
        </div>

        <div className="pf-hero__cta">
          <a href={`mailto:${CONTACT.email}`} className="pf-btn pf-btn--primary">
            <Mail size={16} strokeWidth={2.25} /> Get in touch
          </a>
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="pf-btn">
            <GithubIcon /> GitHub
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="pf-btn">
            <LinkedinIcon /> LinkedIn
          </a>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="stack" className="pf-section">
        <Reveal>
          <p className="pf-section__eyebrow">Capabilities</p>
        </Reveal>
        <div className="pf-capabilities">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c.title} delay={i * 80} className="pf-capability">
              <span className="pf-capability__label">{c.label}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="work" className="pf-section">
        <Reveal>
          <p className="pf-section__eyebrow">05 Systems in the field</p>
        </Reveal>
        <div className="pf-projects">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="pf-footer">
        <Reveal>
          <h2 className="pf-footer__title">Let's build something that stays up.</h2>
          <p className="pf-footer__sub">
            Open to junior–mid AI/ML and Generative AI engineering roles, remote-first.
          </p>
          <div className="pf-hero__cta pf-footer__cta">
            <a href={`mailto:${CONTACT.email}`} className="pf-btn pf-btn--primary">
              <Mail size={16} strokeWidth={2.25} /> {CONTACT.email}
            </a>
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="pf-btn">
              <GithubIcon /> GitHub
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="pf-btn">
              <LinkedinIcon /> LinkedIn
            </a>
          </div>
        </Reveal>
      </footer>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* Styles                                                                   */
/* ---------------------------------------------------------------------- */

const css = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

.pf-root {
  --bg: #0B0E13;
  --surface: #12161D;
  --surface-2: #171C24;
  --border: #232A35;
  --text: #E7EAF0;
  --text-dim: #8B93A3;
  --text-faint: #5B6472;
  --amber: #E8A33D;
  --green: #4FD1A5;
  --blue: #6E9FE0;

  background: var(--bg);
  color: var(--text);
  font-family: 'IBM Plex Sans', sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
  overflow-x: hidden;
}

.pf-root * { box-sizing: border-box; }

.pf-root a { color: inherit; text-decoration: none; }

/* --- Nav --- */
.pf-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 6vw;
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  background: rgba(11, 14, 19, 0.85);
  backdrop-filter: blur(8px);
  z-index: 10;
}
.pf-nav__mark {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: var(--text);
}
.pf-nav__links {
  display: flex;
  gap: 28px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 13px;
  color: var(--text-dim);
}
.pf-nav__links a { transition: color 0.15s ease; }
.pf-nav__links a:hover { color: var(--text); }

/* --- Status pill --- */
.pf-status {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.06em;
  color: var(--text-dim);
  text-transform: uppercase;
}
.pf-status__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--dot-color, var(--green));
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--dot-color, var(--green)) 20%, transparent);
  flex-shrink: 0;
  animation: pf-pulse 2.4s ease-in-out infinite;
}
@keyframes pf-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.45; }
}

/* --- Hero --- */
.pf-hero {
  padding: 96px 6vw 64px;
  max-width: 980px;
}
.pf-eyebrow {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 13px;
  color: var(--amber);
  letter-spacing: 0.03em;
  margin: 0 0 20px;
}
.pf-hero__name {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: clamp(44px, 8vw, 84px);
  line-height: 1.02;
  letter-spacing: -0.02em;
  margin: 0 0 22px;
}
.pf-hero__sub {
  font-size: 18px;
  color: var(--text-dim);
  max-width: 620px;
  margin: 0 0 40px;
}

.pf-terminal {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
  max-width: 620px;
  margin-bottom: 44px;
}
.pf-terminal__bar {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 10px 14px;
  border-bottom: 1px solid var(--border);
  background: var(--surface-2);
}
.pf-terminal__dot { width: 9px; height: 9px; border-radius: 50%; opacity: 0.85; }
.pf-terminal__title {
  margin-left: 8px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  color: var(--text-faint);
}
.pf-terminal__body {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 14px;
  color: var(--green);
  padding: 18px 16px;
  min-height: 22px;
  white-space: pre-wrap;
  word-break: break-word;
}
.pf-cursor {
  display: inline-block;
  width: 8px;
  height: 15px;
  background: var(--green);
  margin-left: 3px;
  vertical-align: text-bottom;
  animation: pf-blink 1s step-end infinite;
}
@keyframes pf-blink { 50% { opacity: 0; } }

.pf-hero__stats {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  margin-bottom: 40px;
  padding-top: 28px;
  border-top: 1px solid var(--border);
}
.pf-stat { display: flex; flex-direction: column; gap: 4px; }
.pf-stat__value {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 26px;
}
.pf-stat__label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  color: var(--text-faint);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.pf-hero__cta { display: flex; gap: 12px; flex-wrap: wrap; }
.pf-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 18px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--surface);
  font-family: 'IBM Plex Mono', monospace;
  font-size: 13px;
  color: var(--text);
  transition: border-color 0.15s ease, transform 0.15s ease, background 0.15s ease;
}
.pf-btn:hover { border-color: var(--text-faint); transform: translateY(-1px); }
.pf-btn--primary {
  background: var(--green);
  border-color: var(--green);
  color: #08110E;
  font-weight: 500;
}
.pf-btn--primary:hover { background: #63ddb3; }

/* --- Sections --- */
.pf-section { padding: 72px 6vw; border-top: 1px solid var(--border); }
.pf-section__eyebrow {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 13px;
  color: var(--text-faint);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 36px;
}

/* --- Capabilities --- */
.pf-capabilities {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
}
.pf-capability {
  background: var(--surface);
  padding: 30px 26px;
}
.pf-capability__label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  color: var(--amber);
}
.pf-capability h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 19px;
  margin: 14px 0 10px;
}
.pf-capability p {
  color: var(--text-dim);
  font-size: 14.5px;
  margin: 0;
}

/* --- Projects --- */
.pf-projects { display: flex; flex-direction: column; gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; }
.pf-project {
  background: var(--surface);
  padding: 32px clamp(20px, 3vw, 40px);
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 28px;
}
.pf-project__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-column: 1 / -1;
}
.pf-project__num {
  font-family: 'IBM Plex Mono', monospace;
  color: var(--text-faint);
  font-size: 13px;
}
.pf-project__name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 24px;
  margin: 4px 0 6px;
  grid-column: 1 / -1;
}
.pf-project__tagline {
  color: var(--text-faint);
  font-size: 14px;
  margin: 0 0 18px;
  grid-column: 1 / -1;
}
.pf-project__desc {
  color: var(--text-dim);
  font-size: 15px;
  margin: 0 0 18px;
  max-width: 640px;
  grid-column: 1 / -1;
}
.pf-project__highlights {
  margin: 0 0 20px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  grid-column: 1 / -1;
  max-width: 640px;
}
.pf-project__highlights li {
  font-size: 13.5px;
  color: var(--text-dim);
  padding-left: 18px;
  position: relative;
}
.pf-project__highlights li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 6px;
  height: 6px;
  border-radius: 1px;
  background: var(--green);
  opacity: 0.7;
}
.pf-project__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
  grid-column: 1 / -1;
}
.pf-chip {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  color: var(--text-dim);
  border: 1px solid var(--border);
  border-radius: 5px;
  padding: 4px 9px;
}
.pf-project__links {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  grid-column: 1 / -1;
}
.pf-project__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 13px;
  color: var(--blue);
  width: fit-content;
  border-bottom: 1px solid transparent;
  transition: border-color 0.15s ease;
}
.pf-project__link--live { color: var(--green); }
.pf-project__link:hover { border-color: currentColor; }

/* --- Footer --- */
.pf-footer {
  padding: 90px 6vw 60px;
  border-top: 1px solid var(--border);
  text-align: center;
}
.pf-footer__title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(28px, 4.5vw, 44px);
  max-width: 640px;
  margin: 0 auto 14px;
}
.pf-footer__sub {
  color: var(--text-dim);
  margin: 0 0 32px;
}
.pf-footer__cta { justify-content: center; }
.pf-footer__meta {
  margin-top: 64px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  color: var(--text-faint);
}

/* --- Reveal animation --- */
.pf-reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.pf-reveal--in { opacity: 1; transform: translateY(0); }

@media (prefers-reduced-motion: reduce) {
  .pf-reveal, .pf-status__dot, .pf-cursor { animation: none !important; transition: none !important; opacity: 1 !important; transform: none !important; }
}

/* --- Responsive --- */
@media (max-width: 720px) {
  .pf-nav__links { display: none; }
  .pf-capabilities { grid-template-columns: 1fr; }
  .pf-project { grid-template-columns: 1fr; }
  .pf-hero { padding-top: 64px; }
}
`;
