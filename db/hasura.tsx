import { Bet } from "@/types/bets";

function fetchGraphQL(
	operationsDoc: string,
	operationName: string,
	variables: Record<string, any>
) {
	return fetch(process.env.NEXT_PUBLIC_HASURA_ADMIN_URL || "undefined", {
		method: "POST",
		headers: {
			"x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET,
		},
		body: JSON.stringify({
			query: operationsDoc,
			variables,
			operationName,
		}),
	}).then((result) => result.json());
}

export function fetchMyBets() {
	const operation = `
    query MyQuery {
    bets {
        id
        odds
        open
        selection
        stake
        username
        time
        date
    }}`;
	return fetchGraphQL(operation, "MyQuery", {});
}

export function postBetTodb(bet: Bet) {
	const operation = `
	mutation MyMutation{
        insert_bets (objects: {
            date: "${bet.date}", time: "${bet.time}", username: "${bet.username}", selection: "${bet.selection}", odds: "${bet.odds}", stake: "${bet.stake}"
            }) {affected_rows}
            }`;
	return fetchGraphQL(operation, "MyMutation", {});
}
