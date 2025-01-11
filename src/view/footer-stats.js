import {createElement} from '../render.js';

let amount = '130 291';

const getStats = (moviesAmount) => {
    if (parseInt(moviesAmount) > 0) {
        return (
            `<p>${moviesAmount} movies inside</p>`
        );
    } else {
        return `<p>0 movies inside</p>`;
    }
};

export default class FooterStats {
    getTemplate() {
        return getStats(amount);
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