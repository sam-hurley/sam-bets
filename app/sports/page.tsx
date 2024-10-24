export default async function Page() {
	const data = await fetch(
		`https://api.the-odds-api.com/v4/sports/?apiKey=${process.env.ODDSAPI_API_KEY}`
	);
	const posts = await data.json();
	return (
		<ul>
			Sports
			{posts.map((post) => (
				<li key={post.key}>{post.group}</li>
			))}
		</ul>
	);
}
