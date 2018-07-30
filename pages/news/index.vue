<template>
    <div class="popup-news-index" style="display:none;">
        
    </div>
</template>

<script>
export default {
	asyncData({ redirect }) {
	},
	head() {
		return {
			title: '最新消息',
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

<style scoped>
</style>

