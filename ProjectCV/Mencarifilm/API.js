$('.search').on('click', function () {
    
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=684ea7ad&s=' + $('.input').val(),
        success: results => {
            const movies = results.Search
            let cards = ' '
            movies.forEach(x => {
                const title = x.Title
                const year = x.Year
                cards += `
                <div class="col-md-4 my-3>
                <div class="card">
                <img src="${x.Poster}" class="card-img-top" style=" border-radius:7px">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${year}</h6>
                    <a href="http://" class="btn btn-primary mb-4 modal-detail" style="font-family:Inherit;"data-toggle="modal" data-target="#exampleModalLong" data-imdbid="${x.imdbID}" >Details Movie</a>
                </div>
            </div>
            </div>
                `
            });
            $('.Cardss').html(cards)
            console.log(movies);
    
            //Ketika tombol diclick
            $('.modal-detail').on('click', function(){
                $.ajax ({
                    url: `http://www.omdbapi.com/?apikey=684ea7ad&i=` + $(this).data('imdbid'),
                    success: m => {
                        const detail = `
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
                        $('.modal-body').html(detail)
                    }, 
                    error: (e) => {
                        console.log(e.responseText);
                    }
            })
            })
        },
        error: (e) => {
            console.log(e.responseText);
        }
    })
})

