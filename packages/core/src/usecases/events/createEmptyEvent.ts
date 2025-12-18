import { Event } from "../../models";
import { v4 as uuidv4 } from "uuid";

export default function createEmptyEvent(): Partial<Event> {
  return {
    id: uuidv4(),
    name: "",
    description: "",
    image: "",
    backgroundImage: "",
    numberOfAttendees: 0,
    attendees: [],
  };
}
