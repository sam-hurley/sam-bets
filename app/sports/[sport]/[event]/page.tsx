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
		<div className="text-center bg-darkBlue">
			<div className="flex flex-row flex-grow">
				<div className="mt-36 ml-72 w-screen">
					<ul className="flex flex-col items-center">
						{formattedDates.map((date: string) => (
							<div
								key={date}
								className="text-lightRed font-bold p-1 mt-2 mb-0 w-1/3"
							>
								{date}

								{events.map((event: Event) => {
									if (
										format(new Date(event.commence_time), "dd/MM/yyy") === date
									) {
										return (
											<div
												key={event.id}
												className="flex flex-row justify-between items-center"
											>
												<OddsButton searchParams={props.searchParams} />
												<li className="text-cream ">
													{event.home_team} v {event.away_team}
												</li>
												<OddsButton searchParams={props.searchParams} />
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
