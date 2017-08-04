var needsUpdate6 = true;
var needsUpdate5 = true;
var needsUpdate4 = true;
var needsUpdate3 = true;
var needsUpdate2 = true;
var needsUpdate1 = true;
var needsUpdate0 = true;


// var resizeEvt;

// var needsRemove = true;

$(document).ready(function() {
	//flex polyfill
	flexibility(document.documentElement);

	//menu-init
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


	//POPUP-VIDEO
	if ($('.popup-video').length>0) {
		$('.popup-video').magnificPopup({
	        disableOn: 700,
	        type: 'iframe',
	        mainClass: 'mfp-fade',
	        removalDelay: 160,
	        preloader: true,
	        fixedContentPos: true,
	    });
    }

    //CONTENT-SLIDER
    if ($('.content-slider__wrap').length>0) {
    	$('.content-slider__wrap').slick({
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			useTransform:true,
			"accessibility": false,
			arrows: true,
			dots:true,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						useTransform:true,
						"accessibility": false,
						arrows: true,
						dots:true,
					}
			    },
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
    }

    //AUTO-SLIDER
    if ($('.auto-slider').length>0) {
    	$('.auto-slider').slick({
			infinite: false,
			slidesToShow: 6,
			slidesToScroll: 1,
			useTransform:true,
			"accessibility": false,
			arrows: true,
			dots:true,
			responsive: [
				{
					breakpoint: 1400,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
						useTransform:true,
						"accessibility": false,
						arrows: true,
						dots:true,
					}
			    },
			    {
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						useTransform:true,
						"accessibility": false,
						arrows: true,
						dots:true,
					}
			    },
			    {
					breakpoint: 500,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						useTransform:true,
						"accessibility": false,
						arrows: true,
						dots:true,
					}
			    },
		  	]
		});
    }



    //BAGGAGE-SLIDER
    if ($('.baggage-info-slider').length>0) {
		$('.baggage-info-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			useTransform:true,
				"accessibility": false,
			fade: true,
			asNavFor: '.baggage-img-slider'
		});
		$('.baggage-img-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: '.baggage-info-slider',
			centerMode: true,
			focusOnSelect: true,
			useTransform:true,
				"accessibility": false,
			dots: true,
			customPaging: function(slider, i) { 
				return '<button class="tab">' + $(slider.$slides[i]).find('.slide-title').text() + '</button>';
			},
			// responsive: [
			// 	{
			// 		breakpoint: 768,
			// 		settings: {
			// 			slidesToShow: 1,
			// 			slidesToScroll: 1,
			// 			asNavFor: '.baggage-info-slider',
			// 			centerMode: true,
			// 			focusOnSelect: true,
			// 			useTransform:true,
			// 				"accessibility": false,
			// 			dots: true,
			// 		}
			//     },
		 //  	]
		});
	}


	//ADVERTIZING-SLIDER
	if ($('.slider-advertising').length>0) {
		$('.slider-advertising').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: true,
			useTransform:true,
			"accessibility": false,
		});
	}

	//STANDART-SLIDER
	if ($('.standart-slider').length>0) {
		$('.standart-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
			useTransform:true,
			"accessibility": false,
		});
	}



    //TABS
    $('.resp-tabs').responsiveTabs({
	    startCollapsed: 'accordion'
	});



    //F-STYLER
    if ($('.fs').length>0) {
		setTimeout(function() {
		  $('.fs').styler();
		}, 10)
	}


	//MAIN-SLIDER
	if ($('.main-slider').length>0) {
		$('.main-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			useTransform:true,
			"accessibility": false,
			//fade:true,
		});
	}



	//POPUP-VIDEO
	if ($('.popup-inline').length>0) {
		$('.popup-inline').magnificPopup({
	        //disableOn: 700,
	        type: 'inline',
	        mainClass: 'mfp-fade',
	        removalDelay: 160,
	        preloader: true,
	        fixedContentPos: true,
	        callbacks: {
			    open: function() {
			    	if ($('.popup-slider').length>0) {
						$('.popup-slider-for').slick('setPosition');
						$('.popup-slider-nav').slick('setPosition');
					}
			    },
			 }
	    });
    }


    //POPUP-SLIDER
	$('.popup-slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots:true,
		fade: true,
		asNavFor: '.popup-slider-nav',
		useTransform:true,
		"accessibility": false,
	});
	$('.popup-slider-nav').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.popup-slider-for',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		arrows:true,
		useTransform:true,
		"accessibility": false,
	});




	//HINT
	$("body").on("click", ".afbf_hint-toggle", function(e){
		e.preventDefault();
		$(this).next('.afbf_hint__info').fadeToggle();
		if ($(".nano").length>0) {
			$(".nano").nanoScroller();
		}
	});
	$("body").on("click", ".afbf_hint-close", function(e){
		e.preventDefault();
		$(this).parents('.afbf_hint__info').fadeOut();
	});



	// $('.map').maphilight({
	// 	fill: true,
	// 	fillColor: '0099da',
	// 	fillOpacity: 0.3,
	// 	stroke: true,
	// 	strokeColor: '0176a7',
	// 	strokeOpacity: 1,
	// 	strokeWidth: 1,
	// 	fade: true,
	// 	alwaysOn: false,
	// 	neverOn: false,
	// 	groupBy: false,
	// });
	if ($('.map').length>0) {
		$('.map').mapify();
	}
	
	$('area').click(function(e) {
		e.preventDefault();
		
		// if ($(this).data('maphilight').alwaysOn) {
		// 	$(this).data('maphilight', {
		// 		'alwaysOn': false
		// 	}).trigger('alwaysOn.maphilight');
		// } else {
		// 	$(this).data('maphilight', {
		// 		'alwaysOn': true
		// 	}).trigger('alwaysOn.maphilight');
		// }

		var dataID = $(this).data('id');
		console.log(dataID);
	});

});




$(window).resize(function () {
	if ($('.details__slider').length>0) {
		sliderDetailsStart();
	}

	if ($('.page-top-bar__wrapper').length>0) {
		sliderBarStart();
	}


	leftMenuReinit();


	// clearTimeout(resizeEvt);
 //    resizeEvt = setTimeout(function(){
 //        $('.map').maphilight();
 //    }, 200);
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
$('body').append(
	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
	<style> \
		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
		#pages a { text-decoration: none; } \
		#pages li { margin: 5px 0; } \
	</style> \
	<ol id="pages"> \
		<li><a href="index.html">Index</a></li> \
		<li><a href="news.html">News</a></li> \
		<li><a href="news-in.html">News-in</a></li> \
		<li><a href="contacts-form.html">Контакты форма</a></li> \
		<li><a href="kuz-form.html">Кузовной калькулятор</a></li> \
		<li><a href="kuz-form-in.html">Кузовной калькулятор 2</a></li> \
		<li><a href="test-drive-form.html">Тест драйв форма</a></li> \
	</ol> \
</div>');
