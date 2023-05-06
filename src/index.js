import "./css/styles.css"
import { iconRender } from './iconRender';
import Swiper from 'swiper';
import Swiper, { Navigation, Pagination } from 'swiper';
// import 'node_modules/modern-normalize/modern-normalize.css';


const listIcon = document.querySelector('.list-icon');
const icomList = document.querySelector('.icon-list');
const swiperScroll = document.querySelector('.swiper-scrollbar');
const containerUkraine = document.querySelector('.container-ukraine');
const swiperContainer = document.querySelector('.swiper');
const itemsMarkup = rendarListIcon(iconRender);
listIcon.insertAdjacentHTML('beforeend', itemsMarkup);


function rendarListIcon (iconRender) {
      return iconRender.map(({title, url, img }) => {
         
     return `
        <li class='icon-list swiper-slide'> 
        <p class="title">${title}</p>
        <a class="sl" href="${url}">
        <img class="fl" src="${img}">
        </a>
        </li>
        `
}).join('');
}
   
 

new Swiper(swiperContainer, {
   
   direction: 'vertical',
   modules: [Navigation, Pagination],
   slidesPerView: 6, // показывать по 3 превью
   spaceBetween: 20, // расстояние между слайдами
   freeMode: true, // при перетаскивании превью ведет себя как при скролле
   loop: true,
   navigation: {
      nextEl: '.swiper-button-next',
    },
   
});




