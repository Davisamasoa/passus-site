"use client";
import PhotoReveal from "@/components/PhotoReveal";
import { motion } from "framer-motion";
type Props = {};
type expertiseType = {
	src: string;
	topic: string;
	text: string;
};
const expertises: expertiseType[] = [
	{
		src: "/assets/image/tarcisio.webp",
		topic: "Storytelling",
		text: "Vender o história é criar laços. Contar momentos e memórias é uma das armas mais poderosas do homem. Foi a capacidade de contar histórias que moldou o mundo que temos. As sociedades, a ancestralidade, as nações… e é assim que conseguimos fortalecer a ligação entre pessoas.",
	},
	{
		src: "/assets/image/b-on.webp",
		topic: "Design",
		text: "A beleza importa e sempre importou. A busca do belo não é um capricho, mas é o desejo de despertar a contemplação e de passar uma mensagem através das percepções visuais que tocam o imaginário.",
	},
	{
		src: "/assets/image/programa.webp",
		topic: "Alcance",
		text: "Falar com o mundo. Uma característica do tempo é a comunicação ilimitada – não só pela distancia, mas pela capacidade de alcançar massas. A comunicação é social, embora tenha, em fins últimos, que se conectar ao pessoal. Essa dicotomia é fundamental para ser eficiente nos tempos das quantidades.",
	},
	{
		src: "/assets/image/rubinho.webp",
		topic: "Estratégia",
		text: "O pensamento precede a fala. Raciocinamos a mensagem, expressamos o que pensamos e somos interpretados pelo outro. Nessa ordem. O intento. O método. O outro.",
	},
	{
		src: "/assets/image/miss.webp",
		topic: "Eventos",
		text: "O agora são as lembranças que teremos no futuro. Construir memórias é ter cuidado com o futuro que recordar. Registre momentos, marque pessoas.",
	},
	{
		src: "/assets/image/ashby.webp",
		topic: "Produto",
		text: "Vende quem fala. Comunicar um produto é conversar com as necessidades e esperanças de quem houve. Ser assertivo na abordagem é o que define se a oferta é um mecanismo de facilidade ou um incômodo para quem ouve.",
	},
];

export default function Inteligencias({}: Props) {
	return (
		<motion.div
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			initial={{ opacity: 0 }}
			transition={{ duration: 1.5 }}
			className="-mb-8"
		>
			<h1 className="md:text-start pt-[6px] text-center sm:gap-5 md:pl-[10%] lg:pl-[15%]  w-full px-7 pb-10 font-goudyOldStyle sm:text-3xl md:text-4xl text-xl text-gray-800 opacity-90">
				Queremos o perene, não o perecível. <br /> Buscamos elo com o que não se dilui
				<br /> como pó, mas ao que resiste feito pedra.
			</h1>

			{expertises.map((expertise, index) => (
				<PhotoReveal src={expertise.src} topic={expertise.topic} text={expertise.text} key={index} />
			))}
		</motion.div>
	);
}
