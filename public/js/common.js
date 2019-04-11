
jQuery(document).ready(function ($) {

	// для свг
	svg4everybody({});
	// Custom JS
 
	// табы  . 
	function tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

		});
	};
	tabscostume('tabs');

 
$('.btn-start-js').click(function(){

	$(this).parents('.front').hide()
	.next().fadeIn();
});
$('.btn-next-js').click(function(){

	$(this).parents('.window-block').hide().removeClass('active')
	.next().fadeIn().addClass('active');
});


$('.btn-dop-js').click(function(){ 
	$(this).parents('.inner-tab-js').hide(function(){$(this).removeClass('active')})
	.next().fadeIn().addClass('active');
});

 
	// mask for input


	$("input[type='tel']").attr("pattern", "[+]38[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({
		"mask": "+38(999)999-99-99"
	});

	$('[data-target="#modal-win"]').click(function () {
		$('#modal-win .title-js').html($(this).data('title'));
	})

 
	// })
	$(".accordion__btn").click(function () {
		$(this).toggleClass('active').next().slideToggle().siblings('.accordion__toggle-block').slideUp();
		// $(this).next().siblings().slideUp();
		$(this).siblings().removeClass('active');
	})

		$('.btn-next-js').click(function(){
			var index = $(this).parents(".window-block").index();
			$('.s-quiz__progress-bar--js').width( (index + 1) * 100 / 10 + '%')
			if( $(this).is('.btn-green-js')) {

				$('.s-quiz__foot-col').eq(index)
				.addClass('green')
				
			}
			else{
				$('.s-quiz__foot-col').eq(index)
				.addClass('red')
			}
		})

});