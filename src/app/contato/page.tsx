"use client";

import { motion } from "framer-motion";

type Props = {};

export default function page({}: Props) {
	return (
		<div>
			<motion.h1
				animate={{ marginTop: 0, opacity: 1 }}
				initial={{ marginTop: -30, opacity: 0 }}
				transition={{ duration: 1, delay: 0 }}
				className="md:pl-[15%] w-full px-9 pt-10 font-basic text-gray-800 opacity-90 text-xs leading-6"
			>
				Para novas execuções
			</motion.h1>
			<div className="md:pl-[15%] px-9 sm:-mt-1 pb-10 font-goudyOldStyle text-gray-800 sm:text-3xl md:text-4xl text-2xl leading-6">
				<motion.a
					animate={{ marginTop: 0, opacity: 1 }}
					initial={{ marginTop: -30, opacity: 0 }}
					transition={{ duration: 1, delay: 0.5 }}
					href="mailto:contato@passus.in"
					className="border-b-[1px] border-gray-200 pb-1"
				>
					contato@passus.in
				</motion.a>
			</div>
			<p className="md:pl-[15%] w-full px-9 font-basic text-gray-800 opacity-90 sm:text-base text-sm leading-6">
				<motion.a
					animate={{ marginTop: 0, opacity: 1 }}
					initial={{ marginTop: -30, opacity: 0 }}
					transition={{ duration: 1, delay: 1 }}
					className="sm:px-[25px] px-[14px] py-3 border-2 border-gray-800 cursor-pointer"
				>
					Se conecte por Whatsapp
				</motion.a>
			</p>
		</div>
	);
}
