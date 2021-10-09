/*-- REST --*/
// without rest 
function sum_1_1(){
    // arguments is a object
    let total = 0;

    for(let i = 0; i < arguments.length; i++){
       total += arguments[i]
    }

    return total
}

// or
function sum_1_2(...args) {
    return args.reduce((total,value) => total +=value, 0)
}

// with Rest
// Dont have arguments property in arrow functions.
const sum_2_1 = (...args) => {
    // args is array
    return args.reduce((total,value) => total +=value, 0)
}

/*-- SPREAD --*/
const str = 'Testando o Spread em strings'
const obj = {
    name: 'Samuel'
}
const obj2 = {
    ...obj, // Clone
    sobrenome: 'santos'
}

// without spread 
const multiply = (...args) => args.reduce((total,value) => total * value, 1)
const sum_3_1 = (...rest) => multiply.apply(undefined, rest) // With method apply - Old.

// with spread 
const sum_3_2 = (...rest) => multiply(...rest) // With spread - New 

function logArgs_1() {
    console.log(arguments)
}

const logArgs_2 = (...args) => console.log(args)

console.log(obj2)