
"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Eye, EyeOff, Lock, Mail, Ticket } from "lucide-react";

import { setUser } from "@/app/lib/auth";

export default function LoginContent() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Frontend-only mock authentication.
    // Real JWT authentication will be connected with the backend later.
    setUser({
      name: email.split("@")[0] || "Evently User",
      email,
    });

    window.location.href = "/account";
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12 sm:py-16">
      <div className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm lg:grid-cols-2">
        {/* Left Side */}
        <div className="hidden bg-gray-900 p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xl font-bold"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600">
                <Ticket className="h-5 w-5" />
              </span>

              Evently
            </Link>

            <div className="mt-20 max-w-md">
              <p className="text-sm font-medium text-violet-400">
                Welcome back
              </p>

              <h1 className="mt-3 text-4xl font-bold leading-tight">
                Your next experience is just a ticket away.
              </h1>

              <p className="mt-5 leading-7 text-gray-400">
                Discover events, reserve your seats and manage all your
                bookings from one simple place.
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            Discover. Book. Experience.
          </p>
        </div>

        {/* Right Side */}
        <div className="p-6 sm:p-10 lg:p-12">
          <div className="mx-auto max-w-md">
            <div className="lg:hidden">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xl font-bold text-gray-900"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-white">
                  <Ticket className="h-5 w-5" />
                </span>

                Evently
              </Link>
            </div>

            <div className="mt-8 lg:mt-0">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Welcome back
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Sign in to continue to your Evently account.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>

                  <Link
                    href="#"
                    className="text-sm font-medium text-violet-600 hover:text-violet-700"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                    required
                    className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-700"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember */}
              <div className="flex items-center gap-2">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
                />

                <label
                  htmlFor="remember"
                  className="text-sm text-gray-600"
                >
                  Remember me
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
              >
                Sign In
              </button>
            </form>

            {/* Register */}
            <p className="mt-7 text-center text-sm text-gray-500">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-violet-600 hover:text-violet-700"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

