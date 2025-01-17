import {createElement} from '../render.js';

// export const getMoviesSection = () => {
//     const moviesContainer = document.createElement('section');
//     moviesContainer.classList = 'films';
//     const moviesList = document.createElement('section');
//     moviesList.classList = 'films-list';
//     const moviesSectionTitle = document.createElement('h2');
//     moviesSectionTitle.classList = 'films-list__title visually-hidden';
//     moviesSectionTitle.innerHTML = 'All movies. Upcoming';
//     const moviesListWrapper = document.createElement('div');
//     moviesListWrapper.classList = 'films-list__container';
//     moviesContainer.append(moviesList);
//     moviesList.append(moviesSectionTitle);
//     moviesList.append(moviesListWrapper);
//     return moviesContainer;
// };

const createPopupSection = (image, ageRating, title, altTitle, rating, director, writers, actors, releaseDate, runtime, country, genres, descriptionFull) => {
    return (
        `<section class="film-details">
            <form class="film-details__inner" action="" method="get">
                <div class="film-details__top-container">
                    <div class="film-details__close">
                        <button class="film-details__close-btn" type="button">close</button>
                    </div>
                    <div class="film-details__info-wrap">
                        <div class="film-details__poster">
                            <img class="film-details__poster-img" src="${image}" alt="">
                            <p class="film-details__age">${ageRating}</p>
                        </div>
                        <div class="film-details__info">
                            <div class="film-details__info-head">
                                <div class="film-details__title-wrap">
                                    <h3 class="film-details__title">${title}</h3>
                                    <p class="film-details__title-original">${altTitle}</p>
                                </div>
                                <div class="film-details__rating">
                                    <p class="film-details__total-rating">${rating}</p>
                                </div>
                            </div>
                            <table class="film-details__table">
                                <tr class="film-details__row">
                                    <td class="film-details__term">Director</td>
                                    <td class="film-details__cell">${director}</td>
                                </tr>
                                <tr class="film-details__row">
                                    <td class="film-details__term">Writers</td>
                                    <td class="film-details__cell">${writers}</td>
                                </tr>
                                <tr class="film-details__row">
                                    <td class="film-details__term">Actors</td>
                                    <td class="film-details__cell">${actors}</td>
                                </tr>
                                <tr class="film-details__row">
                                    <td class="film-details__term">Release Date</td>
                                    <td class="film-details__cell">${releaseDate}</td>
                                </tr>
                                <tr class="film-details__row">
                                    <td class="film-details__term">Runtime</td>
                                    <td class="film-details__cell">${runtime}</td>
                                </tr>
                                <tr class="film-details__row">
                                    <td class="film-details__term">Country</td>
                                    <td class="film-details__cell">${country}</td>
                                </tr>
                                <tr class="film-details__row">
                                    <td class="film-details__term">Genres</td>
                                    <td class="film-details__cell">
                                        <span class="film-details__genre">${genres}</span>
                                    </td>
                                </tr>
                            </table>
                            <p class="film-details__film-description">${descriptionFull}</p>
                        </div>
                    </div>
                    <section class="film-details__controls">
                        <button type="button" class="film-details__control-button film-details__control-button--watchlist" id="watchlist" name="watchlist">Add to watchlist</button>
                        <button type="button" class="film-details__control-button film-details__control-button--active film-details__control-button--watched" id="watched" name="watched">Already watched</button>
                        <button type="button" class="film-details__control-button film-details__control-button--favorite" id="favorite" name="favorite">Add to favorites</button>
                    </section>
                </div>
            </form>
        </section>`
    );
};

export default class MovieCardPopup {
    constructor(title, altTitle, rating, director, writers, actors, releaseDate, genres, runtime, country, image, descriptionFull, ageRating) {
        this.title = title;
        this.altTitle = altTitle;
        this.rating = rating;
        this.director = director;
        this.writers = writers;
        this.actors = actors;
        this.releaseDate = releaseDate;
        this.genres = genres;
        this.country = country;
        this.runtime = runtime;
        this.image = image;
        this.descriptionFull = descriptionFull;
        this.ageRating = ageRating;
    }

    getTemplate() {
        return createPopupSection(this.image, this.ageRating, this.title, this.altTitle, this.rating, this.director, this.writers, this.actors, this.releaseDate, this.runtime, this.country, this.genres, this.descriptionFull);
    }

    getElement() {
        if (!this.element) {
          this.element = createElement(this.getTemplate());
        }
    
        return this.element;
      }
    
    removeElement() {
        this.element = null;
    }
}