import { useField } from "formik";

export default function Checkbox({ label, ...props }) {
	const [fields, meta, helpers] = useField(props)
	const clickHandle = () => {
		helpers.setValue(!fields.value)
	}
	return (
		<label onClick={clickHandle}>
			<span style={{ display: 'inline-block', width: 20, height: 20, backgroundColor: fields.value ? 'black' : '#ddd'}} />
			{label}
		</label>
	)
}
