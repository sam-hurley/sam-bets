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
			<Link className="text-cream" href={`${pathname}/?show=true`}>
				Home
			</Link>
			{show && <Modal />}
		</>
	);
}
