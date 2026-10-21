import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import MainPicReveal from "@/components/MainPicReveal";

export const metadata: Metadata = {
	title: "Passus - Conceito",
	description: "O conceito da Passus, agência de publicidade.",
};

export default function Conceito() {
	return (
		<FadeIn>
			<h1 className="sm:gap-5 md:px-[10%] w-full lg:px-headerPaddingLG px-headerPadding pb-10 font-goudyOldStyle text-white sm:text-3xl md:text-4xl text-2xl leading-6">
				Ferramentas mudam,
				<br /> pessoas não.
			</h1>
			<MainPicReveal conceito src={process.env.NEXT_PUBLIC_VIDEOURL} />
		</FadeIn>
	);
}
