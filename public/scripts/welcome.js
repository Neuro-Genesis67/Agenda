onload = () => {
    let card = document.getElementById('card');
    let testicles = document.getElementById('testicles');
    // setTimeout(initPage, 100);
    card.style.visibility = "visible";
    card.classList.add('scale-in-hor-center');

    setTimeout(() => {
        testicles.style.visibility = "visible";
        testicles.classList.add('scale-in-hor-center');
    }, 500);



}

// function initPage() {
//     animate_card();
//     setTimeout(animate_welcome, 300);
//     setTimeout(animate_pressEnter, 400);
// }
//
// function animate_card() {
//     let card = document.createElement('div');
//     card.id = 'card';
//     card.classList.add('scale-in-hor-center');
//     document.body.appendChild(card);
// }
//
// function animate_welcome() {
//     let welcome = document.createElement('h1');
//     welcome.id = "welcomeToAgenda";
//     welcome.classList.add('slide-in-blurred-left');
//     welcome.innerText = 'Welcome to Agenda';
//     card.appendChild(welcome);
// }
//
// function animate_pressEnter() {
//     let pressEnter = document.createElement('h1');
//     pressEnter.id = "PressEnterToBegin";
//     pressEnter.classList.add('slide-in-blurred-left');
//     pressEnter.innerText = 'PressEnterToBegin';
//     card.appendChild(pressEnter);
//
//     addEventListener('keypress', function (pressed) {
//         if (pressed.key === 'Enter')
//             redirectTo('/cards/MC_Budget');
//     });
// }
//
//
//
// function redirectTo(url) {
//     animate_exit();
//     // Some module.emptyBody();
//     setTimeout(() => {
//         location.href = url;
//     }, 500);
// }
//
// function animate_exit() {
//     card.classList.add('slide-out-top');
//     setTimeout(() => {
//         card.style.opacity = 0; // empty body instead perhaps
//     }, 500);
// }


