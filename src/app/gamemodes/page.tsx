import { Metadata } from "next";
import { Gamemode } from "./gamemode";

export const revalidate = 0

export const metadata: Metadata = {
    title: "Gamemodes",
    description: "Explore the various gamemodes available in Craftdle, each offering a unique crafting puzzle experience."
}

export interface IGamemode {
    id: number;
    icon: string;
    name: string;
    description: string;
    difficulty: {
        name: string;
        color: string;
    };
    disabled: boolean;
}

export default async function Gamemodes() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/game/gamemodes`, {
        cache: "no-store",
    });
    const data: {
        data: {
            gamemodes: IGamemode[]
        }
    } = await res.json();
    const gamemodes = data.data.gamemodes;

    return (
        <main id="gamemodes">
            <section id="gamemodesText">
                <h2>Gamemodes</h2>
                <p>
                    Craftdle offers a variety of unique gamemodes that bring new ways to enjoy the crafting challenge.
                    Each mode adds its own twist - from classic recipe guessing to themed puzzles and experimental features.
                    Whether you&apos;re looking for a daily challenge or something fresh and creative, there&apos;s always a new way to test your crafting knowledge.
                </p>
            </section>
            <div id="gamemodesContainer">
                {gamemodes.map((gamemode) => {
                    return <Gamemode key={gamemode.id} gamemode={gamemode} />
                })}
            </div>
        </main>
    );
}