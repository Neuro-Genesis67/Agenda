console.log("initialized ----- keylogger.js");


const keylogger = [];
let controller = new Controller();

setInterval(() => {
    keylogger.length = 0;
}, 500);

addEventListener('keydown', function (kbd) {
    if (kbd.ctrlKey)
        keylogger.push('Control');

    if (kbd.key == 'ArrowDown')
        keylogger.push('ArrowDown');

    if (kbd.key == 'ArrowUp')
        keylogger.push('ArrowUp');

    if (keylogger.includes('Control') && keylogger.includes('ArrowUp'))
        controller.loadPage("previousCard");

    if (keylogger.includes('Control') && keylogger.includes('ArrowDown'))
        controller.loadPage("nextCard");

});
