import Checkbox from "./Checkbox";

export type BitFieldProps = {
    position: number;
    unparsedState: string;
    dispatch: (position: number, mode: string, value: boolean) => void;
};

export default function BitField({ position, unparsedState, dispatch }: BitFieldProps): JSX.Element {

	const state = unparsedState.split("").map(a => parseInt(a));

	const octet = state[position];

	// Parse octet
	const r = (octet & 0b100) !== 0;
	const w = (octet & 0b010) !== 0;
	const x = (octet & 0b001) !== 0;

	return (
		<div className="border-[1px] border-zinc-200 dark:border-zinc-800 rounded-2xl px-4 py-3">

			<Checkbox
				defaultChecked={ r }
				mode="r"
				position={ position }
				dispatch={ dispatch }
				label="Read"/>

			<Checkbox
				defaultChecked={ w }
				mode="w"
				position={ position }
				dispatch={ dispatch }
				label="Write"/>

			<Checkbox
				defaultChecked={ x }
				mode="x"
				position={ position }
				dispatch={ dispatch }
				label="Execute"/>

		</div>
	);
}
