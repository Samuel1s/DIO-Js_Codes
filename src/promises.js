import fetch from 'node-fetch'

const API_ENDPOINT = 'https://swapi.dev/api' 

// Normal promise ES6.
const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(()=> {
        let total = 1 + 1
        resolve(total)
    }, 1000)
})

// Using fetch to load data using GET by default.
const loadAPI = url => {
    fetch(url).then(response => {
        if(response.status === 200){
            return response.json()
        } else {
            throw new Error('Erro na requisição')
        }

    }).catch(err => {
        console.log('Error' + err)
    })
}

// Using async/await ES7.
const simpleFunction = async () => {
    const data_1 = await asyncTimer()
    console.log(data_1)
    const data_2 = await loadAPI(`${API_ENDPOINT}/films`)
    return data_2
}

// Call 
simpleFunction().then(data => {console.log(data)}).catch(err => {console.log(err)})