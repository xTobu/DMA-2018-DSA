<template>
    <div class="userWrapper">
        <!--add works-->
        <div class="total">
            <p>目前合計報名 {{computedListCount}} 個獎項，尚未繳費作品共 {{computedUnpaidCount}} 筆</p>
            <!--add btn-->
            <a class="btn-add" href="#" @click.prevent="util_LinkTo('/u/worksAdd')">
                <span class="add por"></span>
                <span class="txt">添加作品</span>
            </a>
        </div>

        <!--works content list-->

        <template v-for="(item, index) in data.list">
            <div class="list-form" :key="'list-form-'+index" v-show="item.status!=='9'">
                <table>
                    <tbody>
                        <tr>
                            <th>日期</th>
                            <th>作品編號</th>
                            <th>作品名稱</th>
                            <th>客戶名稱</th>
                            <th>參賽類別</th>
                            <th>參賽項目</th>
                        </tr>
                        <tr>
                            <td>{{item.created_at}}</td>
                            <td>{{item.p_key}}</td>
                            <td>{{item.title}}</td>
                            <td>{{item.customer_name}}</td>
                            <td>{{convertMainType(item.main_type)}}</td>
                            <td>{{convertSubType(item.main_type,item.sub_type)}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="check-list" :key="'check-list-'+index" v-show="item.status!=='9'">
                <ul>
                    <li>參賽表
                        <span>
                            <img v-if="item.registration_file" src="~assets/svg/circle.svg">
                            <img v-else src="~assets/svg/cross.svg">
                        </span>
                        

                    </li>
                    <li>作品說明
                        <span>
                            <img v-if="item.exposition_file" src="~assets/svg/circle.svg">
                            <img v-else src="~assets/svg/cross.svg">
                        </span>

                    </li>
                    <li>影片連結
                        <span>
                            <img v-if="item.case_film_url" src="~assets/svg/circle.svg">
                            <img v-else src="~assets/svg/cross.svg">
                        </span>
                    </li>

                </ul>
                <a class="btn-check-list" href="#" @click.prevent="handleGoDetail(item.p_key)">
                    <span class="txt">作品詳情</span>
                    <span class="arrow"></span>
                </a>
            </div>

        </template>
        <!-- <div class="list-form">
			<table>
				<tbody>
					<tr>
						<th>日期</th>
						<th>作品編號</th>
						<th>作品名稱</th>
						<th>客戶名稱</th>
						<th>參賽類別</th>
						<th>參賽項目</th>
					</tr>
					<tr>
						<td>2018/07/09</td>
						<td>2018/07/09</td>
						<td>豐富的人生</td>
						<td>白蘭氏</td>
						<td>數位創意類</td>
						<td>最佳互動影片創意獎</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="check-list">
			<ul>
				<li>參賽表
					<span><img src="~assets/svg/circle.svg"></span>
				</li>
				<li>參賽表
					<span><img src="~assets/svg/circle.svg"></span>
				</li>
				<li>參賽表
					<span><img src="~assets/svg/cross.svg"></span>
				</li>
				<li>參賽表
					<span><img src="~assets/svg/circle.svg"></span>
				</li>
			</ul>
			<a class="btn-check-list" href="#">
				<span class="txt">作品詳情</span>
				<span class="arrow"></span>
			</a>
		</div> -->

        <div class="sum">
            <span>合計須繳交費用為新台幣</span>
            <span class="num">{{computedTotal}}</span>
            <span>元</span>
        </div>
        <div class="works-info">
            <h5>注意事項</h5>
            <p>收件截止日期為2018年9月20日，繳費結算日為9月20日晚上 12:00 前。請於收件截止日期，完成所有資料的確認。<br>超過收件截止日期後，相關上傳作品之資料及附件無法重新進行編輯及修改。</p>
            <h5>繳費方式</h5>
            <p>參賽作品資料上傳後，請迅速為該作品支付參賽費。<br>系統會為參賽單位計算出報名費總金額，最晚請於 9月20日 晚上 12:00 前匯款。</p>
            <ul>匯款後請備妥
                <li>匯款証明掃瞄圖檔(拍照亦可)</li>
                <li>匯款帳號後五碼</li>
                <li>匯款之專案名稱，如有多筆，需全數列出</li>
                <li>收據收件人姓名 / 收件地址 / 連絡電話</li>
            </ul>
            <p>備妥上述資訊寄送至活動主辨單位窗口（ 02-7718-0056，dsa＠dma.org.tw，連小姐 ）收到匯款後，DSA數位奇點獎執委會會儘快依據您所提供的訊息，寄送收據給您，請確保線上填寫資料的正確性，最遲不超過頒獎典禮後一個月。</p>
            <p>
                <span class="gt">報名費用：</span>會員NTD$3,500元/件/項，非會員NTD$5,000元/件/項。單一報名單位報名10件（含）以上，享八折優惠。<br>
                <span class="gt">戶名：</span>台灣數位媒體應用暨行銷協會邵懿文<br>
                <span class="gt">銀行：</span>上海商業儲蓄銀行011 信義分行0185<br>
                <span class="gt">帳號：</span>181020000 25680</p>
        </div>
    </div>
</template>

<script>
import qs from 'qs';
export default {
	asyncData({ redirect }) {},
	fetch({ store, params, query, app }) {
		store.commit('user/commitNavibarTitle', '我的參賽作品');
	},
	head() {
		return {
			title: '線上報名',
		};
	},
	layout: 'layoutUser',
	data() {
		return {
			data: {
				result: '',
				member: '',
				list: [],
			},
		};
	},
	computed: {
		computedTotal() {
			// 報名費用：會員NTD$3,500元/件/項，非會員NTD$4,000元/件/項。報名10件（含）以上，享八折優惠。
			let count = this.data.list.length;
			let price =
				count *
				(count >= 10 ? 0.8 : 1) *
				(this.data.member ? 3500 : 5000);

			return this.util_thousandComma(parseInt(price, 10));
		},

		computedListCount() {
			return this.data.list.length;
		},
		computedUnpaidCount() {
			return this.data.list.reduce(function(accumulator, currentValue) {
				if (currentValue.status === '1') accumulator++;
				return accumulator;
			}, 0);
		},
	},
	methods: {
		convertMainType(data) {
			let main_type = '';
			switch (data) {
				case 'A':
					main_type = '數位創意類';
					break;
				case 'B':
					main_type = '創新應用技術類';
					break;
				case 'C':
					main_type = '整合行銷類';
					break;
				case 'D':
					main_type = '媒體應用類';
					break;
			}
			return main_type;
		},
		convertSubType(main_data, sub_data) {
			let sub_type = '';
			let objSubType = {
				A: [
					'最佳廣告文案創意獎',
					'最佳社群文案創意獎',
					'最佳展示廣告創意獎',
					'最佳影片創意獎',
					'最佳短影片創意獎',
					'最佳互動影片創意獎',
					'最佳使用者體驗(UX)創意獎',
					'最佳活動網站及APP 創意獎',
					'最佳企業網站及APP 創意獎',
				],
				B: [
					'最佳AR/VR 應用獎',
					'最佳網站技術應用獎',
					'最佳廣告技術應用獎',
					'最佳互動裝置應用獎',
					'最佳數位服務體驗應用獎',
					'最佳數據應用獎',
					'最佳loT 應用獎',
					'最佳AI 應用獎',
				],
				C: [
					'最佳社群行銷獎',
					'最佳跨媒體整合行銷獎',
					'最佳數位平台整合行銷獎',
					'最佳內容行銷獎',
					'最佳O2O行銷獎',
					'最佳程序化行銷獎',
					'最佳行動行銷獎',
					'最佳策展行銷獎',
					'最佳電子商務行銷獎',
					'最佳KOL獎',
				],
				D: [
					'最佳DMP應用獎',
					'最佳使用者體驗(UX)創意獎',
					'最佳策展行銷獎',
					'最佳媒體行銷技術獎',
					'最佳媒體內容行銷獎',
					'最佳直播行銷運用獎',
				],
			};
			return objSubType[main_data][parseInt(sub_data, 10) - 1];
		},
		handleGoDetail(id) {
			$nuxt._router.push({ name: 'u-worksDetail', query: { id: id } });
			// $nuxt._router.push({ name: 'news-id', params: { id: id } });
		},
		async getRegistrationFileName(p_key) {
			this.$axios({
				method: 'POST',
				data: $.param({ act_mode: 'getportfolio', p_key }),
				url: '/portfolios.ashx',
			})
				.then(res => {
                    console.log(res.data.portfolio.registration_file)
					return res.data.portfolio.registration_file;
				})
				.catch(err => {});
			// return p_key;
		},
		getExpositionFileName(p_key) {
			this.$axios({
				method: 'POST',
				data: $.param({ act_mode: 'getportfolio', p_key }),
				url: '/portfolios.ashx',
			})
				.then(res => {
					return res.data.portfolio.exposition_file;
				})
				.catch(err => {});
			// return p_key;
		},
	},
	created() {},

	mounted() {
		// console.log(this.$store.state.user);

		this.$axios({
			method: 'POST',
			data: qs.stringify({ act_mode: 'getportfolio_list' }),
			url: '/portfolios.ashx',
		})
			.then(response => {
				// console.log('mounted', response.data);
				this.data = response.data;
			})
			.catch(err => {});
	},
};
</script>

<style scoped>
@import '~/assets/css/regist.css';
</style>

