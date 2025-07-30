import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Projects() {

    const projects = [
        {
            name: "Depbot Ai - Early Depression Detection System",
            description: "A weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
            image: "/Assets/Images/Projects/sample-03.PNG",
            tech: ["Streamlit", "Python", "NLP", "Machine Learning","Numpy","HTML","CSS","TensorFlow"],
            liveUrl: "https://project3.com",
            githubUrl: "https://github.com/user/project3"
        },
        {
            name: "University Website Sample Design",
            description: "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
            image: "/Assets/Images/Projects/sample-01.PNG",
            tech: ["React", "Tailwind CSS"],
            liveUrl: "https://project1.com",
            githubUrl: "https://github.com/user/project1"
        },
        {
            name: "Bouquet Store Sample Design",
            description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            image: "/Assets/Images/Projects/sample-02.PNG",
            tech: ["React", "Tailwind CSS"],
            liveUrl: "https://project2.com",
            githubUrl: "https://github.com/user/project2"
        },
        {
            name: "Smart Adviser",
            description: "A modern portfolio website with smooth animations, responsive design, and interactive elements.",
            image: "/Assets/Images/Projects/sample-04.PNG",
            tech: ["Laravel","HTML","CSS","JS","MYSQL","ChartJs"],
            liveUrl: "https://project4.com",
            githubUrl: "https://github.com/user/project4"
        },
        {
            name: "Movie Theater Application",
            description: "A comprehensive social media analytics dashboard with data visualization and reporting features.",
            image: "/Assets/Images/Projects/sample-05.PNG",
            tech: ["ReactJs", "Tailwind Css", "Node.Js"],
            liveUrl: "https://project5.com",
            githubUrl: "https://github.com/user/project5"
        },
        {
            name: "Sample UI Generated with AI",
            description: "An AI-powered chat application with natural language processing and intelligent response generation.",
            image: "/Assets/Images/Projects/sample-06.PNG",
            tech: ["React", "HTML", "Cursor Ai", "V0.dev", "Tailwind CSS"],
            liveUrl: "https://project6.com",
            githubUrl: "https://github.com/user/project6"
        }
    ];

    return (
        <>
            <section id="projects" className="min-h-screen flex items-center justify-center overflow-hidden relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20">
                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center animate-fade-in-up animation-delay-300 animate-zoom-in">
                        My <span className="text-blue-400">Projects</span>
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, idx) => (
                            <div
                                key={project.name}
                                className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-500 animate-fade-in-up animate-zoom-in hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                                style={{ animationDelay: `${300 + idx * 200}ms` }}
                            >
                                {/* Desktop Mockup */}
                                <div className="relative mb-6">
                                    <div className="bg-gray-800 rounded-t-lg p-2 flex items-center gap-2">
                                        <div className="flex gap-1">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <div className="flex-1 text-center text-gray-400 text-xs">
                                            {project.name}
                                        </div>
                                    </div>
                                    <div className="bg-gray-900 rounded-b-lg overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            className="w-full h-42 object-cover group-hover:scale-110 transition-transform duration-500"
                                            onError={(e) => {
                                                e.target.src = "https://via.placeholder.com/400x300/1f2937/ffffff?text=Project+Image";
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                                        {project.name}
                                    </h3>
                                    
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30 hover:bg-blue-600/40 transition-colors duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3 pt-4">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-105 group/btn"
                                        >
                                            <FaExternalLinkAlt size={14} />
                                            <span className="text-sm">Live Demo</span>
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300 hover:scale-105 group/btn"
                                        >
                                            <FaGithub size={14} />
                                            <span className="text-sm">Code</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;
