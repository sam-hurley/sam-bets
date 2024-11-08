import { Event } from "@/types/sports";
import { format } from "date-fns";

export function formatDates(dates: []) {
	const formattedDates: string[] = [];
	dates.map((event: Event) => {
		if (
			!formattedDates.includes(
				format(new Date(event.commence_time), "dd/MM/yyy")
			)
		) {
			formattedDates.push(format(new Date(event.commence_time), "dd/MM/yyy"));
		}
	});
	return formattedDates;
}
