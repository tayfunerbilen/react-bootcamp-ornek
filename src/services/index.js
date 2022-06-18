import toast from "react-hot-toast";
import store from "../stores";

function parseData(data) {
	const formData = new FormData()
	const {auth: {user}} = store.getState()
	if (user) {
		formData.append('token', user.token)
	}
	for (let [key, value] of Object.entries(data)) {
		formData.append(key, value)
	}
	return formData
}

function request(url, data = false, method = 'GET') {
	return new Promise(async (resolve, reject) => {

		const {auth: {user}} = store.getState()

		const options = {
			method
		}
		if (data) {
			options.body = parseData(data)
		}

		/*
		if (user) {
			const headers = new Headers()
			headers.append('Authorization', 'Bearer ' + user.token)
			options.headers = headers
		}
		 */

		const response = await fetch(process.env.REACT_APP_API_URL + url, options)
		const data2 = await response.json()
		if (response.ok) {
			if (data2?.error) {
				toast.error(data2.error)
				reject(data2.error)
			} else {
				if (data2?.message) {
					toast.success(data2.message)
				}
				resolve(data2)
			}
		} else {
			reject(data2)
		}
	})
}

export const post = (url, data) => request(url, data, 'POST')
export const get = url => request(url)
