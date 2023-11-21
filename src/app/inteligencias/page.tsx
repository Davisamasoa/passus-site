"use client";
import PhotoReveal from "@/components/PhotoReveal";

type Props = {};

export default function page({}: Props) {
	return (
		<div className="pt-24 sm:pt-[66px]">
			<PhotoReveal src="./assets/image/header-image.jpg" topic="Estratégia" />
			<PhotoReveal src="./assets/image/header-image.jpg" topic="Política" />
			<PhotoReveal src="./assets/image/header-image.jpg" topic="Design" />
			<PhotoReveal src="./assets/image/header-image.jpg" topic="Histórias" />
			<PhotoReveal src="./assets/image/header-image.jpg" topic="Alcance" />
		</div>
	);
}
