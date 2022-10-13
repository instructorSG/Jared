async function requestBreweriesData(citySearch) {
  fetch(`https://api.openbrewerydb.org/breweries?by_city=${citySearch}`)
    .then(response => response.json())
    .then(data => {
      console.log("data", data)
      document.getElementById('breweryContainer').innerHTML = " "

      data.forEach(brewery => {
        renderBeerCards(brewery)
        console.log("Breweries Array", brewery)

      })
    })
}

function renderBeerCards(brewery) {
  const breweryCard = createCard(brewery, "render")
  document.getElementById('breweryContainer').append(breweryCard)

}

function likebrewery(brewery) {
  const breweryCard = createCard(brewery)
  document.getElementById('Favs').append(breweryCard)
}

function createCard(brewery, beerCard) {

  const breweryCard = document.createElement('div')
  breweryCard.className = "card"
  const brewName = document.createElement('h3')
  const brewType = document.createElement("p")
  const brewLocation = document.createElement("p")

  brewName.textContent = brewery.name
  brewType.textContent = `Type: ${brewery.brewery_type}`
  brewLocation.textContent = `${brewery.city}, ${brewery.state}`
  breweryCard.append(brewName, brewType, brewLocation)
  if (beerCard === "render") {
    const likeBtn = document.createElement("button")
    likeBtn.textContent = "Like!"
    likeBtn.addEventListener("click", () => {

      likebrewery(brewery)

    })
    breweryCard.append(likeBtn)
  } else {

    const clearBtn = document.createElement("button")
    clearBtn.textContent = "clear"
    clearBtn.addEventListener("click", (e) => {
      e.target.parentNode.remove()
    })
    breweryCard.append(clearBtn)
  }
  return breweryCard

}

document.addEventListener('DOMContentLoaded', () => {
  let form = document.getElementById('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let citySearch = document.getElementById("city-input").value
    requestBreweriesData(citySearch)
    form.reset()

  })
})

function toggleSwitch() {
  let modeToggle = document.getElementById('modeToggle');
  modeToggle.textContent = "toggle"
  modeToggle.addEventListener('change', () => {

    document.body.classList.toggle('dark')
  })
}
toggleSwitch()


