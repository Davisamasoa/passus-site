import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
	src: string;
	expertisePhoto?: boolean;
	topic: string;
	text: string;
};

export default function PhotoReveal({ src, topic, text }: Props) {
	return (
		<div className={`image-container relative block w-full max-h-[600px] mx-auto overflow-hidden sm:w-[90%]`}>
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

			<motion.div
				whileInView={{ marginTop: 0, opacity: 1 }}
				viewport={{ once: true }}
				initial={{ marginTop: 80, opacity: 0 }}
				transition={{ duration: 0.7, delay: 0.3 }}
				className="font-glc w-fit  md:absolute  top-2/4 md:!-translate-y-1/2 sm:text-5xl text-3xl  md:text-white text-gray-700 flex flex-col gap-5 sm:px-[13.5%] py-5 px-9 "
			>
				<h3>{topic} </h3>
				<div className="text-xl pb-2 flex justify-start gap-5 flex-col">
					<p className="font-goudyOldStyle sm:w-3/4 w-full">{text}</p>
					<Link className="border-b-[2px] tracking-wide w-fit" href="#">
						Ver projeto
					</Link>
				</div>
			</motion.div>
		</div>
	);
}
