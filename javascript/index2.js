// request data from API 
async function requestBreweriesData(citySearch) {
//city search is based on the user submit value. 
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
  // console.log("BREWW", brewery)
  const breweryCard = createCard(brewery, "render")
  document.getElementById('breweryContainer').append(breweryCard)

}

function likebrewery(brewery) {
  const breweryCard = createCard(brewery)
  document.getElementById('Favs').append(breweryCard)
}

function createCard(brewery, beerCard) {
  //beerCard augument determines rather I have a liked btn or clear btn. 

  const breweryCard = document.createElement('div')
  //class name for CSS purpose
  breweryCard.className = "card"
  const brewName = document.createElement('h3')
  const brewType = document.createElement("p")
  const brewLocation = document.createElement("p")

  brewName.textContent = brewery.name
  brewType.textContent = `Type: ${brewery.brewery_type}`
  brewLocation.textContent = `${brewery.city}, ${brewery.state}`
  breweryCard.append(brewName, brewType, brewLocation)
  // set the condition that our argument beerCard will equal renderBeerCards which will be true
  if (beerCard === "render") {
    //this is the render container 
    const likeBtn = document.createElement("button")
    likeBtn.textContent = "Like!"
    likeBtn.addEventListener("click", () => {
      // console.log("like click")
      //call likebrewery function, to pass in card with likeBtn
      likebrewery(brewery)

    })
    breweryCard.append(likeBtn)
  } else {
    // this is the favorites container
    const clearBtn = document.createElement("button")
    clearBtn.textContent = "clear"
    clearBtn.addEventListener("click", (e) => {
      // console.log("like click")
      e.target.parentNode.remove()
    })
    breweryCard.append(clearBtn)
  }
  return breweryCard

  //problem:I  want to render createCard for both breweryContainer and Favs container
  //solution: I want return createCard based on a conditional statement. If its renderBeer card
  //return card with likeBtn
  //or else return Favs container  with clearBtn

}

//submit form based on user specified city and reset. 
document.addEventListener('DOMContentLoaded', () => {
  let form = document.getElementById('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let citySearch = document.getElementById("city-input").value
    requestBreweriesData(citySearch)
    form.reset()

  })
})

//Event listener "change" for light/dark toggle
function toggleSwitch() {
  let modeToggle = document.getElementById('modeToggle');
  modeToggle.textContent = "toggle"
  modeToggle.addEventListener('change', () => {
    // console.log("toggg", e)
    document.body.classList.toggle('dark')
      // console.log(toggle)
      ;
  });
}
toggleSwitch()


