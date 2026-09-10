
"use client";

import Link from "next/link";
import { LogOut, Menu, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

import Container from "../ui/Container";
import Button from "../ui/Button";
import NotificationDropdown from "./NotificationDropdown";

import { getUser, logoutUser, EventlyUser } from "@/app/lib/auth";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "My Bookings", href: "/bookings" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<EventlyUser | null>(null);

  useEffect(() => {
    setUser(getUser());
  }, []);

  const handleLogout = () => {
    logoutUser();
    setUser(null);
    setIsOpen(false);

    window.location.href = "/";
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center text-xl font-bold tracking-tight text-gray-900"
          >
            <Image
              src="/logo.svg"
              alt="Evently Logo"
              width={40}
              height={40}
            />

            Event<span className="text-violet-600">ly</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-violet-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            {!user ? (
              <>
                <Link href="/login">
                  <Button variant="ghost">Login</Button>
                </Link>

                <Link href="/register">
                  <Button>Get Started</Button>
                </Link>
              </>
            ) : (
              <>
                {/* Notifications */}
                <NotificationDropdown />

                {/* Account */}
                <Link
                  href="/account"
                  className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                    <User size={16} />
                  </span>

                  <span className="max-w-32 truncate">{user.name}</span>
                </Link>

                {/* Logout */}
                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-xl p-2.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
                  aria-label="Logout"
                  title="Logout"
                >
                  <LogOut size={18} />
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-gray-100 py-4 md:hidden">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-violet-600"
                >
                  {link.label}
                </Link>
              ))}

              {!user ? (
                <div className="mt-2 flex gap-2 border-t border-gray-100 pt-4">
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex-1"
                  >
                    <Button variant="outline" className="w-full">
                      Login
                    </Button>
                  </Link>

                  <Link
                    href="/register"
                    onClick={() => setIsOpen(false)}
                    className="flex-1"
                  >
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </div>
              ) : (
                <div className="mt-2 border-t border-gray-100 pt-4">
                  {/* Mobile Notifications */}
                  <NotificationDropdown />

                  {/* Mobile Account */}
                  <Link
                    href="/account"
                    onClick={() => setIsOpen(false)}
                    className="mt-2 flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-gray-50"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                      <User size={17} />
                    </span>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-gray-900">
                        {user.name}
                      </p>

                      <p className="truncate text-xs text-gray-500">
                        {user.email}
                      </p>
                    </div>
                  </Link>

                  {/* Mobile Logout */}
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="mt-2 flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50"
                  >
                    <LogOut size={17} />
                    Logout
                  </button>
                </div>
              )}
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}