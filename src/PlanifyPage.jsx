import React, { useState } from "react";

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="font-sans bg-gray-50 text-gray-900">

            {/* Header */}
            <header className="sticky top-0 z-50 bg-white shadow">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-pink-600">Planify</h1>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-8 font-medium">
                        <button className="hover:text-pink-600">Home</button>
                        <button className="hover:text-pink-600">Services</button>
                        <button className="hover:text-pink-600">Social</button>
                        <button className="hover:text-pink-600">Spotlight</button>
                        <button className="hover:text-pink-600">About</button>
                        <button className="hover:text-pink-600">Contact</button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-2xl"
                    >
                        ☰
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-3">
                        <MobileItem label="Home" />
                        <MobileItem label="Services" />
                        <MobileItem label="Social" />
                        <MobileItem label="Spotlight" />
                        <MobileItem label="About" />
                        <MobileItem label="Contact" />
                    </div>
                )}
            </header>

            {/* HERO SECTION */}
            <section className="text-center py-24 md:py-32 bg-white border-b border-gray-200 px-6">
                <h2 className="text-4xl md:text-6xl font-extrabold leading-tight fade-in">
                    We Plot Experiences
                </h2>
                <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                    Hyderabad’s All-in-One Event • Community • Entertainment Hub
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <CTAButton label="Planify Services" />
                    <CTAButton label="Planify Social" />
                    <CTAButton label="Planify Spotlight" />
                </div>
            </section>

            {/* FEATURES / VERTICALS */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <h3 className="text-3xl md:text-4xl font-bold text-center mb-14">
                    Explore Our Three Verticals
                </h3>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <VerticalCard
                        title="Planify Services"
                        desc="Weddings • Corporate Events • Concerts • Private Gatherings"
                        icon="🎉"
                    />
                    <VerticalCard
                        title="Planify Social"
                        desc="Meetups • Coffee Dates • Workshops • Hobby Clubs"
                        icon="👥"
                    />
                    <VerticalCard
                        title="Planify Spotlight"
                        desc="Comedy • Music • Kids Shows • Conferences"
                        icon="✨"
                    />
                </div>
            </section>

            {/* TRENDING EVENTS */}
            <section className="bg-white py-20 border-y border-gray-200 px-6">
                <h3 className="text-3xl font-bold text-center mb-6">Trending Now</h3>
                <p className="text-center text-gray-500 text-sm mb-12">
                    (Auto-scroll carousel can be added later)
                </p>

                <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <EventCard title="Stand-up Comedy Night" price="₹499" />
                    <EventCard title="Art & Coffee Meetup" price="₹199" />
                    <EventCard title="Hyderabad Music Fest" price="₹799" />
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <h3 className="text-3xl md:text-4xl font-bold text-center mb-14">How It Works</h3>

                <div className="grid md:grid-cols-3 gap-12">
                    <Step number="1" title="Discover" desc="Browse events, services & communities." />
                    <Step number="2" title="Select" desc="Choose your event & register instantly." />
                    <Step number="3" title="Connect" desc="Get WhatsApp link + email updates." />
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-xl font-bold">Planify</h1>
                    <p className="mt-2 opacity-70">We Plot Experiences • Hyderabad</p>
                    <div className="mt-4 flex justify-center gap-6 text-gray-300">
                        <a href="#">Facebook</a>
                        <a href="#">Instagram</a>
                        <a href="#">Twitter</a>
                    </div>
                    <p className="mt-6 opacity-50 text-sm">
                        © {new Date().getFullYear()} Planify • All Rights Reserved
                    </p>
                </div>
            </footer>
        </div>
    );
}

/* REUSABLE COMPONENTS */

function MobileItem({ label }) {
    return <p className="text-gray-700 font-medium">{label}</p>;
}

function CTAButton({ label }) {
    return (
        <button className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-xl shadow hover:scale-105 transition">
            {label}
        </button>
    );
}

function VerticalCard({ title, desc, icon }) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-1 text-center">
            <div className="text-4xl mb-4">{icon}</div>
            <h4 className="text-xl font-bold text-pink-600">{title}</h4>
            <p className="text-gray-600 mt-2">{desc}</p>
        </div>
    );
}

function EventCard({ title, price }) {
    return (
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <div className="h-32 bg-gray-200 animate-pulse"></div>
            <div className="p-5">
                <h4 className="text-lg font-semibold">{title}</h4>
                <p className="text-pink-600 font-bold mt-2">{price}</p>
                <button className="mt-4 w-full py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">
                    Book Now
                </button>
            </div>
        </div>
    );
}

function Step({ number, title, desc }) {
    return (
        <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center mx-auto bg-pink-600 text-white font-bold rounded-full text-3xl">
                {number}
            </div>
            <h4 className="text-xl font-semibold mt-4">{title}</h4>
            <p className="text-gray-600 mt-2">{desc}</p>
        </div>
    );
}
