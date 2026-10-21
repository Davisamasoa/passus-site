"use client";

import { useMemo, useState } from "react";
import FadeIn from "@/components/FadeIn";
import { SearchIcon } from "@/components/Icons";
import PhotoGrid from "@/components/execucoes/PhotoGrid";
import { executionCards } from "@/data/portfolio";
import { removeAccents } from "@/lib/slugify";

const normalize = (value: string) => removeAccents(value).toLowerCase();

// Texto pré-processado uma única vez para a busca ignorar maiúsculas e acentos.
const searchableCards = executionCards.map((card) => ({
	card,
	text: normalize(`${card.title} ${card.subtitle}`),
}));

export default function Execucoes() {
	const [query, setQuery] = useState("");

	const results = useMemo(() => {
		const term = normalize(query.trim());
		return searchableCards.filter(({ text }) => text.includes(term)).map(({ card }) => card);
	}, [query]);

	return (
		<>
			<div className="flex flex-col mx-auto md:w-3/5 w-full 2xl:px-headerPaddingLG px-headerPadding mb-10">
				<h1 className="sm:gap-5 my-2 md:mb-10 md:mt-14 pb-10 font-goudyOldStyle text-white opacity-90 sm:text-3xl md:text-5xl text-2xl leading-6 text-center md:text-start">
					Conexão entre os que falam <br />e os que precisam ouvir.
				</h1>
				<div className="flex justify-start items-baseline border-gray-700 border-b-[1px] text-white">
					<SearchIcon className="text-xl" />
					<input
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						className="bg-transparent px-5 py-4 focus:outline-none text-xs w-full"
						placeholder="Procure por trabalhos ou clientes "
						aria-label="Procure por trabalhos ou clientes"
					/>
				</div>
			</div>
			<FadeIn
				as="main"
				className="sm:gap-5 2xl:px-headerPaddingLG md:px-headerPadding lg:mt-10 px-4 mb-20 text-gray-400"
			>
				{query ? (
					<PhotoGrid
						cards={results}
						className="grid place-items-center md:grid-cols-3 grid-cols-1 mt-4 md:mt-16 justify-center lg:justify-between gap-6 sm:gap-4 2xl:gap-6"
					/>
				) : (
					<PhotoGrid
						cards={executionCards}
						className="grid gap-6 sm:gap-4 2xl:gap-6 md:grid-cols-2 grid-cols-1 justify-center lg:justify-between"
					/>
				)}
			</FadeIn>
		</>
	);
}
