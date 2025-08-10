import { FaChevronLeft, FaChevronRight, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaMedium, FaPaperPlane, FaUser, FaComments } from "react-icons/fa";
import { useRef, useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    const socialLinks = [
        { icon: FaGithub, href: "https://github.com/SeniruAbeywickrama", label: "GitHub", color: "hover:text-gray-400" },
        { icon: FaLinkedin, href: "https://www.linkedin.com/in/seniru-abeywickrama-a0a604195/", label: "LinkedIn", color: "hover:text-blue-400" },
        { icon: FaMedium, href: "https://medium.com/@seniruabeywickrama", label: "Medium", color: "hover:text-green-400" },
        { icon: FaEnvelope, href: "mailto:seniruabeywickrama@gmail.com", label: "Email", color: "hover:text-red-400" }
    ];

    return (
        <>
            <section id="contact" className="min-h-screen flex items-center justify-center overflow-hidden relative bg-gradient-to-br from-black via-gray-900 to-violet-900 py-20">
                {/* Floating Background Elements */}
                <div className="absolute top-[10%] left-[10%] w-20 h-20 bg-purple-400 rounded-full opacity-20 animate-float"></div>
                <div className="absolute top-[20%] right-[15%] w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-float animation-delay-500"></div>
                <div className="absolute bottom-[20%] left-[20%] w-24 h-24 bg-pink-400 rounded-full opacity-20 animate-float animation-delay-1000"></div>
                <div className="absolute bottom-[30%] right-[25%] w-12 h-12 bg-orange-400 rounded-full opacity-20 animate-float animation-delay-700"></div>
                
                {/* Animated Grid Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 py-8 relative z-10">
                    {/* Header Section */}
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 animate-gradient">Connect</span>
                        </h2>
                        {/*<p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">*/}
                        {/*    Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.*/}
                        {/*</p>*/}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left Column - Contact Form */}
                        <div className="space-y-8 animate-fade-in-up animation-delay-500">
                            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105">
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <FaComments className="text-purple-400" />
                                    Send Message
                                </h3>
                                
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="group">
                                            <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                                            <div className="relative">
                                                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                                                    placeholder="Your Name"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="group">
                                            <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                                            <div className="relative">
                                                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                                                    placeholder="your@email.com"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="group">
                                        <label className="block text-gray-300 text-sm font-medium mb-2">Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                                            placeholder="What's this about?"
                                            required
                                        />
                                    </div>
                                    
                                    <div className="group">
                                        <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows="5"
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 resize-none"
                                            placeholder="Tell me about you..."
                                            required
                                        ></textarea>
                                    </div>
                                    
                                    <a href="#"
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-3 group"
                                    >
                                        <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
                                        Send Message
                                    </a>
                                </form>
                            </div>
                        </div>

                        {/* Right Column - Contact Info & Social */}
                        <div className="space-y-8 animate-fade-in-up animation-delay-700">
                            {/* Contact Information */}
                            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105">
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <FaPhone className="text-blue-400" />
                                    Get In Touch
                                </h3>
                                
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300">
                                            <FaPhone className="text-blue-400 text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-gray-300 text-sm">Phone</p>
                                            <p className="text-white font-semibold">+94 77 460 7201</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                                        <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-all duration-300">
                                            <FaEnvelope className="text-purple-400 text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-gray-300 text-sm">Email</p>
                                            <p className="text-white font-semibold">seniruabeywickrama@gmail.com</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                                        <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center group-hover:bg-pink-500/30 transition-all duration-300">
                                            <FaMapMarkerAlt className="text-pink-400 text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-gray-300 text-sm">Location</p>
                                            <p className="text-white font-semibold">Colombo 02, Sri Lanka</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-green-500/25 transition-all duration-500 hover:scale-105">
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <FaUser className="text-green-400" />
                                    Follow Me
                                </h3>
                                
                                <div className="grid grid-cols-2 gap-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            className={`flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group ${social.color}`}
                                        >
                                            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                                                <social.icon className="text-white text-lg" />
                                            </div>
                                            <span className="text-white font-medium">{social.label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Response Card */}
                            {/*<div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-3xl p-6 border border-purple-500/30 shadow-2xl animate-pulse">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <FaPaperPlane className="text-purple-400 text-2xl" />
                                    </div>
                                    <h4 className="text-white font-semibold mb-2">Quick Response</h4>
                                    <p className="text-gray-300 text-sm">I typically respond within 24 hours</p>
                                </div>
                            </div>*/}
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    {/*<div className="text-center mt-16 animate-fade-in-up animation-delay-1000">*/}
                    {/*    <div className="inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-2xl p-6 border border-purple-500/30">*/}
                    {/*        <p className="text-gray-300 text-lg">*/}
                    {/*            Ready to start your next project? */}
                    {/*            <span className="text-white font-semibold ml-2">Let's make it happen!</span>*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </section>
        </>
    );
}

export default Contact;
