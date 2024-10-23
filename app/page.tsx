import NavBar from "@/components/navbar.server";
import SideBar from "@/components/sidebar.server";

export default function Home() {
	return (
		<main className="items-center justify-between text-center bg-darkBlue">
			<NavBar />
			<div className="flex flex-row border-2 h-screen">
				<SideBar />
				<div className="mt-40 border-2 w-full">
					<p className="text-cream">Content</p>
				</div>
			</div>
		</main>
	);
}
