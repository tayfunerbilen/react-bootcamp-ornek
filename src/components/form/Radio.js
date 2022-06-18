import {useField} from "formik";
import classNames from "classnames";

export default function Radio({label, options, ...props}) {
	const [fields, meta, helpers] = useField(props)
	const clickHandle = value => {
		helpers.setValue(value)
	}
	return (
		<div>
			<div className="text-sm text-gray-600 mb-1.5 flex items-center gap-x-2">
				{label}
				{meta.error && (
					<small className="text-xs text-red-600">({meta.error})</small>
				)}
			</div>
			<div className="grid gap-y-2">
				{options.map((option, key) => (
					<label className="flex cursor-pointer items-center group gap-x-2" key={key} onClick={() => clickHandle(option.key)}>
					<span className={classNames({
						"w-5 h-5 rounded-full flex relative before:content-[''] before:w-2 before:h-2 before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2": true,
						"bg-gray-100 before:bg-transparent group-hover:before:bg-gray-200": fields.value !== option.key,
						"bg-blue-600 before:bg-white": fields.value === option.key
					})}/>
						<span className="text-sm text-gray-600 select-none">
							{option.value}
						</span>
					</label>
				))}
			</div>
		</div>
	)
}
