import React from "react";
import Conceito from "./client";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
	title: "Passus - Conceito",
	description: "O conceito da Passus - Agência de publicidade -",
};

export default function page({}: Props) {
	return <Conceito />;
}
