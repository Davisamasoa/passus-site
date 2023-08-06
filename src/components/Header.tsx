"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import passus from "../svg/logo_passus.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

type Props = {};

export default function Header({}: Props) {
	const [isScrollingUp, setIsScrollingUp] = useState(true);
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [headerClass, setHeaderClass] = useState<string>("header");

	const pathname = usePathname();

	useEffect(() => {
		function handleScroll() {
			const currentScrollPos = window.pageYOffset;
			setIsScrollingUp(prevScrollPos > currentScrollPos);
			setPrevScrollPos(currentScrollPos);
		}

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos]);

	return (
		<motion.header
			animate={{ y: isScrollingUp ? 0 : -100 }}
			transition={{ duration: 0.7 }}
			className={`${
				isScrollingUp ? "header" : ""
			} bg-white flex md:justify-between justify-between md:flex-row flex-col items-center md:gap-0 gap-3 lg:px-52 md:px-20 px-9 mx-auto py-5 w-full z-50 ${
				pathname == "/" ? "hidden" : ""
			}`}
		>
			<Link href="/">
				<Image width={80} className="sm:w-20 w-16" src={passus} alt="logo da passus" />
			</Link>
			<nav className="w-full md:w-fit">
				<ul className="flex justify-between md:justify-center font-extralight md:gap-8 text-xs text-gray-500">
					<li>
						<Link href="/work">Work</Link>
					</li>
					<li>
						<Link href="/expertise">Expertise</Link>
					</li>
					<li>
						<Link href="/carrers">Carrers</Link>
					</li>
					<li>
						<Link href="/studios">Studios</Link>
					</li>
				</ul>
			</nav>
		</motion.header>
	);
}
