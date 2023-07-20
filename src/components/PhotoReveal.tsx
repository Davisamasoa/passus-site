import { motion } from "framer-motion";

type Props = {
	src: string;
};

export default function PhotoReveal({ src }: Props) {
	return (
		<div className="image-container relative block md:w-[90%] w-full max-h-[600px] mx-auto my-32 overflow-hidden">
			<motion.div
				initial={{ clipPath: "inset(0 30% 0 30%)" }}
				whileInView={{ clipPath: "inset(0 0 0 0)" }}
				viewport={{ once: true }}
				transition={{ duration: 1 }}
			>
				<motion.img
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.4 }}
					src={src}
					alt="Imagem"
				/>
			</motion.div>
			<motion.h1
				animate={{ marginTop: 0, opacity: 1 }}
				initial={{ marginTop: 80, opacity: 0 }}
				transition={{ duration: 1, delay: 0.7 }}
				className="font-instrument_serif w-fit whitespace-nowrap absolute left-6 md:left-[15%] top-2/4 !-translate-y-1/2 sm:text-4xl text-2xl z-10 text-white"
			>
				We&apos;ve come a long, long way <br /> together
			</motion.h1>
		</div>
	);
}
