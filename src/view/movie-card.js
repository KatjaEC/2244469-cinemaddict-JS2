import {createElement} from '../render.js';

const createCardTemplate = (title, rating, year, genre, runtime, image, description, commentsCount) => {
    return (
        `<article class="film-card">
            <a class="film-card__link">
                <h3 class="film-card__title">${title}</h3>
                <p class="film-card__rating">${rating}</p>
                <p class="film-card__info">
                    <span class="film-card__year">${year}</span>
                    <span class="film-card__duration">${runtime}</span>
                    <span class="film-card__genre">${genre}</span>
                </p>
                <img src="${image}" alt="" class="film-card__poster">
                <p class="film-card__description">${description}</p>
                <span class="film-card__comments">${commentsCount} comments</span>
            </a>
            <div class="film-card__controls">
                <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
                <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
                <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
            </div>
        </article>`
    );
};
export default class MovieCard {
    constructor(title, rating, year, genre, runtime, image, description, commentsCount) {
        this.title = title;
        this.rating = rating;
        this.year = year;
        this.genre = genre;
        this.runtime = runtime;
        this.image = image;
        this.description = description;
        this.commentsCount = commentsCount;
    }

    getTemplate() { 
        return createCardTemplate(this.title, this.rating, this.year, this.genre, this.runtime, this.image, this.description, this.commentsCount);
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
