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



}