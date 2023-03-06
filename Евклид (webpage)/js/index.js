// menu
let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__nav");
let menuLinks = menu.querySelectorAll(".nav__link");

burger.addEventListener(
  "click",

  function () {
    burger.classList.toggle("burger--active");

    menu.classList.toggle("header__nav--active");

    document.body.classList.toggle("stop-scroll");
  }
);

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");

    menu.classList.remove("header__nav--active");

    document.body.classList.remove("stop-scroll");
  });
});

// search
let searchBtn = document.querySelector(".header__btn-search");
let search = document.querySelector(".header__search");
let searchCancel = document.querySelector(".header__search-cancel");

searchBtn.addEventListener("click", function () {
  search.classList.toggle("header__search--active");
});

searchCancel.addEventListener("click", function () {
  search.classList.remove("header__search--active");
});

// swiper
let swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 65,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// tabs
let tabsBtn = document.querySelectorAll(".principless__btn");
let tabsItem = document.querySelectorAll(".principless__tab");

tabsBtn.forEach(function (element) {
  element.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove("principless__btn--active");
    });
    e.currentTarget.classList.add("principless__btn--active");

    tabsItem.forEach(function (element) {
      element.classList.remove("principless__tab--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("principless__tab--active");
  });
});

// accordion
new Accordion(".accordion-list", {
  elementClass: "accordion",
  triggerClass: "accordion__control",
  panelClass: "accordion__content",
  activeClass: "accordion--active",
});

// footer forms
im.mask(selector);

const validation = new JustValidate(".footer__form", {
  errorLabelStyle: {
    color: "#D11616",
  },
});

validation
  .addField(document.querySelector("#name"), [
    {
      rule: "required",
      errorMessage: "Как вас зовут?",
    },
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Не короче 3 символов",
    },
    {
      rule: "maxLength",
      value: 40,
      errorMessage: "Не больше 40 символов",
    },
  ])
  .addField(document.querySelector("#email"), [
    {
      rule: "required",
      errorMessage: "Введите свой email",
    },
    {
      rule: "email",
      errorMessage: "Введите корректный email",
    },
  ]);
