
"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Check,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Ticket,
  User,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { useRegisterMutation } from "../../redux/features/auth/authApi.";



export default function RegisterContent() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [register, { isLoading, error }] = useRegisterMutation();
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSuccessMessage("");
  };

  const passwordLength = formData.password.length >= 8;

  const passwordMatch =
    formData.confirmPassword.length > 0 &&
    formData.password === formData.confirmPassword;

  const getErrorMessage = () => {
    if (!error) return "";

    if ("data" in error) {
      const data = error.data as
        | { message?: string | string[] }
        | undefined;

      if (Array.isArray(data?.message)) {
        return data.message.join(", ");
      }

      if (data?.message) {
        return data.message;
      }
    }

    if ("error" in error && error.error) {
      return error.error;
    }

    return "Registration failed. Please try again.";
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setSuccessMessage("");

    if (!passwordLength) {
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      return;
    }

    try {
      const response = await register({
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
      }).unwrap();

      // If the API returns a token and user, sign in immediately.
      if (response.accessToken && response.user) {
        dispatch(
          setCredentials({
            accessToken: response.accessToken,
            user: response.user,
          })
        );

        router.push("/account");
        router.refresh();
        return;
      }

      // If registration does not log the user in automatically.
      setSuccessMessage(
        response.message ||
          "Account created successfully. Please sign in."
      );

      router.push("/login?registered=1");
    } catch {
      // RTK Query stores the API error in `error`.
      // The error message is displayed below the form.
    }
  };

  const inputClass =
    "w-full rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100";

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

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* First and Last Name */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>

                  <div className="relative">
                    <User className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                      autoComplete="given-name"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>

                  <div className="relative">
                    <User className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      autoComplete="family-name"
                      required
                      className={inputClass}
                    />
                  </div>
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
                    autoComplete="email"
                    required
                    className={inputClass}
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
                    autoComplete="new-password"
                    minLength={8}
                    required
                    className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
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

                <p
                  className={`mt-2 text-xs ${
                    passwordLength ? "text-green-600" : "text-gray-400"
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
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    autoComplete="new-password"
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
                      setShowConfirmPassword((value) => !value)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                    aria-label={
                      showConfirmPassword
                        ? "Hide confirm password"
                        : "Show confirm password"
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
                      passwordMatch ? "text-green-600" : "text-red-500"
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
                    href="/terms"
                    className="font-medium text-violet-600 hover:text-violet-700"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="font-medium text-violet-600 hover:text-violet-700"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              {/* API Error */}
              {error && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  {getErrorMessage()}
                </div>
              )}

              {successMessage && (
                <div
                  role="status"
                  className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
                >
                  {successMessage}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={
                  isLoading || !passwordLength || !passwordMatch
                }
                className="w-full rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? "Creating account..." : "Create Account"}
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
