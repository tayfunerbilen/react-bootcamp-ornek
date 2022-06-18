import Yup from "./validation"

export const LoginSchema = Yup.object().shape({
	username: Yup.string()
		.required(),
	password: Yup.string()
		.required()
})
