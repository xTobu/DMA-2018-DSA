<template>
	<div class="userWrapper">
		<!--add works-->
		<div class="total">
			<p>目前合計報名 2 個獎項，尚未繳費作品共 2 筆</p>
			<!--add btn-->
			<a class="btn-add" href="#" @click.prevent="util_LinkTo('/u/worksAdd')">
				<span class="add por"></span>
				<span class="txt">添加作品</span>
			</a>
		</div>

		<!--works content list-->
		<div class="list-form">
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
		</div>

		<div class="list-form">
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
		</div>

		<div class="sum">
			<span>目前合計須繳交費用為新台幣</span>
			<span class="num">8000</span>
			<span>元</span>
		</div>
		<div class="works-info">
			<h5>注意事項</h5>
			<p>收件截止日期為106年11月15日，繳費結算日為11月15日晚上 12:00 前。請於收件截止日期，完成所有資料的確認。<br>超過收件截止日期後，相關上傳作品之資料及附件無法重新進行編輯及修改。</p>
			<h5>繳費方式</h5>
			<p>參賽作品資料上傳後，請迅速為該作品支付參賽費。<br>系統會為參賽單位計算出報名費總金額，最晚請於 11月15日 晚上 12:00 前匯款。</p>
			<ul>匯款後請備妥
				<li>匯款証明掃瞄圖檔(拍照亦可)</li>
				<li>匯款帳號後五碼</li>
				<li>匯款之專案名稱，如有多筆，需全數列出</li>
				<li>收據收件人姓名 / 收件地址 / 連絡電話</li>
			</ul>
			<p>備妥上述資訊寄送至活動主辨單位窗口（ 02-7718-0056，dsa＠dma.org.tw，連小姐 ）收到匯款後，DSA數位奇點獎執委會會儘快依據您所提供的訊息，寄送收據給您，請確保線上填寫資料的正確性，最遲不超過頒獎典禮後一個月。</p>
			<p>
				<span class="gt">報名費用：</span>會員NTD$3,500元/件/項，非會員NTD$4,000元/件/項。報名10件（含）以上，享八折優惠。<br>
				<span class="gt">戶名：</span>台灣數位媒體應用暨行銷協會邵懿文<br>
				<span class="gt">銀行：</span>上海商業儲蓄銀行 信義分行<br>
				<span class="gt">帳號：</span>181020000 25680</p>
		</div>
	</div>
</template>

<script>
export default {
	asyncData({ redirect }) {},
	head() {
		return {
			title: '線上報名',
		};
	},
	layout: 'layoutUser',
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
@import '~/assets/css/regist.css';
</style>

