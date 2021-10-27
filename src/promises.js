import fetch from 'node-fetch'

let CEP = 30660298
const API_ENDPOINT = `https://viacep.com.br/ws/${CEP}/json/`

// Normal promise ES6.
const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(()=> {
        let total = 1 + 1
        resolve(total)
    }, 1000)
})

// Using fetch to load data using GET by default.
const my_request_es6 = () => {
    fetch(API_ENDPOINT).then(response => {
        return response.json()   // Return a promise too.
    }).then(json => {
        console.log(json)
        return json
    }).catch(err => {
        console.log('Error' + err)
    })
}

// Using async/await ES7.
const my_request_es7 = async() => {
    const response = await fetch(API_ENDPOINT)
    const json = await response.json() // Return a promise too.
    return json
}

// Call 
my_request_es6()
my_request_es7().then(data => console.log(data))

