let films = [];

function fetchFilms() {
  fetch("https://swapi.dev/api/films")
    .then((response) => response.json())
    .then((json) => {
      films = json.results;
      showFilmsCards(films);
    });
}

function showFilmsCards(films) {
  films.map((film) =>
    $("#filmsCards").append(`   <div class="col col-md-4 flip-card">
                                    <div class="card flip-card-inner ">
                                        <div class=" flip-card-front" >
                                            <div class="card-body">
                                                <h5 class="card-title">${film.title}</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">Director: ${film.director}</h6>
                                                <h6 class="card-subtitle mb-2 text-muted">Producer: ${film.producer}</h6>
                                            </div>
                                        </div>
                                        <div class="card flip-card-back text-white bg-dark" >
                                            <div class="card-body">
                                            <p class="card-text"> ${film.opening_crawl}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            `)
  );
}
