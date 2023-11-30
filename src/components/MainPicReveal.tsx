import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
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
			<LazyMotion features={domAnimation}>
				<m.div
					initial={{ clipPath: "inset(5% 30% 5% 30%)" }}
					whileInView={{ clipPath: "inset(0 0 0 0)" }}
					viewport={{ once: true }}
					transition={{ duration: 1.5 }}
				>
					<div>
						<video width="100%" autoPlay muted playsInline loop controls={conceito}>
							<source src={src} />
						</video>
					</div>
				</m.div>
				{!conceito ? (
					<m.h1
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						initial={{ opacity: 0 }}
						transition={{ duration: 1.5, delay: 0.7 }}
						className="md:hidden  font-goudyOldStyle w-fit sm:text-4xl text-2xl leading-6 px-headerPadding sm:gap-5 md:px-[10%] lg:px-[15%] py-8 text-zinc-800"
					>
						Conectados <br /> com o imutável.
					</m.h1>
				) : (
					<>
						<m.h1
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							initial={{ opacity: 0 }}
							transition={{ duration: 1.5, delay: 0 }}
							className="mx-auto sm:px-headerPadding md:px-[25%] py-10  w-full px-4 pb-10 font-goudyOldStyle text-justify  sm:text-xl text-base text-gray-400"
						>
							<p>
								Através dos tempos, línguas, meios e métodos mudam, as pessoas não. Sempre fomos os mesmos.
								Sentimos medo, amamos, criamos laços, esperançamos, constituímos famílias e vivemos nossas
								vidas enquanto é possível. É como é, é como foi e é como será.
							</p>
							<p className="pt-10">
								Queremos o perene, não o perecível. Buscamos elo com o que não se dilui como pó – mas ao que
								resiste feito pedra. A modernidade, para nós, é um meio, não o final abstrato. A inovação está
								no método, não no objetivo.
							</p>
						</m.h1>
					</>
				)}
			</LazyMotion>
		</div>
	);
}
