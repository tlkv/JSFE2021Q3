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

	const videoArea = document.querySelectorAll('.video-section .lSPrev, .video-section .lSNext, .video-section .lSPager a');


	videoArea.forEach(item => {
		item.addEventListener('click', () => {
			let videoSrc = "./assets/video/video" + Number(document.querySelector('.video-section .lSPager .active a').textContent - 1) + ".mp4";
			let videoPreview = "./assets/video/poster" + Number(document.querySelector('.video-section .lSPager .active a').textContent - 1) + ".jpg";
			videoScr.setAttribute("src", videoSrc);
			videoScr.setAttribute("poster", videoPreview);
			toggleStop();
		});
	});
});
const playButtonBig1 = document.querySelector('.play-button');
const playSmall1 = document.querySelector('.player-start');
const videoScr = document.querySelector('.video-item');
function toggleStop() {
	videoScr.pause();
	videoScr.currentTime = 0;
	playButtonBig1.classList.remove('button-opacity');
	playSmall1.classList.remove('play-button-opacity');
}