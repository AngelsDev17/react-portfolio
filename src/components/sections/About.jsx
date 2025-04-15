import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const technologies = [
        {
            title: "Frontend",
            skills: ["React", "Vue", "TypeScript", "TailwindCss", "Svelte"],
        },
        {
            title: "Backend",
            skills: ["C#", "Node.Js", "Python", "Azure", "MongoDB", "GraphQL"],
        },
    ];

    const education = [
        "B.S. in Computer Science - XYZ University (2016 - 2020)",
        "Relevant Coursework: Data Structures, Web Development, Cloud Computing...",
    ];

    const workExperience = [
        {
            position: "Software Engineer at ABC Corp (2020 - Present)",
            description:
                "Develop and maintained microservices for cloud-based applications.",
        },
        {
            position: "Intern at DEF Startups (2019)",
            description:
                "Assisted and building front-end components and integration REST APIs.",
        },
    ];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Passionate developer with expertise in building
                            scalable web applications and creating innovative
                            solutions.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {technologies.map((tech) => (
                                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4">
                                        {tech.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {tech.skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                🏫 Education
                            </h3>

                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {education.map((educationItem) => (
                                    <li>{educationItem}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                💼 Work Experience
                            </h3>

                            <div className="space-y-4 text-gray-300">
                                {workExperience.map((workItem) => (
                                    <div>
                                        <h4 className="font-semibold">
                                            {workItem.position}
                                        </h4>
                                        <p>{workItem.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
