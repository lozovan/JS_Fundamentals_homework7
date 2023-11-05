let characterImages = {
    character1: 'img/staff/game_staff_01.png',
    character2: 'img/staff/game_staff_02.png',
    character3: 'img/staff/game_staff_03.png',
    character4: 'img/staff/game_staff_04.png',
    character5: 'img/staff/game_staff_05.png',
    character6: 'img/staff/game_staff_06.png',
    character7: 'img/staff/game_staff_07.png',
    character8: 'img/staff/game_staff_08.png',
    character9: 'img/staff/game_staff_09.png',
    character10: 'img/staff/game_staff_10.png',
    character11: 'img/staff/game_staff_11.png',
    character12: 'img/staff/game_staff_12.png',
    character13: 'img/staff/game_staff_13.png',
    character14: 'img/staff/game_staff_14.png',
    character15: 'img/staff/game_staff_15.png',
    
};

const character = document.getElementById('character');
let posX = 0;
let posY = 0;
let isJumping = false;
let jumpCount = 0;
const stepSize = 10;
let originalPosX = 0;
let originalPosY = 0;

function handleKeyPress(e) {
    e = e || window.event;
    switch (e.keyCode) {
        case 37: 
            posX -= stepSize;
            break;
        case 38: 
            posY -= stepSize;
            break;
        case 39: 
            posX += stepSize;
            break;
        case 40: 
            posY += stepSize;
            break;
        case 32: 
            if (!isJumping) jump();
            break;
    }
    character.style.left = posX + 'px';
    character.style.top = posY + 'px';
}

function jump() {
    isJumping = true;
    originalPosX = posX;
    originalPosY = posY;
    let jumpInterval = setInterval(function () {
        posY -= 5;
        jumpCount++;
        character.style.top = posY + 'px';
        if (jumpCount >= 15) {
            clearInterval(jumpInterval);
            fall();
        }
    }, 20);
}

function fall() {
    let fallInterval = setInterval(function () {
        if (posY < originalPosY) {
            posY += 5;
            character.style.top = posY + 'px';
        } else {
            clearInterval(fallInterval);
            isJumping = false;
            jumpCount = 0;
        }
    }, 20);
}

function changeCharacter() {
    const selectBox = document.getElementById('characterSelect');
    const selectedCharacter = selectBox.value;
    character.style.backgroundImage = `url(${characterImages[selectedCharacter]})`;
}

document.onkeydown = handleKeyPress;

changeCharacter();