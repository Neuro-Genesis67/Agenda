console.log("controller.js running");

let count = 22;


function getCount(){
    console.log(this.count);
}

function welcome() {
    location.href = '/';
    ctr.addCount();
    console.log(ctr.getCount());
}

function welcome2() {
    location.href = 'router/welcome2';
    ctr.addCount();
    console.log(ctr.getCount());
}

// Make a post on button press that runs the ONE instance of controller...

module.exports = class Square {
    constructor(width) {
        this.width = width;
    }

    area() {
        return this.width ** 2;
    }
};

// make the button