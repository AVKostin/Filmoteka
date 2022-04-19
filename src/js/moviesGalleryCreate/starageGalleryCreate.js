import { refs } from "../refs/refs.js";

const BASE_POSTER_URL = "https://image.tmdb.org/t/p/w500/";

function storageGalleryCreate(data) {
    refs.cardList.insertAdjacentHTML('beforeend',
        (data.map((dataObj) => {
            
            let movieOverviev = dataObj.movieOverview;
            const numbLen = dataObj.movieOverview.trim().split(" ").length;
            if (numbLen === "") {
                movieOverviev = "Sory there is no overview of that movie";
            } else if (numbLen < 3 || numbLen > 100) {
                movieOverviev = "Click to watch more";
            } 
            return `

                    <li class="item">
                        <article class="card">
                            <div class="card-thumb cards-wrapper no-poster">
                                <img src="${BASE_POSTER_URL}${dataObj.moviePoster}" alt="${dataObj.movieTitle}" loading="lazy" />
                            </div>
                            <div class="card-content">
                                <h2 class="card-heading"> ${dataObj.movieTitle} </h2>
                                <p class="card-text"> ${dataObj.movieGenres} <span class="card-text-divide">|</span> ${dataObj.movieRelease_date} </p>
                            </div>
                            <div class="cards-back-text">
                                <span class="description_films" data-id="${dataObj.movieId_card}"> ${movieOverviev} </span>
                            </div>
                        </article>
                    </li>
                `;
        }).join('')));
};

export { storageGalleryCreate };