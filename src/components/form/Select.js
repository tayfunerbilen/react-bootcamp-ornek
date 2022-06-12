import { useField } from "formik";

export default function Select({ label, options, ...props }) {
	const [fields, meta, helpers] = useField(props)
	return (
		<label>
			{label} <br/>
			<select {...fields} {...props}>
				<option value="">Seçin</option>
				{options.map((option, index) => (
					<option key={index} value={option.key}>{option.value}</option>
				))}
			</select>
		</label>
	)
}
