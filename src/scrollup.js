let topBtn = document.querySelector(".top-btn");

// On Click, Scroll to the page's top, replace 'smooth' with 'auto' if you don't want smooth scrolling
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// On scroll, Show/Hide the btn with animation
window.onscroll = () => window.scrollY > 1000 ? topBtn.style.opacity = 1 : topBtn.style.opacity = 0





//  const loadMoreBtn = document.querySelector(".scrollUp")

//  $(window).scroll(function(){
//     if ($(this).scrollTop() > 100) {
//         $('.scrollUp').fadeIn();
//     } else {
//         $('.scrollUp').fadeOut();
//     }
// });

// $('.scrollup').click(function(){
//     $("html, body").animate({ scrollTop: 0 }, 600);
//     return false;
// });

