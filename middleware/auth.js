import axios from 'axios';
import qs from 'qs';
export default function({ app, redirect ,store}) {
	//console.log(store.state.user)
	return app
		.$axios({
			method: 'POST',
			data: qs.stringify({
				act_mode: 'mydata',
			}),
			url: '/user.ashx',
		})
		.then(response => {
			// store.commit['user/commitDataUser']
			store.commit('user/commitDataUser', response.data.user);
			// console.log(response.data);
		})
		.catch(response => {
			// console.log(response);
			redirect('/login');
		});
}
