
import { iconRender } from './iconRender';


const listIcon = document.querySelector('.list-icon');
const itemsMarkup = rendarListIcon(iconRender);
listIcon.insertAdjacentHTML('beforeend', itemsMarkup);

function rendarListIcon (iconRender) {
      return iconRender.map(({title, url, img}) => {
     return `
        <li>
        <a class="" href="${url}">
        <img class="" src="${img}">
        </a>
        </li>
        
        `
}).join('');
   //  listIcon.insertAdjacentHTML('beforeend', iconRender.join(''));
}
