import { Righteous } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const font = Righteous({
  subsets: ["latin"],
  weight: "400",
});

export default function Logo() {
  return (
    <Link href="/" className={`${font.className} flex items-center gap-4`}>
      <Image src="/logo.svg" alt="Logo" width={50} height={50} />
      <h1 className="text-2xl font-bold text-white leading-5">
        <div>
          EVENT
          <span className="text-sky-600">0</span>
        </div>
        <div>DIGITAL</div>
      </h1>
    </Link>
  );
}
