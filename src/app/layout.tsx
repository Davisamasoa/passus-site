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
			<body className="font-source_sans_pro tracking-tight pt-32">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
