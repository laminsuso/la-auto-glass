"use client";

import React, { useState, useEffect } from 'react';

export default function App() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        
        setTimeout(() => {
            setIsSubmitted(false);
            if (e.target) e.target.reset();
        }, 5000);
    };

    return (
        <div className="font-sans text-gray-800 antialiased bg-white scroll-smooth" suppressHydrationWarning>
            {/* Header */}
            <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex-shrink-0 flex items-center gap-2">
                            <svg className="w-8 h-8 text-[#0a2540]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                            </svg>
                            <span className="font-bold text-2xl tracking-tight text-[#0a2540]">
                                Leyvas Auto<span className="text-[#ff6b00]"> Glass</span>
                            </span>
                        </div>

                        <nav className="hidden md:flex space-x-8">
                            <a href="#services" className="text-gray-600 hover:text-[#ff6b00] font-medium transition-colors">Services</a>
                            <a href="#about" className="text-gray-600 hover:text-[#ff6b00] font-medium transition-colors">Why Us</a>
                            <a href="#quote" className="text-gray-600 hover:text-[#ff6b00] font-medium transition-colors">Get a Quote</a>
                        </nav>

                        <div className="flex items-center gap-4">
                            <a href="tel:+16823920431" className="hidden lg:flex items-center gap-2 text-[#0a2540] font-bold text-lg hover:text-[#ff6b00] transition-colors">
                                (682) 392-0431
                            </a>
                            <a href="#quote" className="bg-[#ff6b00] hover:bg-[#e56000] text-white px-5 py-2.5 rounded-full font-semibold shadow-md transition-all text-sm sm:text-base">
                                Get a Quote
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#0a2540] overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Windshield repair" className="w-full h-full object-cover opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540] to-transparent"></div>
                </div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            Same-Day Mobile Service Available
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                            We Come To You. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] to-yellow-400">Fast Auto Glass Repair.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
                            Professional mobile windshield replacement and chip repair. We handle your insurance claim from start to finish.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#quote" className="bg-[#ff6b00] hover:bg-[#e56000] text-white px-8 py-4 rounded-lg font-bold text-lg text-center shadow-lg transition-all flex justify-center items-center gap-2">
                                Get Your Free Quote
                            </a>
                            <a href="tel:+16823920431" className="bg-white hover:bg-gray-50 text-[#0a2540] px-8 py-4 rounded-lg font-bold text-lg text-center shadow-lg transition-all flex justify-center items-center gap-2">
                                Call/Text (682) 392-0431
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="bg-white border-b border-gray-100 shadow-sm relative z-10 -mt-8 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 lg:p-8">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-[#e6f0fa] rounded-full flex items-center justify-center mb-3 text-[#0a2540]">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <h3 className="font-bold text-gray-900 text-xs md:text-sm uppercase tracking-wider">All Insurances Accepted</h3>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-[#e6f0fa] rounded-full flex items-center justify-center mb-3 text-[#0a2540]">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <h3 className="font-bold text-gray-900 text-xs md:text-sm uppercase tracking-wider">Same Day Service</h3>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-[#e6f0fa] rounded-full flex items-center justify-center mb-3 text-[#0a2540]">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                        </div>
                        <h3 className="font-bold text-gray-900 text-xs md:text-sm uppercase tracking-wider">Lifetime Warranty</h3>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-[#e6f0fa] rounded-full flex items-center justify-center mb-3 text-[#0a2540]">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z"></path></svg>
                        </div>
                        <h3 className="font-bold text-gray-900 text-xs md:text-sm uppercase tracking-wider">Certified Technicians</h3>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-[#ff6b00] font-bold tracking-widest uppercase text-xs mb-2">Our Services</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-[#0a2540] mb-4">Complete Auto Glass Solutions</h3>
                        <p className="text-gray-500 text-lg">Whether its a small chip or a completely shattered windshield, we have the tools and expertise to get you back on the road safely.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                            <div className="w-14 h-14 bg-[#e6f0fa] rounded-xl flex items-center justify-center mb-6 text-[#0a2540]">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path></svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Windshield Replacement</h4>
                            <p className="text-gray-600 mb-6 text-sm leading-relaxed">OEM-quality glass replacement for all makes and models. Fast, secure, and backed by our lifetime warranty.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                            <div className="w-14 h-14 bg-[#e6f0fa] rounded-xl flex items-center justify-center mb-6 text-[#0a2540]">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Rock Chip Repair</h4>
                            <p className="text-gray-600 mb-6 text-sm leading-relaxed">Don&apos;t wait for a crack to spread! We fix most chips in under 30 minutes, often for free with insurance.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                            <div className="w-14 h-14 bg-[#e6f0fa] rounded-xl flex items-center justify-center mb-6 text-[#0a2540]">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Manual Calibration</h4>
                            <p className="text-gray-600 mb-6 text-sm leading-relaxed">Ensuring your car&apos;s safety sensors are perfectly aligned after every windshield installation.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section id="about" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="lg:w-1/2 relative">
                            <div className="absolute -inset-4 bg-[#ff6b00]/10 rounded-3xl blur-2xl"></div>
                            <img 
                                src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                                alt="Modern car headlights" 
                                className="relative rounded-2xl shadow-2xl object-cover h-[450px] w-full"
                            />
                        </div>
                        
                        <div className="lg:w-1/2">
                            <h2 className="text-[#ff6b00] font-bold tracking-widest uppercase text-xs mb-3">Why Choose LA</h2>
                            <h3 className="text-4xl md:text-5xl font-black text-[#0a2540] mb-8 leading-tight">We Make Auto Glass Replacement Stress-Free.</h3>
                            <p className="text-gray-500 text-lg mb-8 leading-relaxed">Dealing with a broken windshield is frustrating enough. You shouldn&apos;t have to deal with terrible customer service.</p>

                            <ul className="space-y-6 mb-10">
                                <li className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mt-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <p className="text-gray-700 font-medium"><span className="font-bold text-[#0a2540]">Mobile Service:</span> We come to your home or office at no extra charge.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mt-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <p className="text-gray-700 font-medium"><span className="font-bold text-[#0a2540]">Insurance Experts:</span> We work directly with all major insurance providers.</p>
                                </li>
                            </ul>

                            <a href="tel:+16823920431" className="text-[#0a2540] font-black text-xl hover:text-[#ff6b00] transition-colors block border-t border-gray-100 pt-8">
                                Questions? Call/Text us: (682) 392-0431
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXPANDED QUOTE FORM SECTION */}
            <section id="quote" className="py-20 bg-[#0a2540]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-black text-[#0a2540] mb-4">Get Your Free Quote</h2>
                            <p className="text-gray-500">Provide your details and vehicle info for an instant estimate.</p>
                        </div>

                        <form className="space-y-10" onSubmit={handleSubmit}>
                            {/* Section 1: Contact Info */}
                            <div>
                                <h4 className="text-[#ff6b00] font-bold uppercase text-xs tracking-widest mb-6 border-b border-gray-100 pb-2">1. Contact Information</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-[#0a2540] mb-2">First Name</label>
                                        <input suppressHydrationWarning type="text" required className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-[#ff6b00] outline-none transition-all" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-[#0a2540] mb-2">Last Name</label>
                                        <input suppressHydrationWarning type="text" required className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-[#ff6b00] outline-none transition-all" placeholder="Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-[#0a2540] mb-2">Phone</label>
                                        <input suppressHydrationWarning type="tel" required className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-[#ff6b00] outline-none transition-all" placeholder="(555) 555-5555" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-[#0a2540] mb-2">Zip Code (for Mobile Service)</label>
                                        <input suppressHydrationWarning type="text" required className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-[#ff6b00] outline-none transition-all" placeholder="12345" />
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Vehicle Info */}
                            <div>
                                <h4 className="text-[#ff6b00] font-bold uppercase text-xs tracking-widest mb-6 border-b border-gray-100 pb-2">2. Vehicle Details</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                    <div>
                                        <label className="block text-sm font-bold text-[#0a2540] mb-2">Year</label>
                                        <input suppressHydrationWarning type="text" required className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-[#ff6b00] outline-none transition-all" placeholder="2022" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-[#0a2540] mb-2">Make (Mark)</label>
                                        <input suppressHydrationWarning type="text" required className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-[#ff6b00] outline-none transition-all" placeholder="Toyota" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-[#0a2540] mb-2">Model</label>
                                        <input suppressHydrationWarning type="text" required className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-[#ff6b00] outline-none transition-all" placeholder="Camry" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-[#0a2540] mb-2">VIN Number (Optional but recommended for exact fit)</label>
                                        <input suppressHydrationWarning type="text" className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-[#ff6b00] outline-none transition-all uppercase" placeholder="17-Digit VIN Number" />
                                        <p className="text-[10px] text-gray-400 mt-1 uppercase font-semibold">Found on your insurance card or dashboard</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 3: Damage Details */}
                            <div>
                                <h4 className="text-[#ff6b00] font-bold uppercase text-xs tracking-widest mb-6 border-b border-gray-100 pb-2">3. Service Needed</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-[#0a2540] mb-2">Type of Glass</label>
                                        <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-[#ff6b00] outline-none bg-white">
                                            <option>Windshield</option>
                                            <option>Driver Front Door Glass</option>
                                            <option>Passenger Front Door Glass</option>
                                            <option>Rear Windshield</option>
                                            <option>Quarter Glass</option>
                                            <option>Sunroof</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-[#0a2540] mb-2">Special Features</label>
                                        <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-[#ff6b00] outline-none bg-white">
                                            <option>No special features</option>
                                            <option>Rain Sensor / Auto Wipers</option>
                                            <option>Heated / De-icer</option>
                                            <option>Heads-Up Display (HUD)</option>
                                            <option>Lane Departure Warning</option>
                                            <option>I&apos;m not sure</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <label className="block text-sm font-bold text-[#0a2540] mb-2">Additional Information (Optional)</label>
                                    <textarea className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-[#ff6b00] outline-none transition-all h-24 resize-none" placeholder="e.g. Broken by a rock on the freeway, need it fixed by tomorrow..."></textarea>
                                </div>
                            </div>
                            
                            {isSubmitted && (
                                <div className="bg-green-50 text-green-800 p-6 rounded-2xl border-2 border-green-200 text-center font-bold animate-bounce">
                                    Quote Request Sent! We&apos;ll call or text you in ~15 minutes.
                                </div>
                            )}

                            <button 
                                type="submit" 
                                disabled={isSubmitted}
                                className={`w-full font-black text-xl py-5 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 ${
                                    isSubmitted ? 'bg-green-500 text-white' : 'bg-[#ff6b00] hover:bg-[#e56000] text-white transform hover:-translate-y-1 active:scale-95'
                                }`}
                            >
                                {isSubmitted ? (
                                    <>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                        Request Received!
                                    </>
                                ) : (
                                    'Submit Quote Request'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 text-gray-500 py-12 text-center text-xs">
                <p>&copy; 2026 Leyvas Auto Glass. All rights reserved.</p>
            </footer>
        </div>
    );
}