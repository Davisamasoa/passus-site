"use client";

import { m } from "framer-motion";

type Props = {
	children: React.ReactNode;
	as?: "div" | "main";
	className?: string;
};

/** Aparece suavemente (opacity 0 -> 1) na primeira vez que entra na tela. */
export default function FadeIn({ children, as = "div", className }: Props) {
	const Component = m[as];

	return (
		<Component
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 1.5 }}
			className={className}
		>
			{children}
		</Component>
	);
}
