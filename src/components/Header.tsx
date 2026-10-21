"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { m } from "framer-motion";
import passus from "../app/logo.png";
import { isDarkRoute } from "@/lib/theme";

const navLinks = [
	{ href: "/execucoes", label: "Execuções" },
	{ href: "/inteligencias", label: "Inteligências" },
	{ href: "/conceito", label: "Conceito" },
	{ href: "/contato", label: "Contato" },
];

export default function Header() {
	const pathname = usePathname();
	const dark = isDarkRoute(pathname);
	const [visible, setVisible] = useState(true);

	// Esconde o header ao rolar para baixo e mostra ao rolar para cima (ou perto do topo).
	useEffect(() => {
		let lastScrollY = window.scrollY;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setVisible(currentScrollY < lastScrollY || currentScrollY < 10);
			lastScrollY = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			{/* Renderizado já no HTML do servidor, evitando o "flash" branco nas páginas escuras.
			    O !important é necessário para sobrepor a classe bg-white do <body>. */}
			{dark && <style>{"body{background-color:black!important}"}</style>}
			<m.header
				initial={{ y: 0, opacity: 0 }}
				animate={{ y: visible ? 0 : -130, opacity: 1 }}
				transition={{ duration: 0.3 }}
				className={`fixed top-0 ${
					dark ? "bg-black text-gray-400" : "bg-white text-gray-500"
				} flex justify-between md:flex-row flex-col items-center md:gap-0 gap-7 2xl:px-headerPaddingLG px-headerPadding mx-auto py-8 w-full z-50`}
			>
				<Link href="/">
					<Image
						width={80}
						className={`sm:w-20 w-16 ${dark ? "" : "invert"}`}
						src={passus}
						alt="logo da passus"
						preload
					/>
				</Link>
				<nav className="w-full md:w-fit">
					<ul className="flex justify-between md:justify-center font-extralight md:gap-8 text-xs">
						{navLinks.map(({ href, label }) => (
							<li key={href}>
								<Link href={href}>{label}</Link>
							</li>
						))}
					</ul>
				</nav>
			</m.header>
		</>
	);
}
