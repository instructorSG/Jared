
//Event listener "change" for light/dark toggle
function toggle() {
  let darkToggle = document.querySelector('#darkToggle');
    darkToggle.addEventListener('change', (e)=> { 
    console.log("toggg", e)
    document.body.classList.toggle('dark');
  });
}
toggle()


//fetch data and and append results from search based on city or state
document.getElementById('form').addEventListener('submit', function(e){
  e.preventDefault()
  let citySearch = document.getElementById("city-input").value
  const beerApi = `https://api.openbrewerydb.org/breweries?by_city=${encodeURIComponent(citySearch)}`;// make sure there's no spaces in city name
  
  console.log("search", citySearch)
  fetch(beerApi)
       .then(response => response.json())//parse json response 
       .then(data => {
            console.log("submit", data) 
            
            document.getElementById('newBrew').innerHTML = " "
            //clearing brew obj with string when searching for new city.

            data.forEach(renderBeerCard)
            //looping through each obj passed by renderBeerCard function
       });

})

function renderBeerCard(drink, index, allBrews) {
  // console.log(drink, index, allBrews)
  //like btn setup 
  let likes = 0

    let drinkCard = document.createElement('div')
    let brewName = document.createElement('h3')
    let brewType = document.createElement("p")
    let brewCity = document.createElement("p")
    let brewState = document.createElement("p")
    let likeBtn = document.createElement("button")
    let brewURL = document.createElement("p")
    likeBtn.addEventListener("click", (e) => {
      alert("I like this brewery")
      console.log("like click", e , drink)

      // let favBrew = document.getElementById("Favs")

      
        //like the object
          //create a like button and add it to object 
          //click the button to like obj. 
          //when clicked, stored to favs list. 
     


      likeBrew(drink)
    })

    brewName.innerHTML = drink.name
    brewType.innerHTML = drink.brewery_type
    brewCity.innerHTML = drink.city
    brewState.innerHTML = drink.state
    brewURL.innerHTML = drink.website_url

      drinkCard.append(brewName,brewType, brewCity, brewState,likeBtn)
      document.getElementById('newBrew').append(drinkCard)
}

//once rendered beer card is liked, appends  to favs list 
function likeBrew(drink) {
  let li = document.createElement("li")
  document.getElementById('Favs').append(li)

  let drinkCard = document.createElement('div')
  let brewName = document.createElement('h3')

}
likeBrew()



// pseudocode
// setup function to like obj
// append li to favs list. 
// take rendered beer card and 
// once liked, append to Favs list
//
//persist object once refreshed, obj will stay in favs list. 

    











//everything below works together to render api data to page 

//request api data and parse response into JSON
// function request(drink) {
//     fetch("https://api.openbrewerydb.org/breweries")
//     .then((response) => response.json())
//     .then((data) => renderBeer(data))
    
    
// }
// request()

// use function below for single obj grab. 

// function renderBeer(drink){
//   console.log(drink) // this is v. useful to see what the data looks like!
//   // create DOM elements
//   let drinkCard = document.createElement('div')
//   let brewName = document.createElement('h3')
//   let brewType = document.createElement("p")
//   let brewStreet = document.createElement("p")
//   let brewCity = document.createElement("p")
//   let brewState = document.createElement("p")
//   let brewCountry = document.createElement("p")
//   let brewPostalCode = document.createElement("p")
//   let brewURL = document.createElement("p")
//   // //the data is an array of objects, this is picking the first item in the array
//   // //you can also use Math.random if you don't just want the first item
  
//   // add DOM attributes
//   drinkCard.id = `drink - ${drink.id}`
//   drinkCard.className = "drink-card"
//   //Noam code help below
//   brewName.innerHTML = drink[0].name
//   brewType.innerHTML = drink[0].brewery_type
//   brewStreet.innerHTML = drink[0].street
//   brewCity.innerHTML = drink[0].city
//   brewState.innerHTML = drink[0].state
//   brewCountry.innerHTML = drink[0].country
//   brewPostalCode.innerHTML = drink[0].postal_code
//   brewURL.innerHTML = "url", drink[0].website_url

//   // properly append DOM elements
//   drinkCard.append(brewName,brewType, brewStreet, brewCity, brewState, brewCountry, brewPostalCode, brewURL)
//   document.getElementById('brewContainer').append(drinkCard)
// }





 
  