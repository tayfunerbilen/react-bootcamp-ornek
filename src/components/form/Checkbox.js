import { useField } from "formik";
import classNames from "classnames";
import { FiCheck } from "react-icons/fi"

export default function Checkbox({ label, ...props }) {
	const [field, meta, helpers] = useField(props)
	const clickHandle = () => {
		helpers.setValue(!field.value)
	}
	return (
		<label className="flex items-center gap-x-2 cursor-pointer" onClick={clickHandle}>
			<span className={classNames({
				"w-5 h-5 rounded transition-all border flex items-center justify-center": true,
				"bg-gray-100 text-transparent": !field.value,
				"bg-blue-600 text-white": field.value,
				"border-transparent": !meta.error,
				"border-red-600": meta.error
			})}>
				<FiCheck size={16} />
			</span>
			<span className="text-sm flex items-center gap-x-3 text-gray-600 select-none">
				{label}
				{meta.error && (
					<small className="text-xs text-red-600">({meta.error})</small>
				)}
			</span>
		</label>
	)
}
