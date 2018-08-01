<template>
	<div class="popup-news" style="">
		<div class="news-expand">
			<a class="btn-close" href="#" @click.prevent="handleClose"></a>
			<div class="news-date-expand">
				<div class="wrap-date">
					<div class="month">{{vuexNewsDetail.dateMonth}}</div>
					<div class="day">{{vuexNewsDetail.dateDay}}</div>
				</div>
			</div><img :src="vuexNewsDetail.imgURL">
			<div class="wrap-news-content">
				<h4>{{vuexNewsDetail.title}}</h4>

				<div class="newscontent" v-html="vuexNewsDetail.content" />

				<!-- <h6>讓技術引領內容</h6>
            <p>比如老字號《華盛頓郵報》或是中國新品牌《今日頭條》，一個轉型成功，一個新創有成，關鍵因素不在於內容製作，而是導入新的科技，透過跨平台串接、數據整合到社群互動，幫助媒體不論在內容遞送，或是廣告推播上，都做到了以前媒體不太能做到的事，因此對於轉型或發展中的數位媒體，需要更多的整合工具，加入技術的思考與資源，協助品牌客戶在符合屬性的傳播媒體管道上，搭配不同的素材組合推出合適的廣告類型。事實上，台灣本地已有網路原生媒體平台積極操作此種路線。</p>
            <h6>讓技術引領內容</h6>
            <p>比如老字號《華盛頓郵報》或是中國新品牌《今日頭條》，一個轉型成功，一個新創有成，關鍵因素不在於內容製作，而是導入新的科技，透過跨平台串接、數據整合到社群互動，幫助媒體不論在內容遞送，或是廣告推播上，都做到了以前媒體不太能做到的事，因此對於轉型或發展中的數位媒體，需要更多的整合工具，加入技術的思考與資源，協助品牌客戶在符合屬性的傳播媒體管道上，搭配不同的素材組合推出合適的廣告類型。事實上，台灣本地已有網路原生媒體平台積極操作此種路線。</p> -->

			</div>
		</div>
	</div>
</template>

<script>
import qs from 'qs';
import { mapGetters } from 'vuex';
export default {
	asyncData({ redirect }) {},
	async fetch({ store, params, query, app }) {
		await app
			.$axios({
				method: 'POST',
				data: qs.stringify({ act_mode: 'detail', key: params.id }),
				url: '/getNews.ashx',
			})
			.then(response => {
				store.commit('news/updateDetail', response.data.detail);
			})
			.catch(err => {});
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
	computed: {
		vuexNewsDetail() {
			// return this.$store.state.news.detail
			return this.$store.getters['news/getterDetail'];
		},
		vuexNewsVisited() {
			return this.$store.state.news.visited;
		},
	},

	methods: {
		handleClose() {
			this.$store.state.news.visited
				? $nuxt._router.back()
				: $nuxt._router.push('/news');
		},
	},
	created() {},

	mounted() {
	},
};
</script>

<style scoped>
@import '~/assets/css/news.css';
.newscontent {
	font-size: 16px;
	font-weight: 300;
	line-height: 2;
}
</style>

