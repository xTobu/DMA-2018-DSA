import axios from 'axios';
import qs from 'qs';
export default function({ app, route, redirect }) {
	return app.$axios({
		method: 'POST',
		data: qs.stringify({
			act_mode: 'mydata',
		}),
		url: '/user.ashx',
	})
		.then(response => {
			// console.log(response);
		})
		.catch(response => {
			// console.log(response);
			redirect('/login');
		});
}
