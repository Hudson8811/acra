import $ from "jquery";





/* FAQ */
$(document).ready(function() {
	$('.faq__subtitle').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});



$('.input-number').keydown(function(e){
	$(this).val('');
});
$('.input-number').keyup(function(e){
	var $wrap = $(this).closest('.pincode');
	var $inputs = $wrap.find('input[type="number"]');	
	var val = $(this).val();
	
	if(val == val.replace(/[0-9]/, '')) {
		$(this).val('');
		return false;
	}
	
	$inputs.eq($inputs.index(this) + 1).focus();
});




function startTimer(duration, display) {
	var timer = duration, minutes, seconds;
	setInterval(function () {
		minutes = parseInt(timer / 60, 10)
		seconds = parseInt(timer % 60, 10);
		
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		
		display.textContent = "Код действителен " + minutes + " мин. " + seconds + " сек.";
		
		if (--timer < 0) {
			timer = duration;
		}
	}, 1000);
}
function startTimer1(duration, display) {
	var timer = duration, minutes, seconds;
	setInterval(function () {
		seconds = parseInt(timer % 60, 10);
		
		seconds = seconds < 10 ? "0" + seconds : seconds;
		
		display.textContent = "Выслать новый через " + seconds + " сек.";
		
		if (--timer < 0) {
			timer = duration;
		}
	}, 1000);
}
function startTimer2(duration, display) {
	var timer = duration, minutes, seconds;
	setInterval(function () {
		seconds = parseInt(timer % 60, 10);
		
		seconds = seconds < 10 ? "0" + seconds : seconds;
		
		display.textContent = seconds + " секунд вы перейдёте в личный кабинет";
		
		if (--timer < 0) {
			timer = duration;
		}
	}, 1000);
}


window.onload = function () {
	var oneMinutes = 10 * 1,
		display = document.querySelector('#time2');
	startTimer2(oneMinutes, display);

	var oneMinutes = 59 * 1,
		display = document.querySelector('#time1');
	startTimer1(oneMinutes, display);

	var thirtyMinutes = 60 * 30,
		display1 = document.querySelector('#time');
	startTimer(thirtyMinutes, display1);
};



function playClipblock(media) {
	media.play();
}
function stopClipblock(media) {
	media.pause();
}

var video__playerblock = document.getElementById("block-video__player");
const playblock = document.querySelector('.block-video__img');
const pauseblock = document.querySelector('.block-video__pause');
const block__video__body = document.querySelector('.block-video__play-btn');
const block__video__frame = document.querySelector('.block-video__frame');

playblock.addEventListener("click", function(e) {
	playClipblock(video__playerblock);
	this.classList.add('hide');
	block__video__body.classList.add('hide');
	block__video__frame.classList.add('hide');
});
pauseblock.addEventListener("click", function (e) {
	stopClipblock(video__playerblock);
	playblock.classList.remove('hide');
	block__video__body.classList.remove('hide');
	block__video__frame.classList.remove('hide');
});
