"use client";

import MainPicReveal from "@/components/MainPicReveal";

type Props = {};

export default function page({}: Props) {
	return (
		<div>
			<h1 className="md:pl-[15%] w-full px-9 pt-10 font-basic text-gray-800 opacity-90 sm:text-base text-sm leading-6">
				Para novas execuções
			</h1>
			<div className="md:pl-[15%] px-9 sm:-mt-1 pb-10 font-goudyOldStyle text-gray-800 sm:text-3xl text-2xl leading-6">
				<a href="mailto:contato@passus.in" className="border-b-[1px] border-gray-200 pb-1">
					contato@passus.in
				</a>
			</div>
			<p className="md:pl-[15%] w-full px-9 font-basic text-gray-800 opacity-90 sm:text-base text-sm leading-6">
				<a className="px-5 py-3 border-2 border-gray-800 cursor-pointer">Se conecte por Whatsapp</a>
			</p>
		</div>
	);
}
