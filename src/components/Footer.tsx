"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
type Props = {};

export default function Footer({}: Props) {
	return (
		<footer className={`w-full absolute bottom-0 bg-zinc-800  md:px-[15%] px-9`}>
			<div className="flex text-xs justify-between  text-zinc-400 tracking-tight py-8 px-1 md:px-0 relative">
				<div>
					<Link href="/contato">Contato</Link>
				</div>
				<a
					className="absolute left-1/2 -translate-x-1/2"
					target="_blank"
					href="https://www.instagram.com/agenciapassus/"
				>
					<i className="bi bi-instagram"></i>
				</a>

				<div>
					<a
						target="_blank"
						href="https://wa.me/5515997856284"
						className="cursor-pointer border-b-[1px] border-zinc-700 text-zinc-400"
					>
						Whatsapp
					</a>
				</div>
			</div>
		</footer>
	);
}
