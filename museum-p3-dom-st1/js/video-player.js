const progress = document.querySelectorAll('.player-range');
for (let item of progress) {
    item.addEventListener('input', function () {
        const value = this.value;
        this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
    });
}