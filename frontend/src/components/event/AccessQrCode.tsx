import QRCode from "react-qr-code";
import { Event } from "@/src/core/models";

interface AccessQrCodeProps {
  event: Event;
  className?: string;
}

export default function AccessQrCode(props: AccessQrCodeProps) {
  const { event, className } = props;
  return (
    <div
      className={`flex flex-col items-start justify-start ${className || ""}`}
    >
      <span className="text-xs font-light my-2">Acesse via QR Code</span>
      <span>
        <QRCode
          className="w-32 h-32"
          value={JSON.stringify({
            id: event.id,
            password: event.password,
          })}
        />
      </span>
    </div>
  );
}
