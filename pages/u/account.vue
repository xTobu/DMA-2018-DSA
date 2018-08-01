<template>
	<div class="userWrapper">
		<div class="wrap-form">
			<h5>登入資訊</h5>
			<div class="wrap-data">
				<div class="input-container form-50">
					<input class="input" id="taxid" type="text" pattern=".+" required>
					<label class="label" for="taxid">公司統編*</label>
				</div>
			</div>
		</div>
		<div class="wrap-form">
			<h5>個人資料編輯</h5>
			<div class="wrap-data">
				<div class="select select--white form-50">
					<span class="placeholder">稱謂*</span>
					<ul>
						<li>先生</li>
						<li>女士</li>
					</ul>
				</div>
				<div class="input-container form-50">
					<input class="input" id="acc-name" type="text" pattern=".+" required>
					<label class="label" for="acc-name">姓名*</label>
				</div>
				<div class="input-container form-50">
					<input class="input" id="acc-tittle" type="text" pattern=".+" required>
					<label class="label" for="acc-tittle">職稱*</label>
				</div>
				<div class="input-container form-50">
					<input class="input" id="acc-phone" type="text" pattern=".+" required>
					<label class="label" for="acc-phone">市話</label>
				</div>
				<div class="input-container form-50">
					<input class="input" id="acc-mobile" type="text" pattern=".+" required>
					<label class="label" for="acc-mobile">手機*</label>
				</div>
				<div class="input-container form-50">
					<input class="input" id="acc-email" type="text" pattern=".+" required>
					<label class="label" for="acc-email">電子信箱*</label>
				</div>
				<div class="input-container form-50">
					<input class="input" id="acc-backupMail" type="text" pattern=".+" required>
					<label class="label" for="acc-backupMail">備用信箱</label>
				</div>
			</div>
		</div>
		<div class="wrap-form">
			<h5>公司資料編輯</h5>
			<div class="wrap-data">
				<div class="input-container form-50">
					<input class="input" id="acc-company" type="text" pattern=".+" required>
					<label class="label" for="acc-company">公司中文名稱*</label>
				</div>
				<div class="input-container form-50">
					<input class="input" id="acc-companyEng" type="text" pattern=".+" required>
					<label class="label" for="acc-companyEng">公司英文名稱*</label>
				</div>
				<div class="input-container form-50">
					<input class="input" id="acc-companyPhone" type="text" pattern=".+" required>
					<label class="label" for="acc-companyPhone">公司電話*</label>
				</div>
				<div class="add-wrap">
					<div class="wrap-data"></div>
					<div class="select select--white form-add">
						<span class="placeholder">地址縣市*</span>
						<ul>
							<li>台北市</li>
							<li>新北市</li>
							<li>新竹市</li>
							<li>桃園縣</li>
							<li>台中市</li>
							<li>高雄市</li>
						</ul>
					</div>
					<div class="select select--white form-add">
						<span class="placeholder">行政區域*</span>
						<ul>
							<li>大安區</li>
							<li>信義區</li>
							<li>中山區</li>
							<li>五股區</li>
							<li>松山區</li>
							<li>萬華區</li>
							<li>內湖區</li>
							<li>天母區</li>
						</ul>
					</div>
					<div class="input-container form-50">
						<input class="input" id="acc-completeAdd" type="text" pattern=".+" required>
						<label class="label" for="acc-completeAdd">詳細地址*</label>
					</div>
				</div>
			</div>
		</div>
		<div class="wrap-form">
			<h5>你從哪裡得知的參賽信息</h5>
			<div class="wrap-data">
				<input class="radio-custom" id="from-dsa" name="from-dsa" type="radio">
				<label class="radio-custom-label radio-country" for="from-dsa">數位奇點獎官網</label>
				<input class="radio-custom" id="from-dsaFB" name="from-dsaFB" type="radio">
				<label class="radio-custom-label radio-country" for="from-dsaFB">數位奇點獎FB</label>
				<input class="radio-custom" id="from-dsaEDM" name="from-dsaEDM" type="radio">
				<label class="radio-custom-label radio-country" for="from-dsaEDM">數位奇點獎EDM</label>
			</div>
			<div class="from">
				<div class="wrap-from">
					<input class="radio-custom" id="from-r-partner" name="from-r-partner" type="radio">
					<label class="radio-custom-label radio-from" for="from-r-partner"></label>
					<div class="input-container form-from">
						<input class="input" id="from-partner" type="text" pattern=".+" required>
						<label class="label" for="from-partner">DSA數位奇點獎聯合推廣夥伴</label>
					</div>
				</div>
				<div class="wrap-from">
					<input class="radio-custom" id="from-r-third" name="from-r-third" type="radio">
					<label class="radio-custom-label radio-from" for="from-r-third"></label>
					<div class="input-container form-from">
						<input class="input" id="from-third" type="text" pattern=".+" required>
						<label class="label" for="from-third">第三方媒體</label>
					</div>
				</div>
				<div class="wrap-from">
					<input class="radio-custom" id="from-r-expert" name="from-r-expert" type="radio">
					<label class="radio-custom-label radio-from" for="from-r-expert"></label>
					<div class="input-container form-from">
						<input class="input" id="from-expert" type="text" pattern=".+" required>
						<label class="label" for="from-expert">專家評委推薦</label>
					</div>
				</div>
				<div class="wrap-from">
					<input class="radio-custom" id="from-r-dma" name="from-r-dma" type="radio">
					<label class="radio-custom-label radio-from" for="from-r-dma"></label>
					<div class="input-container form-from">
						<input class="input" id="from-dma" type="text" pattern=".+" required>
						<label class="label" for="from-dma">DMA 會員推薦</label>
					</div>
				</div>
				<div class="wrap-from">
					<input class="radio-custom" id="from-r-PA" name="from-r-PA" type="radio">
					<label class="radio-custom-label radio-from" for="from-r-PA"></label>
					<div class="select select--white form-from2">
						<span class="placeholder">公協會*</span>
						<ul>
							<li>TAAA</li>
							<li>TAAA</li>
							<li>TAAA</li>
							<li>TAAA</li>
						</ul>
					</div>
				</div>
				<div class="wrap-from">
					<input class="radio-custom" id="from-r-other" name="from-r-other" type="radio">
					<label class="radio-custom-label radio-from" for="from-r-other"></label>
					<div class="input-container form-from">
						<input class="input" id="from-other" type="text" pattern=".+" required>
						<label class="label" for="from-other">其他</label>
					</div>
				</div>
			</div>
		</div>

		<div class="google-robot"><img src="img/google.gif"></div>
		<div class="btn_wrap btn_wrap2">
			<a class="btn-confirm" href="#">
				<span class="txt">確定提交</span>
				<span class="arrow"></span>
			</a>
			<a class="btn-cancel" href="#">
				<span class="txt">取消編輯</span>
				<span class="arrow"></span>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	fetch({ store, params, query, app }) {
		store.commit('user/commitNavibarTitle', '編輯個人資料');
	},
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

