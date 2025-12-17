import { Event } from "@/src/core/models";

export interface InfoEventProps {
  event: Event;
}
export default function InfoEvent(props: InfoEventProps) {
  const { event } = props;
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold my-2">{event.name}</h2>
      <div className="flex w-full gap-8">
        <div className="info">
          <p className="text-sm  text-zinc-400">Data do Evento:</p>
          <span className="text-sm font-bold ">
            {event.date?.toLocaleDateString()} às{" "}
            {event.date?.toLocaleTimeString()}
          </span>
        </div>
        <div className="info">
          <p className="text-sm  text-zinc-400">Local:</p>
          <span className="text-sm font-bold">{event.location}</span>
        </div>
      </div>
      <div className="info">
        <p className="text-sm  text-zinc-400">Descrição:</p>
        <span className="text-sm font-bold">{event.description}</span>
      </div>
    </div>
  );
}
