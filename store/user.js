import Vue from 'vue';

export const state = () => ({
	navibar: { title: '' },
	data: undefined,
});

// commit
export const mutations = {
	commitNavibarTitle(state, title) {
		state.navibar.title = title;
	},
	commitData(state, data) {
		Vue.set(state, 'data', data);
	},
};

// dispatch
export const actions = {};

export const getters = {};
