// Cards exibidos nas listagens. Cada card leva para /execucoes/<slug>; o slug padrão é gerado
// a partir do subtitle e só precisa ser informado quando for diferente.
export type PhotoCard = {
	src: string;
	subtitle: string;
	title: string;
	/** Imagem alternativa para telas até 768px. */
	srcset?: string;
	slug?: string;
};

export const homeFeaturedRows: PhotoCard[][] = [
	[
		{
			src: "/assets/image/h-miss.webp",
			subtitle: "Miss Universo Brasil 2021",
			title: "Jornada para a coroa",
		},
		{
			src: "/assets/image/h-tarcisio.webp",
			subtitle: "Tarcísio de Freitas",
			title: "Jornada por São Paulo",
			srcset: "/assets/image/mobile-tarcisio.webp",
		},
		{
			src: "/assets/image/h-aldorebelo.webp",
			subtitle: "Aldo Rebelo",
			title: "O projeto nacionalista",
			srcset: "/assets/image/mobile-aldorebelo.webp",
		},
	],
	[
		{
			src: "/assets/image/h-poit.webp",
			subtitle: "Vinicius Poit",
			title: "Campanha ao Governo de São Paulo",
			srcset: "/assets/image/mobile-poit.webp",
		},
		{
			src: "/assets/image/h-credal.webp",
			subtitle: "Credal Bank",
			title: "Crédito para todos",
			srcset: "/assets/image/mobile-credal.webp",
		},
		{
			src: "/assets/image/h-temer-e-macri.webp",
			subtitle: "Michel Temer e Maurício Macri",
			title: "Conferência da liberdade",
		},
	],
];

export const executionCards: PhotoCard[] = [
	{
		src: "/assets/image/trabalho/poit/poit.webp",
		subtitle: "Vinicius Poit",
		title: "Campanha ao Governo de São Paulo",
	},
	{
		src: "/assets/image/trabalho/miss-beleza-nacional.webp",
		subtitle: "Miss Universo Brasil",
		title: "Beleza nacional",
	},
	{
		src: "/assets/image/trabalho/Programa 4x4.webp",
		subtitle: "Programa 4x4",
		title: "Jornalismo independente",
	},
	{
		src: "/assets/image/trabalho/tarcisio-de-freitas.webp",
		subtitle: "Tarcísio de Freitas",
		title: "Jornada por São Paulo",
	},
	{
		src: "/assets/image/trabalho/Jovem-Pan-e-Brasil-200.webp",
		subtitle: "Jovem Pan e Brasil 200",
		title: "Estender mãos, construir um país",
	},
	{
		src: "/assets/image/trabalho/Aldo Rebelo.webp",
		subtitle: "Aldo Rebelo",
		title: "O projeto nacionalista",
	},
	{
		src: "/assets/image/trabalho/ashby.webp",
		subtitle: "Ashby",
		title: "3 décadas de sabor",
	},
	{
		src: "/assets/image/trabalho/Credal.webp",
		subtitle: "Credal Bank",
		title: "Crédito para todos",
	},
	{
		src: "/assets/image/trabalho/Rubinho Nunes.webp",
		subtitle: "Rubinho Nunes",
		title: "São Paulo mais justa e livre",
	},
	{
		src: "/assets/image/trabalho/Brasil 200.webp",
		subtitle: "Brasil 200",
		title: "O segundo grito de liberdade",
	},
	{
		src: "/assets/image/trabalho/patriota.webp",
		subtitle: "Patriota",
		title: "Conservadorismo e liberdade",
	},
	{
		src: "/assets/image/trabalho/ARCAH.webp",
		subtitle: "ARCAH",
		title: "I believe in good people",
	},
	{
		src: "/assets/image/trabalho/B-ON.webp",
		subtitle: "B-ON",
		title: "Nutrição prática e saudável",
	},
	{
		src: "/assets/image/trabalho/pamplona-alimentos.webp",
		subtitle: "Pamplona Alimentos",
		title: "Sabor e tradição",
	},
	{
		src: "/assets/image/trabalho/Temer-e-macri.webp",
		subtitle: "Michel Temer e Maurício Macri",
		title: "Conferência pela Liberdade",
	},
	{
		src: "/assets/image/trabalho/campanha-reforma-tributaria.webp",
		subtitle: "Campanha pela Reforma Tributária",
		title: "Prosperidade e justiça",
	},
	{
		src: "/assets/image/trabalho/Behind.webp",
		subtitle: "Behind the Crown",
		title: "O que há por trás da coroa",
	},
	{
		src: "/assets/image/trabalho/SoulTV.webp",
		subtitle: "SoulTV",
		title: "Um streaming do seu jeito",
	},
	{
		src: "/assets/image/trabalho/Miss Universo Brasil Tour.webp",
		subtitle: "UMiss",
		slug: "umiss-tour",
		title: "Miss Universo Brasil Tour",
	},
	{
		src: "/assets/image/trabalho/Vodka Tiiv.webp",
		subtitle: "Vodka Tiiv",
		title: "Thanks it is vodka",
	},
	{
		src: "/assets/image/trabalho/CASP.webp",
		subtitle: "CASP",
		title: "Uma parceira do produtor",
	},
	{
		src: "/assets/image/trabalho/Aurapharma.webp",
		subtitle: "Aurapharma",
		title: "Mais vida, menos barreiras",
	},
	{
		src: "/assets/image/trabalho/umiss.webp",
		subtitle: "UMiss",
		title: "Tudo sobre o universo feminino",
	},
];

export const missCards: PhotoCard[] = [
	{
		src: "/assets/image/trabalho/miss/2021.webp",
		subtitle: "Miss Universo Brasil 2021",
		title: "Teresa Santos",
	},
	{
		src: "/assets/image/trabalho/miss/2022.webp",
		subtitle: "Miss Universo Brasil 2022",
		title: "Mia Mamede",
	},
	{
		src: "/assets/image/trabalho/miss/2023.webp",
		subtitle: "Miss Universo Brasil 2023",
		title: "Maria Brechane",
	},
];
