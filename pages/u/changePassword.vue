<template>
	<div class="userWrapper">
		<div class="wrap-form">
			<div class="wrap-data">
				<div class="input-container form-50">
					<input class="input" id="oldPassword" type="password" pattern=".+" required>
					<label class="label" for="oldPassword">請輸入舊密碼*</label>
				</div>
				<div class="password">
					<div class="input-container form-50">
						<input class="input" id="password" type="password" pattern=".+" required>
						<label class="label" for="password">請輸入新密碼* (6~12個英數混合字元)</label>
					</div>
					<div class="input-container form-50">
						<input class="input" id="passwordAgain" type="password" pattern=".+" required>
						<label class="label" for="passwordAgain">請再輸入一次新密碼*</label>
					</div>
				</div>
			</div>
		</div>

		<div class="btn_wrap btn_wrap2">
			<a class="btn-confirm" href="#">
				<span class="txt">確定送出</span>
				<span class="arrow"></span>
				<span class="arrow"></span>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	asyncData({ redirect }) {},
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

