"use client";

import MainPicReveal from "@/components/MainPicReveal";
import { motion } from "framer-motion";
type Props = {};

export default function page({}: Props) {
	return (
		<motion.div
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			initial={{ opacity: 0 }}
			transition={{ duration: 1.5 }}
		>
			<h1 className="sm:gap-5 md:px-[10%]  w-full lg:px-headerPaddingLG px-headerPadding pb-10 font-goudyOldStyle text-white sm:text-3xl md:text-4xl text-2xl leading-6">
				Ferramentas mudam,
				<br /> pessoas não.
			</h1>
			<MainPicReveal conceito={true} src={process.env.NEXT_PUBLIC_VIDEOURL} />
		</motion.div>
	);
}
