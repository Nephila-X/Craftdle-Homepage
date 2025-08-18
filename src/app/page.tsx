import Link from "next/link";
import normalTitle from "../assets/imgs/craftdle_react_edition_title.png";
import testTitle from "../assets/imgs/craftdle_react_edition_test_title.png";
import thumbnail from "../assets/imgs/thumbnail.png";
import testThumbnail from "../assets/imgs/test_thumbnail.png";

export default function HomePage() {
    return (
        <main id="home">
            <article id="craftdleIntro">
                <h1>Welcome to Craftdle</h1>
                <p>
                    Craftdle is a fun and challenging crafting puzzle game inspired by Wordle and Minecraft.
                    Test your knowledge of crafting recipes, solve unique daily puzzles, and enjoy multiple game modes
                    designed for both casual players and dedicated fans. Play anytime on PC, mobile, tablet, or even your TV,
                    and see how many recipes you can master!
                </p>
            </article>

            <article id="play">
                <h2>Play Craftdle</h2>
                <div id="versionCards">
                    <section className="versionCard">
                        <img
                            className="craftdleTitle"
                            src={normalTitle.src}
                            alt="Stable Version of Craftdle"
                        />
                        <h3>Stable Version</h3>
                        <p>Enjoy a polished, bug-free experience with all core features fully implemented.</p>
                        <p>Perfect for players who want smooth and reliable gameplay.</p>
                        <img
                            className="craftdleThumbnail"
                            src={thumbnail.src}
                            alt="Thumbnail for Stable Version of Craftdle"
                        />
                        <a className="button" href="https://craftdle.guideianangel.com">Play now!</a>
                    </section>

                    <section className="versionCard">
                        <img
                            className="craftdleTitle"
                            src={testTitle.src}
                            alt="Experimental Test Version of Craftdle"
                        />
                        <h3>Test Version</h3>
                        <p>Try the newest experimental features and help shape Craftdle's future.</p>
                        <p>Your feedback is important for continuous improvements.</p>
                        <img
                            className="craftdleThumbnail"
                            src={testThumbnail.src}
                            alt="Thumbnail for Experimental Test Version of Craftdle"
                        />
                        <a className="button" href="https://test.craftdle.guideianangel.com">Play now!</a>
                    </section>
                </div>
            </article>

            <article id="whyBest">
                <h2>Why is Craftdle the Best?</h2>
                <p>
                    Craftdle is a Minecraft-inspired crafting puzzle game designed for players who enjoy a daily challenge.
                    Compared to alternatives like Craftle, Minecraftle, or other similar versions, Craftdle offers more varied game modes, regular updates, and a smooth experience across devices.
                    See how it stands out in our detailed comparison.
                </p>
                <Link className="button" href="/comparison">See the full comparison!</Link>
            </article>

            <article id="creators">
                <h2>Creators of Craftdle</h2>
                <p>
                    Craftdle was crafted with love by fans of both Minecraft and Wordle games.
                    Our mission is simple: to give you fun daily challenges, fresh gamemodes,
                    and a place to test your crafting knowledge in creative ways.
                </p>
                <p>
                    Want to know who made all of this possible? Check out the full list of creators and contributors!
                </p>
                <Link className="button" href="/credits">See full credits</Link>
            </article>
        </main>
    );
}
