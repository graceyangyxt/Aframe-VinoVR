const chillBtn = document.querySelector('#playBtn');
const nextBtn = document.querySelector('#nextBtn');

var i = 0;
var playlist ='';

//Playlist arrays
var chill = [
    "client/src/audio/girl-from-ipanema.mp3",
    "client/src/audio/heavn-jamila-woods.mp3",
    "client/src/audio/pink+white.mp3"
];

var sexy = [
    "client/src/audio/at-last.mp3",
];

var happy = [
    "client/src/audio/dance-alone.mp3"
];

var sad = [
    "client/src/audio/let-me-down.mp3"
];

//Play.Pause function
function playSound() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
};

//Chill functions
function playChill() {
    if (playlist === "chill") {
        return;
    } else {
    i = 0;
    playlist = "chill";
    music.src = chill[i];
    playSound();
    };
};

function nextChill() {
    if (i === chill.length - 1) {
        i = 0;
    } else {
        i++;
    }

    music.src = chill[i];

    console.log('Next song is playing!');

    playSound();
};

//Sexy functions
function playSexy() {
    if (playlist === "sexy") {
        return;
    } else {
    i = 0;
    playlist = "sexy";
    music.src = sexy[i];
    playSound();
    };
}

function nextSexy() {
    if (i === sexy.length - 1) {
        i = 0;
    } else {
        i++;
    }

    music.src = sexy[i];

    console.log('Next song is playing!');

    playSound();
};

//Happy functions
function playHappy() {
    if (playlist === "happy") {
        return;
    } else {
    i = 0;
    playlist = "happy";
    music.src = happy[i];
    playSound();
    };
}

function nextHappy() {
    if (i === happy.length - 1) {
        i = 0;
    } else {
        i++;
    }

    music.src = happy[i];

    console.log('Next song is playing!');

    playSound();
};


//Sad functions
function playSad() {
    if (playlist === "sad") {
        return;
    } else {
    i = 0;
    playlist = "sad";
    music.src = sad[i];
    playSound();
    };
};

function nextSexy() {
    if (i === sexy.length - 1) {
        i = 0;
    } else {
        i++;
    }

    music.src = sexy[i];

    console.log('Next song is playing!');

    playSound();
};

//Next functions
function next() {
    if (playlist === "chill") {
        nextChill();
    } else if (playlist === "sexy") {
        nextSexy();
    } else if (playlist === "happy") {
        nextHappy();
    } else {
        nextSad();
    };
};

//Event listeners
music.addEventListener('ended', function() {
    next();
    console.log('Next song is playing!');
});

nextBtn.addEventListener('click', function() {
    next();
    console.log('Next was clicked!');
});

chillBtn.addEventListener('click', function() {
    playChill();
    console.log('Play/Pause was clicked!');
});
