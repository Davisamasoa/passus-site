"use client";
import PhotoReveal from "@/components/PhotoReveal";

type Props = {};

export default function page({}: Props) {
	return (
		<div>
			<PhotoReveal src="./assets/image/header-image.jpg" />
			<PhotoReveal src="./assets/image/header-image.jpg" />
			<PhotoReveal src="./assets/image/header-image.jpg" />
			<PhotoReveal src="./assets/image/header-image.jpg" />
			<PhotoReveal src="./assets/image/header-image.jpg" />
			<PhotoReveal src="./assets/image/header-image.jpg" />
		</div>
	);
}
