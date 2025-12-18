import { Event } from "../../models";
import eventValidator from "./eventValidator";
import { Password } from "../../shared";

export default function completeEvent(eventPartial: Partial<Event>): Event {
  const errors = eventValidator.validate(eventPartial);
  if (errors.length > 0) {
    throw new Error(errors.join("/n"));
  }
  const event: Event = {
    ...eventPartial,
    id: eventPartial.id ?? Math.random().toString(36).substring(2, 10),
    password: eventPartial.password ?? Password.generate(),
    date: new Date(),
    alias: eventPartial.alias ?? "",
    name: eventPartial.name ?? "",
    description: eventPartial.description ?? "",
    image: eventPartial.image ?? "",
    backgroundImage: eventPartial.backgroundImage ?? "",
    numberOfAttendees: eventPartial.numberOfAttendees ?? 0,
    location: eventPartial.location ?? "",
    attendees: eventPartial.attendees ?? [],
  };
  return event;
}
