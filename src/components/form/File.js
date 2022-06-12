import { useField } from "formik";

export default function File({ label, ...props }) {
	const [fields, meta, helpers] = useField(props)

	const changeHandle = e => {
		helpers.setValue(e.target.files[0])
	}

	return (
		<label>
			{label} <br/>
			<input type="file" onChange={changeHandle}/>
		</label>
	)
}
