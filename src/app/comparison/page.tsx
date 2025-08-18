import { Metadata } from "next";
import { HeaderText } from "./headerText";
import { ComparisonTable } from "./table";

export const metadata: Metadata = {
    title: "Craftdle - Game Comparison",
    description: "See how Craftdle compares to Craftle, Minecraftle, and other Minecraft Wordle alternatives."
}

export default function Comparison() {
    return (
        <main id="comparison">
            <HeaderText />
            <ComparisonTable />
        </main>
    );
}