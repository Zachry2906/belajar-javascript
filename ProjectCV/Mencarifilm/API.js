// $('.search').on('click', function () {
    
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=684ea7ad&s=' + $('.input').val(),
//         success: results => {
//             const movies = results.Search
//             let cards = ' '
//             movies.forEach(x => {
//                 cards += showCards(x);
//             });
//             $('.Cardss').html(cards)
//             console.log(movies);
    
//             //Ketika tombol diclick
//             $('.modal-detail').on('click', function(){
//                 $.ajax ({
//                     url: `http://www.omdbapi.com/?apikey=684ea7ad&i=` + $(this).data('imdbid'),
//                     success: m => {
//                         const detail = showDetail(m)
//                         $('.modal-body').html(detail)
//                     }, 
//                     error: (e) => {
//                         console.log(e.responseText);
//                     }
//             })
//             })
//         },
//         error: (e) => {
//             console.log(e.responseText);
//         }
//     })
// })

//fetch -> method pada API Js untuk mengambbil barang dan dikembalikan dalam bentuk promise
// const srcbtn = document.querySelector('.search')
// srcbtn.addEventListener('click', function(){

//     const inputV = document.querySelector('.input')
//     fetch('http://www.omdbapi.com/?apikey=684ea7ad&s=' + inputV.value)
//     .then(response => response.json()) -> json() mengembalikan bentuk promise, jika ingin dijalnakna seca async maka .then lagi
//     .then(response => {
//         const movies = response.Search
//         let cards ='';
//         movies.forEach(x => {
//             cards+= showCards(x)
//             const moviesContainer = document.querySelector('.Cardss')
//             moviesContainer.innerHTML = cards

//             const detailMovies = document.querySelectorAll('.modal-detail')
//             detailMovies.forEach((btn) => {
//                 btn.addEventListener('click', function(){
//                     fetch('http://www.omdbapi.com/?apikey=684ea7ad&i=' + this.dataset.imdbid)
//                     .then(response => response.json())
//                     .then(m => {
//                         const movieDetail = showDetail(m)
//                         const modalBody = document.querySelector('.modal-body')
//                         modalBody.innerHTML = movieDetail
//                     })
//                 })
//             })
//         });
//     })
// })

// fetch refactor
// const srcbtn = document.querySelector('.search')
// srcbtn.addEventListener('click', async function(){
//     const inputV = document.querySelector('.inputx')
//     const movies = await getMovies(inputV.value)
//     updateUI(movies)
// })

// //event binding
// document.addEventListener('click', async function(e){
//     if(e.target.classList.contains('modal-detail')){
//         const imdbid = e.target.dataset.imdbid
//         const moviesDetail = await getMovieDetail(imdbid)
//         updateUIDetail(moviesDetail)
//     }
// })

// function getMovies(keyword){
//     return fetch('http://www.omdbapi.com/?apikey=684ea7ad&s=' + keyword)
//     .then(response => response.json())
//     .then(response => response.Search)
// }

// function getMovieDetail(imdbid){
//     return fetch('http://www.omdbapi.com/?apikey=684ea7ad&i=' + imdbid)
//     .then(response => response.json())
//     .then(m => m )
// }

// function updateUI(movies){
//     let cards ='';
//     movies.forEach(x => cards+= showCards(x))
//     const moviesContainer = document.querySelector('.Cardss')
//     moviesContainer.innerHTML = cards
// }



const search = document.querySelector('.search')
search.addEventListener('click', async function(){
    const input = document.querySelector('.inputx')
    const movies = await moviess(input.value)
    updateUI(movies)
})

document.addEventListener('click', async function(e){
    if(e.target.classList.contains('modal-detail')){
        const imdbid = e.target.dataset.imdbid
        const moviesDetail = await getMovieDetail(imdbid)
        updateUIDetail(moviesDetail)
    }
})

function getMovieDetail(imdbid){
    return fetch('http://www.omdbapi.com/?apikey=684ea7ad&i=' + imdbid)
    .then(response => response.json())
    .then(m => m)
}

function moviess(input){
    return fetch('http://www.omdbapi.com/?apikey=684ea7ad&s=' + input)
    .then(response => response.json())
    .then(response => response.Search)
}

// function updateUI(movies){
//     let cards =''
//     movies.forEach(x => cards+= showCards(x))
//     const moviesContainer = document.querySelector('.Cardss')
//     moviesContainer.innerHTML = cards
// }

function updateUI(movies){
    let cards =''
    movies.forEach(x => cards+= showCards(x))
    const moviesContainer = document.querySelector('.Cardss')
    moviesContainer.innerHTML = cards
}

function updateUIDetail(movieDetail){
    const movieDetail1 = showDetail(movieDetail)
    const modalBody = document.querySelector('.modal-body')
    modalBody.innerHTML = movieDetail1
}


function showCards(x){
    return `
                <div class="col-md-4 my-3>
                <div class="card">
                <img src="${x.Poster}" class="card-img-top" style=" border-radius:7px">
                <div class="card-body">
                    <h5 class="card-title">${x.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${x.Year}</h6>
                    <a href="http://" class="btn btn-primary mb-4 modal-detail" style="font-family:Inherit;"data-toggle="modal" data-target="#exampleModalLong" data-imdbid="${x.imdbID}" >Details Movie</a>
                </div>
            </div>
            </div>
                `
}

function showDetail(m) {
    return `
    <div class="container-fluid">
    <div class="row">
    <div class="col-md-3">
        <img src="${m.Poster}" class="img-fluid">
    </div>
    <div class="col-md">
        <ul class="list-group">
            <li class="list-group-item"><strong>Title : ${m.Title}</strong></li>
            <li class="list-group-item">Director : ${m.Director}</li>
            <li class="list-group-item">Actors : ${m.Actors}</li>
            <li class="list-group-item">Wroter : ${m.Writer}</li>
            <li class="list-group-item">Year : ${m.Year}</li>
        </ul>
    </div>
</div>
</div>`
}