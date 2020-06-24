// old way
function functionOldWay(name, age, country) {
    var name = name || 'Agapito';
    var age = age || 36;
    var country = country || 'Madagascar';
    console.log(name, age, country)
}

// es6
function newFunctionES6(name = 'Agapito', age = 36, country = "Madagascar"){
    console.log(name, age, country);
}

newFunctionES6();
newFunctionES6('Gilberto', 23, 'Colombia');
