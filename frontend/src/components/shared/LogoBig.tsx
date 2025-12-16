import { Righteous } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const font = Righteous({
  subsets: ["latin"],
  weight: "400",
});

export default function LogoBig() {
  return (
    <Link
      href="/"
      className={`${font.className} flex flex-col items-center gap-2`}
    >
      <Image src="/logo.svg" alt="Logo" width={100} height={100} />
      <h1 className="text-5xl font-bold text-white">
        <div>
          EVENT
          <span className="text-sky-600">0</span>
        </div>
        <div>DIGITAL</div>
      </h1>
    </Link>
  );
}
