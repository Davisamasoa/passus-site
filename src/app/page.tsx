"use client";

import Photo from "@/components/execucoes/Photo";
import MainPicReveal from "@/components/MainPicReveal";

import { motion } from "framer-motion";
import Link from "next/link";

type photoData = {
	src: string;

	subtitle: string;
	title: string;
	srcset?: string | undefined;
};

let delay = 0;

export default function Home() {
	const mainPhotoArray: photoData[] = [
		{
			src: "/assets/image/h-miss.webp",
			subtitle: "Miss Universo Brasil 2021",
			title: "Jornada para a coroa",
		},
		{
			src: "/assets/image/h-tarcisio.webp",
			subtitle: "Tarcísio de Freitas",
			title: "Jornada por São Paulo",
			srcset: "/assets/image/mobile-tarcisio.webp",
		},
		{
			src: "/assets/image/h-aldorebelo.webp",
			subtitle: "Aldo Rebelo",
			title: "O projeto nacionalista",
			srcset: "/assets/image/mobile-aldorebelo.webp",
		},
	];

	const mainPhotoArray2: photoData[] = [
		{
			src: "/assets/image/h-poit.webp",
			subtitle: "Vinicius Poit",
			title: "Campanha ao Governo de São Paulo",
			srcset: "/assets/image/mobile-poit.webp",
		},
		{
			src: "/assets/image/h-credal.webp",
			subtitle: "Credal Bank",
			title: "Credito para todos",
			srcset: "/assets/image/mobile-credal.webp",
		},
		{
			src: "/assets/image/h-temer-e-macri.webp",
			subtitle: "Michel Temer e Maurício Macri",
			title: "Conferência da liberdade",
		},
	];

	return (
		<motion.div
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			initial={{ opacity: 0 }}
			transition={{ duration: 1.5 }}
		>
			<div>
				<MainPicReveal conceito={false} src={process.env.NEXT_PUBLIC_VIDEOURL} />
			</div>
			<main className="flex flex-col gap-6 sm:gap-4 2xl:gap-6 2xl:px-headerPaddingLG md:px-headerPadding px-4 -mb-5 md:-mb-0 md:mt-10">
				<div className="flex flex-col md:flex-row  flex-nowrap gap-6 sm:gap-4 2xl:gap-6">
					{mainPhotoArray.map((photo, index) => {
						delay += 0.15;
						let size = "w-full";
						switch (index) {
							case 0:
								delay = 0;
						}

						switch (index) {
							case 0:
								size = "md:w-[50%]";
								break;
							case 1:
							case 2:
								size = "md:w-[24.2%]";
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
								size={size}
								main={true}
								srcset={photo?.srcset}
							/>
						);
					})}
				</div>
				<div className="flex flex-col md:flex-row flex-nowrap gap-6 sm:gap-4 2xl:gap-6">
					{mainPhotoArray2.map((photo, index) => {
						delay += 0.15;
						let size2 = "w-full";
						switch (index) {
							case 0:
								delay = 0;
						}

						switch (index) {
							case 2:
								size2 = "md:w-[50%]";
								break;
							case 0:
							case 1:
								size2 = "md:w-[24%]";
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
								size={size2}
								main={true}
								srcset={photo.srcset}
							/>
						);
					})}
				</div>
				<p className="w-full py-6 flex justify-center font-basic opacity-90 text-xs leading-6 text-gray-500">
					<Link href="/execucoes" className="px-4 py-3 border-[1px] border-gray-200 cursor-pointer">
						Ver mais trabalhos
					</Link>
				</p>
			</main>
		</motion.div>
	);
}
