import { Event } from "../../models";

export default function createEmptyEvent(): Partial<Event> {
  return {
    id: "",
    name: "",
    description: "",
    image: "",
    backgroundImage: "",
    numberOfAttendees: 0,
    attendees: [],
  };
}
