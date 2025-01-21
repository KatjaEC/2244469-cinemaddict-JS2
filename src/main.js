import RatingView from './view/user-rating.js'
import FooterStats from './view/footer-stats.js';
import FiltersPresenter from './presenter/filters-presenter.js';
import SortingPresenter from './presenter/sorting-presenter.js';
import MovieCardsPresenter from './presenter/movie-cards-presenter.js';
import {render} from './render.js';

const headerBody = document.querySelector('.header');
const mainBody = document.querySelector('main.main');

const footerStatsContainer = document.querySelector('.footer__statistics');

render(new RatingView(), headerBody);

const filtersPresenter = new FiltersPresenter();
const movieCardsPresenter = new MovieCardsPresenter();
const sortingPresenter = new SortingPresenter();

filtersPresenter.init(mainBody);
sortingPresenter.init(mainBody);
movieCardsPresenter.init(mainBody);

render(new FooterStats(), footerStatsContainer);
