"use client";

import Photo from "@/components/execucoes/Photo";
import { motion } from "framer-motion";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

type photoData = {
	src: string;
	subtitle: string;
	title: string;
	srcset?: undefined | string;
};

let delay = 0;

const photoArray: photoData[] = [
	{
		src: "/assets/image/trabalho/Vinicius Poit.jpg",
		subtitle: "Vinicius Poit",
		title: "Campanha ao Governo de São Paulo",
	},
	{
		src: "/assets/image/trabalho/Miss Universo Brasil Tour.JPG",
		subtitle: "Miss Universo Brasil",
		title: "A beleza nacional",
	},
	{
		src: "/assets/image/trabalho/Programa 4x4.JPG",
		subtitle: "Programa 4x4",
		title: "Jornalismo independente",
	},
	{
		src: "/assets/image/trabalho/Tarcísio de Freitas.JPG",
		subtitle: "Tarcísio de Freitas",
		title: "Agendas por São Paulo",
	},
	{
		src: "/assets/image/trabalho/Jovem Pan e Brasil 200.JPEG",
		subtitle: "Jovem Pan e Brasil 200",
		title: "Estender mãos, construir um país",
	},
	{
		src: "/assets/image/trabalho/Aldo Rebelo.jpg",
		subtitle: "Aldo Rebelo",
		title: "O projeto nacionalista",
	},
	{
		src: "/assets/image/trabalho/ashby.jpg",
		subtitle: "Ashby",
		title: "3 décadas de sabor",
	},
	{
		src: "/assets/image/trabalho/Credal.jpg",
		subtitle: "Credal Bank",
		title: "Crédito para todos",
	},
	{
		src: "/assets/image/trabalho/Rubinho Nunes.jpg",
		subtitle: "Rubinho Nunes",
		title: "São mais justa e livre",
	},
	{
		src: "/assets/image/trabalho/Brasil 200.jpg",
		subtitle: "Brasil 200",
		title: "O segundo grito de liberdade",
	},
	{
		src: "/assets/image/trabalho/patriota.jpg",
		subtitle: "Patriota",
		title: "Conservadorismo e liberdade",
	},
	{
		src: "/assets/image/trabalho/ARCAH .JPEG",
		subtitle: "ARCAH",
		title: "I believe in good people",
	},
	{
		src: "/assets/image/trabalho/B-ON saudável.JPG",
		subtitle: "B-ON",
		title: "Nutrição prática e saudável",
	},
	{
		src: "/assets/image/trabalho/Pamplona Alimentos .JPG",
		subtitle: "Pamplona Alimentos",
		title: "Sabor e tradição",
	},
	{
		src: "/assets/image/trabalho/Temer-e-macri.jpg",
		subtitle: "Michel Temer e Maurício Macri",
		title: "Conferência pela Liberdade",
	},
	{
		src: "/assets/image/trabalho/Campanha Reforma Tributária.jpg",
		subtitle: "Campanha pela Reforma Tributária",
		title: "Prosperidade e justiça",
	},
	{
		src: "/assets/image/trabalho/Behind The Crown - o que há por trás da coroa.jpg",
		subtitle: "Behind the Crown",
		title: "O que há por trás da coroa",
	},
	{
		src: "/assets/image/trabalho/Miss Universo Brasil Tour.JPG",
		subtitle: "SoulTV",
		title: "Um streaming para todos",
	},
	{
		src: "/assets/image/trabalho/Miss Universo Brasil Tour.JPG",
		subtitle: "UMiss",
		title: "Miss Universo Brasil Tour",
	},
	{
		src: "/assets/image/trabalho/Vodka Tiiv.jpg",
		subtitle: "Vodka Tiiv",
		title: "Thanks it is vodka",
	},
	{
		src: "/assets/image/trabalho/CASP.jpg",
		subtitle: "CASP",
		title: "Uma parceira do produtor",
	},
	{
		src: "/assets/image/trabalho/Aurapharma.JPG",
		subtitle: " Aurapharma",
		title: "Mais vida, menos barreiras",
	},
	{
		src: "/assets/image/trabalho/Miss Universo Brasil Tour.JPG",
		subtitle: "CBDMED",
		title: "CBD é saúde",
	},
	{
		src: "/assets/image/trabalho/Miss Universo Brasil Tour.JPG",
		subtitle: "Canal UMiss",
		title: "Tudo sobre o universo feminino",
	},
];
export default function Home() {
	const [results, setResults] = useState<photoData[] | null>(null);
	const [inputValue, setInputValue] = useState<string>("");

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
		const filteredResults = photoArray.filter(
			(photo) =>
				photo.title.toLowerCase().includes(value.toLowerCase()) ||
				photo.subtitle.toLowerCase().includes(value.toLowerCase())
		);
		setResults(filteredResults);
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
						{photoArray.map((photo, index) => {
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
