import SortingContainer from '../view/sorting-options-container.js';
import SortingOptions from '../view/sorting-options.js';
import {sortingOptions} from '../mocks/mock-data.js';
import {render} from '../render.js';

export default class SortingPresenter {
    sortingContainer = new SortingContainer();
    // sortingOptions = new SortingOptions();

    init = (container) => {
        this.container = container;
        const mainBody = document.querySelector('main.main');

        render(this.sortingContainer, this.container);
        sortingOptions.forEach((option) => {
            render(new SortingOptions(option.title, option.classMods), this.sortingContainer.getElement());
        });
    };
};