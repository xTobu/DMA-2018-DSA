export const state = () => ({
	list: undefined

});

export const mutations = {
	updateList(state, list) {
        console.log(list);
		state.list = list
	},
};
