import yt_icon from '@/assets/imgs/yt_icon.png';
import insta_icon from '@/assets/imgs/insta_icon.png';
import tiktok_icon from '@/assets/imgs/tiktok_icon.png';
import patreon_icon from '@/assets/imgs/patreon_icon.png';
import discord_icon from '@/assets/imgs/discord_icon.png';

export default function Footer() {
    return (
        <footer>
            <div id="socialMedia">
                <p>Follow Craftdle</p>
                <ul>
                    <li id='yt_icon'><a href="https://www.youtube.com/@craftdle"><img src={yt_icon.src} alt="Craftdle Youtube" /></a></li>
                    <li id='insta_icon'><a href="https://www.instagram.com/craftdle.hu"><img src={insta_icon.src} alt="Craftdle Instagram" /></a></li>
                    <li id='tiktok_icon'><a href="https://www.tiktok.com/@craftdle"><img src={tiktok_icon.src} alt="Craftdle TikTok" /></a></li>
                    <li id='discord_icon'><a href="https://discord.gg/tKVDhBbaKx"><img src={discord_icon.src} alt="Craftdle Discord" /></a></li>
                    <li id='patreon_icon'><a href="https://www.patreon.com/craftdle"><img src={patreon_icon.src} alt="Craftdle Patreon" /></a></li>
                </ul>
            </div>
            <div id="footerText">
                <p>Craftdle is a product of Guideian Angel since 2024.</p>
                <p>© 2025 Craftdle. All rights reserved.</p>
            </div>
        </footer>
    );
}
