window.addEventListener("DOMContentLoaded", () => {
	//jquery for Lightslider library
	$('#image-gallery').lightSlider({
		
		item: 1,
		slideMargin: 0,
		speed: 500,
		loop: true,
		keyPress: true,
		onSliderLoad: function () {
			$('#image-gallery').removeClass('cS-hidden');
		}
	});
	$('#video-slider-wrapper').lightSlider({		
		item: 3,
		slideMargin: 40,
		speed: 500,
		loop: true,
		keyPress: true,
		onSliderLoad: function () {
			$('#video-slider-wrapper').removeClass('cS-hidden');
		},
		responsive: [
			{
				breakpoint: 800,
				settings: {
					item: 2,
				}
			},
		],
	});
	
	const welcomeArea = document.querySelectorAll('.slider, .slider .lSPrev, .slider .lSNext, .slider .lSPager a');
	const sliderCurNum = document.querySelector('.slider-cur-num');
	welcomeArea.forEach(item => {
		item.addEventListener('click', () => {
			sliderCurNum.textContent = '0' + document.querySelector('.slider .lSPager .active a').textContent;
		});
	});
});