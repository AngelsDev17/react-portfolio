import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    const projects = [
        {
            title: "Cloud Platform 1",
            description:
                "Scalable cloud solutions for modern applications with real-time monitoring.",
            skills: ["React", "Node.js", "AWS", "Docker"],
            url: "#projects",
        },
        {
            title: "Cloud Platform 2",
            description:
                "Explore my projects that showcase my skills and creativity.",
            skills: ["React", "Node.js", "AWS", "Docker"],
            url: "#projects",
        },
        {
            title: "Cloud Platform 3",
            description:
                "Scalable cloud solutions for modern applications with real-time monitoring.",
            skills: ["React", "Node.js", "AWS", "Docker"],
            url: "#projects",
        },
        {
            title: "Cloud Platform 4",
            description:
                "Explore my projects that showcase my skills and creativity.",
            skills: ["React", "Node.js", "AWS", "Docker"],
            url: "#projects",
        },
    ];

    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project) => (
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                <h3 className="text-xl font-bold mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-4">
                                    {project.description}
                                </p>

                                <div>
                                    {project.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center">
                                    <a
                                        href={project.url}
                                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                    >
                                        View Project →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
