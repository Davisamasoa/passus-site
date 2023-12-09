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
		src: "/assets/image/trabalho/miss/2021.jpg",
		subtitle: "Miss Universo Brasil 2021",
		title: "Teresa Santos",
	},
	{
		src: "/assets/image/trabalho/miss/2022.jpg",
		subtitle: "Miss Universo Brasil 2022",
		title: "Mia Mamede",
	},
	{
		src: "/assets/image/trabalho/miss/2023.jpg",
		subtitle: "Miss Universo Brasil 2023",
		title: "Maria Brechane",
	},
];
export default function Miss() {
	const [results, setResults] = useState<photoData[] | null>(null);

	function handleInput(e: ChangeEvent<HTMLInputElement>) {
		const value = e.target.value;

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
				<h1 className="sm:gap-5 my-2 md:mb-10 md:mt-14 pb-10 font-goudyOldStyle text-white opacity-90 sm:text-3xl md:text-5xl text-2xl leading-6 text-center">
					Miss Universo Brasil
				</h1>
			</div>
			<motion.main
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				initial={{ opacity: 0 }}
				transition={{ duration: 1.5 }}
				className="sm:gap-5 2xl:px-headerPaddingLG md:px-headerPadding lg:mt-10 px-4 mb-20 text-gray-400"
			>
				{results !== null ? (
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
