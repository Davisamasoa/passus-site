"use client";
import { usePathname } from "next/navigation";
type Props = {};

export default function Footer({}: Props) {
	return (
		<footer className={`w-full mt-20 bg-zinc-800 flex justify-end items-center lg:px-52 md:px-20 px-3`}>
			<div className="flex gap-14 sm:gap-24 text-[12px] sm:text-[13px] items-end justify-end text-zinc-400 tracking-tight py-8 px-1 md:px-0">
				<p>Agência Passus ©</p>
			</div>
		</footer>
	);
}
