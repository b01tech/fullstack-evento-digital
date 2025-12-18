"use client";

import DashboardEvent from "@/src/components/event/DashboardEvent";
import RequestPasswordEvent from "@/src/components/event/RequestPasswordEvent";
import { events } from "core";
import { Event } from "core";
import { useParams } from "next/navigation";

export default function AdminEventPage() {
  const params = useParams<{ id: string; password: string }>();

  const id = params.id;
  const password = params.password;

  const event: Event | null =
    events.find((e) => e.id === id && e.password === password) ?? null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      {event ? <DashboardEvent event={event} /> : <RequestPasswordEvent />}
    </div>
  );
}
