import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser } from "react-icons/fa";


function About() {

    return (
        <>
            <section id="about" className="min-h-screen flex items-center justify-center overflow-hidden relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
                <div className="relative w-full h-full">
                    {/* Content Container */}
                    <div className="relative z-10 container mx-auto px-4 py-3 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                            
                            {/* Left Column - Photos */}
                            <div className="space-y-6 pl-6">
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center lg:text-left animate-fade-in-up">
                                    About <span className="text-indigo-600">Me</span>
                                </h2>
                                
                                {/* Creative Photo Layout */}
                                <div className="relative">
                                    {/* Main Photo */}
                                    <div className="relative mb-6 animate-fade-in-up animation-delay-300">
                                        <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105">
                                            <img
                                                src="/Assets/Images/about-1.JPG"
                                                alt="Seniru Abeywickrama"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        {/* Decorative Elements */}
                                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-indigo-400 rounded-full opacity-30 animate-pulse"></div>
                                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-400 rounded-full opacity-30 animate-pulse animation-delay-1000"></div>
                                    </div>

                                    {/* Smaller Photos */}
                                    <div className="flex justify-center lg:justify-start gap-4 animate-fade-in-up animation-delay-500">
                                        <div className="w-32 h-40 hover:h-56 rounded-xl overflow-hidden shadow-lg transform -rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-110">
                                            <img
                                                src="/Assets/Images/about-2.JPG"
                                                alt="Photo 2"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="w-32 h-32 rounded-xl overflow-hidden shadow-lg transform rotate-6 hover:w-56 hover:h-36 hover:rotate-0 transition-all duration-500 hover:scale-110">
                                            <img
                                                src="/Assets/Images/about-3.JPG"
                                                alt="Photo 3"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Details */}
                            <div className="space-y-8 animate-fade-in-up animation-delay-700">
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-xl">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                        <FaUser className="text-indigo-600" />
                                        Personal Details
                                    </h3>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4 p-3 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-all duration-300">
                                            <FaUser className="text-indigo-600 text-xl" />
                                            <div>
                                                <p className="text-gray-600 text-sm">Name</p>
                                                <p className="text-gray-800 font-semibold">Seniru Abeywickrama</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 p-3 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-all duration-300">
                                            <FaPhone className="text-indigo-600 text-xl" />
                                            <div>
                                                <p className="text-gray-600 text-sm">Phone</p>
                                                <p className="text-gray-800 font-semibold">+94 77 460 7201</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 p-3 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-all duration-300">
                                            <FaEnvelope className="text-indigo-600 text-xl" />
                                            <div>
                                                <p className="text-gray-600 text-sm">Email</p>
                                                <p className="text-gray-800 font-semibold">seniruabeywickrama@gmail.com</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 p-3 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-all duration-300">
                                            <FaMapMarkerAlt className="text-indigo-600 text-xl" />
                                            <div>
                                                <p className="text-gray-600 text-sm">Address</p>
                                                <p className="text-gray-800 font-semibold">No 68 2/2 Union Place, Colombo 02, Sri Lanka</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-xl">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">About Me</h3>
                                    <p className="text-gray-700 leading-relaxed text-justify">
                                        Full Stack Software Engineer with 2+ years of experience building scalable
                                        web and mobile apps using <b>React.js, Next.js, Node.js, Angular, Serverless, and AWS</b>. I
                                        specialize in crafting AI-integrated solutions, RESTful APIs, and responsive
                                        UIs using Tailwind CSS and MongoDB/MySQL. Proven success in end-to-end development,
                                        cloud deployment, and real-time collaboration with cross-functional teams. Let's bring
                                        your ideas to life-clean, fast, and user-focused. I love creating innovative solutions and
                                        bringing ideas to life through code. With a strong foundation in both frontend and backend
                                        development, I strive to build scalable, user-friendly applications that make a difference.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mt-4 text-justify">
                                        When I'm not coding, you can find me exploring new technologies, contributing 
                                        to open-source projects, or sharing knowledge with the developer community.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
