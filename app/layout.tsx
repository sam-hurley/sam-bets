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
			<body className="flex flex-col border-blue-500 border-4 min-h-screen h-fit w-full">
				<div>
					<NavBar />
				</div>

				<div className="flex flex-row border-purple-500 border-4 min-h-screen">
					<SideBar />
					<main className="border-green-500 border-2 w-3/4">{children}</main>
				</div>
				<footer className="hidden inset-y-0 h-max w-full mt-auto bg-darkBlue py-2 text-lg text-cream">
					<div className="text-center">By Sam Hurley (links)</div>
				</footer>
			</body>
		</html>
	);
}
