import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  Menu,
  Server,
  X,
  Cloud,
  Terminal,
} from "lucide-react";

const projects = [
  {
    name: "One Destiny",
    type: "Wedding & event business platform",
    description:
      "A platform connecting wedding and event service providers with customers, with vendor tools for showcasing services and managing enquiries.",
    stack: ["React", "Flutter", ".NET", "PostgreSQL", "REST APIs"],
    links: [
      { label: "Vendor app", href: "https://github.com/NGamerHere/OneDestinyVendorApp" },
      { label: "Backend", href: "https://github.com/NGamerHere/OneDestinyBackend" },
    ],
    number: "01",
  },
  {
    name: "FinDeal",
    type: "Marketplace platform",
    description:
      "A second-hand marketplace project, with a mobile client and backend services for marketplace workflows.",
    stack: ["Flutter", ".NET", "PostgreSQL", "Redis"],
    links: [
      { label: "Frontend", href: "https://github.com/NGamerHere/findeal-app" },
      { label: "Backend", href: "https://github.com/NGamerHere/findeal-backend" },
    ],
    number: "02",
  },
  {
    name: "CareSync",
    type: "Healthcare management",
    description:
      "A hospital management application focused on organizing patient, pharmacy, billing and operational workflows.",
    stack: ["Java", "Spring Boot", "Flutter", "MySQL"],
    links: [
      { label: "Backend", href: "https://github.com/NGamerHere/caresync-backend" },
      { label: "Project page", href: "/caresync", internal: true },
    ],
    number: "03",
  },
  {
    name: "Bigwala",
    type: "School management system",
    description:
      "A school management product built to bring student, administration and day-to-day school workflows into one application.",
    stack: ["React", "TypeScript", "Node.js", "MySQL"],
    links: [{ label: "Source code", href: "https://github.com/NGamerHere/bigwala-sms" }],
    number: "04",
  },
  {
    name: "Ecom v2",
    type: "E-commerce application",
    description:
      "An ongoing e-commerce codebase exploring product, storefront and backend application workflows.",
    stack: ["React", "JavaScript", "Backend APIs"],
    links: [{ label: "Source code", href: "https://github.com/NGamerHere/Ecom-v2" }],
    number: "05",
  },
];

const skillGroups = [
  {
    title: "Backend engineering",
    icon: Server,
    description: "Designing APIs, services and reliable application workflows.",
    skills: ["C#", ".NET", "Java", "Spring Boot", "Node.js", "Express", "REST APIs", "GraphQL"],
  },
  {
    title: "Data & messaging",
    icon: Database,
    description: "Working with relational, document and in-memory data systems.",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "RabbitMQ", "Amazon SQS"],
  },
  {
    title: "Frontend & mobile",
    icon: Code2,
    description: "Building usable web and cross-platform application experiences.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Flutter", "Tailwind CSS"],
  },
  {
    title: "Cloud & delivery",
    icon: Cloud,
    description: "Shipping and operating applications across cloud and Linux environments.",
    skills: ["AWS", "Docker", "Podman", "Nginx", "GitHub Actions", "Linux", "DigitalOcean"],
  },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/NGamerHere", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/n-datta-sai-ram-kumar-37a251241/",
    icon: Linkedin,
  },
  { label: "Email", href: "mailto:ndattasairam03@gmail.com", icon: Mail },
];

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
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
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 leading-7 text-slate-400">{description}</p>}
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 90}>
      <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.06]">
        <div className="mb-8 flex items-center justify-between">
          <span className="font-mono text-sm text-cyan-300">{project.number}</span>
          <ArrowUpRight className="text-slate-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300" size={20} />
        </div>
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">{project.type}</p>
        <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
        <p className="mt-3 flex-1 leading-7 text-slate-400">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{item}</span>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-5">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.internal ? undefined : "_blank"}
              rel={link.internal ? undefined : "noreferrer"}
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-white"
            >
              {link.label}<ArrowUpRight size={15} />
            </a>
          ))}
        </div>
      </article>
    </Reveal>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigation = [
    ["About", "about"],
    ["Projects", "projects"],
    ["Skills", "skills"],
    ["Contact", "contact"],
  ];

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#080d17] font-sans text-slate-200 selection:bg-cyan-300 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(ellipse_at_15%_5%,rgba(8,145,178,0.15),transparent_35%),radial-gradient(ellipse_at_90%_35%,rgba(37,99,235,0.10),transparent_30%)]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#080d17]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Main navigation">
          <a href="#home" onClick={() => setMenuOpen(false)} className="font-mono text-lg font-bold tracking-tight text-white">
            datta<span className="text-cyan-300">.</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navigation.map(([label, id]) => (
              <button key={id} onClick={() => goTo(id)} className="text-sm text-slate-400 transition hover:text-white">{label}</button>
            ))}
            <a href="mailto:ndattasairam03@gmail.com" className="rounded-lg border border-cyan-300/40 px-4 py-2 text-sm text-cyan-200 transition hover:bg-cyan-300 hover:text-slate-950">Let's talk</a>
          </div>
          <button className="rounded-lg p-2 text-white md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#080d17] px-5 py-4 md:hidden">
            {navigation.map(([label, id]) => (
              <button key={id} onClick={() => goTo(id)} className="block w-full py-3 text-left text-slate-300">{label}</button>
            ))}
            <a href="mailto:ndattasairam03@gmail.com" className="mt-2 inline-block py-2 text-cyan-300">Let's talk <ArrowUpRight className="inline" size={15} /></a>
          </div>
        )}
      </header>

      <section id="home" className="relative z-10 mx-auto flex min-h-screen max-w-6xl scroll-mt-24 items-center px-5 pb-20 pt-32 sm:px-8">
        <div className="max-w-4xl">
          <Reveal>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-4 py-2 text-sm text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> Software engineer · Open to meaningful collaborations
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p className="mb-4 font-mono text-sm tracking-wide text-slate-400">Hi, I'm N. Datta Sai Ram Kumar</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
              I build software that solves <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">real problems.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              Full-stack engineer focused on backend systems, APIs, databases and cloud infrastructure. I enjoy turning complex workflows into dependable products.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button onClick={() => goTo("projects")} className="inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200">
                Explore my work <ArrowRight size={17} />
              </button>
              <a href="mailto:ndattasairam03@gmail.com" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-medium text-white transition hover:border-cyan-300/50 hover:text-cyan-200">
                Get in touch <Mail size={17} />
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-14 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-7 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2"><Code2 size={16} className="text-cyan-300" /> Backend & full-stack</span>
              <span className="inline-flex items-center gap-2"><Database size={16} className="text-cyan-300" /> Data & performance</span>
              <span className="inline-flex items-center gap-2"><Terminal size={16} className="text-cyan-300" /> Cloud & DevOps</span>
            </div>
          </Reveal>
        </div>
        <div className="pointer-events-none absolute -right-40 top-1/4 hidden h-[32rem] w-[32rem] rounded-full border border-cyan-300/10 lg:block">
          <div className="absolute inset-10 rounded-full border border-blue-400/10" />
          <div className="absolute inset-24 rounded-full border border-cyan-300/10" />
          <div className="absolute right-12 top-24 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_35px_8px_rgba(103,232,249,0.25)]" />
        </div>
        <button onClick={() => goTo("about")} className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-500 transition hover:text-cyan-300 sm:flex">
          Scroll to explore <ArrowDown size={14} />
        </button>
      </section>

      <section id="about" className="relative z-10 scroll-mt-24 border-y border-white/[0.07] bg-white/[0.02] px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeading eyebrow="A little about me" title="Engineer by craft. Builder by curiosity." />
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5 text-base leading-8 text-slate-400">
              <p>
                I'm a software engineer who enjoys working across the stack, with a particular interest in backend architecture, database performance and integrations. I care about writing maintainable code and understanding the problem behind each feature.
              </p>
              <p>
                My day-to-day interests span API design, relational databases, distributed systems, mobile applications and deployment workflows. I also build independent products to explore ideas and learn by shipping.
              </p>
              <div className="grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
                <div className="flex gap-3"><BriefcaseBusiness className="mt-1 shrink-0 text-cyan-300" size={19} /><div><p className="font-medium text-white">Professional experience</p><p className="mt-1 text-sm leading-6 text-slate-500">Software engineering since 2024</p></div></div>
                <div className="flex gap-3"><Terminal className="mt-1 shrink-0 text-cyan-300" size={19} /><div><p className="font-medium text-white">What I enjoy</p><p className="mt-1 text-sm leading-6 text-slate-500">Backend systems, performance and product building</p></div></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="projects" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8">
        <Reveal><SectionHeading eyebrow="Selected work" title="Projects I've been building" description="A selection of product work and engineering experiments. Explore the repositories for implementation details." /></Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
        </div>
      </section>

      <section id="skills" className="relative z-10 border-y border-white/[0.07] bg-white/[0.02] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionHeading eyebrow="My toolbox" title="Technologies I work with" description="A practical toolkit across application development, data, infrastructure and delivery." /></Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <Reveal key={group.title} delay={index * 80}>
                  <article className="h-full rounded-2xl border border-white/10 bg-[#080d17]/70 p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-xl bg-cyan-300/10 p-3 text-cyan-300"><Icon size={21} /></div>
                      <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                    </div>
                    <p className="mb-5 text-sm leading-6 text-slate-500">{group.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => <span key={skill} className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.05] px-3 py-2 text-xs text-slate-300"><Check size={12} className="text-cyan-300" />{skill}</span>)}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 scroll-mt-24 px-5 py-28 text-center sm:px-8">
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-cyan-300">What's next?</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">Have an interesting problem to solve?</h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">I'm always happy to connect about engineering, product ideas and thoughtful collaborations.</p>
          <a href="mailto:ndattasairam03@gmail.com" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200">Say hello <ArrowUpRight size={17} /></a>
          <div className="mt-12 flex justify-center gap-6">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target={label === "Email" ? undefined : "_blank"} rel={label === "Email" ? undefined : "noreferrer"} aria-label={label} className="rounded-full border border-white/10 p-3 text-slate-400 transition hover:border-cyan-300/40 hover:text-cyan-300"><Icon size={20} /></a>
            ))}
          </div>
        </Reveal>
      </section>

      <footer className="relative z-10 border-t border-white/[0.08] px-5 py-7 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-slate-600 sm:flex-row">
          <p>© {new Date().getFullYear()} N. Datta Sai Ram Kumar. Built with curiosity.</p>
          <a href="https://github.com/NGamerHere" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">Source on GitHub <ArrowUpRight className="inline" size={13} /></a>
        </div>
      </footer>
    </main>
  );
}
