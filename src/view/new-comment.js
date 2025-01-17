import {createElement} from '../render.js';

const createEmojisList = () => {
    return (
        // `<div class="film-details__new-comment">
        //     <div class="film-details__add-emoji-label"></div>
        //     <label class="film-details__comment-label">
        //         <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
        //     </label>
        //     <div class="film-details__emoji-list">
        //     </div>
        // </div>`
        `<div class="film-details__new-comment">
            <div class="film-details__add-emoji-label"></div>

            <label class="film-details__comment-label">
                <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
            </label>

            <div class="film-details__emoji-list">
                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
                <label class="film-details__emoji-label" for="emoji-smile">
                    <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
                <label class="film-details__emoji-label" for="emoji-sleeping">
                    <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
                <label class="film-details__emoji-label" for="emoji-puke">
                    <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
                <label class="film-details__emoji-label" for="emoji-angry">
                    <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
                </label>
            </div>
        </div>`
    );
};

// const createEmojiEl = (emojiImg, inputID, inputValue, checkedStatus) => {
//     return (
//         `<input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="${inputID}" value="${inputValue}" ${checkedStatus}>
//         <label class="film-details__emoji-label" for="${inputID}">
//             <img src="${emojiImg}" width="30" height="30" alt="emoji">
//         </label>`
//     );
// };

export default class newCommentInputs {
    // constructor(emojiImg, inputID, inputValue, checkedStatus) {
    //     this.emojiImg = emojiImg;
    //     this.inputID = inputID;
    //     this.inputValue = inputValue;
    //     this.checkedStatus = checkedStatus;
    // }

    getTemplate() {
        return createEmojisList();
        // return createEmojiEl(this.emojiImg, this.inputID, this.inputValue, this.checkedStatus);
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
