import Vue from 'vue';
Vue.mixin({
	methods: {
		util_LinkTo(path) {
			$nuxt._router.push(path);
		},
	},
});
