"use client";
import { useSearchParams } from "next/navigation";
import Photo from "@/components/work/Photo";
import PhotoReveal from "@/components/PhotoReveal";

type photoData = {
	src: string;
	alt: string;
	subtitle: string;
	title: string;
};

let delay = 0;

export default function Home() {
	console.log(useSearchParams().get("k"));
	const mainPhotoArray: photoData[] = new Array(4).fill({
		src: "https://static01.nyt.com/images/2022/09/01/business/00roose-1/merlin_212276709_3104aef5-3dc4-4288-bb44-9e5624db0b37-superJumbo.jpg",
		alt: "photo generated by ia",
		subtitle: "MidJourney",
		title: "Photo generated by ia",
	});

	const photoArray: photoData[] = new Array(6).fill({
		src: "https://static01.nyt.com/images/2022/09/01/business/00roose-1/merlin_212276709_3104aef5-3dc4-4288-bb44-9e5624db0b37-superJumbo.jpg",
		alt: "photo generated by ia",
		subtitle: "MidJourney",
		title: "Photo generated by ia",
	});
	return (
		<>
			<div className="md:mb-20 pt-24 sm:pt-16">
				<PhotoReveal expertisePhoto={false} src="./assets/image/header-image.jpg" />
			</div>
			<main className="lg:px-52 md:px-20 px-7">
				<div className="grid gap-2 sm:gap-7 md:grid-cols-2 grid-cols-1 mt-16 justify-center  lg:justify-between ">
					{mainPhotoArray.map((photo, index) => {
						delay += 0.15;

						switch (index) {
							case 0:
							case 3:
							case 6:
							case 9:
								delay = 0;
						}

						return (
							<Photo
								delay={index > 0 ? delay : 0}
								key={index}
								src={photo.src}
								alt={photo.alt}
								subtitle={photo.subtitle}
								title={photo.title}
								id={index + 1}
							/>
						);
					})}
				</div>
				<div className="grid place-items-center md:grid-cols-3 grid-cols-1 mt-16 justify-center  lg:justify-between gap-2 sm:gap-7">
					{photoArray.map((photo, index) => {
						delay += 0.15;

						switch (index) {
							case 0:
							case 3:
							case 6:
							case 9:
								delay = 0;
						}

						return (
							<Photo
								id={index + 1}
								delay={index > 0 ? delay : 0}
								key={index}
								src={photo.src}
								alt={photo.alt}
								subtitle={photo.subtitle}
								title={photo.title}
							/>
						);
					})}
				</div>
			</main>
		</>
	);
}
