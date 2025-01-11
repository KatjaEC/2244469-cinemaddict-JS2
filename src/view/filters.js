import {createElement} from '../render.js';

const createFilterTemplate = (title, href, counter, classMods) => {
    if (counter) {
        if (classMods) {
            return `<a href="${href}" class="main-navigation__item ${classMods}">${title} <span class="main-navigation__item-count">${counter}</span></a>`;
        } else {
            return `<a href="${href}" class="main-navigation__item">${title} <span class="main-navigation__item-count">${counter}</span></a>`;
        }
    } else {
        if (classMods) {
            return `<a href="${href}" class="main-navigation__item ${classMods}">${title}</a>`;
        } else {
            return `<a href="${href}" class="main-navigation__item">${title}</a>`;
        }
    }
};
export default class FiltersMenu {
    constructor(title, href, counter, classMods) {
        this.title = title;
        this.href = href;
        this.counter = counter;
        this.classMods = classMods;
    }

    getTemplate() { 
        return createFilterTemplate(this.title, this.href, this.counter, this.classMods);
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
