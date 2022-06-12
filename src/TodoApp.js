import {useCallback, useEffect, useMemo, useReducer, useState} from "react";
import todoReducer from "./reducers/todo-reducer";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import FilterTodo from "./components/FilterTodo";
import {useAuth, useSite} from "./context";
import { getAllPosts, setNewPost } from "./services/posts";

function TodoApp() {
	const [state, dispatch] = useReducer(todoReducer, {
		todos: [],
		todo: '',
		completed: false,
		search: '',
		onlyMe: false,
		filterCompleted: false
	})
	const {theme} = useSite()
	const {user} = useAuth()

	useEffect(() => {
		//getAllPosts().then(res => console.log(res))
		setNewPost({
			title: "test",
			userId: 1,
			body: "test body"
		})
	}, [])

	/*
	newPost({
		title: 'foo',
		body: 'bar',
		userId: 1,
	})
	 */

	const submitHandle = useCallback(e => {
		e.preventDefault()
		dispatch({
			type: 'ADD_TODO',
			todo: state.todo,
			userId: user.id
		})
	}, [state.todo])

	const updateTodo = useCallback(e => {
		dispatch({
			type: 'UPDATE_TODO',
			value: e.target.value
		})
	}, [])

	const updateCompleted = useCallback(e => {
		dispatch({
			type: 'UPDATE_COMPLETED',
			value: e.target.checked
		})
	}, [])

	const deleteTodo = useCallback(index => {
		dispatch({
			type: 'DELETE_TODO',
			index
		})
	}, [])

	const toggleTodo = useCallback(index => {
		dispatch({
			type: 'TOGGLE_TODO',
			index
		})
	}, [])

	const updateTodoItem = useCallback((index, value) => {
		dispatch({
			type: 'UPDATE_TODO_ITEM',
			index,
			value
		})
	}, [])

	const searchHandle = useCallback(e => {
		dispatch({
			type: 'UPDATE_SEARCH',
			value: e.target.value
		})
	}, []);

	const updateOnlyMe = useCallback(() => {
		dispatch({
			type: 'UPDATE_ONLY_ME'
		})
	}, [])

	const updateFilterCompleted = useCallback(value => {
		dispatch({
			type: 'UPDATE_FILTER_COMPLETED',
			value
		})
	}, [])

	const filteredTodos = useMemo(() => state.todos.filter(todo => {
		return (
			todo.title.toLocaleLowerCase('TR').includes(state.search.toLocaleLowerCase('TR'))
		) && (
			state.onlyMe && user ? todo.userId === user.id : true
		) && (
			state.filterCompleted ? (
				state.filterCompleted === 'completed' ? todo.completed : !todo.completed
			) : true
		)
	}), [state.todos, state.search, state.onlyMe, user, state.filterCompleted])

	return (
		<div className={`wrapper ${theme}`}>
			<main className="h-full bg-gray-100 dark:bg-gray-900 dark:text-white">
				<Header search={state.search} searchHandle={searchHandle}/>
				<AddTodo todo={state.todo} submitHandle={submitHandle} updateTodo={updateTodo} completed={state.completed} updateCompleted={updateCompleted}/>
				<FilterTodo updateOnlyMe={updateOnlyMe} onlyMe={state.onlyMe} updateFilterCompleted={updateFilterCompleted} filterCompleted={state.filterCompleted} />
				<Todos todos={filteredTodos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} updateTodoItem={updateTodoItem} />
			</main>
		</div>
	)
}

export default TodoApp
