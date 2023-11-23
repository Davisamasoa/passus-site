import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {
	src: string;
	alt: string;
	subtitle: string;
	title: string;
	delay: number;
	id: Number;
	dark?: boolean;
};

export default function Photo({ src, alt, subtitle, title, delay, id, dark = false }: Props) {
	return (
		<Link className="w-full" href={`execucoes/${id}`}>
			<motion.article
				whileInView={{ y: 0, opacity: 1 }}
				initial={{ y: 50, opacity: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 1.5, delay: delay }}
				className="mb-4"
			>
				<div className=" z-50 overflow-hidden">
					<div>
						<Image
							className={`object-cover cursor-pointer hover:scale-110 transition-all duration-300  h-auto  w-full`}
							width={500}
							height={200}
							src={src}
							alt={alt}
							loading="lazy"
						/>
					</div>
				</div>
				<div className="mt-2 flex flex-col">
					<span className="text-zinc-500 text-xs">{subtitle} </span>
					<h3 className={`font-goudyOldStyle text-2xl ${dark ? "text-white" : "text-black"}`}>{title}</h3>
				</div>
			</motion.article>
		</Link>
	);
}
