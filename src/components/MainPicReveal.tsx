import React from "react";
import { motion } from "framer-motion";
type Props = {
	src: string | undefined;
	conceito: boolean;
};

export default function MainPicReveal({ src, conceito }: Props) {
	return (
		<div
			className={`image-container relative block w-full 
			 mx-auto overflow-hidden`}
		>
			<motion.div
				initial={{ clipPath: "inset(5% 30% 5% 30%)" }}
				whileInView={{ clipPath: "inset(0 0 0 0)" }}
				viewport={{ once: true }}
				transition={{ duration: 1 }}
			>
				<div>
					<motion.video
						width="100%"
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.9 }}
						transition={{ duration: 0.4 }}
						autoPlay
						muted
						playsInline
						loop
						controls={conceito}
					>
						<source src={src} />
					</motion.video>
				</div>
			</motion.div>
			{!conceito ? (
				<motion.h1
					whileInView={{ marginTop: 0, opacity: 1 }}
					viewport={{ once: true }}
					initial={{ marginTop: 80, opacity: 0 }}
					transition={{ duration: 1, delay: 0.7 }}
					className="md:hidden  font-goudyOldStyle w-fit sm:text-4xl text-2xl leading-6 px-9 sm:px-[15%] py-8 text-zinc-800"
				>
					Conectados <br /> com o imutável.
				</motion.h1>
			) : (
				<>
					<motion.h1
						whileInView={{ marginTop: 0, opacity: 1 }}
						viewport={{ once: true }}
						initial={{ marginTop: -80, opacity: 0 }}
						transition={{ duration: 1, delay: 0 }}
						className="mx-auto sm:px-[15%] md:px-[30%] py-10  w-full px-4 pb-10 font-goudyOldStyle  sm:text-xl text-base text-gray-400"
					>
						<p>
							Através dos tempos, línguas, meios e métodos mudam, as pessoas não. Sempre fomos os mesmos.
							Sentimos medo, amamos, criamos laços, esperançamos, constituímos famílias e vivemos nossas vidas
							enquanto é possível. É como é, é como foi e é como será.
						</p>
						<p className="pt-10">
							Queremos o perene, não o perecível. Buscamos elo com o que não se dilui como pó – mas ao que
							resiste feito pedra. A modernidade, para nós, é um meio, não o final abstrato. A inovação está
							no método, não no objetivo.
						</p>
					</motion.h1>
				</>
			)}
		</div>
	);
}
