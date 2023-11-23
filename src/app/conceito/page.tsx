"use client";

import MainPicReveal from "@/components/MainPicReveal";

type Props = {};

export default function page({}: Props) {
	return (
		<div>
			<h1 className="md:pl-[15%] w-full px-9 pb-10 font-goudyOldStyle text-white opacity-90 sm:text-3xl md:text-4xl text-2xl leading-6">
				Ferramentas mudam,
				<br /> pessoas não.
			</h1>
			<MainPicReveal conceito={true} src={process.env.NEXT_PUBLIC_VIDEOURL} />
		</div>
	);
}
