import classNames from "classnames";
import {useAuth} from "../context";
import users from "../data/users.json"

function TodoItem({deleteTodo, toggleTodo, updateTodoItem, index, todo}) {
	console.log('TODOITEM rendered')

	const {user} = useAuth()

	const todoUser = users.find(user => user.id === todo.userId)

	return (
		<li className="border-b p-5">
			<div className={classNames({
				"text-sm flex items-center justify-between dark:border-gray-700": true,
				"opacity-30": todo.completed
			})}>
				{todo.userId === user.id && !todo.completed && (
					<input onChange={e => updateTodoItem(index, e.target.value)}
								 className="h-10 rounded border border-gray-300 px-3 text-sm w-1/2" type="text" value={todo.title}/>
				)}
				{((todo.userId === user.id && todo.completed) || todo.userId !== user.id) && todo.title}
				{todo.userId === user.id && (
					<div className="flex gap-x-4">
						<button className="text-sm rounded-md bg-gray-100 h-10 px-4 bg-red-50 text-red-700"
										onClick={() => deleteTodo(index)}>Sil
						</button>
						<button className="text-sm rounded-md bg-gray-100 h-10 px-4" onClick={() => toggleTodo(index)}>
							{todo.completed ? 'Tamamlandı' : 'Tamamla'}
						</button>
					</div>
				)}
			</div>
			{todoUser.id !== user.id && (
				<div className="text-xs mt-1">
					<b className="font-medium text-blue-600 underline">{todoUser.username}</b> tarafından eklendi.
				</div>
			)}
		</li>
	)
}

export default TodoItem
