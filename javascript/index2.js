

// request data from API 
async function requestBreweriesData(searchByCity) {
    await fetch(`https://api.openbrewerydb.org/breweries?by_city=${searchByCity}`)
    .then(response => response.json())
    .then(data => {
        console.log("Breweries Array", data)
        document.getElementById('breweryContainer').innerHTML = " "
        data.forEach(brewery => {
            renderBeerCards(brewery)
            
        })
    })
}



function renderBeerCards(brewery) {
    let breweryCard = document.createElement('div')
    let brewName = document.createElement('h3')
    let brewType = document.createElement("p")
    let brewCity = document.createElement("p")
    let brewState = document.createElement("p")
    let likeBtn = document.createElement("button")
    likeBtn.textContent = "Like!"
    likeBtn.addEventListener("click", () => {
        console.log("like click", brewery)
    
        //invoking likeBrew function, passing in the obj argument
        likeBrew(brewery)
          
        })
    
    brewName.textContent = brewery.name
    brewType.textContent = brewery.brewery_type
    brewCity.textContent = brewery.city
    brewState.textContent = brewery.state
        
    
    breweryCard.append(brewName,brewType, brewCity, brewState,likeBtn)
    document.getElementById('breweryContainer').append(breweryCard)
          
}


//once rendered beer card click event is  fired(button pressed), appends  to favs list 
function likeBrew(brewery) {
  
    let breweryCard = document.createElement('div')
    let brewName = document.createElement('h3')
    let brewType = document.createElement("p")
    let brewCity = document.createElement("p")
    let brewState = document.createElement("p")
    let likeBtn = document.createElement("button")
    let brewURL = document.createElement("p")
    
      brewName.textContent = brewery.name
      brewType.textContent = brewery.brewery_type
      brewCity.textContent = brewery.city
      brewState.textContent = brewery.state
      brewURL.textContent = brewery.website_url
      
      breweryCard.append(brewName,brewType, brewCity, brewState, likeBtn)
      document.getElementById('Favs').append(breweryCard)
  
    }
  
  function clearBreweryFavCard() {
    let clearBox = document.getElementById("Favs")
    clearBox.addEventListener("click", (e) => {
      console.log(e.target)
      e.target.remove()
    })
  }
  clearBreweryFavCard()
    

  //event listener for searching breweries by city
document.getElementById('form').addEventListener('submit', async function(e){
    e.preventDefault()
    let citySearch = document.getElementById("city-input").value
    console.log("Brewery by City", e)
    await requestBreweriesData(citySearch)
    // call function and pass argument of each specified search. 
                
})


//Event listener "change" for light/dark toggle
function toggle() {
    let darkToggle = document.querySelector('#darkToggle');
      darkToggle.addEventListener('change', (e)=> { 
      // console.log("toggg", e)
      document.body.classList.toggle('dark')
      // console.log(toggle)
      ;
    });
  }
  toggle()
