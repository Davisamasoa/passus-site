import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
	title: "Passus",
	description: "Social Manager Agency",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-br">
			<body
				className={`font-basic tracking-tight min-h-screen pb-28 pt-[130px] sm:pt-[126px] md:pt-[90px] bg-white relative`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
