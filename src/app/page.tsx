'use client';

import { FormEvent, useMemo, useState } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  Code2,
  Database,
  Download,
  GraduationCap,
  Mail,
  Menu,
  Send,
  Sparkles,
  Terminal,
  Trophy,
  X,
} from 'lucide-react';

function GithubIcon({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>;
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.3a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" /></svg>;
}

const email = '202451124@iiitvadodara.ac.in';
const github = 'https://github.com/Parth-star262';
const linkedin = 'https://linkedin.com/in/parth-hada';
const dsaJudgeLive = 'https://dsa-judge.vercel.app/problems';
const dsaJudgeRepo = 'https://github.com/Parth-star262/DSA-Judge';
const coastalRepo = 'https://github.com/Parth-star262/coastal-threat-alert-system';
const coastalLive = 'https://coastal-threat-alert-system-xkek.onrender.com';

const projects = [
  {
    name: 'DSA-Judge',
    eyebrow: 'Flagship build · Full-stack platform',
    summary: 'A coding practice platform that turns algorithm practice into a more deliberate, interview-ready workflow.',
    description:
      'Built with a Next.js frontend and an Express / Prisma backend, DSA-Judge combines topic-based problems, a Monaco-powered editor, asynchronous submissions, verdict polling, and AI-assisted interview coaching.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Gemini AI'],
    highlights: ['Monaco editor and custom test flow', 'Async submissions with verdict polling', 'Topic-wise DSA problem practice', 'AI interview coach and complexity feedback'],
    live: dsaJudgeLive,
    repo: dsaJudgeRepo,
  },
  {
    name: 'Coastal Threat Alert System',
    eyebrow: 'Prototype · Data and alerting system',
    summary: 'A weather and marine monitoring prototype that turns coastal observations into explainable risk zones and alerts.',
    description:
      'Built with Flask, React, and PostgreSQL, the system collects OpenWeather observations, Open-Meteo marine data, and GDACS cyclone-event metadata. It combines threshold-based weather alerts, a weather-only ML classifier, abnormal sea-level detection, and city-level GeoJSON risk zones for a live dashboard.',
    tags: ['Flask', 'React', 'PostgreSQL', 'Open-Meteo', 'GDACS'],
    highlights: ['Marine observations and cyclone-event ingestion', 'Explainable city-level risk scoring', 'Abnormal sea-level baseline detection', 'Email and SMS notification pipeline'],
    repo: coastalRepo,
    live: coastalLive,
  },
];

const skillGroups = [
  { label: 'Languages', icon: Code2, skills: ['TypeScript', 'JavaScript', 'C++', 'Python', 'SQL'] },
  { label: 'Frontend', icon: Terminal, skills: ['React', 'Next.js App Router', 'Tailwind CSS', 'Monaco Editor', 'Framer Motion'] },
  { label: 'Backend & data', icon: Database, skills: ['Node.js', 'Express', 'PostgreSQL', 'Prisma ORM', 'Redis', 'REST APIs'] },
  { label: 'AI & delivery', icon: Bot, skills: ['Google Gemini API', 'Docker', 'Git & GitHub', 'Vercel', 'Render'] },
];

function SectionIntro({ index, label, title, copy }: { index: string; label: string; title: string; copy: string }) {
  return (
    <div className="section-intro">
      <div className="section-kicker"><span>{index}</span>{label}</div>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}

export default function PortfolioHomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio message from ${formName || 'Visitor'}`);
    const body = encodeURIComponent(`${formMessage || ''}\n\nFrom: ${formName || 'Visitor'}\nEmail: ${formEmail || 'Not provided'}`);
    return `mailto:${email}?subject=${subject}&body=${body}`;
  }, [formEmail, formMessage, formName]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = mailto;
  };

  return (
    <div className="portfolio-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <div className={`mobile-menu ${mobileOpen ? 'is-open' : ''}`}>
        <div className="site-container mobile-menu-inner">
          {['home', 'projects', 'skills', 'about', 'contact'].map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setMobileOpen(false)}>{item}</a>
          ))}
          <a href="/resume" download className="button button-small button-primary">Resume <Download size={14} /></a>
        </div>
      </div>

      <main>
        <section id="home" className="hero section">
          <div className="site-container hero-grid">
            <div className="hero-copy">
              <div className="availability"><span className="status-dot" /> Open to software engineering opportunities</div>
              <p className="hero-overline">Computer Science · IIIT Vadodara · 2024—2028</p>
              <h1>Building software<br /><em>with a point of view.</em></h1>
              <p className="hero-lede">
                I&apos;m Parth Hada, a full-stack developer and AI systems builder. I turn complex product ideas into thoughtful, usable software—from developer tools to data-backed web platforms.
              </p>
              <div className="hero-actions">
                <a href="#projects" className="button button-primary">Explore projects <ArrowRight size={16} /></a>
                <a href="/resume" download className="button button-secondary">View resume <Download size={16} /></a>
              </div>
              <div className="hero-links">
                <a href={github} target="_blank" rel="noreferrer"><GithubIcon size={16} /> GitHub</a>
                <a href={linkedin} target="_blank" rel="noreferrer"><LinkedinIcon size={16} /> LinkedIn</a>
                <a href={`mailto:${email}`}><Mail size={16} /> Email</a>
              </div>
            </div>
            <div className="hero-aside">
              <div className="portrait-frame">
                <Image src="/parth-photo.jpg" alt="Portrait of Parth Hada" fill priority sizes="(max-width: 900px) 80vw, 420px" className="portrait" />
                <div className="portrait-caption"><span>01 / Profile</span><strong>Parth Hada</strong><span>Gandhinagar, Gujarat</span></div>
              </div>
              <div className="hero-note"><span>Currently focused on</span><strong>Full-stack systems &amp; practical AI</strong></div>
            </div>
          </div>
          <div className="site-container hero-metrics">
            <div><strong>500+</strong><span>algorithmic problems solved</span></div>
            <div><strong>02</strong><span>featured builds in this portfolio</span></div>
            <div><strong>01</strong><span>curious engineer at work</span></div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="site-container">
            <SectionIntro index="01" label="Selected work" title="Projects that make the work tangible." copy="A closer look at the systems I build, the problems they address, and the decisions behind them." />
            <article className="featured-project">
              <div className="project-visual">
                <div className="window-bar"><span /><span /><span /><code>DSA-Judge / problems</code></div>
                <div className="terminal-preview">
                  <div className="preview-sidebar"><b>DSA<span>-</span>Judge</b><small>PROBLEMS</small><i>Arrays &amp; Hashing</i><i>Dynamic Programming</i><i>Graphs</i><i>Interview Coach</i></div>
                  <div className="preview-main"><div className="preview-top"><span>Two Sum</span><b>Run code</b></div><div className="code-lines"><span>01</span><span><i>function</i> twoSum(nums, target) {'{'}</span><span>02&nbsp;&nbsp; <i>const</i> seen = <em>new Map()</em>;</span><span>03&nbsp;&nbsp; <i>for</i> (<i>const</i> [i, n] <i>of</i> nums.entries()) {'{'}</span><span>04&nbsp;&nbsp;&nbsp;&nbsp; <i>if</i> (seen.has(target - n)) <em>return</em> [seen.get(target - n), i];</span><span>05&nbsp;&nbsp; {'}'}</span><span>06&nbsp; {'}'}</span></div><div className="preview-verdict"><Check size={14} /> Accepted <span>Runtime 42 ms</span></div></div>
                </div>
              </div>
              <div className="featured-copy">
                <div className="project-label"><span className="live-dot" /> Live platform</div>
                <h3>DSA-Judge</h3>
                <p>{projects[0].description}</p>
                <div className="tag-list">{projects[0].tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <ul className="highlight-list">{projects[0].highlights.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul>
                <div className="project-actions"><a href={dsaJudgeLive} target="_blank" rel="noreferrer" className="button button-primary">Live demo <ArrowUpRight size={16} /></a><a href={dsaJudgeRepo} target="_blank" rel="noreferrer" className="button button-secondary">Source code <GithubIcon size={16} /></a></div>
              </div>
            </article>
            <div className="project-grid">
              <article className="project-card project-card-coastal">
                <div className="card-art"><div className="radar-ring ring-one" /><div className="radar-ring ring-two" /><span className="radar-signal" /><span className="card-art-label">COASTAL / ALERTS</span></div>
                <div className="project-card-body"><div className="project-label muted">Live API · Safety-focused data system</div><h3>Coastal Threat Alert System</h3><p>{projects[1].description}</p><div className="tag-list">{projects[1].tags.map((tag) => <span key={tag}>{tag}</span>)}</div><ul className="highlight-list">{projects[1].highlights.slice(0, 3).map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul><div className="project-actions"><a href={coastalLive} target="_blank" rel="noreferrer" className="button button-primary">Live API <ArrowUpRight size={16} /></a><a href={coastalRepo} target="_blank" rel="noreferrer" className="button button-secondary">Source code <GithubIcon size={16} /></a></div></div>
              </article>
              <div className="project-aside">
                <div className="aside-number">02</div>
                <p>Not every build needs a polished launch URL to be worth discussing. This prototype represents my interest in reliable systems that connect technical signals to human decisions.</p>
                <a href={`mailto:${email}?subject=Coastal Threat Alert System`} className="text-link">Ask about the prototype <ArrowUpRight size={15} /></a>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="site-container">
            <SectionIntro index="02" label="Technical toolkit" title="Breadth, organized for clarity." copy="The tools I use most often, grouped by the part of the product they help me shape." />
            <div className="skills-grid">{skillGroups.map((group) => { const Icon = group.icon; return <div className="skill-group" key={group.label}><div className="skill-heading"><Icon size={18} /><h3>{group.label}</h3></div><div className="skill-items">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>; })}</div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="site-container about-grid">
            <SectionIntro index="03" label="Background" title="The context behind the code." copy="I like working where strong fundamentals meet useful products." />
            <div className="about-content">
              <div className="education-block"><div className="content-icon"><GraduationCap size={19} /></div><div><p className="content-label">Education</p><h3>Indian Institute of Information Technology, Vadodara</h3><p className="accent-text">B.Tech in Computer Science &amp; Engineering · 2024—2028</p><p>Coursework across data structures, operating systems, databases, object-oriented design, and discrete mathematics.</p></div></div>
              <div className="about-columns"><div><p className="content-label">Achievements</p><div className="milestone"><Trophy size={17} /><span><strong>500+ problems</strong> solved across algorithmic topics.</span></div><div className="milestone"><Sparkles size={17} /><span><strong>HackOut&apos;25</strong> participant at DA-IICT.</span></div></div><div><p className="content-label">Campus</p><p className="plain-item">Finance Club, IIIT Vadodara<br /><span>Active member</span></p><p className="plain-item">E-Cell, IIIT Vadodara<br /><span>Active member</span></p></div></div>
              <div className="about-statement"><span>Approach</span><p>I care about the last mile: clear interfaces, maintainable systems, and enough attention to performance that a good idea remains useful under real constraints.</p></div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="site-container contact-grid">
            <div><SectionIntro index="04" label="Get in touch" title="Have a problem worth building?" copy="I’m open to software engineering internships, technical collaborations, and ambitious product ideas." /><div className="contact-details"><button type="button" onClick={copyEmail}><Mail size={18} /><span>{email}</span><small>{copied ? 'Copied' : 'Copy'}</small></button><a href={github} target="_blank" rel="noreferrer"><GithubIcon size={18} /><span>github.com/Parth-star262</span><ArrowUpRight size={15} /></a><a href={linkedin} target="_blank" rel="noreferrer"><LinkedinIcon size={18} /><span>linkedin.com/in/parth-hada</span><ArrowUpRight size={15} /></a></div></div>
            <form className="contact-form" onSubmit={submitContact}><div className="form-row"><label>Name<input required value={formName} onChange={(event) => setFormName(event.target.value)} placeholder="Your name" /></label><label>Email<input required type="email" value={formEmail} onChange={(event) => setFormEmail(event.target.value)} placeholder="you@example.com" /></label></div><label>Message<textarea required value={formMessage} onChange={(event) => setFormMessage(event.target.value)} placeholder="Tell me a little about what you’re working on..." /></label><button type="submit" className="button button-primary">Open email draft <Send size={16} /></button><p className="form-note">This opens your email client with the message pre-filled.</p></form>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="site-container footer-inner"><span>© {new Date().getFullYear()} Parth Hada</span><span>IIIT Vadodara · CSE</span><a href="#home">Back to top <ArrowUpRight size={14} /></a></div></footer>
      <button className="mobile-toggle" type="button" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} onClick={() => setMobileOpen((open) => !open)}>{mobileOpen ? <X size={20} /> : <Menu size={20} />}</button>
    </div>
  );
}
