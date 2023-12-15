"use client";

import Photo from "@/components/execucoes/Photo";
import { motion } from "framer-motion";
import { ChangeEvent, useEffect, useState } from "react";

type photoData = {
	src: string;
	subtitle: string;
	title: string;
	srcset?: undefined | string;
};

let delay = 0;

export default function Execucao() {
	const [results, setResults] = useState<photoData[] | null>(null);
	const [inputValue, setInputValue] = useState<string>("");
	const [worksData, setWorksData] = useState<photoData[]>();

	useEffect(() => {
		setWorksData([
			{
				src: "/assets/image/trabalho/poit/poit.webp",
				subtitle: "Vinicius Poit",
				title: "Campanha ao Governo de São Paulo",
			},
			{
				src: "/assets/image/trabalho/Miss – Beleza nacional.webp",
				subtitle: "Miss Universo Brasil",
				title: "Beleza nacional",
			},
			{
				src: "/assets/image/trabalho/Programa 4x4.webp",
				subtitle: "Programa 4x4",
				title: "Jornalismo independente",
			},
			{
				src: "/assets/image/trabalho/Tarcísio de Freitas.webp",
				subtitle: "Tarcísio de Freitas",
				title: "Jornada por São Paulo",
			},
			{
				src: "/assets/image/trabalho/Jovem-Pan-e-Brasil-200.webp",
				subtitle: "Jovem Pan e Brasil 200",
				title: "Estender mãos, construir um país",
			},
			{
				src: "/assets/image/trabalho/Aldo Rebelo.webp",
				subtitle: "Aldo Rebelo",
				title: "O projeto nacionalista",
			},
			{
				src: "/assets/image/trabalho/ashby.webp",
				subtitle: "Ashby",
				title: "3 décadas de sabor",
			},
			{
				src: "/assets/image/trabalho/Credal.webp",
				subtitle: "Credal Bank",
				title: "Crédito para todos",
			},
			{
				src: "/assets/image/trabalho/Rubinho Nunes.webp",
				subtitle: "Rubinho Nunes",
				title: "São Paulo mais justa e livre",
			},
			{
				src: "/assets/image/trabalho/Brasil 200.webp",
				subtitle: "Brasil 200",
				title: "O segundo grito de liberdade",
			},
			{
				src: "/assets/image/trabalho/patriota.webp",
				subtitle: "Patriota",
				title: "Conservadorismo e liberdade",
			},
			{
				src: "/assets/image/trabalho/ARCAH.webp",
				subtitle: "ARCAH",
				title: "I believe in good people",
			},
			{
				src: "/assets/image/trabalho/B-ON.webp",
				subtitle: "B-ON",
				title: "Nutrição prática e saudável",
			},
			{
				src: "/assets/image/trabalho/Pamplona Alimentos .webp",
				subtitle: "Pamplona Alimentos",
				title: "Sabor e tradição",
			},
			{
				src: "/assets/image/trabalho/Temer-e-macri.webp",
				subtitle: "Michel Temer e Maurício Macri",
				title: "Conferência pela Liberdade",
			},
			{
				src: "/assets/image/trabalho/Campanha Reforma Tributária.webp",
				subtitle: "Campanha pela Reforma Tributária",
				title: "Prosperidade e justiça",
			},
			{
				src: "/assets/image/trabalho/Behind.webp",
				subtitle: "Behind the Crown",
				title: "O que há por trás da coroa",
			},
			{
				src: "/assets/image/trabalho/SoulTV.webp",
				subtitle: "SoulTV",
				title: "Um streaming do seu jeito",
			},
			{
				src: "/assets/image/trabalho/Miss Universo Brasil Tour.webp",
				subtitle: "UMiss ",
				title: "Miss Universo Brasil Tour",
			},
			{
				src: "/assets/image/trabalho/Vodka Tiiv.webp",
				subtitle: "Vodka Tiiv",
				title: "Thanks it is vodka",
			},
			{
				src: "/assets/image/trabalho/CASP.webp",
				subtitle: "CASP",
				title: "Uma parceira do produtor",
			},
			{
				src: "/assets/image/trabalho/Aurapharma.webp",
				subtitle: "Aurapharma",
				title: "Mais vida, menos barreiras",
			},

			{
				src: "/assets/image/trabalho/umiss.webp",
				subtitle: "UMiss",
				title: "Tudo sobre o universo feminino",
			},
		]);
	}, []);

	function handleInput(e: ChangeEvent<HTMLInputElement>) {
		const value = e.target.value;
		setInputValue(value);

		if (value !== "") {
			filterResults(value);
		} else {
			setResults(null);
		}
	}
	function filterResults(value: string) {
		if (worksData) {
			const filteredResults = worksData.filter(
				(photo) =>
					photo.title.toLowerCase().includes(value.toLowerCase()) ||
					photo.subtitle.toLowerCase().includes(value.toLowerCase())
			);
			setResults(filteredResults);
		}
	}

	return (
		<>
			<div className="flex flex-col  mx-auto md:w-3/5 w-full 2xl:px-headerPaddingLG px-headerPadding mb-10 ">
				<h1 className="sm:gap-5 my-2 md:mb-10 md:mt-14 pb-10 font-goudyOldStyle text-white opacity-90 sm:text-3xl md:text-5xl text-2xl leading-6 text-center md:text-start">
					Conexão entre os que falam <br />e os que precisam ouvir.
				</h1>
				<div className="flex justify-start items-baseline border-gray-700 border-b-[1px] text-white">
					<i className="bi bi-search text-xl "></i>
					<input
						value={inputValue}
						onChange={handleInput}
						className="bg-transparent px-5 py-4 focus:outline-none text-xs w-full"
						placeholder="Procure por trabalhos ou clientes "
					/>
				</div>
			</div>
			<motion.main
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				initial={{ opacity: 0 }}
				transition={{ duration: 1.5 }}
				className="sm:gap-5 2xl:px-headerPaddingLG md:px-headerPadding lg:mt-10 px-4 mb-20 text-gray-400"
			>
				{inputValue !== "" ? (
					<div className="grid place-items-center md:grid-cols-3 grid-cols-1 mt-4 md:mt-16 justify-center  lg:justify-between gap-6 sm:gap-4 2xl:gap-6">
						{results?.map((photo, index) => {
							return (
								<Photo
									id={index + 1}
									delay={index > 0 ? delay : 0}
									key={index}
									src={photo.src}
									alt={photo.subtitle}
									subtitle={photo.subtitle}
									title={photo.title}
									dark={true}
									srcset={photo.srcset}
								/>
							);
						})}
					</div>
				) : (
					<div className="grid gap-6 sm:gap-4 2xl:gap-6 md:grid-cols-2 grid-cols-1 justify-center lg:justify-between ">
						{worksData?.map((photo, index) => {
							delay += 0.15;

							switch (index) {
								case 0:
								case 3:
								case 6:
								case 9:
									delay = 0;
							}

							return (
								<Photo
									delay={index > 0 ? delay : 0}
									key={index}
									src={photo.src}
									alt={photo.subtitle}
									subtitle={photo.subtitle}
									title={photo.title}
									id={index + 1}
									dark={true}
									srcset={photo.srcset}
								/>
							);
						})}{" "}
					</div>
				)}
			</motion.main>
		</>
	);
}
