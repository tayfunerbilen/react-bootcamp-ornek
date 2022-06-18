import { useField } from "formik";
import classNames from "classnames";

export default function Select({ label, options, ...props }) {
	const [fields, meta, helpers] = useField(props)
	return (
		<label className="flex flex-col">
			<div className="text-sm text-gray-600 mb-1.5">{label}</div>
			<select className={classNames({
				"w-full border rounded h-10 text-sm px-3 outline-none flex-shrink-0 appearance-none": true,
				"focus:border-black": !meta.error,
				"border-red-600": meta.error
			})} {...fields} {...props}>
				<option value="">Seçin</option>
				{options.map((option, index) => (
					<option key={index} value={option.key}>{option.value}</option>
				))}
			</select>
			{meta.error && (
				<small className="text-xs mt-2 text-red-600">{meta.error}</small>
			)}
		</label>
	)
}
