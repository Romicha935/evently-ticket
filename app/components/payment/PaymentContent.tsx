"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  CreditCard,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";
import { featuredEvents } from "@/app/event";

interface PaymentContentProps {
  eventId: string;
  selectedSeats: string[];
}

export default function PaymentContent({
  eventId,
  selectedSeats,
}: PaymentContentProps) {
  const event = featuredEvents.find(
    (item) => item.id === eventId
  );

  const [paymentMethod, setPaymentMethod] =
    useState<"card" | "mobile">("card");

  const [card, setCard] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
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
              Event Not Found
            </h1>

            <p className="mt-3 text-gray-500">
              We could not find the event for this payment.
            </p>

            <Link
              href="/events"
              className="mt-6 inline-block"
            >
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
              No Seats Selected
            </h1>

            <p className="mt-3 text-gray-500">
              Please select at least one seat before making
              a payment.
            </p>

            <Link
              href={`/events/${event.id}/booking`}
              className="mt-6 inline-block"
            >
              <Button>Select Seats</Button>
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  const handleCardChange = (
    field: keyof typeof card,
    value: string
  ) => {
    setCard((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const isCardValid =
    card.number.trim() !== "" &&
    card.expiry.trim() !== "" &&
    card.cvc.trim() !== "" &&
    card.name.trim() !== "";

  const handlePayment = () => {
    console.log({
      eventId: event.id,
      selectedSeats,
      paymentMethod,
      totalAmount,
    });
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 sm:py-14">
      <Container>
        <Link
          href={`/checkout?eventId=${event.id}&seats=${selectedSeats.join(
            ","
          )}`}
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-violet-600"
        >
          <ArrowLeft size={17} />
          Back to Checkout
        </Link>

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-violet-600">
            Secure Payment
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Complete Your Payment
          </h1>

          <p className="mt-3 text-gray-500">
            Choose your preferred payment method and
            complete your booking.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* Payment */}
          <section className="space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                  <CreditCard size={20} />
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Payment Method
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Select how you would like to pay.
                  </p>
                </div>
              </div>

              {/* Methods */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`rounded-xl border p-4 text-left transition ${
                    paymentMethod === "card"
                      ? "border-violet-500 bg-violet-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CreditCard
                        size={19}
                        className={
                          paymentMethod === "card"
                            ? "text-violet-600"
                            : "text-gray-500"
                        }
                      />

                      <span className="text-sm font-semibold text-gray-900">
                        Card Payment
                      </span>
                    </div>

                    {paymentMethod === "card" && (
                      <CheckCircle2
                        size={18}
                        className="text-violet-600"
                      />
                    )}
                  </div>

                  <p className="mt-2 text-xs text-gray-500">
                    Visa, Mastercard and other cards
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("mobile")}
                  className={`rounded-xl border p-4 text-left transition ${
                    paymentMethod === "mobile"
                      ? "border-violet-500 bg-violet-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold ${
                          paymentMethod === "mobile"
                            ? "bg-violet-600 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        ৳
                      </div>

                      <span className="text-sm font-semibold text-gray-900">
                        Mobile Payment
                      </span>
                    </div>

                    {paymentMethod === "mobile" && (
                      <CheckCircle2
                        size={18}
                        className="text-violet-600"
                      />
                    )}
                  </div>

                  <p className="mt-2 text-xs text-gray-500">
                    Mobile financial payment
                  </p>
                </button>
              </div>

              {/* Card Form */}
              {paymentMethod === "card" && (
                <div className="mt-8 space-y-5">
                  <div>
                    <label
                      htmlFor="cardName"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Cardholder Name
                    </label>

                    <input
                      id="cardName"
                      value={card.name}
                      onChange={(e) =>
                        handleCardChange(
                          "name",
                          e.target.value
                        )
                      }
                      placeholder="Name on card"
                      className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="cardNumber"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Card Number
                    </label>

                    <div className="relative">
                      <CreditCard
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        id="cardNumber"
                        value={card.number}
                        onChange={(e) =>
                          handleCardChange(
                            "number",
                            e.target.value
                          )
                        }
                        placeholder="1234 5678 9012 3456"
                        inputMode="numeric"
                        className="h-12 w-full rounded-xl border border-gray-200 pl-11 pr-4 text-sm outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="expiry"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Expiry Date
                      </label>

                      <input
                        id="expiry"
                        value={card.expiry}
                        onChange={(e) =>
                          handleCardChange(
                            "expiry",
                            e.target.value
                          )
                        }
                        placeholder="MM / YY"
                        className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="cvc"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        CVC
                      </label>

                      <input
                        id="cvc"
                        value={card.cvc}
                        onChange={(e) =>
                          handleCardChange(
                            "cvc",
                            e.target.value
                          )
                        }
                        placeholder="123"
                        inputMode="numeric"
                        className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Mobile Payment */}
              {paymentMethod === "mobile" && (
                <div className="mt-8 rounded-xl bg-gray-50 p-5">
                  <p className="text-sm font-medium text-gray-900">
                    Mobile payment
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Mobile payment integration will be
                    connected to the backend payment gateway.
                  </p>
                </div>
              )}
            </div>

            {/* Security */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <LockKeyhole size={19} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Secure & Protected
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Your payment information is securely
                    processed. We never store your complete
                    card details.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Summary */}
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
              disabled={
                paymentMethod === "card" && !isCardValid
              }
              onClick={handlePayment}
            >
              <ShieldCheck
                size={18}
                className="mr-2"
              />
              Pay ${totalAmount}
            </Button>

            <p className="mt-3 text-center text-xs leading-5 text-gray-400">
              By continuing, you agree to Evently&apos;s
              terms and payment policy.
            </p>
          </aside>
        </div>
      </Container>
    </main>
  );
}