// call
function greeting(name, age) {
    console.log(`Hi, ${this.name}. I am ${this.age}`);
}

const cat = {
    name: 'tom',
    age: 10
}

greeting.call(cat);
