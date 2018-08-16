export default function({ app, redirect, store }) {
	//console.log(store.state.user)
    var validate = new Date() > new Date('2018-09-27T23:59:59');
    
	if (validate) {
		redirect('/u/list');
	}
	if (process.client && validate) {
		alert('對不起，活動時間已經結束');
	}
}
