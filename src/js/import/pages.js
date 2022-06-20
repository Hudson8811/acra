import $ from "jquery";

$(document).ready(function() {
	$('.faq__subtitle').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});

	$('.input-number').keydown(function(e){
		$(this).val('');
	});
	$('.input-number').keyup(function(e){
		let $wrap = $(this).closest('.pincode');
		let $inputs = $wrap.find('input[type="number"]');
		let val = $(this).val();

		if(val == val.replace(/[0-9]/, '')) {
			$(this).val('');
			return false;
		}

		$inputs.eq($inputs.index(this) + 1).focus();
	});
});



var startTimer = (duration, display, mode = 1) => {
	if (display) {
		let timer = duration, minutes, seconds;
		setInterval(function () {
			minutes = parseInt(timer / 60, 10)
			seconds = parseInt(timer % 60, 10);
			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;

			switch (mode) {
			case 1:
				display.textContent = "Код действителен " + minutes + " мин. " + seconds + " сек.";
				break;
			case 2:
				display.textContent = seconds + " секунд вы перейдёте в личный кабинет";
				break;
			case 3:
				display.textContent = "Выслать новый через " + seconds + " сек.";
				break;
			default:
				break;
			}

			if (--timer < 0) {
				timer = duration;
			}
		}, 1000);
	}
}


window.onload = (event) => {
	let oneMinutes = 10,
		display1 = document.querySelector('#time2');
	startTimer(oneMinutes, display1,2);

	let twoMinutes = 59,
		display2 = document.querySelector('#time1');
	startTimer(twoMinutes, display2,3);

	let thirtyMinutes = 60 * 30,
		display3 = document.querySelector('#time');
	startTimer(thirtyMinutes, display3, 1);
};

