// function handleRequest() {

//    fetch('https://api.openbrewerydb.org/breweries')
//     .then(response => response.json())
//     .then(response => console.log("response",response))
//     .catch(error => console.log("error", error)) 
    

// }

// handleRequest() 


// create new element and append li to div container
// function newElements(drink) {
// const container = document.querySelector("#list")
// const li = document.createElement("li")
// container.append(li)
// li.textContent = `${request} api`
// }

//request api data and parse response into JSON
function request(drink) {
    fetch("https://api.openbrewerydb.org/breweries")
    .then((response) => response.json())
    .then((data) => renderBeer(data))
    
}
request()

// function to grab all the values in each object.
// function grabWholeObj() {
  
// }


function renderBeer(drink){
  console.log(drink) // this is v. useful to see what the data looks like!
  // create DOM elements
  let drinkCard = document.createElement('div')
  let brewName = document.createElement('h3')
  let brewType = document.createElement("p")
  // //the data is an array of objects, this is picking the first item in the array
  // //you can also use Math.random if you don't just want the first item
  
  // add DOM attributes

  brewName.innerHTML = drink[0].name
  brewType.innerHTML = drink[0].brewery_type
  drinkCard.append(brewName,brewType)
  document.getElementById('brewContainer').append(drinkCard)
}

//check answer:
// function init() {
// .forEach(beerObj => renderBeer(beerObj))

// }


//use this renderBeer function below if I get stuck on creating a new one
// function renderBeer(drink){
//   console.log(drink) // this is v. useful to see what the data looks like!
//   let drinkCard = document.createElement('div')
//   let name = document.createElement('h2')
//   let type = document.createElement("li")

//   drinkCard.id = `drink - ${drink.id}`
//   name.textContent = drink.name


//   //the data is an array of objects, this is picking the first item in the array
//   //you can also use Math.random if you don't just want the first item
//   name.innerHTML = drink[10].name
//   drinkCard.append(name,type)
//   document.getElementById('list').append(drinkCard)
// }




// render all 20 breweries 
// function renderBeers(drink){
//     console.log(drink)
    // drink.forEach(drink => newElements(drink)) // use this one 

//    
//   }



 
  