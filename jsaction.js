$('.content').hide();

$('.content').first().show();

$('.label').on('click', function() {
	$('.content').slideUp(300);
	var $this = $(this);
	var disp = $this.next('.content').css('display');
	$('.label').removeClass('active');

	if (disp === 'none') {
		$this.next('.content').slideDown(300);
		$this.addClass('active');
	}

	// else{
	// 	$this.next('.content').slideUp(300);
	// 	$this.removeClass('active');
	// }

});