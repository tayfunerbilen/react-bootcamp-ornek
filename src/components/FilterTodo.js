import classNames from "classnames";

export default function FilterTodo({ updateOnlyMe, onlyMe, filterCompleted, updateFilterCompleted }) {
	return (
		<div className="flex gap-x-4 p-4 bg-gray-200">
			<button onClick={updateOnlyMe} className={classNames({
				"h-7 rounded-xl px-4 text-xs": true,
				"bg-white": !onlyMe,
				"bg-red-600 text-white": onlyMe
			})}>
				Sadece Benim Todolarım
			</button>
			<button
				onClick={() => updateFilterCompleted(filterCompleted === 'completed' ? false : 'completed')}
				className={classNames({
				"h-7 rounded-xl px-4 text-xs": true,
				"bg-white": filterCompleted !== 'completed',
				"bg-red-600 text-white": filterCompleted === 'completed',
			})}>
				Tamamlanmış Todolar
			</button>
			<button
				onClick={() => updateFilterCompleted(filterCompleted === 'uncompleted' ? false : 'uncompleted')}
				className={classNames({
					"h-7 rounded-xl px-4 text-xs": true,
					"bg-white": filterCompleted !== 'uncompleted',
					"bg-red-600 text-white": filterCompleted === 'uncompleted',
				})}>
				Tamamlanmamış Todolar
			</button>
		</div>
	)
}
