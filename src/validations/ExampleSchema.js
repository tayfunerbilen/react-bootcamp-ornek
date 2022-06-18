import Yup from "./validation"

export const ExampleSchema = Yup.object().shape({
	name: Yup.string()
		.required(),
	surname: Yup.string()
		.required(),
	about: Yup.string()
		.required()
		.min(20),
	gender: Yup.string()
		.required(),
	rules: Yup.boolean()
		.oneOf([true]),
	level: Yup.string()
		.required(),
	avatar: Yup.mixed().test({
		message: 'Bir dosya seçmelisin',
		test: file => file?.name
	})
})
