function getClock() {
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let clockHours = document.getElementById("hours");
	let clockMinutes = document.getElementById("minutes");
	let clockNoons = document.getElementById("noons");

	if(hours > 12) {
		clockHours.innerText = hours - 12;
	} else {
		clockHours.innerText = hours;
	}

	if(minutes < 10) {
		clockMinutes.innerText = "0" + minutes;
	} else {
		clockMinutes.innerText = minutes;
	}

	if(hours >= 12) {
		clockNoons.innerText = "pm";
	} else {
		clockNoons.innerText = "am";
	}
}

window.onload = setInterval(function() {getClock()}, 250);