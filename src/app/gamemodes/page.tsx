import { Metadata } from "next";

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
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/game/gamemodes`);
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
                    return (
                        <article key={gamemode.id} className="gamemode">
                            <h3 className="gamemodeName">{gamemode.name}</h3>
                            <p className="gamemodeDescription">{gamemode.description}</p>
                            <span className="gamemodeDifficulty" style={{ color: `#${gamemode.difficulty.color}` }}>{gamemode.difficulty.name}</span>
                            <img className="gamemodeIcon" src={`${process.env.NEXT_PUBLIC_SERVER_URL}/assets/gamemodes/${gamemode.icon}`} alt={gamemode.name} />
                            {gamemode.disabled && <strong className="gamemodeDisabled"> (Currently Disabled)</strong>}
                        </article>
                    );
                })}
            </div>
        </main>
    );
}