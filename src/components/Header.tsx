"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import passus from "../svg/logo_passus.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import path from "path";

type Props = {};

export default function Header({}: Props) {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	const pathname = usePathname();

	const handleScroll = () => {
		const currentScrollPos = window.pageYOffset;
		const isScrollingUp = currentScrollPos < prevScrollPos;

		setPrevScrollPos(currentScrollPos);

		setVisible(isScrollingUp || currentScrollPos < 10);
	};
	useEffect(() => {
		const body = document.querySelector("body");
		if (body) {
			if (pathname == "/conceito" || pathname == "/execucoes") {
				body.style.backgroundColor = "black";
			} else {
				body.style.backgroundColor = "#FFF";
			}
		}
	}, [pathname]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [prevScrollPos, visible]);

	return (
		<motion.header
			initial={{ y: 0 }}
			animate={{ y: visible ? 0 : -100 }}
			transition={{ duration: 0.3 }}
			className={`fixed top-0  ${
				pathname == "/conceito" || pathname == "/execucoes"
					? "bg-black text-gray-400"
					: "bg-white text-gray-500"
			} flex  justify-between md:flex-row flex-col items-center md:gap-0 gap-7  lg:px-headerPaddingLG px-headerPadding mx-auto py-8 w-full z-50`}
		>
			<Link href="/">
				<Image
					width={80}
					className={`sm:w-20 w-16 ${
						pathname == "/conceito" || pathname == "/execucoes" ? "invert" : undefined
					}`}
					src={passus}
					alt="logo da passus"
				/>
			</Link>
			<nav className="w-full md:w-fit">
				<ul className="flex justify-between md:justify-center font-extralight md:gap-8 text-xs">
					<li>
						<Link href="/execucoes">Execuções</Link>
					</li>
					<li>
						<Link href="/inteligencias">Inteligências</Link>
					</li>
					<li>
						<Link href="/conceito">Conceito</Link>
					</li>
					<li>
						<Link href="/contato">Contato</Link>
					</li>
				</ul>
			</nav>
		</motion.header>
	);
}
