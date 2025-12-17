import Page from "@/src/components/shared/Page";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <Page>{children}</Page>;
}
