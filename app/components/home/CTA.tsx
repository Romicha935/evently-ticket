import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

import Container from "@/app/components/ui/Container";

export default function HomeCTA() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 py-14 sm:px-10 lg:px-16 lg:py-16">
          {/* Background decoration */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-600/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600 text-white">
              <CalendarDays size={25} />
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready for your next experience?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-300 sm:text-base">
              Discover something exciting, choose your seats and book
              your next unforgettable experience with Evently.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/events"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-violet-700"
              >
                Explore Events
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/register"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-gray-700 bg-gray-800 px-6 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
              >
                Create an Account
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}