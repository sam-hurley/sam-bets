import { Sport, UniqueSports } from "@/types/sports";

export async function fetchSports() {
	try {
		const data = await fetch(
			`https://api.the-odds-api.com/v4/sports/?apiKey=${process.env.ODDSAPI_API_KEY}`
		);
		const sports = await data.json();
		const uniqueSports: UniqueSports = [{ key: "test" }];
		sports.map((sport: Sport) => {
			const found = uniqueSports.some((el) => el.group === sport.group);
			if (!found) {
				uniqueSports.push(sport);
			}
		});
		return uniqueSports;
	} catch (error) {
		console.error(error);
	}
}

export async function fetchCompetitions() {
	try {
		const data = await fetch(
			`https://api.the-odds-api.com/v4/sports/?apiKey=${process.env.ODDSAPI_API_KEY}`
		);
		const sports = await data.json();
		return sports;
	} catch (error) {
		console.error(error);
	}
}

export async function fetchEvents(key: string) {
	try {
		const data = await fetch(
			`https://api.the-odds-api.com/v4/sports/${key}/events?apiKey=${process.env.ODDSAPI_API_KEY}`
		);
		const events = await data.json();
		return events;
	} catch (error) {
		console.error(error);
	}
}

export async function fetchOdds(key: string) {
	try {
		const data = await fetch(
			`https://api.the-odds-api.com/v4/sports/${key}/odds/?apiKey=${process.env.ODDSAPI_API_KEY}&regions=uk`
		);
		const events = await data.json();
		return events;
	} catch (error) {
		console.error(error);
	}
}
