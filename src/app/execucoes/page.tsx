import type { Metadata } from "next";
import Execucoes from "./client";

export const metadata: Metadata = {
	title: "Passus - Execuções",
	description: "Alguns de nossos trabalhos.",
};

export default function Page() {
	return <Execucoes />;
}
