<template>
	<div class="userWrapper">
		<p>請填寫以下作品詳細資料。在2017年11月10日報名截止前，您隨時可以保存，且可隨時返回該頁面完成參賽資料的填寫。 </p>
		<div class="wrap-form">
			<h5>作品基本資料</h5>
			<div class="wrap-data">
				<div class="input-container form-50">
					<input class="input" id="worksName" type="text" pattern=".+" required v-model="Form.title">
					<label class="label" for="worksName">作品名稱*</label>
				</div>
				<div class="input-container form-50">
					<input class="input" id="worksNameEN" type="text" pattern=".+" required v-model="Form.title_eng">
					<label class="label" for="worksNameEN">作品名稱(英文)*</label>
				</div>
				<div class="input-container form-50">
					<input class="input" id="agency" type="text" pattern=".+" required v-model="Form.company_name">
					<label class="label" for="agency">參賽公司名稱*</label>
				</div>
				<div class="input-container form-50">
					<input class="input" id="agencyEN" type="text" pattern=".+" required v-model="Form.company_engname">
					<label class="label" for="agencyEN">參賽公司名稱(英文)*</label>
				</div>
				<div class="input-container form-50">
					<input class="input" id="client" type="text" pattern=".+" required v-model="Form.customer_name">
					<label class="label" for="client">客戶公司名稱</label>
				</div>
				<div class="input-container form-50">
					<input class="input" id="clientEN" type="text" pattern=".+" required v-model="Form.customer_engname">
					<label class="label" for="clientEN">客戶公司名稱(英文)</label>
				</div>
				<div class="input-container form-50">
					<input class="input" id="brand" type="text" pattern=".+" required v-model="Form.customer_brandname">
					<label class="label" for="brand">客戶品牌名稱</label>
				</div>
				<div class="input-container form-50">
					<input class="input" id="brandEN" type="text" pattern=".+" required v-model="Form.customer_engbrandname">
					<label class="label" for="brandEN">客戶品牌名稱(英文)</label>
				</div>
			</div>
		</div>
		<div class="wrap-form">
			<h5>專案聯絡人*</h5>
			<p>請填寫專案相關資訊聯繫窗口之聯繫方式</p>
			<div class="wrap-data">
				<div class="input-container form-50">
					<input class="input" id="contactName" type="text" pattern=".+" required v-model="Form.contact_name">
					<label class="label" for="contactName">聯絡人姓名*</label>
				</div>
				<div class="input-container form-50">
					<input class="input" id="contactPhone" type="text" pattern=".+" required v-model="Form.contact_phone">
					<label class="label" for="contactPhone">聯絡人手機*</label>
				</div>
				<div class="input-container form-50">
					<input class="input" id="contactEmail" type="text" pattern=".+" required v-model="Form.contact_email">
					<label class="label" for="contactEmail">聯絡人電子信箱*</label>
				</div>
			</div>
		</div>
		<div class="wrap-form">
			<h5>參賽類別*</h5>
			<p>類別及項目一經選定，日後無法修改，請正確選擇參賽類別</p>
			<div class="wrap-data">
				<div class="select select--white form-50" data-form-type="main_type">
					<span class="placeholder">{{Form.main_type}}</span>
					<ul>
						<li>數位創意類</li>
						<li>創新應用技術類</li>
						<li>整合行銷類</li>
						<li>媒體應用類</li>
					</ul>
				</div>
				<div class="select select--white form-50" data-form-type="sub_type">
					<span class="placeholder">{{Form.sub_type}}</span>
					<ul>
						<li>最佳廣告文案創意獎</li>
						<li>最佳社群文案創意獎</li>
						<li>最佳展示廣告創意獎</li>
						<li>最佳影片創意獎</li>
						<li>最佳短影片創意獎</li>
						<li>最佳互動影片創意獎</li>
						<li>最佳使用者體驗(UX)創意獎</li>
						<li>最佳活動網站及APP 創意獎</li>
						<li>最佳企業網站及APP 創意獎</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="wrap-form">
			<h5>作品概述*</h5>
			<ul>
				<li>請總結參賽作品的背景目標、創新概念、執行手段與達成（或預計）的效果，並提供一份作品概述，字數以300字為上限。</li>
				<li>若貴公司作品最終獲獎或入圍，將會在後續的推廣與展示宣傳中用到該概述。</li>
			</ul>
			<textarea class="text-area" placeholder="請輸入作品概述" rows="8"  v-model="Form.summary"></textarea>
		</div>
		<div class="wrap-form">
			<h5>上傳相關報名文件*</h5>
			<ul>
				<li>上傳參賽表及作品說明為必須選項，且僅支援PDF格式，請參賽者事先將已填寫完成之WORD檔及PPT檔轉換為PDF檔。</li>
				<li>若您尚未下載報名表及作品說明範本的話，請由
					<a href="#"> 此處下載</a>
				</li>
				<li>影片連結及圖片檔案為非必須選項。但是製作良好的作品介紹影片case film，有助於評審更快速及深入的理解你對作品的想法。<br>上傳作品說明影片連結時，請先上傳至youtube, 並將影片設定為「非公開」。</li>
				<li>與參賽作品相關的報名文件中，請避免顯示、暗示參賽公司的名字、CI與相關人員。</li>
			</ul>
			<div class="upload">
				<div class="upload-item">
					<span>上傳參賽表*</span>
					<a class="btn-upload">
						<span class="icon-folder"></span>瀏覽檔案</a>
				</div>
				<div class="upload-item">
					<span>上傳作品說明*</span>
					<a class="btn-upload">
						<span class="icon-folder"></span>瀏覽檔案</a>
				</div>
				<div class="input-container form-upload">
					<input class="input" id="uploadurl" type="text" pattern=".+" required  v-model="Form.case_film_url">
					<label class="label" for="uploadurl">上傳影片連結</label>
				</div>
			</div>
		</div>
		<div class="wrap-form">
			<h5>公司得獎訊息</h5>
			<ul>
				<li>所有參賽作品都必須至少代表一家主要貢獻公司，最多可以表揚三家公司。</li>
				<li>若參賽單位提交的是內部策劃實施的作品，請在主要貢獻公司中填入貴公司訊息。</li>
				<li>若貴公司是代理或者外包公司，請同時在客戶及主要貢獻公司中填入相關訊息。</li>
				<li>得獎訊息將用於獎項公佈與宣傳、作品集編撰，參賽者需確保在該頁面輸入的客戶公司及貢獻公司的名稱均正確、一致。</li>
				<li>若為無客戶公司之作品，在客戶公司一欄填無即可。</li>
			</ul>
			<div class="wrap-data">
				<div class="input-container form-50">
					<input class="input" id="info-company" type="text" pattern=".+" required v-model="Form.list_customer_name">
					<label class="label" for="info-company">客戶公司(請填寫公司名稱*)</label>
				</div>
				<div class="input-container form-50">
					<input class="input" id="info-partner" type="text" pattern=".+" required v-model="Form.list_partner_name">
					<label class="label" for="info-partner">合作夥伴(請填寫公司名稱*)</label>
				</div>
				<div class="input-container form-50">
					<input class="input" id="other-partner" type="text" pattern=".+" required v-model="Form.list_thirdparty_name">
					<label class="label" for="other-partner">其它夥伴(請填寫公司名稱*)</label>
				</div>
			</div>
		</div>
		<div class="wrap-form">
			<h5>團隊核心成員</h5>
			<div class="wrap-data">
				<div class="wrap-coremember" v-for="(item, index) in Form.coremember" :key="index">

					<div class="input-container form-25">
						<input class="input" :id="'mem-company'+index" type="text" pattern=".+" required v-model="item.company_name">
						<label class="label" :for="'mem-company'+index">公司名稱</label>
					</div>
					<div class="input-container form-25">
						<input class="input" :id="'mem-name'+index" type="text" pattern=".+" required v-model="item.name">
						<label class="label" :for="'mem-name'+index">姓名</label>
					</div>
					<div class="input-container form-25">
						<input class="input" :id="'mem-tittle'+index" type="text" pattern=".+" required v-model="item.job_title">
						<label class="label" :for="'mem-tittle'+index">職稱</label>
					</div>
					<div class="input-container form-25">
						<input class="input" :id="'mem-email'+index" type="text" pattern=".+" required v-model="item.email">
						<label class="label" :for="'mem-email'+index">電子信箱</label>
					</div>
				</div>

			</div>
			<a class="add-more" href="#" @click.prevent="insertCoreMember">
				<span class="icon-plus"></span>
			</a>
		</div>
		<div class="wrap-form">
			<h5>聲明*</h5>
			<div class="wrap-data">
				<div class="input-container form-rec">
					<input class="input" id="date-begin" type="date" pattern=".+" required value="1900-01-01" v-model="Form.s_date">
					<label class="label" for="date-begin">參賽作品開始時間*</label>
				</div>
				<div class="rec-center">
					<div class="input-container form-rec2">
						<input class="input" id="date-end" type="date" pattern=".+" required value="1900-01-01"
						v-model="Form.e_date">
						<label class="label" for="date-end">參賽作品結束時間*</label>
					</div>
					<span>或</span>
					<input class="radio-custom" id="radio-still" name="radio-group" type="checkbox" unchecked v-model="Form.online">
					<label class="radio-custom-label" for="radio-still">仍在繼續</label>
				</div>
				<div class="select select--white form-rec" data-form-type="scope">
					<span class="placeholder">{{Form.scope}}</span>
					<ul>
						<li>地區</li>
						<li>全國</li>
						<li>國際</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="wrap-form">
			<h5>參賽作品應用國家和地區*</h5>
			<div class="wrap-data">
				<input class="radio-custom" id="c-Australia" name="c-Australia" type="checkbox">
				<label class="radio-custom-label radio-country" for="c-Australia">Australia</label>
				<input class="radio-custom" id="c-Brazil" name="c-Brazil" type="checkbox">
				<label class="radio-custom-label radio-country" for="c-Brazil">Brazil</label>
				<input class="radio-custom" id="c-Canada" name="c-Canada" type="checkbox">
				<label class="radio-custom-label radio-country" for="c-Canada">Canada</label>
				<input class="radio-custom" id="c-France" name="c-France" type="checkbox">
				<label class="radio-custom-label radio-country" for="c-France">France</label>
				<input class="radio-custom" id="c-Greece" name="c-Greece" type="checkbox">
				<label class="radio-custom-label radio-country" for="c-Greece">Greece</label>
				<input class="radio-custom" id="c-HongKong" name="c-HongKong" type="checkbox">
				<label class="radio-custom-label radio-country" for="c-HongKong">Hong Kong</label>
				<input class="radio-custom" id="c-India" name="c-India" type="checkbox">
				<label class="radio-custom-label radio-country" for="c-India">India</label>
				<input class="radio-custom" id="c-Italy" name="c-Italy" type="checkbox">
				<label class="radio-custom-label radio-country" for="c-Italy">Italy</label>
				<input class="radio-custom" id="c-Japan" name="c-Japan" type="checkbox">
				<label class="radio-custom-label radio-country" for="c-Japan">Japan</label>
				<input class="radio-custom" id="c-Korea" name="c-Korea" type="checkbox">
				<label class="radio-custom-label radio-country" for="c-Korea">Korea</label>
				<input class="radio-custom" id="c-Macau" name="c-Macau" type="checkbox">
				<label class="radio-custom-label radio-country" for="c-Macau">Macau</label>
				<input class="radio-custom" id="c-MainlandChina" name="c-MainlandChina" type="checkbox">
				<label class="radio-custom-label radio-country" for="c-MainlandChina">Mainland China</label>
				<input class="radio-custom" id="c-Malaysia" name="c-Malaysia" type="checkbox">
				<label class="radio-custom-label radio-country" for="c-Malaysia">Malaysia</label>
				<input class="radio-custom" id="c-NewZealand" name="c-NewZealand" type="checkbox">
				<label class="radio-custom-label radio-country" for="c-NewZealand">New Zealand</label>
				<input class="radio-custom" id="c-Russia" name="c-Russia" type="checkbox">
				<label class="radio-custom-label radio-country" for="c-Russia">Russia</label>
				<input class="radio-custom" id="c-Singapore" name="c-Singapore" type="checkbox">
				<label class="radio-custom-label radio-country" for="c-Singapore">Singapore</label>
				<input class="radio-custom" id="c-Spain" name="c-Spain" type="checkbox">
				<label class="radio-custom-label radio-country" for="c-Spain">Spain</label>
				<input class="radio-custom" id="c-Taiwan" name="c-Taiwan" type="checkbox">
				<label class="radio-custom-label radio-country" for="c-Taiwan">Taiwan</label>
				<input class="radio-custom" id="c-Thailand" name="c-Thailand" type="checkbox">
				<label class="radio-custom-label radio-country" for="c-Thailand">Thailand</label>
				<input class="radio-custom" id="c-UK" name="c-UK" type="checkbox">
				<label class="radio-custom-label radio-country" for="c-UK">UK</label>
				<input class="radio-custom" id="c-UnitedArabEmirates" name="radio-group" type="checkbox">
				<label class="radio-custom-label radio-country" for="c-UnitedArabEmirates">United Arab Emirates</label>
				<input class="radio-custom" id="c-USA" name="c-USA" type="checkbox" unchecked>
				<label class="radio-custom-label radio-country" for="c-USA">USA</label>
				<input class="radio-custom" id="c-Others" name="c-Others" type="checkbox">
				<label class="radio-custom-label radio-country" for="c-Others">Others</label>
			</div>
		</div>
		<div class="wrap-form">
			<h5>參賽訊息準確性</h5>
			<ul>
				<li>參賽者對參賽訊息的準確性負有全部責任。</li>
				<li>強烈建議所有參賽者與所在公司的各個部門溝通，以確保所有參與此作品單位的名稱均正確。</li>
			</ul>
		</div>
		<div class="wrap-form">
			<h5>出版規定許可*</h5>
			<ul>
				<li>凡成功入圍或獲獎的參賽作品都會通過各種形式及管道宣傳。請確保您所提交的作品為原創或您有權提交此作品。</li>
				<li>參賽作品一經提交，DSA 數位奇點獎即默認擁有出版、編輯和展示參賽作品中所包含的圖片、文字及影片等所有資料的權利。</li>
				<li>作品將被用於教育及宣傳，形式包括但不限於 DSA 數位奇點獎刊物、網站、合作網站、新聞發布、新聞稿、節目/會議和頒獎典禮。</li>
				<li>參賽作品的參賽表可以在官網、合作夥伴官網或其他刊物中展示。如有不便對外公開的數據或內容，請在提交前刪除相關內容。</li>
			</ul>
		</div>
		<div class="btn_wrap btn_wrap2">
			<a class="btn-confirm" href="#" @click.prevent="handleSubmit">
				<span class="txt">確定上傳</span>
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
import templateWorksAddForm from '~/plugins/templateWorksAddForm';
import Vue from 'vue';
import qs from 'qs';
export default {
	asyncData({ redirect }) {},
	fetch({ store, params, query, app }) {
		store.commit('user/commitNavibarTitle', '添加作品');
	},
	head() {
		return {
			title: '線上報名',
		};
	},
	layout: 'layoutUser',
	data() {
		return {
			Form: templateWorksAddForm(),
			recaptchaForm: undefined,
		};
	},
	methods: {
		// 初始化 下拉選單
		initSelect() {
			$('.select')
				.on(
					'click',
					'.placeholder',
					function(e) {
						var target = e.target;
						var parent = $(target).closest('.select');
						if (!parent.hasClass('is-open')) {
							parent.addClass('is-open');
							$('.select.is-open')
								.not(parent)
								.removeClass('is-open');
						} else {
							parent.removeClass('is-open');
						}
					}.bind(this)
				)
				.on(
					'click',
					'ul>li',
					function(e) {
						var target = e.target;
						var parent = $(target).closest('.select');
						var text = $(target)
							.text()
							.trim();
						parent.removeClass('is-open');
						// 關閉填字, 與v-model綁定
						// .find('.placeholder')
						// .text(text);

						/**
						 * 填入 data
						 */
						// 取得 data('form-type')
						var FormType = parent.data('form-type');
						this.Form[FormType] = text;
					}.bind(this)
				);
		},

		insertCoreMember() {
			let index = this.Form.coremember.length;

			// this.Form.coremember.$set(index, {
			// 	company_name: '',
			// 	name: '',
			// 	job_title: '',
			// 	email: '',
			// });
			Vue.set(this.Form.coremember, index, {
				company_name: '',
				name: '',
				job_title: '',
				email: '',
			});
			console.log(this.Form.coremember);
		},
		handleSubmit() {
			console.log(this.Form);
			// let $FormData = Object.assign({}, this.Form);
			// console.log($FormData);
			// // 女士 = 0, 先生 = 1
			// $FormData.gender = $FormData.gender === '先生' ? 1 : 0;

			// let payload = {
			// 	FormData: $FormData,
			// 	reqURL: '/user.ashx',
			// 	resTitle: '修改成功',
			// 	resText: '',
			// };
			// this.util_request(payload)
			// 	.then(data => {
			// 		$nuxt._router.push('/u/list');
			// 	})
			// 	.catch(err => {
			// 		// 失敗訊息 (立即)
			// 	});
		},
	},
	created() {
		// console.log('created');
	},

	mounted() {
		this.$nextTick(() => {
			// 初始化下拉選單
			this.initSelect();
		});
	},
};
</script>

<style scoped>
@import '~/assets/css/regist.css';
</style>

