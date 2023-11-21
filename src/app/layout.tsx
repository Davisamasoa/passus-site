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
			<body className="font-source_sans_pro tracking-tight min-h-screen  pt-[130px] sm:pt-16">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
