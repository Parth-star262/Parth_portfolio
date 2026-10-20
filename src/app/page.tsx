'use client';

import { FormEvent, useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import {
	ArrowRight,
	ArrowUpRight,
	Bot,
	Briefcase,
	CheckCircle2,
	Code2,
	Cpu,
	Database,
	Download,
	ExternalLink,
	Globe,
	GraduationCap,
	Layers,
	Mail,
	MapPin,
	Send,
	Sparkles,
	Terminal,
	Trophy,
} from 'lucide-react';

function GithubIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
			<path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
		</svg>
	);
}

function LinkedinIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
			<path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.3a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
		</svg>
	);
}

const launchUrl = 'https://dsa-judge.vercel.app/problems';
const repoUrl = 'https://github.com/Parth-star262/DSA-Judge';
const resumeUrl = '/resume';

const techStack = [
	{ name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
	{ name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
	{ name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
	{ name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
	{ name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
	{ name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
	{ name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
	{ name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
	{ name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
	{ name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
	{ name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
	{ name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
];

const skillCategories = [
	{
		title: 'Languages',
		icon: Code2,
		skills: ['TypeScript', 'JavaScript', 'C++', 'Python', 'SQL'],
	},
	{
		title: 'Frontend Development',
		icon: Globe,
		skills: ['React.js', 'Next.js (App Router)', 'Tailwind CSS', 'Monaco Editor', 'Framer Motion'],
	},
	{
		title: 'Backend & Databases',
		icon: Database,
		skills: ['Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'Redis', 'REST APIs'],
	},
	{
		title: 'DevOps & AI Systems',
		icon: Cpu,
		skills: ['Docker', 'Gemini AI API', 'Sandboxed Code Exec', 'Git & GitHub', 'Vercel / Render'],
	},
];

const dsaJudgeFeatures = [
	{
		title: 'Isolated Multi-Language Sandbox',
		desc: 'Executes C++, Java, Python, and JavaScript safely with precise wall-time and memory enforcement.',
		icon: Terminal,
	},
	{
		title: 'AI Mock Technical Interviews',
		desc: 'Simulates interactive hiring rounds with adaptive feedback on edge-cases, data structures, and trade-offs.',
		icon: Bot,
	},
	{
		title: 'Automated Code Review & Hints',
		desc: 'Analyzes asymptotic time/space complexity and guides problem solving without spoiling the full solution.',
		icon: Sparkles,
	},
	{
		title: 'Comprehensive Performance Tracking',
		desc: 'Detailed submission history, verdict breakdowns, and consistency charts for continuous practice.',
		icon: Layers,
	},
];

const fadeUpVariant: Variants = {
	hidden: { opacity: 0, y: 16 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const inputClassName =
	'mt-2 w-full rounded-lg border border-white/12 bg-[#0a0814] px-4 text-[15px] text-white placeholder:text-slate-500 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-400/30';

export default function PortfolioHomePage() {
	const [formName, setFormName] = useState('');
	const [formEmail, setFormEmail] = useState('');
	const [formMessage, setFormMessage] = useState('');
	const [copiedEmail, setCopiedEmail] = useState(false);

	const myEmail = '202451124@iiitvadodara.ac.in';

	const mailtoHref = useMemo(() => {
		const subject = encodeURIComponent(`Portfolio Message from ${formName || 'Visitor'}`);
		const body = encodeURIComponent(
			`Hi Parth,\n\n${formMessage || ''}\n\nFrom: ${formName || 'Visitor'}\nEmail: ${formEmail || 'Not provided'}`,
		);
		return `mailto:${myEmail}?subject=${subject}&body=${body}`;
	}, [formEmail, formMessage, formName]);

	const submitContact = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		window.location.href = mailtoHref;
	};

	const copyEmail = () => {
		navigator.clipboard.writeText(myEmail);
		setCopiedEmail(true);
		setTimeout(() => setCopiedEmail(false), 2200);
	};

	return (
		<div className="portfolio-shell min-h-screen bg-[#080615] text-[#f4f4fb] selection:bg-violet-600/40 selection:text-white">
			<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
				<div className="absolute top-[-12%] left-[20%] h-[420px] w-[420px] rounded-full bg-violet-700/12 blur-[140px]" />
				<div className="absolute bottom-[8%] right-[-8%] h-[360px] w-[360px] rounded-full bg-indigo-700/10 blur-[140px]" />
			</div>

			<section id="home" className="relative scroll-mt-24 pt-16 pb-20 md:pt-24 md:pb-28">
				<div className="site-container">
					<div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 lg:items-center">
						<motion.div initial="hidden" animate="visible" variants={fadeUpVariant} className="min-w-0">
							<p className="inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[13px] font-medium leading-5 text-emerald-300">
								<span className="relative flex h-2 w-2 shrink-0">
									<span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
									<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
								</span>
								<span className="min-w-0 break-words">Available for Software Engineering Opportunities</span>
							</p>

							<h1 className="mt-6 text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.15] tracking-tight text-white">
								Hi, I&apos;m Parth Hada
								<span className="mt-2 block font-medium text-violet-200">
									Full-Stack Developer
								</span>
								<span className="mt-1 block text-[clamp(1.35rem,2.4vw,2rem)] font-normal text-slate-300">
									&amp; AI Systems Builder
								</span>
							</h1>

							<p className="mt-6 max-w-[38rem] text-base leading-7 break-words text-slate-300 sm:text-[17px] sm:leading-8">
								Computer Science student at <strong className="font-semibold text-white">IIIT Vadodara</strong> with 500+ algorithmic problems solved. I architect production-ready web applications, automated developer tooling, and AI-powered platforms with clean systems and practical utility.
							</p>

							<div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-300">
								<span className="inline-flex items-center gap-2">
									<Trophy size={16} className="text-amber-400" aria-hidden="true" />
									500+ DSA Solved
								</span>
								<span className="hidden h-4 w-px bg-white/15 sm:block" aria-hidden="true" />
								<span className="inline-flex items-center gap-2">
									<GraduationCap size={16} className="text-violet-300" aria-hidden="true" />
									IIIT Vadodara &apos;28
								</span>
								<span className="hidden h-4 w-px bg-white/15 sm:block" aria-hidden="true" />
								<span className="inline-flex items-center gap-2">
									<MapPin size={16} className="text-cyan-300" aria-hidden="true" />
									Gandhinagar, Gujarat
								</span>
							</div>

							<div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
								<a
									href="#projects"
									className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-500"
								>
									View Featured Project
									<ArrowRight size={16} aria-hidden="true" />
								</a>
								<a
									href={launchUrl}
									target="_blank"
									rel="noreferrer"
									className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5"
								>
									Launch DSA-Judge
									<ArrowUpRight size={16} aria-hidden="true" />
								</a>
								<a
									href={resumeUrl}
									download
									className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
								>
									<Download size={16} aria-hidden="true" />
									Resume
								</a>
							</div>

							<div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
								<span className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">Connect</span>
								<a
									href="https://github.com/Parth-star262"
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-slate-300 transition hover:text-white"
								>
									<GithubIcon size={16} />
									GitHub
								</a>
								<a
									href="https://linkedin.com/in/parth-hada"
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-slate-300 transition hover:text-white"
								>
									<LinkedinIcon size={16} />
									LinkedIn
								</a>
								<a
									href={`mailto:${myEmail}`}
									className="inline-flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-slate-300 transition hover:text-white"
								>
									<Mail size={16} aria-hidden="true" />
									Email
								</a>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: 'easeOut' }}
							className="flex justify-center lg:justify-end"
						>
							<figure className="w-full max-w-[320px] sm:max-w-[360px]">
								<div className="overflow-hidden rounded-2xl border border-white/12 bg-[#100e1c] p-2">
									<div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
										<Image
											src="/parth-photo.jpg"
											alt="Parth Hada"
											fill
											priority
											className="object-cover object-top"
											sizes="(max-width: 768px) 80vw, 360px"
										/>
										<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#080615]/90 via-[#080615]/30 to-transparent p-4">
											<div className="flex items-end justify-between gap-3">
												<figcaption>
													<p className="text-sm font-medium text-white">Parth Hada</p>
													<p className="text-[13px] text-slate-300">Creator of DSA-Judge</p>
												</figcaption>
												<span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-500/15 px-2 py-0.5 text-[11px] font-medium text-emerald-300">
													<span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
													Online
												</span>
											</div>
										</div>
									</div>
								</div>
							</figure>
						</motion.div>
					</div>
				</div>
			</section>

			<section id="projects" className="relative scroll-mt-24 border-t border-white/8 py-16 md:py-24">
				<div className="site-container">
					<div className="max-w-3xl">
						<p className="text-xs font-medium uppercase tracking-[0.16em] text-violet-300">Flagship Project</p>
						<h2 className="mt-3 text-[clamp(1.75rem,3vw,2.35rem)] font-semibold tracking-tight text-white">
							DSA-Judge Platform
						</h2>
						<p className="mt-4 text-base leading-7 text-slate-300 sm:text-[17px] sm:leading-8">
							A full-stack competitive programming and AI-assisted technical interview simulator built from scratch for engineering candidates and learners.
						</p>
					</div>

					<div className="mt-10 rounded-2xl border border-white/10 bg-[#100e1c] p-6 sm:p-8 md:p-10">
						<div className="flex flex-wrap gap-2">
							{['Next.js 16 (App Router)', 'Node.js / Express', 'PostgreSQL & Prisma', 'Google Gemini AI'].map((tag) => (
								<span
									key={tag}
									className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[13px] text-slate-300"
								>
									{tag}
								</span>
							))}
						</div>

						<p className="mt-6 max-w-4xl text-base leading-7 text-slate-300">
							DSA-Judge bridges the gap between solitary problem solving and real interview pressure. It provides a browser-based IDE powered by Monaco, strict judge sandboxing, interactive AI coaching, and deep telemetry on code efficiency.
						</p>

						<ul className="mt-6 grid gap-3 sm:grid-cols-2">
							<li className="flex items-start gap-3 text-sm leading-6 text-slate-300">
								<CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-400" aria-hidden="true" />
								Multi-language execution (C++, Java, Python, JS) with sub-second verdict feedback.
							</li>
							<li className="flex items-start gap-3 text-sm leading-6 text-slate-300">
								<CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-400" aria-hidden="true" />
								Interactive AI Mock Interviews providing real-time hints and complexity evaluation.
							</li>
							<li className="flex items-start gap-3 sm:col-span-2 text-sm leading-6 text-slate-300 lg:col-span-1">
								<CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-400" aria-hidden="true" />
								Monaco code editor with syntax highlighting, custom test inputs, and full keyboard ergonomics.
							</li>
						</ul>

						<div className="mt-8 flex flex-wrap items-center gap-3">
							<a
								href={launchUrl}
								target="_blank"
								rel="noreferrer"
								className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-500"
							>
								Launch Live App
								<ArrowUpRight size={16} aria-hidden="true" />
							</a>
							<a
								href={repoUrl}
								target="_blank"
								rel="noreferrer"
								className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
							>
								<GithubIcon size={16} />
								Source Code
							</a>
						</div>

						<div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
							{dsaJudgeFeatures.map((feat) => {
								const Icon = feat.icon;
								return (
									<div key={feat.title} className="min-w-0 rounded-xl border border-white/8 bg-[#0c0a18] p-5">
										<div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-violet-300">
											<Icon size={18} aria-hidden="true" />
										</div>
										<h3 className="mt-4 text-base font-semibold text-white">{feat.title}</h3>
										<p className="mt-2 text-sm leading-6 text-slate-400">{feat.desc}</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>

			<section id="skills" className="relative scroll-mt-24 border-t border-white/8 py-16 md:py-24">
				<div className="site-container">
					<div className="max-w-2xl">
						<p className="text-xs font-medium uppercase tracking-[0.16em] text-violet-300">Technical Toolkit</p>
						<h2 className="mt-3 text-[clamp(1.75rem,3vw,2.35rem)] font-semibold tracking-tight text-white">
							Skills &amp; Technologies
						</h2>
						<p className="mt-4 text-base leading-7 text-slate-300">
							Languages, frameworks, and engineering tools I leverage to build resilient digital products.
						</p>
					</div>

					<div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
						{skillCategories.map((cat) => {
							const Icon = cat.icon;
							return (
								<div key={cat.title} className="min-w-0 rounded-2xl border border-white/10 bg-[#100e1c] p-6">
									<div className="flex items-center gap-3">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-violet-300">
											<Icon size={18} aria-hidden="true" />
										</div>
										<h3 className="text-base font-semibold text-white">{cat.title}</h3>
									</div>
									<div className="mt-5 flex flex-wrap gap-2">
										{cat.skills.map((skill) => (
											<span
												key={skill}
												className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[13px] text-slate-300"
											>
												{skill}
											</span>
										))}
									</div>
								</div>
							);
						})}
					</div>

					<div className="portfolio-tech-track mt-10 border-t border-white/8 pt-8">
						{techStack.map((tech) => (
							<div
								key={tech.name}
								className="inline-flex items-center gap-2 rounded-lg border border-white/8 bg-[#100e1c] px-3 py-2"
							>
								<img src={tech.icon} alt="" className="h-5 w-5 object-contain" />
								<span className="text-[13px] text-slate-300">{tech.name}</span>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="about" className="relative scroll-mt-24 border-t border-white/8 py-16 md:py-24">
				<div className="site-container">
					<div className="max-w-3xl">
						<p className="text-xs font-medium uppercase tracking-[0.16em] text-violet-300">Background</p>
						<h2 className="mt-3 text-[clamp(1.75rem,3vw,2.35rem)] font-semibold tracking-tight text-white">
							Education &amp; Milestones
						</h2>
						<p className="mt-4 text-base leading-7 text-slate-300">
							My academic path, competitive programming journey, and leadership on campus.
						</p>
					</div>

					<div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch">
						<div className="min-w-0 rounded-2xl border border-white/10 bg-[#100e1c] p-6 md:p-8">
							<div className="flex items-center gap-3">
								<GraduationCap size={22} className="text-violet-300" aria-hidden="true" />
								<h3 className="text-xl font-semibold text-white">Academic Journey</h3>
							</div>

							<div className="mt-6">
								<h4 className="text-lg font-semibold leading-snug text-white">
									Indian Institute of Information Technology, Vadodara
								</h4>
								<p className="mt-2 text-sm font-medium text-violet-300">B.Tech in Computer Science and Engineering</p>
								<p className="mt-1 text-sm text-slate-400">2024 – 2028 • Gandhinagar Campus, Gujarat</p>
								<p className="mt-4 text-[15px] leading-7 text-slate-300">
									Rigorous coursework covering Data Structures &amp; Algorithms, Object-Oriented Design, Operating Systems, Database Management Systems, and Discrete Mathematics.
								</p>
							</div>

							<div className="mt-8">
								<h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-400">Campus Involvement</h4>
								<ul className="mt-4 space-y-3 text-[15px] text-slate-300">
									<li>
										<span className="font-medium text-white">Finance Club, IIIT Vadodara</span> — Active Member
									</li>
									<li>
										<span className="font-medium text-white">E-Cell, IIIT Vadodara</span> — Active Member
									</li>
								</ul>
							</div>
						</div>

						<div className="min-w-0 rounded-2xl border border-white/10 bg-[#100e1c] p-6 md:p-8">
							<div className="flex items-center gap-3">
								<Trophy size={22} className="text-amber-400" aria-hidden="true" />
								<h3 className="text-xl font-semibold text-white">Achievements &amp; Hackathons</h3>
							</div>

							<ul className="mt-6 space-y-6">
								<li className="flex items-start gap-4">
									<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-amber-300">
										<Code2 size={16} aria-hidden="true" />
									</div>
									<div className="min-w-0">
										<h4 className="text-base font-semibold text-white">500+ Algorithmic Problems Solved</h4>
										<p className="mt-1.5 text-sm leading-6 text-slate-400">
											Consistently solved challenging problems spanning dynamic programming, graphs, trees, and system logic across major competitive platforms.
										</p>
									</div>
								</li>
								<li className="flex items-start gap-4">
									<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-violet-300">
										<Sparkles size={16} aria-hidden="true" />
									</div>
									<div className="min-w-0">
										<h4 className="text-base font-semibold text-white">HackOut&apos;25 Participant (DA-IICT)</h4>
										<p className="mt-1.5 text-sm leading-6 text-slate-400">
											Collaborated under tight deadlines to design and engineer full-stack solutions during the 2025 hackathon on the DA-IICT campus.
										</p>
									</div>
								</li>
								<li className="flex items-start gap-4">
									<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-emerald-300">
										<Briefcase size={16} aria-hidden="true" />
									</div>
									<div className="min-w-0">
										<h4 className="text-base font-semibold text-white">Coastal Threat Alert Prototype</h4>
										<p className="mt-1.5 text-sm leading-6 text-slate-400">
											Initiated development of a real-time hazard detection and alerting tool designed to keep coastal communities informed and safe.
										</p>
									</div>
								</li>
							</ul>

							<p className="mt-8 text-sm leading-6 text-slate-400">
								<span className="font-medium text-white">Core Engineering Ethos:</span> Write clean, maintainable code with strict attention to performance bottlenecks and user clarity.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section id="contact" className="relative scroll-mt-24 border-t border-white/8 py-16 md:py-24">
				<div className="site-container">
					<div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
						<div className="min-w-0">
							<p className="text-xs font-medium uppercase tracking-[0.16em] text-violet-300">Get in Touch</p>
							<h2 className="mt-3 text-[clamp(1.75rem,3vw,2.35rem)] font-semibold tracking-tight text-white">
								Let&apos;s build something exceptional.
							</h2>
							<p className="mt-4 max-w-lg text-base leading-7 text-slate-300">
								I am actively seeking software engineering internship opportunities, technical collaborations, and ambitious projects. Reach out via email or send a note below.
							</p>

							<div className="mt-8 space-y-3">
								<button
									type="button"
									onClick={copyEmail}
									className="flex w-full items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#100e1c] px-4 py-4 text-left transition hover:border-white/20"
								>
									<span className="flex min-w-0 items-center gap-3">
										<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-violet-300">
											<Mail size={18} aria-hidden="true" />
										</span>
										<span className="min-w-0">
											<span className="block text-[13px] text-slate-400">Primary Email</span>
											<span className="block break-all text-sm font-medium text-white">{myEmail}</span>
										</span>
									</span>
									<span className="shrink-0 text-[13px] text-slate-400">
										{copiedEmail ? 'Copied!' : 'Click to copy'}
									</span>
								</button>

								<a
									href="https://linkedin.com/in/parth-hada"
									target="_blank"
									rel="noreferrer"
									className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#100e1c] px-4 py-4 transition hover:border-white/20"
								>
									<span className="flex min-w-0 items-center gap-3">
										<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-cyan-300">
											<LinkedinIcon size={18} />
										</span>
										<span className="min-w-0">
											<span className="block text-[13px] text-slate-400">Professional Profile</span>
											<span className="block truncate text-sm font-medium text-white">linkedin.com/in/parth-hada</span>
										</span>
									</span>
									<ExternalLink size={16} className="shrink-0 text-slate-400" aria-hidden="true" />
								</a>

								<a
									href="https://github.com/Parth-star262"
									target="_blank"
									rel="noreferrer"
									className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#100e1c] px-4 py-4 transition hover:border-white/20"
								>
									<span className="flex min-w-0 items-center gap-3">
										<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white">
											<GithubIcon size={18} />
										</span>
										<span className="min-w-0">
											<span className="block text-[13px] text-slate-400">Code Repositories</span>
											<span className="block truncate text-sm font-medium text-white">github.com/Parth-star262</span>
										</span>
									</span>
									<ExternalLink size={16} className="shrink-0 text-slate-400" aria-hidden="true" />
								</a>
							</div>
						</div>

						<form
							onSubmit={submitContact}
							className="min-w-0 rounded-2xl border border-white/10 bg-[#100e1c] p-6 sm:p-8"
						>
							<h3 className="text-xl font-semibold text-white">Send a Direct Message</h3>
							<p className="mt-2 text-sm leading-6 text-slate-400">
								Fill in your information and this will open your email client pre-filled.
							</p>

							<div className="mt-6">
								<label htmlFor="name" className="block text-sm font-medium text-slate-200">
									Your Name
								</label>
								<input
									id="name"
									type="text"
									required
									value={formName}
									onChange={(e) => setFormName(e.target.value)}
									placeholder="e.g. John Doe"
									className={`${inputClassName} h-12`}
								/>
							</div>

							<div className="mt-5">
								<label htmlFor="email" className="block text-sm font-medium text-slate-200">
									Your Email
								</label>
								<input
									id="email"
									type="email"
									required
									value={formEmail}
									onChange={(e) => setFormEmail(e.target.value)}
									placeholder="john@example.com"
									className={`${inputClassName} h-12`}
								/>
							</div>

							<div className="mt-5">
								<label htmlFor="message" className="block text-sm font-medium text-slate-200">
									Message
								</label>
								<textarea
									id="message"
									required
									rows={6}
									value={formMessage}
									onChange={(e) => setFormMessage(e.target.value)}
									placeholder="Tell me about your project, internship opportunity, or idea..."
									className={`${inputClassName} min-h-[160px] resize-y py-3`}
								/>
							</div>

							<button
								type="submit"
								className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
							>
								<Send size={16} aria-hidden="true" />
								Send Message
							</button>
						</form>
					</div>
				</div>
			</section>

			<footer className="border-t border-white/8 py-8">
				<div className="site-container flex flex-col items-start justify-between gap-4 text-sm text-slate-400 sm:flex-row sm:items-center">
					<p>© {new Date().getFullYear()} Parth Hada • IIIT Vadodara CSE. Built with Next.js &amp; Tailwind CSS.</p>
					<div className="flex flex-wrap items-center gap-x-5 gap-y-2">
						<a href={launchUrl} target="_blank" rel="noreferrer" className="transition hover:text-white">
							DSA-Judge Live
						</a>
						<a href={repoUrl} target="_blank" rel="noreferrer" className="transition hover:text-white">
							GitHub
						</a>
						<a href="#home" className="transition hover:text-white">
							Back to Top
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}
