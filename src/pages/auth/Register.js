import {useDispatch, useSelector} from "react-redux";
import {Navigate, NavLink, useLocation, useNavigate} from "react-router-dom";
import {Form, Formik} from "formik";
import {RegisterSchema} from "../../validations";
import {register} from "../../services/auth";
import {login as loginAuth} from "../../stores/auth";
import {Button, Input} from "../../components/form";

export default function Register() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const location = useLocation()
	const {user} = useSelector(state => state.auth)

	if (user) {
		return <Navigate to="/"/>
	}

	return (
		<Formik
			validationSchema={RegisterSchema}
			initialValues={{
				username: '',
				password: '',
				email: ''
			}}
			onSubmit={async (values, actions) => {
				const response = await register(values)
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
					<h1 className="text-2xl font-bold mb-3">Kayıt Ol</h1>
					<Input label="Kullanıcı Adın" name="username"/>
					<Input label="Şifren" type="password" name="password"/>
					<Input label="E-posta Adresin" type="email" name="email"/>
					<Button loading={isSubmitting} type="submit">Kayıt Ol</Button>
					<span className="text-center text-sm text-gray-500">ya da</span>
					<NavLink className="text-center text-sm font-medium text-blue-600" to="/auth/login">Giriş yapmak için
						tıklayın</NavLink>
				</Form>
			)}
		</Formik>
	)
}
