const header__burger = document.querySelector('.menu-bottom-header__burger');
const header__list = document.querySelector('.menu-bottom-header__list');

header__burger.addEventListener("click", function(e) {
	header__burger.classList.toggle("active");
	header__list.classList.toggle("active")
});