// function handleRequest() {

//    fetch('https://api.openbrewerydb.org/breweries')
//     .then(response => response.json())
//     .then(response => console.log("response",response))
//     .catch(error => console.log("error", error)) 
    

// }

// handleRequest() 


// create new element and append li to div container
function newElements(drink) {
const container = document.querySelector("#list")
const li = document.createElement("li")
container.append(li)
li.textContent = `${request} api`
}

//request api data and parse response into JSON
function request() {
    fetch("https://api.openbrewerydb.org/breweries")
    .then((response) => response.json())
    .then((data) => renderBeers(data))
    
}
request()


// render all 20 breweries 
function renderBeers(drink){
    console.log(drink)
    drink.forEach(drink => newElements(drink)) // use this one 

    // drink.forEach(request)*caution* will contine to iterate
  }


  


 
  