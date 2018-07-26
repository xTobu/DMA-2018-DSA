import Vue from 'vue';
Vue.mixin({
	methods: {
        // _router.push
		util_LinkTo(path) {
			$nuxt._router.push(path);
		},
	},
});
