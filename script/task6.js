function displayWindowSize() {
    const widthSpan = document.getElementById('width');
    const heightSpan = document.getElementById('height');
    widthSpan.textContent = window.innerWidth;
    heightSpan.textContent = window.innerHeight;
}

window.addEventListener('resize', displayWindowSize);

displayWindowSize();