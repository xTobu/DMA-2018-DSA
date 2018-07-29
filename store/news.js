export const state = () => ({
	list: undefined

});

export const mutations = {
	updateList(state, list) {
		state.list = list
	},
};

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
			}

		])
	},
};
