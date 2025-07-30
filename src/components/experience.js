
function Experience() {

    const experiences = [
        {
            company: "Engenuity Ai Ltd.",
            role: "Software Engineer I",
            duration: "Aug 2023 - Present",
            description: "Developed scalable web & mobile apps using Next/React and Tailwind CSS. Led UI/UX improvements and collaborated with backend(Node) teams.",
            logo: "/Assets/Icons/engen.jpeg",
            tech: ["React","Next.Js","Angular","React Native","Node.Js","Konva.Js","Facebook API","AWS","Tailwind","Redux"]
        },
        {
            company: "Apps Technologies Ltd.",
            role: "Trainee Software Engineer",
            duration: "Aug 2021 - Oct 2022",
            description: "Contributing to the development of enterprise web applications for financial manage and inventory management systems.",
            logo: "/Assets/Icons/apps_tech.jpeg",
            tech: ["Laravel", "CodeIgniter", "HTML","CSS","JS","ChartJs","MSSQL","MYSQL"]
        },
    ];

    return (
        <>
            <section id="experience" className="min-h-1/2 flex items-center justify-center overflow-hidden relative bg-gradient-to-br from-black via-gray-900 to-indigo-900 py-20">
                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center animate-fade-in-up animation-delay-300 animate-zoom-in">
                        Experience
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {experiences.map((exp, idx) => (
                            <div
                                key={exp.company}
                                className={`bg-white/80 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-white/50 hover:shadow-2xl hover:shadow-gray-300 transition-shadow duration-500 animate-fade-in-up animate-zoom-in animation-delay-${300 + idx * 200}`}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <img src={exp.logo} alt={exp.company} className="w-20 h-20 rounded-full shadow" />
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">{exp.company}</h3>
                                        <p className="text-indigo-600 font-semibold">{exp.role}</p>
                                        <p className="text-gray-500 text-sm">{exp.duration}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-2">{exp.description}</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {exp.tech.map(t => (
                                        <span key={t} className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs">{t}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Experience;
