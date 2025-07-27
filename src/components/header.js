import {useState} from "react";
import { TiThMenu } from "react-icons/ti";

function Header() {
    const [showSideNav, setShowSideNav] = useState(false);

    return (
        <>
            {/* Top Header */}
            <header className="bg-black text-white p-4 fixed top-0 left-0 shadow-md shadow-indigo-200 z-50 border-b-2 border-indigo-500 w-full">
                <div className="container flex justify-between items-center">
                    {/* Logo */}
                    <h2 className="text-indigo-400 font-bold mt-2 text-xl md:text-2xl lg:text-3xl animate-fade-in delay-500 pl-5">
                        Seniru
                    </h2>

                    {/* Desktop / Tablet Navigation */}
                    <nav className="hidden md:flex gap-6">
                        <a href="#home" className="hover:underline">HOME</a>
                        <a href="#screens" className="hover:underline">ABOUT</a>
                        <a href="#screens" className="hover:underline">EXPERIENCE</a>
                        <a href="#schedule" className="hover:underline">EDUCATION</a>
                        <a href="#schedule" className="hover:underline">PROJECTS</a>
                        <a href="#movies" className="hover:underline">CONTACT</a>

                        {/* LOCATION (hidden in md, visible in lg+) */}
                        <a href="#location" className="hover:underline hidden lg:inline">
                            LOCATION & CONTACT
                        </a>
                    </nav>

                    {/* Gallery - Only visible in side nav */}
                    {/* Hamburger - visible only on mobile/tablet */}
                    <button
                        className="lg:hidden text-white"
                        onClick={() => setShowSideNav(true)}
                    >
                        <TiThMenu size={30}/>

                    </button>
                </div>
            </header>

            {/* Side Navigation Overlay */}
            {showSideNav && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setShowSideNav(false)}
                    />

                    {/* Side Drawer */}
                    <div className="fixed top-0 right-0 bottom-0 w-80 bg-indigo-900 text-white z-50 p-6 flex flex-col gap-6 shadow-lg opacity-90 ">
                        <button
                            className="self-end text-white text-2xl"
                            onClick={() => setShowSideNav(false)}
                        >
                            ✕
                        </button>
                        <a href="#home" onClick={() => setShowSideNav(false)}>HOME</a>
                        <a href="#screens" onClick={() => setShowSideNav(false)}>OUR SCREENS</a>
                        <a href="#schedule" onClick={() => setShowSideNav(false)}>SCHEDULE</a>
                        <a href="#movies" onClick={() => setShowSideNav(false)}>MOVIE LIBRARY</a>
                        <a href="#gallery" onClick={() => setShowSideNav(false)}>GALLERY</a>
                        <a href="#location" onClick={() => setShowSideNav(false)}>LOCATION & CONTACT</a>
                    </div>
                </>
            )}


        </>
    );
}

export default Header;
