// Trabalhos exibidos com fundo preto. Mantido fora de src/data/works.ts para que o Header
// (client component) não carregue todos os textos dos trabalhos no bundle do navegador.
const DARK_WORK_SLUGS = [
	"aldo-rebelo",
	"arcah",
	"ashby",
	"b-on",
	"behind-the-crown",
	"brasil-200",
	"campanha-pela-reforma-tributaria",
	"jovem-pan-e-brasil-200",
	"michel-temer-e-mauricio-macri",
	"miss-universo-brasil",
	"miss-universo-brasil-2021",
	"programa-4x4",
	"soultv",
	"tarcisio-de-freitas",
	"umiss",
];

const DARK_ROUTES = new Set(["/conceito", "/execucoes", ...DARK_WORK_SLUGS.map((slug) => `/execucoes/${slug}`)]);

export function isDarkRoute(pathname: string) {
	return DARK_ROUTES.has(pathname);
}
