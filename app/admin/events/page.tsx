import EventsPageHeader from "../../components/admin/events/Eventpageheader";
import EventStats from "../../components/admin/events/EventState";
import EventsTable from "../../components/admin/events/EventTable";
import EventFilters from "../../components/event/EventFilter";


export default function EventsPage() {
  return (
    <div className="space-y-6">
      <EventsPageHeader />
      <EventStats />
      <EventFilters />
      <EventsTable />
    </div>
  );
}