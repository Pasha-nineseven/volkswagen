$(document).ready(function() {
	//SCROLLTOP
	$("body").on("click", ".page-top-anchor__link", function(e){
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});


	//DETAILS SLIDER
	if ($('.details__slider').length>0) {
		sliderDetailsStart();
	}
});




$(window).resize(function () {
	if ($('.details__slider').length>0) {
		sliderDetailsStart();
	}
});




		

// $(window).load(function(){

// });

// functions


function sliderDetailsStart(){

	var $tab_a = $('.details__slider');

	if($(window).width() < 768){
		$tab_a.not('.slick-initialized').slick({
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			useTransform:true,
			"accessibility": false,
			arrows: false,
			responsive: [
			    {
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: true,
					}
			    },
		  	]
		});
	}else{
		if($tab_a.hasClass('slick-initialized')) {
			$tab_a.slick("unslick");
		}
	}
}



// links pages
// $('body').append(
// 	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
// 		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
// 	<style> \
// 		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
// 		#pages a { text-decoration: none; } \
// 		#pages li { margin: 5px 0; } \
// 	</style> \
// 	<ol id="pages"> \
// 		<li><a href="about.html">About</a></li> \
// 		<li><a href="index.html">Index</a></li> \
// 	</ol> \
// </div>');
