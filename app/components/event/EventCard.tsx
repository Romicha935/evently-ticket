import Link from "next/link";
import Image from "next/image";
import { CalendarDays, MapPin, ArrowUpRight } from "lucide-react";

export interface EventCardProps {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  price: number;
  image: string;
}

export default function EventCard({
  id,
  title,
  category,
  date,
  location,
  price,
  image,
}: EventCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <Link href={`/events/${id}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-violet-700 backdrop-blur">
            {category}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">
        <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
          <CalendarDays size={16} />
          <span>{date}</span>
        </div>

        <Link href={`/events/${id}`}>
          <h3 className="line-clamp-2 text-lg font-semibold leading-7 text-gray-900 transition-colors group-hover:text-violet-600">
            {title}
          </h3>
        </Link>

        <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
          <MapPin size={16} className="shrink-0" />
          <span className="truncate">{location}</span>
        </div>

        {/* Bottom */}
        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
          <div>
            <p className="text-xs text-gray-500">Starting from</p>
            <p className="mt-0.5 text-lg font-bold text-gray-900">
              ${price}
            </p>
          </div>

          <Link
            href={`/events/${id}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-all duration-200 group-hover:bg-violet-600 group-hover:text-white"
            aria-label={`View ${title}`}
          >
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </article>
  );
}