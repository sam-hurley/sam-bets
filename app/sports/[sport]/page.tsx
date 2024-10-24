import { Sport } from "@/types";
import Link from "next/link";

export default async function SportPage(props: { params: { sport: string } }) {
	console.log(props, "props");
	let key = props.params.sport;
	if (key.includes("%")) {
		const index = key.indexOf("%");
		const slice = key.slice(0, index);
		const slice2 = key.slice(index + 3);
		const join = slice + " " + slice2;
		key = join;
		if (key.includes("%")) {
			const index = key.indexOf("%");
			const slice = key.slice(0, index);
			const slice2 = key.slice(index + 3);
			const join = slice + " " + slice2;
			key = join;
		}
	}
	const data = await fetch(
		`https://api.the-odds-api.com/v4/sports/?apiKey=${process.env.ODDSAPI_API_KEY}`
	);
	const sports = await data.json();
	// console.log(sports);

	return (
		<div className="items-center justify-between text-center bg-darkBlue">
			<div className="flex flex-row border-2 flex-grow">
				<div className="mt-36 ml-72 border-2 w-screen">
					<ul>
						<div className="border-2">
							{sports.map((event: Sport) => {
								if (event.group === key) {
									return (
										<li key={event.key}>
											<Link
												href={`/sports/${key}/${event.key}`}
												key={event.key}
												className="text-cream font-thin"
											>
												{event.title}
											</Link>
										</li>
									);
								}
							})}
						</div>
					</ul>
				</div>
			</div>
		</div>
	);
}
