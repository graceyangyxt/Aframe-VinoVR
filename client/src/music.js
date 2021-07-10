const sound = new Audio();
const button = document.querySelector('#playObj');
button.addEventListener('click', playSound);

function playSound() {
    sound.src = 'client/src/audio/heavn-jamila-woods.mp3'
    sound.play();
};