// choice //
const element = document.querySelector(".js-choice");

const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
});

// accordion
new Accordion(".accordion-list", {
  duration: "300",
  elementClass: "accordion",
  triggerClass: "accordion__control",
  panelClass: "accordion__content",
  activeClass: "accordion--active",
});

// tabs
let tabsBtn = document.querySelectorAll(".catalog__name-painter");
let tabsItem = document.querySelectorAll(".catalog__painter");

tabsBtn.forEach(function (element) {
  element.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove("catalog__name-painter--active");
    });
    e.currentTarget.classList.add("catalog__name-painter--active");

    tabsItem.forEach(function (element) {
      element.classList.remove("catalog__painter--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("catalog__painter--active");
  });
});

// swiper
const swiperHero = new Swiper(".hero__swiper", {
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
  },
  effect: "fade",

  loop: true,
});

const swiperGallery = new Swiper(".gallery__swiper", {
  navigation: {
    nextEl: ".gallery__btn-next",
    prevEl: ".gallery__btn-prev",
  },
  pagination: {
    el: ".gallery__pagination",
    type: "fraction",
  },
  loop: true,
  breakpoints: {
    1880: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
    661: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },
  },
});

const swiperEvents = new Swiper(".events__swiper", {
  navigation: {
    nextEl: ".events__btn-next",
    prevEl: ".events__btn-prev",
  },
  autoHeight: true,
  breakpoints: {
    1024: {
      spaceBetween: 27,
      slidesPerView: 3,
      slidesPerGroup: 3,
      pagination: {
        el: ".events__pagination",
        type: "bullets",
        clickable: true,
      },
    },
    601: {
      spaceBetween: 27,
      slidesPerView: 2,
      slidesPerGroup: 2,
      pagination: {
        el: ".events__pagination",
        type: "bullets",
        clickable: true,
      },
    },
    0: {
      spaceBetween: 15,
      slidesPerView: 1,
      slidesPerGroup: 1,
      pagination: {
        el: ".events__pagination",
        type: "bullets",
        clickable: true,
      },
    },
  },
});

const swiperProjects = new Swiper(".projects__swiper", {
  navigation: {
    nextEl: ".projects__btn-next",
    prevEl: ".projects__btn-prev",
  },
  loop: true,
  breakpoints: {
    1025: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    768: {
      spaceBetween: 33,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1: {
      spaceBetween: 15,
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
});

// contacts-form
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

const validation = new JustValidate(".contacts__form", {
  errorLabelStyle: {
    color: "#D11616",
  },
});

validation
  .addField("#name", [
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
      value: 30,
      errorMessage: "Слишком длинное имя",
    },
  ])
  .addField("#tel", [
    {
      rule: "required",
      errorMessage: "Укажите ваш телефон",
    },
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue();
        console.log(phone);
        return Number(phone) && phone.length === 10;
      },
      errorMessage: "Телефон не корректный!",
    },
  ])
  .onSuccess((event) => {
    event.preventDefault();
    form = currentTarget;
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        name: form.name.value,
        phone: form.tel.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => form.reset());
    alert("Ваш заказ: #" + json.id);
  });

// burger
let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__menu");
let menuLinks = menu.querySelectorAll(".header__link");

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

// tippy
tippy("#firstButton", {
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  maxWidth: 163,
});

tippy("#secondButton", {
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  maxWidth: 163,
});

tippy("#thirdButton", {
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  maxWidth: 163,
});

// search desktop
const icon = document.querySelector(".header__form-btn");
const search = document.querySelector(".header__search");
const cancel = document.querySelector(".header__search-cancel");

icon.onclick = function () {
  search.classList.toggle("search--active");
  document.querySelector(".header__burger").style = "display: none";
  document.querySelector(".header__logo").style = "display: none";
};

cancel.onclick = function () {
  search.classList.toggle("search--active");
  document.querySelector(".header__burger").style = "display: inline-block";
  document.querySelector(".header__logo").style = "display: inline-block";
};

clear.onclick = function () {
  document.getElementById("Search").value = "";
};
