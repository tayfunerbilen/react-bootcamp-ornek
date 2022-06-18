import { useField } from "formik";

export default function File({ label, ...props }) {
	const [fields, meta, helpers] = useField(props)

	const changeHandle = e => {
		helpers.setValue(e.target.files[0])
	}

	return (
		<label className="flex flex-col">
			<div className="text-sm text-gray-600 mb-1.5">{label}</div>
			<input type="file" onChange={changeHandle}/>
			{meta.error && (
				<small className="text-xs mt-2 text-red-600">{meta.error}</small>
			)}
		</label>
	)
}
