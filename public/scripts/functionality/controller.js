console.log("controller.js");

let card = document.getElementById('card');
const keylogger = [];
const currentPage = location.href.substring(21, 50);
let pageIndex = 0;
const pages = {
    1: "/",
    2: "router/page2",
    3: "/page3",
    4: "/page4",
    5: "/page5"
}

onload = () => {
    initKeylogger();
    initPageNavigation();
    animateCurrentPage();
}

// ____________________  KEYLOGGER  _____________________ //

function testIt() {
    console.log("TESTING IT");
}

// KEYLOGGER
function initKeylogger() {

    setInterval(() => {
        keylogger.length = 0;
    }, 500);

    // log keypresses
    addEventListener('keydown', function (kbd) {
        if (kbd.ctrlKey)
            keylogger.push('Control');

        if (kbd.key == 'ArrowDown')
            keylogger.push('ArrowDown');

        if (kbd.key == 'ArrowUp')
            keylogger.push('ArrowUp');

        if (keylogger.includes('Control') && keylogger.includes('ArrowDown'))
            gotoNextPage();

        if (keylogger.includes('Control') && keylogger.includes('ArrowUp'))
            gotoPreviousPage();



    });
}

// ____________________  NAVIGATION  ____________________ //

function initPageNavigation() {
    for (let i = 1; i <= Object.keys(pages).length; i++) {
        if (currentPage == pages[i])
            pageIndex = i;
    }
}

function gotoNextPage() {
    // Avoid form submit reset
    // May have to disable keyboard while animating page switching
    // Redirect by using pageIndex

    // openFullscreen(); => disabled for testing purposes

    slideOutFromBottom();
    submitAndRedirectTo("next");

}

function gotoPreviousPage() {
    slideOutFromTop();
    submitAndRedirectTo("Previous");
    // No form submit by going back, only when going forward
    // Redirect by using pageIndex
}

function submitAndRedirectTo(goto) {
    // console.log("goto: _____" + goto);
    let formSubmit = document.getElementById('form');
    formSubmit.submit();
    setTimeout(() => {
        if (goto == "next") {
            window.location.replace(pages[pageIndex+1]);
        } else if (goto == "previous") {
            window.location.replace(pages[pageIndex-1]);
        }
        return false;
    }, 500);
}

function openFullscreen() {
    var de = document.documentElement;
    if (de.requestFullscreen) {
        de.requestFullscreen();
    } else if (de.mozRequestFullScreen) { /* Firefox */
        de.mozRequestFullScreen();
    } else if (de.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        de.webkitRequestFullscreen();
    } else if (de.msRequestFullscreen) { /* IE/Edge */
        de.msRequestFullscreen();
    }
}


// ____________________  ANIMATION  _____________________ //

// Introduce the docElem by:
// 1: Slide a card in from the bottom to the center of the screen
// 2: Display the content of the card from top to bottom

// Go to the next docElem by:
// Doing the same thing, but in reverse.
function animateCurrentPage() {
    switch(currentPage) {
        case '/':
            slideInFromTop();
            break;
        case '/router/page2':
            slideInFromTop();
            break;
        // default:
        //     console.log("default switch statement");
    }
}

function slideInFromBottom() {
    let card = document.getElementById('card');
    card.style.visibility = "visible";
    card.classList.add('slide-in-top');
}

function slideInFromTop() {
    let card = document.getElementById('card');
    card.style.visibility = "visible";
    card.classList.add('slide-in-bottom');
}

function slideOutFromBottom() {
    let card = document.getElementById('card');
    card.classList.add('slide-out-top');
}

function slideOutFromTop() {
    let card = document.getElementById('card');
    card.classList.add('slide-out-bottom');
}

function unfoldHorCenter() {
    let card = document.getElementById('card');
    card.classList.add('scale-up-hor-center');
}




