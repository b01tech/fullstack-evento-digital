import { Attendee } from "../../models";

export default class attendeeValidator {
  validate(attendee: Partial<Attendee>): string[] {
    const errors: string[] = [];
    if (!attendee.name) {
      errors.push("Name is required");
    }
    if (!attendee.email) {
      errors.push("Email is required");
    }
    if (!attendee.isConfirmed) {
      attendee.hasPlusOne = false;
      attendee.plusOneQuantity = 0;
    }
    return errors;
  }
}
