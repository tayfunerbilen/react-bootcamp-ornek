import { useSelector, useDispatch } from "react-redux";
import { setTheme, setLanguage } from "../stores/site";
import { logout } from "../stores/auth";

export default function SwitchAction() {

	const dispatch = useDispatch()
	const { theme, language } = useSelector(state => state.site)
	const { user } = useSelector(state => state.auth)

	const switchTheme = () => {
		dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
	}

	const switchLanguage = () => {
		dispatch(setLanguage(language === 'tr' ? 'en' : 'tr'))
	}

	const logoutHandle = () => {
		dispatch(logout())
	}

	return (
		<nav className="text-sm flex gap-x-4">
			<button onClick={switchTheme}>Temayı Değiştir = {theme}</button>
			<button onClick={switchLanguage}>Dili Değiştir = {language}</button>
			{user && <button onClick={logoutHandle}>Çıkış yap</button>}
		</nav>
	)
}
