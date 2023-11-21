import React from "react";
import { motion } from "framer-motion";
type Props = {
	src: string;
};

export default function MainPicReveal({ src }: Props) {
	return (
		<div
			className={`image-container relative block w-full 
			 mx-auto overflow-hidden`}
		>
			<motion.div
				initial={{ clipPath: "inset(5% 30% 5% 30%)" }}
				whileInView={{ clipPath: "inset(0 0 0 0)" }}
				viewport={{ once: true }}
				transition={{ duration: 1 }}
			>
				<div>
					<motion.video
						width="100%"
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.9 }}
						transition={{ duration: 0.4 }}
						autoPlay
						muted
						playsInline
						loop
					>
						<source src={`${process.env.NEXT_PUBLIC_VIDEOURL}`} />
					</motion.video>
				</div>
			</motion.div>
			<motion.h1
				animate={{ marginTop: 0, opacity: 1 }}
				initial={{ marginTop: 80, opacity: 0 }}
				transition={{ duration: 1, delay: 0.7 }}
				className="md:hidden font-goudyOldStyle w-fit sm:text-3xl text-2xl leading-7 md:text-white text-gray-700 lg:px-52 md:px-20 px-9 py-8"
			>
				Conectados <br /> com o imutável.
			</motion.h1>
		</div>
	);
}
