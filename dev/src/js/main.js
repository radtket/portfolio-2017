/* ---------------------------------------------
 Scripts initialization
 --------------------------------------------- */

// window - load
$(window).on('load', function(){
  $(window).trigger('scroll');
  $(window).trigger('resize');
});

// document - ready
$(function() {
  $(window).trigger('resize');
  init_nav_menu();
  init_sliders();
});

$(window).on('resize', function() {

});




// Mobile Nav
function init_nav_menu() {
	var hamburger__toggle = $('.hamburger').unbind();
	var navbar__nav = $('.navbar__nav');

	navbar__nav.removeClass('navigation-open');

	hamburger__toggle.on('click', function(e) {
		e.preventDefault();
		$('.hamburger').toggleClass('is-active');
		navbar__nav.slideToggle(function() {
			if (navbar__nav.is(':hidden')) {
				navbar__nav.removeAttr('style');
				$('.hamburger').removeClass('is-active');
			}
		});
	})
};




function init_sliders() {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    pagination: '.swiper__pagination',
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 48,
    setWrapperSize: true,

    slideClass: 'clients__swiper--item',
    nextButton: '.swiper-next',
    prevButton: '.swiper-prev',
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 36
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 36
        },
        600: {
            slidesPerView: 1,
            spaceBetween: 24
        }
    }

  })
};
