import EventGrid from "./components/event/EventGrid";
import Container from "./components/ui/Container";
import { featuredEvents } from "./event";


export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-violet-50 px-4 py-2 text-sm font-medium text-violet-600">
              Discover unforgettable experiences
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Find events.
              <br />
              <span className="text-violet-600">Create memories.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              Discover concerts, conferences, workshops and experiences
              happening around you.
            </p>
          </div>
        </Container>
      </section>

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