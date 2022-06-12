import { memo } from "react";
import { useAuth } from "../context";

function AddTodo({ submitHandle, updateTodo, todo, completed, updateCompleted }) {
	console.log('ADDTODO rendered')
	const { user } = useAuth()
	return (
		<form className="p-4 flex gap-x-4 items-center border-b bg-white dark:bg-gray-700 dark:border-gray-800" onSubmit={submitHandle}>
			<input className="flex-1 h-10 rounded-md border border-gray-300 px-4 text-sm dark:bg-gray-500 dark:border-white/20 dark:placeholder:text-white" placeholder="Bir todo yazın" type="text" value={todo} onChange={updateTodo}/>
			<label className="flex gap-x-2 items-center text-sm">
				<input type="checkbox" checked={completed} onChange={updateCompleted}/>
				Tamamlanmış
			</label>
			<button className="h-10 rounded-3xl bg-orange-600 text-white text-sm px-8 disabled:opacity-20 disabled:cursor-not-allowed" disabled={!todo || !user} type="submit">Ekle</button>
		</form>
	)
}

export default memo(AddTodo)
