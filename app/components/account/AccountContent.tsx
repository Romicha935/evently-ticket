"use client";

import Link from "next/link";
import {
  CalendarDays,
  ChevronRight,
  Lock,
  LogOut,
  Mail,
  Ticket,
  User,
} from "lucide-react";
import { useState } from "react";

export default function AccountContent() {
  const [name, setName] = useState("Romicha Parvin");
  const [email, setEmail] = useState("romicha@example.com");

  const handleSave = () => {
    console.log({
      name,
      email,
    });
  };

  const handleLogout = () => {
    console.log("Logout");
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 sm:py-14">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div>
          <p className="text-sm font-medium text-violet-600">
            Account
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            My Account
          </h1>

          <p className="mt-3 text-gray-500">
            Manage your profile and account preferences.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-3 shadow-sm">
            <div className="flex items-center gap-3 rounded-xl bg-violet-50 p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                RP
              </div>

              <div className="min-w-0">
                <p className="truncate font-semibold text-gray-900">
                  Romicha Parvin
                </p>

                <p className="truncate text-xs text-gray-500">
                  romicha@example.com
                </p>
              </div>
            </div>

            <nav className="mt-3 space-y-1">
              <Link
                href="/account"
                className="flex items-center gap-3 rounded-xl bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900"
              >
                <User className="h-4 w-4" />
                Profile
              </Link>

              <Link
                href="/bookings"
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
              >
                <Ticket className="h-4 w-4" />
                My Bookings
              </Link>

              <Link
                href="#security"
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
              >
                <Lock className="h-4 w-4" />
                Security
              </Link>
            </nav>

            <div className="my-3 border-t border-gray-100" />

            <button
              type="button"
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-600 transition hover:bg-red-50"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </aside>

          {/* Main */}
          <div className="space-y-6">
            {/* Profile */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Profile Information
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Update your personal information.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xl font-bold text-violet-700">
                  RP
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    {name}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Evently member
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Full name
                  </label>

                  <div className="relative">
                    <User className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                    <input
                      id="name"
                      value={name}
                      onChange={(event) =>
                        setName(event.target.value)
                      }
                      className="w-full rounded-xl border border-gray-300 py-3 pl-10 pr-4 text-sm text-gray-900 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>

                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(event) =>
                        setEmail(event.target.value)
                      }
                      className="w-full rounded-xl border border-gray-300 py-3 pl-10 pr-4 text-sm text-gray-900 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={handleSave}
                  className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
                >
                  Save Changes
                </button>
              </div>
            </section>

            {/* Quick Links */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-lg font-bold text-gray-900">
                Quick Access
              </h2>

              <div className="mt-4 divide-y divide-gray-100">
                <Link
                  href="/bookings"
                  className="flex items-center justify-between py-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50">
                      <Ticket className="h-5 w-5 text-violet-600" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        My Bookings
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        View your event tickets and bookings
                      </p>
                    </div>
                  </div>

                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </Link>

                <Link
                  href="/events"
                  className="flex items-center justify-between py-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50">
                      <CalendarDays className="h-5 w-5 text-violet-600" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Discover Events
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        Find your next experience
                      </p>
                    </div>
                  </div>

                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </Link>
              </div>
            </section>

            {/* Security */}
            <section
              id="security"
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">
                    Security
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Manage your password and account security.
                  </p>
                </div>

                <Lock className="h-5 w-5 text-gray-400" />
              </div>

              <button
                type="button"
                className="mt-5 inline-flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
              >
                Change Password
                <ChevronRight className="h-4 w-4" />
              </button>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}