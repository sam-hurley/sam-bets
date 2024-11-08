import { fetchCompetitions } from "@/api/odds-api";
import { Sport } from "@/types/sports";
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

	const sports = await fetchCompetitions();

	return (
		<div className="items-center justify-between text-center bg-darkBlue min-h-screen">
			<ul>
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
			</ul>
		</div>
	);
}
