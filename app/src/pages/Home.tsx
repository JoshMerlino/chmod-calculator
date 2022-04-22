import { useState } from "react";
import BitField from "../components/BitField";
import ThemeToggle from "../components/ThemeToggle";
import { base } from "../../manifest.json";
import Adsense from "../components/Adsense";

export const path = "/";

export type Props = { octet?: string };

export default function Home({ octet }: Props) {

	// Initialize triocte
	const [ state, setState ] = useState(octet || "000");
	const parsedState = state.split("").map(a => parseInt(a));
	const modes = { r: 0b100, w: 0b010, x: 0b001 };

	function dispatch(position: number, mode: string, value: boolean) {
		const numericMode = modes[mode as keyof typeof modes];
		if (value) parsedState[position] |= numericMode;
		else parsedState[position] &= ~numericMode;
		setState(parsedState.join(""));
		window.history.pushState(null, "", base + parsedState.join(""));
	}

	return (
		<div className="grid w-full h-full bg-zinc-100 dark:bg-zinc-900 fixed">
			<ThemeToggle/>
			<div className="flex w-full justify-center mt-12 pt-2 top-0 absolute flex-col h-full overflow-auto pb-12">
				<div className="grid justify-center lg:grid-flow-col grid-cols-1 lg:grid-cols-3 gap-4 px-4 max-w-[1000px] grow mx-auto">
					<div>
						<h1 className="text-3xl dark:text-white text-center my-8">Owner</h1>
						<BitField position={ 0 } unparsedState={ state } dispatch={ dispatch }/>
					</div>
					<div>
						<h1 className="text-3xl dark:text-white text-center my-8">Group</h1>
						<BitField position={ 1 } unparsedState={ state } dispatch={ dispatch }/>
					</div>
					<div>
						<h1 className="text-3xl dark:text-white text-center my-8">Other</h1>
						<BitField position={ 2 } unparsedState={ state } dispatch={ dispatch }/>
					</div>
				</div>
				<Adsense/>
				<div className="flex justify-center items-center py-4 dark:text-white">
					<span className="text-3xl mr-8">Permissions:</span>
					<div className="text-3xl border-[1px] border-zinc-200 dark:border-zinc-800 rounded-2xl px-4 py-2 my-4" style={ { fontFamily: "Roboto Mono, monospace"} }><span className="select-none">$ </span><span className="select-all">chmod { state }</span></div>
				</div>
				<div className="flex justify-center text-lg font-semibold py-8 dark:text-neutral-300 text-neutral-800">
					Coded with ❤️ by <a href="//joshmerlino.github.io/" className="text-teal-500 pl-2">Josh Merlino</a>
				</div>
			</div>
		</div>
	);
}
