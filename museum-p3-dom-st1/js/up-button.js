const upButton = document.querySelector(".up-button");

document.addEventListener("scroll", () => {
	if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
		upButton.classList.add("show-button");
	}
	else {
		upButton.classList.remove("show-button");
	}
});