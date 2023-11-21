"use client";

import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function page({}: Props) {
	return (
		<main className="pb-10 lg:px-52 md:px-20 px-3 text-gray-700 text-base">
			<div className="flex flex-wrap md:flex-nowrap justify-between gap-8">
				<motion.div
					whileInView={{ y: 0, opacity: 1 }}
					initial={{ y: -50, opacity: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1.5 }}
					className="md:w-1/2 w-full bg-black h-96"
				></motion.div>
				<motion.div
					whileInView={{ y: 0, opacity: 1 }}
					initial={{ y: -50, opacity: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1.5 }}
					className="md:w-1/2 w-full my-auto"
				>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi consequatur, ipsum nostrum culpa
					deserunt laboriosam autem alias, ratione expedita inventore id dolor veniam laborum ducimus vel
					voluptatibus porro hic. Impedit. Nihil modi porro, ut omnis qui sed obcaecati soluta eligendi
					deserunt recusandae voluptatem odio ipsam culpa et tenetur vero voluptates rerum, eius accusantium
					expedita sequi quisquam eveniet iste enim. Quos.
				</motion.div>
			</div>
			<div className="flex flex-wrap md:flex-nowrap justify-between md:flex-row flex-col-reverse mt-10 gap-8">
				<motion.div
					whileInView={{ y: 0, opacity: 1 }}
					initial={{ y: -50, opacity: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1.5 }}
					className="md:w-1/2 w-full my-auto"
				>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi consequatur, ipsum nostrum culpa
					deserunt laboriosam autem alias, ratione expedita inventore id dolor veniam laborum ducimus vel
					voluptatibus porro hic. Impedit. Nihil modi porro, ut omnis qui sed obcaecati soluta eligendi
					deserunt recusandae voluptatem odio ipsam culpa et tenetur vero voluptates rerum, eius accusantium
					expedita sequi quisquam eveniet iste enim. Quos.
				</motion.div>
				<motion.div
					whileInView={{ y: 0, opacity: 1 }}
					initial={{ y: -50, opacity: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1.5 }}
					className="md:w-1/2 w-full bg-black h-96"
				></motion.div>
			</div>
		</main>
	);
}
