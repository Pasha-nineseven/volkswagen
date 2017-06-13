var needsUpdate6 = true;
var needsUpdate5 = true;
var needsUpdate4 = true;
var needsUpdate3 = true;
var needsUpdate2 = true;
var needsUpdate1 = true;
var needsUpdate0 = true;


// var needsRemove = true;

$(document).ready(function() {

	leftMenuReinit();

	//SCROLLTOP
	$("body").on("click", ".page-top-anchor__link", function(e){
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});


	//DETAILS SLIDER
	if ($('.details__slider').length>0) {
		sliderDetailsStart();
	}

	//LEFT-MENU
	$("body").on("click", ".page-nav__more", function(e){
		e.preventDefault();
		$(this).parents('.page-nav').toggleClass('page-nav--border');
		$('.page-nav-sublayer').toggleClass('open');
	});	

	//MOBILE MENU
	$("body").on("click", ".mobile-menu__btn", function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('.mobile-menu__wrapper').toggleClass('open');
		$('body').toggleClass('b-fixed');
		$('.mobile-menu__bottom').fadeToggle(600);
	});


	//ACCORD
	$("body").on("click", ".accordion__item a", function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).next('.accordion__info').slideToggle();
	});


	//TOP BAR INIT
	if ($('.page-top-bar__wrapper').length>0) {
		sliderBarStart();
	}
});




$(window).resize(function () {
	if ($('.details__slider').length>0) {
		sliderDetailsStart();
	}

	if ($('.page-top-bar__wrapper').length>0) {
		sliderBarStart();
	}


	leftMenuReinit();
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


function sliderBarStart(){

	var $topBar = $('.page-top-bar__wrapper');

	if($(window).width() < 768){
		$topBar.not('.slick-initialized').slick({
			responsive: [
			    {
					breakpoint: 768,
					settings: {
						infinite: false,
						slidesToShow: 4,
						slidesToScroll: 1,
						useTransform:false,
						//"accessibility": false,
						arrows: true,
					}
			    },
			    {
					breakpoint: 600,
					settings: {
						infinite: false,
						slidesToShow: 3,
						slidesToScroll: 1,
						useTransform:false,
						//"accessibility": false,
						arrows: true,
					}
			    },
			    {
					breakpoint: 400,
					settings: {
						infinite: false,
						slidesToShow: 2,
						slidesToScroll: 1,
						useTransform:false,
						//"accessibility": false,
						arrows: true,
					}
			    },
		  	]
		});
	}else{
		if($topBar.hasClass('slick-initialized')) {
			$topBar.slick("unslick");
		}
	}
}


function leftMenuReinit(){
	var h = window.innerHeight,
		menuList = $(".page-nav__item");

	menuList.each(function(index) {
		//menuItemIndex = index+1;
		if (h<=780) {
	    	var idx6 = $('.page-nav__item:eq(6)');
	        idx6.addClass("hidden");
	        var elContent6 = idx6.find('.page-nav__link').html();
	        if (needsUpdate6) {
        		$(".page-nav-sublayer__list").prepend("<li class='page-nav-sublayer__item added6'><a href='#' class='page-nav-sublayer__link'>" + elContent6 + "</a></li>");
            	needsUpdate6 = false;
            }
		}else{
			var idx6 = $('.page-nav__item:eq(6)');
	        idx6.removeClass("hidden").addClass('showed');
		        $(".added6").remove();
	        needsUpdate6 = true;
		}

		if (h<=700) {
	    	var idx5 = $('.page-nav__item:eq(5)');
	        idx5.addClass("hidden");
	        var elContent5 = idx5.find('.page-nav__link').html();
	        if (needsUpdate5) {
        		$(".page-nav-sublayer__list").prepend("<li class='page-nav-sublayer__item added5'><a href='#' class='page-nav-sublayer__link'>" + elContent5 + "</a></li>");
            	needsUpdate5 = false;
            }
		}else{
			var idx5 = $('.page-nav__item:eq(5)');
	        idx5.removeClass("hidden").addClass('showed');
		        $(".added5").remove();
	        needsUpdate5 = true;
		}

		if (h<=620) {
	    	var idx4 = $('.page-nav__item:eq(4)');
	        idx4.addClass("hidden");
	        var elContent4 = idx4.find('.page-nav__link').html();
	        if (needsUpdate4) {
        		$(".page-nav-sublayer__list").prepend("<li class='page-nav-sublayer__item added4'><a href='#' class='page-nav-sublayer__link'>" + elContent4 + "</a></li>");
            	needsUpdate4 = false;
            }
		}else{
			var idx4 = $('.page-nav__item:eq(4)');
	        idx4.removeClass("hidden").addClass('showed');
		        $(".added4").remove();
	        needsUpdate4 = true;
		}

		if (h<=540) {
	    	var idx3 = $('.page-nav__item:eq(3)');
	        idx3.addClass("hidden");
	        var elContent3 = idx3.find('.page-nav__link').html();
	        if (needsUpdate3) {
        		$(".page-nav-sublayer__list").prepend("<li class='page-nav-sublayer__item added3'><a href='#' class='page-nav-sublayer__link'>" + elContent3 + "</a></li>");
            	needsUpdate3 = false;
            }
		}else{
			var idx3 = $('.page-nav__item:eq(3)');
	        idx3.removeClass("hidden").addClass('showed');
		        $(".added3").remove();
	        needsUpdate3 = true;
		}

		if (h<=450) {
	    	var idx2 = $('.page-nav__item:eq(2)');
	        idx2.addClass("hidden");
	        var elContent2 = idx2.find('.page-nav__link').html();
	        if (needsUpdate2) {
        		$(".page-nav-sublayer__list").prepend("<li class='page-nav-sublayer__item added2'><a href='#' class='page-nav-sublayer__link'>" + elContent2 + "</a></li>");
            	needsUpdate2 = false;
            }
		}else{
			var idx2 = $('.page-nav__item:eq(2)');
	        idx2.removeClass("hidden").addClass('showed');
		        $(".added2").remove();
	        needsUpdate2 = true;
		}

		if (h<=360) {
	    	var idx1 = $('.page-nav__item:eq(1)');
	        idx1.addClass("hidden");
	        var elContent1 = idx1.find('.page-nav__link').html();
	        if (needsUpdate1) {
        		$(".page-nav-sublayer__list").prepend("<li class='page-nav-sublayer__item added1'><a href='#' class='page-nav-sublayer__link'>" + elContent1 + "</a></li>");
            	needsUpdate1 = false;
            }
		}else{
			var idx1 = $('.page-nav__item:eq(1)');
	        idx1.removeClass("hidden").addClass('showed');
		        $(".added1").remove();
	        needsUpdate1 = true;
		}

		if (h<=280) {
	    	var idx0 = $('.page-nav__item:eq(0)');
	        idx0.addClass("hidden");
	        var elContent0 = idx0.find('.page-nav__link').html();
	        if (needsUpdate0) {
        		$(".page-nav-sublayer__list").prepend("<li class='page-nav-sublayer__item added0'><a href='#' class='page-nav-sublayer__link'>" + elContent0 + "</a></li>");
            	needsUpdate0 = false;
            }
		}else{
			var idx0 = $('.page-nav__item:eq(0)');
	        idx0.removeClass("hidden").addClass('showed');
		        $(".added0").remove();
	        needsUpdate0 = true;
		}
	});
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
