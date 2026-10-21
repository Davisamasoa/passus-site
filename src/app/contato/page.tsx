import type { Metadata } from "next";
import Contato from "./client";

export const metadata: Metadata = {
	title: "Passus - Contato",
	description: "Contate-nos para trabalharmos juntos.",
};

export default function Page() {
	return <Contato />;
}
