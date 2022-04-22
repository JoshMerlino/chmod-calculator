import { useEffect, useState } from "react";
import { BsBrightnessHigh } from "react-icons/bs";
import { MdOutlineBrightnessAuto, MdOutlineDarkMode } from "react-icons/md";

export type ThemeMode = "DARK" | "LIGHT" | "AUTO";

export default function ThemeToggle(): JSX.Element {

	const [ state, setState ] = useState("theme" in localStorage ? localStorage.theme === "dark" ? "DARK" : "LIGHT" : "AUTO");

	useEffect(function() {
		if (state === "DARK" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [ state ]);

	function nextState() {
		if (state === "DARK") {
			localStorage.removeItem("theme");
			setState("AUTO");
		}
		if (state === "AUTO") {
			localStorage.theme = "light";
			setState("LIGHT");
		}
		if (state === "LIGHT") {
			localStorage.theme = "dark";
			setState("DARK");
		}
	}

	return (
		<div onClick={ nextState } className="relative m-2 rounded-full h-8 py-1 px-4 text-2xl inline-flex w-48 items-center font-semibold cursor-pointer bg-white hover:bg-neutral-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-white ml-auto">
			{ state === "AUTO" && <MdOutlineBrightnessAuto className="mr-2"/> }
			{ state === "DARK" && <MdOutlineDarkMode className="mr-2"/> }
			{ state === "LIGHT" && <BsBrightnessHigh className="mr-2"/> }
			<p className="text-lg select-none">Change Theme</p>
		</div>
	);
}
