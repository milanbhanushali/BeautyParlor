!(function($){"use strict";jQuery(document).ready(function($){function jwsthemeTestimonialSlider(){$('.testimonial-slider-ct .slider3').slick({slidesToShow:1,slidesToScroll:1,fade:!1,nextArrow:'<span class="ti-angle-right"></span>',prevArrow:'<span class="ti-angle-left"></span>',});$('#content').slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!1,asNavFor:'#thmbnail-img'});$('#thmbnail-img').slick({slidesToShow:3,slidesToScroll:1,asNavFor:'#content',dots:!1,centerMode:!0,nextArrow:'<span class="ti-angle-right"></span>',prevArrow:'<span class="ti-angle-left"></span>',responsive:[{breakpoint:768,settings:{arrows:!0,centerMode:!0,centerPadding:'0px',slidesToShow:1}},{breakpoint:480,settings:{arrows:!0,centerMode:!0,centerPadding:'0px',slidesToShow:1}}]})}
jwsthemeTestimonialSlider();function jwsthemeTestimonialSliderCenter(){$('.flexslider-center').slick({centerMode:!0,centerPadding:'30%',slidesToShow:1,arrows:!1,responsive:[{breakpoint:768,settings:{arrows:!1,centerMode:!0,centerPadding:'40px',slidesToShow:1}},{breakpoint:480,settings:{arrows:!1,centerMode:!0,centerPadding:'0px',slidesToShow:1}}]})}
jwsthemeTestimonialSliderCenter()})})(jQuery)