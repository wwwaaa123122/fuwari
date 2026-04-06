import {
	AUTO_MODE,
	DARK_MODE,
	DEFAULT_THEME,
	LIGHT_MODE,
} from "@constants/constants.ts";
import { expressiveCodeConfig } from "@/config";
import type { LIGHT_DARK_MODE } from "@/types/config";

const isBrowser = typeof window !== 'undefined';

export function getDefaultHue(): number {
	const fallback = "250";
	if (!isBrowser) return Number.parseInt(fallback);
	const configCarrier = document.getElementById("config-carrier");
	return Number.parseInt(configCarrier?.dataset.hue || fallback);
}

export function getHue(): number {
	if (!isBrowser) return getDefaultHue();
	const stored = localStorage.getItem("hue");
	return stored ? Number.parseInt(stored) : getDefaultHue();
}

export function setHue(hue: number): void {
	if (!isBrowser) return;
	localStorage.setItem("hue", String(hue));
	const r = document.querySelector(":root") as HTMLElement;
	if (!r) {
		return;
	}
	r.style.setProperty("--hue", String(hue));
}

export function applyThemeToDocument(theme: LIGHT_DARK_MODE) {
	if (!isBrowser) return;
	switch (theme) {
		case LIGHT_MODE:
			document.documentElement.classList.remove("dark");
			break;
		case DARK_MODE:
			document.documentElement.classList.add("dark");
			break;
		case AUTO_MODE:
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
			break;
	}

	// Set the theme for Expressive Code
	document.documentElement.setAttribute(
		"data-theme",
		expressiveCodeConfig.theme,
	);
}

export function setTheme(theme: LIGHT_DARK_MODE): void {
	if (!isBrowser) return;
	localStorage.setItem("theme", theme);
	applyThemeToDocument(theme);
}

export function getStoredTheme(): LIGHT_DARK_MODE {
	if (!isBrowser) return DEFAULT_THEME;
	return (localStorage.getItem("theme") as LIGHT_DARK_MODE) || DEFAULT_THEME;
}

export function getDefaultBlur(): number {
	const fallback = "10";
	if (!isBrowser) return Number.parseInt(fallback);
	const configCarrier = document.getElementById("config-carrier");
	return Number.parseInt(configCarrier?.dataset.blur || fallback);
}

export function getBlur(): number {
	if (!isBrowser) return getDefaultBlur();
	const stored = localStorage.getItem("blur");
	return stored ? Number.parseInt(stored) : getDefaultBlur();
}

export function setBlur(blur: number): void {
	if (!isBrowser) return;
	localStorage.setItem("blur", String(blur));
	const r = document.querySelector(":root") as HTMLElement;
	if (!r) {
		return;
	}
	r.style.setProperty("--bg-blur", String(blur) + "px");
}
