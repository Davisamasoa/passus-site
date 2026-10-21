import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import Work from "@/components/Work";
import { getWorkBySlug, works } from "@/data/works";
import { isDarkRoute } from "@/lib/theme";

type Props = {
	params: Promise<{ id: string }>;
};

// Todas as páginas de trabalho são geradas no build; qualquer outro slug responde 404.
export const dynamicParams = false;

export function generateStaticParams() {
	return works.map(({ slug }) => ({ id: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const work = getWorkBySlug((await params).id);
	if (!work) return {};

	return {
		title: work.author,
		description: work.topic,
	};
}

export default async function ExecucaoPage({ params }: Props) {
	const { id } = await params;
	const work = getWorkBySlug(id);
	if (!work) notFound();

	const dark = isDarkRoute(`/execucoes/${id}`);
	const headingClassName = "sm:gap-5 md:px-[10%] w-full lg:px-headerPaddingLG px-headerPadding font-goudyOldStyle";

	return (
		<FadeIn as="main" className={dark ? "text-white" : "text-gray-800"}>
			<p
				className={`${headingClassName} text-center md:text-start text-xs md:text-sm leading-6 ${
					dark ? "text-gray-400" : "text-gray-800"
				}`}
			>
				{work.author}
			</p>
			<h1
				className={`${headingClassName} pb-10 sm:text-3xl md:text-4xl text-2xl leading-6 text-center md:text-start -mt-1`}
			>
				{work.topic}
			</h1>
			<Work work={work} dark={dark} />
		</FadeIn>
	);
}
