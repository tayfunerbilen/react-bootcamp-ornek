import {useState} from "react";
import users from "../data/users.json"
import { useLocation, useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { login } from "../stores/auth";

export default function Login() {

	const dispatch = useDispatch()
	const location = useLocation()
	const navigate = useNavigate()

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [showLoginBox, setShowLoginBox] = useState(false)
	const { user } = useSelector(state => state.auth)

	const submitHandle = e => {
		e.preventDefault()

		const currentUser = users.find(user => user.username === username && password === password)
		if ( currentUser ) {
			dispatch(login(currentUser))
			navigate(location.state.return_url, {
				replace: true
			})
		} else {
			alert('Kullanıcı bulunamadı!')
		}

	}

	return (
		<div className="relative z-10">
			<button className="text-sm underline" onClick={() => setShowLoginBox(show => !show)}>Giriş Yap</button>
			{showLoginBox && (
				<div className="absolute top-full right-0 bg-white shadow-lg rounded translate-y-2 p-4 w-[300px]">
					<form className="grid gap-y-2" onSubmit={submitHandle}>
						<input type="text" className="h-10 text-sm px-2 rounded border border-gray-300" value={username} onChange={e => setUsername(e.target.value)} placeholder="Kullanıcı Adı" />
						<input type="password" className="h-10 text-sm px-2 rounded border border-gray-300" value={password} onChange={e => setPassword(e.target.value)} placeholder="Parola" />
						<button disabled={!username || !password} className="h-10 rounded-3xl bg-blue-700 text-white text-sm disabled:opacity-20 disabled:cursor-not-allowed">Giriş Yap</button>
					</form>
				</div>
			)}
		</div>
	)
}
