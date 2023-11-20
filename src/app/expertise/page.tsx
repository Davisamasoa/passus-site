"use client";
import PhotoReveal from "@/components/PhotoReveal";

type Props = {};

export default function page({}: Props) {
	return (
		<div className="pt-24 sm:pt-[66px]">
			<PhotoReveal src="./assets/image/header-image.jpg" />
			<PhotoReveal src="./assets/image/header-image.jpg" />
			<PhotoReveal src="./assets/image/header-image.jpg" />
			<PhotoReveal src="./assets/image/header-image.jpg" />
			<PhotoReveal src="./assets/image/header-image.jpg" />
			<PhotoReveal src="./assets/image/header-image.jpg" />
		</div>
	);
}
