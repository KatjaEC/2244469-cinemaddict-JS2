import {createElement} from '../render.js';

const createFiltersContainer = () => '<nav class="main-navigation"></nav>';

export default class FiltersContainer {
    getTemplate() { 
        return createFiltersContainer();
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