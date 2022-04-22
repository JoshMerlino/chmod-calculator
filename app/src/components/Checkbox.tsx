import { MdCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

export type CheckboxProps = {
    defaultChecked?: boolean;
    position: number;
    dispatch: (position: number, mode: string, value: boolean) => void;
    label: string;
    mode: string;
};

export default function Checkbox({ position, dispatch, defaultChecked, label, mode }: CheckboxProps): JSX.Element {
	return (
		<label htmlFor={ position + mode } className="relative m-2 rounded-full h-8 py-1 px-4 text-2xl inline-flex w-full items-center font-semibold cursor-pointer bg-white hover:bg-neutral-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-white mx-auto">
			<input
				className="hidden"
				type="checkbox"
				id={ position + mode }
				defaultChecked={ defaultChecked }
				onChange={ event => dispatch(position, mode, event.target.checked) } />
			<div>
				{ defaultChecked && <MdCheckBox className="mr-2 text-teal-500"/> }
				{ !defaultChecked && <MdOutlineCheckBoxOutlineBlank className="mr-2 text-neutral-500"/> }
			</div>
			<p className="text-lg select-none">{ label }</p>
		</label>
	);
}
