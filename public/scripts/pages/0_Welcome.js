console.log("initialized ----- 0_Welcome.js");

let currentPage  = parseInt(document.getElementById('currentPage').innerHTML);
let previousPage = parseInt(document.getElementById('previousPage').innerHTML);

if (previousPage == 0) {
    animator.unfoldHorCenter();
} else {
    animator.slideInDownwards(card);
    console.log("animation showing card when going from page 1 to this(page 0) page");
}

