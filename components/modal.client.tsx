"use client";

import { postBetTodb } from "@/db/hasura";
import { Selection } from "@/types/bets";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Modal(selection: { selection: Selection }) {
	const [stake, setStake] = useState(0);
	const [bet, setBet] = useState({
		odds: "",
		selection: "",
		stake: "",
		username: "",
		time: "",
		date: "",
	});

	const router = useRouter();

	const stakeInput = (e) => {
		setStake(Number(e.target.value));
	};
	const betSubmit = (e) => {
		setBet({
			date: selection.selection.date,
			time: selection.selection.time,
			username: selection.selection.username,
			selection: selection.selection.selection,
			odds: selection.selection.odds,
			stake: stake.toString(),
		});
	};

	if (bet.selection.length !== 0) {
		console.log(bet, "bet");
		postBetTodb(bet)
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.error(error);
			});
	}

	return (
		<div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
			<div className="p-8 border w-96 shadow-lg rounded-md bg-cream">
				<div className="text-center ">
					<h3 className="text-2xl font-bold text-darkBlue">BetSlip</h3>
					<div className="mt-2 px-7 py-3 flex flex-row justify-between">
						<p className="text-lg text-lightRed">Odds:</p>
						<p className="text-lg text-lightRed">2.0</p>
					</div>
					<div className="mt-2 px-7 py-3 flex flex-row justify-between">
						<p className="text-lg text-lightRed">Stake:</p>
						<input
							onChange={stakeInput}
							type="text"
							className="w-16 bg-lightBlue text-cream text-center"
						/>
					</div>
					<div className="flex flex-col mt-4 items-center">
						{bet.selection.length !== 0 && (
							<div>
								<p className="text-green-600 mb-5">Submitted!</p>
								<button
									className="w-32 mb-5 px-4 py-2 bg-darkBlue text-cream text-base font-medium rounded-md shadow-sm hover:bg-lightBlue focus:outline-none focus:ring-2 focus:ring-gray-300"
									onClick={() => {
										router.push("/my-bets");
									}}
								>
									My Bets
								</button>
							</div>
						)}
						<button
							onClick={betSubmit}
							className="w-32 mb-5 px-4 py-2 bg-darkBlue text-cream text-base font-medium rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
						>
							Submit
						</button>

						<button
							onClick={() => router.back()}
							className="w-32 px-4 py-2 bg-darkBlue text-cream text-base font-medium rounded-md shadow-sm hover:bg-lightRed focus:outline-none focus:ring-2 focus:ring-gray-300"
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
