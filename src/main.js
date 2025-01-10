import RatingView from './view/user-rating.js'
import {render} from './render.js';

const headerBody = document.querySelector('.header');

render(new RatingView(), headerBody);
