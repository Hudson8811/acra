import $ from "jquery";

/* FAQ */
$(document).ready(function() {
	$('.faq__subtitle').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});

/* Contacts */
/* btns */
$(".form__btn-email").click(function () {
	$('.form__btn-email').addClass("active");
	$('.form__btn-tel').removeClass("active");
	$('.form__tel').slideUp(500);
	$('.form__email').slideDown(500);
});
$(".form__btn-tel").click(function () {
	$('.form__btn-tel').addClass("active");
	$('.form__btn-email').removeClass("active");
	$('.form__email').slideUp(500);
	$('.form__tel').slideDown(500);
});

let inputs = document.querySelectorAll('.input-question-file');
Array.prototype.forEach.call(inputs, function (input) {
	let label = input.nextElementSibling,
		labelVal = label.querySelector('.input__file-button-text').innerText;

	input.addEventListener('change', function (e) {
		let countFiles = '';
		if (this.files && this.files.length >= 1)
			countFiles = this.files.length;

		if (countFiles)
			label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
		else
			label.querySelector('.input__file-button-text').innerText = labelVal;
	});
});