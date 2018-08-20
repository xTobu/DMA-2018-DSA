<template>
    <div class="wrapper">
        <div class="head head_sponsors">
            <div class="tittle">
                <span>贊助單位</span>
                <span class="sub">SPONSORS</span>
            </div>
        </div>
        <main class="sponsors">
            <div class="sponsors-content">
                <h5>主辦單位</h5>
                <div class="logo-content">
                    <ul>
                        <li><img src="~assets/img/logo/logo-01-01.jpg"></li>
                    </ul>
                </div>
                <h5>奇點夥伴</h5>
                <div class="logo-content">
                    <ul>
                        <li><img src="~assets/img/sponsors_logo/1/FB.png"></li>
                        <li><img src="~assets/img/sponsors_logo/1/google.png"></li>
                        <li><img src="~assets/img/sponsors_logo/1/oath.png"></li>
                        <li><img src="~assets/img/sponsors_logo/1/TAmedia.png"></li>
                    </ul>
                </div>
                <h5>創新夥伴</h5>
                <div class="logo-content">
                    <ul>
                        <li><img src="~assets/img/sponsors_logo/2/chocotv.png"></li>
                        <li><img src="~assets/img/sponsors_logo/2/deloitte.png"></li>
                        <li><img src="~assets/img/sponsors_logo/2/line.png"></li>
                        <li><img src="~assets/img/sponsors_logo/2/medialand.png"></li>
                        <li><img src="~assets/img/sponsors_logo/2/microsoft.png"></li>
                        <li><img src="~assets/img/sponsors_logo/2/PIXNET.png"></li>
                        <li><img src="~assets/img/sponsors_logo/2/SPE3d.png"></li>
                    </ul>
                </div>
                <h5>推動夥伴</h5>
                <div class="logo-content">
                    <ul>
                        <li><img src="~assets/img/sponsors_logo/3/BrideWell.png"></li>
                    </ul>
                </div>
                <h5>創意夥伴</h5>
                <div class="logo-content">
                    <ul>
                         <li><img src="~assets/img/sponsors_logo/4/webgene.png"></li>
                    </ul>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
	asyncData({ redirect }) {},
	head() {
		return {
			title: '贊助單位',
		};
	},
	layout: 'layoutIndex',
	data() {
		return {};
	},
	methods: {},
	created() {},

	mounted() {},
};
</script>

<style scoped>
@import '~/assets/css/sponsors.css';
</style>

