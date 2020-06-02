jQuery(document).on('ready', function ($) {
    "use strict";
    /*--------------------------
        STICKY MAINMENU
    ---------------------------*/
    $("#mainmenu-area").sticky({
        topSpacing: 0
    });
    /*----------------------------
        OPEN SEARCH FORM
    ----------------------------*/
    var $searchForm = $('.search-form-jws');
    var $searchFormTrigger = $('.search-form-trigger');
    var $formOverlay = $('.search-form-overlay');
    $searchFormTrigger.on('click', function (event) {
        event.preventDefault();
        toggleSearch();
        
    });

    function toggleSearch(type) {
        if (type === "close") {
            //close serach 
            $searchForm.removeClass('is-visible');
            $searchFormTrigger.removeClass('search-is-visible');
        } else {
            //toggle search visibility
            $searchForm.toggleClass('is-visible');
            $searchFormTrigger.toggleClass('search-is-visible');
            if ($searchForm.hasClass('is-visible')) $searchForm.find('input[type="text"]').focus();
            $searchForm.hasClass('is-visible') ? $formOverlay.addClass('is-visible removeicon') : $formOverlay.removeClass('is-visible removeicon');
        }
    }
    /*--------------------------------
        DROPDOWN MOBILE MENU
    ----------------------------------*/
    function doneResizing() {
        if (Modernizr.mq('screen and (max-width:991px)')) {
            $('.at-drop-down').on('click', function (e) {
                e.preventDefault();
                $(this).next($('.sub-menu')).slideToggle('slow');
            });
        }
    }
    var id;
    $(window).resize(function () {
        clearTimeout(id);
        id = setTimeout(doneResizing, 0);
    });
    doneResizing();
    /*---------------------------
        SMOOTH SCROLL
    -----------------------------*/
    $('a.scrolltotop').on('click', function (event) {
        var id = $(this).attr("href");
        var offset = 40;
        var target = $(id).offset().top - offset;
        $('html, body').animate({
            scrollTop: target
        }, 1500, "easeInOutExpo");
        event.preventDefault();
    });
    $('.js-tilt-glare').tilt({
    glare: true,
    maxTilt:        15,
    perspective:    1500,   // Transform perspective, the lower the more extreme the tilt gets.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
    speed:          3000,    // Speed of the enter/exit transition.
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,   // If the tilt effect has to be reset on exit.
    maxGlare:       1       // From 0 - 1.
});
    /*---------------------------
        Shop Cart
    -----------------------------*/
    function BearsthemeOpenMiniCartSidebar() {
    Modernizr.mq("screen and (min-width:992px)") &&	 ($('.bt_widget_mini_cart .bt-cart-header > a.bt-icon').on('hover', function() {
			$('.bt_widget_mini_cart .bt-cart-content').toggleClass('active');
			}));
    }
    BearsthemeOpenMiniCartSidebar();
    function BearsthemeOpenMiniCartSidebar2() {
    Modernizr.mq("screen and (max-width:991px)") &&	 ($('.bt_widget_mini_cart .bt-cart-header > a.bt-icon').on('click', function() {
			$('.bt_widget_mini_cart .bt-cart-content').toggleClass('active');
			}));
    }
    BearsthemeOpenMiniCartSidebar2();
    function Menusub() {
        Modernizr.mq("screen and (max-width:991px)") && ($("#nav  > .menu-item-has-children > a").removeAttr("href"), $("#nav   li  a").on("click", function() {
            $(this).next($(".sub-menu")).slideToggle('slow');
        }))
    }

    /*----------------------------
        SCROLL TO TOP
    ------------------------------*/
    $(window).on("scroll",function () {
        var totalHeight = $(window).scrollTop();
        if (totalHeight > 300) {
            $(".scrolltotop").fadeIn();
        } else {
            $(".scrolltotop").fadeOut();
        }
    });
    $('.about-video-button').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 320,
        preloader: false
    });
    /*---------------------------
        SCREENSHOT SLIDER
    -----------------------------*/
    function tb_carousel_full( items, element, assiged ){
			var _element = $(element+items);
			if( _element.length === 0 && assiged ){
				_element = $(element);
				assiged = true;
			}
			if( _element.length === 0 ) return;
			var _carousel_ops = {
                merge: true,
                video: true,
                items: 1,
                smartSpeed: 1000,
                loop: true,
                nav: true,
                dots:false,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                autoplay: false,
                autoplayTimeout: 2000,
                margin:-1,
                responsiveClass: true,
				responsive:{
					0:{
						items:1,
					},
                    480:{
						items: ( items > 2 ) ? ( items - 2 ) : ( items > 1 ) ? ( items - 1) : items,
					},
					768:{
						items: ( items > 1 ) ? ( items - 1 ) : ( items > 1 ) ? ( items - 1) : items,
					},
					992:{
						items: ( items > 1 ) ? ( items - 1 ) : items,
					},
					1200:{
						items:items,
						nav:true,
					}
				}
		};
        _element.find('.services-slider-full-width-start').owlCarousel( _carousel_ops ); 	
        }; 
    tb_carousel_full( 4,'.tb-column-carousel' );
	tb_carousel_full( 3, '.tb-column-carousel' );
	tb_carousel_full( 2, '.tb-column-carousel' );
	tb_carousel_full( 1, '.tb-column-carousel', true );
    function tb_carousel( items, element, assiged ){
			var _element = $(element+items);
			if( _element.length === 0 && assiged ){
				_element = $(element);
				assiged = true;
			}
			if( _element.length === 0 ) return;
             var doct = false,
                navt = true;
			if( _element.hasClass('jws-staff-grid') ) {
			     doct = true;
			};
			var _carousel_ops = {
                merge: true,
                video: true,
                smartSpeed: 1000,
                loop: true,
                nav: true,
                dots:doct,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                autoplay: false,
                autoplayTimeout: 2000,
                margin: 30,
                responsiveClass: true,
				responsive:{
					0:{
						items:1,
					},
                    480:{
						items: ( items > 2 ) ? ( items - 2 ) : ( items > 1 ) ? ( items - 1) : items,
					},
					768:{
						items: ( items > 1 ) ? ( items - 1 ) : ( items > 1 ) ? ( items - 1) : items,
					},
					992:{
						items: ( items > 1 ) ? ( items - 1 ) : items,
					},
					1200:{
						items:items,
						nav:true,
					}
				}
		};
        _element.find('.owl-slider').owlCarousel( _carousel_ops ); 	
        };
    
    tb_carousel( 4,'.tb-column-carousel' );
	tb_carousel( 3, '.tb-column-carousel' );
	tb_carousel( 2, '.tb-column-carousel' );
	tb_carousel( 1, '.tb-column-carousel', true );
    // Magnific Popup 
// -----------------------------------------
	$(".filter-port figure .prettyPhoto").magnificPopup({
		type       : "image",
		image      : {
			titleSrc: function (item) {
				return item.el.parents('figure').find('h6').html();
			},
			tError  : '<a href="%url%">The image #%curr%</a> could not be loaded.'
		},
		key        : "image-key",
		verticalFit: true,
		mainClass  : "image-popup-style", // This same class is used for video popup
		tError     : '<a href="%url%">The image</a> could not be loaded.',
		gallery    : {
			enabled : true,
			tCounter: ''
		},
		callbacks  : {
			open : function () {
				this.content.addClass("fadeInLeft2");
			},
			close: function () {
				this.content.removeClass("fadeInLeft2");
			}
		}
	});
    //Mobile Menu//
    function menumobi() {
        var body = $("body"),
            mobileNav = $(".mobile_menu"),
            dropDownCat = $(".mobile_menu .mobile_inner .menu-item-has-children"),
            elementIcon = '<span class="icon-sub-menu"></span>',
            butOpener = $(".icon-sub-menu");

        dropDownCat.append(elementIcon);

        mobileNav.on("click", ".icon-sub-menu", function(e) {
            e.preventDefault();

            if ($(this).parent().hasClass("opener-page")) {
                $(this).parent().removeClass("opener-page").find("> ul").slideUp(500);
                $(this).parent().removeClass("opener-page").find(".sub-menu-dropdown  > ul").slideUp(500);
                $(this).parent().find('> .icon-sub-menu').removeClass("up-icon");
            } else {
                $(this).parent().addClass("opener-page").find("> ul").slideDown(500);
                $(this).parent().addClass("opener-page").find(".sub-menu-dropdown  > ul").slideDown(500);
                $(this).parent().find('> .icon-sub-menu').addClass("up-icon");
            }
        });


        $(".navbar-toggle").click(function() {

            if (body.hasClass("open-mobile-menu")) {
                closeMenu();
            } else {
                openMenu();
            }

        });

        body.on("click touchstart", ".over-lay , .mobile_menu .ion-android-close ", function() {
            closeMenu();
        });

        function openMenu() {
            body.addClass("open-mobile-menu");
        }

        function closeMenu() {
            body.removeClass("open-mobile-menu");
        }
    }
    menumobi();
    
       function category_drop() {
        var body = $("body"),
            mobileNav = $(".product-categories"),
            dropDownCat = $(".product-categories .cat-parent"),
            elementIcon = '<span class="icon-sub-menu"></span>',
            butOpener = $(".icon-sub-menu");

        dropDownCat.append(elementIcon);

        mobileNav.on("click", ".icon-sub-menu", function(e) {
            e.preventDefault();

            if ($(this).parent().hasClass("opener-page")) {
                $(this).parent().removeClass("opener-page").find("> ul").slideUp(500);
                $(this).parent().find('> .icon-sub-menu').removeClass("up-icon");
            } else {
                $(this).parent().addClass("opener-page").find("> ul").slideDown(500);
                $(this).parent().find('> .icon-sub-menu').addClass("up-icon");
            }
        });

    }
    category_drop();
    // Isotope Filter
    // ----------------------------------------------
	function isotopeInit() {
		var $container = $(".filter-port"),
			$filter = $(".filter-menu");

		$(window).on("load resize", function () {
			$container.isotope({
				itemSelector     : ".item",
				layoutMode       : "masonry",
                hiddenStyle: {
                  opacity: 0
                  /* , transform: 'scale(0.001)' -- disabled scaling */
                },
                visibleStyle: {
                  opacity: 1
                  /* , transform: 'scale(1)' -- disabled scaling */
                },
                transitionDuration: "0.8s"
			});

			$filter.find("a").on("click touchstart", function (e) {
				var $t = $(this),
					selector = $t.data("filter");
				// Don't proceed if already selected
				if ($t.hasClass("filter-current"))
					return false;

				$filter.find("a").removeClass("filter-current");
				$t.addClass("filter-current");
				$container.isotope({filter: selector});

				e.stopPropagation();
				e.preventDefault();
			});
		})
	}
    /*---------------------------
        Testimonial SLIDER
    -----------------------------*/
    $('.testimonial-owl').owlCarousel({
        merge: true,
        video: true,
        items: 1,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots:true,
        autoplay: false,
        autoplayTimeout: 2000,
        margin: 15,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // Initialization
	isotopeInit();
 function masonryaction() {
        var el = $('.jws_blog_grid');
        el.each(function(i, val) {
            var _option = $(this).data('masonry');

            if (_option !== undefined) {
                var _selector = _option.selector,
                    _width = _option.columnWidth;

                $(this).imagesLoaded(function() {
                    $(val).isotope({
                        itemSelector: _selector,
                        percentPosition: true,
                        masonry: {
                            columnWidth: _width
                        }
                    });
                });

            }
        });
    }
    masonryaction();
      
        $('.quantity').each(function() {
            $(this).prepend('<span class="qty-minus"><i class="fa fa-angle-left"></i></span>');
            $(this).append('<span class="qty-plus"><i class="fa fa-angle-right"></i></span>');
        });
        /* Plus Qty */
        $(document).on('click', '.qty-plus', function() {
            var parent = $(this).parent();
            $('input.qty', parent).val( parseInt($('input.qty', parent).val()) + 1);
        })
        /* Minus Qty */
        $(document).on('click', '.qty-minus', function() {
            var parent = $(this).parent();
            if( parseInt($('input.qty', parent).val()) > 1) {
                $('input.qty', parent).val( parseInt($('input.qty', parent).val()) - 1);
            }
        })
        $( window ).load(function() {
            $(".pg-loading-screen").fadeOut(1000);
        });
        /*--- Romove option first child ---*/
        $("select option[value='']").remove();
       function totop() { 
        
        if ($('#back-to-top').length) {
            var scrollTrigger = 100, // px
                backToTop = function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        $('#back-to-top').addClass('show');
                    } else {
                        $('#back-to-top').removeClass('show');
                    }
                };
            backToTop();
            $(window).on('scroll', function () {
                backToTop();
            });
            $('#back-to-top').on('click', function (e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 700);
            });
        }
        }
     totop();
     
     
     function tb_carousel_salon(){
			if( $('.salon_slider') === 0 ) return;
			var _carousel_ops = {
                merge: true,
                video: true,
                items: 1,
                smartSpeed: 1000,
                loop: true,
                nav: true,
                dots:false,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                margin:-1,

		};
        $('.salon_slider').owlCarousel( _carousel_ops ); 	
        }; 
     tb_carousel_salon();
     function jws_theme_time_popup(){
			var _send_mail = $('#tb-send_mail');
			if( _send_mail.length === 0 || typeof $.cookie === undefined) return;

			var _ckie_popup = $.cookie('ckie_popup');
			if( $.cookie('ckie_popup')!=='true'  ){
			    setTimeout(function(){
				_send_mail.fadeIn();
				},6000);
			}
			_send_mail.find('#tb-hide-popup').on('change', function(){
				if( $(this).is(':checked') ){
					$.cookie('ckie_popup', true, { expires: 30, path: '/' });
				}else{
					$.cookie('ckie_popup', false, { expires: -50, path: '/' });
				}
			});
            $('.tb-close-lightbox').on('click', function(e){
				e.preventDefault();
				var _parent = $($(this).attr('href'));
				if( _parent.length ){
					_parent.fadeOut();
				}
			});
		};
        jws_theme_time_popup();
     
     $('.open-popup-booking').magnificPopup({
      type:'inline',
      midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
     $('.mobile_sidebar').magnificPopup({
      type:'inline',
      midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
        callbacks: {
          beforeOpen: function() {
             $( 'html' ).css( "overflow", "hidden" );
          },
          close: function() {
            $( 'html' ).css( "overflow", "auto" );
          }
    }
    });
}(jQuery));
