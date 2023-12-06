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
	const [headerColor, setHeaderColor] = useState<string>();
	const [logoColor, setLogoColor] = useState<string>();
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
			switch (pathname) {
				case "/conceito":
				case "/execucoes":
				case "/execucoes/aldo-rebelo":
				case "/execucoes/arcah":
				case "/execucoes/ashby":
				case "/execucoes/b-on":
				case "/execucoes/jovem-pan-e-brasil-200":
				case "/execucoes/campanha-pela-reforma-tributaria":
				case "/execucoes/brasil-200":
				case "/execucoes/michel-temer-e-mauricio-macri":
				case "/execucoes/umiss":
				case "/execucoes/programa-4x4":
				case "/execucoes/tarcisio-de-freitas":
				case "/execucoes/miss-universo-brasil":
					body.style.backgroundColor = "black";
					setHeaderColor("bg-black text-gray-400");
					setLogoColor("invert");
					break;
				default:
					body.style.backgroundColor = "#FFF";
					setLogoColor("");
					setHeaderColor("bg-white text-gray-500");
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
			initial={{ y: 0, opacity: 0 }}
			animate={{ y: visible ? 0 : -130, opacity: 1 }}
			transition={{ duration: 0.3 }}
			className={`fixed top-0  ${headerColor} flex  justify-between md:flex-row flex-col items-center md:gap-0 gap-7  2xl:px-headerPaddingLG px-headerPadding mx-auto py-8 w-full z-50`}
		>
			<Link scroll={true} href="/">
				<Image width={80} className={`sm:w-20 w-16 ${logoColor}`} src={passus} alt="logo da passus" />
			</Link>
			<nav className="w-full md:w-fit">
				<ul className="flex justify-between md:justify-center font-extralight md:gap-8 text-xs">
					<li>
						<Link scroll={true} href="/execucoes">
							Execuções
						</Link>
					</li>
					<li>
						<Link scroll={true} href="/inteligencias">
							Inteligências
						</Link>
					</li>
					<li>
						<Link scroll={true} href="/conceito">
							Conceito
						</Link>
					</li>
					<li>
						<Link scroll={true} href="/contato">
							Contato
						</Link>
					</li>
				</ul>
			</nav>
		</motion.header>
	);
}
