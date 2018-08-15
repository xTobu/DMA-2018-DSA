
export default function({ app, redirect ,store}) {
    //console.log(store.state.user)
    if (new Date() > new Date('2018-08-15T00:00:00')) {
          
        redirect('/u/list');
    }
	if (process.client) {
         // this.$swal({
        //     type: 'error',
        //     title: '對不起，活動時間已經結束',
        // });     
        alert('對不起，活動時間已經結束')
        
    }
}
