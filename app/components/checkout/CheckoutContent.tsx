"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, CreditCard, Mail, User } from "lucide-react";
import Link from "next/link";

import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";
import { featuredEvents } from "@/app/event";

interface CheckoutContentProps {
  eventId: string;
  selectedSeats: string[];
}

export default function CheckoutContent({
  eventId,
  selectedSeats,
}: CheckoutContentProps) {
  const event = featuredEvents.find((item) => item.id === eventId);

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
  });

  const totalAmount = useMemo(() => {
    if (!event) return 0;

    return event.price * selectedSeats.length;
  }, [event, selectedSeats]);

  if (!event) {
    return (
      <main className="min-h-screen bg-gray-50 py-20">
        <Container>
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Event not found
            </h1>

            <p className="mt-3 text-gray-500">
              We could not find the event for this checkout.
            </p>

            <Link href="/events" className="mt-6 inline-block">
              <Button variant="outline">
                Back to Events
              </Button>
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  if (selectedSeats.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50 py-20">
        <Container>
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              No seats selected
            </h1>

            <p className="mt-3 text-gray-500">
              Select at least one seat before continuing to checkout.
            </p>

            <Link
              href={`/events/${event.id}/booking`}
              className="mt-6 inline-block"
            >
              <Button>
                Select Seats
              </Button>
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setCustomer((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handlePayment = () => {
    console.log({
      eventId: event.id,
      selectedSeats,
      customer,
      totalAmount,
    });
  };

  const isFormValid =
    customer.name.trim() !== "" &&
    customer.email.trim() !== "";

  return (
    <main className="min-h-screen bg-gray-50 py-10 sm:py-14">
      <Container>
        <Link
          href={`/events/${event.id}/booking`}
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-violet-600"
        >
          <ArrowLeft size={17} />
          Back to seat selection
        </Link>

        <div className="mb-8">
          <p className="text-sm font-semibold text-violet-600">
            Checkout
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Complete Your Booking
          </h1>

          <p className="mt-3 text-gray-500">
            Review your booking and enter your details before payment.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <section className="space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Customer Information
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Your ticket confirmation will be sent to this email.
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>

                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      id="name"
                      name="name"
                      value={customer.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="h-12 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={customer.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="h-12 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                  <CreditCard size={20} />
                </div>

                <div>
                  <h2 className="font-semibold text-gray-900">
                    Secure Payment
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Payment integration will be connected to the backend
                    after the frontend flow is complete.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-6 lg:sticky lg:top-24">
            <h2 className="text-lg font-semibold text-gray-900">
              Order Summary
            </h2>

            <div className="mt-5 border-b border-gray-100 pb-5">
              <p className="text-sm font-semibold text-gray-900">
                {event.title}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                {event.date}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                {event.location}
              </p>
            </div>

            <div className="py-5">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                Selected Seats
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {selectedSeats.map((seat) => (
                  <span
                    key={seat}
                    className="rounded-lg bg-violet-50 px-3 py-1.5 text-sm font-semibold text-violet-700"
                  >
                    {seat}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3 border-t border-gray-100 pt-5">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  Ticket price
                </span>

                <span className="font-medium text-gray-900">
                  ${event.price}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  Quantity
                </span>

                <span className="font-medium text-gray-900">
                  {selectedSeats.length}
                </span>
              </div>

              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="font-semibold text-gray-900">
                  Total
                </span>

                <span className="text-2xl font-bold text-gray-900">
                  ${totalAmount}
                </span>
              </div>
            </div>

            <Button
              size="lg"
              className="mt-6 w-full"
              disabled={!isFormValid}
              onClick={handlePayment}
            >
              <CreditCard size={18} className="mr-2" />
              Proceed to Payment
            </Button>

            {!isFormValid && (
              <p className="mt-3 text-center text-xs text-gray-400">
                Enter your name and email to continue.
              </p>
            )}
          </aside>
        </div>
      </Container>
    </main>
  );
}