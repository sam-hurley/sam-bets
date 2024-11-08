"use client";

import { Selection } from "@/types/bets";
import { usePathname, useRouter } from "next/navigation";

export default function OddsButton(props: { odds: Selection }) {
	const router = useRouter();

	const date = props.odds.date;
	const time = props.odds.time;
	const username = props.odds.username;
	const selection = props.odds.selection;
	const odds = props.odds?.odds;
	const pathname = usePathname();

	const oddsButtonClick = (e) => {
		router.push(
			`${pathname}/?show=true&selection=${selection}&date=${date}&time=${time}&username=${username}&odds=${odds}`
		);
	};

	return (
		<>
			<button
				onClick={oddsButtonClick}
				className="p-2 text-cream font-bold border-2 border-lightRed rounded-xl m-2 hover:bg-lightRed min-w-16"
			>
				{odds}
			</button>
		</>
	);
}
