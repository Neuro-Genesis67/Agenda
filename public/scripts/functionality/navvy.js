console.log("navvy.js");



class Navigator {
    constructor() {
        // this.keylogger = [];
        this.currentPage = location.href.substring(21, 50);
        this.pageIndex = 0;
        this.pages = {
            1: "/",
            2: "/page2",
            3: "/page3",
            4: "/page4",
            5: "/page5"
        }
    }

    testIt() {
        console.log("TESTING IT");
    }

// KEYLOGGER
    initKeylogger() {
        let keylogger = [];
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

// PAGE NAVIGATION
    initPageNavigation() {
        for (let i = 1; i <= Object.keys(pages).length; i++) {
            if (currentPage == pages[i])
                pageIndex = i;
        }
    }

    gotoNextPage() {
        console.log("gotoNextPage()");
        // Avoid form submit reset
        // Redirect by using pageIndex
    }

    gotoPreviousPage() {
        console.log("gotoPreviousPage()");
        // No form submit by going back, only when going forward
        // Redirect by using pageIndex
    }
}


const nvg = new Navigator();
// let nvg = new Navigator();
// var nvg = new Navigator();
nvg.initKeylogger();
