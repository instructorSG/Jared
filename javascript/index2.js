// request data from API 
async function requestBreweriesData(citySearch) {
  //Andrew help: why does the parm provide mulitple searches of the cities but with out parm it only returns 
    await fetch(`https://api.openbrewerydb.org/breweries?by_city=${citySearch}`)
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
    // console.log("BREWW", breweries)
    const breweryCard = document.createElement('div')
    const styleCard = breweryCard
    styleCard.className = "card"
    const brewName = document.createElement('h3')
    const brewType = document.createElement("p")
    const brewCity = document.createElement("p")
    const brewState = document.createElement("p")
    const likeBtn = document.createElement("button")
    likeBtn.textContent = "Like!"
    //handle mouse event to search by city  
    likeBtn.addEventListener("click", () => {
        // console.log("like click")
        //invoking likeBrew function, passing in the obj argument
        likeBrew(breweries)
          
        })
    
    brewName.textContent = breweries.name
    brewType.textContent =  breweries.brewery_type
    brewCity.textContent = breweries.city
    brewState.textContent = breweries.state
    
    breweryCard.append(brewName,brewType, brewCity, brewState,likeBtn,)
    document.getElementById('breweryContainer').append(breweryCard)
          
}

//function to append. clearBtn setup
function likeBrew(breweries) {
  
    const breweryCard = document.createElement('div')
    const styleCard = breweryCard
    styleCard.className = "card"
    const brewName = document.createElement('h3')
    const brewType = document.createElement("p")
    const brewCity = document.createElement("p")
    const brewState = document.createElement("p")
    const clearBtn = document.createElement("button")
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
        //provide if statement to provide the click with a target. 
       if(e.target.classList.value === "clear Button") {
        //use classList as alternative to grabbing a delimited space string of className
              e.target.parentNode.remove()
       }
    })
  }
  handleCardDelete()

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
