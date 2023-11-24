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
	size?: "w-[50%]" | "w-[25%]" | "w-full" | string;
	main?: boolean;
};

export default function Photo({
	src,
	alt,
	subtitle,
	title,
	delay,
	id,
	dark = false,
	size = "w-full",
	main = false,
}: Props) {
	return (
		<Link className={`object-cover ${size} w-full block`} href={`execucoes/${id}`}>
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
							className={`object-cover cursor-pointer hover:scale-110 transition-all duration-300  w-full ${
								main ? "lg:!min-h-[450px] md:!min-h-[350px]" : undefined
							}`}
							// Adicione esta linha para ajustar a largura
							width={500}
							height={500}
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
