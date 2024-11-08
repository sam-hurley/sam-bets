import { fetchMyBets } from "@/db/hasura";
import { MyBet } from "@/types/bets";

export default async function MyBets() {
	const data = await fetchMyBets()
		.then(({ data, errors }) => {
			if (errors) {
				console.error(errors);
			}
			return data.bets;
		})
		.catch((error) => {
			console.error(error);
		});

	return (
		<div className="p-4 w-full h-full bg-darkBlue text-center text-cream text-2xl font-bold">
			My Bets
			<ul className="flex flex-col items-center">
				{data.map((bet: MyBet) => {
					return (
						<div className="mt-10 border-2 w-72 p-10" key={bet.id}>
							<li>
								<p className="text-lightRed">
									{bet.date} {bet.time.slice(0, 5)}
								</p>
								<p className="text-lightBlue">{bet.selection}</p>
								<p className="text-lightRed">
									Odds: <span className="text-cream">{bet.odds}</span>
								</p>
								<p className="text-lightRed">
									Stake: <span className="text-cream">{bet.stake}</span>
								</p>
								<p>{bet.open}</p>
							</li>
						</div>
					);
				})}
			</ul>
		</div>
	);
}
