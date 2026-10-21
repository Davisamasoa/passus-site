/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		formats: ["image/avif", "image/webp"],
		// As imagens do site não mudam com frequência: mantém as versões otimizadas em cache por 30 dias.
		minimumCacheTTL: 60 * 60 * 24 * 30,
	},
	async redirects() {
		return [
			// URL antiga do UMiss Tour, gerada a partir de um nome com espaço sobrando ("UMiss ").
			{ source: "/execucoes/umiss-", destination: "/execucoes/umiss-tour", permanent: true },
		];
	},
};

module.exports = nextConfig;
