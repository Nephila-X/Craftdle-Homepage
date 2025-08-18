import type { Metadata } from "next";
import "./style.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
	title: 'Craftdle',
	description: 'Craftdle is the premier Minecraft-inspired Wordle puzzle game. Challenge yourself daily with crafting riddles across multiple game modes on any device.',
	keywords: ['Minecraft', 'Wordle', 'Craftdle', 'Crafting Puzzle', 'Guideian Angel', 'Crafting Game', 'Minecraft Puzzle', 'Craftle', 'Minecraftle'],
	authors: [{ name: 'Guideian Angel' }],
	robots: 'index, follow',
	icons: {
		icon: [
			{ url: '/imgs/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			{ url: '/imgs/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
			{ url: '/imgs/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
			{ url: '/imgs/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
		],
		apple: '/imgs/apple-touch-icon.png',
		shortcut: '/imgs/favicon.ico'
	},
	openGraph: {
		title: 'Craftdle - Ultimate Minecraft Crafting Puzzle',
		description: 'Play Craftdle, the top Minecraft-based Wordle-style crafting puzzle game. Unlock collectibles, earn achievements, and keep your streak alive!',
		url: 'https://craftdle.guideianangel.com',
		siteName: 'Craftdle',
		images: [{ url: 'https://craftdle.hu/opreview.png' }],
		type: 'website',
	},
	verification: {
		google: 'UsJ5_1yXJd68Wo-khNecqye_L5d-_tux0A4XWORieZs'
	}
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<div id="wrapper">
					<NavBar />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
