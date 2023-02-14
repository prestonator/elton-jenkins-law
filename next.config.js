/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		// Enables the styled-components SWC transform
		styledComponents: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "strapi.prestonator.com",
				port: "",
				pathname: "/uploads/**",
			},
		],
	},
	experimental: {
		appDir: true,
		fontLoaders: [
			{ loader: "@next/font/google", options: { subsets: ["latin"] } },
		],
	},
};

module.exports = nextConfig;
