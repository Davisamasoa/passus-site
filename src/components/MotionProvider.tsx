"use client";

import { LazyMotion, domAnimation } from "framer-motion";

// Carrega as features do framer-motion uma única vez para o site inteiro. Com `strict`,
// qualquer uso acidental de `motion.*` (que embute o bundle completo) gera erro: use `m.*`.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
	return (
		<LazyMotion features={domAnimation} strict>
			{children}
		</LazyMotion>
	);
}
