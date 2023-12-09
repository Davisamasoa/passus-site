import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {
	src: string;
	expertisePhoto?: boolean;
	topic: string;
	text: string;
};

export default function PhotoReveal({ src, topic, text }: Props) {
	return (
		<div
			className={`image-container relative block w-full max-h-[600px] mx-auto overflow-hidden mb-10 md:mb-0`}
		>
			<motion.div
				initial={{ clipPath: "inset(5% 30% 5% 30%)" }}
				whileInView={{ clipPath: "inset(0 0 0 0)" }}
				viewport={{ once: true }}
				transition={{ duration: 1.5 }}
			>
				<Image
					placeholder="blur"
					blurDataURL="/assets/image/blur.jpg"
					width={2000}
					height={1000}
					src={src}
					quality={100}
					priority={true}
					alt={topic}
					className="w-full inteli image"
				/>
			</motion.div>

			<motion.div
				whileInView={{ marginTop: 0, opacity: 1 }}
				viewport={{ once: true }}
				initial={{ marginTop: 80, opacity: 0 }}
				transition={{ duration: 1.5, delay: 0.3 }}
				className="font-goudyOldStyle w-fit  md:absolute  top-2/4 md:!-translate-y-1/2 sm:text-3xl text-xl  md:text-white text-gray-700 flex flex-col gap-3 sm:gap-5 md:pl-[10%] lg:pl-[15%] pt-10 lg:px-headerPaddingLG px-headerPadding"
			>
				<h3>{topic} </h3>
				<p className="sm:text-xl text-base lg:w-1/2 w-full">{text}</p>
			</motion.div>
		</div>
	);
}
