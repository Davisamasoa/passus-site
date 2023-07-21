import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
	src: string;
	expertisePhoto?: boolean;
};

export default function PhotoReveal({ src, expertisePhoto = true }: Props) {
	return (
		<div
			className={`image-container relative block md:w-[90%] w-full ${
				expertisePhoto ? "max-h-[600px]" : "max-h-[700px]"
			}  mx-auto overflow-hidden`}
		>
			<motion.div
				initial={{ clipPath: "inset(2% 30% 2% 30%)" }}
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

			{expertisePhoto ? (
				<motion.div
					whileInView={{ marginTop: 0, opacity: 1 }}
					viewport={{ once: true }}
					initial={{ marginTop: 80, opacity: 0 }}
					transition={{ duration: 0.7, delay: 0.3 }}
					className="font-instrument_serif w-fit  md:absolute left-6 md:left-[15%] top-2/4 md:!-translate-y-1/2 sm:text-3xl text-xl  md:text-white text-gray-700 p-5 flex flex-col gap-5"
				>
					<h3>Design</h3>
					<p className="text-base sm:w-3/4 w-full">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab debitis commodi, id, magnam in quos,
						minima quo laboriosam voluptatem fugit sequi aperiam. At neque numquam cum labore ratione,
						excepturi eum!
					</p>

					<Link className="text-lg border-b-[1px] pb-2 w-fit" href="#">
						Ver projeto
					</Link>
				</motion.div>
			) : (
				<motion.h1
					animate={{ marginTop: 0, opacity: 1 }}
					initial={{ marginTop: 80, opacity: 0 }}
					transition={{ duration: 1, delay: 0.7 }}
					className="font-instrument_serif w-fit whitespace-nowrap absolute left-6 md:left-[15%] top-2/4 !-translate-y-1/2 sm:text-4xl text-2xl z-10 text-white"
				>
					We&apos;ve come a long, long way <br /> together
				</motion.h1>
			)}
		</div>
	);
}
