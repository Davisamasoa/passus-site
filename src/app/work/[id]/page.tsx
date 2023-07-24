"use client";

import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function page({}: Props) {
	return (
		<main className=" lg:px-80 md:px-20 px-7 grid sm:grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-20 text-gray-700 text-base">
			<motion.div
				whileInView={{ y: 0, opacity: 1 }}
				initial={{ y: -50, opacity: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 1.5 }}
				className="md:w-[600px] md:h-[400px] w-full h-64 bg-black"
			></motion.div>
			<motion.div
				whileInView={{ y: 0, opacity: 1 }}
				initial={{ y: -50, opacity: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 1.5 }}
				className="flex justify-center items-center md:px-20"
			>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi consequatur, ipsum nostrum culpa
				deserunt laboriosam autem alias, ratione expedita inventore id dolor veniam laborum ducimus vel
				voluptatibus porro hic. Impedit. Nihil modi porro, ut omnis qui sed obcaecati soluta eligendi deserunt
				recusandae voluptatem odio ipsam culpa et tenetur vero voluptates rerum, eius accusantium expedita
				sequi quisquam eveniet iste enim. Quos.
			</motion.div>

			<motion.div
				whileInView={{ y: 0, opacity: 1 }}
				initial={{ y: -50, opacity: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 1.5 }}
				className="flex justify-center items-center md:px-20"
			>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi consequatur, ipsum nostrum culpa
				deserunt laboriosam autem alias, ratione expedita inventore id dolor veniam laborum ducimus vel
				voluptatibus porro hic. Impedit. Nihil modi porro, ut omnis qui sed obcaecati soluta eligendi deserunt
				recusandae voluptatem odio ipsam culpa et tenetur vero voluptates rerum, eius accusantium expedita
				sequi quisquam eveniet iste enim. Quos.
			</motion.div>
			<motion.div
				whileInView={{ y: 0, opacity: 1 }}
				initial={{ y: -50, opacity: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 1.5 }}
				className="md:w-[600px] md:h-[400px] w-full h-64 bg-black"
			></motion.div>
		</main>
	);
}
