import { LazyMotion, domAnimation, m } from "framer-motion";
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
	srcset?: undefined | string;
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
	srcset = undefined,
}: Props) {
	let photoPosition: boolean = false;
	switch (subtitle) {
		case "Aldo Rebelo":
		case "Vinicius Poit":
			photoPosition = true;
	}

	return (
		<Link
			className={`object-cover ${size} w-full block`}
			href={`/execucoes/${subtitle
				.normalize("NFD")
				.replace(/[\u0300-\u036f]/g, "")
				.replaceAll(" ", "-")
				.toLowerCase()}`}
			prefetch={false}
			scroll={true}
		>
			<LazyMotion features={domAnimation}>
				<m.div
					whileInView={{ y: 0, opacity: 1 }}
					initial={{ y: 50, opacity: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1.5, delay: delay }}
					className=""
				>
					<div className=" z-50 overflow-hidden">
						<picture>
							{srcset ? <source media="(max-width: 768px)" srcSet={srcset} /> : undefined}

							<Image
								className={`${
									photoPosition ? "photo-position" : undefined
								}   object-cover cursor-pointer hover:scale-110 transition-all duration-300 lg:max-h-none h-[230px] sm:h-[400px] w-full ${
									main ? "2xl:!h-[400px] lg:!h-[350px] md:!h-[300px] " : undefined
								}`}
								// Adicione esta linha para ajustar a largura
								width={500}
								height={500}
								src={src}
								alt={alt}
								loading="lazy"
							/>
						</picture>
					</div>
					<div className="mt-2 pl-2 flex flex-col">
						<span className="text-zinc-500 text-xs">{subtitle} </span>
						<h3
							className={`font-goudyOldStyle text-2xl md:pr-14 -mt-1  ${dark ? "text-white" : "text-black"}`}
						>
							{title}
						</h3>
					</div>
				</m.div>
			</LazyMotion>
		</Link>
	);
}
