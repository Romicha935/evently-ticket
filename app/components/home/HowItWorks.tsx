import {
  CalendarSearch,
  CreditCard,
  MousePointerClick,
  TicketCheck,
} from "lucide-react";

import Container from "@/app/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Explore concerts, conferences, workshops and other exciting events.",
    icon: CalendarSearch,
  },
  {
    number: "02",
    title: "Choose Your Seats",
    description:
      "Pick your preferred seats from the interactive event seat map.",
    icon: MousePointerClick,
  },
  {
    number: "03",
    title: "Book & Pay",
    description:
      "Review your booking and complete the payment securely.",
    icon: CreditCard,
  },
  {
    number: "04",
    title: "Get Your Ticket",
    description:
      "Receive your digital ticket and use it to enter the event.",
    icon: TicketCheck,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-violet-600">
            Simple & seamless
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How Evently works
          </h2>

          <p className="mt-3 text-gray-500">
            From discovering an event to getting your ticket, everything
            is designed to be simple.
          </p>
        </div>

        <div className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line */}
          <div className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-gray-200 lg:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative text-center"
              >
                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-100 bg-white text-violet-600 shadow-sm">
                  <Icon size={23} />

                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-[10px] font-bold text-white">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>

                <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-gray-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}