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
            <input class="input" id="taxid" type="text" pattern=".+" required>
            <label class="label" for="taxid">公司統編*</label>
          </div>
          <div class="password">
            <div class="input-container form-50">
              <input class="input" id="password" type="password" pattern=".+" required>
              <label class="label" for="password">輸入密碼* (6~12個英數混合字元)</label>
            </div>
            <div class="input-container form-50">
              <input class="input" id="passwordAgain" type="password" pattern=".+" required>
              <label class="label" for="passwordAgain">再次輸入密碼*</label>
            </div>
          </div>
        </div>
      </div>
      <div class="wrap-form">
        <h5>個人資料編輯</h5>
        <div class="wrap-data">
          <div class="select select--white form-50"><span class="placeholder">稱謂*</span>
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
            <div class="select select--white form-add"><span class="placeholder">地址縣市*</span>
              <ul>
                <li>台北市</li>
                <li>新北市</li>
                <li>新竹市</li>
                <li>桃園縣</li>
                <li>台中市</li>
                <li>高雄市</li>
              </ul>
            </div>
            <div class="select select--white form-add"><span class="placeholder">行政區域*</span>
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
            <div class="select select--white form-from2"><span class="placeholder">公協會*</span>
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
      <div class="google-robot">
        <!-- <img src="img/google.gif"> -->
        <div class="g-recaptcha" id="recaptcha-main"></div>
      </div>
      <div class="btn_wrap btn_wrap2"><a class="btn-confirm" href="#" @click.prevent="handleSubmit"><span class="txt">確定提交</span><span class="arrow"></span></a><a class="btn-cancel" href="#"><span class="txt">取消編輯</span><span class="arrow"></span></a></div>
    </main>
	</div>
</template>

<script>
export default {
	data() {
		return {
			Form: {},
			recaptchaForm: undefined,
		};
	},
	head() {
		return {
			title: '註冊',
			// script: [{ src: 'https://www.google.com/recaptcha/api.js' }],
		};
	},
	layout: 'layoutIndex',
	created() {},
	methods: {
		// 初始化 下拉選單
		initSelect() {
			$('.select')
				.on('click', '.placeholder', function() {
					var parent = $(this).closest('.select');
					if (!parent.hasClass('is-open')) {
						parent.addClass('is-open');
						$('.select.is-open')
							.not(parent)
							.removeClass('is-open');
					} else {
						parent.removeClass('is-open');
					}
				})
				.on('click', 'ul>li', function() {
					var parent = $(this).closest('.select');
					parent
						.removeClass('is-open')
						.find('.placeholder')
						.text($(this).text());
				});
		},
		handleSubmit() {
			console.log(grecaptcha.getResponse(this.recaptchaForm));
			const data = { bar: 123 };
			const options = {
				method: 'POST',
				headers: { Accetp:'application/json' },
				data: {},
				url: '/user.ashx',
			};
			this.$axios(options)
				.then(function(response) {
					console.log(response);
				})
				.catch(function(error) {
					console.log(error);
				});
		},
	},
	mounted() {
		this.$nextTick(() => {
			this.initSelect();
			// 搭配：https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit
			this.recaptchaForm = grecaptcha.render('recaptcha-main', {
				sitekey: '6LdcigETAAAAAEou1LlaY6NWZF3wIDnfLnMURdvy',
			});
		});
	},
};
</script>

<style scoped>
@import '~/assets/css/regist.css';
</style>

