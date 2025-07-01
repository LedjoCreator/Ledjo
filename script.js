let kengaAktive = null;
let butoniAktive = null;

function luajOseNdalo(butoni, emriKenges) {
    let audio = document.getElementById(emriKenges);

    if (audio === kengaAktive && !audio.paused) {
        audio.pause();
        butoniAktive.innerHTML = '▶';
        kengaAktive = null;
        butoniAktive = null;
        return;
    }

    if (kengaAktive && kengaAktive !== audio) {
        kengaAktive.pause();
        kengaAktive.currentTime = 0;
        if (butoniAktive)
            butoniAktive.innerHTML = '▶';
    }

    audio.play();
    butoni.innerHTML = '⏸';
    kengaAktive = audio;
    butoniAktive = butoni;

    audio.onended = function () {
        butoni.innerHTML = '▶';
        kengaAktive = null;
        butoniAktive = null;
    };
}
