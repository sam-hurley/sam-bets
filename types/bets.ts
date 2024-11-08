// export type Odds = {
// 	date: string;
// 	time: string;
// 	username: string;
// 	selection: string;
// 	odds: number;
// };

export type Selection = {
	date: string;
	time: string;
	username: string;
	selection: string;
	odds: string;
};

export type Bet = {
	odds: string;
	selection: string;
	stake: string;
	username: string;
	time: string;
	date: string;
};

export type MyBet = {
	id: string;
	odds: string;
	selection: string;
	stake: string;
	username: string;
	time: string;
	date: string;
	open: boolean;
};
