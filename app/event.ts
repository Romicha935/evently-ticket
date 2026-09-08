import { EventCardProps } from "@/components/event/EventCard";

export const featuredEvents: EventCardProps[] = [
  {
    id: "summer-music-festival",
    title: "Summer Music Festival 2026",
    category: "Music",
    date: "Sep 20, 2026",
    location: "Dhaka, Bangladesh",
    price: 25,
    image: "/events/music.jpg",
  },
  {
    id: "tech-conference",
    title: "Future Tech Conference",
    category: "Conference",
    date: "Sep 28, 2026",
    location: "Dhaka, Bangladesh",
    price: 40,
    image: "/events/tech.jpg",
  },
  {
    id: "creative-workshop",
    title: "Creative Design Workshop",
    category: "Workshop",
    date: "Oct 05, 2026",
    location: "Chattogram, Bangladesh",
    price: 15,
    image: "/events/workshop.jpg",
  },
  {
    id: "startup-meetup",
    title: "Startup & Business Meetup",
    category: "Business",
    date: "Oct 12, 2026",
    location: "Dhaka, Bangladesh",
    price: 20,
    image: "/events/business.jpg",
  },
];