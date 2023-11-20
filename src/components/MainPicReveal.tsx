import React from "react";
import { motion } from "framer-motion";
type Props = {
	src: string;
};

export default function MainPicReveal({ src }: Props) {
	return (
		<div
			className={`image-container relative block w-full max-h-[700px]
			 mx-auto overflow-hidden`}
		>
			<motion.div
				initial={{ clipPath: "inset(5% 30% 5% 30%)" }}
				whileInView={{ clipPath: "inset(0 0 0 0)" }}
				viewport={{ once: true }}
				transition={{ duration: 1 }}
			>
				<motion.img
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.9 }}
					transition={{ duration: 0.4 }}
					src={src}
					alt="Imagem"
				/>
			</motion.div>
			<motion.h1
				animate={{ marginTop: 0, opacity: 1 }}
				initial={{ marginTop: 80, opacity: 0 }}
				transition={{ duration: 1, delay: 0.7 }}
				className="font-instrument_serif w-fit  md:absolute left-6 md:left-[15%] top-2/4 md:!-translate-y-1/2 sm:text-4xl text-xl md:text-white text-gray-700 px-7 py-5"
			>
				Conectados com
				<br /> o imutável.
			</motion.h1>
		</div>
	);
}
