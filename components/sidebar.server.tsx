import { Sport, UniqueSports } from "@/types";
import Link from "next/link";

export default async function SideBar() {
	const data = await fetch(
		`https://api.the-odds-api.com/v4/sports/?apiKey=${process.env.ODDSAPI_API_KEY}`
	);
	const sports = await data.json();
	const uniqueSports: UniqueSports = [{ key: "test" }];
	sports.forEach((sport: Sport) => {
		const found = uniqueSports.some((el) => el.group === sport.group);
		if (!found) {
			uniqueSports.push(sport);
		}
	});
	return (
		<div className="mt-36 border-2 w-72 bg-darkBlue fixed h-screen text-center">
			<div>
				<Link href="/" className="text-lightRed font-bold">
					Home
				</Link>
			</div>
			<div>
				<Link href="/sports" className="text-lightRed font-bold">
					Sports
				</Link>
			</div>
			<div>
				<Link href="/my-bets" className="text-lightRed font-bold">
					My Bets
				</Link>
			</div>
			<ul>
				{uniqueSports.map((sport) => (
					<li key={sport.key}>
						<Link
							href={`/sports/${sport.group}`}
							className={"text-cream"}
							key={sport.key}
						>
							{sport.group}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
