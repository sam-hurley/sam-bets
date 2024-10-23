import Image from "next/image";

export default function NavBar() {
	return (
		<div className="bg-darkBlue w-screen fixed border-2">
			<Image src="/static/logo.png" alt="logo" width={300} height={200} />
			<div className="text-cream text-center">
				FOOTBALL - MMA - GOLF (ICONS)
			</div>
		</div>
	);
}
