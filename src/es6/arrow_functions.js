const names = [
    { name: 'Lionel', age: 45 },
    { name: 'Clara', age: 23 }
]

// es5
let listOfNames = names.map(function(item){
    console.log(item.name);
})

const square = function(num){
    return num*num;
}

// es6
let listOfNamesES6 = names.map(item => console.log(item.name))

const square = num => num*num;
