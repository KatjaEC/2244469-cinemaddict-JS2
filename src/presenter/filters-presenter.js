import FiltersContainer from '../view/filters-container.js';
import FiltersMenu from '../view/filters.js';
import {filters} from '../mocks/mock-data.js';
import {render} from '../render.js';

export default class FiltersPresenter {
    filtersContainer = new FiltersContainer();
    // filtersComponent = new FiltersMenu();

    init = (container) => {
        this.container = container;
        const mainBody = document.querySelector('main.main');

        render(this.filtersContainer, this.container);
        // render(this.filtersComponent, this.container);
        filters.forEach((filter) => {
            render(new FiltersMenu(filter.title, filter.href, filter.counter, filter.classMods), this.filtersContainer.getElement());
        });
    };
};