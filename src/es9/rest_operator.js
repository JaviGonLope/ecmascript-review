const obj = {
    name: 'oscar',
    age: 26,
    country: "Mexico"
}

let { name, ...all} = obj;
console.log(name, all)