import RatingView from './view/user-rating.js'
import FiltersMenu from './view/filters.js';
import SortingOptions from './view/sorting-menu.js';
import MovieCard from './view/movie-card.js';
import ShowMoreBtn from './view/show-more-button.js';
import FooterStats from './view/footer-stats.js';
import {getMoviesSection} from './view/movie-card.js';
import {filters, sortingOptions, movies} from './mocks/mock-data.js';
import {render} from './render.js';

const headerBody = document.querySelector('.header');
const mainBody = document.querySelector('main.main');

const navContainer = document.createElement('nav');
navContainer.classList = 'main-navigation';
mainBody.append(navContainer);

const sortingList = document.createElement('ul');
sortingList.classList = 'sort';
mainBody.append(sortingList);

mainBody.append(getMoviesSection());
const moviesWrapper = document.querySelector('.films-list__container');
const moviesList = document.querySelector('.films-list');

const footerStatsContainer = document.querySelector('.footer__statistics');

render(new RatingView(), headerBody);
filters.forEach((filter) => {
    render(new FiltersMenu(filter.title, filter.href, filter.counter, filter.classMods), navContainer);
});
sortingOptions.forEach((option) => {
    render(new SortingOptions(option.title, option.classMods), sortingList);
});
movies.forEach((movie) => {
    render(new MovieCard(movie.movieInfo.title, movie.movieInfo.rating, movie.movieInfo.year, movie.movieInfo.genre, movie.movieInfo.runtime, movie.movieInfo.image, movie.movieInfo.description, movie.commentsCount), moviesWrapper);
});
render(new ShowMoreBtn(), moviesList);
render(new FooterStats(), footerStatsContainer);
