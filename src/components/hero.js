import { FaFileDownload } from "react-icons/fa";


function Hero() {

    const techLogos = [
        { src: "/Assets/Icons/angularjs.png", alt: "ANGULAR" },
        { src: "/Assets/Icons/api.png", alt: "REST" },
        { src: "/Assets/Icons/aws.png", alt: "AWS" },
        { src: "/Assets/Icons/css.png", alt: "CSS" },
        { src: "/Assets/Icons/flutter.png", alt: "FLUTTER" },
        { src: "/Assets/Icons/github.png", alt: "GIT" },
        { src: "/Assets/Icons/java.png", alt: "JAVA" },
        { src: "/Assets/Icons/javascript.png", alt: "JAVASCRIPT" },
        { src: "/Assets/Icons/nextjs.png", alt: "NEXTJS" },
        { src: "/Assets/Icons/nodejs.png", alt: "NODEJS" },
        { src: "/Assets/Icons/php.png", alt: "PHP" },
        { src: "/Assets/Icons/redux.png", alt: "REDUX" },
    ];

    return (
        <>
            <section id="home" className="h-screen flex items-center justify-center overflow-hidden relative">
                <div className="relative w-full h-full">
                    <div className="absolute top-[30%] left-1/2 md:top-[30%] md:left-1/2 lg:top-1/2 lg:left-5 transform -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 text-center lg:text-left z-10 px-4">
                        <h1 className="text-white text-2xl md:text-5xl lg:text-6xl font-bold border-r-4 border-white whitespace-nowrap overflow-hidden w-[30ch] animate-typing">
                            <span className="text-indigo-400">Hi! </span>I'm Seniru Abeywickrama
                        </h1>

                        <div className="flex flex-col items-center lg:items-start justify-start mt-2">
                            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-amber-400 to-pink-500 animate-gradient">
                                Full Stack Developer
                            </h1>
                            <h2 className="mt-2 text-xl md:text-2xl lg:text-3xl text-gray-300 animate-fade-in delay-500">
                                Software Engineer
                            </h2>
                        </div>

                        <div className="flex items-center lg:items-start justify-center lg:justify-start">
                            <button className="flex mt-5 gap-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
                                <FaFileDownload size={25} />
                                Resume
                            </button>
                        </div>
                    </div>

                    {/* 🌐 Background Image */}
                    <img
                        src="/Assets/Images/my-background.jpg"
                        alt="hero"
                        className="w-full h-full object-cover object-right md:object-right sm:object-center"
                    />

                    {/* 🚀 Tech Slider at Bottom Left */}
                    <div className="absolute bottom-10 left-0 md:left-0 lg:left-10 lg:w-[50%] sm:w-[100%] md:w-[100%] h-[80px] rounded-lg overflow-hidden z-20">
                        <div className="flex items-center h-full animate-slide-horizontal gap-10 px-2 whitespace-nowrap">
                            {[...techLogos, ...techLogos].map((logo, index) => (
                                <img
                                    key={index}
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="w-12 h-12 object-contain"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
