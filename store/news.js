export const state = () => ({
	list: undefined,
	detail: undefined,
});

export const mutations = {
	updateList(state, list) {
		state.list = list;
	},
	updateDetail(state, detail) {
		state.detail = detail;
	},
};
export const getters = {
	getterList: state => {
		return state.list.map(function(item, index, array) {
			item.imgURL =
				(process.env.NODE_ENV !== 'production'
					? 'https://dsaaward.iprefer.com.tw/upload/News/'
					: 'https://www.dsaawards.com/upload/News/') + item.img_name;

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
	getterDetail: state =>{
		let detail = Object.assign({}, state.detail);
		console.log(detail);
		detail.imgURL =
			(process.env.NODE_ENV !== 'production'
				? 'https://dsaaward.iprefer.com.tw/upload/News/'
				: 'https://www.dsaawards.com/upload/News/') + detail.img_name;
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
		detail.dateMonth =
			months[parseInt(detail.created_at.split('/')[1], 10)];
		detail.dateDay = detail.created_at.split('/')[2];
		detail.shortenTitle =
			detail.title.substring(0, 25) +
			(detail.title.length > 24 ? '…' : '');
		return detail;
	},
};

// dispatch
export const actions = {
	fetchList(context) {
		context.commit('updateList', [
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
