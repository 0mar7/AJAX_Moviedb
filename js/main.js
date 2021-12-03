myHttp = new XMLHttpRequest();
allPosts = [];
let getBtn = document.getElementById("getBtn");
let imgPost = 'https://image.tmdb.org/t/p/w500';


function getMovies() {
    
    myHttp.open('GET', 'https://api.themoviedb.org/3/trending/movie/day?api_key=56e1518a4076ce79296b2aaa9751fe18');
    myHttp.send();

    myHttp.addEventListener('readystatechange', function () {

        if (myHttp.readyState == 4 && myHttp.status == 200) {

            allPosts = JSON.parse (myHttp.response).results;
            displayMovies();
        }
    });

};

getBtn.addEventListener('click', getMovies);

function displayMovies() {

    box = ``;
    for (let i = 0; i < allPosts.length; i++) {

        box += `<div class="col-md-3">
        <div class="post text-center text-white m-2">
        <img class="img-item w-100" src="${ imgPost + allPosts[i].poster_path}"/>
        <h3 class="m-3">${allPosts[i].title}</h3>
        </div>
        </div>`;
    }
    document.getElementById("postsRow").innerHTML = box;

};