"use client";

import { m } from "framer-motion";
import { getImageProps } from "next/image";
import Link from "next/link";
import type { PhotoCard } from "@/data/portfolio";
import { BLUR_DATA_URL } from "@/lib/images";
import { slugify } from "@/lib/slugify";

type Props = {
	card: PhotoCard;
	delay?: number;
	dark?: boolean;
	size?: string;
	main?: boolean;
};

// Fotos com o enquadramento ajustado em telas menores (ver .photo-position e .aldo em globals.css).
const SHIFTED_PHOTOS = new Set(["Aldo Rebelo", "Vinicius Poit"]);

export default function Photo({ card, delay = 0, dark = false, size = "w-full", main = false }: Props) {
	const { src, srcset, subtitle, title } = card;

	const imageOptions = {
		alt: subtitle,
		width: 1500,
		height: 500,
		sizes: "(max-width: 768px) 100vw, 50vw",
		placeholder: "blur",
		blurDataURL: BLUR_DATA_URL,
	} as const;

	// getImageProps permite usar o <picture> com uma imagem diferente no mobile,
	// mantendo as duas versões otimizadas pelo next/image.
	const { props: imageProps } = getImageProps({ ...imageOptions, src });
	const mobileSrcSet = srcset ? getImageProps({ ...imageOptions, src: srcset }).props.srcSet : undefined;

	const imageClassName = [
		SHIFTED_PHOTOS.has(subtitle) && "photo-position",
		subtitle === "Aldo Rebelo" && "aldo",
		"object-cover cursor-pointer hover:scale-110 transition-all duration-300 lg:max-h-none h-[230px] sm:h-[400px] w-full",
		main && "2xl:!h-[400px] lg:!h-[350px] md:!h-[300px]",
	]
		.filter(Boolean)
		.join(" ");

	return (
		<Link className={`object-cover ${size} w-full block`} href={`/execucoes/${card.slug ?? slugify(subtitle)}`}>
			<m.div
				whileInView={{ y: 0, opacity: 1 }}
				initial={{ y: 50, opacity: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 1.5, delay }}
			>
				<div className="z-50 overflow-hidden">
					<picture>
						{mobileSrcSet && <source media="(max-width: 768px)" srcSet={mobileSrcSet} sizes="100vw" />}
						{/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text -- props (incl. alt) vêm do getImageProps */}
						<img {...imageProps} className={imageClassName} />
					</picture>
				</div>
				<div className="mt-2 pl-2 flex flex-col">
					<span className="text-zinc-500 text-xs">{subtitle} </span>
					<h3 className={`font-goudyOldStyle text-2xl md:pr-14 -mt-1 ${dark ? "text-white" : "text-black"}`}>
						{title}
					</h3>
				</div>
			</m.div>
		</Link>
	);
}
