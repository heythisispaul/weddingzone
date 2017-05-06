
var weddingDate = new Date("Apr 14, 2018 16:30:00").getTime();
var x = setInterval(function() {
	var now = new Date().getTime();
	var distance = weddingDate - now;
	var days = Math.floor(distance / (1000 * 60 * 60 *24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	var minutesText = " minutes ";
	var hoursText = " hours ";
	var daysText = " days ";

	document.getElementById("counter").innerHTML = days + daysText + hours + hoursText + minutes + minutesText + seconds + " seconds";

	if (distance < 0) {
		clearInterval(x);
		document.getElementById("counter").innerHTML = "WEDDING ZONE ACTIVATED";
	} 

	//This section doesn't work for some reason. Also when I try to console.log() minutesText, hoursText, etc they come up as undefined?
	if (minutes < 25) {
		minutesText = " minute ";
	} 
	if (hours < 2) {
		hoursText = " hour ";
	}
	if (days < 2) {
		daysText = " day ";
	}
}, 1000);


function play_pause() {
	var myAudio = document.getElementById("myAudio");
	if (myAudio.paused) {
		myAudio.play();
	} 
	else {
		myAudio.pause();
	}
}