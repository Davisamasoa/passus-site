import Link from "next/link";

type Props = {};

export default function Home({}: Props) {
	return (
		<div className="flex flex-col gap-5  absolute top-2/4 left-1/2 !-translate-x-1/2 !-translate-y-3/4 text-4xl tracking-wider text-center">
			<Link href={"/work?k=publicidade"}>Política</Link>
			<hr className="bg-black" />
			<Link href={"/work?k=publicidade"}>Publicidade</Link>
		</div>
	);
}
