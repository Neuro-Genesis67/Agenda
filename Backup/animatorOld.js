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

// // ctrl + down:
// let formValue = document.getElementById('form').value;
// formValue = "nextPage";




// ____________________  KEYLOGGER  _____________________ //
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







