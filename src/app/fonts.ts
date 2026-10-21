import localFont from "next/font/local";

// Fontes convertidas de .ttf para .woff2 (~65% menores) e servidas pelo next/font,
// que faz o preload e gera um fallback com métricas ajustadas para evitar saltos de layout.
export const basic = localFont({
	src: "../fonts/basic-commercial-light.woff2",
	variable: "--font-basic",
});

export const goudyOldStyle = localFont({
	src: "../fonts/goudy-old-style.woff2",
	variable: "--font-goudy-old-style",
	adjustFontFallback: "Times New Roman",
});
