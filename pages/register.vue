<template>
	<div class="wrapper">
		<div class="head head_regist">
      <div class="tittle"><span>線上報名</span><span class="sub">REGISTRATION</span></div>
    </div>
    <main class="wrap_content">
      <!--welcome-->
      <!-- <div class="welcomeBox">
        <ul>
          <li class="avatar"><span class="icon-avatar"></span></li>
          <li class="welcome">歡迎，<span class="name">虎松</span></li>
          <li><a class="btn-logout" href="#"><span class="txt">登出</span><span class="arrow"></span></a></li>
        </ul>
      </div> -->
      <!-- my works-->
      <div class="navibar">
        <h3>註冊帳號</h3>
        <!-- <div class="btnBox"><a class="btn_navibar" href="#"><span class="txt">我的參賽作品</span><span class="arrow"></span></a><a class="btn_navibar navibar_focus" href="#"><span class="txt">編輯個人資料</span><span class="arrow"></span></a><a class="btn_navibar" href="#"><span class="txt">修改密碼</span><span class="arrow">  </span></a></div> -->
      </div>
      <div class="wrap-form">
        <h5>登入資訊</h5>
        <div class="wrap-data">
          <div class="input-container form-50">
            <input class="input" id="taxid" type="text" pattern=".+" maxlength="8" required v-model="Form.uniformno">
            <label class="label" for="taxid">公司統編*</label>
          </div>
          <div class="password">
            <div class="input-container form-50">
              <input class="input" id="password" type="password" pattern=".+" maxlength="12" required v-model="Form.password">
              <label class="label" for="password">輸入密碼* (6~12個英數混合字元)</label>
            </div>
            <div class="input-container form-50">
              <input class="input" id="passwordAgain" type="password" pattern=".+" maxlength="12" required v-model="Form.repassword">
              <label class="label" for="passwordAgain">再次輸入密碼*</label>
            </div>
          </div>
        </div>
      </div>
      <div class="wrap-form">
        <h5>個人資料編輯</h5>
        <div class="wrap-data">
          <div class="select select--white form-50" data-form-type="gender"><span class="placeholder">{{Form.gender}}</span>
            <ul>
              <li>先生</li>
              <li>女士</li>
            </ul>
          </div>
          <div class="input-container form-50">
            <input class="input" id="acc-name" type="text" pattern=".+" required maxlength="50" v-model="Form.name">
            <label class="label" for="acc-name">姓名*</label>
          </div>
          <div class="input-container form-50">
            <input class="input" id="acc-tittle" type="text" pattern=".+" required maxlength="50" v-model="Form.job_title">
            <label class="label" for="acc-tittle">職稱*</label>
          </div>
          <div class="input-container form-50">
            <input class="input" id="acc-phone" type="text" pattern=".+" required maxlength="30" v-model="Form.phone">
            <label class="label" for="acc-phone">市話</label>
          </div>
          <div class="input-container form-50">
            <input class="input" id="acc-mobile" type="text" pattern=".+" required maxlength="10" v-model="Form.mobile">
            <label class="label" for="acc-mobile">手機*</label>
          </div>
          <div class="input-container form-50">
            <input class="input" id="acc-email" type="text" pattern=".+" required maxlength="100" v-model="Form.email">
            <label class="label" for="acc-email">電子信箱*</label>
          </div>
          <div class="input-container form-50">
            <input class="input" id="acc-backupMail" type="text" pattern=".+" required maxlength="100" v-model="Form.secondemail">
            <label class="label" for="acc-backupMail">備用信箱</label>
          </div>
        </div>
      </div>
      <div class="wrap-form">
        <h5>公司資料編輯</h5>
        <div class="wrap-data">
          <div class="input-container form-50">
            <input class="input" id="acc-company" type="text" pattern=".+" required maxlength="100" v-model="Form.company_name">
            <label class="label" for="acc-company">公司中文名稱*</label>
          </div>
          <div class="input-container form-50">
            <input class="input" id="acc-companyEng" type="text" pattern=".+" required maxlength="100" v-model="Form.company_engname">
            <label class="label" for="acc-companyEng">公司英文名稱*</label>
          </div>
          <div class="input-container form-50">
            <input class="input" id="acc-companyPhone" type="text" pattern=".+" required maxlength="30" v-model="Form.company_phone">
            <label class="label" for="acc-companyPhone">公司電話*</label>
          </div>
          <div class="add-wrap">
            <div class="wrap-data"></div>
            <div class="select select--white form-add" data-form-type="county"><span class="placeholder">{{Form.county}}</span>
              <ul>                
                <li v-for="(value, key, index) in vuexArea.list" :key="index" @click="updateAreaData(key)">
                  {{ key }} 
                </li>
              </ul>
            </div>
            <div class="select select--white form-add" data-form-type="district"><span class="placeholder">{{Form.district}}</span>
              <ul>                
                <li v-for="(value, key, index) in vuexArea.list[vuexArea.data.selectedCountry]" :key="index" @click="updateZip(value)">
                  {{ key }}
                </li>
              </ul>
            </div>
            <div class="input-container form-50">
              <input class="input" id="acc-completeAdd" type="text" pattern=".+" required maxlength="100" v-model="Form.addr">
              <label class="label" for="acc-completeAdd">詳細地址*</label>
            </div>
          </div>
        </div>
      </div>
      <div class="wrap-form">
        <h5>你從哪裡得知的參賽信息</h5>
        <div class="wrap-data">
          <input class="radio-custom" id="from-dsa" name="from-wrap-data" type="radio" value="官網" v-model="Form.offical_channel">
          <label class="radio-custom-label radio-country" for="from-dsa">數位奇點獎官網</label>
          <input class="radio-custom" id="from-dsaFB" name="from-wrap-data" type="radio" value="臉書" v-model="Form.offical_channel">
          <label class="radio-custom-label radio-country" for="from-dsaFB">數位奇點獎FB</label>
          <input class="radio-custom" id="from-dsaEDM" name="from-wrap-data" type="radio" value="EDM" v-model="Form.offical_channel">
          <label class="radio-custom-label radio-country" for="from-dsaEDM">數位奇點獎EDM</label>
        </div>
        <div class="from">
          <div class="wrap-from">
            <input class="radio-custom" id="from-r-partner" name="from-r-partner" type="radio">
            <label class="radio-custom-label radio-from" for="from-r-partner"></label>
            <div class="input-container form-from">
              <input class="input" id="from-partner" type="text" pattern=".+" required v-model="Form.partner_name">
              <label class="label" for="from-partner">DSA數位奇點獎聯合推廣夥伴</label>
            </div>
          </div>
          <div class="wrap-from">
            <input class="radio-custom" id="from-r-third" name="from-r-third" type="radio">
            <label class="radio-custom-label radio-from" for="from-r-third"></label>
            <div class="input-container form-from">
              <input class="input" id="from-third" type="text" pattern=".+" required v-model="Form.media_name">
              <label class="label" for="from-third">第三方媒體</label>
            </div>
          </div>
          <div class="wrap-from">
            <input class="radio-custom" id="from-r-expert" name="from-r-expert" type="radio">
            <label class="radio-custom-label radio-from" for="from-r-expert"></label>
            <div class="input-container form-from">
              <input class="input" id="from-expert" type="text" pattern=".+" required v-model="Form.expert_name">
              <label class="label" for="from-expert">專家評委推薦</label>
            </div>
          </div>
          <div class="wrap-from">
            <input class="radio-custom" id="from-r-dma" name="from-r-dma" type="radio">
            <label class="radio-custom-label radio-from" for="from-r-dma"></label>
            <div class="input-container form-from">
              <input class="input" id="from-dma" type="text" pattern=".+" required v-model="Form.dma_member_name">
              <label class="label" for="from-dma">DMA 會員推薦</label>
            </div>
          </div>
          <div class="wrap-from">
            <input class="radio-custom" id="from-r-PA" name="from-r-PA" type="radio">
            <label class="radio-custom-label radio-from" for="from-r-PA"></label>
            <div class="select select--white form-from2" data-form-type="association"><span class="placeholder">{{Form.association}}</span>
              <ul>
                <li>MMA</li>
                <li>4A</li>
                <li>TAAA</li>
                <li>TIPRA</li>
                <li>TIEA</li>
                <li>TAVRA</li>
              </ul>
            </div>
          </div>
          <div class="wrap-from">
            <input class="radio-custom" id="from-r-other" name="from-r-other" type="radio">
            <label class="radio-custom-label radio-from" for="from-r-other"></label>
            <div class="input-container form-from">
              <input class="input" id="from-other" type="text" pattern=".+" required v-model="Form.other">
              <label class="label" for="from-other">其他</label>
            </div>
          </div>
        </div>
      </div>
      <div class="google-robot">
        <!-- <img src="img/google.gif"> -->
        <div class="g-recaptcha" id="recaptcha-main"></div>
      </div>
      <div class="btn_wrap btn_wrap2"><a class="btn-confirm" href="#" @click.prevent="handleSubmit"><span class="txt">確定提交</span><span class="arrow"></span></a><a class="btn-cancel" href="#" @click.prevent="resetForm"><span class="txt">取消編輯</span><span class="arrow"></span></a></div>
    </main>
	</div>
</template>

<script>
import templateFormData from '~/plugins/templateFormData';
export default {
	head() {
		return {
			title: '註冊',
		};
	},
	layout: 'layoutIndex',
	data() {
		return {
			Form: templateFormData(),
			recaptchaForm: undefined,
		};
	},
	computed: {
		vuexArea() {
			return this.$store.state.area;
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
						// .find('.placeholder')
						// .text(text);

						/**
						 * 填入 data
						 */
						// 取得 data('form-type')
						var FormType = parent.data('form-type');
						// 女士 = 0, 先生 = 1
						if (FormType === 'gender') text = text === '先生' ? 1 : 0;
						this.Form[FormType] = text;
					}.bind(this)
				);
		},
		handleSubmit() {
			this.Form.vcode = grecaptcha.getResponse(this.recaptchaForm);
			console.log(this.Form);
			const options = {
				method: 'POST',
				data: $.param(this.Form),
				url: '/user.ashx',
			};
			this.$axios(options)
				.then(function(response) {
					alert(response.data);
				})
				.catch(function(response) {
					alert(response.data.message.replace(/\\n/g, '\n'));
				});
		},
		updateAreaData(country) {
			this.$store.commit('area/updateData', country);
		},
		updateZip(zip) {
			this.Form.zip = zip;
		},
		resetForm() {
			$('input:radio').prop('checked', false);   
      
			Object.assign(this.Form, templateFormData());
			
		},
	},
	created() {},

	mounted() {
		this.$nextTick(() => {
			// 初始化下拉選單
			this.initSelect();

			// 搭配：https://www.google.com/recaptcha/api.js?render=explicit
			this.recaptchaForm = grecaptcha.render('recaptcha-main', {
				sitekey:
					process.env.NODE_ENV !== 'production'
						? '6LdcigETAAAAAEou1LlaY6NWZF3wIDnfLnMURdvy'
						: '6Lf27y8UAAAAAIu-CAB7R-dGq19c6rHKBZKIR8nT',
			});
		});
	},
};
</script>

<style scoped>
@import '~/assets/css/regist.css';
</style>

