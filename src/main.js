import RatingView from './view/user-rating.js'
import FiltersMenu from './view/filters.js';
import SortingOptions from './view/sorting-menu.js';
import MovieCard from './view/movie-card.js';
import ShowMoreBtn from './view/show-more-button.js';
import FooterStats from './view/footer-stats.js';
import MovieCardPopup from './view/movie-info-popup.js';
import popupCommentsEl from './view/comments.js';
import newCommentInputs from './view/new-comment.js';
import {getMoviesSection} from './view/movie-card.js';
import {createCommentsListContainer} from './view/comments.js';
// import {createEmojisContainer} from './view/new-comment.js';
import {filters, sortingOptions, movies, comments, emojis} from './mocks/mock-data.js';
import {createElement, render} from './render.js';

const headerBody = document.querySelector('.header');
const mainBody = document.querySelector('main.main');
const bodySection = document.querySelector('body');

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

// movies.forEach((movie) => {
//     render(new MovieCardPopup(movie.movieInfo.title, movie.movieInfo.altTitle, movie.movieInfo.rating, movie.movieInfo.director, movie.movieInfo.writers, movie.movieInfo.actors, movie.movieInfo.releaseDate, movie.movieInfo.genres, movie.movieInfo.runtime, movie.movieInfo.country, movie.movieInfo.image, movie.movieInfo.descriptionFull, movie.commentsIDs.length, movie.movieInfo.ageRating), bodySection);
// });

render(new MovieCardPopup(movies[5].movieInfo.title, movies[5].movieInfo.altTitle, movies[5].movieInfo.rating, movies[5].movieInfo.director, movies[5].movieInfo.writers, movies[5].movieInfo.actors, movies[5].movieInfo.releaseDate, movies[5].movieInfo.genres, movies[5].movieInfo.runtime, movies[5].movieInfo.releaseCountry, movies[5].movieInfo.image, movies[5].movieInfo.descriptionFull, movies[5].movieInfo.ageRating), bodySection);

const cardPopupForm = document.querySelector('.film-details__inner');
const commentsListContainer = createElement(createCommentsListContainer(comments.length));
cardPopupForm.append(commentsListContainer);
const commentsWrapper = document.querySelector('.film-details__comments-wrap');
const commentsList = document.querySelector('ul.film-details__comments-list');
commentsListContainer.append(commentsWrapper);
commentsWrapper.append(commentsList);

comments.forEach((comment) => {
    render(new popupCommentsEl(comment.emojiImage, comment.emojiAltText, comment.commentText, comment.author, comment.date), commentsList);
});

// const newCommentContainer = createElement(createEmojisContainer());
// commentsWrapper.append(newCommentContainer);
// const emojisListContainer = document.querySelector('.film-details__emoji-list');

// emojis.forEach((emoji) => {
//     render(new newCommentInputs(emoji.emojiImage, emoji.id, emoji.value, emoji.checkedStatus), emojisListContainer);
// });

render(new newCommentInputs, commentsWrapper)

render(new ShowMoreBtn(), moviesList);

render(new FooterStats(), footerStatsContainer);
