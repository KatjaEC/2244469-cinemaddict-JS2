import {createElement} from '../render.js';

const createSortingTemplate = (title, classMods) => {
    if (classMods) {
        return `<li><a href="#" class="sort__button ${classMods}">${title}</a></li>`
    } else {
        return `<li><a href="#" class="sort__button">${title}</a></li>`
    }
};

export default class SortingOptions {
    constructor(title, classMods) {
        this.title = title;
        this.classMods = classMods;
    }

    getTemplate() { 
        return createSortingTemplate(this.title, this.classMods);
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
