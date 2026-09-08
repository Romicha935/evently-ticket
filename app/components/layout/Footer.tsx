import Link from "next/link";
import {
  CalendarDays,

} from "lucide-react";

import Container from "@/app/components/ui/Container";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const exploreLinks = [
  { label: "All Events", href: "/events" },
  { label: "Music", href: "/events?category=Music" },
  { label: "Technology", href: "/events?category=Technology" },
  { label: "Business", href: "/events?category=Business" },
  { label: "Workshops", href: "/events?category=Workshop" },
];

const accountLinks = [
  { label: "My Bookings", href: "/bookings" },
  { label: "Login", href: "/login" },
  { label: "Register", href: "/register" },
];

const companyLinks = [
  { label: "About Evently", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-950 text-gray-300">
      <Container>
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xl font-bold tracking-tight text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600">
                <CalendarDays size={19} />
              </span>

              Event<span className="text-violet-400">ly</span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-gray-400">
              Discover amazing events, choose your seats and create
              unforgettable experiences with Evently.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <SocialButton label="Facebook">
                <FaFacebook size={17} />
              </SocialButton>

              <SocialButton label="Instagram">
                <FaInstagram size={17} />
              </SocialButton>

              <SocialButton label="Twitter">
                <FaTwitter size={17} />
              </SocialButton>

              <SocialButton label="LinkedIn">
                <FaLinkedin size={17} />
              </SocialButton>

              <SocialButton label="GitHub">
                <BsGithub size={17} />
              </SocialButton>
            </div>
          </div>

          {/* Explore */}
          <FooterColumn title="Explore">
            {exploreLinks.map((link) => (
              <FooterLink key={link.label} {...link} />
            ))}
          </FooterColumn>

          {/* Account */}
          <FooterColumn title="Account">
            {accountLinks.map((link) => (
              <FooterLink key={link.label} {...link} />
            ))}
          </FooterColumn>

          {/* Company */}
          <FooterColumn title="Company">
            {companyLinks.map((link) => (
              <FooterLink key={link.label} {...link} />
            ))}
          </FooterColumn>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-gray-800 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Evently. All rights reserved.
          </p>

          <p className="text-gray-500">
            Built with Next.js & TypeScript
          </p>
        </div>
      </Container>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>

      <nav className="mt-5 flex flex-col gap-3">{children}</nav>
    </div>
  );
}

interface FooterLinkProps {
  label: string;
  href: string;
}

function FooterLink({ label, href }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="w-fit text-sm text-gray-400 transition-colors hover:text-violet-400"
    >
      {label}
    </Link>
  );
}

interface SocialButtonProps {
  label: string;
  children: React.ReactNode;
}

function SocialButton({ label, children }: SocialButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-800 bg-gray-900 text-gray-400 transition-colors hover:border-violet-600 hover:bg-violet-600 hover:text-white"
    >
      {children}
    </button>
  );
}