

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
    // console.log("BREWW", brewery)
    let breweryCard = document.createElement('div')
    let brewName = document.createElement('h3')
    let brewType = document.createElement("p")
    let brewCity = document.createElement("p")
    let brewState = document.createElement("p")
    let likeBtn = document.createElement("button")
    likeBtn.textContent = "Like!"
    likeBtn.addEventListener("click", () => {
        // console.log("like click")
    
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


//
function likeBrew(brewery) {
  
    let breweryCard = document.createElement('div')
    let brewName = document.createElement('h3')
    let brewType = document.createElement("p")
    let brewCity = document.createElement("p")
    let brewState = document.createElement("p")
    let clearBtn = document.createElement("button")
    clearBtn.textContent = "clear"
    
      brewName.textContent = brewery.name
      brewType.textContent = brewery.brewery_type
      brewCity.textContent = brewery.city
      brewState.textContent = brewery.state
      
      
      breweryCard.append(brewName,brewType, brewCity, brewState, clearBtn)
      document.getElementById('Favs').append(breweryCard)
    }
  
// clear card from Favorites
  function clearBreweryFavCard() {
    let newDiv = document.createElement("div")
    let clearBox = document.getElementById('Favs')
    clearBox.addEventListener("click", (e) => {
      console.log("TARGET", clearBox)
      clearBox.remove()
    })
    document.getElementById('Favs').append(newDiv)
  }
  clearBreweryFavCard()

  

  //Psuedo 
  //problem: cannot add another favorite brewery after clearing the first one
  //solution: add brewery onto favorites list, then clear after. Repeat process 
  //psuedo: 

    

//event listener for searching breweries by city
document.getElementById('form').addEventListener('submit',  function(e){
    e.preventDefault()
    let citySearch = document.getElementById("city-input").value
    // console.log("Brewery by City", e)
     requestBreweriesData(citySearch)
    // call function and pass argument of each specified search. 
                
})


//Event listener "change" for light/dark toggle
function toggleSwitch() {
    let darkToggle = document.querySelector('#darkToggle');
      darkToggle.addEventListener('change', (e)=> { 
      // console.log("toggg", e)
      document.body.classList.toggle('dark')
      // console.log(toggle)
      ;
    });
  }
  toggleSwitch()
