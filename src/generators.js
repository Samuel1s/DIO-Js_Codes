// Generators
// The reason for using generators is to make pausing within a function easier.
// use * to call generator and yield to pause.
// used to assync call.

function* naturalNumbers() {
    let number = 0;
    while(true) {
        yield number
        number ++
    }
}

const { value: iteratorValue } = naturalNumbers().next() // Destructuring
console.log(`First call value =  ${iteratorValue}`)

// Make a obj iterable like array using symbol iterator function with generator.
const obj = {
    values: [1,2,3,4],
    *[Symbol.iterator](){ 
        for (let i=0; i< this.values.length; i++) {
            yield this.values[i] // return .next().value
        }
    }
}

for (let value of obj) {
    console.log(value)
}