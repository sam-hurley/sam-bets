export type Sport = {
	key: string;
	group: string;
	title: string;
	description: string;
	active: boolean;
	has_outrights: boolean;
};

export type UniqueSports = [
	{
		key?: string;
		group?: string;
		title?: string;
		description?: string;
		active?: boolean;
		has_outrights?: boolean;
	}
];

export type Event = {
	id: string;
	sport_key: string;
	sport_title: string;
	commence_time: string;
	home_team: string;
	away_team: string;
};
