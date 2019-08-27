console.log("navigator.js");


const keylogger = [];

const currentPage = location.href.substring(21, 50);
let pageIndex = 0;
const pages = {
    1: "/",
    2: "/page2",
    3: "/page3",
    4: "/page4",
    5: "/page5"
}


initKeylogger();
initPageNavigation();

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

        if (kbd.key === 'Enter')
            openFullscreen();

        if (keylogger.includes('Control') && keylogger.includes('ArrowDown'))
            gotoNextPage();

        if (keylogger.includes('Control') && keylogger.includes('ArrowUp'))
            gotoPreviousPage();



    });
}

// PAGE NAVIGATION
function initPageNavigation() {
    for (let i = 1; i <= Object.keys(pages).length; i++) {
        if (currentPage == pages[i])
            pageIndex = i;
    }
}

function gotoNextPage() {
    console.log("gotoNextPage()");
    // Avoid form submit reset
    // Redirect by using pageIndex
}

function gotoPreviousPage() {
    console.log("gotoPreviousPage()");
    // No form submit by going back, only when going forward
    // Redirect by using pageIndex
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

