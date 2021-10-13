function exploreCompare() {
	var x, i;
	x = document.getElementsByClassName("explore-img-comp-overlay");
	for (i = 0; i < x.length; i++) {
		compareImages(x[i]);
	}

	function compareImages(img) {
		var slider, img, clicked = 0, w, h;
		w = img.offsetWidth;
		h = img.offsetHeight;
		img.style.width = (w / 1.6) + "px";
		slider = document.createElement("div");
		slider.setAttribute("class", "explore-img-comp-slider");
		img.parentElement.insertBefore(slider, img);
		slider.style.left = (w / 1.6) - (slider.offsetWidth / 2) + "px";
		slider.addEventListener("mousedown", slideReady);
		window.addEventListener("mouseup", slideFinish);
		slider.addEventListener("touchstart", slideReady);
		window.addEventListener("touchstop", slideFinish);
		function slideReady(e) {
			e.preventDefault();
			clicked = 1;
			window.addEventListener("mousemove", slideMove);
			window.addEventListener("touchmove", slideMove);
		}
		function slideFinish() {
			clicked = 0;
		}
		function slideMove(e) {
			var pos;
			if (clicked == 0) return false;
			pos = getCursorPos(e);
			if (pos < 0) pos = 0;
			if (pos > w) pos = w;
			slide(pos);
		}
		function getCursorPos(e) {
			var a, x = 0;
			e = e || window.event;
			a = img.getBoundingClientRect();
			x = e.pageX - a.left;
			x = x - window.pageXOffset;
			return x;
		}
		function slide(x) {
			img.style.width = x + "px";
			slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
		}
	}
}

window.addEventListener("DOMContentLoaded", () => {
	exploreCompare();
	/* alert('Если что-то не работает - перезагрузите страницу. Если ошибки не уйдут просьба сообщить мне, мой дискорд - Dante89919001,самооценка и описание доп функционала в console заранее спасибо'); */
	setTimeout("alert('hello world');", 1);
});
