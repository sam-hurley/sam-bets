"use client";

import Link from "next/link";
import Modal from "./modal.client";
import { usePathname } from "next/navigation";

type SearchParamProps = {
	searchParams: Record<string, string> | null | undefined;
};

export default function OddsButton({ searchParams }: SearchParamProps) {
	const show = searchParams?.show;
	const pathname = usePathname();
	return (
		<>
			<Link
				className="p-2 text-cream font-bold border-2 border-lightRed rounded-xl m-2 hover:bg-lightRed"
				href={`${pathname}/?show=true`}
			>
				2.0
			</Link>
			{show && <Modal />}
		</>
	);
}
