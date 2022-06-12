function request(url, data = false, method = 'GET') {
	return new Promise((resolve, reject) => {
		const options = {
			method
		}
		if (data) {
			options.body = JSON.stringify(data)
		}
		fetch(process.env.REACT_APP_API_URL + url, options)
			.then(res => res.json())
			.then(res => resolve(res))
			.catch(err => reject(err))
	})
}

export const post = (url, data) => request(url, data, 'POST')
export const get = url => request(url)
