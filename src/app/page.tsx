import Image from "next/image";
import Link from "next/link";
import passusLogo from "../svg/logo_passus.svg";

type Props = {};

export default function Home({}: Props) {
	return (
		<main className="flex md:flex-row flex-col -mt-32 sm:-mt-24 max-w-screen max-h-screen home overflow-hidden md:text-3xl sm:text-2xl text-xl font-instrument_serif bg-black relative">
			<Image
				className="absolute z-10 grayscale invert w-16 md:w-24 top-1/2 md:top-auto md:bottom-10 left-1/2 -translate-x-1/2 md:-translate-y-0 -translate-y-[2.8vh]"
				src={passusLogo}
				alt="logo da passus"
			/>
			<Link href={"/work"} className="w-full md:max-w-[50%] relative group">
				<img
					className="h-[48vh] md:h-screen max-h-2/4 w-full object-cover relative group-hover:opacity-70 transition duration-300 opacity-90 scale-[1.1]"
					src="/assets/image/tarcisio.jpg"
					alt="foto do governador tarcísio"
				/>
				<h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">Política</h2>
			</Link>
			<Link href={"/work"} className="w-full md:max-w-[50%] relative group">
				<img
					className=" h-[48vh] md:h-screen object-cover  relative group-hover:opacity-70 transition duration-300 opacity-90"
					src="/assets/image/miss.jpg"
					alt="foto do governador tarcísio"
				/>
				<h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
					Publicidade
				</h2>
			</Link>
			<div className="md:hidden bg-black w-full h-[4vh] blur"></div>
		</main>
	);
}
