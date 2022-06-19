
const form__button__front = document.querySelector('.form__button-front');
form__button__front.addEventListener('click', function () {
	const deadline = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
	
	let timerId = null;
	
	function countdownTimer() {
		const diff = deadline - new Date();
		if (diff <= 0) {
			clearInterval(timerId);
		}
		const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
		const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
		$minutes.textContent = minutes < 0 ? '0' + minutes : minutes;
		$seconds.textContent = seconds < 0 ? '0' + seconds : seconds;
	}
	
	const $minutes = document.querySelector('.timer__minutes');
	const $seconds = document.querySelector('.timer__seconds');
	countdownTimer();
	timerId = setInterval(countdownTimer, 1000);


	const deadline1 = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
	let timerId1 = null;
	function countdownTimer1() {
		const diff = deadline1 - new Date();
		if (diff <= 0) {
			clearInterval(timerId1);
		}
		const seconds1 = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
		$seconds1.textContent = seconds1 < 0 ? '0' + seconds1 : seconds1;
	}
	const $seconds1 = document.querySelector('.timer__seconds1');
	countdownTimer1();
	timerId1 = setInterval(countdownTimer1, 1000);
});