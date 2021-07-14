var chill = [
    "client/src/audio/heavn-jamila-woods.mp3",
    "client/src/audio/pink+white.mp3",
    "client/src/audio/girl-from-ipanema,mp3"
];

function nextChill() {
    if (i === chill.length - 1) {
        i = 0;
    } else {
        i++;
    }

    console.log(music.src)

    console.log('Next song is playing!');

    playSound();
};