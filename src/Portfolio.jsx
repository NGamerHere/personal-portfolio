import React, { useState, useEffect, useRef } from "react";
import {
    Menu,
    X,
    Github,
    Linkedin,
    Mail,
    Twitter,
    Code,
    Server,
    Database,
    Cloud,
    ArrowUpRight,
} from "lucide-react";

/* =======================
   Scroll Reveal Hook
======================= */
function useScrollReveal(options = {}) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15, ...options }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return [ref, visible];
}

/* =======================
   Section Title
======================= */
const SectionTitle = ({ children }) => {
    const [ref, show] = useScrollReveal();

    return (
        <h2
            ref={ref}
            className={`text-4xl md:text-5xl font-extrabold text-center mb-16
      transition-all duration-700 ease-out
      ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      bg-gradient-to-r from-white via-gray-300 to-gray-500
      bg-clip-text text-transparent`}
        >
            {children}
        </h2>
    );
};

/* =======================
   Main Component
======================= */
export default function Portfolio() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const projects = [
        {
            title: "Bigwala School Application",
            description:
                "A scalable school management platform with real-time student tracking, secure payments, and an admin dashboard.",
            tags: [
                "Node.js",
                "Express",
                "React",
                "TypeScript",
                "MySQL",
                "Prisma",
                "TailwindCSS",
            ],
            link: "#",
        },
        {
            title: "CareSync Hospital Application",
            description:
                "Hospital management system covering patient flow, pharmacy, billing, and sales analytics.",
            tags: ["Java", "Spring Boot", "Flutter", "MySQL", "ORM"],
            link: "/caresync",
        },
        {
            title: "DevOps Automation Suite",
            description:
                "CI/CD automation with infrastructure as code, testing pipelines, and deployment strategies.",
            tags: ["Jenkins", "Terraform", "GitHub Actions", "Ansible"],
            link: "#",
        },
        {
            title: "Cloud-Native Microservices",
            description:
                "AWS-hosted microservices with Docker, Kubernetes, and scalable CI/CD pipelines.",
            tags: ["Spring Boot", "Docker", "AWS", "Kubernetes", "Quarkus"],
            link: "#",
        },
    ];

    const skills = {
        Frontend: {
            icon: <Code />,
            items: [
                "React & Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Redux & Context API",
            ],
        },
        Backend: {
            icon: <Server />,
            items: [
                "Node.js & Express",
                "Java Spring Boot",
                "REST & GraphQL",
                "Microservices",
            ],
        },
        Database: {
            icon: <Database />,
            items: [
                "MySQL & PostgreSQL",
                "MongoDB",
                "Redis",
                "Prisma ORM",
            ],
        },
        "Cloud & DevOps": {
            icon: <Cloud />,
            items: [
                "AWS (EC2, S3, Lambda)",
                "Docker & Kubernetes",
                "CI/CD Pipelines",
                "Terraform",
            ],
        },
    };

    const techStack = [
        "MERN Stack",
        "Next.js",
        "Spring Boot",
        "Microservices",
        "Cloud & DevOps",
    ];

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-950 text-gray-300 font-sans">
            {/* =======================
          NAVBAR
      ======================= */}
            <nav className="fixed top-0 w-full z-50 bg-gray-950/70 backdrop-blur-lg border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span
              className="text-2xl font-bold text-white cursor-pointer"
              onClick={() => scrollToSection("home")}
          >
            N Datta Sai Ram Kumar
          </span>

                    <ul className="hidden md:flex gap-2">
                        {["Home", "Projects", "Skills", "Contact"].map((item) => (
                            <li key={item}>
                                <button
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="px-4 py-2 rounded-md hover:bg-gray-800 transition"
                                >
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* =======================
          HERO
      ======================= */}
            <section
                id="home"
                className="min-h-screen flex items-center justify-center px-6 pt-24 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_40%)]" />
                <Hero techStack={techStack} scrollToSection={scrollToSection} />
            </section>

            {/* =======================
          PROJECTS
      ======================= */}
            <section id="projects" className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle>Featured Projects</SectionTitle>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, i) => {
                            const [ref, show] = useScrollReveal();
                            return (
                                <div
                                    ref={ref}
                                    key={project.title}
                                    style={{ transitionDelay: `${i * 120}ms` }}
                                    className={`relative p-6 rounded-2xl border border-gray-800
                  bg-gradient-to-b from-gray-900/60 to-gray-950
                  transition-all duration-700
                  ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
                  hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5`}
                                >
                                    <h3 className="text-2xl font-bold text-white mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs px-3 py-1 rounded-full bg-gray-800 border border-gray-700"
                                            >
                        {tag}
                      </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.link}
                                        className="inline-flex items-center gap-2 text-white opacity-70 hover:opacity-100 transition"
                                    >
                                        View Project <ArrowUpRight size={16} />
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =======================
          SKILLS
      ======================= */}
            <section id="skills" className="py-20 px-6 bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle>Technical Skills</SectionTitle>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {Object.entries(skills).map(([key, val], i) => {
                            const [ref, show] = useScrollReveal();
                            return (
                                <div
                                    ref={ref}
                                    key={key}
                                    style={{ transitionDelay: `${i * 100}ms` }}
                                    className={`p-6 rounded-2xl border border-gray-800 bg-gray-950
                  transition-all duration-700
                  ${show ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                  hover:-translate-y-1`}
                                >
                                    <div className="flex items-center gap-3 mb-4 text-white">
                                        {val.icon}
                                        <h3 className="text-xl font-bold">{key}</h3>
                                    </div>
                                    <ul className="space-y-2 text-gray-400 text-sm">
                                        {val.items.map((item) => (
                                            <li key={item}>▹ {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =======================
          CONTACT
      ======================= */}
            <section id="contact" className="py-20 px-6 text-center">
                <SectionTitle>Let's Connect</SectionTitle>
                <p className="max-w-2xl mx-auto text-gray-400 mb-10">
                    I’m always open to new opportunities, collaborations, or just a good
                    tech conversation.
                </p>

                <div className="flex justify-center gap-8">
                    <a href="https://github.com/NGamerHere"><Github size={32} /></a>
                    <a href="https://www.linkedin.com/in/n-datta-sai-ram-kumar-37a251241/"><Linkedin size={32} /></a>
                    <a href="mailto:ndattasairam03@gmail.com"><Mail size={32} /></a>
                    <a href="https://x.com/NDattaSaiRam3"><Twitter size={32} /></a>
                </div>
            </section>

            <footer className="border-t border-gray-800 py-6 text-center text-gray-500">
                © {new Date().getFullYear()} N Datta Sai Ram Kumar
            </footer>
        </div>
    );
}

/* =======================
   HERO COMPONENT
======================= */
function Hero({ techStack, scrollToSection }) {
    const [ref, show] = useScrollReveal();

    return (
        <div
            ref={ref}
            className={`max-w-4xl text-center transition-all duration-1000
      ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
            <h1 className="text-5xl md:text-7xl font-black mb-6">
        <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          Full-Stack Developer
        </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-10">
                I design and build scalable systems that feel simple, fast, and human.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
                {techStack.map((t) => (
                    <span
                        key={t}
                        className="px-4 py-2 text-sm rounded-full bg-gray-800 border border-gray-700"
                    >
            {t}
          </span>
                ))}
            </div>

            <div className="flex justify-center gap-4">
                <button
                    onClick={() => scrollToSection("projects")}
                    className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:scale-105 transition"
                >
                    View My Work
                </button>
                <button
                    onClick={() => scrollToSection("contact")}
                    className="px-8 py-3 border border-gray-700 rounded-lg hover:bg-gray-800 transition"
                >
                    Get In Touch
                </button>
            </div>
        </div>
    );
}