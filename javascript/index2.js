

// request data from API 
async function requestBreweriesData(searchByCity) {
    await fetch(`https://api.openbrewerydb.org/breweries?by_city=${searchByCity}`)
    .then(response => response.json())
    .then(data => {
        console.log("Breweries Array", data)
        document.getElementById('breweryContainer').innerHTML = " "
        data.forEach(breweries => {
            renderBeerCards(breweries)
            
        })
    })
}



function renderBeerCards(breweries) {
    console.log("BREWW", breweries)
    let breweryCard = document.createElement('div')
    let brewName = document.createElement('h3')
    let brewType = document.createElement("p")
    let brewCity = document.createElement("p")
    let brewState = document.createElement("p")
    let likeBtn = document.createElement("button")
    likeBtn.textContent = "Like!"
    //handle mouse event to search by city  
    likeBtn.addEventListener("click", () => {
        // console.log("like click")
    
        //invoking likeBrew function, passing in the obj argument
        likeBrew(breweries)
          
        })
    
    brewName.textContent = breweries.name
    brewType.textContent = breweries.brewery_type
    brewCity.textContent = breweries.city
    brewState.textContent = breweries.state
    debugger
    
    breweryCard.append(brewName,brewType, brewCity, brewState,likeBtn)
    document.getElementById('breweryContainer').append(breweryCard)
          
}

//function to append and clear in Favs list. 
function likeBrew(breweries) {
  
    let breweryCard = document.createElement('div')
    let brewName = document.createElement('h3')
    let brewType = document.createElement("p")
    let brewCity = document.createElement("p")
    let brewState = document.createElement("p")
    let clearBtn = document.createElement("button")
    clearBtn.textContent = "clear"
    clearBtn.className = "clear Button"
    
      brewName.textContent = breweries.name
      brewType.textContent = breweries.brewery_type
      brewCity.textContent = breweries.city
      brewState.textContent = breweries.state
      
      
      breweryCard.append(brewName,brewType, brewCity, brewState, clearBtn)
      document.getElementById('Favs').appendChild(breweryCard)
    }
  
// clear card from Favorites
  function handleCardDelete() {
    
      document.addEventListener("click", (e) => {
       if(e.target.classList.value === "clear Button") {
              e.target.parentNode.remove()

       }
    
    })
   
  }
  handleCardDelete()




// function handleFavDelete(e) {
//     e.target.parentNode.remove()
//     console.log("----", e)
// }

  

  //Psuedo 
  //problem: cannot add another favorite brewery after clearing the first one
  //solution: add brewery onto favorites list, then clear after. Repeat process 
  //psuedo: 

    


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
    let darkToggle = document.querySelector('#darkToggle');
      darkToggle.addEventListener('change', (e)=> { 
      // console.log("toggg", e)
      document.body.classList.toggle('dark')
      // console.log(toggle)
      ;
    });
  }
  toggleSwitch()
