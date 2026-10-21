/** Remove acentos: "Tarcísio" -> "Tarcisio". */
export function removeAccents(value: string) {
	return value.normalize("NFD").replace(/[̀-ͯ]/g, "");
}

/** Gera o slug usado nas URLs de /execucoes: "Tarcísio de Freitas" -> "tarcisio-de-freitas". */
export function slugify(value: string) {
	return removeAccents(value).trim().toLowerCase().replace(/\s+/g, "-");
}
