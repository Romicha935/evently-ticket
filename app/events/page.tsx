import Container from "@/app/components/ui/Container";

import { featuredEvents } from "@/app/event";
import EventsContent from "../components/event/EventsContent";

interface EventsPageProps {
  searchParams: Promise<{
    search?: string;
    category?: string;
    location?: string;
    sort?: string;
    page?: string;
  }>;
}

export default async function EventsPage({
  searchParams,
}: EventsPageProps) {
  const params = await searchParams;

  return (
    <main className="min-h-screen bg-gray-50 py-10 sm:py-14">
      <Container>
        <EventsContent
          events={featuredEvents}
          searchParams={params}
        />
      </Container>
    </main>
  );
}



// import EventFilters from "../components/event/EventFilter";
// import EventGrid from "../components/event/EventGrid";
// import Container from "../components/ui/Container";
// import { featuredEvents } from "../event";


// export default function EventsPage() {
//   return (
//     <main className="min-h-screen bg-gray-50 py-10 sm:py-14">
//       <Container>
//         <div className="mb-10">
//           <p className="text-sm font-semibold text-violet-600">
//             Discover
//           </p>

//           <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
//             Explore Events
//           </h1>

//           <p className="mt-3 max-w-2xl text-gray-500">
//             Find concerts, conferences, workshops and other exciting
//             experiences.
//           </p>
//         </div>

//         {/* Filters */}
//         <EventFilters
//           search=""
//           category=""
//           onSearchChange={() => {}}
//           onCategoryChange={() => {}}
//         />

//         {/* Events */}
//         <EventGrid events={featuredEvents} />
//       </Container>
//     </main>
//   );
// }