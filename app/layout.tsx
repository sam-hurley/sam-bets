import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sam Bets",
	description: "sports gambling website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<main>{children}</main>
				<footer className="h-max mt-auto bg-darkBlue py-2 text-lg text-cream">
					<div className="text-center">By Sam Hurley</div>
				</footer>
			</body>
		</html>
	);
}
