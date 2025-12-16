import { Event } from "../core/models";

const events: Event[] = [
  {
    id: "c7a944fd-b1b6-4d4b-8d7f-e0f21aac1b15",
    alias: "event-alias",
    password: "event-password",
    name: "Event Name",
    date: new Date(),
    location: "Event Location",
    description: "Event Description",
    image: "event-image.jpg",
    backgroundImage: "event-background.jpg",
    numberOfAttendees: 4,
    attendees: [
      {
        id: "123e4567-e89b-12d3-a456-426614174000",
        name: "Attendee Name",
        email: "attendee@example.com",
        isConfirmed: true,
        hasPlusOne: false,
        plusOneQuantity: 0,
      },
      {
        id: "45678901-2b3c-4d5e-6f7g-8h9i0j1k2l3m",
        name: "Attendee Name 2",
        email: "attendee2@example.com",
        isConfirmed: true,
        hasPlusOne: true,
        plusOneQuantity: 2,
      },
      {
        id: "45678901-2b3c-4d5e-6f7g-8h9i0j1k2l3m",
        name: "Attendee Name 3",
        email: "attendee3@example.com",
        isConfirmed: false,
        hasPlusOne: false,
        plusOneQuantity: 0,
      },
    ],
  },
  {
    id: "41535065-2a80-4294-a9b5-802c175eae7d",
    alias: "event-alias-2",
    password: "event-password-2",
    name: "Event Name 2",
    date: new Date(),
    location: "Event Location 2",
    description: "Event Description 2",
    image: "event-image-2.jpg",
    backgroundImage: "event-background-2.jpg",
    numberOfAttendees: 1,
    attendees: [
      {
        id: "45678901-2b3c-4d5e-6f7g-8h9i0j1k2l3m",
        name: "Attendee Name 3",
        email: "attendee3@example.com",
        isConfirmed: true,
        hasPlusOne: false,
        plusOneQuantity: 0,
      },
    ],
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174000",
    alias: "event-alias-3",
    password: "event-password-3",
    name: "Event Name 3",
    date: new Date(),
    location: "Event Location 3",
    description: "Event Description 3",
    image: "event-image-3.jpg",
    backgroundImage: "event-background-3.jpg",
    numberOfAttendees: 0,
    attendees: [
      {
        id: "45678901-2b3c-4d5e-6f7g-8h9i0j1k2l3m",
        name: "Attendee Name 4",
        email: "attendee4@example.com",
        isConfirmed: false,
        hasPlusOne: false,
        plusOneQuantity: 0,
      },
    ],
  },
];

export default events;
