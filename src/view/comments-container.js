import {comments} from '../mocks/mock-data.js';
import {createElement} from '../render.js';

export const createCommentsContainer = (commentsCount) => {
    return (
        `<div class="film-details__bottom-container">
            <section class="film-details__comments-wrap">
                <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${commentsCount}</span></h3>
                <ul class="film-details__comments-list"></ul>
            </section>
        </div>`
    );
};

export default class CommentContainer {
    getTemplate() { 
        return createCommentsContainer(comments.length);
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