import Link from "next/link";
import LogoBig from "../components/shared/LogoBig";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[url('/background-home.svg')] bg-cover">
      <div className="p-8 rounded-24 flex flex-col items-center justify-center">
        <LogoBig />
        <p className="text-zinc-400 text-center font-light w-72 leading-6 mt-6 select-none">
          Crie e gerencie eventos digitais com facilidade, sem complicações.
        </p>
        <Link href="/event" className="btn blue my-4">
          Crie seu evento
        </Link>
      </div>
    </div>
  );
}
