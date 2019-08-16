class Controller {

    anim_slideIn() {
        let card = document.getElementById('card');
        // card.style.visibility = "visible";
        card.classList.add('slide-in-bottom');
    }

    anim_slideOut() {
        let card = document.getElementById('card');
        card.classList.add('slide-out-top');
    }

    loadCard(url) {
        setTimeout(location.href = url, 500)
    }
}


















// onload = () => {
//
// };



// function loadNextCard(url) {
//     animate_exit();
//     setTimeout(() => {
//         location.href = url;
//     }, 500);
// }
//
// function animate_exit() {
//     card.classList.add('slide-out-top');
//     setTimeout(() => {
//         card.style.opacity = 0;
//     }, 500);
// }













// Render cards with same animation (slide out previous, slide in new);
// 1:
// Hver hbs fil loader en initPage.js som tager alt fra body,
// lavet er card og smider tingene deri.
// Herefter animeres the cards entrance.
// -Sæt title til Agenda
//
//
//
//
//
// Resten er op til det script som den enkelt hbs side har
//
//
//
//
//
//
//
//
//
// res.render('index');
// -> index.js kører og startsiden renderes
// ->
// ->
// ->
// ->
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//