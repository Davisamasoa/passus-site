import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
	src: string;
	alt: string;
	subtitle: string;
	title: string;
	delay: number;
	id: Number;
};

export default function Photo({ src, alt, subtitle, title, delay, id }: Props) {
	return (
		<Link href={`work/${id}`}>
			<motion.article
				whileInView={{ y: 0, opacity: 1 }}
				initial={{ y: 50, opacity: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 1.5, delay: delay }}
				className="mb-4"
			>
				<div className=" z-50 overflow-hidden">
					<motion.img
						transition={{ duration: 0.5 }}
						whileHover={{ scale: 1.1 }}
						className={`object-cover cursor-pointer hover:scale-125 transition-all duration-300  h-auto md:h-[400px]`}
						width={"100%"}
						src={src}
						alt={alt}
						loading="lazy"
					/>
				</div>
				<div className="mt-2 flex flex-col">
					<span className="text-zinc-500 text-sm">{subtitle} </span>
					<h3 className="font-instrument_serif text-xl ">{title}</h3>
				</div>
			</motion.article>
		</Link>
	);
}
