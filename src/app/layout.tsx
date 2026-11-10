import type { Metadata } from "next";
import Script from "next/script";
// @ts-expect-error Next.js loads this global stylesheet at runtime.
import "./style.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
	metadataBase: new URL("https://craftdle.hu"),
	title: "Craftdle",
	description:
		"Craftdle is the premier Minecraft-inspired Wordle puzzle game. Challenge yourself daily with crafting riddles across multiple game modes on any device.",
	keywords: [
		"Minecraft",
		"Wordle",
		"Craftdle",
		"Crafting Puzzle",
		"NephilaX",
		"Crafting Game",
		"Minecraft Puzzle",
	],
	authors: [{ name: "NephilaX" }],
	robots: "index, follow",
	icons: {
		icon: [
            { url: "/imgs/favicon.ico", type: "image/x-icon" },
			{ url: "/imgs/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/imgs/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/imgs/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
			{ url: "/imgs/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
		],
		apple: "/imgs/apple-touch-icon.png",
	},
	openGraph: {
		title: "Craftdle",
		description:
			"Play Craftdle, the top Minecraft-based Wordle-style crafting puzzle game. Unlock collectibles, earn achievements, and keep your streak alive!",
		url: "https://craftdle.hu",
		siteName: "Craftdle",
		images: [{ url: "https://craftdle.hu/opreview.png" }],
		type: "website",
	},
	alternates: {
		canonical: "https://craftdle.hu/",
	},
	verification: {
		google: "UsJ5_1yXJd68Wo-khNecqye_L5d-_tux0A4XWORieZs",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<Script id="ld-website" type="application/ld+json" strategy="beforeInteractive">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "WebSite",
						"name": "Craftdle",
						"alternateName": [
							"Craftdle",
							"craftdle.hu",
							"Craftdle.hu",
							"Minecraft Wordle",
							"Crafting Riddle",
							"Crafting Puzzle"
						],
						"url": "https://craftdle.hu/",
						"description": "Craftdle is a Minecraft-inspired Wordle-style crafting puzzle game, similar to Craftle or Minecraftle."
					})}
				</Script>
				<Script id="ld-org" type="application/ld+json" strategy="beforeInteractive">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Organization",
						"url": "https://craftdle.hu/",
						"name": "Craftdle",
						"logo": "https://craftdle.hu/imgs/android-chrome-192x192.png",
						"sameAs": [
							"https://www.youtube.com/@craftdle",
							"https://www.instagram.com/craftdle.hu",
							"https://www.tiktok.com/@craftdle",
							"https://www.patreon.com/craftdle"
						]
					})}
				</Script>
			</head>
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
