import React from 'react';

const ArtPortfolio = () => {
    const paintings = [
        { id: 1, title: "Midnight Bloom", price: "$850", year: "2024", dimensions: "30\" x 40\"", link: "/Img_1.jpeg" },
        { id: 2, title: "Desert Silence", price: "$1,200", year: "2023", dimensions: "48\" x 48\"", link: "/Img_2.jpeg" },
        { id: 3, title: "Soft Reflection", price: "$600", year: "2024", dimensions: "24\" x 36\"", link: "/Img_3.jpeg" },
        { id: 4, title: "Floral Whisper", price: "$600", year: "2024", dimensions: "24\" x 36\"", link: "/Img_4.jpeg" },
        { id: 5, title: "Ethereal Glow", price: "$600", year: "2024", dimensions: "24\" x 36\"", link: "/Img_5.jpeg" },
    ];

    return (
        <div className="min-h-screen bg-[#FFF5F5] text-[#4A2C2C] selection:bg-[#FAD1D1] font-sans">

            {/* Navigation */}
            <nav className="flex justify-between items-center px-6 py-4 md:px-12 border-b border-[#4A2C2C]/5 sticky top-0 bg-[#FFF5F5]/80 backdrop-blur-md z-50">
                <span className="text-lg md:text-xl font-serif tracking-tighter font-bold italic">Studio Collection</span>
                <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold">
                    <a href="#work" className="hover:text-[#D48181] transition">The Work</a>
                    <a href="#about" className="hover:text-[#D48181] transition">Process</a>
                    <a href="#contact" className="hover:text-[#D48181] transition">Contact</a>
                </div>
                <button className="bg-[#4A2C2C] text-white px-4 py-2 text-[10px] uppercase tracking-widest hover:bg-[#D48181] transition-colors">
                    Shop
                </button>
            </nav>

            {/* Hero Section - Changed items-center to items-start to move everything up */}
            <header className="relative px-6 md:px-12 pt-4 pb-12 md:pt-8 md:pb-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">

                    {/* Text Column */}
                    <div className="z-10 order-2 md:order-1 text-center md:text-left pt-4">
                        <div className="inline-block px-3 py-1 border border-[#4A2C2C]/20 text-[9px] uppercase tracking-[0.3em] mb-4">
                            Original Works 2024
                        </div>
                        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-serif leading-[1.1] mb-6">
                            Art that <br />
                            <span className="italic font-light text-[#D48181] md:pl-8">breathes.</span>
                        </h1>
                        <p className="text-sm md:text-base max-w-md mx-auto md:mx-0 leading-relaxed opacity-80 mb-8">
                            A curated selection of original oil paintings exploring the
                            intersection of nature and the feminine divine. Created with love, pigment, and soul.
                        </p>
                        <div className="flex justify-center md:justify-start items-center gap-8">
                            <a href="#work" className="group flex items-center gap-3 uppercase text-[10px] tracking-[0.2em] font-bold">
                                View Collection
                                <span className="w-8 h-[1px] bg-[#4A2C2C] transition-all group-hover:w-16"></span>
                            </a>
                        </div>
                    </div>

                    {/* Visual Column - Changed to Square with rounded-2xl */}
                    <div className="order-1 md:order-2">
                        <div className="relative mx-auto max-w-[400px] md:max-w-none">
                            <div className="aspect-square overflow-hidden bg-[#FAD1D1] rounded-2xl p-2 sm:p-4 shadow-xl shadow-rose-200/50">
                                <img
                                    src="/Img_2.jpeg"
                                    alt="Featured Art"
                                    className="object-cover w-full h-full rounded-xl transition-all duration-1000"
                                />
                            </div>
                            {/* Decorative Floating Circle */}
                            <div className="absolute -bottom-4 -right-4 w-20 h-20 md:w-32 md:h-32 border border-[#D48181]/40 rounded-full animate-pulse"></div>
                        </div>
                    </div>

                </div>
            </header>

            {/* Gallery Section */}
            <section id="work" className="px-6 md:px-12 py-16 bg-white/30">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                    {paintings.map((item) => (
                        <div key={item.id} className="group flex flex-col">
                            <div className="relative overflow-hidden bg-[#FAD1D1] aspect-[3/4] shadow-sm rounded-lg">
                                <img
                                    src={item.link}
                                    alt={item.title}
                                    className="object-cover w-full h-full transition-transform duration-700 scale-100 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white/95 px-3 py-1 text-[9px] uppercase tracking-widest font-bold">
                                    Available
                                </div>
                            </div>
                            <div className="mt-6 space-y-1 border-l-2 border-[#D48181] pl-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-serif italic">{item.title}</h3>
                                    <span className="text-[10px] font-mono opacity-50">{item.year}</span>
                                </div>
                                <p className="text-[10px] uppercase tracking-[0.1em] opacity-60">{item.dimensions}</p>
                                <p className="text-md font-bold mt-2 text-[#D48181]">{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="bg-[#4A2C2C] text-[#FFF5F5] px-6 py-16 md:px-12">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight italic">
                            Let's bring some <br /> color to your walls.
                        </h2>
                        <p className="opacity-70 text-sm leading-loose max-w-sm uppercase tracking-widest text-rose-100/60">
                            Inquire for custom commissions, private viewings, or global shipping options.
                        </p>
                    </div>
                    <form className="space-y-6 bg-white/5 p-8 rounded-2xl backdrop-blur-sm shadow-2xl">
                        <div className="border-b border-rose-200/20 pb-2">
                            <input
                                type="text"
                                placeholder="YOUR NAME"
                                className="bg-transparent w-full outline-none placeholder:text-rose-100/30 uppercase text-[10px] tracking-[0.2em]"
                            />
                        </div>
                        <div className="border-b border-rose-200/20 pb-2">
                            <input
                                type="email"
                                placeholder="EMAIL ADDRESS"
                                className="bg-transparent w-full outline-none placeholder:text-rose-100/30 uppercase text-[10px] tracking-[0.2em]"
                            />
                        </div>
                        <button className="w-full py-4 bg-[#D48181] text-white uppercase text-[10px] tracking-[0.3em] font-bold hover:bg-white hover:text-[#4A2C2C] transition-all rounded-lg">
                            Send Message
                        </button>
                    </form>
                </div>
            </footer>
        </div>
    );
};

export default ArtPortfolio;