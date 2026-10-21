import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import { basic, goudyOldStyle } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://www.passus.in"),
	title: "Passus",
	description: "Agência de publicidade",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-br" className={`${basic.variable} ${goudyOldStyle.variable}`}>
			<body className="font-basic tracking-tight min-h-screen pb-28 pt-[130px] sm:pt-[126px] md:pt-[90px] bg-white relative">
				<MotionProvider>
					<Header />
					{children}
					<Footer />
				</MotionProvider>
			</body>
		</html>
	);
}
