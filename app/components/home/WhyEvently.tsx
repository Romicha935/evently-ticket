import {
  CheckCircle2,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Container from "@/app/components/ui/Container";

const features = [
  {
    icon: Sparkles,
    title: "Curated Experiences",
    description:
      "Discover events selected to help you find something worth experiencing.",
  },
  {
    icon: LockKeyhole,
    title: "Secure Booking",
    description:
      "Your booking and payment information are handled with security in mind.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Tickets",
    description:
      "Get a digital ticket with your booking details ready whenever you need it.",
  },
];

const benefits = [
  "Interactive seat selection",
  "Instant booking confirmation",
  "Digital tickets with QR codes",
  "Easy access to your bookings",
];

export default function WhyEvently() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold text-violet-600">
              Built for better experiences
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to enjoy your next event
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-500">
              Evently makes discovering, booking and managing event
              tickets simple—from the first search to the moment you
              walk through the door.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-violet-600"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:border-violet-200 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                      <Icon size={21} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {feature.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}