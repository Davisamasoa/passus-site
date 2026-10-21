"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/lib/images";

type Props = {
	src: string;
	topic: string;
	text: string;
	/** Pré-carrega a imagem (use apenas na primeira, que aparece sem rolar a página). */
	preload?: boolean;
};

export default function PhotoReveal({ src, topic, text, preload = false }: Props) {
	return (
		<div className="image-container relative block w-full max-h-[600px] mx-auto overflow-hidden mb-10 md:mb-0">
			<m.div
				initial={{ clipPath: "inset(5% 30% 5% 30%)" }}
				whileInView={{ clipPath: "inset(0 0 0 0)" }}
				viewport={{ once: true }}
				transition={{ duration: 1.5 }}
			>
				<Image
					placeholder="blur"
					blurDataURL={BLUR_DATA_URL}
					width={2000}
					height={1000}
					sizes="100vw"
					src={src}
					preload={preload}
					alt={topic}
					className="w-full inteli image"
				/>
			</m.div>

			<m.div
				whileInView={{ marginTop: 0, opacity: 1 }}
				viewport={{ once: true }}
				initial={{ marginTop: 80, opacity: 0 }}
				transition={{ duration: 1.5, delay: 0.3 }}
				className="font-goudyOldStyle w-fit md:absolute top-2/4 md:!-translate-y-1/2 sm:text-3xl text-xl md:text-white text-gray-700 flex flex-col gap-3 sm:gap-5 md:pl-[10%] lg:pl-[15%] pt-10 lg:px-headerPaddingLG px-headerPadding"
			>
				<h3>{topic} </h3>
				<p className="sm:text-xl text-base lg:w-1/2 w-full">{text}</p>
			</m.div>
		</div>
	);
}
