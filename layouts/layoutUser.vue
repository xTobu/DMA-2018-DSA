<template>
    <div class="wrapper">
        <div class="trans_bg">
            <div class="trans_iphone">
                <div class="trans_center"><img src="~assets/img/iphone_ok.png">
                    <p>請將裝置轉至直式<br>體驗最佳瀏覽方式</p>
                </div>
            </div>
        </div>
        <indexHeader />

        <!-- content-->
        <div class="head head_regist">
            <div class="tittle">
                <span>線上報名</span>
                <span class="sub">REGISTRATION</span>
            </div>
        </div>
        <main class="wrap_content">
            <!--welcome-->
            <div class="welcomeBox">
                <ul>
                    <li class="avatar">
                        <span class="icon-avatar"></span>
                    </li>
                    <li class="welcome">歡迎，
                        <span class="name">{{user.name}}</span>
                    </li>
                    <li>
                        <a class="btn-logout" href="#" @click.prevent="handleLogout">
                            <span class="txt">登出</span>
                            <span class="arrow"></span>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- my works-->
            <div class="navibar">
                <h3>我的參賽作品</h3>
                <div class="btnBox">
                    <!--active: navibar_focus -->
                    <a class="btn_navibar" href="#" @click.prevent="util_LinkTo('/u/list')">
                        <span class="txt">我的參賽作品</span>
                        <span class="arrow"></span>
                    </a>
                    <a class="btn_navibar" href="#" @click.prevent="util_LinkTo('/u/account')">
                        <span class="txt">編輯個人資料</span>
                        <span class="arrow"></span>
                    </a>
                    <a class="btn_navibar" href="#" @click.prevent="util_LinkTo('/u/changePassword')">
                        <span class="txt">修改密碼</span>
                        <span class="arrow"></span>
                    </a>
                </div>
            </div>

            <transition name='layoutuser' mode=''>
                <nuxt/>
            </transition>
        </main>
        <indexFooter />
    </div>
</template>
<script>
import indexHeader from '~/components/indexHeader.vue';
import indexFooter from '~/components/indexFooter.vue';
export default {
	data() {
		return {
			user: {
				name: '俊翔',
			},
		};
	},
	components: {
		indexHeader,
		indexFooter,
	},
	methods: {
		handleLogout() {
			let payload = {
				FormData: { act_mode: 'logout' },
				reqURL: '/user.ashx',
                resTitle: '登出',
                resText:''
			};
			this.util_request(payload)
				.then(data => {
					console.log(data);
					 $nuxt._router.push('/login');
					//$nuxt._router.push('/u/list');
				})
				.catch(err => {
					console.log(err);
					// 失敗訊息 (立即)
				});
		},
	},
};
</script>
<style>
@import '~/assets/css/regist.css';
/* transition */
.layoutuser-enter-active
/* ,.layoutuser-leave-active  */
 {
	transition: opacity 0.4s;
}

.layoutuser-enter,
.layoutuser-leave-to {
	opacity: 0;
}
</style>

