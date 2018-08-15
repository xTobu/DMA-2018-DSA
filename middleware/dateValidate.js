
export default function({ app, redirect ,store}) {
    //console.log(store.state.user)
    if (new Date() > new Date('2018-09-20T23:59:59')) {
          
        redirect('/u/list');
    }
	if (process.client) {
        alert('對不起，活動時間已經結束')
        
    }
}
