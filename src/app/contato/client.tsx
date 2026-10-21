"use client";

import { m } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/contact";

// Desliza de cima para baixo enquanto aparece; o delay escalona a entrada de cada item.
const slideIn = (delay: number) =>
	({
		initial: { marginTop: -30, opacity: 0 },
		animate: { marginTop: 0, opacity: 1 },
		transition: { duration: 1.5, delay },
	}) as const;

export default function Contato() {
	return (
		<FadeIn className="text-gray-500 sm:gap-5 md:px-[10%] lg:px-headerPaddingLG px-headerPadding">
			<m.h1 {...slideIn(0)} className="w-full pt-10 font-basic opacity-90 text-xs leading-6">
				Para novas execuções
			</m.h1>
			<div className="sm:-mt-1 pb-10 font-goudyOldStyle text-gray-800 sm:text-3xl md:text-4xl text-2xl leading-6">
				<m.a {...slideIn(0.5)} href={`mailto:${CONTACT_EMAIL}`} className="border-b-[1px] border-gray-200 pb-1">
					{CONTACT_EMAIL}
				</m.a>
			</div>
			<p className="w-full font-basic opacity-90 sm:text-base text-sm leading-6">
				<m.a
					{...slideIn(1)}
					target="_blank"
					rel="noopener noreferrer"
					href={WHATSAPP_URL}
					className="sm:px-[25px] px-[14px] py-3 border-[1px] border-gray-200 cursor-pointer"
				>
					Se conecte por Whatsapp
				</m.a>
			</p>
		</FadeIn>
	);
}
