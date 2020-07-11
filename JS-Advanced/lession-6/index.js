// Array-like object & arguments

// const names = ['thanh', 'trang', 'thuy'];
// for (const name of names) {
//     console.log(name);
// }

// const objName = {
//     0: 'Thanh',
//     1: 'Trang',
//     2: 'Thuy',
//     length: 3
// }

// for (let index = 0; index < objName.length; index++) {
//     console.log(objName[index]);
// }

// Arguments
function sum() {
    // chuyen 1 object sang array
    const numbers = Array.from(arguments);
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sum(1, 2, 12));
