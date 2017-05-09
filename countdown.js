
var weddingDate = new Date("Apr 14, 2018 16:30:00").getTime(); //sets the date for the wedding
var x = setInterval(function() { // everything is in a function that is set to an interval. The interval is 1 second (1000 mililseconds).
	var now = new Date().getTime(); // gets today's date/time.
	var distance = weddingDate - now; // how much time remains.
	// the below calculates the hours, minutes, etc in milliseconds.
	var days = Math.floor(distance / (1000 * 60 * 60 *24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	// I couldn't get this to work. I wanted it to display the singular of the word when appropriate.
	var minutesText = " minutes ";
	var hoursText = " hours ";
	var daysText = " days ";

	document.getElementById("counter").innerHTML = days + daysText + hours + hoursText + minutes + minutesText + seconds + " seconds";

	if (distance < 0) { //if the countdown reaches zero then it stops the countdown interval and displays the below text.
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


function play_pause() { //Callback function that runs when the play/pause button is pressed.
	var myAudio = document.getElementById("myAudio");
	if (myAudio.paused) { //if called when the song is paused - play.
		myAudio.play();
	} 
	else {
		myAudio.pause(); // otherwise pause the song.
	}
}

function rsvp() { // provides an alert after hitting the submit button on the form.
	alert("Thank you for your response!");
}