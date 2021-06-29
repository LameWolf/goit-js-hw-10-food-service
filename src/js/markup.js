import foods from '../templates/food-card.hbs';
import menu from './menu.json';

const foodList = document.querySelector('.js-menu');
const menuMarkup = createMenuMarkup(menu);

foodList.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuMarkup(menu) {
  return menu.map(foods).join('');
}
