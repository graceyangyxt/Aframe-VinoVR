const button = document.querySelector('#playBtn');
const nextBtn = document.querySelector('#nextBtn');

//Playlist array
var chill = [
    "client/src/audio/heavn-jamila-woods.mp3",
    "client/src/audio/pink+white.mp3"
];

var i = 0;

var music = document.querySelector("#playBtn audio");

music.src = chill[i];

function next() {
    if (i === files.length - 1) {
        i = 0;
    } else {
        i++;
    }

    music.src = chill[i];

    console.log('Next song is playing!');

    playSound();
};


function playSound() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
};

music.addEventListener('ended', next);

button.addEventListener('click', playSound);
button.addEventListener('click', function() {
    console.log('Play/Pause was clicked!');
});

nextBtn.addEventListener('click', function() {
    console.log('Next was clicked!');
});
nextBtn.addEventListener('click', next);