"use client";

import { useEffect } from "react";
import { m } from "framer-motion";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import type { Work as WorkData } from "@/data/works";
import { BLUR_DATA_URL } from "@/lib/images";

type Props = {
	work: WorkData;
	dark: boolean;
};

const fadeIn = {
	initial: { opacity: 0 },
	whileInView: { opacity: 1 },
	viewport: { once: true },
	transition: { duration: 1.5 },
} as const;

const textClassName = "mx-auto sm:px-headerPadding md:px-[25%] w-full px-4 pb-10 font-goudyOldStyle text-justify";
const mediaHeight = "h-[220px] sm:h-[300px] md:h-[450px] lg:h-[600px] object-cover";

/** Bloco de parágrafos; só é exibido quando o primeiro texto existe. */
function TextBlock({ texts, dark }: { texts: (string | undefined)[]; dark: boolean }) {
	const [lead, ...rest] = texts;
	if (!lead) return null;

	return (
		<m.div {...fadeIn} className={`${textClassName} sm:text-xl text-base ${dark ? "text-gray-400" : "text-gray-800"}`}>
			<p>{lead}</p>
			{rest.map((text, index) => text && <p key={index} className="pt-10">{text}</p>)}
		</m.div>
	);
}

function WorkImage({ src, alt }: { src?: string; alt: string }) {
	if (!src) return null;

	return (
		<m.div {...fadeIn} className="pb-10 px-4 md:px-0">
			<Image
				placeholder="blur"
				blurDataURL={BLUR_DATA_URL}
				width={2000}
				height={2000}
				sizes="(max-width: 768px) 100vw, 80vw"
				className={`image ${mediaHeight}`}
				alt={alt}
				src={src}
			/>
		</m.div>
	);
}

function WorkVideo({ src }: { src?: string }) {
	if (!src) return null;

	return (
		<m.div {...fadeIn} className="pb-10">
			<video width="100%" controls autoPlay playsInline muted loop>
				<source src={src} />
			</video>
		</m.div>
	);
}

export default function Work({ work, dark }: Props) {
	const { author, topic2, img1, img2, img3, img4, video, video2, carousel } = work;
	const { text1, text2, text3, text4, text5, text6 } = work;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="image-container relative block mx-auto overflow-hidden md:px-[10%] w-full lg:px-headerPaddingLG">
			<WorkVideo src={video} />
			<WorkImage src={img1} alt={author} />
			<TextBlock texts={[text1, text2]} dark={dark} />

			{topic2 && (
				<m.h2 {...fadeIn} className={`${textClassName} sm:text-2xl text-lg ${dark ? "text-white" : "text-black"}`}>
					{topic2}
				</m.h2>
			)}

			<WorkImage src={img2} alt={author} />
			<WorkVideo src={video2} />
			<TextBlock texts={[text3, text4, text5]} dark={dark} />
			<WorkImage src={img3} alt={author} />

			{carousel && (
				<Carousel autoPlay infiniteLoop className="pb-10 px-4 md:px-0" showIndicators={false} showThumbs={false}>
					{carousel.map((src) => (
						<div key={src}>
							<Image
								width={2000}
								height={2000}
								sizes="(max-width: 768px) 100vw, 80vw"
								className={mediaHeight}
								alt={author}
								src={src}
							/>
						</div>
					))}
				</Carousel>
			)}

			<TextBlock texts={[text6]} dark={dark} />
			<WorkImage src={img4} alt={author} />
		</div>
	);
}
