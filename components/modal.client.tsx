"use client";

import { useRouter } from "next/navigation";

export default function Modal() {
	const router = useRouter();

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
							type="text"
							className="w-16 bg-lightBlue text-cream text-center"
						/>
					</div>
					<div className="flex flex-col mt-4 items-center">
						<button
							onClick={() => {
								router.push("/my-bets");
							}}
							className="w-32 mb-5 px-4 py-2 bg-darkBlue text-cream text-base font-medium rounded-md shadow-sm hover:bg-lightBlue focus:outline-none focus:ring-2 focus:ring-gray-300"
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
