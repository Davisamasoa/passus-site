import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import PhotoGrid from "@/components/execucoes/PhotoGrid";
import { missCards } from "@/data/portfolio";

export const metadata: Metadata = {
	title: "Miss Universo Brasil",
};

export default function Miss() {
	return (
		<>
			<div className="flex flex-col mx-auto md:w-3/5 w-full 2xl:px-headerPaddingLG px-headerPadding">
				<h1 className="sm:gap-5 md:mb-5 md:mt-9 pb-10 font-goudyOldStyle text-white opacity-90 sm:text-3xl md:text-5xl text-2xl leading-6 text-center">
					Miss Universo Brasil
				</h1>
			</div>
			<FadeIn
				as="main"
				className="sm:gap-5 2xl:px-headerPaddingLG md:px-headerPadding lg:mt-10 px-4 mb-20 text-gray-400"
			>
				<PhotoGrid
					cards={missCards}
					className="grid gap-6 sm:gap-4 2xl:gap-6 md:grid-cols-2 grid-cols-1 justify-center lg:justify-between"
				/>
			</FadeIn>
		</>
	);
}
