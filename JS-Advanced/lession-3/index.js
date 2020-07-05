var mouse = {
    name: "Quan Nguyen",
    sayHi: function () {
        console.log(`Hi, my name ${this.name}`);
    }
}

// mouse.sayHi();
var say = mouse.sayHi;
// var say = mouse.sayHi.bind(mouse);
say();

function run(callback) {
    console.log('Run............');
    callback();
}

run(mouse.sayHi.bind(mouse));
