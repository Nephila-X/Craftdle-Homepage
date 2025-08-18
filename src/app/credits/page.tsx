import type { Metadata } from "next";
import Credits from "./credits";

export const metadata: Metadata = {
  title: "Craftdle - Credits",
  description: "Acknowledging the creators and contributors of Craftdle."
};

export default function CreditsPage() {
  return <Credits />;
}