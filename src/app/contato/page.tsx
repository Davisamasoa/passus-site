"use client";

import { motion } from "framer-motion";

type Props = {};

export default function page({}: Props) {
	return (
		<div className="text-gray-500 sm:gap-5 md:px-[10%] lg:px-[15%] px-9">
			<motion.h1
				animate={{ marginTop: 0, opacity: 1 }}
				initial={{ marginTop: -30, opacity: 0 }}
				transition={{ duration: 1, delay: 0 }}
				className="w-full pt-10 font-basic opacity-90 text-xs leading-6"
			>
				Para novas execuções
			</motion.h1>
			<div className="sm:-mt-1 pb-10 font-goudyOldStyle text-gray-800 sm:text-3xl md:text-4xl text-2xl leading-6">
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
			<p className="w-full font-basic opacity-90 sm:text-base text-sm leading-6">
				<motion.a
					animate={{ marginTop: 0, opacity: 1 }}
					initial={{ marginTop: -30, opacity: 0 }}
					transition={{ duration: 1, delay: 1 }}
					target="_blank"
					href="https://wa.me/5515997856284"
					className="sm:px-[25px] px-[14px] py-3 border-[1px] border-gray-200 cursor-pointer"
				>
					Se conecte por Whatsapp
				</motion.a>
			</p>
		</div>
	);
}
