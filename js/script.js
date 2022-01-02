// Sticky
$(window).scroll(function(){
	var sticky = $('.header-wrapper'),
	    scroll = $(window).scrollTop();

	if (scroll >= 130) sticky.addClass('fixed');
	else sticky.removeClass('fixed');
});

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	loop: true,
	autoplay: {
	  delay: 2500,
	  disableOnInteraction: false,
	},
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
	breakpoints: {
	  320: {
	    slidesPerView: 1,
	    spaceBetween: 10,
	  },
	  768: {
	    slidesPerView: 2,
	    spaceBetween: 20,
	  },
	  1024: {
	    slidesPerView: 3,
	    spaceBetween: 30,
	  },
	},
});

// Wow
new WOW().init();

// Lightbox
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})