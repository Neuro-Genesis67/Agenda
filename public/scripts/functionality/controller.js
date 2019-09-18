console.log("initialized ----- controller.js");

class Controller {

    loadNewCard = function (cardNumber) {
        // animator.openFullscreen(); // Mercilessly open fullscreen every time
        card.classList = "";

        if (cardNumber == "nextCard") {
            animator.slideOutUpwards(card);


        } else if (cardNumber == "previousCard") {
            animator.slideOutDownwards(card);
        }

        // Fill out form element input fields
        controller.sendForm("This is my saveData");
    }

    sendForm = function (saveData) {
        console.log("sendForm______________");
        document.getElementById('currPageId').value = saveData;
        document.getElementById('prevPageId').value = prevPageValue;

        let form = document.getElementById('form');
        form.submit();
    }

    initKeylogger = function () {
        let keylogger = [];

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
                controller.loadNewCard("previousCard");

            if (keylogger.includes('Control') && keylogger.includes('ArrowDown'))
                controller.loadNewCard("nextCard");
        });
    }

    addFormElementToCard = function(card) {
        let formElement =
                ' <form id="form" method="post" action="/router/posts">                  '
            +   '     <input id="currPageId" type="text" name="currPageValue" value="a"> '
            +   '     <input id="prevPageId" type="text" name="prevPageValue" value="b"> '
            +   '     <input id="sumbitId"   type="submit" value="submit">               '
            +   ' </form>                                                                ';
        card.innerHTML += formElement;
    }
}

// INITIALIZATION
let card          = document.getElementById('card');
// let currPageValue = document.getElementById('currPageNum').innerHTML;
// let prevPageValue = document.getElementById('prevPageNum').innerHTML;
let currPageValue = 2;
let prevPageValue = 3;

let animator   = new Animator();
let controller = new Controller();

controller.initKeylogger();
controller.addFormElementToCard(card);













































