<template>
    <div class="wrapper">
        <!-- 忘記密碼popup -->
        <transition>
            <div class="popup-forget" v-show="showPassword">
                <div class="login forget-login">
                    <div class="left"></div>
                    <div class="right">
                        <a class="btn-close" href="#" @click.prevent="closePopupConent">
                            <span class="close por"></span>
                        </a>
                        <div class="wrap_right">
                            <h3>忘記密碼</h3>
                            <p>送出後請特別留意電子郵件信箱</p>
                            <div class="input-container">
                                <input id="account-forget" class="input" type="text" pattern=".+" required v-model="Form.pw.uniformno" />
                                <label class="label" for="account-forget">帳號(您當初填寫的公司統編)</label>
                            </div>
                            <div class="input-container">
                                <input id="password-forget" class="input" type="email" pattern=".+" required v-model="Form.pw.email" />
                                <label class="label" for="password-forget">您註冊時填寫的Email</label>
                            </div>
                            <div class="google-robot2">
                                <!-- <img src="img/google.gif" alt=""> -->
                                <div class="g-recaptcha" id="recaptcha-pw"></div>
                            </div>
                            <a href="#" class="btn_login btn-center">
                                <span class="txt">確認送出</span>
                                <span class="arrow"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <!-- 重發註冊驗證信popup -->
        <transition>
            <div class="popup-forget" v-show="showEmail">
                <div class="login forget-login">
                    <div class="left"></div>
                    <div class="right">
                        <a class="btn-close" href="#" @click.prevent="closePopupConent">
                            <span class="close por"></span>
                        </a>
                        <div class="wrap_right">
                            <h3>重發註冊驗證信</h3>
                            <p>送出後請特別留意電子郵件信箱</p>
                            <div class="input-container">
                                <input id="account-resend" class="input" type="text" pattern=".+" required v-model="Form.em.uniformno" />
                                <label class="label" for="account-resend">帳號(您當初填寫的公司統編)</label>
                            </div>
                            <div class="input-container">
                                <input id="password-resend" class="input" type="email" pattern=".+" required v-model="Form.em.email" />
                                <label class="label" for="password-resend">您註冊時填寫的Email</label>
                            </div>
                            <div class="google-robot2">
                                <!-- <img src="img/google.gif" alt=""> -->
                                <div class="g-recaptcha" id="recaptcha-em"></div>
                            </div>
                            <a href="#" class="btn_login btn-center">
                                <span class="txt">確認送出</span>
                                <span class="arrow"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <div class="head head_regist">
            <div class="tittle">
                <span>線上報名</span>
                <span class="sub">REGISTRATION</span>
            </div>
        </div>
        <div class="device-show">
            <div class="content">
                <div class="tittle">線上報名請使用桌機作業</div>
                <p>請輸入email以便獲取資訊</p>
                <input id="email" type="email">
                <a class="btn_device" href="#">
                    <span class="txt">送出</span>
                    <span class="arrow"></span>
                </a>
            </div>
        </div>

        <div class="login">
            <div class="left"></div>
            <div class="right">
                <div class="wrap_right">
                    <h3>使用者登入</h3>
                    <p>若還未有帳號密碼請點選註冊取得</p>
                    <div class="input-container">
                        <input id="account" class="input" type="text" pattern=".+" required v-model="Form.uniformno" />
                        <label class="label" for="account">帳號(您當初填寫的公司統編)</label>
                    </div>
                    <div class="input-container">
                        <input id="password" class="input" type="password" pattern=".+" required v-model="Form.password" v-on:keyup.13="handleLogin" />
                        <label class="label" for="password">密碼</label>
                    </div>
                    <div class="btn_wrap">
                        <a href="register" class="btn_login" @click.prevent="handleRegister">
                            <span class="txt">註冊</span>
                            <span class="arrow"></span>
                        </a>
                        <a href="#" class="btn_login" @click.prevent="handleLogin">
                            <span class="txt">登入</span>
                            <span class="arrow"></span>
                        </a>
                    </div>
                    <div class="bottom">
                        <a href="#" @click.prevent="openPassword">忘記密碼?</a>
                        <a href="#" @click.prevent="openEmail">重發驗證信</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
	head() {
		return {
			title: '登入',
		};
	},
	layout: 'layoutIndex',
	data() {
		return {
			showPassword: false,
			showEmail: false,
			Form: {
				act_mode: 'login',
				uniformno: '42656367',
				password: 'wg0123',
				pw: { uniformno: '42656367', email: 'jun_huang@webgene.com.tw', recaptcha: '' },
				em: { uniformno: '42656367', email: 'jun_huang@webgene.com.tw', recaptcha: '' },
			},
		};
	},
	methods: {
		handleRegister() {
			this.util_LinkTo('/register');
		},
		handleLogin() {
			// console.log(this.Form);
			let payload = {
				FormData: this.Form,
				reqURL: '/user.ashx',
				resTitle: '登入成功',
			};
			this.util_request(payload)
				.then(data => {
                    // $nuxt._router.push('/');
                    $nuxt._router.push('/u/list');
				})
				.catch(err => {
					// 失敗訊息 (立即)
				});
		},
		renderRecaptcha(type) {
			// console.log(!this.Form[type].recaptcha);
			this.Form[type].recaptcha === ''
				? (this.Form[type].recaptcha = grecaptcha.render('recaptcha-' + type, {
						sitekey:
							process.env.NODE_ENV !== 'production'
								? '6LdcigETAAAAAEou1LlaY6NWZF3wIDnfLnMURdvy'
								: '6Lf27y8UAAAAAIu-CAB7R-dGq19c6rHKBZKIR8nT',
				  }))
				: grecaptcha.reset(this.Form[type].recaptcha);
		},
		openPassword() {
			this.showPassword = true;
			this.renderRecaptcha('pw');
		},
		openEmail() {
			this.showEmail = true;
			this.renderRecaptcha('em');
		},
		closePopupConent() {
			this.showPassword = false;
			this.showEmail = false;
		},
	},
	created() {},
	mounted() {},
};
</script>

<style scoped>
@import '~/assets/css/regist.css';
.popup-forget {
	position: fixed;
}

.v-leave-to,
.v-enter {
	opacity: 0;
}

.v-enter-active,
.v-leave-active {
	transition: opacity 0.3s;
}

@media only screen and (max-device-width: 1024px) {
	.device-show {
		height: 100vh;
	}
}
</style>

