
liveButton.addEventListener('mousedown', eventHendler)
liveButton.addEventListener('mouseenter', eventHendler)
liveButton.addEventListener('mouseleave', eventHendler)

function eventHendler(event) {
    event.type === 'mouseenter'
    ? printText('Mouse on me!')
    : event.type === 'mousedown'
    ? printText('I was pressed!')
    : printText('Mouse is not on me!');
}
function printText(text) {
    const paragraph = document.createElement('p');
    const textInParagraph = document.createTextNode(text);
    liveButtontext.appendChild(paragraph).appendChild(textInParagraph)
}