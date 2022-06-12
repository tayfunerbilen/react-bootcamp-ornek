import { useField } from "formik";

export default function Textarea({ label, ...props }) {
	const [fields, meta, helpers] = useField(props)
	return (
		<label>
			{label} <br/>
			<textarea {...fields} {...props}/>
		</label>
	)
}
