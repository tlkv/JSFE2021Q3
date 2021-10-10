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
});