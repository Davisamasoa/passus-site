import React from "react";

import { Metadata } from "next";
import Execucao from "./client";

type Props = {};

export const metadata: Metadata = {
	title: "Passus - Execuções",
	description: "Alguns de nossos trabalhos.",
};

export default function page({}: Props) {
	return <Execucao />;
}
