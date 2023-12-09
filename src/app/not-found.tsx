import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Contato({}: Props) {
	return (
		<div className="text-gray-500 sm:gap-5 md:px-[10%] lg:px-headerPaddingLG px-headerPadding text-center mt-40">
			<div className="sm:-mt-1 pb-10 font-goudyOldStyle text-gray-800 sm:text-3xl md:text-4xl text-2xl leading-6">
				<p>
					Erro 404 <br />
					Página não encontrada
				</p>
			</div>
			<p className="w-full font-basic opacity-90 sm:text-base text-sm leading-6">
				<Link href="/" className="sm:px-[25px] px-[14px] py-3 border-[1px] border-gray-200 cursor-pointer">
					Voltar para a página principal
				</Link>
			</p>
		</div>
	);
}
