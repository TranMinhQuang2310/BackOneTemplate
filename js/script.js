$('.portfolio button').click(function(event) {
	const dataValue = $(this).attr('data');
	const allCols = $('.portfolio > .row > div');
	if(dataValue === 'all') {
		allCols.show();
		return;
	}
	const showCols = $(`.portfolio > .row > div[data=${dataValue}]`);
	const hiddenCols = allCols.not(showCols);
	showCols.show();//hiện ra (tương tự display : block);
	hiddenCols.hide();//ẩn đi (tương tự display : none);
});

$(window).scroll(function(event) {
	/* Act on the event */
	// console.log($(this).scrollTop());
	//Nếu top của window >= top của portfolio thì xuất hiện fixed menu
	if ($(this).scrollTop() >= $('#portfolio').offset().top - 1) {
		$('.navbar').addClass('fixed-top');
		$('.header').addClass('dummy-padding');
	}
	else {
		$('.navbar').removeClass('fixed-top');
		$('.header').removeClass('dummy-padding');
	}
});