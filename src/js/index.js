let mapInfoCancel = document.querySelector("#mapInfoCancel");
let mapInfo = document.querySelector("#mapInfo");

mapInfoCancel.addEventListener("click", () => {
  mapInfo.style.display = "none";
});

let searchCancel = document.querySelector("#searchCancel");
let searchOpen = document.querySelector("#searchOpen");
let searchInput = document.querySelector("#searchInput");
let headerMenu = document.querySelector("#headerMenu");

searchOpen.addEventListener("click", () => {
  searchInput.style.display = "block";
  searchOpen.style.display = "none";
  searchCancel.style.display = "block";
  headerMenu.style.display = "none";
});

searchCancel.addEventListener("click", () => {
  searchInput.style.display = "none";
  searchOpen.style.display = "block";
  searchCancel.style.display = "none";
  headerMenu.style.display = "flex";
});

let burgerBtn = document.querySelector("#burger");
let burgerMenu = document.querySelector("#burgerMenu");
let burgerList = document.querySelector("#burgerList");

burgerBtn.addEventListener("click", () => {
  burgerMenu.classList.toggle("header__burger--active");
  burgerBtn.classList.toggle("header__burger-btn--active");
});

function validateForms(selector, rules) {
  new window.JustValidate(selector, {
    rules: rules,
  });
}

validateForms(".contacts__form", {
  email: {
    required: true,
    errorMessage: "Введите корректный email",
    email: true,
  },
  name: { required: true, errorMessage: "Это поле обязательно" },
});

validateForms(".aboutus__form", {
  email: { required: true, email: true },
});
