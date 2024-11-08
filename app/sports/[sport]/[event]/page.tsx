// import { fetchEvents, fetchOdds } from "@/api/odds-api";
import Modal from "@/components/modal.client";
import OddsButton from "@/components/oddsbutton.client";
import { fakeData } from "@/db/fake-data";
import { EventsSearchParams } from "@/types";
import { Event } from "@/types/sports";
import { formatDates } from "@/utils";
import { format } from "date-fns";

export default async function EventPage(props: {
	params: { event: string };
	searchParams: EventsSearchParams;
}) {
	// const key = props.params.event;
	const selection = props.searchParams?.selection;
	const date = props.searchParams?.date;
	const time = props.searchParams?.time;
	const username = props.searchParams?.username;
	const odds = props.searchParams?.odds;

	// const events = await fetchOdds(key);
	const events = fakeData;
	const formattedDates = formatDates(events);

	return (
		<>
			<div className="text-center bg-darkBlue w-full min-h-screen h-fit">
				<ul className="flex flex-col items-center">
					{formattedDates.map((date: string) => (
						<div
							key={date}
							className="text-lightRed font-bold p-1 mt-2 mb-0 w-2/3"
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
											<OddsButton
												odds={{
													selection: event.home_team,
													odds: event.bookmakers[0].markets[0].outcomes[0]
														.price,
													date: date,
													time: event.commence_time.slice(11, 16),
													username: "sam333",
												}}
											/>
											<li className="text-cream ">
												<p>{event.commence_time.slice(11, 16)}</p>
												{event.home_team} v {event.away_team}
											</li>
											<OddsButton
												odds={{
													selection: event.away_team,
													odds: event.bookmakers[0].markets[0].outcomes[1]
														.price,
													date: date,
													time: event.commence_time.slice(11, 16),
													username: "sam333",
												}}
											/>
										</div>
									);
								}
							})}
						</div>
					))}
				</ul>
				{props.searchParams.show && (
					<Modal
						selection={{
							date: date,
							time: time,
							username: username,
							selection: selection,
							odds: odds,
						}}
					/>
				)}
			</div>
		</>
	);
}
