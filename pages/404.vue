<template>
    <div class="404">
        404
    </div>
</template>

<script>
export default {
	asyncData({ redirect }) {
		return redirect('/');
	},
	head() {
		return {
			title: '登入',
		};
	},
	layout: 'layoutIndex',
	data() {
		return {};
	},
	methods: {},
	created() {
		// console.log('created');
	},

	mounted() {},
};
</script>

<style>
</style>

