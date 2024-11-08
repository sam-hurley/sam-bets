import Image from "next/image";

export default function NavBar() {
	return (
		<div className="bg-darkBlue w-full border-2">
			<Image src="/static/logo.png" alt="logo" width={300} height={200} />
			<div className="flex text-lightBlue text-center mb-2">
				<Image
					src="/static/sports-icons/football.svg"
					alt="football icon"
					width={50}
					height={50}
					className="mx-10"
				/>
				<Image
					src="/static/sports-icons/mma.svg"
					alt="mma icon"
					width={50}
					height={50}
					className="mx-10"
				/>
				<Image
					src="/static/sports-icons/american-football.svg"
					alt="american football icon"
					width={50}
					height={50}
					className="mx-10"
				/>
				<Image
					src="/static/sports-icons/golf.svg"
					alt="golf icon"
					width={50}
					height={50}
					className="mx-10"
				/>
				<Image
					src="/static/sports-icons/cricket.svg"
					alt="cricket icon"
					width={50}
					height={50}
					className="mx-10"
				/>
				<Image
					src="/static/sports-icons/basketball.svg"
					alt="basketball icon"
					width={50}
					height={50}
					className="mx-10"
				/>
				<Image
					src="/static/sports-icons/hockey.svg"
					alt="hockey icon"
					width={50}
					height={50}
					className="mx-10"
				/>
			</div>
		</div>
	);
}
