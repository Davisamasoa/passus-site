"use client";

import MainPicReveal from "@/components/MainPicReveal";

type Props = {};

export default function page({}: Props) {
	return (
		<div>
			<h1 className="md:pl-[15%] w-full px-9 pt-10 font-goudyOldStyle text-gray-800 opacity-90 sm:text-lg text-base leading-6">
				Para novas execuções
			</h1>
			<a
				href="mailto:contato@passus.in"
				className="md:pl-[15%] w-full px-9 sm:-mt-2 pb-8 font-goudyOldStyle text-gray-800 opacity-90 sm:text-3xl text-2xl leading-6 block"
			>
				contato@passus.in
			</a>
			<p className="md:pl-[15%] w-full px-9 font-goudyOldStyle text-gray-800 opacity-90 sm:text-xl text-base leading-6">
				<a className="px-4 py-2 border-2 border-gray-800 cursor-pointer">Se conecte por Whatsapp</a>
			</p>
		</div>
	);
}
