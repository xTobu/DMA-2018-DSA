import Vue from 'vue';
Vue.mixin({
	methods: {
		// $nuxt_router.push
		util_LinkTo(path) {
			$nuxt._router.push(path);
		},
		util_request(payload) {
			console.log(payload.resText===undefined);
			return new Promise((resolve, reject) => {
				let $FormData = Object.assign({}, payload.FormData);
				this.$swal({
					type: 'info',
					title: '拼命為您處理中...',
					
					onOpen: () => {
						this.$swal.enableLoading();
						setTimeout(() => {
							this.$axios({
								method: 'POST',
								data: $.param($FormData),
								url: payload.reqURL,
							})
								.then(response => {
									this.$swal({
										type: 'success',
										title: payload.resTitle,
										text: payload.resText || '(๑•̀ㅂ•́)و✧',
									}).then(() => {
										resolve(response);
										// $nuxt._router.push('/login');
									});
								})
								.catch(response => {
									console.log(123);
									let text = response.data.message.replace(
										/\\n/g,
										'\n\n'
									);
									this.$swal({
										type: 'error',
										title: text,
									}).then(() => {
										reject(response);
									});
								});
						}, 1000);
					},
				});
			});
		},
	},
});
