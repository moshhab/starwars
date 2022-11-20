let films=[];

function fetchFilms(){
    fetch('https://swapi.dev/api/films')
   .then((response) => response.json())
   .then((json) =>{
                     films=json.results
 
                 })
 }
