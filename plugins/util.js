import Vue from 'vue';
Vue.mixin({
	methods: {
        // $nuxt_router.push
		util_LinkTo(path) {
			$nuxt._router.push(path);
		},
	},
});
