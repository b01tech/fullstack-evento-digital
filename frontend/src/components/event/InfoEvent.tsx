import { Event } from "@/src/core/models";
import AccessQrCode from "./AccessQrCode";
import Info from "../shared/Info";

export interface InfoEventProps {
  event: Event;
}
export default function InfoEvent(props: InfoEventProps) {
  const { event } = props;
  return (
    <>
      <div className="flex w-full gap-6">
        <div className="flex flex-col w-full">
          <h2 className="text-2xl font-bold my-6">{event.name}</h2>
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
        <AccessQrCode event={event} className="mt-20 self-center" />
      </div>
      <div className="flex w-full gap-6 mt-6">
        <Info
          text="Expectativa de convidados"
          value={event.numberOfAttendees}
          image={"/icones/convidados.svg"}
        />
        <Info
          text="Confirmações"
          value={
            event.attendees.filter((attendee) => attendee.isConfirmed).length
          }
          image={"/icones/confirmados.svg"}
        />
        <Info
          text="Total confirmados"
          value={event.attendees.reduce((acc, attendee) => {
            if (attendee.isConfirmed) {
              acc += attendee.plusOneQuantity + 1;
            }
            return acc;
          }, 0)}
          image={"/icones/acompanhantes.svg"}
        />
      </div>
    </>
  );
}
