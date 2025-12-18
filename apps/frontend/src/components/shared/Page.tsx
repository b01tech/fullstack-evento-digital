import Logo from "./Logo";

interface PageProps {
  children: React.ReactNode;
  className?: string;
}

export default function Page({ children, className }: PageProps) {
  return (
    <div className="container flex flex-col items-center py-10 min-h-screen w-full bg-[url('/background.png')] bg-cover bg-center">
      <Logo />
      <main className={`${className} container flex flex-1`}>{children}</main>
    </div>
  );
}
