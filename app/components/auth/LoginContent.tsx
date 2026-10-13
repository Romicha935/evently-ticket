
"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  Ticket,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { useLoginMutation } from "../../redux/features/auth/authApi.";



type LoginRole = "USER" | "ADMIN";

export default function LoginContent() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] =
    useState<LoginRole>("USER");
  const [errorMessage, setErrorMessage] = useState("");

  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setErrorMessage("");

    try {
      const response = await login({
        email,
        password,
      }).unwrap();

      // Role must come from the authenticated backend response.
      const actualRole = response.user.role?.toUpperCase();

      if (actualRole !== "ADMIN" && actualRole !== "USER") {
        setErrorMessage("Your account role is not supported.");
        return;
      }

      // Selected role does not grant permissions.
      if (actualRole !== selectedRole) {
        setErrorMessage(
          `This account is not registered as ${selectedRole.toLowerCase()}.`
        );
        return;
      }

      if (actualRole === "ADMIN") {
        router.replace("/admin");
      } else {
        router.replace("/account");
      }

      router.refresh();
    } catch {
      setErrorMessage(
        "Login failed. Please check your email and password."
      );
    }
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
                Discover events, reserve your seats and manage
                all your bookings from one simple place.
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

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              {/* Account Role */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Sign in as
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedRole("USER")}
                    aria-pressed={selectedRole === "USER"}
                    className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                      selectedRole === "USER"
                        ? "border-violet-600 bg-violet-50 text-violet-700 ring-1 ring-violet-600"
                        : "border-gray-300 text-gray-600 hover:border-violet-300"
                    }`}
                  >
                    <UserRound className="h-4 w-4" />
                    User
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedRole("ADMIN")}
                    aria-pressed={selectedRole === "ADMIN"}
                    className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                      selectedRole === "ADMIN"
                        ? "border-violet-600 bg-violet-50 text-violet-700 ring-1 ring-violet-600"
                        : "border-gray-300 text-gray-600 hover:border-violet-300"
                    }`}
                  >
                    <ShieldCheck className="h-4 w-4" />
                    Admin
                  </button>
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
                    placeholder="you@example.com"
                    autoComplete="email"
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
                    href="/forgot-password"
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
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((value) => !value)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-700"
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

              {/* Error */}
              {errorMessage && (
                <p
                  role="alert"
                  className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600"
                >
                  {errorMessage}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? "Signing in..." : "Sign In"}
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
