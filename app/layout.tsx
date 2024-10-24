import NavBar from "@/components/navbar.server";
import "./globals.css";
import type { Metadata } from "next";
import SideBar from "@/components/sidebar.server";

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
			<body className="flex">
				<NavBar />
				<SideBar />
				<main>{children}</main>
				<footer className="h-max mt-auto bg-darkBlue py-2 text-lg text-cream">
					<div className="text-center">By Sam Hurley</div>
				</footer>
			</body>
		</html>
	);
}
