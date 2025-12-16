export interface Attendee {
  id: string;
  name: string;
  email: string;
  isConfirmed: boolean;
  hasPlusOne: boolean;
  plusOneQuantity: number;
}
