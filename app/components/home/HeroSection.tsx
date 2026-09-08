"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Search, Sparkles, MapPin, Calendar, Users, Star } from "lucide-react";

import Container from "@/app/components/ui/Container";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/events?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/events");
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-100">
      {/* Background Gradients & Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e1b4b15_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />

      <Container className="relative z-10">
        <div className="grid min-h-[680px] items-center gap-12 py-16 lg:grid-cols-12 lg:py-24">
          
          {/* Left Content */}
          <div className="lg:col-span-7 max-w-2xl">
            {/* Pill Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-xs sm:text-sm font-medium text-violet-300 backdrop-blur-md transition-all hover:border-violet-500/50">
              <Sparkles size={16} className="text-violet-400 animate-pulse" />
              <span>Discover experiences that matter</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
              Find your next{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
                unforgettable experience.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-xl text-base text-slate-300 sm:text-lg leading-relaxed">
              Discover concerts, conferences, workshops, sports, and unique local gatherings happening right around you.
            </p>

            {/* Search Input Form */}
            <form
              onSubmit={handleSearch}
              className="mt-8 flex max-w-xl flex-col sm:flex-row items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/80 p-2 shadow-2xl backdrop-blur-xl focus-within:border-violet-500/60 focus-within:ring-2 focus-within:ring-violet-500/20 transition-all"
            >
              <div className="flex flex-1 items-center gap-3 px-3 w-full">
                <Search size={20} className="shrink-0 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search events, categories, locations..."
                  className="h-11 w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition-all hover:bg-violet-500 active:scale-95 shrink-0"
              >
                <span>Search</span>
                <ArrowRight size={16} />
              </button>
            </form>

            {/* Call to Actions */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-900 transition-all hover:bg-white hover:shadow-lg active:scale-95"
              >
                Explore Events
                <ArrowRight size={16} />
              </Link>

              <Link
                href="#categories"
                className="inline-flex items-center rounded-xl border border-slate-800 bg-slate-900/50 px-6 py-3 text-sm font-semibold text-slate-300 backdrop-blur-md transition-all hover:bg-slate-800 hover:text-white active:scale-95"
              >
                Browse Categories
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="mt-12 flex flex-wrap gap-8 border-t border-slate-800/80 pt-8">
              <div>
                <p className="text-2xl font-extrabold text-white">500+</p>
                <p className="mt-0.5 text-xs sm:text-sm text-slate-400">Live Events</p>
              </div>

              <div className="h-10 w-[1px] bg-slate-800 hidden sm:block" />

              <div>
                <p className="text-2xl font-extrabold text-white">20K+</p>
                <p className="mt-0.5 text-xs sm:text-sm text-slate-400">Active Attendees</p>
              </div>

              <div className="h-10 w-[1px] bg-slate-800 hidden sm:block" />

              <div>
                <div className="flex items-center gap-1.5">
                  <p className="text-2xl font-extrabold text-white">4.9</p>
                  <Star size={18} className="fill-amber-400 text-amber-400" />
                </div>
                <p className="mt-0.5 text-xs sm:text-sm text-slate-400">User Rating</p>
              </div>
            </div>
          </div>

          {/* Right Visual Highlight */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative mx-auto max-w-md">
              {/* Card Container */}
              <div className="overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-900/90 p-3 shadow-2xl shadow-violet-950/50 backdrop-blur-xl">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-950">
                  {/* Event Background Gradient & Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-indigo-700 to-slate-900 opacity-90" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-7 text-white">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md border border-white/20">
                        Featured Event
                      </span>
                      <span className="flex items-center gap-1 text-xs text-amber-300 font-medium bg-black/30 px-2.5 py-1 rounded-full backdrop-blur-sm">
                        <Star size={12} className="fill-amber-300" /> Top Pick
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-xs font-medium text-violet-200">
                        <Calendar size={14} />
                        <span>September 28, 2026</span>
                      </div>

                      <h3 className="mt-2 text-2xl font-bold leading-snug">
                        Future Tech <br /> Conference
                      </h3>

                      <div className="mt-3 flex items-center gap-2 text-xs text-violet-200">
                        <MapPin size={14} />
                        <span>Dhaka, Bangladesh</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Price Tag */}
              <div className="absolute -bottom-5 -left-6 rounded-2xl border border-slate-800 bg-slate-900/90 p-4 shadow-2xl backdrop-blur-xl">
                <p className="text-[11px] font-medium text-slate-400">Starting from</p>
                <div className="mt-0.5 flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-white">$40</span>
                  <span className="text-xs text-slate-400">/ ticket</span>
                </div>
                <p className="mt-1 text-xs font-semibold text-violet-400 flex items-center gap-1">
                  Book your seat <ArrowRight size={12} />
                </p>
              </div>

              {/* Floating Seats Tag */}
              <div className="absolute -right-5 top-10 rounded-2xl border border-slate-800 bg-slate-900/90 px-4 py-3 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-violet-400" />
                  <div>
                    <p className="text-[11px] font-medium text-slate-400">Available Seats</p>
                    <p className="text-base font-bold text-white">120 Left</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}