import {FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";


function Education() {

    const educations = [
        {
            school: "Informatics Institute of Technology | University of Westminster",
            degree: "B.Eng(Hons) Software Engineering",
            year: 2023,
            duration: "2019 - 2023",
            description: "Graduated with Second Upper Honors. Specialized in Java and Web Development.",
            logo: "/Assets/Icons/iit.png"
        },
        {
            school: "Institute of Software Engineering(IJSE)-Panadura",
            degree: "Comprehensive Master Java Developer",
            year: 2021,
            duration: "2021 - 2022",
            description: "Focused on software development training enabling modern software design and developing methodologies",
            logo: "/Assets/Icons/ijse.jpeg"
        },
        {
            school: "Rahula College-Matara",
            degree: "G.C.E. Advanced Level",
            year: 2018,
            duration: "2005 - 2018",
            description: "Completed A/Ls in Mathematics stream with distinction.",
            logo: "/Assets/Icons/rahula.png"
        }
    ];

    const scrollRef = useRef(null);
    const scrollByAmount = 320;

    const handleScrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -scrollByAmount, behavior: 'smooth' });
        }
    };
    const handleScrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: scrollByAmount, behavior: 'smooth' });
        }
    };

    return (
        <>
            <section id="education" className="min-h-1/2 flex items-center justify-center overflow-hidden relative bg-gradient-to-br from-black via-gray-900 to-violet-900 py-20">
                <div className="container mx-auto px-2 md:px-4 py-8 relative">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center animate-fade-in-up animation-delay-300 animate-zoom-in">
                        Education
                    </h2>
                    {/* Scroll Buttons */}
                    <button
                        className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition absolute left-0 top-1/2 -translate-y-1/2 z-10"
                        aria-label="Scroll Left"
                        onClick={handleScrollLeft}
                        style={{outline: 'none'}}
                    >
                        <FaChevronLeft size={24} />
                    </button>
                    <button
                        className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition absolute right-0 top-1/2 -translate-y-1/2 z-10"
                        aria-label="Scroll Right"
                        onClick={handleScrollRight}
                        style={{outline: 'none'}}
                    >
                        <FaChevronRight size={24} />
                    </button>
                    <div className="w-full py-8 md:overflow-x-auto md:hide-scrollbar" ref={scrollRef}>
                        <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-12 md:space-y-0 md:min-w-max md:px-8 relative">
                            {educations.map((edu, idx) => (
                                <div key={edu.school} className="flex flex-col items-center w-full md:min-w-[300px] px-2">
                                    {/* Year */}
                                    <span className="text-indigo-400 font-bold mb-2">{edu.year}</span>
                                    {/* Timeline branch */}
                                    <div className="w-1 h-8 bg-indigo-300 md:w-8 md:h-1 md:mb-0 mb-2"></div>
                                    {/* Card */}
                                    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-shadow duration-500 animate-fade-in-up animate-zoom-in w-full max-w-[95vw] md:max-w-none">
                                        <div className="flex items-center gap-4 mb-2">
                                            <img src={edu.logo} alt={edu.school} className="w-20 h-20 rounded-full shadow" />
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-800">{edu.school}</h3>
                                                <p className="text-indigo-600 font-semibold">{edu.degree}</p>
                                                <p className="text-gray-500 text-sm">{edu.duration}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-700">{edu.description}</p>
                                    </div>
                                    {/* Timeline branch (if not last) */}
                                    {idx !== educations.length - 1 && (
                                        <div className="h-8 w-1 bg-indigo-300 md:w-24 md:h-1 md:mt-2 mt-2"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Education;
