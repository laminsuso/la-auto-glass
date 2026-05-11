
// import Image from "next/image";
// import React, { useMemo, useState } from "react";
// import {
//   ArrowRight,
//   Calendar,
//   Camera,
//   CheckCircle2,
//   Clock,
//   MapPin,
//   Phone,
//   ShieldCheck,
//   Star,
//   Wrench,
//   Zap,
// } from "lucide-react";

// const phoneDisplay = "(682) 392-0431";
// const phoneHref = "tel:+16823920431";

// const timeSlots = [
//   "8:00 AM - 10:00 AM",
//   "10:00 AM - 12:00 PM",
//   "12:00 PM - 2:00 PM",
//   "2:00 PM - 4:00 PM",
//   "4:00 PM - 6:00 PM",
// ];

// const services = [
//   {
//     title: "Windshield Replacement",
//     description:
//       "Mobile replacement for cracked or shattered windshields with clean installation and reliable fit.",
//     icon: Wrench,
//   },
//   {
//     title: "Rock Chip Repair",
//     description:
//       "Fast chip repair to help stop spreading before the damage becomes a full replacement.",
//     icon: Zap,
//   },
//   {
//     title: "Side & Rear Glass",
//     description:
//       "Door glass, back glass, quarter glass, and other auto-glass replacement services.",
//     icon: ShieldCheck,
//   },
// ];

// const trustItems = [
//   "Mobile service at home or work",
//   "Insurance claim assistance",
//   "Same-day or next-day availability",
//   "Warranty-backed workmanship",
// ];

// export default function LeyvasAutoGlassLandingPage() {
//   const [selectedTime, setSelectedTime] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const nextDay = useMemo(() => {
//     const date = new Date();
//     date.setDate(date.getDate() + 1);
//     return date.toLocaleDateString("en-US", {
//       weekday: "long",
//       month: "long",
//       day: "numeric",
//       year: "numeric",
//     });
//   }, []);

//   function handleSubmit(event) {
//     event.preventDefault();
//     setSubmitted(true);
//   }

//   return (
//     <main className="min-h-screen bg-slate-950 text-slate-900 antialiased">
//       {/* Header */}
//       <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
//         <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
//           <a href="#home" className="flex items-center">
//             <Image
//               src="/images/leyvas-logo.png"
//               alt="Leyvas Auto Glass logo"
//               width={180}
//               height={64}
//               priority
//               className="h-14 w-auto"
//             />
//           </a>

//           <nav className="hidden items-center gap-8 md:flex">
//             <a href="#services" className="text-sm font-semibold text-slate-300 hover:text-white">
//               Services
//             </a>
//             <a href="#process" className="text-sm font-semibold text-slate-300 hover:text-white">
//               How it works
//             </a>
//             <a href="#quote" className="text-sm font-semibold text-slate-300 hover:text-white">
//               Quote
//             </a>
//           </nav>

//           <div className="flex items-center gap-3">
//             <a
//               href={phoneHref}
//               className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white hover:bg-white/10 lg:inline-flex"
//             >
//               {phoneDisplay}
//             </a>
//             <a
//               href="#quote"
//               className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-black text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 hover:bg-orange-400"
//             >
//               Get quote <ArrowRight className="h-4 w-4" />
//             </a>
//           </div>
//         </div>
//       </header>

//       {/* Hero */}
//       <section id="home" className="relative overflow-hidden pt-28">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.28),transparent_32%),linear-gradient(135deg,#020617_0%,#0f172a_50%,#111827_100%)]" />
//         <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
//         <div className="absolute bottom-0 left-1/2 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />

//         <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-20">
//           <div>
//             <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-500/10 px-4 py-2 text-sm font-bold text-orange-100">
//               <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
//               Same-day mobile auto glass service available
//             </div>

//             <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
//               Broken glass?
//               <span className="block text-orange-400">We come to you.</span>
//             </h1>

//             <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
//               Fast windshield replacement, rock chip repair, and mobile auto-glass service for drivers across the DFW area. Call, text, or request a quote online.
//             </p>

//             <div className="mt-9 flex flex-col gap-4 sm:flex-row">
//               <a
//                 href="#quote"
//                 className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-7 py-4 text-base font-black text-white shadow-xl shadow-orange-500/25 transition hover:-translate-y-1 hover:bg-orange-400"
//               >
//                 Start free quote <ArrowRight className="h-5 w-5" />
//               </a>
//               <a
//                 href={phoneHref}
//                 className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-base font-black text-slate-950 transition hover:-translate-y-1 hover:bg-slate-100"
//               >
//                 <Phone className="h-5 w-5" /> Call/Text {phoneDisplay}
//               </a>
//             </div>

//             <div className="mt-9 grid gap-3 sm:grid-cols-2">
//               {trustItems.map((item) => (
//                 <div key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-200">
//                   <CheckCircle2 className="h-5 w-5 flex-none text-emerald-400" />
//                   {item}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="relative">
//             <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-orange-500/30 to-sky-500/10 blur-2xl" />
//             <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">
//               <div className="relative h-[520px] w-full overflow-hidden rounded-[1.5rem]">
//                 <Image
//                   src="/images/car-windshield.jpg"
//                   alt="Car windshield close-up for mobile auto glass service"
//                   fill
//                   priority
//                   sizes="(min-width: 1024px) 50vw, 100vw"
//                   className="object-cover opacity-90"
//                 />
//               </div>
//               <div className="absolute bottom-7 left-7 right-7 rounded-3xl border border-white/15 bg-slate-950/85 p-5 text-white shadow-2xl backdrop-blur-xl">
//                 <div className="flex items-start justify-between gap-4">
//                   <div>
//                     <p className="text-sm font-bold text-orange-300">Most quotes answered fast</p>
//                     <p className="mt-1 text-2xl font-black">Send photos. Get scheduled.</p>
//                   </div>
//                   <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500">
//                     <Camera className="h-6 w-6" />
//                   </div>
//                 </div>
//                 <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-slate-200">
//                   <span className="rounded-full bg-white/10 px-3 py-1">Windshield</span>
//                   <span className="rounded-full bg-white/10 px-3 py-1">Rock chips</span>
//                   <span className="rounded-full bg-white/10 px-3 py-1">Side glass</span>
//                   <span className="rounded-full bg-white/10 px-3 py-1">Rear glass</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Trust strip */}
//       <section className="relative z-10 bg-white">
//         <div className="mx-auto -mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
//           <div className="grid overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl shadow-slate-950/10 sm:grid-cols-2 lg:grid-cols-4">
//             {[
//               [ShieldCheck, "Insurance help", "We help simplify the claim process."],
//               [Clock, "Fast scheduling", "Same-day or next-day windows when available."],
//               [MapPin, "Mobile service", "Home, work, or wherever your vehicle is parked."],
//               [Star, "Clean workmanship", "Professional service with careful installation."],
//             ].map(([Icon, title, text]) => (
//               <div key={title} className="border-b border-slate-100 p-6 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0">
//                 <Icon className="h-7 w-7 text-orange-500" />
//                 <h3 className="mt-4 text-lg font-black text-slate-950">{title}</h3>
//                 <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services */}
//       <section id="services" className="bg-white py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-3xl text-center">
//             <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-500">Services</p>
//             <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
//               Auto glass repair without the runaround.
//             </h2>
//             <p className="mt-5 text-lg leading-8 text-slate-600">
//               Clear service options, fast communication, and a mobile technician who comes to you.
//             </p>
//           </div>

//           <div className="mt-14 grid gap-6 md:grid-cols-3">
//             {services.map((service) => {
//               const Icon = service.icon;
//               return (
//                 <article
//                   key={service.title}
//                   className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950/10"
//                 >
//                   <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
//                     <Icon className="h-7 w-7" />
//                   </div>
//                   <h3 className="mt-7 text-2xl font-black text-slate-950">{service.title}</h3>
//                   <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Process */}
//       <section id="process" className="bg-slate-100 py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
//             <div>
//               <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-500">How it works</p>
//               <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
//                 Three simple steps to get back on the road.
//               </h2>
//               <p className="mt-5 text-lg leading-8 text-slate-600">
//                 The page is designed to make the next action obvious: request a quote, send vehicle details, and choose a service window.
//               </p>
//             </div>

//             <div className="grid gap-5">
//               {[
//                 ["01", "Request your quote", "Share your contact details, vehicle year/make/model, and the type of glass needed."],
//                 ["02", "Confirm glass and insurance", "We verify fit, features, and help with insurance details when applicable."],
//                 ["03", "Technician comes to you", "Choose an arrival window and get your glass repaired or replaced at your location."],
//               ].map(([number, title, text]) => (
//                 <div key={number} className="flex gap-5 rounded-3xl bg-white p-6 shadow-sm">
//                   <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white">
//                     {number}
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-black text-slate-950">{title}</h3>
//                     <p className="mt-2 leading-7 text-slate-600">{text}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Quote */}
//       <section id="quote" className="bg-slate-950 py-24 text-white">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
//             <div className="lg:sticky lg:top-28">
//               <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-400">Free quote</p>
//               <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
//                 Request service in less than 2 minutes.
//               </h2>
//               <p className="mt-5 text-lg leading-8 text-slate-300">
//                 Use this single form for both quote details and scheduling. No duplicate sections, no confusing flow.
//               </p>

//               <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
//                 <div className="flex items-start gap-4">
//                   <Calendar className="mt-1 h-6 w-6 text-orange-400" />
//                   <div>
//                     <p className="font-black">Next available service date</p>
//                     <p className="mt-1 text-slate-300">{nextDay}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-5 text-slate-950 shadow-2xl sm:p-8 lg:p-10">
//               <div className="grid gap-6 md:grid-cols-2">
//                 <Field label="First name" placeholder="John" required />
//                 <Field label="Last name" placeholder="Doe" required />
//                 <Field label="Phone number" placeholder="(682) 000-0000" type="tel" required />
//                 <Field label="ZIP code" placeholder="76102" required />
//               </div>

//               <div className="mt-8 border-t border-slate-100 pt-8">
//                 <h3 className="text-sm font-black uppercase tracking-[0.25em] text-orange-500">
//                   Vehicle details
//                 </h3>
//                 <div className="mt-5 grid gap-6 md:grid-cols-3">
//                   <Field label="Year" placeholder="2022" required />
//                   <Field label="Make" placeholder="Toyota" required />
//                   <Field label="Model" placeholder="Camry" required />
//                 </div>
//                 <div className="mt-6">
//                   <Field label="VIN number" placeholder="Optional, but helpful for exact fit" />
//                 </div>
//               </div>

//               <div className="mt-8 border-t border-slate-100 pt-8">
//                 <h3 className="text-sm font-black uppercase tracking-[0.25em] text-orange-500">
//                   Service needed
//                 </h3>
//                 <div className="mt-5 grid gap-6 md:grid-cols-2">
//                   <label className="block">
//                     <span className="mb-2 block text-sm font-black text-slate-800">Type of glass</span>
//                     <select className="w-full rounded-2xl border-2 border-slate-100 bg-white px-4 py-4 font-semibold outline-none transition focus:border-orange-500">
//                       <option>Windshield</option>
//                       <option>Driver front door glass</option>
//                       <option>Passenger front door glass</option>
//                       <option>Rear windshield / back glass</option>
//                       <option>Quarter glass</option>
//                       <option>Sunroof</option>
//                     </select>
//                   </label>
//                   <label className="block">
//                     <span className="mb-2 block text-sm font-black text-slate-800">Special features</span>
//                     <select className="w-full rounded-2xl border-2 border-slate-100 bg-white px-4 py-4 font-semibold outline-none transition focus:border-orange-500">
//                       <option>I am not sure</option>
//                       <option>No special features</option>
//                       <option>Rain sensor / auto wipers</option>
//                       <option>Heated / de-icer</option>
//                       <option>Heads-up display</option>
//                       <option>Lane departure / camera system</option>
//                     </select>
//                   </label>
//                 </div>
//                 <label className="mt-6 block">
//                   <span className="mb-2 block text-sm font-black text-slate-800">Notes</span>
//                   <textarea
//                     className="h-28 w-full resize-none rounded-2xl border-2 border-slate-100 px-4 py-4 font-semibold outline-none transition focus:border-orange-500"
//                     placeholder="Tell us what happened, where the car is located, or when you need service."
//                   />
//                 </label>
//               </div>

//               <div className="mt-8 border-t border-slate-100 pt-8">
//                 <h3 className="text-sm font-black uppercase tracking-[0.25em] text-orange-500">
//                   Appointment window
//                 </h3>
//                 <p className="mt-2 text-sm font-semibold text-slate-500">
//                   Select a preferred technician arrival window for {nextDay}.
//                 </p>
//                 <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
//                   {timeSlots.map((slot) => (
//                     <button
//                       key={slot}
//                       type="button"
//                       onClick={() => setSelectedTime(slot)}
//                       className={`flex items-center justify-center gap-2 rounded-2xl border-2 px-4 py-4 text-sm font-black transition ${
//                         selectedTime === slot
//                           ? "border-orange-500 bg-orange-500 text-white shadow-lg shadow-orange-500/25"
//                           : "border-slate-100 bg-slate-50 text-slate-600 hover:border-orange-200 hover:bg-orange-50"
//                       }`}
//                     >
//                       <Clock className="h-4 w-4" />
//                       {slot}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {submitted && (
//                 <div className="mt-8 rounded-3xl border-2 border-emerald-200 bg-emerald-50 p-5 text-center font-black text-emerald-800">
//                   Request received. We will call or text shortly to confirm your quote and service window.
//                 </div>
//               )}

//               <button
//                 type="submit"
//                 disabled={!selectedTime || submitted}
//                 className={`mt-8 flex w-full items-center justify-center gap-3 rounded-3xl px-6 py-5 text-lg font-black transition ${
//                   submitted
//                     ? "bg-emerald-500 text-white"
//                     : selectedTime
//                       ? "bg-orange-500 text-white shadow-xl shadow-orange-500/25 hover:-translate-y-1 hover:bg-orange-400"
//                       : "cursor-not-allowed bg-slate-200 text-slate-400"
//                 }`}
//               >
//                 {submitted ? (
//                   <>
//                     <CheckCircle2 className="h-6 w-6" /> Request sent
//                   </>
//                 ) : selectedTime ? (
//                   <>Submit quote request <ArrowRight className="h-5 w-5" /></>
//                 ) : (
//                   "Select a time to continue"
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-white/10 bg-slate-950 py-10 text-slate-400">
//         <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
//           <p>© 2026 Leyvas Auto Glass. All rights reserved.</p>
//           <div className="flex flex-wrap gap-4 font-semibold">
//             <a href={phoneHref} className="hover:text-white">{phoneDisplay}</a>
//             <a href="#quote" className="hover:text-white">Get a quote</a>
//           </div>
//         </div>
//       </footer>
//     </main>
//   );
// }

// function Field({ label, placeholder, type = "text", required = false }) {
//   return (
//     <label className="block">
//       <span className="mb-2 block text-sm font-black text-slate-800">{label}</span>
//       <input
//         type={type}
//         required={required}
//         placeholder={placeholder}
//         className="w-full rounded-2xl border-2 border-slate-100 px-4 py-4 font-semibold outline-none transition placeholder:text-slate-400 focus:border-orange-500"
//       />
//     </label>
//   );
// }

"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  Calendar,
  Camera,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Wrench,
  Zap,
} from "lucide-react";

const phoneDisplay = "(682) 392-0431";
const phoneHref = "tel:+16823920431";

const timeSlots = [
  "8:00 AM - 10:00 AM",
  "10:00 AM - 12:00 PM",
  "12:00 PM - 2:00 PM",
  "2:00 PM - 4:00 PM",
  "4:00 PM - 6:00 PM",
];

const services = [
  {
    title: "Windshield Replacement",
    description:
      "Mobile replacement for cracked or shattered windshields with clean installation and reliable fit.",
    icon: Wrench,
  },
  {
    title: "Rock Chip Repair",
    description:
      "Fast chip repair to help stop spreading before the damage becomes a full replacement.",
    icon: Zap,
  },
  {
    title: "Side & Rear Glass",
    description:
      "Door glass, back glass, quarter glass, and other auto-glass replacement services.",
    icon: ShieldCheck,
  },
];

const trustItems = [
  "Mobile service at home or work",
  "Insurance claim assistance",
  "Same-day or next-day availability",
  "Warranty-backed workmanship",
];

export default function LeyvasAutoGlassLandingPage() {
  const [selectedTime, setSelectedTime] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const nextDay = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitError("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...payload,
          appointmentWindow: selectedTime,
          serviceDate: nextDay,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to submit request");
      }

      setSubmitted(true);
      event.currentTarget.reset();
      setSelectedTime("");
    } catch (error) {
      setSubmitError("Something went wrong. Please call or text us directly at (682) 392-0431.");
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-900 antialiased">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center">
            <Image
              src="/images/leyvas-logo.png"
              alt="Leyvas Auto Glass logo"
              width={180}
              height={64}
              priority
              className="h-14 w-auto"
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm font-semibold text-slate-300 hover:text-white">
              Services
            </a>
            <a href="#process" className="text-sm font-semibold text-slate-300 hover:text-white">
              How it works
            </a>
            <a href="#quote" className="text-sm font-semibold text-slate-300 hover:text-white">
              Quote
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={phoneHref}
              className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white hover:bg-white/10 lg:inline-flex"
            >
              {phoneDisplay}
            </a>
            <a
              href="#quote"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-black text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 hover:bg-orange-400"
            >
              Get quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.28),transparent_32%),linear-gradient(135deg,#020617_0%,#0f172a_50%,#111827_100%)]" />
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-500/10 px-4 py-2 text-sm font-bold text-orange-100">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
              Same-day mobile auto glass service available
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Broken glass?
              <span className="block text-orange-400">We come to you.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Fast windshield replacement, rock chip repair, and mobile auto-glass service for drivers across the DFW area. Call, text, or request a quote online.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-7 py-4 text-base font-black text-white shadow-xl shadow-orange-500/25 transition hover:-translate-y-1 hover:bg-orange-400"
              >
                Start free quote <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-base font-black text-slate-950 transition hover:-translate-y-1 hover:bg-slate-100"
              >
                <Phone className="h-5 w-5" /> Call/Text {phoneDisplay}
              </a>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="h-5 w-5 flex-none text-emerald-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-orange-500/30 to-sky-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">
              <div className="relative h-[520px] w-full overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/car-windshield.jpg"
                  alt="Car windshield close-up for mobile auto glass service"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover opacity-90"
                />
              </div>
              <div className="absolute bottom-7 left-7 right-7 rounded-3xl border border-white/15 bg-slate-950/85 p-5 text-white shadow-2xl backdrop-blur-xl">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-orange-300">Most quotes answered fast</p>
                    <p className="mt-1 text-2xl font-black">Send photos. Get scheduled.</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500">
                    <Camera className="h-6 w-6" />
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-slate-200">
                  <span className="rounded-full bg-white/10 px-3 py-1">Windshield</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">Rock chips</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">Side glass</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">Rear glass</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="relative z-10 bg-white">
        <div className="mx-auto -mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl shadow-slate-950/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [ShieldCheck, "Insurance help", "We help simplify the claim process."],
              [Clock, "Fast scheduling", "Same-day or next-day windows when available."],
              [MapPin, "Mobile service", "Home, work, or wherever your vehicle is parked."],
              [Star, "Clean workmanship", "Professional service with careful installation."],
            ].map(([Icon, title, text]) => (
              <div key={title} className="border-b border-slate-100 p-6 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0">
                <Icon className="h-7 w-7 text-orange-500" />
                <h3 className="mt-4 text-lg font-black text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-500">Services</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Auto glass repair without the runaround.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Clear service options, fast communication, and a mobile technician who comes to you.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950/10"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-7 text-2xl font-black text-slate-950">{service.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-slate-100 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-500">How it works</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Three simple steps to get back on the road.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The page is designed to make the next action obvious: request a quote, send vehicle details, and choose a service window.
              </p>
            </div>

            <div className="grid gap-5">
              {[
                ["01", "Request your quote", "Share your contact details, vehicle year/make/model, and the type of glass needed."],
                ["02", "Confirm glass and insurance", "We verify fit, features, and help with insurance details when applicable."],
                ["03", "Technician comes to you", "Choose an arrival window and get your glass repaired or replaced at your location."],
              ].map(([number, title, text]) => (
                <div key={number} className="flex gap-5 rounded-3xl bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white">
                    {number}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-950">{title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-400">Free quote</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Request service in less than 2 minutes.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Use this single form for both quote details and scheduling. No duplicate sections, no confusing flow.
              </p>

              <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-start gap-4">
                  <Calendar className="mt-1 h-6 w-6 text-orange-400" />
                  <div>
                    <p className="font-black">Next available service date</p>
                    <p className="mt-1 text-slate-300">{nextDay}</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-5 text-slate-950 shadow-2xl sm:p-8 lg:p-10">
              <div className="grid gap-6 md:grid-cols-2">
                <Field name="firstName" label="First name" placeholder="John" required />
                <Field name="lastName" label="Last name" placeholder="Doe" required />
                <Field name="phone" label="Phone number" placeholder="(682) 000-0000" type="tel" required />
                <Field name="zipCode" label="ZIP code" placeholder="76102" required />
              </div>

              <div className="mt-8 border-t border-slate-100 pt-8">
                <h3 className="text-sm font-black uppercase tracking-[0.25em] text-orange-500">
                  Vehicle details
                </h3>
                <div className="mt-5 grid gap-6 md:grid-cols-3">
                  <Field name="year" label="Year" placeholder="2022" required />
                  <Field name="make" label="Make" placeholder="Toyota" required />
                  <Field name="model" label="Model" placeholder="Camry" required />
                </div>
                <div className="mt-6">
                  <Field name="vin" label="VIN number" placeholder="Optional, but helpful for exact fit" />
                </div>
              </div>

              <div className="mt-8 border-t border-slate-100 pt-8">
                <h3 className="text-sm font-black uppercase tracking-[0.25em] text-orange-500">
                  Service needed
                </h3>
                <div className="mt-5 grid gap-6 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-black text-slate-800">Type of glass</span>
                    <select name="glassType" className="w-full rounded-2xl border-2 border-slate-100 bg-white px-4 py-4 font-semibold outline-none transition focus:border-orange-500">
                      <option>Windshield</option>
                      <option>Driver front door glass</option>
                      <option>Passenger front door glass</option>
                      <option>Rear windshield / back glass</option>
                      <option>Quarter glass</option>
                      <option>Sunroof</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-black text-slate-800">Special features</span>
                    <select name="specialFeatures" className="w-full rounded-2xl border-2 border-slate-100 bg-white px-4 py-4 font-semibold outline-none transition focus:border-orange-500">
                      <option>I am not sure</option>
                      <option>No special features</option>
                      <option>Rain sensor / auto wipers</option>
                      <option>Heated / de-icer</option>
                      <option>Heads-up display</option>
                      <option>Lane departure / camera system</option>
                    </select>
                  </label>
                </div>
                <label className="mt-6 block">
                  <span className="mb-2 block text-sm font-black text-slate-800">Notes</span>
                  <textarea
                    name="notes"
                    className="h-28 w-full resize-none rounded-2xl border-2 border-slate-100 px-4 py-4 font-semibold outline-none transition focus:border-orange-500"
                    placeholder="Tell us what happened, where the car is located, or when you need service."
                  />
                </label>
              </div>

              <div className="mt-8 border-t border-slate-100 pt-8">
                <h3 className="text-sm font-black uppercase tracking-[0.25em] text-orange-500">
                  Appointment window
                </h3>
                <p className="mt-2 text-sm font-semibold text-slate-500">
                  Select a preferred technician arrival window for {nextDay}.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`flex items-center justify-center gap-2 rounded-2xl border-2 px-4 py-4 text-sm font-black transition ${
                        selectedTime === slot
                          ? "border-orange-500 bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                          : "border-slate-100 bg-slate-50 text-slate-600 hover:border-orange-200 hover:bg-orange-50"
                      }`}
                    >
                      <Clock className="h-4 w-4" />
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {submitted && (
                <div className="mt-8 rounded-3xl border-2 border-emerald-200 bg-emerald-50 p-5 text-center font-black text-emerald-800">
                  Request received. We will call or text shortly to confirm your quote and service window.
                </div>
              )}

              {submitError && (
                <div className="mt-8 rounded-3xl border-2 border-red-200 bg-red-50 p-5 text-center font-black text-red-700">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={!selectedTime || submitted}
                className={`mt-8 flex w-full items-center justify-center gap-3 rounded-3xl px-6 py-5 text-lg font-black transition ${
                  submitted
                    ? "bg-emerald-500 text-white"
                    : selectedTime
                      ? "bg-orange-500 text-white shadow-xl shadow-orange-500/25 hover:-translate-y-1 hover:bg-orange-400"
                      : "cursor-not-allowed bg-slate-200 text-slate-400"
                }`}
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="h-6 w-6" /> Request sent
                  </>
                ) : selectedTime ? (
                  <>Submit quote request <ArrowRight className="h-5 w-5" /></>
                ) : (
                  "Select a time to continue"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950 py-10 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Leyvas Auto Glass. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 font-semibold">
            <a href={phoneHref} className="hover:text-white">{phoneDisplay}</a>
            <a href="#quote" className="hover:text-white">Get a quote</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Field({ name, label, placeholder, type = "text", required = false }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-black text-slate-800">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border-2 border-slate-100 px-4 py-4 font-semibold outline-none transition placeholder:text-slate-400 focus:border-orange-500"
      />
    </label>
  );
}
