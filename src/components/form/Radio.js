import { useField } from "formik";

export default function Radio({ label, options, ...props }) {
	const [fields, meta, helpers] = useField(props)
	const clickHandle = value => {
		helpers.setValue(value)
	}
	return (
		<>
			<h6>{label}</h6>
			{options.map((option, key) => (
				<label key={key} onClick={() => clickHandle(option.key)}>
					<span style={{ display: 'inline-block', width: 20, height: 20, borderRadius: '50%', backgroundColor: fields.value === option.key ? 'black' : '#ddd'}} />
					{option.value}
				</label>
			))}
		</>
	)
}
