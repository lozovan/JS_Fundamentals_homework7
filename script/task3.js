document.addEventListener("DOMContentLoaded", function() {
    const clickEvent = document.getElementById('clickEvent');
    const doubleClickEvent = document.getElementById('doubleClickEvent');
    const pressHoldEvent = document.getElementById('pressHoldEvent');
    const hoverEvent = document.getElementById('hoverEvent');

    clickEvent.addEventListener('click', function() {
        document.body.style.backgroundColor = 'blue';
    });

    doubleClickEvent.addEventListener('dblclick', function() {
        document.body.style.backgroundColor = 'pink';
    });

    let holdTimeout;
    pressHoldEvent.addEventListener('mousedown', function() {
        holdTimeout = setTimeout(function() {
            document.body.style.backgroundColor = 'brown';
        }, 1000);
    });

    pressHoldEvent.addEventListener('mouseup', function() {
        clearTimeout(holdTimeout);
        document.body.style.backgroundColor = 'white';
    });

    hoverEvent.addEventListener('mouseenter', function() {
        document.body.style.backgroundColor = 'yellow';
    });

    hoverEvent.addEventListener('mouseleave', function() {
        document.body.style.backgroundColor = 'white';
    });
});