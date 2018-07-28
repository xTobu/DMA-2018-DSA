import Vue from 'vue'
import swal from 'sweetalert2'
const swalPlugin = {}

swalPlugin.install = function (Vue) {

	swal.mixin({
		// confirmButtonClass: 'btn btn-primary',
		// cancelButtonClass: 'btn btn-default',
		// buttonsStyling: false,
        // showCloseButton: true
        showConfirmButton:false,
	});

	Vue.prototype.$swal = swal;
}

Vue.use(swalPlugin)
