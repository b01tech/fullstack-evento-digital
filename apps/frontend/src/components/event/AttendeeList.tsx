import { Attendee } from "core";
import AttendeeItem from "./Attendeeitem";

export interface AttendeeListProps {
  attendees: Attendee[];
}

export default function AttendeeList(props: AttendeeListProps) {
  const { attendees } = props;
  const confirmedAttendees = attendees.filter(
    (attendee) => attendee.isConfirmed
  );
  const unconfirmedAttendees = attendees.filter(
    (attendee) => !attendee.isConfirmed
  );
  return (
    <div className="flex flex-col info pb-12">
      <h2 className="text-2xl font-bold my-2">Lista de convidados</h2>
      <button className="btn blue self-end">
        Atualizar lista de convidados
      </button>
      <hr className="my-2 w-full border-sky-700 border-2" />
      <p className="text-lg font-bold my-2">
        Convidados que confirmaram presença
      </p>
      <ul className="flex flex-col gap-4 ">
        {confirmedAttendees.map((attendee) => (
          <AttendeeItem key={attendee.id} attendee={attendee} />
        ))}
      </ul>
      <p className="text-lg font-bold my-2">
        Convidados que confirmaram ausência
      </p>
      <ul className="flex flex-col gap-4 ">
        {unconfirmedAttendees.map((attendee) => (
          <AttendeeItem key={attendee.id} attendee={attendee} />
        ))}
      </ul>
    </div>
  );
}
