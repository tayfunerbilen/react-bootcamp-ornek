import {Formik, Form} from "formik"
import {Input, Button} from "../../components/form";
import {LoginSchema} from "../../validations";
import {login} from "../../services/auth";
import {login as loginAuth} from "../../stores/auth"
import {useDispatch, useSelector} from "react-redux";
import {Navigate, useNavigate, useLocation, NavLink} from "react-router-dom";

export default function Login() {

	const dispatch = useDispatch()
	const navigate = useNavigate()
	const location = useLocation()
	const {user} = useSelector(state => state.auth)

	if (user) {
		return <Navigate to="/"/>
	}

	return (
		<Formik
			validationSchema={LoginSchema}
			initialValues={{
				username: '',
				password: ''
			}}
			onSubmit={async (values, actions) => {
				const response = await login(values)
				if (response) {
					dispatch(loginAuth(response.user))
					navigate(location?.state?.return_url || '/', {
						replace: true
					})
				}
				actions.setSubmitting(false)
			}}
		>
			{({isSubmitting}) => (
				<Form className="w-[500px] grid gap-y-4 bg-white p-6 rounded">
					<h1 className="text-2xl font-bold mb-3">Giriş Yap</h1>
					<Input label="Kullanıcı Adın" name="username"/>
					<Input label="Şifren" type="password" name="password"/>
					<Button loading={isSubmitting} type="submit">Giriş Yap</Button>
					<span className="text-center text-sm text-gray-500">ya da</span>
					<NavLink className="text-center text-sm font-medium text-blue-600" to="/auth/register">Kayıt olmak için
						tıklayın</NavLink>
				</Form>
			)}
		</Formik>
	)
}
