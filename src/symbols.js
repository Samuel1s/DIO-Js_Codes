// Symbols
const uniqueId_1 = Symbol('Samuel')
// Symbols is a unary type so, they are uniques.
const uniqueId_2 = Symbol('Samuel')
// So they're different even though they're given the same 'ownership'
console.log(uniqueId_1 === uniqueId_2) // False

// Well known symbols.
Symbol.iterator // A method that returns the default iterator for an object. Called by the semantics of the for-of statement.

const arr = [1,2,3,4]
const it = arr[Symbol.iterator]() // Is a default iterator property in array too.
console.log(arr[Symbol.iterator]().next()) // First occurrence

while(true) {
    let { value, done } = it.next() // Base property.

    if(done) {
        break
    }
    console.log(value)
}

// Equals using 'for of'

for(let value of arr) {
    console.log(value)
}

// Make a obj iterable like array using symbol iterator function.
const obj = {
   values: [1,2,3,4],
   [Symbol.iterator](){ 
       let i = 0
       return {
           next: () => {
               i++
               return {
                  value: this.values[i - 1],
                  done: i > this.values.length
               }
           }
       }
   }
}

const newArr = [...obj] // === const newArr = [...obj.values] without Symbol.iterator.
console.log(newArr)
