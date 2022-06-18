import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : false
}

const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action) => {
			localStorage.setItem('user', JSON.stringify(action.payload))
			state.user = action.payload
		},
		logout: (state) => {
			localStorage.removeItem('user')
			state.user = false
		}
	}
})

export const { login, logout } = auth.actions
export default auth.reducer
