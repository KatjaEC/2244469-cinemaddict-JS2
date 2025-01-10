import {createElement} from '../render.js';

const getRating = (moviesWatched) => {
    if (moviesWatched >= 1 && moviesWatched <= 10) {
        return 'Novice';
    } else if (moviesWatched >= 11 && moviesWatched <= 20) {
        return 'Fan';
    } else if (moviesWatched >= 21) {
        return 'Movie Buff';
    }
};

const createRatingTemplate = (moviesWatched) => {
    const rating = getRating(moviesWatched);
    if (rating) {
        return (
        `<section class="header__profile profile">
            <p class="profile__rating">${rating}</p>
            <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
        </section>`
        )
    } else {
        return (
        `<section class="header__profile profile">
            <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
        </section>`
        )
    }
};

export default class RatingView {
    getTemplate() {
        return createRatingTemplate(40);
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
