let button = document.querySelector('#button')
let name = document.querySelector('#name')
let climate = document.querySelector('#climate')
let diameter = document.querySelector('#diameter')
let gravity = document.querySelector('#gravity')
let population = document.querySelector('#population')

function getInfo() {
    let randomNumber = Math.floor((Math.random() * 60) + 1)
    let apiUrl = 'https://swapi.dev/api/planets/' + randomNumber
    axios.get(apiUrl).then(response => {
        updateInfo(response.data)
    }).catch(e => {
        updateInfoWithError()
    })
}

function updateInfo(data) {
    name.innerText = data.name
    climate.innerText = `Climate: ${data.climate}`
    diameter.innerText = `Diameter: ${data.diameter}`
    gravity.innerText = `Gravity: ${data.gravity}`
    population.innerText = `Population: ${data.population}`
}

button.addEventListener('click', getInfo)