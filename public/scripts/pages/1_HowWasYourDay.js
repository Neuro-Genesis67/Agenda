console.log("initialized ----- 1_HowWasYourDay.js");

// let card         = document.getElementById('card');
let currentPage  = parseInt(document.getElementById('currentPage').innerHTML);
let previousPage = parseInt(document.getElementById('previousPage').innerHTML);

if (currentPage < previousPage) {
    console.log("if (currentPage < previousPage) {");
    animator.slideInDownwards(card);
} else {
    console.log("} else {");
    animator.slideInUpwards(card);
}

// div id="hbs_currentPage">  {{this.pageNumber}}  </div>
// <div> previousPage: </div>
// <div id="hbs_previousPage"> {{this.previousPage}} </div>