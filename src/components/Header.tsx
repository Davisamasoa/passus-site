"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
	const [isScrollingUp, setIsScrollingUp] = useState(true);
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [headerClass, setHeaderClass] = useState<string>("header");

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
			} bg-white md:h-[9vh] h-[15vh] flex md:justify-between justify-center  items-center lg:px-80 md:px-20 px-9 mx-auto flex-wrap py-7 w-full z-50`}
		>
			<Link href="/">
				<h3 className="text-3xl text-center md:w-fit w-[100vw] font-instrument_serif logo ">AKQA</h3>
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
