import Yup from "./validation"

export const RegisterSchema = Yup.object().shape({
	username: Yup.string()
		.required(),
	password: Yup.string()
		.required(),
	email: Yup.string()
		.required()
		.email()
})
