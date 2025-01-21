// import SortingContainer from '../view/sorting-options-container.js';
// import SortingOptions from '../view/sorting-options.js';
import MovieCardsContainer from '../view/movie-cards-container.js';
import MovieCard from '../view/movie-card.js';
import ShowMoreBtn from '../view/show-more-button.js';
import MovieCardPopup from '../view/movie-card-popup.js';
import CommentContainer from '../view/comments-container.js';
import PopupCommentsEl from '../view/comments.js';
import NewCommentInputs from '../view/new-comment.js';
import {movies, comments} from '../mocks/mock-data.js';
import {render} from '../render.js';

export default class MovieCardsPresenter {
    // sortingComponent = new SortingContainer();
    movieCardsComponent = new MovieCardsContainer();
    showMoreBtnComponent = new ShowMoreBtn();
    commentsComponent = new CommentContainer();
    commentInputComponent = new NewCommentInputs();

    init = (container) => {
        this.container = container;
        const bodySection = document.querySelector('body');

        // render(this.sortingComponent, this.container);
        // sortingOptions.forEach((option) => {
        //     render(new SortingOptions(option.title, option.classMods), this.sortingComponent.getElement());
        // });
        render(this.movieCardsComponent, this.container);
        const movieCardsWrapper = document.querySelector('.films-list__container');
        movies.forEach((movie) => {
            render(new MovieCard(movie.movieInfo.title, movie.movieInfo.rating, movie.movieInfo.year, movie.movieInfo.genres[0], movie.movieInfo.runtime, movie.movieInfo.image, movie.movieInfo.description, movie.commentsCount), movieCardsWrapper);
        });
        const moviesInnerWrapper = document.querySelector('.films-list');
        render(this.showMoreBtnComponent, moviesInnerWrapper);
        render(new MovieCardPopup(movies[5].movieInfo.title, movies[5].movieInfo.altTitle, movies[5].movieInfo.rating, movies[5].movieInfo.director, movies[5].movieInfo.writers, movies[5].movieInfo.actors, movies[5].movieInfo.releaseDate, movies[5].movieInfo.genres, movies[5].movieInfo.runtime, movies[5].movieInfo.releaseCountry, movies[5].movieInfo.image, movies[5].movieInfo.descriptionFull, movies[5].movieInfo.ageRating), bodySection);
        const commentsWrapper = document.querySelector('.film-details__inner');
        render(this.commentsComponent, commentsWrapper);
        const commentsList = document.querySelector('.film-details__comments-list');
        comments.forEach((comment) => {
            render(new PopupCommentsEl(comment.emojiImage, comment.emojiAltText, comment.commentText, comment.author, comment.date), commentsList);
        });
        const newCommentWrapper = document.querySelector('.film-details__comments-wrap');
        render(this.commentInputComponent, newCommentWrapper);
    };
};
