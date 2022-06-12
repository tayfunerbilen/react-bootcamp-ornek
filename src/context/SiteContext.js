import {createContext, useContext, useEffect, useState} from "react";

const Context = createContext()

const Provider = ({ children }) => {

	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
	const [language, setLanguage] = useState(localStorage.getItem('language') || 'tr')

	useEffect(() => {
		localStorage.setItem('theme', theme)
		localStorage.setItem('language', language)
	}, [theme, language])

	const data = {
		theme,
		setTheme,
		language,
		setLanguage
	}

	return (
		<Context.Provider value={data}>
			{children}
		</Context.Provider>
	)

}

export const useSite = () => useContext(Context)
export default Provider
