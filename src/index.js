import "./css/styles.css"
import { iconRender } from './iconRender';
import Swiper from 'swiper';
import Swiper, { Navigation, Pagination } from 'swiper';




const listIcon = document.querySelector('.list-icon');
const icomList = document.querySelector('.icon-list');
const swiperScroll = document.querySelector('.swiper-scrollbar');
const swiperContainer = document.querySelector('.swiper');
const itemsMarkup = rendarListIcon(iconRender);
listIcon.insertAdjacentHTML('beforeend', itemsMarkup);


function rendarListIcon (iconRender) {
      return iconRender.map(({ url, img }) => {
     return `
        <li class='icon-list swiper-slide'>  
        <a class="sl" href="${url}">
        
        <img class="fl" src="${img}">
        </a>
        </li>
        `
}).join('');
}
{/* <p>${index < 11 ? '0' + (index + 1) : index}</p>  */}
 

new Swiper(swiperContainer, {
   direction: 'vertical',
   loop: true,
   modules: [Navigation, Pagination],
   slidesPerView: 4, // показывать по 3 превью
   spaceBetween: 20, // расстояние между слайдами
   freeMode: true, // при перетаскивании превью ведет себя как при скролле
   loop: true,
   navigation: {
      nextEl: '.swiper-button-next',
    },
   
});




