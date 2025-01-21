import {createElement} from '../render.js';

const createSortingContainer = () => '<ul class="sort"></ul>';

export default class SortingContainer {
    getTemplate() { 
        return createSortingContainer();
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
