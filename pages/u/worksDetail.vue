<template>
    <div class="userWrapper">
        <!-- <p>請填寫以下作品詳細資料。在2017年11月10日報名截止前，您隨時可以保存，且可隨時返回該頁面完成參賽資料的填寫。 </p> -->
        <p></p>

        <div class="wrap-form">
            <h5>作品基本資料</h5>
            <div class="wrap-data">
                <div class="input-container form-50">
                    <input class="input" id="worksName" type="text" pattern=".+" required v-model="Form.title">
                    <label class="label" for="worksName">作品名稱*</label>
                </div>
                <div class="input-container form-50">
                    <input class="input" id="worksNameEN" type="text" pattern=".+" required v-model="Form.tile_eng">
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
                <div class="select select--white form-50" data-form-type="main_type" @click.prevent="onclickSelect">
                    <span class="placeholder">{{Form.main_type}}</span>
                    <!-- <ul>
                        <li v-for="(value, key, index) in vuexCategory.list" :key="index" @click="updateSelectedCategory(key)">
                            {{ key }}
                        </li>
                    </ul> -->
                </div>

                <div class="select select--white form-50" data-form-type="sub_type" @click.prevent="onclickSelect">
                    <span class="placeholder">{{Form.sub_type}}</span>
                    <!-- <ul>
                        <li v-for="(value, key, index) in vuexCategory.list[vuexCategory.data.selectedCategory]" :key="index">
                            {{ key }}
                        </li>
                    </ul> -->
                </div>
            </div>
        </div>
        <div class="wrap-form">
            <h5>作品概述*</h5>
            <ul>
                <li>請總結參賽作品的背景目標、創新概念、執行手段與達成（或預計）的效果，並提供一份作品概述，字數以300字為上限。</li>
                <li>若貴公司作品最終獲獎或入圍，將會在後續的推廣與展示宣傳中用到該概述。</li>
            </ul>
            <textarea class="text-area" placeholder="請輸入作品概述" rows="8" v-model="Form.summary"></textarea>
        </div>
        <div class="wrap-form">
            <h5>上傳相關報名文件*</h5>
            <ul>
                <li>上傳參賽表及作品說明為必須選項，且僅支援PDF格式，請參賽者事先將已填寫完成之WORD檔及PPT檔轉換為PDF檔。</li>
                <li>若您尚未下載報名表及作品說明範本的話，請由
                    <a href="/2018/RegistrationDocument.zip"> 此處下載</a>
                </li>
                <li>影片連結及圖片檔案為非必須選項。但是製作良好的作品介紹影片case film，有助於評審更快速及深入的理解你對作品的想法。<br>上傳作品說明影片連結時，請先上傳至youtube，長度限於3分鐘內，並將影片設定為「非公開」。</li>
                <li>與參賽作品相關的報名文件中，請避免顯示、暗示參賽公司的名字、CI與相關人員。</li>
            </ul>
            <div class="upload">
                <div class="upload-item">
                    <span>上傳參賽表*</span>
                    <!-- {{Form.registration_file_name}} -->
                    <a class="btn-upload" @click.stop="onclickRegistrationFile">
                        <input type="file" id="RegistrationFile" ref="RegistrationFile" accept=".pdf" @change="onchangeRegistrationFile" style="display:none">
                        <span class="icon-folder"></span>瀏覽檔案 <br>
                    </a>
                    <br>
                    <span style="top: 10px;position: relative;">{{RegistrationFile}}</span>
                </div>
                <div class="upload-item">
                    <span>上傳作品說明*</span>
                    <a class="btn-upload" @click.stop="onclickExpositionFile">
                        <input type="file" id="ExpositionFile" ref="ExpositionFile" accept=".pdf" @change="onchangeExpositionFile" style="display:none">
                        <span class="icon-folder">
                        </span>瀏覽檔案
                    </a>
                    <br>
                    <span style="top: 10px;position: relative;">{{ExpositionFile}}</span>
                </div>
                <div class="input-container form-upload">
                    <input class="input" id="uploadurl" type="text" pattern=".+" required v-model="Form.case_film_url">
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
                <div class="wrap-coremember" v-for="(item, index) in Form.coremember" :key="index" v-if="item.isExist">
                    <!-- <input type="button" value="delete" @click.prevent="deleteCoremember(index)"> -->
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
                    <div class="btn-close-box" @click.prevent="deleteCoremember(index)">
                        <a class="btn-close2" href="#">
                            <span class="close2"></span>
                        </a>
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
                    <input  placeholder="yyyy/mm/dd" class="input" id="date-begin" min="2017-09-01" max="2018-08-31" type="date" pattern=".+" required v-model="Form.s_date" @input='onchangeS_Date' @change='onchangeS_Date'>
                    <label class="label labelFocused" for="date-begin">參賽作品開始時間*</label>
                </div>
                <div class="rec-center">
                    <div class="input-container form-rec2">
                        <input placeholder="yyyy/mm/dd" class="input" id="date-end" min="2017-09-01" type="date" pattern=".+" required v-model="Form.e_date" @input='onchangeE_Date' @change='onchangeE_Date'>
                        <label class="label labelFocused" for="date-end">參賽作品結束時間*</label>
                    </div>
                    <!-- <span>或</span>
                    <input class="radio-custom" id="radio-still" name="radio-group" type="checkbox" unchecked v-model="Form.online">
                    <label class="radio-custom-label" for="radio-still">仍在繼續</label> -->
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
                <template v-for="(item, index) in Form.apply_country">
                    <input :key="'apply_country-input-'+index" class="radio-custom" :id="'c-'+item.name" :name="'c-'+item.name" type="checkbox" v-model="item.active">
                    <label :key="'apply_country-label-'+index" class="radio-custom-label radio-country" :for="'c-'+item.name">{{item.name}}</label>
                </template>

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
                <span class="txt">確定修改</span>
                <span class="arrow"></span>
            </a>
            <a class="btn-cancel" href="#" @click.prevent="canvelEdit">
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
		store.commit('user/commitNavibarTitle', '作品詳情');
	},
	head() {
		return {
			title: '作品詳情',
		};
	},
	layout: 'layoutUser',
	data() {
		return {
			// Form: templateWorksAddForm(),
			recaptchaForm: undefined,
			Form: {
				act_mode: 'edit',
				Portfolio_Memeber: '',
				apply_country: [],
				coremember: [],
				case_film_url: '',
				company_engname: '',
				company_name: '',
				contact_email: '',
				contact_name: '',
				contact_phone: '',
				customer_brandname: '',
				customer_engbrandname: '',
				customer_engname: '',
				customer_name: '',
				e_date: '',
				exposition_file: '',
				exposition_file_name: '',
				list_customer_name: '',
				list_partner_name: '',
				list_thirdparty_name: '',
				main_type: '',
				online: '',
				p_key: '',
				registration_file: '',
				registration_file_name: '',
				s_date: '',
				scope: '',
				sub_type: '',
				summary: '',
				tile_eng: '',
				title: '',
			},
			RegistrationFile: '',
			ExpositionFile: '',
		};
	},
	computed: {
		vuexCategory() {
			return this.$store.state.worksCategory;
		},
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

			let countExist = this.Form.coremember.filter(function(item) {
				return item.isExist === true;
			}).length;

			if (countExist >= 10) {
				return this.$swal({
					type: 'error',
					title: '對不起\n團隊核心成員最多十位',
				});
			}

			Vue.set(this.Form.coremember, index, {
				company_name: '',
				name: '',
				job_title: '',
				email: '',
				id: '',
				isExist: true,
			});
		},
		handleSubmit() {
			let $FormData = Object.assign({}, this.Form);
            
            if (
				!Date.parse($FormData.s_date) ||
				!Date.parse($FormData.e_date)
			) {
				this.$swal({
					type: 'warn',
					title: '格式錯誤',
					text: '作品開始時間 或 作品結束時間',
				});
				return;
			}
			let min_s_date = new Date('2017-09-01');
			let max_s_date = new Date('2018-08-31');
			if (
				min_s_date > new Date($FormData.s_date) ||
				max_s_date < new Date($FormData.s_date)
			) {
				this.$swal({
					type: 'warn',
					// html:true,
					title: '作品開始時間錯誤',
					text: '不在規定範圍內，2017-09-01~2018-08-31',
				});
				return;
			}

			let min_e_date = new Date('2017-09-01');
			if (min_s_date > new Date($FormData.e_date)) {
				this.$swal({
					type: 'warn',
					// html:true,
					title: '作品結束時間錯誤',
					text: '不在規定範圍內，必須大於 2017-09-01',
				});
				return;
            }
            
			$FormData.apply_country = JSON.stringify($FormData.apply_country);

			// let main_type = '';
			// switch ($FormData.main_type) {
			// 	case '數位創意類':
			// 		main_type = 'A';
			// 		break;
			// 	case '創新應用技術類':
			// 		main_type = 'B';
			// 		break;
			// 	case '整合行銷類':
			// 		main_type = 'C';
			// 		break;
			// 	case '媒體應用類':
			// 		main_type = 'D';
			// 		break;
			// 	default:
			// 		main_type = '';
			// 		break;
			// }
			// $FormData.main_type = main_type;

			// let sub_type = '';
			// switch ($FormData.sub_type) {
			// 	case '最佳廣告文案創意獎':
			// 		sub_type = 1;
			// 		break;
			// 	case '最佳社群文案創意獎':
			// 		sub_type = 2;
			// 		break;
			// 	case '最佳展示廣告創意獎':
			// 		sub_type = 3;
			// 		break;
			// 	case '最佳影片創意獎':
			// 		sub_type = 4;
			// 		break;
			// 	case '最佳短影片創意獎':
			// 		sub_type = 5;
			// 		break;
			// 	case '最佳互動影片創意獎':
			// 		sub_type = 6;
			// 		break;
			// 	case '最佳使用者體驗(UX)創意獎':
			// 		sub_type = 7;
			// 		break;
			// 	case '最佳活動網站及APP 創意獎':
			// 		sub_type = 8;
			// 		break;
			// 	case '最佳企業網站及APP 創意獎':
			// 		sub_type = 9;
			// 		break;

			// 	default:
			// 		main_type = '';
			// 		break;
			// }
			// $FormData.sub_type = sub_type;
			let objMainType = {
				數位創意類: 'A',
				創新應用技術類: 'B',
				整合行銷類: 'C',
				媒體應用類: 'D',
			};
			$FormData.main_type = objMainType[$FormData.main_type] || '';

			let objSubType = {
				A: {
					最佳廣告文案創意獎: 1,
					最佳社群文案創意獎: 2,
					最佳展示廣告創意獎: 3,
					最佳影片創意獎: 4,
					最佳短影片創意獎: 5,
					最佳互動影片創意獎: 6,
					'最佳使用者體驗(UX)創意獎': 7,
					'最佳活動網站及APP 創意獎': 8,
					'最佳企業網站及APP 創意獎': 9,
				},
				B: {
					'最佳AR/VR 應用獎': 1,
					最佳網站技術應用獎: 2,
					最佳廣告技術應用獎: 3,
					最佳互動裝置應用獎: 4,
					最佳數位服務體驗應用獎: 5,
					最佳數據應用獎: 6,
					'最佳loT 應用獎': 7,
					'最佳AI 應用獎': 8,
				},
				C: {
					最佳社群行銷獎: 1,
					最佳跨媒體整合行銷獎: 2,
					最佳數位平台整合行銷獎: 3,
					最佳內容行銷獎: 4,
					最佳O2O行銷獎: 5,
					最佳程序化行銷獎: 6,
					最佳行動行銷獎: 7,
					最佳策展行銷獎: 8,
					最佳電子商務行銷獎: 9,
					最佳KOL獎: 10,
				},
				D: {
					最佳DMP應用獎: 1,
					'最佳使用者體驗(UX)創意獎': 2,
					最佳策展行銷獎: 3,
					最佳媒體行銷技術獎: 4,
					最佳媒體內容行銷獎: 5,
					最佳直播行銷運用獎: 6,
				},
				undefined: { 選擇參加項目: '' },
			};
			if ($FormData.sub_type !== '選擇參加項目')
				$FormData.sub_type =
					objSubType[$FormData.main_type][$FormData.sub_type] || '';
			$FormData.online = $FormData.online ? 1 : 0;

			let scope = '';
			switch ($FormData.scope) {
				case '地區':
					scope = 1;
					break;
				case '全國':
					scope = 2;
					break;
				case '國際':
					scope = 3;
					break;
				default:
					scope = '';
					break;
			}
			$FormData.scope = scope;

			let coremember = $FormData.coremember
				.reduce(function(
					accumulator,
					currentValue,
					currentIndex,
					array
				) {
					let strTemp =
						`${currentValue.company_name}*^${currentValue.name}*^${
							currentValue.job_title
						}*^${currentValue.email}*^` +
						(currentValue.id !== '' ? currentValue.id : '');

					accumulator.push(strTemp);

					return accumulator;
				},
				[])
				.join('*$');

			$FormData.coremember = coremember + '*$';

			let payload = {
				FormData: $FormData,
				reqURL: '/portfolios.ashx',
				resTitle: '修改成功',
				resText: '',
			};
			this.util_request(payload)
				.then(data => {
					$nuxt._router.push('/u/list');
				})
				.catch(err => {});
		},
		onclickRegistrationFile(e) {
			if ($(e.target).is('input')) {
				return;
			}
			$('#RegistrationFile').click();
		},
		onchangeRegistrationFile() {
			this.Form.registration_file = this.$refs.RegistrationFile.files[0];
			this.RegistrationFile =
				'已選取：' + this.$refs.RegistrationFile.files[0].name;
		},
		onclickExpositionFile(e) {
			if ($(e.target).is('input')) {
				return;
			}
			$('#ExpositionFile').click();
		},
		onchangeExpositionFile() {
			this.Form.exposition_file = this.$refs.ExpositionFile.files[0];
			this.ExpositionFile =
				'已選取：' + this.$refs.ExpositionFile.files[0].name;
		},
		onclickSelect() {
			this.$swal({
				type: 'error',
				title: '類別及項目一經選定，\n日後無法修改',
			});
		},
		deleteCoremember(index) {
			if (this.Form.coremember[index].id === '') {
				return this.Form.coremember.splice(index, 1);
			}
			Object.assign(this.Form.coremember[index], {
				company_name: '',
				name: '',
				job_title: '',
				email: '',
				isExist: false,
			});
		},
		updateSelectedCategory(category) {
			// this.Form.sub_type = '選擇參加項目';
			this.$store.commit(
				'worksCategory/updateSelectedCategory',
				category
			);
		},
		canvelEdit() {
			$nuxt._router.push('/u/list');
		},
		onchangeS_Date(e) {
			// if (new Date(e.target.value) < new Date(e.target.min)) {
			// 	this.Form.s_date = e.target.min;
			// } else if (new Date(e.target.value) > new Date(e.target.max)) {
			// 	this.Form.s_date = e.target.max;
			// } else {
			// 	this.Form.s_date = e.target.value;
            // }
            this.Form.s_date = e.target.value;
		},
		onchangeE_Date(e) {
            // if (new Date(e.target.value) < new Date(e.target.min)) {
			// 	this.Form.e_date = e.target.min;
			// }  else {
			// 	this.Form.e_date = e.target.value;
            // }
            this.Form.e_date = e.target.value;
		},
	},
	created() {
		let queryID = this.$route.query.id;

		this.$axios({
			method: 'POST',
			data: qs.stringify({ act_mode: 'getportfolio', p_key: queryID }),
			url: '/portfolios.ashx',
		})
			.then(response => {
				let detail = Object.assign({}, response.data.portfolio);

				detail.s_date = detail.s_date.replace(/\//g, '-');
				detail.e_date = detail.e_date.replace(/\//g, '-');

				let coremember = detail.Portfolio_Memeber.split('*$')
					.slice(0, -1)
					.reduce(function(
						accumulator,
						currentValue,
						currentIndex,
						array
					) {
						let arrValue = currentValue.split('*^');
						let objTemp = {
							company_name: arrValue[0],
							name: arrValue[1],
							job_title: arrValue[2],
							email: arrValue[3],
							id: arrValue[4],
							isExist: true,
						};

						accumulator.push(objTemp);

						return accumulator;
					},
					[]);

				detail.coremember = coremember;

				let tempMainType = detail.main_type;
				detail.main_type = {
					A: '數位創意類',
					B: '創新應用技術類',
					C: '整合行銷類',
					D: '媒體應用類',
				}[detail.main_type];

				detail.sub_type = {
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
				}[tempMainType][parseInt(detail.sub_type, 10) - 1];

				detail.scope = {
					'1': '地區',
					'2': '全國',
					'3': '國際',
				}[detail.scope];

				detail.registration_file_name = detail.registration_file;
				detail.exposition_file_name = detail.exposition_file;

				this.Form = Object.assign(this.Form, detail);
			})
			.catch(err => {});
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
.labelFocused {
	color: #b88b01;
	font-size: 13px;
	top: -30px;
	pointer-events: none;
}

.select[data-form-type='main_type'] .placeholder:after {
	display: none;
}
.select[data-form-type='sub_type'] .placeholder:after {
	display: none;
}
</style>

