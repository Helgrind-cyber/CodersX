// var a = {
//     name: 'AAA',
//     run: function () {
//         var run2 = function () {
//             console.log(this.name);
//         }.bind(this);
//         run2();
//     }
// }

// a.run();

var a = {
    foo: 'bar',
    run: function () {
        setTimeout(() => {
            console.log(this.foo);
        }, 2000);
    }
}
/**
 * In ra bar
 * dùng bind(this), bind(a), var that= this, dùng arrow func
 */
a.run();
