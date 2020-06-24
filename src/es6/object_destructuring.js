let person = {
    name: 'Cucufate',
    age: 25,
    country: "España"
}

console.log(person.name, person.age)

// es6
let {name, age } = person;
console.log(name, age);