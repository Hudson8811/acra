import $ from "jquery";

$(".menu-bottom-header__burger").click(function () {
	$('.menu-bottom-header__burger, .menu-bottom-header__list').toggleClass("active");
});