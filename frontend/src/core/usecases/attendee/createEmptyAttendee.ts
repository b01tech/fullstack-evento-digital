import { Attendee } from "../../models";

export default function createEmptyAttendee(): Partial<Attendee> {
  return {
    id: Math.random().toString(36).substring(2, 10),
    name: "",
    email: "",
    isConfirmed: false,
    hasPlusOne: false,
    plusOneQuantity: 0,
  };
}
