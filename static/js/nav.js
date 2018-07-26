$('.menu-toggle').on('click', function() {
	console.log($(this))
	$(this).toggleClass('on');
	$('.menu-section').toggleClass('on');
});
