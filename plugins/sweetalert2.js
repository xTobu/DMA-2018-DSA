import Vue from 'vue';
import swal from 'sweetalert2';
const swalPlugin = {};

swalPlugin.install = function(Vue) {
	Vue.prototype.$swal = swal.mixin({
		// buttonsStyling: false,
		showCloseButton: false,
		confirmButtonText: 'Ok',
	});
};

Vue.use(swalPlugin);
