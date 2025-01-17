import {comments} from '../mocks/mock-data.js';
import {createElement} from '../render.js';

export const createCommentsListContainer = (commentsCount) => {
    return (
        `<div class="film-details__bottom-container">
            <section class="film-details__comments-wrap">
                <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${commentsCount}</span></h3>
                <ul class="film-details__comments-list">
                </ul>
            </section>
        </div>`
    );
};

const createCommentLiElement = (emojiImg, emojiAltText, commentText, commentAuthor, commentDate) => {
    return (
        `<li class="film-details__comment">
            <span class="film-details__comment-emoji">
                <img src="${emojiImg}" width="55" height="55" alt="${emojiAltText}">
            </span>
            <div>
                <p class="film-details__comment-text">${commentText}</p>
                <p class="film-details__comment-info">
                    <span class="film-details__comment-author">${commentAuthor}</span>
                    <span class="film-details__comment-day">${commentDate}</span>
                    <button class="film-details__comment-delete">Delete</button>
                </p>
            </div>
        </li>`
    );
};

export default class popupCommentsEl {
    constructor(emojiImg, emojiAltText, commentText, commentAuthor, commentDate) {
        this.emojiImg = emojiImg;
        this.emojiAltText = emojiAltText;
        this.commentText = commentText;
        this.commentAuthor = commentAuthor;
        this.commentDate = commentDate;
    }

    getTemplate() {
        return createCommentLiElement(this.emojiImg, this.emojiAltText, this.commentText, this.commentAuthor, this.commentDate);
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
