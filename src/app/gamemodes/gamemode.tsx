import Link from "next/link";
import { IGamemode } from "./page";

interface GamemodeBorderProps {
    gamemode: IGamemode;
    children: React.ReactNode;
}

function GamemodeBorder(props: GamemodeBorderProps) {
    return props.gamemode.disabled ? (
        <div className="gamemode disabledGamemode">
            {props.children}
        </div>
    ) : (
        <Link
            className="gamemode"
            href={`https://craftdle.nephilax.dev/play?gamemode=${props.gamemode.id}`}
        >{props.children}</Link>
    );
}

interface GamemodeProps {
    gamemode: IGamemode;
}

export function Gamemode(props: GamemodeProps) {
    const gamemode = props.gamemode;
    return (
        <GamemodeBorder
            gamemode={gamemode}
        >
            <h3 className="gamemodeName">{gamemode.name}</h3>
            <p className="gamemodeDescription">{gamemode.description}</p>
            <span className="gamemodeDifficulty" style={{ color: `#${gamemode.difficulty.color}` }}>{gamemode.difficulty.name}</span>
            <img className="gamemodeIcon" src={`${process.env.NEXT_PUBLIC_SERVER_URL}/assets/gamemodes/${gamemode.icon}`} alt={gamemode.name} />
            {gamemode.disabled && <strong className="gamemodeDisabled"> (Currently Disabled)</strong>}
        </GamemodeBorder>
    )
}