import Vue from 'vue'

export const state = () => ({
	list: undefined,
	detail: undefined,
});

export const mutations = {
	updateList(state, list) {
		state.list = list;
	},
	updateDetail(state, detail) {
		console.log('mutations updateDetail');
		// console.log('detail',detail);
		// state.detail = detail;
		console.log(state);
		let imgURL =
			(process.env.NODE_ENV !== 'production' ?
				'https://dsaaward.iprefer.com.tw/upload/News/' :
				'https://www.dsaawards.com/upload/News/') + detail.img_name;
		var months = [
			'JAN',
			'FEB',
			'MAR',
			'APR',
			'MAY',
			'JUN',
			'JUL',
			'AUG',
			'SEP',
			'OCT',
			'NOV',
			'DEC',
		];

		let dateMonth =
			months[parseInt(detail.created_at.split('/')[1], 10)];
		let dateDay = detail.created_at.split('/')[2];
		let shortenTitle =
			detail.title.substring(0, 25) +
			(detail.title.length > 24 ? '…' : '');
		// vue 資料監控規則
		//https://stackoverflow.com/questions/40860592/vuex-getter-not-updating
		//https://vuejs.org/v2/guide/list.html#Caveats
		Vue.set(state, 'detail', Object.assign(detail, {
			imgURL,
			dateMonth,
			dateDay,
			shortenTitle
		}));
	},
};
export const getters = {
	getterList: state => {
		return state.list.map(function (item, index, array) {
			item.imgURL =
				(process.env.NODE_ENV !== 'production' ?
					'https://dsaaward.iprefer.com.tw/upload/News/' :
					'https://www.dsaawards.com/upload/News/') + item.img_name;

			var months = [
				'JAN',
				'FEB',
				'MAR',
				'APR',
				'MAY',
				'JUN',
				'JUL',
				'AUG',
				'SEP',
				'OCT',
				'NOV',
				'DEC',
			];
			item.dateMonth =
				months[parseInt(item.created_at.split('/')[1], 10)];
			item.dateDay = item.created_at.split('/')[2];
			item.shortenTitle =
				item.title.substring(0, 25) +
				(item.title.length > 24 ? '…' : '');
			return item;
		});
	},
	getterDetail: state => {
		console.log('getters getterDetail');

		// Vue.set(state.detail, 'imgURL', imgURL)
		// Vue.set(state, 'detail', {
		// 	imgURL: imgURL,
		// 	dateMonth: dateMonth,
		// 	dateDay: dateDay,
		// 	shortenTitle:shortenTitle,
		// });

		// console.log(state.detail);
		return state.detail;
	},
};

// dispatch
export const actions = {
	fetchList(context) {
		context.commit('updateList', [{
				n_key: 'SYkWWfNItx',
				img_name: 'aaa.jpg',
				title: '我是標題',
				summary: '我是摘要',
				created_at: '2017/10/02',
			},
			{
				n_key: 'SYkWWfNItx',
				img_name: 'aaa.jpg',
				title: '我是標題',
				summary: '我是摘要',
				created_at: '2017/10/02',
			},
			{
				n_key: 'SYkWWfNItx',
				img_name: 'aaa.jpg',
				title: '我是標題',
				summary: '我是摘要',
				created_at: '2017/10/02',
			},
		]);
	},
};
