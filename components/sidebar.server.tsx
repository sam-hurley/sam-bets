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
		<div className="mt-40 border-2 w-80">
			<Link href="/sports" className="text-cream font-bold">
				Sports
			</Link>
			<ul>
				{uniqueSports.map((sport) => (
					<li key={sport.key}>
						<Link
							href={`/sports/${sport.key}`}
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
