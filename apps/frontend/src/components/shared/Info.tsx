import Image from "next/image";

interface InfoProps {
  text: string;
  value: string | number;
  image: string;
}

export default function Info(props: InfoProps) {
  const { text, value, image } = props;
  return (
    <div className="flex items-center justify-center w-full gap-4 bg-zinc-700 p-2 rounded-md my-2">
      <div className="flex flex-col items-start justify-center">
        <span className="text-sm text-zinc-400">{text}</span>
        <span className="text-md font-black">{value}</span>
      </div>
      <div className="flex items-center justify-end">
        <Image src={image} alt={text} width={48} height={48} />
      </div>
    </div>
  );
}
