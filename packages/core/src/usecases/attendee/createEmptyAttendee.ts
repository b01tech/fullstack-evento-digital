import { Attendee } from "../../models";
import { v4 as uuidv4 } from "uuid";

export default function createEmptyAttendee(): Partial<Attendee> {
  return {
    id: uuidv4(),
    name: "",
    email: "",
    isConfirmed: false,
    hasPlusOne: false,
    plusOneQuantity: 0,
  };
}
