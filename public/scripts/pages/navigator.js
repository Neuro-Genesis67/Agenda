const keylogger = [];

initKeylogger();

function initKeylogger() {

    // setInterval()

    setInterval(() => {
        console.log("emptying logger");
        keylogger.length = 0;
    }, 2500);

    // log keypresses
    addEventListener('keydown', function (kbd) {
        if (kbd.key == "Alt")
            keylogger.push('Alt');

        if (kbd.key == 'ArrowDown')
            keylogger.push('ArrowDown');
    });
}