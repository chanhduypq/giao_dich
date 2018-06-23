$(function(){
	$('#login_click').on('click', function(e){
		var mn_drop = $('.oc-dropdown');
		if (!$(this).hasClass('_open')) {
			$(this).addClass('_open');
			mn_drop.addClass('_expand');
		}else{
			$(this).removeClass('_open');
			mn_drop.removeClass('_expand');
		}
	});

	$('.cv-menu').on('click', function(e){
		var mn_poc = $('.mobile-menu');
		if (!$(this).hasClass('_open')) {
			$(this).addClass('_open');
			$('body').addClass('_open');
			mn_poc.addClass('_expand');
		}else{
			$(this).removeClass('_open');
			mn_poc.removeClass('_expand');
			$('body').removeClass('_open');
		}
	});


	$('.input-nt').on('click', function(e){
		var mn_drop = $('.search-dropdown');
		var tmn_drop = $(this).parents('.form-select').children('.search-dropdown');

		if (!$(this).hasClass('_open')) {
			$('.input-nt').removeClass('_open');
			mn_drop.removeClass('_expand');
			
			$(this).addClass('_open');
			tmn_drop.addClass('_expand');
		}else{
			$('.input-nt').removeClass('_open');
			mn_drop.removeClass('_expand');

			$(this).removeClass('_open');
			tmn_drop.removeClass('_expand');
		}
	});

	$('.search-dropdown li.item-select').on('click', function(e){
		var mn_drop = $('.search-dropdown');
		var tmn_drop = $(this).parents('.form-select').children('.search-dropdown');

		var show_value = $(this).parents('.form-select').children('.input-nt');
		var input_value = $(this).parents('.form-select').children('input[type="hidden"]');

		if (show_value.hasClass('_open')) {
			$('.input-nt').removeClass('_open');
			mn_drop.removeClass('_expand');

			show_value.html($(this).text());
			input_value.val($(this).text());
			$(this).removeClass('_open');
			tmn_drop.removeClass('_expand');
		}
	});

	$('#onClickSearch').on('click', function(e){
		var mn_search = $('.top-search');
		if (!$(this).hasClass('_open')) {
			$(this).addClass('_open');
			mn_search.addClass('_expand');
		}else{
			$(this).removeClass('_open');
			mn_search.removeClass('_expand');
		}
	});

	//  Drop event from category
	$('.tab-drop .text-drop').on('click', function(e){
		var mn_drop = $(this).parent().find('.drop-drop');
		if (!$(this).hasClass('_open')) {
			$(this).addClass('_open');
			mn_drop.addClass('_expand');
		}else{
			$(this).removeClass('_open');
			mn_drop.removeClass('_expand');
		}
	});

	$('.tab-drop .drop-drop .item-drop').on('click', function(e){
		var tab_url = $(this).attr('href');
		var tab_text = $(this).text();
		console.log(tab_text, tab_url);
		$(this).parents('.tab-drop').find('.text-drop').text(tab_text);
		e.preventDefault();
	});

	// Set grid/list display
	$(document).on('click', '.ct-display .i-display', function(e){
		var dp_container = typeof $(this).attr('data-container')!==typeof undefined?$(this).data('container'):$(this).attr('href');
		dp_container = dp_container.replace(/^\#/, "");
		$('.ct-display .i-display').removeClass('_current');
		$(this).addClass('_current');
		$('#'+dp_container).removeClass('_ct_grid').removeClass('_ct_list').addClass($(this).data('display'));
		e.preventDefault();
	});


	// Set width wrapper list select in city
	var ct_wrapper = $('.form-select-city .search-dropdown');
	var w_wrapper = ct_wrapper.outerWidth() - 10;
	var num_item = ct_wrapper.find('.nav-dropdown').length;
	ct_wrapper.find('.nav-dropdown').css("width", w_wrapper);
	$('.form-select-city .wrap-select').css("width", (num_item * w_wrapper));

	// Set wid and height banner
	var w_w = $(document).outerWidth();
	if(w_w >= 640 && w_w <= 768){
		var h_s_mn = $('.menu-side').height();
		$('.banner-side.banner-1').css('height', h_s_mn);
	}

	// Reset animate when resize
	$(window).resize(function(){
		setMenuWidth();
		setTopSearchWidth();
		$('.form-select-city .wrap-select').css("left", 0);
		w_wrapper = ct_wrapper.outerWidth() - 10;
		ct_wrapper.find('.nav-dropdown').css("width", w_wrapper);
		$('.form-select-city .wrap-select').css("width", (num_item * w_wrapper));

		// Set wid and height banner
		var w_w = $(document).outerWidth();
		if(w_w >= 641 && w_w <= 767){
			var h_s_mn = $('.menu-side').height();
			$('.banner-side.banner-1').css('height', h_s_mn);
		}else{
			$('.banner-side.banner-1').attr('style', "");
		}
	});

	//  Set click menu
	$('.search-dropdown ul.parent-dropdown li').on('click', function(e){
		var wr = $(this).parents('ul');
		$(this).parents('.wrap-select').animate({'left': "-"+w_wrapper}, 700);
	});
	$('.search-dropdown .btn-back-parent').on('click', function(e){
		var wr = $(this).parents('.sub-dropdown').find('ul');
		$(this).parents('.wrap-select').animate({'left': 0}, 700);
	});

	//  Side bar menu event
	$('.mn-parent-side > li > a').on('click', function(e){
		var mn_wr = $(this).parents('li').find('.mn-dropdown-side');
		if (!$(this).parents('li').hasClass('_current')) {
			$('.mn-parent-side > li').removeClass('_current');
			$('.mn-dropdown-side').removeClass('_expand');
			$(this).parents('li').addClass('_current');
			mn_wr.addClass('_expand');
		}else{
			$(this).parents('li').removeClass('_current');
			mn_wr.removeClass('_expand');
		}
		e.preventDefault();
	});
	$('.mn-dropdown-side .btn-back-parent').on('click', function(e){
		var wr = $(this).parents('.mn-dropdown-side');
		wr.removeClass('_expand');
		$(this).parents('.mn-parent-side > li').removeClass('_current');
	});

	// Reset dropdown
	$( document ).on( 'click', function ( e ) {
	    if ( !$( e.target ).is($('.input-nt')) && !$( e.target ).is($('.search-dropdown *'))) {
	        $('.input-nt').removeClass('_open');
			$('.search-dropdown').removeClass('_expand');
		}

		if ( !$( e.target ).is($('#login_click')) && !$( e.target ).is($('.oc-dropdown *'))) {
	        $('#login_click').removeClass('_open');
			$('.oc-dropdown').removeClass('_expand');
		}

		if ( !$( e.target ).is($('.cv-menu')) && !$( e.target ).is($('.cv-menu *')) && !$( e.target ).is($('.top-poc *'))) {
	        $('.cv-menu').removeClass('_open');
			$('.mobile-menu').removeClass('_expand');
			$('body').removeClass('_open');
		}

		if ( !$( e.target ).is($('#onClickSearch')) && !$( e.target ).is($('#onClickSearch *')) && !$( e.target ).is($('.top-search *'))) {
	       	$('#onClickSearch').removeClass('_open');
			$('.top-search').removeClass('_expand');
		}

		if ( !$( e.target ).is($('.tab-drop .text-drop')) && !$( e.target ).is($('.tab-drop .text-drop *'))) {
	       	$('.tab-drop .text-drop').removeClass('_open');
			$('.tab-drop .drop-drop').removeClass('_expand');
		}

		if ( !$( e.target ).is($('.mn-parent-side > li > a')) && !$( e.target ).is($('.mn-parent-side > li *'))) {
	       	$('.mn-parent-side > li').removeClass('_current');
			$('.mn-dropdown-side').removeClass('_expand');
		}
	});

	$(document).on('click', '.dt-thumb .chip-thumb-i',  function(e){
		var img_url = $(this).data('image');
		var w_img = $(this).parents('.dt-thumb').find('.ct-replace-img');
		console.log(img_url, w_img);
		w_img.find('img').attr('src', img_url);
	});

	$( document ).on( 'keydown', function ( e ) {
	    if ( e.keyCode === 27 ) { // ESC
	    	$('#login_click').removeClass('_open');
			$('.oc-dropdown').removeClass('_expand');
	        $('.input-nt').removeClass('_open');
			$('.search-dropdown').removeClass('_expand');
			$('.cv-menu').removeClass('_open');
			$('.mobile-menu').removeClass('_expand');
			$('#onClickSearch').removeClass('_open');
			$('.top-search').removeClass('_expand');
			$('body').removeClass('_open');
			$('.tab-drop .text-drop').removeClass('_open');
			$('.tab-drop .drop-drop').removeClass('_expand');

			$('.mn-parent-side > li').removeClass('_current');
			$('.mn-dropdown-side').removeClass('_expand');
	    }
	});

	// Click event show phone
	$('#click_show_phone').on('click', function(e){
		var nop = $(this).data('number');
		$(this).html('<a href="tel:'+nop+'">'+nop+'</a>');
	});

	// Set slider
	$('.top-slider').slick({
		dots: true,
		autoplay: true,
		arrows: false,
		adaptiveHeight: true
	});

	// Category slider
	$('.chip-thumb-slider').slick({
		dots: false,
		// autoplay: true,
		arrows: true,
		 infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
		    {
		      	breakpoint: 1024,
		      	settings: {
		        	slidesToShow: 4,
			        slidesToScroll: 4
		      	}
		    },
		    {
		      	breakpoint: 992,
		      	settings: {
		        	slidesToShow: 3,
			        slidesToScroll: 3
		      	}
		    },
		    {
		      	breakpoint: 641,
		      	settings: {
		        	slidesToShow: 4,
			        slidesToScroll: 4
		      	}
		    },
		    {
		      	breakpoint: 541,
		      	settings: {
		        	slidesToShow: 4,
			        slidesToScroll: 4
		      	}
		    },
		    {
		      	breakpoint: 481,
		      	settings: {
		        	slidesToShow: 3,
			        slidesToScroll: 3
		      	}
		    },
		    {
		      	breakpoint: 321,
		      	settings: {
		        	slidesToShow: 2,
			        slidesToScroll: 2
		      	}
		    }
	    ]

		// adaptiveHeight: true
	});
	$('.dt-banner-slider').slick({
		dots: false,
		// autoplay: true,
		arrows: true,
		 infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
		    {
		      	breakpoint: 1024,
		      	settings: {
		        	slidesToShow: 4,
			        slidesToScroll: 4
		      	}
		    },
		    {
			    breakpoint: 992,
			    settings: {
			        slidesToShow: 3,
			        slidesToScroll: 3
			    }
		    },
		    {
			    breakpoint: 769,
			    settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			    }
		    },
		    {
			    breakpoint: 480,
			    settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			    }
		    }
	    ]

		// adaptiveHeight: true
	});

	// Category Ad top slider
	$('#cate-ad-slider').slick({
		dots: false,
		// autoplay: true,
		arrows: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
		    {
		      	breakpoint: 1024,
		      	settings: {
		        	slidesToShow: 3,
			        slidesToScroll: 3
		      	}
		    },
		    {
			    breakpoint: 992,
			    settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			    }
		    },
		    {
			    breakpoint: 769,
			    settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			    }
		    },
		    {
			    breakpoint: 480,
			    settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			    }
		    },
		    {
			    breakpoint: 400,
			    settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			    }
		    }
	    ]

		// adaptiveHeight: true
	});

	/*Scroll Effect*/
	$('.go-top').on("click", function(e){
		$('html, body').stop().animate({
			scrollTop: 0
		}, 300);
		e.preventDefault();
	});

	function scrollTop() {
		if ($(window).scrollTop() < 100) {
			$('.go-top').hide();
		}else {
			$('.go-top').show();
		}
	}

	scrollTop();
	$(window).scroll(function(){
	    scrollTop();
	});

	// Set menu width
	setMenuWidth();
	function setMenuWidth() {
		var pad_ctn = 30;
		var ww = $(document).outerWidth();
		var w_pmn = $('.mn-parent-side').outerWidth();
		var $sub_menu = $('.mn-dropdown-side');
		if (ww > 640) {
			var w_ctn = $('.container').outerWidth() - pad_ctn;
			$sub_menu.css('width', w_ctn - w_pmn);
		}else{
			var w_ctn = $('.container').outerWidth();
			$sub_menu.css('width', w_ctn);
		}
		
	}
	// Set menu width
	setTopSearchWidth();
	function setTopSearchWidth() {
		var w_ps = $('.search-block .form-list .form-item:nth-child(2)').outerWidth();
		var first_ps = $('.search-block .form-list .form-item:nth-child(1)');
		var ww = $(document).outerWidth();
		if (ww > 991) {
			first_ps.css('width', "calc(100% - "+w_ps+"px)");
		}else{
			first_ps.attr('style', "");
		}
		
	}

	// Set position sidebar menu
	// var $sb_parent = $('.mn-parent-side');
	// var sb_parent = $sb_parent.offset();
	// var sb_parent_w = $sb_parent.outerWidth();

	// var sb_sub = $('.mn-dropdown-side');
	// sb_sub.css({"top": sb_parent.top, "left": sb_parent.left, "width": sb_parent_w});
	// console.log(sb_parent.left);
	

});