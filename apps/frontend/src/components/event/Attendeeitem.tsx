import { Attendee } from "core";

interface AttendeeItemProps {
  attendee: Attendee;
}

export default function AttendeeItem(props: AttendeeItemProps) {
  const { attendee } = props;
  return (
    <li className="flex flex-1 border border-sky-700 rounded-md p-4 w-full gap-96">
      <div className="flex flex-col items-start justify-center">
        <span className="text-sm font-bold">{attendee.name}</span>
        <span className="text-xs text-zinc-400">{attendee.email}</span>
      </div>
      <div className="flex flex-col items-end justify-center">
        <span className="text-xs font-bold  text-zinc-400">Acompanhantes</span>
        <span className="text-md font-black">{attendee.plusOneQuantity}</span>
      </div>
    </li>
  );
}
