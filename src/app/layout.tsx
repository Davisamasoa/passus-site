import "./globals.css";

export const metadata = {
	title: "Passus",
	description: "Social Manager Agency",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-br">
			<body className="font-source_sans_pro">{children}</body>
		</html>
	);
}
