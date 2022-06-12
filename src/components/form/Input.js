import { useField } from "formik";

export default function Input({ label, ...props }) {
	const [fields, meta, helpers] = useField(props)
	return (
		<label>
			{label} <br/>
			<input {...fields} {...props}/>
		</label>
	)
}
