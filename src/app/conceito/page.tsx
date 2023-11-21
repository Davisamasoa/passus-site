"use client";

import MainPicReveal from "@/components/MainPicReveal";

type Props = {};

export default function page({}: Props) {
	return (
		<div>
			<h1 className="md:pl-[17.2%] w-full px-4 pb-10 font-goudyOldStyle text-white opacity-90 sm:text-3xl text-2xl  leading-5">
				Ferramentas mudam,
				<br /> pessoas não.
			</h1>
			<MainPicReveal conceito={true} src={process.env.NEXT_PUBLIC_VIDEOURL} />
		</div>
	);
}
