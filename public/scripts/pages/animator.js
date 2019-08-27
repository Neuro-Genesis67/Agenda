console.log("animator.js");

// Introduce the page by:
// 1: Slide a card in from the bottom to the center of the screen
// 2: Display the content of the card from top to bottom

class Animator {

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

















