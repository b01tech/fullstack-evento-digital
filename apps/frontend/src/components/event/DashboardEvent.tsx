import { Event } from "core";
import InfoEvent from "./InfoEvent";
import AttendeeList from "./AttendeeList";

export interface DashboardEventProps {
  event: Event;
}

export default function DashboardEvent(props: DashboardEventProps) {
  const { event } = props;
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <InfoEvent event={event} />
      <AttendeeList attendees={event.attendees} />
    </div>
  );
}
