const my_obj_1 = {
    name: 'samuel'
}

const my_obj_2 = {
    name: 'samuel',
    props: {
        age: 26
    }
}

const arr_1 = ['Apple', 'Banana']
const arr_2 = [{name: 'Apple', type: 'fruit'}]

// Without destructuring  - Old
const fFruit1 = arr_1[0]
const myName1 = my_obj_1.name
const myAge1 = my_obj_2.props.age
const fruitName1 = arr_2[0].name

// With destructuring  - New
const [fFruit2] = arr_1
//const { name } = my_obj_1
const { name: myName2 } = my_obj_1
//const { props: { age }} = my_obj_2
const { props: { age: myAge2 }} = my_obj_2
//const [{ name: fruitName2 }] = arr
const [{ name: fruitName2, type: typeFruit }] = arr_2

// Print Results
console.log(fFruit1)
console.log(fFruit2)
console.log(myName1)
console.log(myName2)
console.log(myAge1)
console.log(myAge2)
console.log(fruitName1)
console.log(`${fruitName2 + typeFruit}`)