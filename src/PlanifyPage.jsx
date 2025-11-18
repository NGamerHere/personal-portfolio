import React from "react";

export default function PlanifyPage() {
    return (
        <div className="font-sans bg-gray-50 text-gray-900">

            {/* Header */}
            <header className="sticky top-0 z-50 bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-pink-600">Planify</h1>
                    <nav className="space-x-6 font-medium">
                        <button className="hover:text-pink-600">Home</button>
                        <button className="hover:text-pink-600">Services</button>
                        <button className="hover:text-pink-600">Social</button>
                        <button className="hover:text-pink-600">Spotlight</button>
                        <button className="hover:text-pink-600">About</button>
                        <button className="hover:text-pink-600">Contact</button>
                    </nav>
                </div>
            </header>

            {/* Hero */}
            <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-32">
                <h2 className="text-5xl font-extrabold drop-shadow-md">
                    We Plot Experiences
                </h2>
                <p className="mt-4 text-lg opacity-90">
                    Hyderabad’s All-in-One Event & Community Hub
                </p>

                <div className="mt-8 flex justify-center gap-4">
                    <button className="px-6 py-3 bg-white text-pink-600 font-semibold rounded-xl shadow hover:scale-105 transition">
                        Planify Services
                    </button>
                    <button className="px-6 py-3 bg-white text-pink-600 font-semibold rounded-xl shadow hover:scale-105 transition">
                        Planify Social
                    </button>
                    <button className="px-6 py-3 bg-white text-pink-600 font-semibold rounded-xl shadow hover:scale-105 transition">
                        Planify Spotlight
                    </button>
                </div>
            </section>

            {/* Verticals Section */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <h3 className="text-3xl font-bold text-center mb-14">
                    Three Verticals of Planify
                </h3>

                <div className="grid md:grid-cols-3 gap-10">
                    <VerticalCard
                        title="Planify Services"
                        desc="Professional event planning — weddings, corporate, concerts, and more."
                    />
                    <VerticalCard
                        title="Planify Social"
                        desc="Community meetups, coffee dates, workshops & creative groups."
                    />
                    <VerticalCard
                        title="Planify Spotlight"
                        desc="In-house shows — comedy nights, music, kids shows & conferences."
                    />
                </div>
            </section>

            {/* Trending Carousel (Static Placeholder) */}
            <section className="bg-white py-20">
                <h3 className="text-3xl font-bold text-center">Trending Now</h3>
                <p className="text-center text-gray-500">Auto-scrolling carousel goes here</p>

                <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <PlaceholderCard />
                    <PlaceholderCard />
                    <PlaceholderCard />
                </div>
            </section>

            {/* How It Works */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <h3 className="text-3xl font-bold text-center mb-14">How It Works</h3>

                <div className="grid md:grid-cols-3 gap-10">
                    <Step number="1" title="Discover" desc="Browse services, events, or communities." />
                    <Step number="2" title="Select" desc="Choose what you like & sign up instantly." />
                    <Step number="3" title="Join" desc="Get WhatsApp link + email confirmation." />
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-10 mt-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-xl font-bold">Planify</h1>
                    <p className="mt-2 opacity-70">We Plot Experiences • Hyderabad</p>
                    <p className="mt-2 opacity-50 text-sm">© {new Date().getFullYear()} Planify</p>
                </div>
            </footer>

        </div>
    );
}

/* Components */

function VerticalCard({ title, desc }) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition hover:-translate-y-1">
            <h4 className="text-xl font-bold mb-3 text-pink-600">{title}</h4>
            <p className="text-gray-600">{desc}</p>
        </div>
    );
}

function PlaceholderCard() {
    return (
        <div className="bg-gray-200 h-40 rounded-xl animate-pulse"></div>
    );
}

function Step({ number, title, desc }) {
    return (
        <div className="text-center">
            <div className="w-14 h-14 flex items-center justify-center mx-auto bg-pink-600 text-white font-bold rounded-full text-2xl">
                {number}
            </div>
            <h4 className="text-xl font-semibold mt-4">{title}</h4>
            <p className="text-gray-600 mt-2">{desc}</p>
        </div>
    );
}