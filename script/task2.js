document.addEventListener("DOMContentLoaded", function() {
    const changeStyleButton = document.getElementById("changeStyleButton");
    const text = document.getElementById('text');

    changeStyleButton.addEventListener('click', function() {
        text.style.color = 'orange';
        text.style.fontSize = '20px';
        text.style.fontFamily = 'Comic Sans MS';
    });
});