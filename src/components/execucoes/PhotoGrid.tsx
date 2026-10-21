import Photo from "./Photo";
import type { PhotoCard } from "@/data/portfolio";

type Props = {
	cards: PhotoCard[];
	className: string;
};

export default function PhotoGrid({ cards, className }: Props) {
	return (
		<div className={className}>
			{cards.map((card, index) => (
				// Escalona a entrada das fotos em grupos de três.
				<Photo key={card.src} card={card} delay={(index % 3) * 0.15} dark />
			))}
		</div>
	);
}
