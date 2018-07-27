import Vue from 'vue'
import swal from 'sweetalert2/dist/sweetalert2.all.min.js'
const swalPlugin = {}

swalPlugin.install = function (Vue) {

	swal.setDefaults({
		// confirmButtonClass: 'btn btn-primary',
		// cancelButtonClass: 'btn btn-default',
		// buttonsStyling: false,
        // showCloseButton: true
        showConfirmButton:false,
	});

	Vue.prototype.$swal = swal;
}

Vue.use(swalPlugin)
