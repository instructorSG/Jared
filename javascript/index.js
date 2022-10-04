
//fetch data and and append results from search based on city or state
document.getElementById('beer-search').addEventListener('click', function(e){
  let citySearch = document.getElementById("city-input").value
  const beerApi = `https://api.openbrewerydb.org/breweries?by_city=${encodeURIComponent(citySearch)}`;// make sure there's no spaces in city name
  
  console.log("search", citySearch)
  fetch(beerApi)
       .then(response => response.json())
       .then(data => {
            console.log("click", data) 
            
            document.getElementById('clearBrew').innerHTML = ""

            data.forEach(renderBeerCard)

            
       });

})

function renderBeerCard (drink, index, allBrews) {
  console.log(drink, index, allBrews)

    let drinkCard = document.createElement('div')
    let brewName = document.createElement('h3')
    let brewType = document.createElement("p")
    let likeBtn = document.createElement("button")
    likeBtn.addEventListener("click", (e) => {
      likeBrew(drink)
    })

    brewName.innerHTML = drink.name
    brewType.innerHTML = drink.brewery_type

      drinkCard.append(brewName,brewType, likeBtn)
      document.getElementById('clearBrew').append(drinkCard)
}

function likeBrew(drink) {
  console.log("-----",drink)
}

    
// }
// request()

// stack over flow reference
// const request = async (cityName) => {
//   const beerApi = `https://api.openbrewerydb.org/breweries?by_city=${encodeURIComponent(cityName)}`;
//   const res = await fetch(beerApi);
//   if (res.ok) {
//     const breweries = await res.json();
//     breweries.forEach(brewery => console.log(brewery));
//   } else {
//     console.log("Error!");
//   }
// };

//   document.addEventListener("DOMContentLoaded", e => {
//   const searchBtn = document.getElementById("bsearch");

//   searchBtn.addEventListener("click", async function (e) {
//     e.preventDefault;
//     let searchQuery = document.getElementById("beer-search").value;
  
//     await request(searchQuery);
//   });
// })









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

//check answer:
// function init() {
// .forEach(beerObj => renderBeer(beerObj))
// }



 
  