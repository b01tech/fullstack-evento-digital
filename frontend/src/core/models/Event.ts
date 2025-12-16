import { Attendee } from "./Attendee";

export interface Event {
  id: string;
  alias: string;
  password: string;
  name: string;
  date: Date;
  location: string;
  description: string;
  image: string;
  backgroundImage: string;
  numberOfAttendees: number;
  attendees: Attendee[];
}
