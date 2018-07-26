<template>
<div class="wrapper">
	<!-- 忘記密碼popup -->
    <div class="popup-forget" style="display: none;">
        <div class="login forget-login">
            <div class="left"></div>
            <div class="right">
                <a class="btn-close" href="#">
                    <span class="close por"></span>
                </a>
                <div class="wrap_right">
                    <h3>忘記密碼</h3>
                    <p>送出後請特別留意電子郵件信箱</p>
                    <div class="input-container">
                        <input id="account-forget" class="input" type="text" pattern=".+" required />
                        <label class="label" for="account-forget">帳號(您當初填寫的公司統編)</label>
                    </div>
                    <div class="input-container">
                        <input id="password-forget" class="input" type="email" pattern=".+" required />
                        <label class="label" for="password-forget">您註冊時填寫的Email</label>
                    </div>
                    <div class="google-robot2"><img src="img/google.gif" alt=""></div>
                    <a href="#" class="btn_login btn-center">
                            <span class="txt">確認送出</span>
                            <span class="arrow"></span>
                        </a>
                </div>
            </div>
        </div>
    </div>

    <!-- 重發註冊驗證信popup -->
    <div class="popup-forget" style="display: none;">
        <div class="login forget-login">
            <div class="left"></div>
            <div class="right">
                <a class="btn-close" href="#">
                    <span class="close por"></span>
                </a>
                <div class="wrap_right">
                    <h3>重發註冊驗證信</h3>
                    <p>送出後請特別留意電子郵件信箱</p>
                    <div class="input-container">
                        <input id="account-resend" class="input" type="text" pattern=".+" required />
                        <label class="label" for="account-resend">帳號(您當初填寫的公司統編)</label>
                    </div>
                    <div class="input-container">
                        <input id="password-resend" class="input" type="email" pattern=".+" required />
                        <label class="label" for="password-resend">您註冊時填寫的Email</label>
                    </div>
                    <div class="google-robot2"><img src="img/google.gif" alt=""></div>
                    <a href="#" class="btn_login btn-center">
                            <span class="txt">確認送出</span>
                            <span class="arrow"></span>
                        </a>
                </div>
            </div>
        </div>
    </div>

    <div class="head head_regist">
        <div class="tittle">
            <span>線上報名</span>
            <span class="sub">REGISTRATION</span>
        </div>
    </div>

    <div class="login">
        <div class="left"></div>
        <div class="right">
            <div class="wrap_right">
                <h3>使用者登入</h3>
                <p>若還未有帳號密碼請點選註冊取得</p>
                <div class="input-container">
                    <input id="account" class="input" type="text" pattern=".+" required />
                    <label class="label" for="account">帳號(您當初填寫的公司統編)</label>
                </div>
                <div class="input-container">
                    <input id="password" class="input" type="password" pattern=".+" required />
                    <label class="label" for="password">密碼</label>
                </div>
                <div class="btn_wrap">
                    <a href="#" class="btn_login">
                            <span class="txt">註冊</span>
                            <span class="arrow"></span>
                        </a>
                    <a href="#" class="btn_login">
                            <span class="txt">登入</span>
                            <span class="arrow"></span>
                        </a>
                </div>
                <div class="bottom">
                    <a href="#">忘記密碼?</a>
                    <a href="#">重發驗證信</a>
                </div>
            </div>
        </div>
    </div>
</div>
	
</template>

<script>
export default {
	layout: 'layoutIndex',
	created() {},
	mounted() {},
};
</script>

<style scoped>
@import '~/assets/css/regist.css';

</style>

