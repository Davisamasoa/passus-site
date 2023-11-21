"use client";
import PhotoReveal from "@/components/PhotoReveal";

type Props = {};
type expertiseType = {
	src: string;
	topic: string;
	text: string;
};
const expertises: expertiseType[] = [
	{
		src: "./assets/image/header-image.jpg",
		topic: "Estratégia",
		text: "O pensamento precede a fala. Raciocinamos a mensagem, expressamos o que pensamos e somos interpretados pelo outro. Nessa ordem. O intento. O método. O outro.",
	},
	{
		src: "./assets/image/header-image.jpg",
		topic: "Política",
		text: "Estética e paixão. A estética do discurso, da mensagem e dos gestos. A conexão com as paixões e rejeições de identidade do outro. A campanha é uma busca constante de conexões com os amores e desamores do eleitor.",
	},
	{
		src: "./assets/image/header-image.jpg",
		topic: "Design",
		text: "A beleza importa e sempre importou. A busca do belo não é um capricho, mas é o desejo de despertar a contemplação e de passar uma mensagem através das percepções visuais que tocam o imaginário.",
	},
	{
		src: "./assets/image/header-image.jpg",
		topic: "Histórias",
		text: "Vender o passado é criar laços com o presente. Contar histórias é uma das armas mais poderosas do homem. Foi a capacidade de contar histórias que moldou o mundo que temos. As sociedades, a ancestralidade, as nações… e é contando histórias que conseguimos fortalecer a ligação entre pessoas.",
	},
	{
		src: "./assets/image/header-image.jpg",
		topic: "Alcance",
		text: "Falar com o mundo. Uma característica do tempo é a comunicação ilimitada – não só pela distancia, mas pela capacidade de alcançar massas. A comunicação é social, embora tenha, em fins últimos, que se conectar ao pessoal. Essa dicotomia é fundamental para ser eficiente nos tempos das quantidades.",
	},
];

export default function page({}: Props) {
	return (
		<div className="">
			<h1 className="sm:text-start text-center sm:pl-[17.2%] sm:w-1/2 w-full px-9 sm:pt-6 sm:pb-16 pb-8 font-goudyOldStyle  sm:text-4xl text-xl text-gray-800 opacity-90">
				Queremos o perene, não o perecível. <br /> Buscamos elo com o que não se dilui como pó, mas ao que
				resiste feito pedra.
			</h1>

			{expertises.map((expertise, index) => (
				<PhotoReveal src={expertise.src} topic={expertise.topic} text={expertise.text} key={index} />
			))}
		</div>
	);
}
