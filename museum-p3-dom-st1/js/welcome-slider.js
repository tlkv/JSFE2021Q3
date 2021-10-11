/* $(document).ready(function() {

}); */

window.addEventListener("DOMContentLoaded", () => {
		//console.log('fire ');
		/* $("#content-slider").lightSlider({
			loop:true,
			item:1,
			keyPress:true
		}); */
		$('#image-gallery').lightSlider({
			/* gallery:true,  */ /* auto:true, */ /* thumbItem:9, */
			item:1,			
			slideMargin: 0,
			speed:500,			
			loop:true,
			keyPress:true,
			onSliderLoad: function() {
				$('#image-gallery').removeClass('cS-hidden');
			}  
		});
		$('#video-slider-wrapper').lightSlider({
			/* gallery:true,  */ /* auto:true, */ /* thumbItem:9, */
			item:3,			
			slideMargin: 40,
			speed:500,			
			loop:true,
			keyPress:true,
			onSliderLoad: function() {
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
});