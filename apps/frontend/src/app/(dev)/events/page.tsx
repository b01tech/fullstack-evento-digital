import { events } from "core";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";

export default function Events() {
  return (
    <div className="grid grid-cols-3 gap-5">
      {events.map((event) => (
        <div
          key={event.id}
          className="flex flex-col w-full bg-zinc-800 rounded-lg overflow-hidden"
        >
          <div className="relative w-full h-44 ">
            <Image
              src={event.image}
              alt={event.name}
              className="object-cover "
              fill
            />
          </div>
          <div className="flex flex-col flex-1 p-7">
            <span className="text-lg font-bold">{event.name}</span>
            <p className=" flex-1 text-sm text-zinc-400">{event.description}</p>
            <div className="flex justify-center items-center mt-4">
              <QRCode
                className="w-32 h-32"
                value={JSON.stringify({
                  id: event.id,
                  password: event.password,
                })}
              />
            </div>
          </div>
          <div className="flex justify-center gap-x-10 pb-4">
            <Link
              href={`/event/admin/${event.id}/${event.password}`}
              className="btn blue"
            >
              Admin
            </Link>
            <Link href={`/invite/${event.alias}`} className="btn red">
              Convite
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
