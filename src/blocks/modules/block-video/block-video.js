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

function playClipblock(media) {
	media.play();
}
function stopClipblock(media) {
	media.pause();
}