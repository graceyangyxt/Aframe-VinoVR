//Music variables
var i = 0;
var playlist ='';

//Buttons
const relaxBtn = document.querySelector('#relaxBtn');
const sexyBtn = document.querySelector('#sexyBtn');
const happyBtn = document.querySelector('#happyBtn');
const sadBtn = document.querySelector('#sadBtn');
const playBtn = document.querySelector('#playBtn');
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

//Playlist arrays
var relax = [
    "client/src/audio/girl-from-ipanema.mp3",
    "client/src/audio/pink+white.mp3",
    "client/src/audio/i-like-that.mp3",
    "client/src/audio/woman-in-mirror.mp3",
    "client/src/audio/4ever.mp3",
    "client/src/audio/la-thune.mp3",
];

var sexy = [
    "client/src/audio/best-part.mp3",
    "client/src/audio/collide.mp3",
    "client/src/audio/telepatia.mp3",
    "client/src/audio/fantasy.mp3",
    "client/src/audio/i-wanna-be-yours.mp3",
    "client/src/audio/bood-up.mp3",
];

var happy = [
    "client/src/audio/dance-alone.mp3",
    "client/src/audio/good-as-hell.mp3",
    "client/src/audio/comme-des-garcons.mp3",
    "client/src/audio/music-sounds-better-with-you.mp3",
    "client/src/audio/10-10.mp3",
    "client/src/audio/dancing-on-my-own.mp3"
];

var sad = [
    "client/src/audio/let-me-down.mp3",
    "client/src/audio/orbit.mp3",
    "client/src/audio/lonely.mp3",
    "client/src/audio/good-news.mp3",
    "client/src/audio/somebody-else.mp3",
    "client/src/audio/pretty-hurts.mp3"
];

//Play.Pause function
function playSound() {
    if (music.paused) {
        music.play();
        playBtn.setAttribute('geometry',{primitive: 'box'});
        playBtn.setAttribute('scale','0.04 0.04 0.04 0.04');
        playBtn.setAttribute('material',{color: 'red'});
    } else {
        music.pause();
        playBtn.setAttribute('geometry',{primitive: 'sphere'});
        playBtn.setAttribute('scale','0.025 0.025 0.025 0.025');
        playBtn.setAttribute('material',{color: 'green'});
    };
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
    };

    music.src = relax[i];

    playSound();
};

function prevRelax() {
    if (i === 0) {
        i = 0;
    } else {
        i--;
    };

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
    };

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
};

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

function nextSad() {
    if (i === sad.length - 1) {
        i = 0;
    } else {
        i++;
    }

    music.src = sad[i];

    playSound();
};

function prevSad() {
    if (i === 0) {
        i = 0;
    } else {
        i--;
    };

    music.src = sad[i];

    playSound();
};

//Next/previous functions
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
};

//Event listeners
music.addEventListener('ended', next);

playBtn.addEventListener('click', function() {
    if (playlist === '') {
        alert('Please select a mood first!');
        return;
    } else {
        if (music.paused) {
            console.log('Playing music!');
        } else {
        console.log('Pausing music!');
        }
        playSound();
    };
});

nextBtn.addEventListener('click', function() {
    console.log('Next song playing!');
    if (playlist === '') {
        alert('Please select a mood first!');
        return;
    } else {
        next();
    };
});

prevBtn.addEventListener('click', function() {
    console.log('Previous song playing!');
    if (playlist === '') {
        alert('Please select a mood first!');
        return;
    } else {
        prev();
    };
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