import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Music2,
  Palette,
  Trophy,
} from "lucide-react";

import Container from "@/app/components/ui/Container";

const categories = [
  {
    name: "Music",
    description: "Concerts, festivals & live shows",
    icon: Music2,
    href: "/events?category=Music",
  },
  {
    name: "Technology",
    description: "Tech talks, conferences & meetups",
    icon: Code2,
    href: "/events?category=Technology",
  },
  {
    name: "Business",
    description: "Networking & business events",
    icon: BriefcaseBusiness,
    href: "/events?category=Business",
  },
  {
    name: "Workshops",
    description: "Learn, create & grow",
    icon: Palette,
    href: "/events?category=Workshop",
  },
  {
    name: "Sports",
    description: "Games, tournaments & fitness",
    icon: Trophy,
    href: "/events?category=Sports",
  },
];

export default function CategoriesSection() {
  return (
    <section
      id="categories"
      className="bg-gray-50 py-16 sm:py-20"
    >
      <Container>
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-violet-600">
            Explore by interest
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Find events you&apos;ll love
          </h2>

          <p className="mt-3 text-gray-500">
            Browse events by category and discover experiences that
            match your interests.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.name}
                href={category.href}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition-colors group-hover:bg-violet-600 group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-gray-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-600"
                  />
                </div>

                <h3 className="mt-5 text-base font-semibold text-gray-900">
                  {category.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {category.description}
                </p>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}