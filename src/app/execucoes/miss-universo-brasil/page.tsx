import React from "react";

import { Metadata } from "next";

import Miss from "./client";

type Props = {};

export const metadata: Metadata = {
	title: "Miss Universo Brasil",
};

export default function page({}: Props) {
	return <Miss />;
}
