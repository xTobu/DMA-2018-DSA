export default function({ $axios, redirect }) {
	$axios.onRequest(config => {
        config.headers['Accept'] = 'application/json';
        // 傳送 cookies
		config.withCredentials = true;
		config.credentials = 'same-origin';

		console.warn('🌸 $axios request : ' + config.url);
	});

	$axios.onResponse(response => {
		// 判斷奇禾的 response.data.result ,如果是false 則進入 Promise.reject
		if (response.data.result === false) {
			console.error('💥 $axios catch : ', response);
			return Promise.reject(response);
		}
	});

	// $axios.onError(error => {
	// 	const code = parseInt(error.response && error.response.status);
	// 	if (code === 400) {
	// 		redirect('/400');
	// 	}
	// });
}
