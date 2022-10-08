
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


//fetch data and and append results from search based on city or state
document.getElementById('form').addEventListener('submit', async function(e){
  e.preventDefault()
  let citySearch = document.getElementById("city-input").value
  const beerApi = `https://api.openbrewerydb.org/breweries?by_city=${citySearch}`
  // citySearch is now a parm in my fetch API 
  // console.log("search", citySearch)
  await fetch(beerApi)
       .then(response => response.json())//parse json response 
       //jsonify so that the response is readable. 
       .then(breweries => {
            console.log("submit", breweries) 
            document.getElementById('breweryContainer').innerHTML = " "
            //clearing brew obj with string when searching for new city.
            breweries.forEach(obj => {            
              renderBeerCards(obj)
            })
              //looping through each obj passed by renderBeerCard function
       });
})



function renderBeerCards(brewery) {
    let breweryCard = document.createElement('div')
    let brewName = document.createElement('h3')
    let brewType = document.createElement("p")
    let brewCity = document.createElement("p")
    let brewState = document.createElement("p")
    let likeBtn = document.createElement("button")
    likeBtn.textContent = "Like!"
    let brewURL = document.createElement("p")
    likeBtn.addEventListener("click", () => {
      console.log("like click", brewery)

      //invoking likeBrew function, passing in the obj argument
      likeBrew(brewery)
      
    })

    brewName.textContent = brewery.name
    brewType.textContent = brewery.brewery_type
    brewCity.textContent = brewery.city
    brewState.textContent = brewery.state
    brewURL.textContent = brewery.website_url

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





  //able to clear object after being added to "Favs" Div. 
  // function clearFav(drink, drinkCard) {
  //   // const clearBeerCards = document.getElementById('Favs')
  //   const clearBeerCard = document.createElement("button")

  //   clearBeerCard.addEventListener('click', function(event) {
  //   clearBeerCard.remove();
  //   console.log("clearClick", drink, drinkCard, event)
  // });

  


    // Pseudocode
    //Grab appended element that I want to clear. add event listener for click to remove appended element. 
    //use a selector to grab appended dom elements. May have to create id to add to element.
    //provide method to remove element. 
    //return  a empty string.

// }



// pseudocode
// setup function to like obj
// append li to favs list. 
// take rendered beer card and 
// once liked, append to Favs list
//
//persist object once refreshed, obj will stay in favs list. 

    













 
  