import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	theme: localStorage.getItem('theme') || 'light',
	language: localStorage.getItem('language') || 'tr'
}

const site = createSlice({
	name: 'site',
	initialState,
	reducers: {
		setTheme: (state, action) => {
			localStorage.setItem('theme', action.payload)
			state.theme = action.payload
		},
		setLanguage: (state, action) => {
			localStorage.setItem('language', action.payload)
			state.language = action.payload
		}
	}
})

export const { setTheme, setLanguage } = site.actions
export default site.reducer
