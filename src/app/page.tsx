import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import MainPicReveal from "@/components/MainPicReveal";
import Photo from "@/components/execucoes/Photo";
import { homeFeaturedRows } from "@/data/portfolio";

// Largura (a partir de md) de cada foto em cada linha de destaques.
const rowSizes = [
	["md:w-[50%]", "md:w-[24.2%]", "md:w-[24.2%]"],
	["md:w-[24%]", "md:w-[24%]", "md:w-[50%]"],
];

export default function Home() {
	return (
		<FadeIn>
			<div>
				<MainPicReveal conceito={false} src={process.env.NEXT_PUBLIC_VIDEOURL} />
			</div>
			<main className="flex flex-col gap-6 sm:gap-4 2xl:gap-6 2xl:px-headerPaddingLG md:px-headerPadding px-4 -mb-5 md:-mb-0 md:mt-10">
				{homeFeaturedRows.map((row, rowIndex) => (
					<div key={rowIndex} className="flex flex-col md:flex-row flex-nowrap gap-6 sm:gap-4 2xl:gap-6">
						{row.map((card, index) => (
							<Photo key={card.src} card={card} delay={index * 0.15} size={rowSizes[rowIndex][index]} main />
						))}
					</div>
				))}
				<p className="w-full py-6 flex justify-center font-basic opacity-90 text-xs leading-6 text-gray-500">
					<Link href="/execucoes" className="px-4 py-3 border-[1px] border-gray-200 cursor-pointer">
						Ver mais trabalhos
					</Link>
				</p>
			</main>
		</FadeIn>
	);
}
