import Vue from 'vue';
Vue.mixin({
	methods: {
		// $nuxt_router.push
		util_LinkTo(path) {
			$nuxt._router.push(path);
		},
		util_request(payload) {
			return new Promise((resolve, reject) => {
				let $FormData = Object.assign({}, payload.FormData);
				this.$swal({
					type: 'info',
					title: '努力為您處理中...',
					// 外面點擊取消 防連續點擊
					allowOutsideClick: false,
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
										text: '(๑•̀ㅂ•́)و✧',
									}).then(() => {
										resolve();
										// $nuxt._router.push('/login');
									});
								})
								.catch(response => {
									let text = response.data.message.replace(/\\n/g, '\n\n');
									this.$swal({
										type: 'error',
										title: text,
                                    }).then(() => {
										reject()
										
									});
                                    
									
								});
						}, 1000);
					},
				});




			});

		}
	},
});
