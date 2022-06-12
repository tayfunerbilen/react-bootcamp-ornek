import { memo, useContext } from "react";
import TodoItem from "./TodoItem";
import { useSite } from "../context/SiteContext";

function Todos({ todos, deleteTodo, toggleTodo, updateTodoItem }) {
	console.log('TODOS rendered', todos)
	const {theme} = useSite()
	return (
		<>
			{todos.length > 0 && (
				<ul className="bg-white dark:bg-transparent">
					{todos.map((todo, index) => <TodoItem key={index} todo={todo} index={index} deleteTodo={deleteTodo} toggleTodo={toggleTodo} updateTodoItem={updateTodoItem} />)}
				</ul>
			) || (
				<div className="p-5">
					<div className="bg-blue-100 p-5 rounded text-sm text-blue-800">
						Henüz hiç todo eklemediniz!
					</div>
				</div>
			)}
		</>
	)
}

export default memo(Todos)
