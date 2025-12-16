import { Event } from "../../models";

export default class eventValidator {
  static validate(event: Partial<Event>): string[] {
    const errors: string[] = [];
    if (!event.alias || event.alias.trim() === "") {
      errors.push("Alias is required");
    }
    if (!event.name || event.name.trim() === "") {
      errors.push("Name is required");
    }
    if (!event.description || event.description.trim() === "") {
      errors.push("Description is required");
    }
    if (!event.image || event.image.trim() === "") {
      errors.push("Image is required");
    }
    if (!event.backgroundImage || event.backgroundImage.trim() === "") {
      errors.push("Background image is required");
    }
    if (!event.numberOfAttendees || event.numberOfAttendees < 0) {
      errors.push("Number of attendees must be greater than or equal to 0");
    }
    return errors;
  }
}
