

import { Item } from '../component/item.js';
import { movies } from './db.js';

const ul = document.querySelector('.promo__interactive-list');


ul.innerHTML = '';

movies.forEach(movie => {
    const movieItem = Item(movie);
    ul.append(movieItem);
});
