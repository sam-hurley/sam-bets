import { fetchSports } from "@/api/odds-api";
import Image from "next/image";
import Link from "next/link";

export default async function SideBar() {
	const sports = await fetchSports();

	return (
		<div className="border-2 bg-darkBlue w-1/4">
			<ul className="text-lightRed font-bold text-lg bg-cream opacity-90">
				<li>
					<Link className="hover:text-lightBlue ml-2" href="/">
						Home
					</Link>
				</li>
				<li>
					<p className="ml-2">Search</p>
				</li>
				<li className="flex">
					<Image
						src="/static/betslip-icon.svg"
						alt="football icon"
						width={25}
						height={25}
						className="mx-2"
					/>
					<Link className="hover:text-lightBlue" href="/my-bets">
						My Bets
					</Link>
				</li>
				<li>
					<p className="ml-2">Favourites</p>
				</li>
				<li>
					<p className="ml-2">Popular</p>
					<ul className="text-cream bg-darkBlue font-thin">
						<li className="flex my-1">
							<Image
								src="/static/sports-icons/football.svg"
								alt="football icon"
								width={25}
								height={25}
								className="mx-2"
							/>
							<Link
								href="/sports/Soccer/soccer_epl"
								className="hover:text-lightBlue"
							>
								English Premier League
							</Link>
						</li>
						<li className="flex my-1">
							<Image
								src="/static/sports-icons/football.svg"
								alt="football icon"
								width={25}
								height={25}
								className="mx-2"
							/>
							<Link
								href="/sports/Soccer/soccer_uefa_champs_league"
								className="hover:text-lightBlue"
							>
								UEFA Champions League
							</Link>
						</li>
						<li className="flex my-1">
							<Image
								src="/static/sports-icons/football.svg"
								alt="football icon"
								width={25}
								height={25}
								className="mx-2"
							/>
							<Link
								href="/sports/Soccer/soccer_efl_champ"
								className="hover:text-lightBlue"
							>
								English Championship
							</Link>
						</li>
						<li className="flex my-1">
							<Image
								src="/static/sports-icons/mma.svg"
								alt="mma icon"
								width={25}
								height={25}
								className="mx-2"
							/>
							<Link
								href="/sports/Mixed%20Martial%20Arts/mma_mixed_martial_arts"
								className="hover:text-lightBlue"
							>
								UFC
							</Link>
						</li>
						<li className="flex my-1">
							<Image
								src="/static/sports-icons/football.svg"
								alt="american football icon"
								width={25}
								height={25}
								className="mx-2"
							/>
							<Link
								href="/sports/American%20Football/americanfootball_nfl"
								className="hover:text-lightBlue"
							>
								NFL
							</Link>
						</li>
						<li className="flex my-1">
							<Image
								src="/static/sports-icons/mma.svg"
								alt="boxing icon"
								width={25}
								height={25}
								className="mx-2"
							/>
							<Link
								href="/sports/Boxing/boxing_boxing"
								className="hover:text-lightBlue"
							>
								Boxing
							</Link>
						</li>
					</ul>
				</li>
				<li>
					<Link className="ml-2 hover:text-lightBlue" href="/sports">
						Sports
					</Link>
				</li>
			</ul>
			<ul>
				{sports.map((sport) => (
					<li key={sport.key}>
						<Link
							href={`/sports/${sport.group}`}
							className={"text-cream ml-2 hover:text-lightBlue"}
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
