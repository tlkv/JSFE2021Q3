
const darkThemeButton = document.getElementById("toggleDark");

darkThemeButton.addEventListener("click", darkThemeToggle);

function darkThemeToggle() {
	const main = document.querySelector("main");
    const footer = document.querySelector("footer");    
    const x = document.getElementById('toggleDark');
    const y = document.getElementById('toggle-btn');
    const z = document.getElementById('change-icon1');
    const h = document.getElementById('change-icon2');
	main.classList.toggle('dark-global');
    footer.classList.toggle('dark-global');
    x.classList.toggle('toggle-dark');
    y.classList.toggle('span-dark');
    z.classList.toggle('moon-icon');
    h.classList.toggle('sun-icon');
}