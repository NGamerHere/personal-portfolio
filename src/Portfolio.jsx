import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Twitter, Code, Server, Database, Cloud,ArrowUpRight } from 'lucide-react';

// A simple component for the section headers to maintain consistency
const SectionTitle = ({ children }) => (
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-b from-gray-200 to-gray-600">
        {children}
    </h2>
);

export default function Portfolio() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Data for projects and skills remains the same
    const projects = [
        { title: 'Bigwala School Application', description: 'A full-featured e-commerce application with real-time Student Management, secure payment integration, and admin dashboard.', tags: ['Express.Js', 'Node.js', 'MySQL', 'Prisma','React.Js',"TypeScript","TailwindCSS"] , link:"#" },
        { title: 'CareSync Hospital Application', description: 'A full-featured hospital application with real-time patience management, Pharmacy management, and Sales Management.', tags: ['Java',"Spring boot","Flutter","ORM","MySQL"] , link:"/caresync" },
        //{ title: 'Real-Time Chat Application', description: 'WebSocket-based chat platform with end-to-end encryption, file sharing, and presence detection.', tags: ['React', 'Socket.io', 'Express', 'Redis'] },
        //{ title: 'Project Management Dashboard', description: 'Collaborative project management tool with kanban boards, time tracking, and team analytics.', tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'] },
        { title: 'DevOps Automation Suite', description: 'CI/CD pipeline automation with infrastructure as code, automated testing, and deployment strategies.', tags: ['Jenkins', 'Terraform', 'GitHub Actions', 'Ansible'] ,link:"#" },
        { title: 'Cloud-Native Microservices', description: 'Scalable microservices architecture deployed on AWS with CI/CD pipelines, containerization, and load balancing.', tags: ['Spring Boot', 'Docker', 'AWS', 'Kubernetes','Qurakus'] ,link:"#" },
        //{ title: 'Analytics Dashboard', description: 'Real-time analytics platform with data visualization, custom reports, and API integrations.', tags: ['React', 'D3.js', 'Spring Boot', 'MySQL'] },
    ];

    const skills = {
        'Frontend': { icon: <Code />, items: ['React.js & Next.js', 'TypeScript', 'HTML5 & CSS3', 'Tailwind CSS', 'Redux & Context API'] },
        'Backend': { icon: <Server />, items: ['Node.js & Express', 'Java Spring Boot', 'RESTful APIs', 'GraphQL', 'Microservices'] },
        'Database': { icon: <Database />, items: ['MongoDB', 'PostgreSQL & MySQL', 'Redis', 'Prisma ORM', 'Database Design'] },
        'Cloud & DevOps': { icon: <Cloud />, items: ['AWS (EC2, S3, Lambda)', 'Docker & Kubernetes', 'CI/CD Pipelines', 'GitHub Actions', 'Terraform'] }
    };

    const techStack = ['MERN Stack', 'Next.js', 'Java Spring Boot', 'Cloud & DevOps', 'Microservices'];

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="min-h-screen bg-gray-950 text-gray-300 font-sans">
            <nav className="fixed top-0 w-full z-50 bg-gray-950/70 backdrop-blur-lg border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-white cursor-pointer" onClick={() => scrollToSection('home')}>
                           N Datta sai ram kumar
                        </span>

                        <ul className="hidden md:flex items-center gap-2">
                            {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => scrollToSection(item.toLowerCase())}
                                        className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-all duration-300"
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <button
                            className="md:hidden text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    <div className={`transition-all duration-300 ease-in-out md:hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                        <ul className="mt-4 space-y-2">
                            {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => scrollToSection(item.toLowerCase())}
                                        className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

            <main>
                <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24">
                    <div className="max-w-4xl text-center">
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 animate-fade-in-up">
                            Full-Stack Developer
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                            I craft elegant and scalable web applications, transforming complex problems into seamless user experiences.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {techStack.map((tech) => (
                                <span key={tech} className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-wrap justify-center gap-4">
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-lg shadow-white/10 hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                            >
                                View My Work
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="px-8 py-3 bg-transparent border-2 border-gray-700 font-semibold rounded-lg hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
                            >
                                Get In Touch
                            </button>
                        </div>
                    </div>
                </section>

                <section id="projects" className="py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <SectionTitle>Featured Projects</SectionTitle>

                        <div className="grid md-grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project) => (
                                <div
                                    key={project.title}
                                    className="project-card flex flex-col p-6 rounded-xl transition-all duration-300 group"
                                >
                                    <div className="flex-grow">
                                        <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                                        <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                                    </div>

                                    <div className="mt-auto">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
                                    {tag}
                                </span>
                                            ))}
                                        </div>

                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        >
                                            View Project
                                            <ArrowUpRight className="h-4 w-4" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="skills" className="py-20 px-6 bg-gray-900">
                    <div className="max-w-7xl mx-auto">
                        <SectionTitle>Technical Skills</SectionTitle>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {Object.entries(skills).map(([category, { icon, items }]) => (
                                <div key={category} className="bg-gray-950 border border-gray-800 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-white">{icon}</span>
                                        <h3 className="text-xl font-bold text-white">{category}</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {items.map((skill) => (
                                            <li key={skill} className="text-gray-400 flex items-center gap-2">
                                                <span className="text-gray-500">▹</span>
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" className="py-20 px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <SectionTitle>Let's Connect</SectionTitle>
                        <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                            I'm actively seeking new opportunities and collaborations. Whether you have a project in mind or just want to say hello, my inbox is always open.
                        </p>

                        <div className="flex justify-center gap-8">
                            <a href="https://github.com/NGamerHere" target="_blank" className="text-gray-400 hover:text-white transition-all transform hover:-translate-y-1" aria-label="GitHub"><Github size={32} /></a>
                            <a href="https://www.linkedin.com/in/n-datta-sai-ram-kumar-37a251241/" target="_blank" className="text-gray-400 hover:text-white transition-all transform hover:-translate-y-1" aria-label="LinkedIn"><Linkedin size={32} /></a>
                            <a href="mailto:ndattasairam03@gmail.com" target="_blank" className="text-gray-400 hover:text-white transition-all transform hover:-translate-y-1" aria-label="Email"><Mail size={32} /></a>
                            <a href="https://x.com/NDattaSaiRam3" target="_blank" className="text-gray-400 hover:text-white transition-all transform hover:-translate-y-1" aria-label="Twitter"><Twitter size={32} /></a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} N Datta sai ram kumar. All rights reserved.</p>
            </footer>

            <style jsx>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
                .project-card {
                    background: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.05), transparent 40%);
                    border: 1px solid hsl(0 0% 100% / 0.1);
                }
                .project-card:hover {
                    background: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.1), transparent 50%);
                }
            `}</style>
        </div>
    );
}