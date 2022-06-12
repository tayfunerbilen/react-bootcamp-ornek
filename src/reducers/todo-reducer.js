export default function reducer(state, action) {
	switch (action.type) {
		case 'UPDATE_TODO':
			return {
				...state,
				todo: action.value
			}
		case 'UPDATE_COMPLETED':
			return {
				...state,
				completed: action.value
			}

		case 'ADD_TODO':
			return {
				...state,
				todo: '',
				todos: [
					...state.todos,
					{
						title: action.todo,
						completed: state.completed,
						userId: action.userId
					}
				]
			}
		case 'DELETE_TODO':
			return {
				...state,
				todos: [
					...state.todos.filter((todo, index) => index !== action.index)
				]
			}
		case 'UPDATE_ONLY_ME':
			return {
				...state,
				onlyMe: !state.onlyMe
			}
		case 'UPDATE_FILTER_COMPLETED':
			return {
				...state,
				filterCompleted: action.value
			}
		case 'TOGGLE_TODO':
			return {
				...state,
				todos: [
					...state.todos.map((todo, index) => {
						if (action.index === index) {
							todo.completed = !todo.completed
						}
						return todo
					})
				]
			}
		case 'UPDATE_TODO_ITEM':
			return {
				...state,
				todos: [
					...state.todos.map((todo, index) => {
						if (action.index === index) {
							todo.title = action.value
						}
						return todo
					})
				]
			}

		case 'UPDATE_SEARCH':
			return {
				...state,
				search: action.value
			}
	}
}
