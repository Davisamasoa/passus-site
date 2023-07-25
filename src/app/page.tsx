import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Home({}: Props) {
	return (
		<main className="flex md:flex-row flex-col -mt-32 sm:-mt-24 max-w-screen home overflow-hidden text-3xl font-instrument_serif bg-black">
			<Link href={"/work"} className="w-full md:max-w-[50%] relative group">
				<img
					className="h-[50vh] md:h-screen max-h-2/4 w-full object-cover relative group-hover:opacity-70 transition duration-300 opacity-90"
					src="/assets/image/tarcisio.jpg"
					alt="foto do governador tarcísio"
				/>
				<h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">Política</h2>
			</Link>
			<Link href={"/work"} className="w-full md:max-w-[50%] relative group">
				<img
					className="h-[50vh] md:h-screen object-cover  relative group-hover:opacity-70 transition duration-300 opacity-90"
					src="/assets/image/miss.jpg"
					alt="foto do governador tarcísio"
				/>
				<h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
					Publicidade
				</h2>
			</Link>
		</main>
	);
}
