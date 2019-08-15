// When doing transitions, javascript only accepts milliseconds






onload = () => {
slideIn();

// right when the page has loaded, press enter to go fullscreen
addEventListener('keypress', function (pressed) {
    if (pressed.key === 'Enter') {
        fs();
    } else if (pressed.key === 'o') {
        slideOut();
    }
});

function slideIn() {
    let card = document.getElementById('card');
    card.classList.add('slide-in-bottom');
}

function slideOut() {
    console.log("slideOut()");
    let card = document.getElementById('card');
    card.classList.remove('slide-in-bottom');
    card.classList.add('slide-out-top');
}

function fs(){
    console.log("fs running");
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    }
}

}