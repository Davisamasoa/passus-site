/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: { domains: ["static01.nyt.com"] },
};

module.exports = nextConfig;
