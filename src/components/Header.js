import {memo, useState} from "react";
import { useSite, useAuth } from "../context";
import SearchTodo from "./SearchTodo";
import Login from "./Login";

const Header = ({ search, searchHandle }) => {
	console.log('header rendered')
	const { theme, setTheme, language, setLanguage } = useSite()
	const { user, setUser } = useAuth()

	const logoutHandle = () => {
		setUser(false)
	}

	return (
		<header className="h-[60px] bg-gray-200 dark:bg-black flex justify-between items-center px-4">
			<h1 className="text-xl font-medium">TodoApp</h1>
			<SearchTodo search={search} searchHandle={searchHandle} />
			<div className="flex gap-x-4">
				<button className="h-8 rounded-2xl px-3 text-sm text-white bg-black dark:text-black dark:bg-white" onClick={() => setTheme(theme => theme === 'light' ? 'dark' : 'light')}>
					{theme === 'light' ? 'Koyu Tema' : 'Açık Tema'}
				</button>
				{!user && <Login /> || (
					<div className="flex gap-x-2 items-center">
						{user.username}
						<button className="text-sm underline" onClick={logoutHandle}>Çıkış Yap</button>
					</div>
				)}
			</div>
		</header>
	)
}

export default memo(Header)
