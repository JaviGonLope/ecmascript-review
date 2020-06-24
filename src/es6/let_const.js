{
    var var_variable = `I'm a var variable.`;
    console.log(`${var_variable}. I've been called inside my block scope.`); // ✔
    var_variable = 7; // ✔
}

{
    let let_variable = `I'm a let variable`;
    console.log(`${let_variable}. I've been called inside my block scope.`); // ✔
    let_variable = 7; // ✔
}

{
    const const_variable = `I'm a const variable`;
    console.log(`${const_variable}. I've been called inside my block scope.`); // ✔
    const_variable = 7; // ❌
}

// Scope checks. VAR still defined. CONST and LET no longer defined.
console.log(var_variable); // ✔
console.log(let_variable); // ❌
console.log(const_variable); // ❌
