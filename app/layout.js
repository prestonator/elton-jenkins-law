import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";
import "@/src/styles/fonts.css";
import RenderNav from "./RenderNav";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export const metadata = {
	title: "Elton Jenkins Law, PLLC",
	description: "Website for Elton Jenkins Law, PLLC",
	themeColor: "#c49b65",
	icons: {
		icon: "/favicon.svg",
		shortcut: "/favicon.svg",
		apple: "/favicon.svg",
		other: {
			rel: "favicon",
			url: "/favicon.svg",
		},
	},
};

export default async function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<RenderNav>
					<Navbar />
				</RenderNav>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
				<Footer />
			</body>
		</html>
	);
}
