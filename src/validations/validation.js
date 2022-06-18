import * as Yup from "yup"

Yup.setLocale({
	mixed: {
		required: 'Bu alan doldurulması zorunlu alandır',
		oneOf: 'Bunu işaretlemeniz gerekiyor'
	},
	string: {
		min: 'Bu alan minimum ${min} karakter olmalıdır',
		email: 'Geçerli bir e-posta adresi girmelisiniz'
	}
})

export default Yup
