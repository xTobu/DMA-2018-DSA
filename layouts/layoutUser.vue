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
                        <span class="name">{{vuexUser.data.user.name}}</span>
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
                <h3>{{vuexUser.navibar.title}}</h3>
                <div class="btnBox">
                    <!--active: navibar_focus -->
                    <nuxt-link class="btn_navibar" to="/u/list" @click.prevent="util_LinkTo('/u/list')">
                        <span class="txt">我的參賽作品</span>
                        <span class="arrow"></span>
                    </nuxt-link>
                    <nuxt-link class="btn_navibar" to="/u/worksAdd" @click.prevent="util_LinkTo('/u/worksAdd')" v-if="['u-worksAdd'].indexOf($route.name) > -1">
                        <span class="txt">添加作品</span>
                        <span class="arrow"></span>
                    </nuxt-link>
                    <nuxt-link class="btn_navibar" to="/u/worksDetail" @click.prevent="util_LinkTo('/u/worksDetail')" v-if="['u-worksDetail'].indexOf($route.name) > -1">
                        <span class="txt">作品詳情</span>
                        <span class="arrow"></span>
                    </nuxt-link>
                    <nuxt-link class="btn_navibar" to="/u/account" @click.prevent="util_LinkTo('/u/account')">
                        <span class="txt">編輯個人資料</span>
                        <span class="arrow"></span>
                    </nuxt-link>
                    <nuxt-link class="btn_navibar" to="/u/changePassword" @click.prevent="util_LinkTo('/u/changePassword')">
                        <span class="txt">修改密碼</span>
                        <span class="arrow"></span>
                    </nuxt-link>

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
import qs from 'qs';
export default {
	data() {
		return {};
	},
	async fetch({ store, params, app }) {
		// layout not fire fetch
	},
	head() {
		return {
			title: '會員專區',
		};
	},
	computed: {
		vuexUser() {
			return this.$store.state.user;
		},
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
				resText: '',
			};
			this.util_request(payload)
				.then(data => {
					console.log(data);
					$nuxt._router.push('/login');
					//$nuxt._router.push('/u/list');
				})
				.catch(err => {
					console.log(err);
				});
		},
	},
	mounted() {},
	middleware: 'auth',
};
</script>
<style scoped>
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

