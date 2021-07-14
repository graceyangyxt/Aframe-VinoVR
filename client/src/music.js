//Music values
var i = 0;
var playlist ='';
// const music = document.querySelector('#audio');

//Buttons
const relaxBtn = document.querySelector('#relaxBtn');
const sexyBtn = document.querySelector('#sexyBtn');
const happyBtn = document.querySelector('#happyBtn');
const sadBtn = document.querySelector('#sadBtn');
const nextBtn = document.querySelector('#nextBtn');

//Playlist arrays
var relax = [
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
function playRelax() {
    if (playlist === "relax") {
        return;
    } else {
        i = 0;
        playlist = "relax";
        music.src = relax[i];
        playSound();
    };
};

function nextRelax() {
    if (i === relax.length - 1) {
        i = 0;
    } else {
        i++;
    }

    music.src = relax[i];

    playSound();
};

function prevRelax() {
    if (i === 0) {
        i = 0;
    } else {
        i--;
    }

    music.src = relax[i];

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

    playSound();
};

function prevSexy() {
    if (i === 0) {
        i = 0;
    } else {
        i--;
    }

    music.src = sexy[i];

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

    playSound();
};

function prevHappy() {
    if (i === 0) {
        i = 0;
    } else {
        i--;
    }

    music.src = happy[i];

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

    playSound();
};

function prevSad() {
    if (i === 0) {
        i = 0;
    } else {
        i--;
    }

    music.src = sad[i];

    playSound();
};

//Next functions
function next() {
    if (playlist === "relax") {
        nextRelax();
    } else if (playlist === "sexy") {
        nextSexy();
    } else if (playlist === "happy") {
        nextHappy();
    } else {
        nextSad();
    };

    console.log('Next song is playing!');
};

function prev() {
    if (playlist === "relax") {
        prevRelax();
    } else if (playlist === "sexy") {
        prevSexy();
    } else if (playlist === "happy") {
        prevHappy();
    } else {
        prevSad();
    };

    console.log('Previous song is playing!');
};

//Event listeners
music.addEventListener('ended', function() {
    next();
});

nextBtn.addEventListener('click', function() {
    console.log('Next was clicked!');
    next();
});

prevBtn.addEventListener('click', function() {
    console.log('Previous was clicked!');
    prev();
});

relaxBtn.addEventListener('click', function() {
    playRelax();
    console.log('Playing the relax playlist!');
});

sexyBtn.addEventListener('click', function() {
    playSexy();
    console.log('Playing the sexy playlist!');
});

happyBtn.addEventListener('click', function() {
    playHappy();
    console.log('Playing the happy playlist!');
});

sadBtn.addEventListener('click', function() {
    playSad();
    console.log('Playing the sad playlist!');
});