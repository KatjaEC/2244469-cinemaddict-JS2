import {createElement} from '../render.js';

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

export default class PopupCommentsEl {
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
