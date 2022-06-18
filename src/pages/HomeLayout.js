import {Outlet} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../stores/auth";

export default function HomeLayout() {

	const dispatch = useDispatch()
	const logoutHandle = () => {
		dispatch(logout())
	}

	return (
		<>
			<nav className="h-[60px] bg-black text-white mb-4">
				<h1>TodoApp</h1>
				<button onClick={logoutHandle}>Çıkış yap</button>
			</nav>
			<Outlet/>
		</>
	)
}
