import EventGrid from "./components/event/EventGrid";
import HeroSection from "./components/home/HeroSection";
import Container from "./components/ui/Container";
import { featuredEvents } from "./event";


export default function Home() {
  return (
    <main>
     <HeroSection/>
      {/* Featured Events */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold text-violet-600">
                Explore
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                Featured Events
              </h2>
            </div>
          </div>

          <EventGrid events={featuredEvents} />
        </Container>
      </section>
    </main>
  );
} 