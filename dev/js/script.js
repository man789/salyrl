const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper__next',
    prevEl: '.swiper__prev',
  },
});

let burger_btn = document.querySelector('.burger__btn');
let links = document.querySelector('.nav__links');
let link = document.querySelectorAll(".nav__link");

burger_btn.addEventListener("click", hasClick);

for (i = 0; i < link.length; i++) {
  link[i].addEventListener("click", hasClick)
}

function hasClick() {
  links.classList.toggle("active");
}
