import OddsButton from "@/components/oddsbutton.client";
import { Event } from "@/types";
import { format } from "date-fns";
export default async function EventPage(props: {
	params: { event: string };
	searchParams: { show: string };
}) {
	const key = props.params.event;

	const data = await fetch(
		`https://api.the-odds-api.com/v4/sports/${key}/events?apiKey=${process.env.ODDSAPI_API_KEY}`
	);
	const events = await data.json();
	const formattedDates: string[] = [];
	events.map((event: Event) => {
		if (
			!formattedDates.includes(
				format(new Date(event.commence_time), "dd/MM/yyy")
			)
		) {
			formattedDates.push(format(new Date(event.commence_time), "dd/MM/yyy"));
		}
	});

	return (
		<div className="items-center justify-between text-center bg-darkBlue">
			<div className="flex flex-row border-2 flex-grow">
				<div className="mt-36 ml-72 border-2 w-screen">
					<ul>
						{formattedDates.map((date: string) => (
							<div key={date} className="border-2 m-1 text-lightRed font-bold">
								{date}
								{events.map((event: Event) => {
									if (
										format(new Date(event.commence_time), "dd/MM/yyy") === date
									) {
										return (
											<div
												key={event.id}
												className="border-2 flex flex-row justify-center"
											>
												<OddsButton searchParams={props.searchParams} />
												<li className="text-cream font-thin">
													{event.home_team} v {event.away_team}
													<button className="border-2 ml-2">Away</button>
												</li>
											</div>
										);
									}
								})}
							</div>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
