import React from "react";
import ExecucoesId from "./client";

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
	params: { id: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	// read route params
	const id = params.id;

	return {
		title: id.replaceAll("-", " ").replace(/\b\w/g, (match) => match.toUpperCase()),
	};
}

export default function page() {
	return <ExecucoesId />;
}
