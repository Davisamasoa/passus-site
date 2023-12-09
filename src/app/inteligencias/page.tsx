import React from "react";

import { Metadata } from "next";
import Inteligencias from "./client";

type Props = {};

export const metadata: Metadata = {
	title: "Passus - Contato",
	description: "Contate-nos para trabalharmos juntos.",
};

export default function page({}: Props) {
	return <Inteligencias />;
}
