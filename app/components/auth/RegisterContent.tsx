"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  Check,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Ticket,
  User,
} from "lucide-react";

export default function RegisterContent() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });
  };

  const passwordLength = formData.password.length >= 8;
  const passwordMatch =
    formData.password.length > 0 &&
    formData.password === formData.confirmPassword;

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
                Join Evently
              </p>

              <h1 className="mt-3 text-4xl font-bold leading-tight">
                Discover events worth remembering.
              </h1>

              <p className="mt-5 leading-7 text-gray-400">
                Create your account and start discovering events,
                reserving seats and managing your tickets.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Discover exciting events",
                  "Reserve your favorite seats",
                  "Manage all your tickets",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-600">
                      <Check className="h-3.5 w-3.5" />
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            Discover. Book. Experience.
          </p>
        </div>

        {/* Right Side */}
        <div className="p-6 sm:p-10 lg:p-12">
          <div className="mx-auto max-w-md">
            {/* Mobile Logo */}
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
                Create your account
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Sign up to start booking amazing events.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
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
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
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
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    required
                    className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((value) => !value)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>

                <p
                  className={`mt-2 text-xs ${
                    passwordLength
                      ? "text-green-600"
                      : "text-gray-400"
                  }`}
                >
                  {passwordLength ? "✓" : "•"} At least 8 characters
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Confirm password
                </label>

                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={
                      showConfirmPassword ? "text" : "password"
                    }
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    required
                    className={`w-full rounded-xl border bg-white py-3 pl-10 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:ring-2 ${
                      formData.confirmPassword.length > 0
                        ? passwordMatch
                          ? "border-green-400 focus:border-green-500 focus:ring-green-100"
                          : "border-red-300 focus:border-red-500 focus:ring-red-100"
                        : "border-gray-300 focus:border-violet-500 focus:ring-violet-100"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        (value) => !value
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                    aria-label={
                      showConfirmPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>

                {formData.confirmPassword.length > 0 && (
                  <p
                    className={`mt-2 text-xs ${
                      passwordMatch
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {passwordMatch
                      ? "✓ Passwords match"
                      : "Passwords do not match"}
                  </p>
                )}
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2">
                <input
                  id="terms"
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
                />

                <label
                  htmlFor="terms"
                  className="text-sm leading-5 text-gray-500"
                >
                  I agree to the{" "}
                  <Link
                    href="#"
                    className="font-medium text-violet-600 hover:text-violet-700"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="#"
                    className="font-medium text-violet-600 hover:text-violet-700"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
              >
                Create Account
              </button>
            </form>

            {/* Login */}
            <p className="mt-7 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-violet-600 hover:text-violet-700"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}