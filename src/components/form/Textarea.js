import { useField } from "formik";
import classNames from "classnames";

export default function Textarea({ label, ...props }) {
	const [fields, meta, helpers] = useField(props)
	return (
		<label className="flex flex-col">
			<div className="text-sm text-gray-600 mb-1.5">{label}</div>
			<textarea className={classNames({
				"w-full border rounded h-[100px] text-sm p-3 outline-none flex-shrink-0": true,
				"focus:border-black": !meta.error,
				"border-red-600": meta.error
			})} {...fields} {...props}/>
			{meta.error && (
				<small className="text-xs mt-2 text-red-600">{meta.error}</small>
			)}
		</label>
	)
}
